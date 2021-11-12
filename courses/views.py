from rest_framework.decorators import api_view
from .models import Course
from .serializers import CourseSerializer
from rest_framework.response import Response

@api_view(['GET'])
def getAllCourses(request):
  courses = Course.objects.all()
  courses_serializer = CourseSerializer(courses, many=True)
  return Response(courses_serializer.data)

@api_view(['GET'])
def getSingleCourse(request, pk):
  course = Course.objects.get(pk=pk)
  course_serializer = CourseSerializer(course, many=False)
  return Response(course_serializer.data)
