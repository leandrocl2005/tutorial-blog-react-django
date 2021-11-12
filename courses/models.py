from django.db import models
from users.models import User

# Create your models here.
class Course(models.Model):

  title = models.CharField(max_length=222)
  image = models.ImageField()
  tag = models.CharField(max_length=22)
  youtubeId = models.CharField(max_length=12)
  professor = models.ForeignKey(User, on_delete=models.CASCADE)
  date = models.DateField(auto_created=True)
  description = models.TextField()

  @property
  def professor_full_name(self):
    return self.professor.first_name + " " + self.professor.last_name

  def __str__(self):
    return self.title