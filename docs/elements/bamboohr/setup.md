---
heading: BambooHR
apiProvider: BambooHR
seo: API Provider Setup | API provider setup | BambooHR | Cloud Elements API Docs
title: API Provider Setup
description: Setup tasks required to authenticate an element instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 66315
elementKey: bamboohr
username: API Key  #In Basic authentication, this is the term that we have mapped to our "username" parameter
password: BambooHR Domain #In Basic authentication, this is the term that we have mapped to our "password" parameter
parent: Back to Element Guides
order: 5
---

# API Provider Setup

To authenticate a {{page.heading}} element instance you must use your **{{page.username}}** and the **{{page.password}}** that you use to log in to {{page.heading}}. Each user has their own **{{page.username}}**, while the **{{page.password}}** is unique to their company and appears in the BambooHR url as **{{page.password}}**.bamboohr.com.

See the latest setup instructions in the [{{page.heading}} documentation](https://help.bamboohr.com/hc/en-us/articles/216835517-Create-a-New-API-Key?flash_digest=a2f742dd39e212270c61146efe8fa202c083fd77).
To create an API Key:

1. Log in to your account at [{{page.heading}}](https://bamboohr.com).
2. Click your profile at the top right.
3. Click **API Keys**.
![BambooHR API Keys](https://dyzz9obi78pm5.cloudfront.net/app/image/id/5b082a56ad121cdd6988fe9d/n/bamboo-api-key.png)
4. Click **Add New Key**.
5. Enter a name, and then click **Generate Key**.
6. Record the **{{page.username}}** .
![Key secret and URL](https://dyzz9obi78pm5.cloudfront.net/app/image/id/5b082b49ec161c815934a871/n/bamboohr-creds.png)

You can also use an **{{page.username}}** specifically for integrations. See [BambooHR's instructions to set up an integration-only API Key](https://help.bamboohr.com/hc/en-us/articles/216835517-Create-a-New-API-Key?flash_digest=a2f742dd39e212270c61146efe8fa202c083fd77).

Next [authenticate an element instance with {{page.apiProvider}}](authenticate.html).
