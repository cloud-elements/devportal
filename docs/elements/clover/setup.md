---
heading: Clover
apiProvider: Clover # For cases where the API Provider is different than the element name. e;g;, ServiceNow vs. ServiceNow Oauth
seo: API Provider Setup | API provider setup | Clover | Cloud Elements API Docs
title: API Provider Setup
description: Setup tasks required to authenticate an element instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 5217
elementKey: clover
apiKey: App ID #In OAuth2 this is what the provider calls the apiKey, like Client ID, Consumer Key, API Key, or just Key
apiSecret: App Secret #In OAuth2 this is what the provider calls the apiSecret, like Client Secret, Consumer Secret, API Secret, or just Secret
callbackURL: Site URL #In OAuth2 this is what the provider calls the callbackURL, like Redirect URL, App URL, or just Callback URL
parent: Back to Element Guides
order: 5
---

# API Provider Setup

To authenticate a {{page.heading}} element instance you must register an app with {{page.apiProvider}}. When you authenticate, use the **{{page.apiKey}}**, **{{page.apiSecret}}**, and **{{page.callbackURL}}** as the **OAuth API Key**, **OAuth API Secret**, and **OAuth Callback URL**.

In addition, the app that you want to connect to must be in use by a merchant and you must know that **Merchant ID**.

See the latest setup instructions in the [{{page.apiProvider}} documentation](https://docs.clover.com/build/web-apps/).

{% include callout.html content="<strong>On this page</strong></br><a href=#locate-credentials-for-authentication>Locate Credentials for Authentication</a></br><a href=#create-an-application>Create an Application</a>" type="info" %}

## Locate Credentials for Authentication

If you already created an application, follow the steps below to locate the **{{page.apiKey}}**, **{{page.apiSecret}}**,  **{{page.callbackURL}}**, and **Merchant ID**. If you have not created an app, see [Create an Application](#create-an-application).

To find your OAuth 2.0 credentials and Merchant ID:

1. Log in to your account at [{{page.apiProvider}}](https://www.clover.com/developers/).
2. Locate the application that you want to connect, and then click **Settings**.
3. Record the **{{page.apiKey}}**, **{{page.apiSecret}}**, and **{{page.callbackURL}}** for your app.
![Key secret and URL](img/clover-creds.png)
4. Click **Merchants**, and then record the **Merchant ID**.
![Merchant ID](img/merchant-id.png)

## Create an Application

If you have not created an application, you need one to authenticate with {{page.apiProvider}}. You also need to add pricing to the app and have at least one merchant connect to it.

To create an application:

1. Log in to your account at [{{page.apiProvider}}](https://www.clover.com/developers/).
2. Click **Create New App**.
3. Complete the required information.
4. Click **Create**.
5. Click **Settings**.
![Settings](img/settings.png)
6. Click **Web Configuration**, and then in **Site URL** enter the OAuth Callback URL.
7. Click **Save**.
6. Record the **{{page.apiKey}}**, **{{page.apiSecret}}**, and **{{page.callbackURL}}** for your app.
![Key secret and URL](img/clover-creds.png)
7. Click **Pricing** and set up your pricing options. You must add at least one subscription in addition to a free trial to preview the app.
8. Return to **Your Apps** .
9. Click **Preview in App Market**.
![Preview](img/preview.png)
10. Using a test merchant, select a subscription, and the click **Accept and Install**.

    You're returned to the **{{page.callbackURL}}** for your app.

8. Return to **Your Apps**, and then click **Merchants** under the app that you just tested.
![Merchants](img/merchants.png)
9. Record the **Merchant ID**.
![Merchant ID](img/merchant-id.png)

Next [authenticate an element instance with {{page.apiProvider}}](authenticate.html).
