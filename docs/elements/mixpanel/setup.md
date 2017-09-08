---
heading: Name of Element
seo: API Provider Setup | API provider setup | Name of Element | Cloud Elements API Docs
title: API Provider Setup
description: Setup tasks required to authenticate an element instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: nn
username: API Secret  #In Basic authentication, this is the term that we have mapped to our "username" parameter
password: password #In Basic authentication, this is the term that we have mapped to our "password" parameter
callbackURL: Callback URL Name
parent: Back to Element Guides
order: 5
---

# API Provider Setup

To authenticate a {{page.heading}} element instance you must create project in {{page.heading}}. When you authenticate, use the **{{page.username}}** from the Mixpanel project.

To find your {{page.username}}:

1. Log in to your developer account at [{{page.heading}}](https://mixpanel.com).
2. Access Project Settings.
![Project Settings](img/project-settings.png)
3. Record the **{{page.username}}**.
![Credentials](img/mixpanel-creds.png)
