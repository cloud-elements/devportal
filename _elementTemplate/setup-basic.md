---
heading: Name of Element
apiProvider: Company Name
seo: API Provider Setup | Name of Element | Cloud Elements API Docs
title: API Provider Setup
description: Setup tasks required to authenticate an element instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: nn
elementKey: key
username: username  #In Basic authentication, this is the term that we have mapped to our "username" parameter
password: password #In Basic authentication, this is the term that we have mapped to our "password" parameter
parent: Back to Element Guides
order: 5
---

# API Provider Setup

To authenticate a {{page.heading}} element instance you must use the **{{page.username}}** and **{{page.password}}** that you use to log in to {{page.apiProvider}}.

See the latest setup instructions in the [{{page.heading}} documentation](https://support.bigcommerce.com/articles/Public/Legacy-API-Accounts#creating).

To find your credentials:

1. Log in to your account at [{{page.heading}}](https://apiprovider.com).
2. In the sidebar, click **Advanced Settings**, and then click **Legacy API Settings**.
2. Click the ellipses next to the account that you want to connect, and then click **Edit**.
![Key secret and URL](img/accounts.png)
3. Record the **{{page.username}}** and **{{page.password}}**.
![Key secret and URL](img/bigcommerce-creds.png)

Next [authenticate an element instance with {{page.apiProvider}}](authenticate.html).
