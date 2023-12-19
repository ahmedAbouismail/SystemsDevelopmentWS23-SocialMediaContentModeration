from django.http import  HttpResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializers import *
from .utils import *



@api_view(['GET'])
def get_reports(request):
    data = Post.objects.all()
    serializer = PostSerializer(data, context={'request': request}, many=True)
    print('Report post')
    return Response(serializer.data)


@api_view(['POST'])
def post_report(request):
    # Create list with data
    report = {'post_content': request.data['post_content']}

    # LINK - TODO Ahmed
    report['post_link'] = request.data['post_link']

    # NOT WORKING ON JSON, see REST Framework documentation
    # IMAGE: Get image from request and upload to minIO. Only its id is saved in DB
    # file = request.data['post_image'] 
    # if file and file != 'undefined':
    #     # Handle image upload
    #     id = UploadImageToMinio(file)
    #     report['post_image'] = id
    # else:
    #     report['post_image'] = 1
    report['post_image'] = None

    # USER PREDICTION
    report['user_prediction'] = create_prediction_str(request.data['user_prediction'])

    # PLATFORM 
    report['post_platform'] = get_platform_id(request.data['platform'])

    # CLASSIFIER    
    hate_class_id, class_label = classify_report(request.data['post_content'])
    if hate_class_id != None:
        report['classifier_response'] = hate_class_id
    else:
        report['classifier_response'] = 1 #default 


    #Serialize and save in DB
    serializer = PostSerializer(data=report)
    if serializer.is_valid():
        serializer.save()
        #Create Response
        response = {
            'isHateSpeech:' : class_label != 'no hate',
            'classifierCategory' : class_label,
            'categoryDefinition:': 'blablabla', # TODO
            'platform' : request.data['platform'],
            'reportingLink': 'www.report.de' #TODO
            }

        print('Report gespeichert')        
        return Response(data=response, status=status.HTTP_201_CREATED)
    else:
        print('Report nicht gespeichert')
        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def download_reports_csv(request):
    if request.method == 'GET':
        print('GET request')
        response = HttpResponse(
            content_type="text/csv",
        )
        response['Content-Disposition'] = 'attachment; filename=reports.csv'
        response.content = ExportReportDBtoCSV()
        return response
