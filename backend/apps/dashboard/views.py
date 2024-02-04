from django.shortcuts import render, redirect
from django.contrib import auth
from django.contrib.auth.models import User

from rest_framework import status
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.authtoken.models import Token
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi

def register(request):
    if request.method == 'POST':
        # Get form values
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        password2 = request.POST['password2']
        
        # Validation
        if password == password2:
            # Check username
            if User.objects.filter(username=username).exists():
                print(request, 'Username already in use')
                return redirect('register')
            else:
                if User.objects.filter(email=email).exists():
                    print(request, 'Email already in use')
                    return redirect('register')
                else:
                    #Success
                    user = User.objects.create_user(
                        username = username,
                        email = email,
                        password= password,
                        first_name = first_name,
                        last_name = last_name)
                    
                    # Redirect to login
                    user.save()
                    print(request, 'Registered successfully')
                    return redirect('login')
        else:
            print(request, 'Passwords do not match')
            return redirect('register')

    else:
        return render(request, 'dashboard/register.html')


@swagger_auto_schema(
    method='post',
    request_body=openapi.Schema(
        type=openapi.TYPE_OBJECT,
        required=['name', 'password'],
        properties={
            'name': openapi.Schema(type=openapi.TYPE_STRING),
            'password': openapi.Schema(type=openapi.TYPE_STRING)
        }
    ),
    responses={
        200: 'OK',
        401: 'Unauthorized'
    }
)

@api_view(['POST'])
def login(request):  
    username = request.data['name']
    password = request.data['password']
    
    user = auth.authenticate(username=username, password=password)

    if user is not None:
        # create or get token for user
        token, created = Token.objects.get_or_create(user=user)
        auth.login(request, user)
        print('Login successful')
        # return token and status to client
        return Response({'token':token.key}, status=status.HTTP_200_OK)
    else:
        print('Login unsuccessful')
        return Response(status=status.HTTP_401_UNAUTHORIZED)

@swagger_auto_schema(
    method='post',
    responses={
        200: 'OK'
    }
)
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout(request):
    auth.logout(request)
    print(request, 'Logout successful')
    return Response(status=status.HTTP_200_OK)
