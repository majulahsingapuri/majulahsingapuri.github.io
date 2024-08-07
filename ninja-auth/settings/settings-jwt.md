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

description: This schema verifies the provided Token.

## `AUTH_JWT_PAIR_SCHEMA`

default: `"dj_ninja_auth.jwt.schema.TokenPairInputSchema"`

type: `str`

description: This schema requests a username and password and returns an `acccess` and `refresh` tokens.

## `AUTH_JWT_REFRESH_SCHEMA`

default: `"dj_ninja_auth.jwt.schema.TokenRefreshInputSchema"`

type: `str`

description: This schema requests a `refresh` token and returns a new `access` and `refresh` token.

## `AUTH_JWT_TOKEN_CLASSES`

default: `("dj_ninja_auth.jwt.tokens.AccessToken",)`

type: `Tuple[str]`

description: A list of dot paths to classes that specify the types of token that are allowed to prove authentication.

## `AUTH_JWT_USER_ID_CLAIM`

default: `"user_id"`

type: `str`

description: The claim in generated tokens which will be used to store user identifiers. For example, a setting value of `'user_id'` would mean generated tokens include a "user_id" claim that contains the user's identifier.

## `AUTH_JWT_USER_ID_FIELD`

default: `"id"`

type: `str`

description: The database field from the user model that will be included in generated tokens to identify users. It is recommended that the value of this setting specifies a field that does not normally change once its initial value is chosen. For example, specifying a "username" or "email" field would be a poor choice since an account's username or email might change depending on how account management in a given service is designed. This could allow a new account to be created with an old username while an existing token is still valid which uses that username as a user identifier.

## `AUTH_JWT_JTI_CLAIM`

default: `"jti"`

type: `str`

description: The claim name that is used to store a token's unique identifier. It may be necessary in some cases to use another claim besides the default "jti" claim to store such a value.

## `AUTH_JWT_TOKEN_TYPE_CLAIM`

default: `"token_type"`

type: `str`

description: The claim name that is used to store a token's type.

## `AUTH_JWT_USER_AUTHENTICATION_RULE`

default: `"dj_ninja_auth.jwt.authentication.default_authentication_rule"`

type: `str`

description: Callable to determine if the user is permitted to authenticate. This rule is applied after a valid token is processed. The user object is passed to the callable as an argument. The default rule is to check that the is_active flag is still True. The callable must return a boolean, True if authorized, False otherwise resulting in a 401 status code.

## `AUTH_JWT_LEEWAY`

default: `0`

type: `Union[int, datetime.timedelta]`

description: Leeway is used to give some margin to the expiration time. This can be an integer for seconds or a `datetime.timedelta`. Please reference [pyjwt docs](https://pyjwt.readthedocs.io/en/latest/usage.html#expiration-time-claim-exp) for more information.

## `AUTH_JWT_JWK_URL`

default: `None`

type: `str | None`

description: The JWK_URL is used to dynamically resolve the public keys needed to verify the signing of tokens. When using Auth0 for example you might set this to `https://yourdomain.auth0.com/.well-known/jwks.json`. When set to None, this field is excluded from the token backend and is not used during validation.

## `AUTH_JWT_ISSUER`

default: `None`

type: `str | None`

description: The issuer claim to be included in generated tokens and/or validated in decoded tokens. When set to `None`, this field is excluded from tokens and is not validated.

## `AUTH_JWT_AUDIENCE`

default: `None`

type: `str | None`

description: The audience claim to be included in generated tokens and/or validated in decoded tokens. When set to `None`, this field is excluded from tokens and is not validated.

## `AUTH_JWT_VERIFYING_KEY`

default: `None`

type: `str | None`

description: The verifying key which is used to verify the content of generated tokens. If an HMAC algorithm has been specified by the `ALGORITHM` setting, the `VERIFYING_KEY` setting will be ignored and the value of the `SIGNING_KEY` setting will be used. If an RSA algorithm has been specified by the `ALGORITHM` setting, the `VERIFYING_KEY` setting must be set to a string that contains an RSA public key.

## `AUTH_JWT_SIGNING_KEY`

default: `settings.SECRET_KEY`

type: `str`

description: The signing key that is used to sign the content of generated tokens. For HMAC signing, this should be a random string with at least as many bits of data as is required by the signing protocol. For RSA signing, this should be a string that contains an RSA private key that is 2048 bits or longer. Since Simple JWT defaults to using 256-bit HMAC signing, the `SIGNING_KEY` setting defaults to the value of the `SECRET_KEY` setting for your django project. Although this is the most reasonable default that Simple JWT can provide, it is recommended that developers change this setting to a value that is independent from the django project secret key. This will make changing the signing key used for tokens easier in the event that it is compromised.

## `AUTH_JWT_ALGORITHM`

default: `"HS256"`

type: `str`

description: The algorithm from the PyJWT library which will be used to perform signing/verification operations on tokens. To use symmetric HMAC signing and verification, the following algorithms may be used: `'HS256'`, `'HS384'`, `'HS512'`. When an HMAC algorithm is chosen, the `SIGNING_KEY` setting will be used as both the signing key and the verifying key. In that case, the `VERIFYING_KEY` setting will be ignored. To use asymmetric RSA signing and verification, the following algorithms may be used: `'RS256'`, `'RS384'`, `'RS512'`. When an RSA algorithm is chosen, the `SIGNING_KEY` setting must be set to a string that contains an RSA private key. Likewise, the `VERIFYING_KEY` setting must be set to a string that contains an RSA public key.

## `AUTH_JWT_UPDATE_LAST_LOGIN`

default: `False`

type: `bool`

description: When set to `True`, last_login field in the auth_user table is updated upon login.

:::warning

Updating last_login will dramatically increase the number of database
transactions. People abusing the views could slow the server and this could be
a security vulnerability. If you really want this, throttle the endpoint with
DRF at the very least.

:::

## `AUTH_JWT_ACCESS_TOKEN_LIFETIME`

default: `timedelta(minutes=5)`

type: `timedelta`

description: A `datetime.timedelta` object which specifies how long access tokens are valid. This `timedelta` value is added to the current UTC time during token generation to obtain the token's default `exp` claim value.

## `AUTH_JWT_REFRESH_TOKEN_LIFETIME`

default: `timedelta(days=1)`

type: `timedelta`

description: A `datetime.timedelta` object which specifies how long refresh tokens are valid. This `timedelta` value is added to the current UTC time during token generation to obtain the token's default `exp` claim value.
