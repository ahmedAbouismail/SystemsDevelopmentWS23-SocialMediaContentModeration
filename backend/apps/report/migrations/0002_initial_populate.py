# migrations/0001_initial.py

from django.db import migrations, models

def insert_report_platform_data(apps, schema_editor):
    Platform = apps.get_model('report', 'Platform')
    Platform.objects.create(id=1, platform_name='X', reporting_link='https://help.twitter.com/en/safety-and-security/report-abusive-behavior')
    Platform.objects.create(id=2, platform_name='Facebook', reporting_link='https://www.facebook.com/help/1380418588640631')
    Platform.objects.create(id=3, platform_name='Instagram', reporting_link='https://help.instagram.com/2922067214679225')
    Platform.objects.create(id=4, platform_name='Reddit', reporting_link='https://support.reddithelp.com/hc/en-us/sections/360008810132-Reporting')

def insert_report_label_data(apps, schema_editor):
    Label = apps.get_model('report', 'Label')
    Label.objects.create(id=1, label_name='No Hate')
    Label.objects.create(id=2, label_name='Negative Stereotyping')
    Label.objects.create(id=3, label_name='Dehumanization')
    Label.objects.create(id=4, label_name='Violence & Killing')
    Label.objects.create(id=5, label_name='Equation')
    Label.objects.create(id=6, label_name='Normalization of Existing Discrimination')
    Label.objects.create(id=7, label_name='Disguise as Irony')
    Label.objects.create(id=8, label_name='Harmful Slander')

class Migration(migrations.Migration):

    dependencies = [
        ('report', '0001_initial'),  # Replace with actual app and migration name
    ]

    operations = [
        migrations.RunPython(insert_report_platform_data),
        migrations.RunPython(insert_report_label_data),
    ]
