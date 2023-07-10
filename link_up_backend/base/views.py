
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from django.db.models import Q
from .models import Advocate,Company
from .serializers import AdvocateSerializer,CompanySerializer


# Create your views here.
@api_view(['GET'])
def endpoints(request):
    data=['/advocates','/advocates/:username']

    return Response(data)

@api_view(['GET','POST'])
# @permission_classes([IsAuthenticated])
def advocate_list(request):
    if request.method=='GET':
        query=request.GET.get('query')


        if query==None:
            query=''

        advocates=Advocate.objects.filter(Q(username__icontains=query)|Q(bio__icontains=query))

        serializer=AdvocateSerializer(advocates,many=True)
        return Response(serializer.data)
    
    if request.method=='POST':
            advocate=Advocate.objects.create(
        username=request.data['username'],
        bio=request.data['bio']
    )

    serializer=AdvocateSerializer(advocate,many=False)

    return Response(serializer.data)




@api_view(['GET','PUT','DELETE'])
def advocate_detail(request,username):

    try:
     advocate=Advocate.objects.get(username=username)
    except Advocate.DoesNotExist:
        raise JsonResponse("User not exists")

    if request.method=='GET':
        
        serializer=AdvocateSerializer(advocate,many=False)
        return Response(serializer.data)
        
    
    if request.method=='PUT':
         advocate.username=request.data['username']
         advocate.bio=request.data['bio']
         advocate.save()
         serializer=AdvocateSerializer(advocate,many=False)
         return Response(serializer.data)
    
    if request.method=='DELETE':
         advocate.delete()
         return Response("User was  deleted")

         

@api_view(['GET'])
def company_list(request):
    companies=Company.objects.all()
    serializer=CompanySerializer(companies,many=True)   
    return Response(serializer.data)      


