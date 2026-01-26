import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import ExamView from '../components/ExamView';
import ReviewView from '../components/ReviewView';

const Quiz = () => {
    const { state, dispatch } = useQuiz();
    const navigate = useNavigate();
    const { session } = state;

    useEffect(() => {
        if (!session.active) {
            navigate('/');
        }
    }, [session.active, navigate]);

    // Timer Logic
    useEffect(() => {
        if (session.mode === 'exam' && !session.isFinished && !session.isPaused && session.timeLeft > 0) {
            const interval = setInterval(() => {
                dispatch({ type: 'TICK_TIMER' });
            }, 1000);
            return () => clearInterval(interval);
        } else if (session.mode === 'exam' && session.timeLeft <= 0 && !session.isFinished) {
            dispatch({ type: 'FINISH_EXAM' });
            navigate('/result');
        }
    }, [session.mode, session.timeLeft, session.isFinished, session.isPaused, dispatch, navigate]);

    if (!session.active) return null;

    return (
        <div className="w-full max-w-[90vw] mx-auto px-4 h-[calc(100vh-80px)] overflow-hidden">
            {session.mode === 'exam' ? <ExamView /> : <ReviewView />}
        </div>
    );
};

export default Quiz;
