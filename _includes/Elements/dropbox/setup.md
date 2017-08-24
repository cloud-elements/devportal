# API Provider Setup

To authenticate a {{page.heading}} element instance you must use a developer account to  [create an application](#create-an-application) for {{page.heading}}.  After you register an app, record the **App key**, **App secret**, and **Redirect URIs** . You use these when you authenticate an element instance as the API Key, API Secret, and Callback URL. If you plan to use events, also configure the **Webhook URIs**.

{% include callout.html content="<strong>On this page</strong></br><a href=#locate-credentials-for-authentication>Locate Credentials for Authentication</a></br><a href=#create-an-application>Create an Application</a></br><a href=#set-up-events>Set Up Events</a>" type="info" %}

## Locate Credentials for Authentication

If you already created an application, see below to locate the **App key**, **App secret**, and **Redirect URIs**. If you have not created an app, see [Create an Application](#create-an-application).

To find your OAuth 2.0 credentials:

1. Log in to your {{page.heading}} developer account at [https://https://www.dropbox.com/developers/apps](https://www.dropbox.com/developers/apps).
2. Click the application that you want to connect.
3. Record the **App key** and **App secret**.
3. Record the **Redirect URI** for your app.
![Key secret and URIs](/assets/img/elements/Dropbox/dropbox-creds.png)

## Create an Application

If you have not created an application, you need one to authenticate with {{page.heading}}.

To create an application:

1. Log in to your {{page.heading}} developer account at [https://https://www.dropbox.com/developers/apps](https://www.dropbox.com/developers/apps).
2. Click **Create app**.
3. Under Choose an API, select **{{page.heading}} API**.
3. Choose a type of access, and the name your app.
4. Click **Create app*.
3. Record the **App key** and **App secret**.
4. In **Redirect URIs**enter the URL that you will use as the Callback URL during authentication.
![Key secret and URIs](/assets/img/elements/Dropbox/dropbox-creds.png)

## Set Up Events

{{page.heading}} supports webhooks. If you want to enable events when you authenticate and element instance, complete the steps below to set up webhooks with {{page.heading}}.

1. Log in to your {{page.heading}} developer account at [https://https://www.dropbox.com/developers/apps](https://www.dropbox.com/developers/apps).
2. Click the application that you want to connect.
3. In **Webhook URIs** enter `https://api.cloud-elements.com/elements/api-v2/events/{{page.elementKey}}`.

Next [authenticate an element instance with {{page.heading}}](authenticate.html).
