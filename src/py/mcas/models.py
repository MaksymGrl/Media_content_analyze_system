from django.db import models

class User(models.Model):
    Id = models.AutoField(primary_key=True)
    login = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    email = models.EmailField()
    role = models.CharField(max_length=255)

    class Meta:
        db_table = 'user'
        
class MediaContent(models.Model):
    Id = models.AutoField(primary_key=True)
    Type = models.TextField(max_length=255)
    URL = models.TextField(max_length=255)
    Duration = models.TimeField()
    Metadata = models.TextField()

    class Meta:
        db_table = 'mediacontent'
