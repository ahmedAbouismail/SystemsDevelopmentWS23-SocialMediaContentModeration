from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from django.http import FileResponse
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import FileUploadParser, MultiPartParser, FormParser

from .models import Post
from .serializers import PostSerializer
from .utils import UploadImageToMinio, GetImageFromMinio

import os
import subprocess


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


@api_view(['POST', 'GET'])
@parser_classes([MultiPartParser, FormParser])
def report(request):
    if request.method == 'GET':
        print('GET request')
    elif request.method == 'POST':
        file = request.data.get('file')

        if file and file != 'undefined':
            # Handle image upload
            id = UploadImageToMinio(file)
            request.data['post_image'] = id
            # Additional data for testing
            request.data['post_content'] = 'Test'
            request.data['user_prediction'] = 'A'
            # Save in DB
            serializer = PostSerializer(data=request.data)

            if serializer.is_valid():
                serializer.save()
                obj = GetImageFromMinio(id)
                return FileResponse(obj, content_type='image/*', as_attachment=True)
        else:
            classifier_response = request.data.get('classifier_response', '')
            if classifier_response:
                script_path = os.path.abspath('../backend/classifier/hate_speech_service/svm.py')
                script_command = f'python {script_path} "{classifier_response}"'

                try:
                    output = subprocess.check_output(script_command, shell=True, text=True)
                    print(f"Script Output: {output}")

                    # If script succeeds, save to DB
                    serializer = PostSerializer(data=request.data)
                    if serializer.is_valid():
                        serializer.save()
                    return Response(status=status.HTTP_201_CREATED)
                except subprocess.CalledProcessError as e:
                    print(f"Script failed with error: {e}")
            return Response(status=status.HTTP_201_CREATED)

    return render(request, 'report/dummyReport.html')