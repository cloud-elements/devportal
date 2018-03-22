---
heading: Name of Element
apiProvider: Company Name # For cases where the API Provider is different than the element name. e;g;, ServiceNow vs. ServiceNow Oauth
seo: API Provider Setup | API provider setup | Name of Element | Cloud Elements API Docs
title: API Provider Setup
description: Setup tasks required to authenticate an element instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: nn
elementKey: key
apiKey: Key Name #In OAuth2 this is what the provider calls the apiKey, like Client ID, Consumer Key, API Key, or just Key
apiSecret: Secret Name #In OAuth2 this is what the provider calls the apiSecret, like Client Secret, Consumer Secret, API Secret, or just Secret
callbackURL: Callback URL Name #In OAuth2 this is what the provider calls the callbackURL, like Redirect URL, App URL, or just Callback URL
parent: Back to Element Guides
order: 5
---

# API Provider Setup

To authenticate a {{page.heading}} element instance you must register an app with {{page.apiProvider}}. When you authenticate, use the **{{page.apiKey}}**, **{{page.apiSecret}}**, and **{{page.callbackURL}}** as the **API Key** (`oauth.api.key`), **API Secret** (`oauth.api.secret`), and **Callback URL** (`oauth.callback.url`).  If you plan to monitor events, also configure the **Webhook URL**.

If you've already set up an app and just need to know how to find your **{{page.apiKey}}** and **{{page.apiSecret}}**, see [Locate Credentials for Authentication](#locate-credentials-for-authentication). If you need to register an app, see [Create an Application](#create-an-application).

See the latest setup instructions in the [{{page.apiProvider}} documentation](https://apiprovider.com).

{% include callout.html content="<strong>On this page</strong></br><a href=#locate-credentials-for-authentication>Locate Credentials for Authentication</a></br><a href=#create-an-application>Create an Application</a></br><a href=#set-up-events>Set Up Events</a>" type="info" %}

## Locate Credentials for Authentication

If you already created an application, follow the steps below to locate the **{{page.apiKey}}**, **{{page.apiSecret}}**, and **{{page.callbackURL}}**. If you have not created an app, see [Create an Application](#create-an-application).

To find your OAuth 2.0 credentials:

1. Log in to your account at [{{page.apiProvider}}](https://apiprovider.com).
2. Click the application that you want to connect.
3. Record the **{{page.apiKey}}** and **{{page.apiSecret}}**.
3. Record the **{{page.callbackURL}}** for your app.
![Key secret and URL](img/hootsuite-creds.png)

## Create an Application

If you have not created an application, you need one to authenticate with {{page.apiProvider}}.

To create an application:

1. Log in to your account at [{{page.apiProvider}}](https://apiprovider.com).
2. Click **Create New App**.
3. Complete the required information.
4. If you plan to monitor events at {{page.apiProvider}}, enter `https://console.cloud-elements.com/elements/api-v2/events/{{page.heading}}`.
4. Click **Create**.
2. Click the application that you want to connect.
3. Record the **{{page.apiKey}}** and **{{page.apiSecret}}**.
3. Record the **{{page.callbackURL}}** for your app.
![Key secret and URL](img/hootsuite-creds.png)

## Set Up Events

{{page.apiProvider}} supports webhooks. If you want to enable events when you authenticate an element instance, complete the steps below to set up webhooks with {{page.heading}}.

1. Log in to your developer account at [{{page.apiProvider}}](https://apiprovider.com).
2. Click the application that you want to connect.
3. Click **Edit**.
3. In **Webhook URL** enter `https://api.cloud-elements.com/elements/api-v2/events/{{page.elementKey}}`.
4. Click **Save**.
5. Test the webhook. Click **Send ping webhook** and watch for a status code of 200.
6. Record the **Webhook URL** which you will use when you set up events as the **Event Notification Callback URL**.

Next [authenticate an element instance with {{page.apiProvider}}](authenticate.html).
