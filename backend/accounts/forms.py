from django.contrib.auth.forms import UserCreationForm,UserChangeForm
from accounts.models import CustomUser


class CustomUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = CustomUser
        fields=("email",)
        # fields = UserCreationForm.Meta.fields + ("email",)
class customUserChangeForm(UserChangeForm):
    class Meta:
        model= CustomUser
        fields=("email",)