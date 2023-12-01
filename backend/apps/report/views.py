from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Post
from .serializers import *

@api_view(['POST'])
def post_report(request):
    serializer = PostSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_reports(request):
    data = Post.objects.all()

    serializer = PostSerializer(data, context={'request': request}, many=True)

    return Response(serializer.data)