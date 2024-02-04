from django.http import HttpResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser

from .serializers import *
from .utils import *

@api_view(['GET'])
def get_reports(request):
    queryset = Post.objects.all()

    #Serialize data
    serializer = PostSerializer(queryset, many=True)
    return Response(serializer.data)



@api_view(['POST'])
def post_report(request):
    # Create list with data
    report = {'post_content': request.data['post_content']}

    # LINK
    # post_link will be always empty, because the link will not be send anymore as a part of this request
    # for the link there is a sepreated form in the frontend. 
    # The link will be send to the backend with a sepreated request
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
        report['classifier_response'] = 1 #default 

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
    id = 'None'
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
    print("Link REQUST", request.data)
    report= { 'post_link': request.data['post_link']}
    # post_content can not be empty, because it is a required field in the serializer
    report['post_content'] = '-'
    report['user_prediction'] = '-'
    serializer  = PostSerializer(data=report)
    if serializer.is_valid():
        serializer.save()
        print('Link gespeichert')
        return Response(status=status.HTTP_201_CREATED)
    else:
        print('Link nicht gespeichert')
        print(serializer.errors)
        return Response(status=status.HTTP_400_BAD_REQUEST)
