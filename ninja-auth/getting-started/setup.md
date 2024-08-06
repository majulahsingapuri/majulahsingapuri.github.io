---
id: setup
title: Setup
description: How to Setup dj-ninja-auth
sidebar_position: 2
sidebar_label: Setup
keywords: [setup, dj-ninja-auth]
image: https://github.com/majulahsingapuri.png
tags: [dj-ninja-auth]
draft: false
---

To set up the base library, follow the following steps.

1. Create a `api.py` file in your app directory next to the `settings.py` and `urls.py` files.
   This file will hold your Ninja Extra API instance.
2. Add the following lines of code to your `api.py`

   ```python title="api.py"
   from ninja_extra import NinjaExtraAPI
   from dj_ninja_auth.controller import NinjaAuthDefaultController

   api = NinjaExtraAPI()
   api.register_controllers(NinjaAuthDefaultController)
   ```

3. Add the following lines to your `urls.py` file

   ```python title="urls.py"
   from .api import api

   urlpatterns = [
       path("admin/", admin.site.urls),
       path("", api.urls)
   ]
   ```

4. Add the following to your `settings.py`

   ```python title="settings.py"
   INSTALLED_APPS = [
       ...
       "ninja_extra",
       "dj_ninja_auth",
       ...
   ]

   AUTH_PASSWORD_RESET_URL = "http://localhost:8000/<YOUR_PASSWORD_RESET_FRONTEND_URL>/"
   ```

This will give you 5 basic endpoints that are not secured and can be called by anyone.
The endpoints are:

- `/auth/login`
- `/auth/logout`
- `/auth/password/reset/request`
- `/auth/password/reset/confirm`
- `/auth/password/change`

Viola!
You can start authenticating your users.
To view and test the endpoints, you can visit [http://localhost:8000/docs](http://localhost:8000/docs).

:::warning

The `NinjaAuthDefaultController` sends back the data associated with the authenticated user but cannot keep track of a user's state.
This means that beyond changing passwords and getting the user's data, the `NinjaAuthDefaultController` is functionally useless without at least session authentication using cookies.

:::
