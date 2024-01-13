from django.test import TestCase
from django.core.management import call_command
from django.apps import apps

class TestReportMigrations(TestCase):
    def setUp(self):
        # Apply the migration
        call_command('migrate', 'report', '0002_initial_populate')

    def test_insert_report_platform_data(self):
        Platform = apps.get_model('report', 'Platform')
        platforms = Platform.objects.all()
        
        self.assertEqual(len(platforms), 4)
        
        platform_names = ['X', 'Facebook', 'Instagram', 'Reddit']
        reporting_links = [
            'https://help.twitter.com/en/safety-and-security/report-abusive-behavior',
            'https://www.facebook.com/help/1380418588640631',
            'https://help.instagram.com/2922067214679225',
            'https://support.reddithelp.com/hc/en-us/sections/360008810132-Reporting'
        ]
        
        for platform, name, link in zip(platforms, platform_names, reporting_links):
            self.assertEqual(platform.platform_name, name)
            self.assertEqual(platform.reporting_link, link)