"""
For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.8/ref/settings/
"""

import os


# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(__file__))
PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))

# Application definition

SECRET_KEY = os.environ.get('SECRET_KEY_GUNICORN')
DEBUG = bool(os.environ.get('DEBUG'))

RTM_API_KEY = os.environ.get('RTM_API_KEY')
RTM_API_SECRET = os.environ.get('RTM_API_SECRET')
RTM_WORD_LIST_ID = '31054349'

INSTALLED_APPS = (
    'django.contrib.contenttypes',
    'django.contrib.staticfiles',
    'rtw'
)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.security.SecurityMiddleware',
)

ROOT_URLCONF = 'rtw.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'debug': True,
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
            ],
        },
    },
]

WSGI_APPLICATION = 'rtw.wsgi.application'

# Internationalization
# https://docs.djangoproject.com/en/1.8/topics/i18n/

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True


# Honor the 'X-Forwarded-Proto' header for request.is_secure()
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

# Allow all host headers
ALLOWED_HOSTS = ['*']

# Static files (CSS, JavaScript, Images)

STATIC_ROOT = os.path.join(PROJECT_ROOT, 'staticfiles')
STATIC_URL = '/static/'

# Extra places for collectstatic to find static files.
STATICFILES_DIRS = (
    os.path.join(PROJECT_ROOT, 'static'),
)

# Simplified static file serving.
# https://warehouse.python.org/project/whitenoise/
STATICFILES_STORAGE = 'whitenoise.django.GzipManifestStaticFilesStorage'
