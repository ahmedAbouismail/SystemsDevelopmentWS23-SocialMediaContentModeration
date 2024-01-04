from django.contrib import admin
from django.urls import path, include
from apps.index import views as viewIndex
from apps.report import views as viewReport
from apps.dashboard import views as viewDashboard

urlpatterns = [
    path('', viewIndex.index, name='index'),
    #Reports
    path('dashboard/', viewReport.get_reports, name='dashboard'),
    path('report/form/', viewReport.post_report, name='reportForm'),
    path('report/form/down', viewReport.download_reports_csv, name='download'),
    #Login etc
    path('dashboard/login', viewDashboard.login, name='login'),
    path('dashboard/register', viewDashboard.register, name='register'),
    path('dashboard/logout', viewDashboard.logout, name='logout'),
    #Others
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls'))
]