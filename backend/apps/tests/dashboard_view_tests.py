# In dashboard/tests/test_views.py and report/tests/test_views.py
from rest_framework.test import APIClient
from django.test import TestCase
from .tests.factories import UserFactory, PlatformFactory, LabelFactory, ClassifierResponseFactory


class DashboardViewTest(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = UserFactory()

    def test_register_success(self):
        data = {
            'first_name': 'Test',
            'last_name': 'User',
            'username': 'testuser',
            'email': 'test@example.com',
            'password': 'password',
            'password2': 'password'
        }
        response = self.client.post('/dashboard/register/', data)
        self.assertEqual(response.status_code, 302)  # Assuming redirect on success

    def test_register_passwords_not_matching(self):
        data = {
        # Same as above, but with non-matching passwords
        }
        response = self.client.post('/dashboard/register/', data)
        self.assertNotEqual(response.status_code, 302)  # Assuming failure does not redirect

class TestLoginEdgeCases(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = UserFactory(username='testuser', password='password')

    def test_login_incorrect_credentials(self):
        data = {'username': 'testuser', 'password': 'wrongpassword'}
        response = self.client.post('/dashboard/login/', data, format='json')
        self.assertEqual(response.status_code, 401)

    def test_login_empty_fields(self):
        data = {}
        response = self.client.post('/dashboard/login/', data, format='json')
        self.assertEqual(response.status_code, 400)


class ReportViewTest(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.platform = PlatformFactory()
        self.label = LabelFactory()

    def test_post_report_success(self):
        data = {
            'post_content': 'Test content',
            'post_link': 'https://twitter.com/realDonaldTrump/status/1346912780700577792',
            'image_id': 'testimageid',
            'user_prediction': 'Test Prediction',
            'platform': self.platform.platform_name
            # Add more fields as necessary
        }
        response = self.client.post('/report/post_report/', data, format='json')
        self.assertEqual(response.status_code, 201)

    def test_post_report_invalid_link(self):
        data = {
            'post_content': 'Test content with invalid link',
            'post_link': 'invalidlink',  # Invalid link
            # Other data fields...
        }
        response = self.client.post('/report/post_report/', data, format='json')
        self.assertEqual(response.status_code, 400)  # Expecting a bad request status


class TestPostReportEdgeCases(TestCase):
    def setUp(self):
        self.client = APIClient()
        PlatformFactory(platform_name='Twitter')

    def test_post_report_invalid_link(self):
        data = {
            'post_link': 'htp://badformat.com',
            
        }
        response = self.client.post('/report/post_report/', data, format='json')
        self.assertEqual(response.status_code, 400)

    def test_post_report_missing_content(self):
        data = {
            # Omit 'post_content'
            'post_link': 'http://example.com',
            
        }
        response = self.client.post('/report/post_report/', data, format='json')
        self.assertEqual(response.status_code, 200)

    def test_post_report_invalid_platform(self):
        data = {
            'platform': 'NonexistentPlatform',
            
        }
        response = self.client.post('/report/post_report/', data, format='json')
        self.assertEqual(response.status_code, 400)
