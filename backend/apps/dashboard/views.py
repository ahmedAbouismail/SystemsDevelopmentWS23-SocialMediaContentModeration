from django.shortcuts import render, redirect
from django.contrib import messages, auth
from django.contrib.auth.models import User

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
                messages.error(request, 'Username already in use')
                return redirect('register')
            else:
                if User.objects.filter(email=email).exists():
                    messages.error(request, 'Email already in use')
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
                    messages.success(request, 'Registered successfully')
                    return redirect('login')
        else:
            messages.error(request, 'Passwords do not match')
            return redirect('register')

    else:
        return render(request, 'dashboard/register.html')
    
def login(request):
    if request.method == 'POST':
        
        username = request.POST['username']
        password = request.POST['password']
        
        user = auth.authenticate(username=username, password=password)
        
        if user is not None:
            auth.login(request,user)
            messages.success(request, 'Login successful')
            return redirect('index')
        else:
            messages.error(request, 'Login unsuccessful')
            return redirect('login')
    else:
        return render(request, 'dashboard/login.html')
    

def logout(request):
    if request.method == 'POST':
        auth.logout(request)
        messages.success(request, 'Logout successful')
        return redirect('index')

def dashboard(request):
    return redirect('index')