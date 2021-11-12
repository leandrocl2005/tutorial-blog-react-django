from django.urls import path
from . import views

urlpatterns = [
  path('', views.getAllCourses, name="get_all_courses"),
  path('<int:pk>/', views.getSingleCourse, name="get_single_course")
]