"""
Views for history API with file-based JSON persistence.
"""

import json
import os
from pathlib import Path
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


def get_history_file_path():
    """Get the path to the history JSON file."""
    return settings.HISTORY_FILE


def read_history():
    """Read history from JSON file."""
    file_path = get_history_file_path()
    if not file_path.exists():
        # Ensure data directory exists
        file_path.parent.mkdir(parents=True, exist_ok=True)
        with open(file_path, 'w') as f:
            json.dump([], f)
        return []
    
    try:
        with open(file_path, 'r') as f:
            return json.load(f)
    except (json.JSONDecodeError, IOError):
        return []


def write_history(data):
    """Write history to JSON file."""
    file_path = get_history_file_path()
    file_path.parent.mkdir(parents=True, exist_ok=True)
    with open(file_path, 'w') as f:
        json.dump(data, f, indent=2)


class HistoryListView(APIView):
    """
    GET: List all history records
    POST: Add a new history record
    """
    
    def get(self, request):
        history = read_history()
        return Response(history)
    
    def post(self, request):
        history = read_history()
        new_record = request.data
        
        # Ensure record has an ID
        if 'id' not in new_record:
            import time
            new_record['id'] = str(int(time.time() * 1000))
        
        # Add to beginning of list (newest first)
        history.insert(0, new_record)
        write_history(history)
        
        return Response(new_record, status=status.HTTP_201_CREATED)


class LatestResultView(APIView):
    """
    GET: Get the latest result
    """
    
    def get(self, request):
        history = read_history()
        if history:
            return Response(history[0])
        return Response(None, status=status.HTTP_404_NOT_FOUND)


class HistoryDetailView(APIView):
    """
    GET: Get a specific history record
    DELETE: Delete a specific history record
    """
    
    def get(self, request, record_id):
        history = read_history()
        for record in history:
            if record.get('id') == record_id:
                return Response(record)
        return Response({'error': 'Not found'}, status=status.HTTP_404_NOT_FOUND)
    
    def delete(self, request, record_id):
        history = read_history()
        original_length = len(history)
        history = [r for r in history if r.get('id') != record_id]
        
        if len(history) == original_length:
            return Response({'error': 'Not found'}, status=status.HTTP_404_NOT_FOUND)
        
        write_history(history)
        return Response(status=status.HTTP_204_NO_CONTENT)


class SeenQuestionsView(APIView):
    """
    GET: Get unique question IDs that have been seen in history
    """
    
    def get(self, request):
        history = read_history()
        seen_ids = set()
        
        for record in history:
            questions = record.get('questions', [])
            for question in questions:
                q_id = question.get('id')
                if q_id is not None:
                    seen_ids.add(q_id)
        
        return Response({'seen_question_ids': list(seen_ids)})


class AlwaysIncorrectQuestionsView(APIView):
    """
    GET: Get question IDs that have been attempted but never answered correctly.
    These are questions the user needs to pay attention to.
    """
    
    def get(self, request):
        history = read_history()
        
        # Track for each question: has it ever been answered correctly?
        question_correct_status = {}  # {question_id: True if ever correct, False otherwise}
        
        for record in history:
            questions = record.get('questions', [])
            answers = record.get('answers', {})
            
            for question in questions:
                q_id = question.get('id')
                if q_id is None:
                    continue
                    
                q_id_str = str(q_id)
                correct_response = question.get('correct_response', [])
                user_answer = answers.get(q_id_str, [])
                
                # Check if user answered correctly (sorted comparison)
                is_correct = sorted(user_answer) == sorted(correct_response)
                
                # If ever answered correctly, mark as True
                if q_id not in question_correct_status:
                    question_correct_status[q_id] = is_correct
                elif is_correct:
                    question_correct_status[q_id] = True
        
        # Get questions that have been attempted but NEVER answered correctly
        always_incorrect_ids = [
            q_id for q_id, ever_correct in question_correct_status.items()
            if not ever_correct
        ]
        
        return Response({'always_incorrect_ids': always_incorrect_ids})
