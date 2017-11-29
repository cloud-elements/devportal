---
heading: Constant Contact
seo: API Provider Setup | API provider setup | Constant Contact | Cloud Elements API Docs
title: API Provider Setup
description: Setup tasks required to authenticate an element instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 3929
elementKey: constantcontact
parent: Back to Element Guides
order: 5
---

# API Provider Setup

To authenticate a {{page.heading}} element instance you must register an app with {{page.heading}} and know the API Key, API Secret, and Callback URL of the app.

{% include tip.html content="Find the most up-to-date information in <a href=https://developer.constantcontact.com/api-keys.html/>Constant Contact's documentation for registering an app</a>.  " %}

To register an app:

1. Log in to the {{page.heading}} [Constant Contact Mashery page](https://constantcontact.mashery.com/).
1. Follow the steps provided to register your app.
7. Record the  **Key** and **Secret**. When you [authenticate an element instance](authenticate.html), use **Key** as the `apiKey` and **Secret** as the `apiSecret`.
3. Click the **my account** link below the API information or click the **Apps & API Keys** tab.
4. Click **Applications** under My API Keys, find your app, and then click **Edit**.
5. In **Redirect URI for OAuth calls**, enter the Callback URL where the user returns after authentication. Enter this URL whenever prompted to enter a **Callback URL** when you [authenticate an element instance](authenticate.html).
6. Click **Save**.

Next [authenticate an element instance with {{page.heading}}](authenticate.html).
