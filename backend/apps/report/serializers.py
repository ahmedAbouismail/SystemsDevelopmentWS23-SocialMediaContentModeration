from rest_framework import serializers
from .models import Post, ClassifierResponse


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['post_content', 'post_link', 'post_image', 'user_prediction', 'post_platform', 'classifier_response']


class ClassifierResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClassifierResponse
        fields = ['Label']
