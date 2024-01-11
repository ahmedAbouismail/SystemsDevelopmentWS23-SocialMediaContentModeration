from django.db import models


class Platform(models.Model):
    platform_name = models.CharField(max_length=255, unique=True)
    reporting_link = models.CharField(max_length=255, default='unknown')

    def __str__(self) -> str:
        return self.platform_name


class Label(models.Model):
    label_name = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.label_name


class ClassifierResponse(models.Model):
    Label = models.ForeignKey(Label, on_delete=models.SET_NULL, null=True)
    timestamp = models.DateTimeField().auto_created

    def __str__(self) -> str:
        return f"{self.Label.label_name if self.Label else 'No Label'} at {self.timestamp}"


class Post(models.Model):
    post_content = models.TextField()
    post_link = models.CharField(max_length=1024, blank=True, null=True)
    post_image = models.CharField(max_length=1024, blank=True, null=True)
    user_prediction = models.CharField(max_length=255, null=True, blank=True)
    post_platform = models.ForeignKey(Platform, on_delete=models.SET_NULL, null=True, blank=True)
    classifier_response = models.ForeignKey(ClassifierResponse, on_delete=models.SET_NULL, null=True)
    timestamp = models.DateTimeField().auto_created

    def __str__(self) -> str:
        return f"Posted on {self.post_platform.platform_name if self.post_platform else 'None'} at {self.timestamp}"
