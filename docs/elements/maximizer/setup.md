---
heading: Maximizer
apiProvider: Maximizer # For cases where the API Provider is different than the element name. e;g;, ServiceNow vs. ServiceNow Oauth
seo: API Provider Setup | API provider setup | Maximizer | Cloud Elements API Docs
title: API Provider Setup
description: Setup tasks required to authenticate an element instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 5127
elementKey: maximizer
apiKey: Key Name #In OAuth2 this is what the provider calls the apiKey, like Client ID, Consumer Key, API Key, or just Key
apiSecret: Secret Name #In OAuth2 this is what the provider calls the apiSecret, like Client Secret, Consumer Secret, API Secret, or just Secret
callbackURL: Callback URL Name #In OAuth2 this is what the provider calls the callbackURL, like Redirect URL, App URL, or just Callback URL
parent: Back to Element Guides
order: 5
---

# API Provider Setup

To authenticate a {{page.heading}} element instance you get API access to Maximizer and have Maximizer set up an OAuth Client Profile. When you authenticate, use the **{{page.apiKey}}**, **{{page.apiSecret}}**, and **{{page.callbackURL}}** in your OAuth Client Profile as the **API Key**, **API Secret**, and **Callback URL**.

See the latest setup instructions in the [{{page.apiProvider}} documentation](https://developer.maximizer.com/doc/maximizerwebauthentication/setting-oauth-client-profile-maximizer).

Next [authenticate an element instance with {{page.apiProvider}}](authenticate.html).
