# API Provider Setup

To authenticate a {{page.heading}} element instance you must create a project with a web application in the Google API console, enable the {{page.gAPIs}}, and establish OAuth 2.0 credentials. When you authenticate, use the OAuth 2.0 credentials **{{page.apiKey}}**, **{{page.apiSecret}}**, and **{{page.callbackURL}}** as the **API Key**, **API Secret**, and **Callback URL**.

See the latest setup instructions in the [Google API documentation](https://support.google.com/googleapi/answer/7015000?hl=en&ref_topic=7014522&authuser=0).

{% include callout.html content="<strong>On this page</strong></br><a href=#locate-credentials-for-authentication>Locate Credentials for Authentication</a></br><a href=#create-an-application>Create an Application</a></br><a href=#enable-google-apis>Enable Google APIs</a>" type="info" %}

## Locate Credentials for Authentication

If you already created a project and application, follow the steps below to locate the **{{page.apiKey}}**, **{{page.apiSecret}}**, and **{{page.callbackURL}}**. If you have not created an app, see [Create an Application](#create-an-application).

To find your OAuth 2.0 credentials:

1. Log in to your account at [Google](https://console.developers.google.com/apis/dashboard).
2. Click **Select a project**, choose your project from the list, and then click **Open**.
![Select Project](/assets/img/elements/Google/select.png)

    Google displays your apps and associated **{{page.apiKey}}**.

3. Click the pencil icon to see the **{{page.apiKey}}**, **{{page.apiSecret}}**, and **{{page.callbackURL}}**.
3. Record the **{{page.apiKey}}** and **{{page.apiSecret}}**.
3. Record the **{{page.callbackURL}}** for your app.
![Key secret and URL](/assets/img/elements/Google/google-creds-all.png)

You must also enable the {{page.gAPIs}}. For the steps see [Enable Google APIs](#enable-google-apis).

## Create an Application

If you have not already created a project and application, you need one to authenticate with {{page.heading}}.

To create a project and application:

1. Log in to your account at [Google](https://console.developers.google.com/apis/dashboard).
2. Click **Select a project** and click the **Create Project** button.
![Create Project](/assets/img/elements/Google/create-project.png)
3. Accept the terms of service.
3. Complete the required information (Project Name, email updates, and the Terms of Service).
4. Click **Create**.
![New Project](/assets/img/elements/Google/new-project.png)
5. Select the project that you just created
6. Click **Enable APIs and Services**.
![Enable APIs](/assets/img/elements/Google/enable.png)
7. Search for and enable the {{page.gAPIs}}.
8. Click **Credentials** on the left menu.
9. Click the **OAuth consent screen** tab.
10. Enter a Product Name and add any optional information, and then click **Save**.
![Consent](/assets/img/elements/Google/consent.png)
9. Click **Create Credentials**, and then select **OAuth Client ID**.
![Credentials](/assets/img/elements/Google/oauth-client.png)
10. Select **Web application** as the Application type.
11. Enter a **Name** and the **{{page.callbackURL}}** for your app. Record this as the OAuth Callback URL that you will need to authenticate.
![Client ID Page](/assets/img/elements/Google/client-id-page.png)
4. Click **Create**.
3. Record the **{{page.apiKey}}** and **{{page.apiSecret}}** to use when you authenticate.
![Key Secret and URL](/assets/img/elements/Google/google-creds.png)

## Enable Google APIs

To enable API requests from Cloud Elements or your app to access {{page.heading}}, you must enable the Google Drive API and the Google Calendar API. If you do not enable the APIs, you might get 403 errors in your response with a `providerMessage` such as:

```json
{
  "providerMessage": "error - {code=403, message=Google Calendar API has not been used in project ......}"
}

```

To enable the required Google APIs:

6. On the Dashboard page, click **Enable APIs and Services**.
![Enable APIs](/assets/img/elements/Google/enable.png)
7. Search for and enable the {{page.gAPIs}}.

Next [authenticate an element instance with Google Calendar](authenticate.html).
