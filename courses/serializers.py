from rest_framework import serializers
from .models import Course

class CourseSerializer(serializers.ModelSerializer):
  professor_full_name = serializers.ReadOnlyField()
  class Meta:
    fields = '__all__'
    model = Course