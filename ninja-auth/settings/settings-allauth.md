---
id: settings-allauth
title: Allauth
description: Different Settings for Dj-Ninja-Auth
sidebar_position: 5
sidebar_label: Allauth
keywords: [settings, dj-ninja-auth]
image: https://github.com/majulahsingapuri.png
tags: [dj-ninja-auth, settings]
slug: allauth
draft: false
---

:::danger

Some of the settings below have not been implemented or tested. Modifying the settings might alter the authentication flow in unexpected ways. Do so at your own peril. If you wish to contribute to the project, please write test cases to ensure that the code runs reliably or implement the missing settings flags in the relevant part of the code.

Some of Allauth's settings have been omitted as they are either a client-side flow (e.g. redirect on authentication) or are not REST-ful (e.g. template extension).

:::

## `ACCOUNT_ADAPTER`

default: `"allauth.account.adapter.DefaultAccountAdapter"`

type: `str`

description: Specifies the adapter class to use, allowing you to alter certain
default behaviour.

:::warning

Please change this to `"dj_ninja_auth.registration.adapter.NinjaAccountAdapter"` or your own implementation that subclasses the Ninja Adapter else your email verification won't work.

:::

## `ACCOUNT_AUTHENTICATION_METHOD`

default: `"username"`, alternatives: `"email"` or `"username_email"`

type: `str`

description: Specifies the login method to use -- whether the user logs in by
entering their username, email address, or either one of both.
Setting this to `"email"` requires `ACCOUNT_EMAIL_REQUIRED=True`

## `ACCOUNT_CHANGE_EMAIL`

default: `False`

type: `bool`

description: When disabled (`False`), users can add one or more email addresses (up to a
maximum of `ACCOUNT_MAX_EMAIL_ADDRESSES`) to their account and freely manage
those email addresses. When enabled (`True`), users are limited to having
exactly one email address that they can change by adding a temporary second
email address that, when verified, replaces the current email address.

## `ACCOUNT_EMAIL_CONFIRMATION_EXPIRE_DAYS`

default: `3`

type: `int`

