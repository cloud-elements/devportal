---
heading: SAP S/4 HANA Cloud
apiProvider: SAP S/4HANA Cloud
seo: API Provider Setup | SAP S/4 HANA Cloud | Cloud Elements API Docs
title: API Provider Setup
description: Setup tasks required to authenticate an element instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 6374
elementKey: saps4hanacloud
username: user  #In Basic authentication, this is the term that we have mapped to our "username" parameter
password: password #In Basic authentication, this is the term that we have mapped to our "password" parameter
parent: Back to Element Guides
order: 5
---

# API Provider Setup

To authenticate an {{page.heading}} element instance you must use your SAP S/4HANA Cloud **{{page.username}}** and **{{page.password}}**. You also must include the URL or IP address of your S/4HANA account, for example `https://myserver.s4hana.ondemand.com`, as the **SAP S/4 HANA Cloud URL** .

Next [authenticate an element instance with {{page.apiProvider}}](authenticate.html).
