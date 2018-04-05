---
heading: Insightly
apiProvider: Insightly
seo: API Provider Setup | API provider setup | Insightly | Cloud Elements API Docs
title: API Provider Setup
description: Setup tasks required to authenticate an element instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 5993
elementKey: insightly
username: User Name or Email Address  #In Basic authentication, this is the term that we have mapped to our "username" parameter
password: API key #In Basic authentication, this is the term that we have mapped to our "password" parameter
parent: Back to Element Guides
order: 5
---

# API Provider Setup

To authenticate a {{page.heading}} element instance you must use the **{{page.username}}**  that you use to log in to {{page.heading}} and the **{{page.password}}**.

See the latest setup instructions in the [{{page.heading}} documentation](https://support.insight.ly/hc/en-us/articles/204864594-Finding-your-Insightly-API-key).

To find your credentials:

1. Log in to your account at [{{page.heading}}](https://nsightly.com).
2. Click your user profile in the top left, and then click **User Settings**.

    You should land on the User Settings page, but if not click **User Settings** just to the left of the main page.

2. Scroll to the bottom to find your API key.
![Key secret and URL](img/insightly-creds.png)

Next [authenticate an element instance with {{page.apiProvider}}](authenticate.html).
