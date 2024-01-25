---
id: session
title: Session
description: How to use Session Authentication
sidebar_position: 1
sidebar_label: Session
keywords: [session, dj-ninja-auth]
image: https://github.com/majulahsingapuri.png
tags: [dj-ninja-auth]
draft: false
---

The easiest way to maintain user state is to use the Session Authentication.
This works out of the box with Django-Ninja and requires very little configuration from your end.

:::note

The `csrf=True` kwarg has to be passed in to allow Django Ninja to pass CSRF cookies for validation.
You will have to [provide your own endpoint](https://django-ninja.dev/reference/csrf/?h=csrf#django-ensure_csrf_cookie-decorator) to get a CSRF cookie from Ninja.

:::

```python title="api.py"
from ninja.security import django_auth
from dj_ninja_auth.controller import NinjaAuthDefaultController

api = NinjaExtraAPI(auth=[django_auth], csrf=True)
api.register_controllers(NinjaAuthDefaultController)
```

## CSRF Endpoint

The following is a barebones CSRF endpoint that you can provide to get the cookie.
You can place it in a separate app called `csrf` as below.

```python title="/csrf/api.py
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from ninja.router import Router

router = Router()

@router.get("/csrf", auth=None)
@ensure_csrf_cookie
@csrf_exempt
def csrf(request):
    return HttpResponse()
```
