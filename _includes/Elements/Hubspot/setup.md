# API Provider Setup

To authenticate a {{page.heading}} element instance you must use a developer account to  [create an application](#create-an-application) with {{page.heading}}. You can authenticate with {{page.heading}} in one of two ways: **OAuth 2.0** and **API Keys**. {{page.heading}} recommends API Keys for prototyping and OAuth 2.0 for production integrations. For more information, review {{page.heading}}'s [Authentication Overview](https://developers.hubspot.com/docs/methods/auth/oauth-overview).

* For authentication via OAuth 2.0, you need an application **Client ID** and **Client secret**. Use them as the for the `oauth.api.key` (Client ID) and `oauth.api.secret` (Client secret) when you authenticate with {{page.heading}}.
* For authentication via API Keys, you need the developer account **API Key** &mdash; or **HAPIkey** to use as the `hubspot.authorization.apikey`.

If you do not have a developer account visit [https://app.hubspot.com/signup/developers](https://app.hubspot.com/signup/developers).

## OAuth 2.0 Authentication

If you already created an application, see below to locate the **Client ID** and **Client secret**. If you have not created an app, see [Create an Application](#create-an-application).

To find your OAuth 2.0 credentials:

1. Log in to your Hubspot developer account at [https://app.hubspot.com/login](https://app.hubspot.com/login).
2. Click the application that you want to connect.
3. Record the **Client ID** and **Client secret**.
![Client Id and Secret](/assets/img/elements/Hubspot/client-id-secret.png)

## API Key Authentication

If you already created an application, see below to locate the **HAPIkey**. You do not need to create an application to authenticate with your **HAPIkey**.

To find your API Key:

1. Log in to your Hubspot developer account at [https://app.hubspot.com/login](https://app.hubspot.com/login).
2. Click **Get HAPIkey** on the top right section of the page. If you have not created an application, the **Get HAPIkey** is in the middle of the page.
3. Record the **HAPIkey**.
![HAPIkey](/assets/img/elements/Hubspot/HAPIkey.png)


## Create an Application

If you have not created an application, you need one to authenticate with OAuth 2.0.

To create an application:

1. Log in to your Hubspot developer account at [https://app.hubspot.com/login](https://app.hubspot.com/login).
2. Click **Create application**.
3. Enter a name and choose the visibility of the application.
4. Click the application that you just created.
3. Record the **Client ID** and **Client secret**.
![Client Id and Secret](/assets/img/elements/Hubspot/client-id-secret.png)

Next [authenticate an element instance with {{page.heading}}](authenticate.html).
