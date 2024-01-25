---
id: schema
title: Schemas
description: How to customise schemas in dj-ninja-auth
sidebar_position: 1
sidebar_label: Schemas
keywords: [schema, dj-ninja-auth]
image: https://github.com/majulahsingapuri.png
tags: [dj-ninja-auth]
draft: false
---

Say for example you want to modify the output schema once the user logs in in your app `my_app` to only display specific fields.
In your `my_app.schema.py`, you can create the following:

```python title="schema.py"
from django.contrib.auth import authenticate, get_user_model
from dj_ninja_auth.schema import SuccessMessageMixin, LoginInputSchema

UserModel = get_user_model()

class MyAuthUserSchema(ModelSchema):
    class Meta:
        model = UserModel
        fields = ['id', 'username', 'first_name', 'last_name']

class MyLoginOutputSchema(SuccessMessageMixin):
    user: MyAuthUserSchema
    my_other_value: str

class MyLoginInputSchema(LoginInputSchema):
    @classmethod
    def get_response_schema(cls) -> Type[Schema]:
        return MyLoginOutputSchema

    def to_response_schema(self, **kwargs):
        return super().to_response_schema(my_other_value="foo", **kwargs)
```

Then in your `settings.py`, you can specify:

```python title="settings.py"
NINJA_AUTH_LOGIN_INPUT_SCHEMA = "my_app.schema.MyLoginInputSchema"
```
