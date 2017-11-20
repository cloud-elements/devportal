---
heading: Square
seo: API Provider Setup | API provider setup | Square | Cloud Elements API Docs
title: API Provider Setup
description: Setup tasks required to authenticate an element instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 5124
elementKey: key
apiKey: Application ID #In OAuth2 this is what the provider calls the apiKey, like Client ID, Consumer Key, API Key, or just Key
apiSecret: Application Secret #In OAuth2 this is what the provider calls the apiSecret, like Client Secret, Consumer Secret, API Secret, or just Secret
callbackURL: Redirect URL #In OAuth2 this is what the provider calls the callbackURL, like Redirect URL, App URL, or just Callback URL
parent: Back to Element Guides
order: 5
---

# API Provider Setup

To authenticate a {{page.heading}} element instance you must register an app with {{page.heading}}. When you authenticate, use the **{{page.apiKey}}**, **{{page.apiSecret}}**, and **{{page.callbackURL}}** as the **API Key**, **API Secret**, and **Callback URL**.  If you plan to monitor events, also configure the **Webhook URL**.

See the latest setup instructions in the [{{page.heading}} documentation](https://docs.connect.squareup.com/articles/getting-started).

{% include callout.html content="<strong>On this page</strong></br><a href=#locate-credentials-for-authentication>Locate Credentials for Authentication</a></br><a href=#create-an-application>Create an Application</a></br><a href=#set-up-events>Set Up Events</a>" type="info" %}

## Locate Credentials for Authentication

If you already created an application, follow the steps below to locate the **{{page.apiKey}}**, **{{page.apiSecret}}**, and **{{page.callbackURL}}**. If you have not created an app, see [Create an Application](#create-an-application).

To find your OAuth 2.0 credentials:

1. Log in to your account at [{{page.heading}}](https://connect.squareup.com/apps).
2. Click the application that you want to connect.
3. Record the **{{page.apiKey}}**.
![Application ID](img/app_id.png)
4. Click the **OAuth** tab, and then record the **{{page.apiSecret}}** and **{{page.callbackURL}}**.
![Key secret and URL](img/oauth_creds.png)

## Create an Application

If you have not created an application, you need one to authenticate with {{page.heading}}.

To create an application:

1. Log in to your account at [{{page.heading}}](https://connect.squareup.com/apps).
2. Click the application that you want to connect.
2. On the Application Dashboard, click **New Application**.
3. Enter a name, agree to the terms of service, and then click **Create Application**.
![New Application](img/new-app.png)
3. Record the **{{page.apiKey}}**.
![Application ID](img/app_id.png)
2. Click the **OAuth** tab, and then enter your OAuth callback URL in **{{page.callbackURL}}**.
3. Record the **{{page.apiSecret}}** and **{{page.callbackURL}}**.
![Key secret and URL](img/oauth_creds.png)

Next [authenticate an element instance with {{page.heading}}](authenticate.html).
