from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):

  class Meta:
    fields = ('id', 'first_name', 'last_name', 'avatar', 'tech', 
      'github_username', 'instagram_username', 'linkedin_username'
    )
    model = User