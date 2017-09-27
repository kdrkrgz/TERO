from django.conf.urls import url, include
from django.contrib import admin
from .views import Home_view, TercihRobotu

app_name = 'main'


urlpatterns = [
   url(r'^Tercih-Robotu/?$',TercihRobotu.as_view(),name='robot'),
]
