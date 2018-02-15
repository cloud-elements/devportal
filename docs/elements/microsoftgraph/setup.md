---
heading: Microsoft Graph
apiProvider: Microsoft  # For cases where the API Provider is different than the element name. e;g;, ServiceNow vs. ServiceNow Oauth
seo: API Provider Setup | API provider setup | Microsoft Graph | Cloud Elements API Docs
title: API Provider Setup
description: Setup tasks required to authenticate an element instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: nn
elementKey: microsoftgraph
apiKey: Application Id #In OAuth2 this is what the provider calls the apiKey, like Client ID, Consumer Key, API Key, or just Key
apiSecret: Password/PublicKey #In OAuth2 this is what the provider calls the apiSecret, like Client Secret, Consumer Secret, API Secret, or just Secret
callbackURL: Redirect URL #In OAuth2 this is what the provider calls the callbackURL, like Redirect URL, App URL, or just Callback URL
parent: Back to Element Guides
order: 5
---

# API Provider Setup

To authenticate a {{page.heading}} element instance you must register an app with {{page.apiProvider}}. Then when you authenticate, use the **{{page.apiKey}}**, **{{page.apiSecret}}**, and **{{page.callbackURL}}** from your registered app as the **API Key**, **API Secret**, and **Callback URL**.  If you plan to monitor events, also configure the **Webhook URL**.

If you've already set up an app and just need to know how to find your **{{page.apiKey}}** and **{{page.apiSecret}}**, see [Locate Credentials for Authentication](#locate-credentials-for-authentication). If you need to register an app, see [Create an Application](#create-an-application).

See the latest setup instructions in the [{{page.apiProvider}} documentation](https://apiprovider.com).

{% include callout.html content="<strong>On this page</strong></br><a href=#locate-credentials-for-authentication>Locate Credentials for Authentication</a></br><a href=#create-an-application>Create an Application</a></br><a href=#permissions>Permissions</a></br><a href=#set-up-events>Set Up Events</a>" type="info" %}

## Locate Credentials for Authentication

If you already created an application, follow the steps below to locate the **{{page.apiKey}}**, **{{page.apiSecret}}**, and **{{page.callbackURL}}**. If you have not created an app, see [Create an Application](#create-an-application).

To find your OAuth 2.0 credentials:

1. Log in to your account at [{{page.apiProvider}}](https://apps.dev.microsoft.com/#/appList).
2. Click the application that you want to connect.
3. Record the **{{page.apiKey}}**.
4. If you don't know the **{{page.apiSecret}}**, click **Generate New Password** to get a new one and record it.
4. Record the **{{page.callbackURL}}** for your app.

## Create an Application

If you have not created an application, you need one to authenticate with {{page.apiProvider}}.

To create an application:

1. Log in to your account at [{{page.apiProvider}}](https://apps.dev.microsoft.com/#/appList).
2. Click **Add an App**.
3. Enter a name, and then click **Create**
4. Record the **{{page.apiKey}}**.
5. Under **Application Secrets**, click **Generate New Password**, record the **{{page.apiSecret}}**, and then click **OK**.

    {% include important.html content="You find the Password/Public Key again and will need to generate a new one if it's lost. " %}

5. Under **Platforms**, click **Add Platform**, and then select **Web**.
6. In **Redirect URLs** enter the URL to redirect the user to at the end of the OAuth 2.0 authentication process. For example, the Cloud Elements 2.0 callback URL is `https://auth.cloudelements.io/oauth`.
7. Under **Microsoft Graph Permissions** add the permissions needed to use your app. See [Permissions](#permissions) for details.
8. Save your app.
![Key secret and URL](./img/microsoftgraph_app_registration.gif)

## Permissions
When creating your app be aware of the permissions that you set. For Calendar endpoints in the Delegated Permission section you need:

* Calendars.Read
* Calendars.ReadWrite

To authenticate you need:
* Delegated Permission: Users.Read.All (if an admin Users.Read)
* Delegated Permission: Users.ReadWrite.All (non-admin Users.ReadWrite)
* Application Permissions: Users.Read.All
* Application Permissions: Users.ReadWrite.All.

For more information see: https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/user_list_calendars

![Permissions](./img/findingPermissions.gif)


## Set Up Events

{{page.apiProvider}} supports webhooks. If you want to enable events when you authenticate an element instance, complete the steps below to set up webhooks with {{page.heading}}.

1. Log in to your account at [{{page.apiProvider}}](https://apps.dev.microsoft.com/#/appList).
2. Click the application that you want to connect.
3. Click **Edit**.
3. In **Webhook URL** enter `https://api.cloud-elements.com/elements/api-v2/events/{{page.elementKey}}`.
4. Click **Save**.
5. Test the webhook. Click **Send ping webhook** and watch for a status code of 200.
6. Record the **Webhook URL** which you will use when you set up events as the **Event Notification Callback URL**.
7. Currently when you set up webhooks in {{page.heading}} it will automatically set up the webhooks your calendar. Meaning events that are accepted or posted on your default calendar will trigger an event. If you need events for other resources (if you extend your element and want webhooks on the extended endpoints or if you want events on a specific element) you can edit the webhook in the element configuration by:
1. Go to resources
2. Choosing webhooks
3. Clicking edit
4. In the prehook change the body to have the resource of the event you are polling on
![Key secret and URL](./img/UpdateWebHooks.gif)


Next [authenticate an element instance with {{page.apiProvider}}](authenticate.html).
