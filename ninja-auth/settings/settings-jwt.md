---
id: settings-jwt
title: JWT
description: Different Settings for Dj-Ninja-Auth
sidebar_position: 4
sidebar_label: JWT
keywords: [settings, dj-ninja-auth]
image: https://github.com/majulahsingapuri.png
tags: [dj-ninja-auth, settings]
slug: jwt
draft: false
---

## `AUTH_JWT_VERIFY_SCHEMA`

default: `"dj_ninja_auth.jwt.schema.TokenVerifyInputSchema"`

type: `str`

description:

## `AUTH_JWT_PAIR_SCHEMA`

default: `"dj_ninja_auth.jwt.schema.TokenPairInputSchema"`

type: `str`

description:

## `AUTH_JWT_REFRESH_SCHEMA`

default: `"dj_ninja_auth.jwt.schema.TokenRefreshInputSchema"`

type: `str`

description:

## `AUTH_JWT_TOKEN_CLASSES`

default: `("dj_ninja_auth.jwt.tokens.AccessToken",)`

type: `Tuple[str]`

description:

## `AUTH_JWT_USER_ID_CLAIM`

default: `"user_id"`

type: `str`

description:

## `AUTH_JWT_USER_ID_FIELD`

default: `"id"`

type: `str`

description:

## `AUTH_JWT_JTI_CLAIM`

default: `"jti"`

type: `str`

description:

## `AUTH_JWT_TOKEN_TYPE_CLAIM`

default: `"token_type"`

type: `str`

description:

## `AUTH_JWT_USER_AUTHENTICATION_RULE`

default: `"dj_ninja_auth.jwt.authentication.default_authentication_rule"`

type: `str`

description:

## `AUTH_JWT_LEEWAY`

default: `0`

type: `int`

description:

## `AUTH_JWT_JWK_URL`

default: `None`

type: `str | None`

description:

## `AUTH_JWT_ISSUER`

default: `None`

type: `str | None`

description:

## `AUTH_JWT_AUDIENCE`

default: `None`

type: `str | None`

description:

## `AUTH_JWT_VERIFYING_KEY`

default: `None`

type: `str | None`

description:

## `AUTH_JWT_SIGNING_KEY`

default: `settings.SECRET_KEY`

type: `str`

description:

## `AUTH_JWT_ALGORITHM`

default: `"HS256"`

type: `str`

description:

## `AUTH_JWT_UPDATE_LAST_LOGIN`

default: `False`

type: `bool`

description:

## `AUTH_JWT_ACCESS_TOKEN_LIFETIME`

default: `timedelta(minutes=5)`

type: `timedelta`

description:

## `AUTH_JWT_REFRESH_TOKEN_LIFETIME`

default: `timedelta(days=1)`

type: `timedelta`

description:
