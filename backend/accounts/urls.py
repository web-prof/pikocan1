from django.urls import path
from .views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('register/',UserRegisterationAPIView.as_view(),name="register_user"),
    path('login/',UserloginAPIView.as_view(),name="login_user"),
    path('logout/',UserlogoutAPIView.as_view(),name="logout_user"),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

