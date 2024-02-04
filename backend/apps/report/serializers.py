from rest_framework import serializers
from .models import Post, ClassifierResponse
import re


class PostSerializer(serializers.ModelSerializer):
    """
        Serializer for the Post model.

        This serializer is responsible for serializing and deserializing Post instances.
        It defines the fields to include in the serialized representation and provides
        validation for the 'post_link' field.

        Attributes:
            post_content (str): The content of the post.
            post_link (str): The link submitted by the user.
            post_image (str): The image associated with the post.
            user_prediction (str): The prediction made by the user.
            post_platform (str): The platform where the post was made.
            classifier_response (str): The response from the classifier.

        Methods:
            to_representation(instance): Custom representation method to include related field values.
            validate_post_link(value): Custom validation method for the 'post_link' field.
    """
    class Meta:
        model = Post
        fields = ['post_content', 'post_link', 'post_image', 'user_prediction', 'post_platform', 'classifier_response']

    def to_representation(self, instance):
        """
            Customize the serialized representation of the instance.

            This method overrides the default behavior to include related field values
            in the serialized representation.

            Args:
                instance: The Post instance being serialized.

            Returns:
                dict: A dictionary representing the serialized Post instance.
        """
        rep = super(PostSerializer, self).to_representation(instance)
        if (instance.post_platform != None):
            rep['post_platform'] = instance.post_platform.platform_name
        if (instance.classifier_response != None):
            rep['classifier_response'] = instance.classifier_response.Label.label_name
        return rep

    def validate_post_link(self, value):
        """
        Validate the 'post_link' field.

        This method checks if the provided post link matches any of the predefined patterns
        for valid links. If the link is not valid, a validation error is raised.

        Args:
            value (str): The value of the 'post_link' field.

        Returns:
            str: The validated post link value.

        Raises:
            serializers.ValidationError: If the post link is not valid.
        """
        # in case of empty string or None the validation should be skipped
        if value in ('', None):
            return

        patterns = {
            'twitter': r'^https?://(www\.)?twitter\.com/.*',
            'facebook': r'^https?://(www\.)?facebook\.com/.*',
            'instagram': r'^https?://(www\.)?instagram\.com/.*',
            'reddit': r'^https?://(www\.)?reddit\.com/.*',
            'x': r'^https?://(www\.)?x\.com/.*'
        }

        if not any(re.match(pattern, value) for pattern in patterns.values()):
            raise serializers.ValidationError("Link is not valid")
        return value


class ClassifierResponseSerializer(serializers.ModelSerializer):
    """
    Serializer for the ClassifierResponse model.

    This serializer is responsible for serializing and deserializing ClassifierResponse instances.

    Attributes:
        Label (str): The label associated with the classifier response.

    """
    class Meta:
        model = ClassifierResponse
        fields = ['Label']
