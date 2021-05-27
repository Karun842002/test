from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import json, logging, os
from pymongo import MongoClient

#mongo_uri = 'mongodb://' + os.environ["MONGO_HOST"] + ':' + os.environ["MONGO_PORT"]
mongo_uri = 'mongodb://localhost:27017'
db = MongoClient(mongo_uri)['test_db']["test_col"]

class TodoListView(APIView):

    def get(self, request):
        TODO = db.find()
        response = list()
        for x in TODO:
            response.append({'id':str(x['_id']),'name':x['name']})
        return Response(data=response, status=status.HTTP_200_OK)
        
    def post(self, request):
        x = db.insert_one(request.data)
        return Response({}, status=status.HTTP_200_OK)

