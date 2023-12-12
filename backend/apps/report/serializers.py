from rest_framework import serializers
from .models import Post, ClassifierResponse

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['post_content', 'post_link', 'post_image', 'user_prediction', 'platform', 'classifier_response', 'timestamp']

class ClassifierResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClassifierResponse
        fields = ['Label', 'timestamp']