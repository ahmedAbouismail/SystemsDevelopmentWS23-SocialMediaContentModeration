# report/tests/factories.py
import factory
from factory.django import DjangoModelFactory
from django.utils import timezone
from report.models import Post, Platform, Label, ClassifierResponse
from django.contrib.auth.models import User

class UserFactory(DjangoModelFactory):
    class Meta:
        model = User

    username = factory.Sequence(lambda n: 'user_%d' % n)
    first_name = factory.Faker('first_name')
    last_name = factory.Faker('last_name')
    email = factory.LazyAttribute(lambda obj: '%s@example.com' % obj.username)

class PlatformFactory(DjangoModelFactory):
    class Meta:
        model = Platform

    platform_name = factory.Sequence(lambda n: 'Platform %d' % n)
    reporting_link = factory.Faker('url')

class LabelFactory(DjangoModelFactory):
    class Meta:
        model = Label

    label_name = factory.Sequence(lambda n: 'Label %d' % n)

class ClassifierResponseFactory(DjangoModelFactory):
    class Meta:
        model = ClassifierResponse

    Label = factory.SubFactory(LabelFactory)
    timestamp = factory.LazyFunction(timezone.now)

class PostFactory(DjangoModelFactory):
    class Meta:
        model = Post

    post_content = factory.Faker('paragraph')
    post_link = factory.Faker('url')
    post_image = factory.Faker('file_path', extension='jpg')
    user_prediction = factory.Faker('word')
    post_platform = factory.SubFactory(PlatformFactory)
    classifier_response = factory.SubFactory(ClassifierResponseFactory)
    timestamp = factory.LazyFunction(timezone.now)
