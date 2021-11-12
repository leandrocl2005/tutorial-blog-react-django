from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
  avatar = models.ImageField(null=True, 
    blank=True, default='/placeholder.png')
  tech = models.CharField(max_length=222, null=True,
    blank=True, default='')
  github_username = models.CharField(max_length=222, null=True,
    blank=True, default='')
  instagram_username = models.CharField(max_length=222, null=True,
    blank=True, default='')
  linkedin_username = models.CharField(max_length=222, null=True,
    blank=True, default='')
