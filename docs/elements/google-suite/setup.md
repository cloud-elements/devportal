---
heading: Google Suite
apiProvider: Google # For cases where the API Provider is different than the element name. e;g;, ServiceNow vs. ServiceNow Oauth
seo: API Provider Setup | API provider setup | Google Suite | Cloud Elements API Docs
title: API Provider Setup
description: Setup tasks required to authenticate an element instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 5601
elementKey: googlesuite
apiKey: Client ID #In OAuth2 this is what the provider calls the apiKey, like Client ID, Consumer Key, API Key, or just Key
apiSecret: Client secret #In OAuth2 this is what the provider calls the apiSecret, like Client Secret, Consumer Secret, API Secret, or just Secret
callbackURL: Authorized redirect URI #In OAuth2 this is what the provider calls the callbackURL, like Redirect URL, App URL, or just Callback URL
parent: Back to Element Guides
order: 5
---

# API Provider Setup

To authenticate a {{page.heading}} element instance you must create a project with a web application in the Google API console. After you create the project and app, {{page.apiProvider}} provides a **{{page.apiKey}}** and **{{page.apiSecret}}** which you will use to [authenticate an element instance](authenticate.html). You'll also need the **{{page.callbackURL}}** that you configure while creating the app.

When you set up your app, you must also enable the following Google APIs:

* Google People API
* GMail API
* Google Calendar API

If you've already set up an app and just need to know how to find your **{{page.apiKey}}** and **{{page.apiSecret}}**, see [Locate Credentials for Authentication](#locate-credentials-for-authentication). If you need to create a project and register an app, see [Create an Application](#create-an-application).

See the latest setup instructions in the [Google API documentation](https://support.google.com/googleapi/answer/7015000?hl=en&ref_topic=7014522&authuser=0).

{% include callout.html content="<strong>On this page</strong></br><a href=#locate-credentials-for-authentication>Locate Credentials for Authentication</a></br><a href=#create-an-application>Create an Application</a>" type="info" %}

## Locate Credentials for Authentication

If you already created a project and application, follow the steps below to locate the **{{page.apiKey}}**, **{{page.apiSecret}}**, and **{{page.callbackURL}}**. If you have not created an app, see [Create an Application](#create-an-application).

{% include note.html content="Your app must have the Google People, Gmail, and Calendar APIs enabled. If they are not, see <a href=#enable-apis>Enable APIs</a> for more information  " %}

To find your OAuth 2.0 credentials:

1. Log in to your account at [{{page.apiProvider}}](https://console.developers.google.com/apis/dashboard).
2. Click **Select a project**, choose your project from the list, and then click **Open**.
![Select Project](img/select.png)

    Google displays your apps and associated **{{page.apiKey}}**.

3. Click the pencil icon to see the **{{page.apiKey}}**, **{{page.apiSecret}}**, and **{{page.callbackURL}}**.
3. Record the **{{page.apiKey}}** and **{{page.apiSecret}}**.
3. Record the **{{page.callbackURL}}** for your app.
![Key secret and URL](img/sheets-creds-all.png)

## Create an Application

If you have not already created a project and application, you need one to authenticate with {{page.apiProvider}}. Creating an application is a multi-step process:

1. [Create a project](#create-a-project)
2. [Enable APIs](#enable-apis)
3. [Create a web application](#create-a-web-application)

### Create a Project

To create a project:

1. Log in to your account at [{{page.apiProvider}}](https://console.developers.google.com/apis/dashboard).
2. Click **Select a project** and click the **Create Project** button.
![Create Project](img/create-project.png)
3. Accept the terms of service.
3. Complete the required information (Project Name, email updates, and the Terms of Service).
4. Click **Create**.
![New Project](img/new-project.png)

### Enable APIs

To make all of the requests available in the {{page.heading}} element, you must enable the following APIs

* Google People API
* GMail API
* Google Calendar API

To enable APIs:

5. Select the project that you just created
6. Click **Enable APIs and Services**.
![Enable APIs](img/enable.png)
7. Search for and enable the Google People API, GMail API, and Google Calendar API.
![Search](img/search.png)

### Create a Web Application

8. Click **Credentials** on the left menu.
![Credentials](img/creds.png)
9. Click the **OAuth consent screen** tab.
10. Enter a Product Name and add any optional information, and then click **Save**.
![Consent](img/consent.png)
9. Click **Create Credentials**, and then select **OAuth Client ID**.
![Credentials](img/oauth-client.png)
10. Select **Web application** as the Application type.
11. Enter a **Name** and the **{{page.callbackURL}}** for your app. Record this as the OAuth Callback URL that you will need to authenticate.
![Client ID Page](img/client-id-page.png)
4. Click **Create**.
3. Record the **{{page.apiKey}}** and **{{page.apiSecret}}** to use when you authenticate.
![Key Secret and URL](img/sheets-creds.png)

Next [authenticate an element instance with Google Suite](authenticate.html).
