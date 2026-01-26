"""
URL configuration for the project.
"""

from django.urls import path, include

urlpatterns = [
    path('api/', include('history_api.urls')),
]
