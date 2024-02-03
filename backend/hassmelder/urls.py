from django.contrib import admin
from django.urls import path, include
from apps.index import views as viewIndex
from apps.report import views as viewReport
from apps.dashboard import views as viewDashboard
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

# Define a schema view for NoHateNet API documentation.
schema_view = get_schema_view(
   openapi.Info(
      title="NoHateNet API Documentation",
      default_version='v1',
      description="This is an API for NoHateNet",
      # Add your company's information
      #terms_of_service="https://www.google.com/policies/terms/",
      #contact=openapi.Contact(email="contact@snippets.local"),
      #license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('', viewIndex.index, name='index'),
    #Reports
    path('dashboard', viewReport.get_reports, name='dashboard'),
    path('report/form', viewReport.post_report, name='reportForm'),
    path('report/form/image', viewReport.post_screenshot, name='reportImage'),
    path('report/link', viewReport.post_report_link, name='reportLink'),
    #Login etc
    path('dashboard/login', viewDashboard.login, name='login'),
    path('dashboard/register', viewDashboard.register, name='register'),
    path('dashboard/logout', viewDashboard.logout, name='logout'),
    #Others
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    #Swagger Docs
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]