---
id: settings-token
title: Token
description: Different Settings for Dj-Ninja-Auth
sidebar_position: 3
sidebar_label: Token
keywords: [settings, dj-ninja-auth]
image: https://github.com/majulahsingapuri.png
tags: [dj-ninja-auth, settings]
slug: token
draft: false
---

## `AUTH_TOKEN_MODEL`

default: `"dj_ninja_auth.authtoken.models.Token"`

type: `str`

description: A dotted module path to the model used for Token generation and management.

## `AUTH_TOKEN_EXPIRY`

default: `timedelta(days=1)`

description: A `timedelta` object that controls how often the token refreshes.

## `AUTH_TOKEN_LOGIN_SCHEMA`

default: `"dj_ninja_auth.authtoken.schema.AuthTokenLoginInputSchema"`

type: `str`

description: A dotted module path to the schema that controls how the token is processed before being sent to the user.
