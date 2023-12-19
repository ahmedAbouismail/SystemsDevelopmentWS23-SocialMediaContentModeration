import io
import subprocess
import uuid
import os
import configparser
from minio import Minio
from minio.error import S3Error
from PIL import Image
import psycopg2
import csv

from .serializers import ClassifierResponseSerializer
from .models import ClassifierResponse, Platform, Label

current_directory = os.path.dirname(os.path.abspath(__file__))
relative_path_to_config = '..\..\..\config.ini'
config_file_path = os.path.join(current_directory, relative_path_to_config)
print(config_file_path)

#Image ----------
def UploadImageToMinio(request_image):
    config = configparser.ConfigParser(allow_no_value=True)
    config.read(config_file_path)
    # #Upload to minio and get url
    minio_client = Minio(
        config.get("minio","endpoint"),
        config.get("minio","access_key"),
        config.get("minio","secret_key"),
        config.get("minio","session_token"),
        config.getboolean("minio","secure")
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
        config.get("minio","endpoint"),
        config.get("minio","access_key"),
        config.get("minio","secret_key"),
        config.get("minio","session_token"),
        config.getboolean("minio","secure")
        )
    image_data = minio_client.get_object('images', id)
    format = id.split('.')[1].upper
    
    
    image_bytes = io.BytesIO()
    for data in image_data.stream(32*1024):
        image_bytes.write(data)
        
    image_bytes.seek(0)
    return image_bytes

def ExportReportDBtoCSV():
    directory = current_directory + '../../table.csv'
    conn = psycopg2.connect("dbname=hassmelder user=postgres password=Casino+Poison+Unsmooth6")
    cur = conn.cursor()
    sql = "COPY (SELECT * FROM report_post) TO STDOUT WITH CSV DELIMITER ','"
    response = None
    with open(directory, "r+") as file:
        writer = csv.writer(file)
        writer.writerow(["Number", "Post content", "Post link", "Image ID", "User Prediction", "Classifier response","Platform"])
        
        cur.copy_expert(sql, file)
        file.seek(0)
        response = file.read()
        
    return response


# Report -------
PLATFORMS = Platform.objects.all()
LABELS = Label.objects.all()

def get_platform_id(name):
    p = PLATFORMS.filter(platform_name=name).first()
    if p:
        return p.pk
    else:
        return 1 #default

def get_platform_report_link(name):
    p = PLATFORMS.filter(platform_name=name).first()
    print(p)
    if p:
        return p.reporting_link
    else:
        return 'unknown' #default

def get_label(id):
    l = LABELS.filter(pk=id).first()
    if l:
        return l.label_name
    else:
        return 1 #default

def classify_report(content):
    script_path = os.path.abspath('../backend/classifier/hate_speech_service/svm.py')
    script_command = f'python {script_path} "{content}"'

    try:
        output = subprocess.check_output(script_command, shell=True, text=True)
        #TODO get class and save in DB with label id (like platform)
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
    pred_list = ''
    for p in predictions:
        pred_list += p
    return pred_list

