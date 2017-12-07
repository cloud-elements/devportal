---
heading: Zuora v2
apiProvider: Zuora # For cases where the API Provider is different than the element name. e;g;, ServiceNow vs. ServiceNow Oauth
seo: API Provider Setup | API provider setup | Zuora | Cloud Elements API Docs
title: API Provider Setup
description: Setup tasks required to authenticate an element instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 2245
elementKey: zuorav2
apiKey: Client ID #In OAuth2 this is what the provider calls the apiKey, like Client ID, Consumer Key, API Key, or just Key
apiSecret: Client Secret #In OAuth2 this is what the provider calls the apiSecret, like Client Secret, Consumer Secret, API Secret, or just Secret
callbackURL: Callback URL Name #In OAuth2 this is what the provider calls the callbackURL, like Redirect URL, App URL, or just Callback URL
parent: Back to Element Guides
order: 5
---

# API Provider Setup

You can authenticate a {{page.heading}} element instance in one of two ways:

* Basic authentication where you supply the user name and password of the Zuora user.
* Custom where you provide the **{{page.apiKey}}** and **{{page.apiSecret}}** of the OAuth client associated with the user. See the instructions below to create an OAuth client.

## Create an OAuth Client

To use the Custom authentication workflow, you must create an OAuth Client for a user and record the **{{page.apiKey}}** and **{{page.apiSecret}}**.

To create an OAuth client:

1. Log in to your account at [{{page.apiProvider}}](https://zuora.com).
2. Click your username at the top right and navigate to **Administration Manage Users**.
3. In the OAuth Clients section, enter a name for the OAuth client.
4. Click **Create**.
3. Record the **{{page.apiKey}}** and **{{page.apiSecret}}**.
![Key secret and URL](img/zuora-creds.png)

    {% include note.html content="Make sure that you capture the secret because you cannot access it again.  " %}

5. Click **OK**.

Next [authenticate an element instance with {{page.apiProvider}}](authenticate.html).
