# Generated by Django 3.2.9 on 2021-11-12 19:29

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(auto_created=True)),
                ('title', models.CharField(max_length=222)),
                ('image', models.ImageField(upload_to='')),
                ('tag', models.CharField(max_length=22)),
                ('youtubeId', models.CharField(max_length=12)),
                ('description', models.TextField()),
                ('professor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]