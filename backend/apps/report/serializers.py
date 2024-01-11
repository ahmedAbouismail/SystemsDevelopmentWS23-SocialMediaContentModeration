from rest_framework import serializers
from .models import Post, ClassifierResponse
import re


class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = ['post_content', 'post_link', 'post_image', 'user_prediction', 'post_platform', 'classifier_response']

    def to_representation(self, instance):
        rep = super(PostSerializer, self).to_representation(instance)
        rep['post_platform'] = instance.post_platform.platform_name
        rep['classifier_response'] = instance.classifier_response.Label.label_name
        return rep
    
    def validate_post_link(self, value):
        if value in ('', None):
            return
        
        patterns = {
            'twitter': r'^https?://(www\.)?twitter\.com/.*',
            'facebook': r'^https?://(www\.)?facebook\.com/.*',
            'instagram': r'^https?://(www\.)?instagram\.com/.*',
            'reddit': r'^https?://(www\.)?reddit\.com/.*'
        }

        if not any(re.match(pattern, value) for pattern in patterns.values()):
            raise serializers.ValidationError("Link is not valid")

class ClassifierResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClassifierResponse
        fields = ['Label']
