from django.contrib import admin
from django.urls import path, include
from apps.index import views as viewIndex
from apps.report import views as viewReport

urlpatterns = [
    path('', viewIndex.index, name='index'),
    path('report/', viewReport.report, name='report'),
    path('dashboard/', include('dashboard.urls')),
    path('admin/', admin.site.urls),
]