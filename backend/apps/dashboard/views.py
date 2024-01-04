from django.shortcuts import render, redirect
from django.contrib import auth
from django.contrib.auth.models import User

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

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

@api_view(['POST'])
def login(request):  
    username = request.data['name']
    password = request.data['password']
    
    user = auth.authenticate(username=username, password=password)
    
    if user is not None:
        auth.login(request, user)
        print('Login successful')
        return Response(status=status.HTTP_200_OK)
    else:
        print('Login unsuccessful')
        return Response(status=status.HTTP_401_UNAUTHORIZED)
    
@api_view(['POST']) #TODO control authentication
def logout(request):
    auth.logout(request)
    print(request, 'Logout successful')
    return Response(status=status.HTTP_200_OK)
