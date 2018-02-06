---
heading: Evernote
apiProvider: Evernote # For cases where the API Provider is different than the element name. e;g;, ServiceNow vs. ServiceNow Oauth
seo: Endpoint Setup | Evernote | Cloud Elements API Docs
title: API Provider Setup
description: Integrate Evernote into your application via the Cloud Elements APIs.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 125
elementKey: evernote
apiKey: Consumer Key #In OAuth2 this is what the provider calls the apiKey, like Client ID, Consumer Key, API Key, or just Key
apiSecret: Consumer Secret #In OAuth2 this is what the provider calls the apiSecret, like Client Secret, Consumer Secret, API Secret, or just Secret
callbackURL: Callback URL Name #In OAuth2 this is what the provider calls the callbackURL, like Redirect URL, App URL, or just Callback URL
parent: Back to Element Guides
order: 2
---
# API Provider Setup

To authenticate an {{page.heading}} element instance you must register an app with {{page.apiProvider}}. When you authenticate, use the **{{page.apiKey}}** and **{{page.apiSecret}}** as the **Evernote OAuth API Key** and **Evernote OAuth API Secret**.

See the latest setup instructions in the [{{page.apiProvider}} documentation](https://dev.evernote.com/doc/#start).

To get your API keys:

1. Log in to your account at [{{page.apiProvider}}](https://apiprovider.com).
1. Click **GET AN API KEY**.
![Evernote Connected App step 1](img/get-keys.png)
2. Complete the request form.
3. In **API Permissions**, select **Full Access**.
4. Click **Request Key**.
3. Record the **{{page.apiKey}}** and **{{page.apiSecret}}**.
![Evernote Connected App step 3](img/EvernoteAPI3.png)

Next [authenticate an element instance with {{page.apiProvider}}](authenticate.html).
