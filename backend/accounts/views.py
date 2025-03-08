from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import UserRegisterationSerializer, UserLoginSerializer, CustomUserSerializer

@api_view(['POST'])
@permission_classes([AllowAny])
def user_registration_view(request):
    serializer = UserRegisterationSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()
    token = RefreshToken.for_user(user)
    data = serializer.data
    data['tokens'] = {'refresh': str(token), 'access': str(token.access_token)}
    return Response(data, status=status.HTTP_201_CREATED)

@api_view(['POST'])
@permission_classes([AllowAny])
def user_login_view(request):
    serializer = UserLoginSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.validated_data
    user_serializer = CustomUserSerializer(user)
    token = RefreshToken.for_user(user)
    data = user_serializer.data
    data['tokens'] = {'refresh': str(token), 'access': str(token.access_token)}
    return Response(data, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_logout_view(request):
    try:
        refresh_token = request.data['refresh']
        token = RefreshToken(refresh_token)
        token.blacklist()
        return Response(status=status.HTTP_205_RESET_CONTENT)
    except Exception as e:
        return Response(status=status.HTTP_400_BAD_REQUEST)




































# from django.shortcuts import render
# from rest_framework.generics import GenericAPIView
# from rest_framework.permissions import AllowAny,IsAuthenticated
# from .serializers import *
# from rest_framework_simplejwt.tokens import RefreshToken
# from rest_framework.response import Response
# from rest_framework import status
# # Create your views here.


# class UserRegisterationAPIView(GenericAPIView):
#     permission_classes=(AllowAny,)
#     serializer_class=UserRegisterationSerializer
#     def post(self,request,*args,**kwargs):
#         serializer=self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         user=serializer.save()
#         token=RefreshToken.for_user(user)
#         data=serializer.data
#         data["tokens"]={"refresh":str(token),"access":str(token.access_token)}
#         return Response(data,status=status.HTTP_201_CREATED)
# class UserloginAPIView(GenericAPIView):
#     permission_classes=(AllowAny,)
#     serializer_class = UserLoginSerializer
#     def post(self,request,*args,**kwargs):
#         serializer=self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         user =serializer.validated_data
#         serializer=CustomUserSerializer(user)
#         token=RefreshToken.for_user(user)
#         data=serializer.data
#         data["tokens"]={"refresh":str(token),"access":str(token.access_token)}
#         return Response(data,status=status.HTTP_200_OK)
# class UserlogoutAPIView(GenericAPIView):
#     permission_classes=[IsAuthenticated]
#     def post(self,request,*args,**kwargs):
#         try:
#             refresh_token=request.data['refresh']
#             token=RefreshToken(refresh_token)
#             token.blacklist()
#             return Response(status=status.HTTP_205_RESET_CONTENT)
#         except Exception as e:
#             return Response(status=status.HTTP_400_BAD_REQUEST)