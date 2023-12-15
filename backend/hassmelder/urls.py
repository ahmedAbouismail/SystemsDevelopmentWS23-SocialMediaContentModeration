from django.contrib import admin
from django.urls import path, include
from apps.index import views as viewIndex
from apps.report import views as viewReport

urlpatterns = [
    path('', viewIndex.index, name='index'),
    path('report/', viewReport.get_reports, name='report'),
    path('report/form/', viewReport.post_report, name='reportForm'),
    path('report/form/down', viewReport.download_reports_csv, name='download'),
    path('dashboard/', include('dashboard.urls')),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls'))
]