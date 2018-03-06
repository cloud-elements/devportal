---
heading: Plaid
apiProvider: Plaid
seo: API Provider Setup | API provider setup | Plaid | Cloud Elements API Docs
title: API Provider Setup
description: Setup tasks required to authenticate an element instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: plaid
elementKey: 5865
username: username  #In Basic authentication, this is the term that we have mapped to our "username" parameter
password: password #In Basic authentication, this is the term that we have mapped to our "password" parameter
parent: Back to Element Guides
order: 5
---

# API Provider Setup

To authenticate a {{page.heading}} element instance must provide information about your Plaid account and the user's bank account:

* Plaid information required:  The `public_key`, `secret`, `client_id`, and [API environment](https://plaid.com/docs/quickstart/#api-environments) (sandbox, production, or development)
* User's bank information required: Bank name (Institution) and bank credentials

See the latest setup instructions in the [{{page.heading}} documentation](https://plaid.com/docs/quickstart/).

To find the required Plaid information:

1. Log in to your account at [{{page.heading}}](https://plaid.com).
2. Click **Account**, and then select **Keys**.
![Keys](img/keys.png)
3. Record the **client_id**, **public_key**, and **secret**.
![Key secret and URL](img/plaid-creds.png)

Next [authenticate an element instance with {{page.apiProvider}}](authenticate.html).
