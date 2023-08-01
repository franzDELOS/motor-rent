from django.contrib import admin
from api.models import Products, User

# Register your models here.
admin.site.register([Products, User])
