---
id: settings-base
title: Base
description: Different Settings for Dj-Ninja-Auth
sidebar_position: 1
sidebar_label: Base
keywords: [settings, dj-ninja-auth]
image: https://github.com/majulahsingapuri.png
tags: [dj-ninja-auth, settings]
slug: base
draft: false
---

## `AUTH_LOGIN_INPUT_SCHEMA`

default: `"dj_ninja_auth.schema.LoginInputSchema"`

type: `str`

description: A dotted module path to the schema for the login input. Contains `username` and/or `email`, and `password` depending on [allauth.settings.AUTHENTICATION_METHOD](./settings-allauth.md#account_authentication_method).

## `AUTH_SUCCESS_SCHEMA`

default: `"dj_ninja_auth.schema.SuccessOutputSchema"`

type: `str`

description: A dotted module path to the schema that shows what the format of a success output is. Contains `{"message": "success"}` as the default.

## `AUTH_PASSWORD_RESET_REQUEST_SCHEMA`

default: `"dj_ninja_auth.schema.PasswordResetRequestInputSchema"`

type: `str`

description: A dotted module path to the schema that controls the fields necessary and executes form validation for password reset request. Contains `email` as the only required field.

## `AUTH_PASSWORD_RESET_CONFIRM_SCHEMA`

default: `"dj_ninja_auth.schema.PasswordResetConfirmInputSchema"`

type: `str`

description: A dotted module path to the schema that controls the fields necessary and executes form validation for password reset. Contains `token` and `uid` as the 2 verifying fields.

## `AUTH_PASSWORD_CHANGE_SCHEMA`

default: `"dj_ninja_auth.schema.PasswordChangeInputSchema"`

type: `str`

description: A dotted module path to the schema for an authenticated user changing their password. Requires `username`, `old_password`, `new_password1` and `new_password2`.

## `AUTH_AUTH_USER_SCHEMA`

default: `"dj_ninja_auth.schema.AuthUserSchema"`

type: `str`

description: A dotted module path to the schema for the fields returned for a user. Defaults to showing all fields except the `password`.

## `AUTH_PASSWORD_RESET_URL`

default: `None`

type: `str`

description: **REQUIRED** The URL that is added to the reset password template so that the user is redirected to the correct website. Bypasses standard Django reset url template.
