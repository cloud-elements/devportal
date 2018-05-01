---
heading: Infusionsoft REST
apiProvider: Infusionsoft # For cases where the API Provider is different than the element name. e;g;, ServiceNow vs. ServiceNow Oauth
seo: API Provider Setup | Infusionsoft CRM | Cloud Elements API Docs
title: API Provider Setup
description: API Provider Setup
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 6158
elementKey: infusionsoftrest
apiKey: client_id #In OAuth2 this is what the provider calls the apiKey, like Client ID, Consumer Key, API Key, or just Key
apiSecret: client_secret #In OAuth2 this is what the provider calls the apiSecret, like Client Secret, Consumer Secret, API Secret, or just Secret
callbackURL: Callback URL  #In OAuth2 this is what the provider calls the callbackURL, like Redirect URL, App URL, or just Callback URL
parent: Back to Element Guides
order: 5
---

# API Provider Setup

To authenticate a {{page.heading}} element instance you must register an app with {{page.apiProvider}}. When you authenticate, use the **{{page.apiKey}}**, **{{page.apiSecret}}**, and **{{page.callbackURL}}** as the **API Key** (`oauth.api.key`), **API Secret** (`oauth.api.secret`), and **Callback URL** (`oauth.callback.url`).


| Infusionsoft Credential | Cloud Elements Parameter   |
| :------------- | :------------- |
|  {{page.apiKey}} | `oauth.api.key`  |
|  {{page.apiSecret}}  |oauth.api.secret |
|  {{page.callbackURL}}  |  oauth.callback.url  |

{% include callout.html content="<strong>On this page</strong></br><a href=#locate-credentials-for-authentication>Locate Credentials for Authentication</a></br><a href=#create-an-application>Create an Application</a>" type="info" %}

## Locate Credentials for Authentication

If you already created an application, follow the steps below **{{page.apiKey}}**, **{{page.apiSecret}}**, and **{{page.callbackURL}}**. If you have not created an app, see [Create an Application](#create-an-application).

To find your OAuth 2.0 credentials:

1. Sign in to your [developer account](https://keys.developer.infusionsoft.com/apps/mykeys).
3. Record the **{{page.apiKey}}** and **{{page.apiSecret}}**.
![Key secret and URL](/assets/img/elements/infusionsoft/infusionsoft_creds.png)
4. Click **Applications**, and then click **Edit**.
3. Scroll down to **Register Callback URL** and record the **{{page.callbackURL}}** for your app.

## Create an Application

If you have not created an application, you need one to authenticate with Infusionsoft. Review the [latest Infusionsoft documentation] (https://developer.infusionsoft.com/getting-started-oauth-keys/).

To create an application:

1. Log in to your [developer account](https://keys.developer.infusionsoft.com/apps/).
3. Complete the required information.
4. Enter the OAuth callback URL of your application in Register Callback URL.
4. Click **Register Application**.
3. Record the **{{page.apiKey}}** and **{{page.apiSecret}}**.
![Key secret and URL](/assets/img/elements/infusionsoft/infusionsoft_creds.png)

Next [authenticate an element instance with {{page.heading}}](authenticate.html).
