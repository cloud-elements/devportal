---
heading: Fortnox
apiProvider: Fortnox
seo: API Provider Setup | API provider setup | Fortnox | Cloud Elements API Docs
title: API Provider Setup
description: Setup tasks required to authenticate an element instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 5866
elementKey: fortnox
username: username  #In Basic authentication, this is the term that we have mapped to our "username" parameter
password: password #In Basic authentication, this is the term that we have mapped to our "password" parameter
parent: Back to Element Guides
order: 5
---

# API Provider Setup

To authenticate a {{page.heading}} element instance you must use the **Client Secret** associated with your app and the **Authorization Code** of your integration.

See the latest setup instructions in the [{{page.heading}} documentation](https://developer.fortnox.se/documentation/general/authentication/).

1. Complete the [New Integration form](https://developer.fortnox.se/new-integration/).
2. Record the **Client-Secret** that Fortnox provides.
3. [Publish the integration](https://developer.fortnox.se/publish-integration/) to make it available to your customers.
4. Log in to Fortnox account and then select **Manage Users** from the profile list.
![Manage Users](img/manage-users.png)
5. At the bottom of the page, click **Add Integration** and locate your integration by Client ID.
6. After you connect, record the API code. This is the **Authorization Code** needed to authenticate.
![Authorization Code](img/auth-code.png)

You can use each authorization code only once and must generate a new one for each authenticated element instance.

Next [authenticate an element instance with {{page.apiProvider}}](authenticate.html).
