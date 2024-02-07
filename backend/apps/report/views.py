from django.http import HttpResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser

from .serializers import *
from .utils import *

import base64


@api_view(['GET'])
def get_reports(request):
    """
    Retrieve a list of all reports.

    This endpoint retrieves all reports from the database and returns them
    in the form of serialized data.

    Returns:
        Response: A JSON response containing serialized report data.
    """
    queryset = Post.objects.all()

    # Serialize data
    serializer = PostSerializer(queryset, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def post_report(request):
    """
    Create a new report.

    This endpoint creates a new report based on the provided data in the request body.
    The report includes information such as post content, post link, image ID, user prediction,
    platform, classifier response, and category definition.

    Args:
        request (Request): The HTTP request object containing the report data.

    Returns:
        Response: A JSON response indicating the success or failure of the report creation.
    """
    # Create list with data
    report = {'post_content': request.data['post_content']}

    # LINK
    report['post_link'] = request.data['post_link']

    # GET IMAGE ID
    report['post_image'] = request.data['image_id']

    # USER PREDICTION
    report['user_prediction'] = create_prediction_str(request.data['user_prediction'])

    # PLATFORM 
    report['post_platform'] = get_platform_id(request.data['platform'])

    # CLASSIFIER    
    hate_class_id, class_label = classify_report(request.data['post_content'].replace('"', ''))
    if hate_class_id is not None:
        report['classifier_response'] = hate_class_id
    else:
        report['classifier_response'] = 1  # default

    # DEF CATEGORY
    category_definitions = {
        'Negative Stereotyping': 'the propagation of discriminatory narratives that unfairly portray individuals or groups based on preconceived notions, fostering an environment of bias and reinforcing harmful stereotypes',
        'Dehumanization': 'the degrading portrayal of individuals or communities, stripping them of their inherent humanity. Content falling under "Dehumanization" often employs language or imagery that diminishes the worth and dignity of its subjects',
        'Violence & Killing': 'the presence of content that explicitly showcases or advocates for acts of violence and killing. Such material may involve graphic descriptions, images, or discussions that glorify or incite harm, posing serious concerns for online safety and community well-being',
        'Equation': 'This content is offensive.',
        'Normalization of Existing Discrimination': 'the normalization of discriminatory practices or attitudes that already exist in society, perpetuating harmful biases and reinforcing unequal power dynamics. Content falling under this category may contribute to the entrenchment of systemic discrimination by downplaying its severity or dismissing the need for societal change',
        'Disguise as Irony': 'instances where potentially harmful or offensive content is presented under the guise of irony, using humor or sarcasm to mask the underlying negative intent. It often requires careful analysis to distinguish between genuine satire and content that may perpetuate harmful ideas',
        'default': 'the dissemination of false and injurious statements, encompassing malicious communication aimed at harming an individual\'s reputation or character. It involves the intentional spread of damaging narratives, often with the purpose of defaming the targeted person and causing harm to their public image',
    }

    category_definition = category_definitions.get(class_label, category_definitions['default'])

    # Serialize and save in DB
    serializer = PostSerializer(data=report)
    if serializer.is_valid():
        serializer.save()
        # Create Response
        response = {
            'isHateSpeech:': class_label != 'No Hate',
            'classifierCategory': class_label,
            'categoryDefinition': category_definition,
            'platform': request.data['platform'],
            'reportingLink': get_platform_report_link(request.data['platform'])
        }
        print(response)
        print('Report gespeichert')
        return Response(data=response, status=status.HTTP_201_CREATED)
    else:
        print('Report nicht gespeichert')
        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
def post_screenshot(request):
    """
    Upload a screenshot.

    This endpoint allows users to upload a screenshot, which is then processed and stored.
    The image is uploaded to MinIO, and only its ID is saved in the database.

    Args:
        request (Request): The HTTP request object containing the screenshot data.

    Returns:
        Response: A JSON response containing the ID of the uploaded image.

    Note:
        This endpoint expects a POST request with the 'post_image' key containing the image file.
    """
    id = 'NoImage'
    if request.method == 'POST' and 'post_image' in request.FILES:
        # NOT WORKING ON JSON, see REST Framework documentation
        # IMAGE: Get image from request and upload to minIO. Only its id is saved in DB
        file = request.FILES['post_image']
        if file and file != 'undefined':
            # Handle image upload
            id = UploadImageToMinio(file)
        else:
            print('File not found')
        response = {
            'image_id': id
        }
        return Response(data=response, status=status.HTTP_201_CREATED)
    else:
        response = {
            'image_id': id
        }
        return Response(data=response, status=status.HTTP_200_OK)
    

@api_view(['POST'])
def post_report_link(request):
    """
    Submit a report with a link.

    This endpoint allows users to submit a report containing a link.
    The link is validated and stored if it meets the required criteria.

    Args:
        request (Request): The HTTP request object containing the report data.

    Returns:
        Response: A JSON response indicating the status of the operation.

    Raises:
        HTTP_400_BAD_REQUEST: If the request data is invalid.
    """
    print("Link REQUST", request.data)
    report = {'post_link': request.data['post_link']}
    # post_content can not be empty, because it is a required field in the serializer
    report['post_content'] = '-'
    report['user_prediction'] = '-'
    serializer = PostSerializer(data=report)
    if serializer.is_valid():
        serializer.save()
        print('Link gespeichert')
        return Response(status=status.HTTP_201_CREATED)
    else:
        print('Link nicht gespeichert')
        print(serializer.errors)
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def download_screenshot(request, id):
    """
    Get an image from MinIO by id.

    This endpoint allows users to request an image saved in MinIO, using its id.

    Args:
        request (Request): The HTTP request object containing the id of the image.

    Returns:
        Response: A JSON response indicating the status of the operation and the image corresponding to the request.

    Raises:
        HTTP_400_BAD_REQUEST: If the request data is invalid.
    """
    image = GetImageFromMinio(id)
    if image != None:
        image_data = base64.b64encode(image.read()).decode('utf-8')
        response = {
                'image': image_data
            }
        return Response(data=response, status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)