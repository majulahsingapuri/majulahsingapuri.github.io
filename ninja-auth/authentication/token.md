---
id: token
title: Token
description: How to use Token Authentication
sidebar_position: 2
sidebar_label: Token
keywords: [token, dj-ninja-auth]
image: https://github.com/majulahsingapuri.png
tags: [dj-ninja-auth]
draft: false
---

The next improvement in security is to use Token Authentication.

```python title="api.py"
from ninja_extra import NinjaExtraAPI
from dj_ninja_auth.authtoken.authentication import AccessTokenAuth
from dj_ninja_auth.authtoken.controller import NinjaAuthTokenController

api = NinjaExtraAPI(auth=[AccessTokenAuth()])
api.register_controllers(NinjaAuthTokenController)
```

Since the `token`s will be stored in the database, you are required to add the `dj_ninja_auth.authtoken` app to your `INSTALLED_APPS` and `migrate` the database.
Failure to do so will raise errors.

```python title="settings.py"
INSTALLED_APPS = [
    ...
    "ninja_extra",
    "dj_ninja_auth",
    "dj_ninja_auth.authtoken
    ...
]
```

:::info

Tokens are rotated every 1 day by default for security purposes.

:::
