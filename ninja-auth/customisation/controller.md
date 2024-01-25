---
id: controller
title: Controllers
description: How to customise controllers in dj-ninja-auth
sidebar_position: 2
sidebar_label: Controllers
keywords: [controller, dj-ninja-auth]
image: https://github.com/majulahsingapuri.png
tags: [dj-ninja-auth]
draft: false
---

Say you wanted to add another endpoint to the default auth controller that is an authenticated route and returns the user's details in the schema defined [previously](./schema.md).
In your `controller.py`:

```python title="controller.py"
from ninja_extra import ControllerBase, api_controller, http_get
from ninja_extra.permissions import IsAuthenticated

from .schema import MyAuthUserSchema

class UserController(ControllerBase):
    auto_import = False

    @http_get(
        "/me",
        permissions=[IsAuthenticated],
        response={200: MyAuthUserSchema},
        url_name="get_user",
    )
    def get_user(self):
        return MyAuthUserSchema(user=self.context.request.auth)

@api_controller("/auth", permissions=[AllowAny], tags=["auth"])
class MyNinjaAuthController(
    AuthenticationController,
    PasswordResetController,
    PasswordChangeController,
    UserController
):
    auto_import = False

```

Then in your `api.py`, replace the default controller with your custom controller

```python title="api.py"
from ninja_extra import NinjaExtraAPI
from .controller import MyNinjaAuthController

api = NinjaExtraAPI()
api.register_controllers(MyNinjaAuthController)
```
