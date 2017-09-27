from django.shortcuts import render,HttpResponse,redirect
from django.views.generic import TemplateView
from django.views import View

def Home_view(request):
    return render(request, 'home.html')

class TercihRobotu(View):
    robot_main = "robot.html"
    def get(self, request):
        return render(request,self.robot_main)



