---
id: installation
title: Installation
description: How to install dj-ninja-auth
sidebar_position: 1
sidebar_label: Installation
keywords: [installation, dj-ninja-auth]
image: https://github.com/majulahsingapuri.png
tags: [dj-ninja-auth]
draft: false
---

To install the base library, run the following command:

```bash
pip install dj-ninja-auth
```

This library is fully compatible with `allauth`, albeit there are some modifications to work in a REST-ful format.
To include the `allauth` library for additional account management and social authentication, run the following command:

```bash
pip install "dj-ninja-auth[allauth]"
```
