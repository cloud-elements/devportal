---
heading: Hootsuite
seo: API Provider Setup | API provider setup | Hootsuite | Cloud Elements API Docs
title: API Provider Setup
description: Setup tasks required to authenticate an element instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 4066
elementKey: hootsuite
parent: Back to Element Guides
order: 5
---

# API Provider Setup

To authenticate a {{page.heading}} element instance you must register an app with {{page.heading}} and request credentials. When you authenticate, use the **REST API Client ID**, **REST API Client Secret**, and **API Callback URL** as the API Key, API Secret, and Callback URL. If you plan to monitor events, also configure the **Webhook URL**.

See the latest setup instructions in the [{{page.heading}} documentation](https://hootsuite.com/developers/app-directory/quickstart/app).

{% include callout.html content="<strong>On this page</strong></br><a href=#locate-credentials-for-authentication>Locate Credentials for Authentication</a></br><a href=#create-an-application>Create an Application</a></br><a href=#set-up-events>Set Up Events</a>" type="info" %}

## Locate Credentials for Authentication

If you already created an application, see below to locate the **REST API Client ID**, **REST API Client Secret**, and **API Callback URL**. If you have not created an app, see [Create an Application](#create-an-application).

To find your OAuth 2.0 credentials:

1. Log in to your developer account at [{{page.heading}}](https://hootsuite.com/developers/my-apps).
2. Click the application that you want to connect.
3. Record the **REST API Client ID** and **REST API Client Secret**.
3. Record the **API Callback URL** for your app.
![Key secret and URL](img/hootsuite-creds.png)

## Create an Application

If you have not created an application, you need one to authenticate with {{page.heading}}.

To create an application:

1. Log in to your developer account at [{{page.heading}}](https://hootsuite.com/developers/my-apps).
2. Click **Create New App**.
3. Complete the required information.
4. If you plan to monitor events at {{page.heading}}, see [Set Up Events](#set-up-events) before you add a **Webhook URL**.
4. Click **Create**.
2. Click the application that you want to connect.
3. Record the **REST API Client ID** and **REST API Client Secret**.
3. Record the **API Callback URL** for your app.
![Key secret and URL](img/hootsuite-creds.png)

## Set Up Events

{{page.heading}} supports webhooks. If you want to enable events when you authenticate an element instance configure the Webhook URL at {{page.heading}}.You must append the element instance ID encoded with Base 64 to the end of  the webhook URL. Because of this, you must authenticate an element instance first with a placeholder Event Notification Callback URL. After you have the element ID, set up the Webhook URL as described below, and then update the element instance.

1. Log in to your developer account at [{{page.heading}}](https://hootsuite.com/developers/my-apps).
2. Click the application that you want to connect.
3. Click **Edit**.
3. In **Webhook URL** enter `https://api.cloud-elements.com/elements/api-v2/events/{{page.elementKey}}/<Base 64 Element ID>`.
4. Click **Save**.
5. Test the webhook. Click **Send ping webhook** and watch for a status code of 200.
6. Record the **Webhook URL** which you will use when you set up events as the **Event Notification Callback URL**.

Next [authenticate an element instance with {{page.heading}}](authenticate.html).
