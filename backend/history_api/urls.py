"""
URL patterns for history API.
All endpoints are scoped by course_id: history/<course_id>/...
"""

from django.urls import path
from . import views

urlpatterns = [
    path('history/<str:course_id>/', views.HistoryListView.as_view(), name='history-list'),
    path('history/<str:course_id>/latest/', views.LatestResultView.as_view(), name='history-latest'),
    path('history/<str:course_id>/seen-questions/', views.SeenQuestionsView.as_view(), name='history-seen-questions'),
    path('history/<str:course_id>/always-incorrect/', views.AlwaysIncorrectQuestionsView.as_view(), name='history-always-incorrect'),
    path('history/<str:course_id>/<str:record_id>/', views.HistoryDetailView.as_view(), name='history-detail'),
]
