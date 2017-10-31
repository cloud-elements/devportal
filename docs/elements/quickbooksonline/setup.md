---
heading: QuickBooks Online
seo: API Provider Setup | QuickBooks Online | Cloud Elements API Docs
title: API Provider Setup
description: Endpoint Setup
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 39
apiKey: Client ID #In OAuth2 this is what the provider calls the apiKey, like Client ID, Consumer Key, API Key, or just Key
apiSecret: Client Secret #In OAuth2 this is what the provider calls the apiSecret, like Client Secret, Consumer Secret, API Secret, or just Secret
callbackURL: Redirect URI #In OAuth2 this is what the provider calls the callbackURL, like Redirect URL, App URL, or just Callback URL
parent: Back to Element Guides
order: 5
---

# API Provider Setup

To authenticate a {{page.heading}} element instance, complete the setup steps described in this section.

To set up the API provider:

1. Via a web browser, log in to your QuickBooks account at [https://developer.intuit.com/us](https://developer.intuit.com/us).
2. In the menu on the top, click __My Apps__.
3. Click __Create new app__.
4. Click __Select APIs__ under __Just start coding__.
5. Select __Accounting__ and __Payments__ and click __Create app__.
6. Note the following in the __Keys__ section, which you will need to authenticate a Cloud Elements QuickBooks element instance with QuickBooks.

    | OAuth 2.0 | OAuth 1.0   |
    | :------------- | :------------- |
    |  {{page.apiKey}} </br> {{page.apiSecret}} </br> {{page.callbackURL}}  |  App token</br>OAuth Consumer Key</br>OAuth Consumer Secret  |


Next [authenticate an element instance with {{page.heading}}](authenticate.html).
