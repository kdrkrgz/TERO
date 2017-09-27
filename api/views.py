from django.shortcuts import render
from rest_framework import generics
from main.models import Unilist, Faklist, Deplist
from .serializers import DepSerializer #UniSerializer, FakSerializer


#class UniMixin(generics.ListAPIView):
#    serializer_class = UniSerializer
#    queryset = Unilist.objects.all()[:1000]
#
#
#
#class UniListCreateAPIView(UniMixin, generics.ListCreateAPIView):
#    pass
#
##class UniRetrieveUpdateDestroyAPIView(UniMixin,
##                                          generics.RetrieveUpdateDestroyAPIView):
##    pass
#
#
#class FakMixin(generics.ListAPIView):
#    serializer_class = FakSerializer
#    queryset = Faklist.objects.all()[:1000]
#
#
#
#class FakListCreateAPIView(FakMixin, generics.ListCreateAPIView):
#    pass

#class FakRetrieveUpdateDestroyAPIView(FakMixin,
#                                          generics.RetrieveUpdateDestroyAPIView):
#    pass



class DepMixin(generics.ListAPIView):
    serializer_class = DepSerializer
    queryset = Deplist.objects.all()



class DepListCreateAPIView(DepMixin, generics.ListCreateAPIView):
    pass

#class DepRetrieveUpdateDestroyAPIView(DepMixin,
#                                          generics.RetrieveUpdateDestroyAPIView):
#    pass