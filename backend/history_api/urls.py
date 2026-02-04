"""
URL patterns for history API.
"""

from django.urls import path
from . import views

urlpatterns = [
    path('history/', views.HistoryListView.as_view(), name='history-list'),
    path('history/latest/', views.LatestResultView.as_view(), name='history-latest'),
    path('history/seen-questions/', views.SeenQuestionsView.as_view(), name='history-seen-questions'),
    path('history/always-incorrect/', views.AlwaysIncorrectQuestionsView.as_view(), name='history-always-incorrect'),
    path('history/<str:record_id>/', views.HistoryDetailView.as_view(), name='history-detail'),
]
