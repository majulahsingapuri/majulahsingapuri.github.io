---
id: settings-registration
title: Registration
description: Different Settings for Dj-Ninja-Auth
sidebar_position: 2
sidebar_label: Registration
keywords: [settings, dj-ninja-auth]
image: https://github.com/majulahsingapuri.png
tags: [dj-ninja-auth, settings]
slug: registration
draft: false
---

## `REGISTRATION_CREATE_USER_SCHEMA`

default: `"dj_ninja_auth.registration.schema.CreateUserSchema"`

type: `str`

description: A dotted module path to the schema required to create a new user. Contains `username`, `password1` and `password2`. If `allauth` is enabled and the [allauth.settings.EMAIL_REQUIRED](./settings-allauth.md#account_email_required) is enabled, then the `email` field will also appear.

## `REGISTRATION_UPDATE_USER_SCHEMA`

default: `"dj_ninja_auth.registration.schema.UpdateUserSchema"`

type: `str`

description: A dotted module path to the schema required to update the fields of a user. Contains `first_name` and `last_name` by default.

## `REGISTRATION_VERIFY_EMAIL_SCHEMA`

default: `"dj_ninja_auth.registration.schema.VerifyEmailSchema"`

type: `str`

description: A dotted module path to the schema required to confirm a user's email address. Contains `key` by default.

## `REGISTRATION_RESEND_EMAIL_SCHEMA`

default: `"dj_ninja_auth.registration.schema.ResendEmailSchema"`

type: `str`

description: A dotted module path to the schema required to resend a verification email to the user. Contains `email` by default.

## `REGISTRATION_EMAIL_CONFIRMATION_URL`

default: `None`

type: `str`

description: **REQUIRED if `allauth` enabled** The URL the user is redirected to in order to confirm their account before proceeding to log in.
