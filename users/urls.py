from django.urls import path

from . import views


urlpatterns = [
  path('', views.getAllUsers, name='get_all_users'),
]