from django.contrib import admin
from django.contrib import auth
from .models import User
from django.contrib.auth import admin as auth_admin
from .forms  import UserCreationForm, UserChangeForm

# Register your models here.
@admin.register(User)
class UserAdmin(auth_admin.UserAdmin):
  form = UserChangeForm
  add_form = UserCreationForm
  model = User
  fieldsets = auth_admin.UserAdmin.fieldsets + (
    ('Campos personalizados', {'fields': (
      'avatar', 
      'tech', 
      'github_username', 
      'instagram_username', 
      'linkedin_username'
    )})
  ,)