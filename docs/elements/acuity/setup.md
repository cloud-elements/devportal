---
heading: Acuity Scheduling
apiProvider: Acuity Scheduling # For cases where the API Provider is different than the element name. e;g;, ServiceNow vs. ServiceNow Oauth
seo: API Provider Setup | API provider setup | Acuity Scheduling | Cloud Elements API Docs
title: API Provider Setup
description: Setup tasks required to authenticate an element instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementKey: acuityscheduling
elementId: 6156
apiKey: Client ID #In OAuth2 this is what the provider calls the apiKey, like Client ID, Consumer Key, API Key, or just Key
apiSecret: Client Secret  #In OAuth2 this is what the provider calls the apiSecret, like Client Secret, Consumer Secret, API Secret, or just Secret
callbackURL: Redirect URI #In OAuth2 this is what the provider calls the callbackURL, like Redirect URL, App URL, or just Callback URL
parent: Back to Element Guides
order: 5
---

# API Provider Setup

To authenticate an {{page.heading}} element instance you must register an OAuth2 Account. When you authenticate, use the **{{page.apiKey}}**, **{{page.apiSecret}}**, and **{{page.callbackURL}}** as the **API Key** (`oauth.api.key`), **API Secret** (`oauth.api.secret`), and **Callback URL** (`oauth.callback.url`).

You can view the **{{page.apiKey}}**, **{{page.apiSecret}}**, and **{{page.callbackURL}}** only immediately after you register an OAuth2 Account.

## Register

See the latest setup instructions in the [{{page.apiProvider}} documentation](https://developers.acuityscheduling.com/docs/oauth2).

1. Navigate to the  [{{page.apiProvider}} OAuth2 Account Registration page](https://acuityscheduling.com/oauth2/register).
3. Complete the required information, and then click **Register**.
3. Record the **{{page.apiKey}}**, **{{page.apiSecret}}**, and **{{page.callbackURL}}** for your app.
![Key secret and URL](img/acuity-creds.png)

Next [authenticate an element instance with {{page.apiProvider}}](authenticate.html).
