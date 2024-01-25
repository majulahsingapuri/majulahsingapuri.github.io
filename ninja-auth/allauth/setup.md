---
id: allauth-setup
title: Setup
description: How to setup Allauth in dj-ninja-auth
sidebar_position: 1
sidebar_label: Setup
keywords: [allauth-setup, dj-ninja-auth]
image: https://github.com/majulahsingapuri.png
tags: [dj-ninja-auth]
draft: false
---

After following the [installation instructions](../getting-started/installation.md), add the following to your `settings.py` based on the required settings from `allauth`.

```python title="settings.py"
# Specify the context processors as follows:
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                # Already defined Django-related contexts here

                # `allauth` needs this from django
                'django.template.context_processors.request',
            ],
        },
    },
]

AUTHENTICATION_BACKENDS = [
    ...
    # Needed to login by username in Django admin, regardless of `allauth`
    'django.contrib.auth.backends.ModelBackend',

    # `allauth` specific authentication methods, such as login by email
    'allauth.account.auth_backends.AuthenticationBackend',
    ...
]

INSTALLED_APPS = [
    ...
    # The following apps are required:
    'django.contrib.auth',
    'django.contrib.messages',

    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    # ... include the providers you want to enable:
    'allauth.socialaccount.providers.agave',
    'allauth.socialaccount.providers.amazon',
    ...
]

MIDDLEWARE = (
    "django.middleware.common.CommonMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",

    # Add the account middleware:
    "allauth.account.middleware.AccountMiddleware",
)

# The following is necessary to bypass the default templates
ACCOUNT_ADAPTER = "dj_ninja_auth.registration.adapter.NinjaAccountAdapter"
NINJA_AUTH_EMAIL_CONFIRMATION_URL = "http://localhost:8000/confirm-email/"
```

:::note

You do not need to include the `allauth` URLs in your `urls.py` as the functionality will automatically be present in `dj-ninja-auth`.

:::

Once you have configured your `settings.py`, run the migrate command to add all the `allauth` migrations to your database.

```bash
python manage.py migrate
```
