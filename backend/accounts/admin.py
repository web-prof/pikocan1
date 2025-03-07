from django.contrib import admin
from django.contrib.auth.models import User
from .models import CustomUser
from .forms import *
from django.contrib.auth.admin import UserAdmin


# Register your models here.
@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    add_form=CustomUserCreationForm
    form=customUserChangeForm
    model=CustomUser
    # fieldsets = UserAdmin.fieldsets + ((None, {"fields": ["custom_field"]}),)
    # add_fieldsets = UserAdmin.add_fieldsets + ((None, {"fields": ["custom_field"]}),)