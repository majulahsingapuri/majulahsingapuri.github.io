---
id: social
title: Setup Social Authentication
description: How to setup Social Authentication with Allauth in dj-ninja-auth
sidebar_position: 2
sidebar_label: Social Authentication
keywords: [social, dj-ninja-auth]
image: https://github.com/majulahsingapuri.png
tags: [dj-ninja-auth]
draft: false
---

Social Authentication requires that you set up a [CSRF endpoint](../authentication/session.md#csrf-endpoint) and enable CSRF in your Django-Ninja as this is required by `allauth`'s authentication endpoints.

You will then have to register your app in the `admin` console. Do remember to add the provdier to the `INSTALLED_APPS` else your provider will not show up in the admin console.

The next step is to set up your `urls.py` file so that the registered providers' urls are available.
To do so, add the following to your `urls.py`.
You can use any url prefix.
I chose to use the `social/` prefix for ease of use and to deconflict it with the `account/` url in the `NinjaAuthAccountController`.

```python title="urls.py"
from django.contrib import admin
from django.urls import include, path

from .api import api

from allauth.urls import provider_urlpatterns # <-----

urlpatterns = [
    path("admin/", admin.site.urls),
    path("social/", include(provider_urlpatterns)), # <-----
    path("", api.urls),
]
```

After getting your CSRF token, setting up your `url.py` and registering your `SocialApplication`, you have to send a `X-WWW-FORM-URLENCODED` form to your desired provider's login endpoint.
A sample request is provided below.

```bash
curl --location 'http://127.0.0.1:8000/social/<PROVIDER>/login/' \
--header 'Cookie: csrftoken=<CSRF_TOKEN_VALUE>' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'csrfmiddlewaretoken=<CSRF_TOKEN_VALUE>'
```

The callback url for this request will be

```text
http://127.0.0.1:8000/social/<PROVIDER>/login/callback/
```
