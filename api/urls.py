from django.conf.urls import url
from api.views import DepListCreateAPIView #UniListCreateAPIView,FakListCreateAPIView,

app_name = 'api'

urlpatterns = [
#   url(r'^unilist$',UniListCreateAPIView.as_view(), name='Uni_rest'),
#   url(r'^faklist$',FakListCreateAPIView.as_view(), name='Fak_rest'),
#   url(r'^deplist$',DepListCreateAPIView.as_view(), name='Dep_rest'),
]