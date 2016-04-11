from django.conf.urls import include, url

import rtw.views

urlpatterns = [
    url(r'^$', rtw.views.index, name='index'),
    url(r'^play$', rtw.views.retrieve_words, name='play'),
]
