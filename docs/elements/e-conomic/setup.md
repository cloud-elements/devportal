---
heading: E-conomic
apiProvider: E-conomic # For cases where the API Provider is different than the element name. e;g;, ServiceNow vs. ServiceNow Oauth
seo: API Provider Setup | API provider setup | E-conomic | Cloud Elements API Docs
title: API Provider Setup
description: Setup tasks required to authenticate an element instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 5994
elementKey: economic
apiKey: App Secret Token #In OAuth2 this is what the provider calls the apiKey, like Client ID, Consumer Key, API Key, or just Key
apiSecret: App Public Token #In OAuth2 this is what the provider calls the apiSecret, like Client Secret, Consumer Secret, API Secret, or just Secret
callbackURL: Callback URL Name #In OAuth2 this is what the provider calls the callbackURL, like Redirect URL, App URL, or just Callback URL
parent: Back to Element Guides
order: 5
---

# API Provider Setup

To authenticate a {{page.heading}} element instance you must register an app with {{page.apiProvider}}. When you authenticate, use the **{{page.apiSecret}}** and **{{page.apiKey}}** as the (`oauth.api.key`) ,  AND (`oauth.api.secret`).

If you've already set up an app and just need to know how to find your **{{page.apiKey}}** and **{{page.apiSecret}}**, see [Locate Credentials for Authentication](#locate-credentials-for-authentication). If you need to register an app, see [Create an Application](#create-an-application).

See the latest setup instructions in the [{{page.apiProvider}} documentation](https://www.e-conomic.com/developer/authentication).

{% include callout.html content="<strong>On this page</strong></br><a href=#locate-credentials-for-authentication>Locate Credentials for Authentication</a></br><a href=#create-an-application>Create an Application</a>" type="info" %}

## Locate Credentials for Authentication

If you already created an application, follow the steps below to locate the **{{page.apiKey}}** and **{{page.apiSecret}}**. If you have not created an app, see [Create an Application](#create-an-application).

To find your OAuth 2.0 credentials:

1. Log in to your account at [{{page.apiProvider}}](https://login.e-conomic.com/global#_ga=2.13357687.1959920065.1521645272-1178512842.1521645272).
2. Click the Developer tab.
![Developer Tab](img/dev-tab.png)
3. Record the **{{page.apiKey}}** and **{{page.apiSecret}}**.
![Key secret and URL](img/economic-creds.png)

## Create an Application

If you have not created an application, you need one to authenticate with {{page.apiProvider}}.

To create an application:

1. Log in to your account at [{{page.apiProvider}}](https://login.e-conomic.com/global#_ga=2.13357687.1959920065.1521645272-1178512842.1521645272).
2. Click the Developer tab.
![Developer Tab](img/dev-tab.png)
4. Click **New app**.
5. Enter a name and select the roles that you want to grant to users authenticating with E-conomic.
6. Click **Save**.
3. Record the **{{page.apiKey}}** and **{{page.apiSecret}}**.
![Key secret and URL](img/economic-creds.png)


Next [authenticate an element instance with {{page.apiProvider}}](authenticate.html).
