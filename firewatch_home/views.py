from django.http import HttpResponse
from django.shortcuts import render


def home(request):
    return render(request, 'firewatch_home.html')


def play_simulation(request):
    print("Sending the message to run simulation")