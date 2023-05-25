from rest_framework import viewsets
from rest_framework import filters
from .models import MediaContent
from .models import User
from .serializers import MediaContentSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db import IntegrityError

class MediaContentViewSet(viewsets.ModelViewSet):
    queryset = MediaContent.objects.all()
    serializer_class = MediaContentSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['Metadata']



class RegisterView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')
        role = request.data.get('role')
        
        if not username or not password or not email or not role:
            return Response(
                data={
                    "message": "username, password, email and role are required to register a user"
                },
                status=status.HTTP_400_BAD_REQUEST
            )
        try:
            user = User.objects.get(login=username)
            return Response(
            data={
                "message": "A user with this username already exists."
             },
            status=status.HTTP_400_BAD_REQUEST
        )
        except User.DoesNotExist:
            user = User.objects.create(login=username, password=password, email=email, role=role)
            return Response(data={
            "message": "User registered successfully"
        }, status=status.HTTP_201_CREATED)
    
        
        
    
class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        
        if not username or not password:
            return Response(
                data={
                    "message": "username and password is required to login a user"
                },
                status=status.HTTP_400_BAD_REQUEST
            )
        try:
            user = User.objects.get(login=username)
            if user.password != password:
                raise User.DoesNotExist
        except User.DoesNotExist:
            return Response(
                data={
                    "message": "Invalid username or password"
                },
                status=status.HTTP_401_UNAUTHORIZED
            )
        #login(request, user)
        return Response(data={
            "message": "User logged in successfully"
        }, status=status.HTTP_200_OK)
