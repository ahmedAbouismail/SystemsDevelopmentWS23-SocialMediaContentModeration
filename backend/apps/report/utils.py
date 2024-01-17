import io
import subprocess
import uuid
import os
from minio import Minio
from minio.error import S3Error
from PIL import Image
from django.conf import settings

from .serializers import ClassifierResponseSerializer
from .models import ClassifierResponse, Platform, Label

# Image ----------
def UploadImageToMinio(request_image):
    # #Upload to minio and get url
    minio_client = Minio(
        endpoint=settings.MINIO_ENDPOINT,
        access_key=settings.MINIO_ACCES,
        secret_key=settings.MINIO_SECRET,
        secure=False,
        )
    post_image = request_image  # Access the uploaded file
    id = 'NoImage'
    if minio_client.bucket_exists("images") and post_image:
        image = Image.open(post_image)
        original_format = image.format
        img_byte_arr = io.BytesIO()
        image.save(img_byte_arr, format=original_format)
        length = img_byte_arr.getbuffer().nbytes
        img_byte_arr.seek(0)
        id = str(uuid.uuid4()) + "." + str(original_format).lower()
        print(id)
        try:
            minio_client.put_object(
                bucket_name='images',
                object_name=id,
                data=img_byte_arr,
                length=length)
            print(f"Successfully uploaded to images")
        except S3Error as e:
            print(f"Error uploading to images: {e}")

    return id


def GetImageFromMinio(id: str):
    minio_client = Minio(
        endpoint=settings.MINIO_ENDPOINT,
        access_key=settings.MINIO_ACCES,
        secret_key=settings.MINIO_SECRET,
        secure=False,
        )
    image_data = minio_client.get_object('images', id)
    format = id.split('.')[1].upper

    image_bytes = io.BytesIO()
    for data in image_data.stream(32 * 1024):
        image_bytes.write(data)

    image_bytes.seek(0)
    return image_bytes


# Report -------
PLATFORMS = Platform.objects.all()
LABELS = Label.objects.all()


def get_platform_id(name):
    p = PLATFORMS.filter(platform_name=name).first()
    if p:
        return p.pk
    else:
        return '' # Unknown  


def get_platform_report_link(name):
    p = PLATFORMS.filter(platform_name = name).first()
    if(p):
        return p.reporting_link    
    return ''


def get_label(id):
    l = LABELS.filter(pk=id).first()
    if l:
        return l.label_name
    else:
        return '' # Unknown 


def classify_report(content):
    script_path = os.path.abspath('../backend/classifier/hate_speech_service/svm.py')
    script_command = f'python "{script_path}" "{content}"' # adjustment to run script command on windows

    try:
        output = subprocess.check_output(script_command, shell=True, text=True)
        class_resp = {'Label': output}
        serializer = ClassifierResponseSerializer(data=class_resp)
        if serializer.is_valid():
            serializer.save()
            return ClassifierResponse.objects.all().last().pk, get_label(output)
        else:
            print('Response nicht gespeichert')
            return None, None
    except subprocess.CalledProcessError as e:
        print(f"Script failed with error: {e}")  
        return None, None


def create_prediction_str(predictions):
    if predictions != None:
        pred_list = ''
        pred_list = ', '.join(predictions)
    else:
        pred_list = None
    return pred_list
