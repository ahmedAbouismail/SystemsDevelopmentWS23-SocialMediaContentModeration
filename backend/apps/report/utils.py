import io
import os
import uuid
import configparser
from PIL import Image
from minio import Minio
from minio.error import S3Error
from django.conf import settings
from django.shortcuts import render

config_file_path = os.path.abspath(os.path.join(settings.BASE_DIR, '../config.ini'))
print(config_file_path)


def UploadImageToMinio(request_image):
    config = configparser.ConfigParser(allow_no_value=True)
    config.read(config_file_path)
    # #Upload to minio and get url
    minio_client = Minio(
        config.get("minio", "endpoint"),
        config.get("minio", "access_key"),
        config.get("minio", "secret_key"),
        config.get("minio", "session_token"),
        config.getboolean("minio", "secure")
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
    config = configparser.ConfigParser(allow_no_value=True)
    config.read(config_file_path)
    # #Upload to minio and get url
    minio_client = Minio(
        config.get("minio", "endpoint"),
        config.get("minio", "access_key"),
        config.get("minio", "secret_key"),
        config.get("minio", "session_token"),
        config.getboolean("minio", "secure")
    )
    image_data = minio_client.get_object('images', id)
    format = id.split('.')[1].upper

    image_bytes = io.BytesIO()
    for data in image_data.stream(32 * 1024):
        image_bytes.write(data)

    image_bytes.seek(0)
    return image_bytes
