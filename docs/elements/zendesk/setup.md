---
heading: Zendesk
seo: API Provider Setup | Service provider setup | Zendesk | Cloud Elements API Docs
title: API Provider Setup
description: Service provider setup
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 41
elementKey: key
apiKey: Unique Identifier
apiSecret: Secret
callbackURL: Redirect URL
parent: Back to Element Guides
order: 5
---

# API Provider Setup

To authenticate a {{page.heading}} element instance you must register an app with {{page.heading}}. When you authenticate, use the **{{page.apiKey}}**, **{{page.apiSecret}}**, and **{{page.callbackURL}}** as the **API Key**, **API Secret**, and **Callback URL**.

See the latest setup instructions in the [{{page.heading}} documentation](https://support.zendesk.com/hc/en-us/articles/203663836-Using-OAuth-authentication-with-your-application).

{% include callout.html content="<strong>On this page</strong></br><a href=#locate-credentials-for-authentication>Locate Credentials for Authentication</a></br><a href=#create-an-application>Create an Application</a>" type="info" %}

## Locate Credentials for Authentication

If you already created an application, see below to locate the **{{page.apiKey}}**, **{{page.apiSecret}}**, and **{{page.callbackURL}}**. If you have not created an app, see [Create an Application](#create-an-application).

To find your OAuth 2.0 credentials:

1. Log in to Zendesk unique web address.
2. On sidebar, click **Admin**.
![Admin](img/admin.png)
2. Scroll down to Channels, and then click **API**.
![Channels](img/channels.png)
4. Click **OAuth Clients**, and then click the application that you want to connect.
3. Record the **{{page.apiKey}}** and **{{page.apiSecret}}**.
3. Record the **{{page.callbackURL}}** for your app.
![Key secret and URL](img/zendesk-creds.png)

## Create an Application

If you have not created an application, you need one to authenticate with {{page.heading}}.

To create an application:

1. Log in to Zendesk unique web address.
2. On sidebar, click **Admin**.
![Admin](img/admin.png)
2. Scroll down to Channels, and then click **API**.
![Channels](img/channels.png)
4. Click **OAuth Clients**, and then click the + button.
![Create Button](img/btn_create.png)
3. Complete the required information.
3. Record the **{{page.apiKey}}**  and the **{{page.callbackURL}}s** for your app.
4. Click **Save**.
5. Record the **{{page.apiSecret}}**.
6. Click **Save**.
![Key secret and URL](img/zendesk-creds.png)

Next [authenticate an element instance with {{page.heading}}](authenticate.html).
