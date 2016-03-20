from django.conf.urls import include, url

import rtw.views

urlpatterns = [
    url(r'^$', rtw.views.index, name='index'),
]
