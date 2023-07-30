from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinLengthValidator


# Create your models here.
class Products(models.Model):
    name = models.CharField(max_length=50, unique=True)
    description = models.TextField(max_length=65000, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class User(AbstractUser):
    first_name = models.CharField(max_length=255, validators=[MinLengthValidator(3)])
    last_name = models.CharField(max_length=255, validators=[MinLengthValidator(3)])
    email = models.EmailField(max_length=255, unique=True)
    is_active = models.BooleanField(default=True)
    username = None
    password = models.CharField(max_length=128)
    password2 = models.CharField(max_length=128, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email
