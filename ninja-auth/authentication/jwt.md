---
id: jwt
title: JSON Web Tokens
description: How to use JSON Web Tokens Authentication
sidebar_position: 3
sidebar_label: JSON Web Tokens
keywords: [jwt, dj-ninja-auth]
image: https://github.com/majulahsingapuri.png
tags: [dj-ninja-auth]
draft: false
---

The final improvement in security is to use JWT Authentication.

```python title="api.py"
from ninja_extra import NinjaExtraAPI
from dj_ninja_auth.jwt.authentication import JWTAuth
from dj_ninja_auth.jwt.controller import NinjaAuthJWTController

api = NinjaExtraAPI(auth=[JWTAuth()])
api.register_controllers(NinjaAuthJWTController)
```

To prevent any future breaking changes, you are required to add the `dj_ninja_auth.jwt` app to your `INSTALLED_APPS`.
Change include the blacklisting of JWT tokens.

```python title="settings.py"
INSTALLED_APPS = [
    ...
    "ninja_extra",
    "dj_ninja_auth",
    "dj_ninja_auth.jwt
    ...
]
```

The JWT controller provides 2 additional endpoints for tokens.

- `/auth/refresh`: Issues the user a new token using the refresh token
- `/auth/verify`: Verifies that the provided token is valid.
