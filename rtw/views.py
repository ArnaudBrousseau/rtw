from django.shortcuts import render
from django.http import HttpResponse
import json
import settings
import sys
import webbrowser
from rtmapi import Rtm

def index(request):
    context = {"DEBUG": settings.DEBUG}

    api = Rtm(settings.RTM_API_KEY, settings.RTM_API_SECRET, "read", None)

    if not api.token_valid():
        # use desktop-type authentication
        auth_url, frob = api.authenticate_desktop()
        # open webbrowser, wait until user authorized application
        context['auth_url'] = auth_url
        context['auth_frob'] = frob
        return render(request, 'index.html', context=context)

def retrieve_words(request):
    frob = request.GET.get('frob')

    api = Rtm(settings.RTM_API_KEY, settings.RTM_API_SECRET, "read", None)
    api.retrieve_token(frob)

    if not api.token_valid():
        raise ValueError("not a valid token")

    result = api.rtm.tasks.getList(list_id=settings.RTM_WORD_LIST_ID)
    flashcards = []
    quotes = []
    for tasklist in result.tasks:
        for taskseries in tasklist:
            parts = taskseries.name.split(':')
            if len(parts) == 1:
                quotes.append(''.join(parts))
            if len(parts) > 1:
                flashcards.append((parts[0], ':'.join(parts[1:])))
    context = {
        "rtw_data": json.dumps({"flashcards": flashcards, "quotes": quotes}),
        "api_token": api.token,
    }

    return render(request, 'rtw.html', context=context)