description: Determines the expiration date of email confirmation mails (# of days).

## `ACCOUNT_EMAIL_CONFIRMATION_HMAC`

default: `True`

type: `bool`

description: In order to verify an email address a key is mailed identifying the
email address to be verified. In previous versions, a record was
stored in the database for each ongoing email confirmation, keeping
track of these keys. Current versions use HMAC based keys that do not
require server side state.

## `ACCOUNT_EMAIL_NOTIFICATIONS`

default: `False`

type: `bool`

description: When enabled, account related security notifications, such as "Your password
was changed", including information on user agent / IP address from where the
change originated, will be emailed.

## `ACCOUNT_EMAIL_REQUIRED`

default: `False`

type: `bool`

description: The user is required to hand over an email address when signing up.

## `ACCOUNT_EMAIL_VERIFICATION`

default: `"optional"`

type: `str`

description: Determines the email verification method during signup -- choose
one of `"mandatory"`, `"optional"`, or `"none"`.

Setting this to `"mandatory"` requires `ACCOUNT_EMAIL_REQUIRED` to be `True`.

When set to `"mandatory"` the user is blocked from logging in until the email
address is verified. Choose `"optional"` or `"none"` to allow logins
with an unverified email address. In case of `"optional"`, the email
verification mail is still sent, whereas in case of "none" no email
verification mails are sent.

## `ACCOUNT_EMAIL_SUBJECT_PREFIX`

default: `"[Site] "`

type: `str`

description: Subject-line prefix to use for email messages sent. By default, the
name of the current `Site` (`django.contrib.sites`) is used.

## `ACCOUNT_EMAIL_MAX_LENGTH`

default: `254`

type: `int`

description: Maximum length of the email field. You won't need to alter this unless using
MySQL with the InnoDB storage engine and the `utf8mb4` charset, and only in
versions lower than 5.7.7, because the default InnoDB settings don't allow
indexes bigger than 767 bytes. When using `utf8mb4`, characters are 4-bytes
wide, so at maximum column indexes can be 191 characters long (767/4).
Unfortunately Django doesn't allow specifying index lengths, so the solution
is to reduce the length in characters of indexed text fields.
More information can be found at [MySQL's documentation on converting between 3-byte and 4-byte Unicode character sets](https://dev.mysql.com/doc/refman/5.5/en/charset-unicode-conversion.html).

## `ACCOUNT_MAX_EMAIL_ADDRESSES`

default: `None`

type: `int | None`

description: The maximum amount of email addresses a user can associate to his account. It
is safe to change this setting for an already running project -- it will not
negatively affect users that already exceed the allowed amount. Note that if
you set the maximum to 1, users will not be able to change their email
address.

## `ACCOUNT_LOGOUT_ON_PASSWORD_CHANGE`

default: `False`

type: `bool`

description: Determines whether or not the user is automatically logged out after
changing or setting their password. See documentation for
[Django's session invalidation on password change](https://docs.djangoproject.com/en/stable/topics/auth/default/#session-invalidation-on-password-change).

:::note

Not implemented yet

:::

## `ACCOUNT_LOGIN_ON_PASSWORD_RESET`

default: `False`

type: `bool`

description: By changing this setting to `True`, users will automatically be logged in
once they have reset their password. By default they are redirected to the
password reset done page.

:::note

Not implemented yet

:::

## `ACCOUNT_LOGOUT_REDIRECT_URL`

default: `settings.LOGOUT_REDIRECT_URL or "/"`

type: `str`

description: The URL (or URL name) to return to after the user logs out. Defaults to
Django's `LOGOUT_REDIRECT_URL`, unless that is empty, then `"/"` is used.

:::note

Not implemented yet

:::

## `ACCOUNT_PASSWORD_RESET_TOKEN_GENERATOR`

default: `"allauth.account.forms.EmailAwarePasswordResetTokenGenerator"`

type: `str`

description: A string pointing to a custom token generator
(e.g. 'myapp.auth.CustomTokenGenerator') for password resets. This class
should implement the same methods as
`django.contrib.auth.tokens.PasswordResetTokenGenerator` or subclass it.

## `ACCOUNT_PRESERVE_USERNAME_CASING`

default: `True`

type: `bool`

description: This setting determines whether the username is stored in lowercase
(`False`) or whether its casing is to be preserved (`True`). Note that when
casing is preserved, potentially expensive `__iexact` lookups are performed
when filter on username. For now, the default is set to `True` to maintain
backwards compatibility.

## `ACCOUNT_PREVENT_ENUMERATION`

default: `True`

type: `bool`

description: Controls whether or not information is revealed about whether or not a user
account exists. For example, by entering random email addresses in the
password reset form you can test whether or not those email addresses are
associated with an account. Enabling this setting prevents that, and an email
is always sent, regardless of whether or not the account exists. Note that
there is a slight usability tax to pay because there is no immediate feedback.

Whether or not enumeration can be prevented during signup depends on the email
verification method. In case of mandatory verification, enumeration can be
properly prevented because the case where an email address is already taken is
indistinguishable from the case where it is not. However, in case of optional
or disabled email verification, enumeration can only be prevented by allowing
the signup to go through, resulting in multiple accounts sharing same email
address (although only one of the accounts can ever have it verified). When
enumeration is set to `True`, email address uniqueness takes precedence over
enumeration prevention, and the issue of multiple accounts having the same
email address will be avoided, thus leaking information. Set it to
`"strict"` to allow for signups to go through.

## `ACCOUNT_RATE_LIMITS`

default:

    ```python
    ACCOUNT_RATE_LIMITS = {
        # Change password view (for users already logged in)
        "change_password": "5/m",
        # Email management (e.g. add, remove, change primary)
        "manage_email": "10/m",
        # Request a password reset, global rate limit per IP
        "reset_password": "20/m",
        # Rate limit measured per individual email address
        "reset_password_email": "5/m",
        # Password reset (the view the password reset email links to).
        "reset_password_from_key": "20/m",
        # Signups.
        "signup": "20/m",
        # NOTE: Login is already protected via `ACCOUNT_LOGIN_ATTEMPTS_LIMIT`
    }
    ```

type: `dict`

description: In order to be secure out of the box various rate limits are in place. The rate limit mechanism is backed by a Django cache. Hence, rate limiting will not work properly if you are using the DummyCache. To disable, set to `{}`. When rate limits are hit the 429.html template is rendered.

:::note

Not implemented yet

:::

## `ACCOUNT_REAUTHENTICATION_TIMEOUT`

default: `300`

type: `int`

description: Before asking the user to reauthenticate, we check if a successful
(re)authentication happened within the amount of seconds specified here, and
if that is the case, the new reauthentication flow is silently skipped.

:::note

Not implemented yet

:::

## `ACCOUNT_USERNAME_BLACKLIST`

default: `[]`

type: `List[str]`

description: A list of usernames that can't be used by user.

## `ACCOUNT_UNIQUE_EMAIL`

default: `True`

type: `bool`

description: Enforce uniqueness of email addresses. On the database level, this implies
that only one user account can have an email address marked as verified.
Forms prevent a user from registering with or adding an additional email
address if that email address is in use by another account.

## `ACCOUNT_USER_DISPLAY`

default: a callable returning `user.username`

type: `callable`

description: A callable (or string of the form `'some.module.callable_name'`)
that takes a user as its only argument and returns the display name
of the user. The default implementation returns `user.username`.

## `ACCOUNT_USER_MODEL_EMAIL_FIELD`

default: `"email"`

type: `str`

description: The name of the field containing the `email`, if any. See custom
user models.

## `ACCOUNT_USER_MODEL_USERNAME_FIELD`

default: `"username"`

type: `str`

description: The name of the field containing the `username`, if any. See custom
user models.

## `ACCOUNT_USERNAME_MIN_LENGTH`

default: `1`

type: `int`

description: An integer specifying the minimum allowed length of a username.

## `ACCOUNT_USERNAME_VALIDATORS`

default: `None`

type: `List[str] | None`

description: A path
(`'some.module.validators.custom_username_validators'`) to a list of
custom username validators. If left unset, the validators setup
within the user model username field are used.

Example:

    ```python
        # In validators.py

        from django.contrib.auth.validators import ASCIIUsernameValidator

        custom_username_validators = [ASCIIUsernameValidator()]

        # In settings.py

        ACCOUNT_USERNAME_VALIDATORS = 'some.module.validators.custom_username_validators'
    ```
