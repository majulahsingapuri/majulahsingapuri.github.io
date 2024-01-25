---
id: registration
title: Registration
description: How to register new accounts using REST in dj-ninja-auth
sidebar_position: 4
sidebar_label: Registration
keywords: [registration, dj-ninja-auth]
image: https://github.com/majulahsingapuri.png
tags: [dj-ninja-auth]
draft: false
---

To manage accounts in addition to the authentication functionality, use the `NinjaAuthAccountController` as below:

```python title="api.py"
from ninja_extra import NinjaExtraAPI

from dj_ninja_auth.jwt.authentication import JWTAuth
from dj_ninja_auth.jwt.controller import NinjaAuthJWTController
from dj_ninja_auth.registration.controller import NinjaAuthAccountController

api = NinjaExtraAPI(auth=[JWTAuth()])
api.register_controllers(NinjaAuthJWTController, NinjaAuthAccountController)
```

This will provide the following endpoints.

- `/account/`: Allowed methods are `POST`, `PATCH` and `DELETE`.
- `/account/verify`
- `/account/resend-email`
