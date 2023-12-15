from rest_framework import status
from rest_framework.response import Response
from django.http import FileResponse, HttpResponse
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import FileUploadParser, MultiPartParser, FormParser

from .models import Post
from .serializers import *

import configparser
from minio import Minio
from minio.error import S3Error
from django.shortcuts import render
from PIL import Image
import io
import uuid
from .utils import UploadImageToMinio, GetImageFromMinio, ExportReportDBtoCSV

@api_view(['POST'])
def post_report(request):
    serializer = PostSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        print('Report post')
        return Response(status=status.HTTP_201_CREATED)
    
    print('Report post not valid')

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_reports(request):
    data = Post.objects.all()

    serializer = PostSerializer(data, context={'request': request}, many=True)

    print('Report post')
    return Response(serializer.data)


@api_view(['POST','GET'])
@parser_classes([MultiPartParser, FormParser])
def report(request):
    if request.method == 'GET':
        print('Chicken')
        print('GET request')
        
    if request.method == 'POST':
        # Get image from request and upload to minIO
        # id, to save in DB and recall image.
        id = UploadImageToMinio(request.data.get('file'))
        # Update data in request, for DB
        request.data['post_image'] = id
        ### FOR TESTING
        request.data['post_content'] = 'Test'
        request.data['user_prediction'] = 'A'
        request.data['post_link'] = 'badPlace.com'
        # Get image from Minio, using id in DB
        obj = GetImageFromMinio(id)
        ### END TESTING
        #Serialize and save in DB
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            print('Report post')
            return FileResponse(obj, content_type='image/*')
            return Response(status=status.HTTP_201_CREATED)
        
    return render(request, 'report/dummyReport.html')

@api_view(['GET'])
def download_reports_csv(request):
    if request.method == 'GET':
        print('GET request')
        response = HttpResponse(
            content_type="text/csv",
        )
        response['Content-Disposition'] = 'attachment; filename=reports.csv'
        response.content = ExportReportDBtoCSV()
        return response
        