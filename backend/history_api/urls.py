"""
URL patterns for history API.
"""

from django.urls import path
from . import views

urlpatterns = [
    path('history/', views.HistoryListView.as_view(), name='history-list'),
    path('history/latest/', views.LatestResultView.as_view(), name='history-latest'),
    path('history/<str:record_id>/', views.HistoryDetailView.as_view(), name='history-detail'),
]
