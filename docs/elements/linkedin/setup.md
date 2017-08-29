---
heading: LinkedIn
seo: API Provider Setup | API provider setup | LinkedIn | Cloud Elements API Docs
title: API Provider Setup
description: Setup tasks required to authenticate an element instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 4169
elementKey: linkedin
apiKey: Client ID
apiSecret: Client Secret
callbackURL: Authorized Redirect URL
parent: Back to Element Guides
order: 5
---

# API Provider Setup

To authenticate a {{page.heading}} element instance you must register an app with {{page.heading}}. When you authenticate, use the **{{page.apiKey}}**, **{{page.apiSecret}}**, and an **{{page.callbackURL}}** as the **API Key**, **API Secret**, and **Callback URL**.  Your app must include the correct permissions, including `rw_company_admin`

See the latest setup instructions in the [{{page.heading}} documentation](https://developer.linkedin.com/docs/oauth2).

{% include callout.html content="<strong>On this page</strong></br><a href=#locate-credentials-for-authentication>Locate Credentials for Authentication</a></br><a href=#create-an-application>Create an Application</a></br><a href=#set-up-events>Set Up Events</a>" type="info" %}

## Locate Credentials for Authentication

If you already created an application, see below to locate the **{{page.apiKey}}**, **{{page.apiSecret}}**, and **{{page.callbackURL}}**. If you have not created an app, see [Create an Application](#create-an-application).

To find your OAuth 2.0 credentials:

1. Log in to your developer account at [{{page.heading}}](https://www.linkedin.com/developer/apps/).
2. Click the application that you want to connect.
3. Record the **{{page.apiKey}}** and **{{page.apiSecret}}**.
3. Record at least one of the **{{page.callbackURL}}s** for your app.
![Key secret and URL](img/linkedin-creds.png)

{% include note.html content="The app must include the <code>rw_company_admin</code> permission to access the <code>/companies</code> resource.  " %}

## Create an Application

If you have not created an application, you need one to authenticate with {{page.heading}}.

To create an application:

1. Log in to your developer account at [{{page.heading}}](https://www.linkedin.com/developer/apps/).
2. Click **Create Application**.
3. Complete the required information.
4. Click **Submit**.
5. Update the permissions. At a minimum, select `rw_company_admin`.
3. Record the **{{page.apiKey}}** and **{{page.apiSecret}}**.
3. Record at least one of the **{{page.callbackURL}}s** for your app.
![Key secret and URL](img/linkedin-creds.png)

Next [authenticate an element instance with {{page.heading}}](authenticate.html).
