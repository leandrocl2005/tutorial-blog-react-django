from rest_framework.response import Response
from .serializers import UserSerializer
from .models import User
from rest_framework.decorators import api_view

@api_view(['GET'])
def getAllUsers(request):
  users = User.objects.all()
  users_serializer = UserSerializer(users, many=True)
  return Response(users_serializer.data)