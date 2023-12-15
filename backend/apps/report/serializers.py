from rest_framework import serializers
from .models import Post, ClassifierRespoonse

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

class ClassifierRespoonseSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = ClassifierRespoonse
        fields = '__all__'
