# API Provider Setup

To authenticate an {{page.heading}} element instance you must register an app with {{page.apiProvider}}. You also must establish an API key for your account. When you authenticate, use the encrypted API key (**Encrypted Key**) from your account and the **{{page.apiKey}}**, **{{page.apiSecret}}**, and **{{page.callbackURL}}** from your registered app.

| Infusionsoft Credential | Cloud Elements Parameter   |
| :------------- | :------------- |
|  Encrypted Key  | Infusionsoft Encrypted Key</br>`infusionsoft.private.key`  |
|  {{page.apiKey}} | `oauth.api.key`  |
|  {{page.apiSecret}}  | `oauth.api.secret` |
|  {{page.callbackURL}}  |  `oauth.callback.url`  |

{% include callout.html content="<strong>On this page</strong></br><a href=#locate-credentials-for-authentication>Locate Credentials for Authentication</a></br><a href=#create-an-application>Create an Application</a>" type="info" %}

## Locate Credentials for Authentication

If you already created an application and set up an API Key, follow the steps below to locate the **Encrypted Key**, **{{page.apiKey}}**, **{{page.apiSecret}}**, and **{{page.callbackURL}}**. If you have not created an app, see [Create an Application](#create-an-application).

To find your **Encrypted Key**:

1. Log in to your account at [Infusionsoft](https://www.infusionsoft.com/).
2. Navigate to **Admin>Settings**.
![Admin Settings](/assets/img/elements/infusionsoft/admin-settings.png)
3. In Application Settings, click **Application**.
4. Scroll down to the API section and record the **Encrypted Key**.
![Encrypted key](/assets/img/elements/infusionsoft/encrypted-key.png)

To find your OAuth 2.0 credentials:

1. Sign in to your [developer account](https://keys.developer.infusionsoft.com/apps/mykeys).
3. Record the **{{page.apiKey}}** and **{{page.apiSecret}}**.
![Key secret and URL](/assets/img/elements/infusionsoft/infusionsoft_creds.png)
4. Click **Applications**, and then click **Edit**.
3. Scroll down to **Register Callback URL** and record the **{{page.callbackURL}}** for your app.

## Create an Application

If you have not created an application, you need one to authenticate with Infusionsoft. You also must generate an encrypted API key. The latest Infusionsoft documentation for each of these tasks are:

* [Creating an application](https://developer.infusionsoft.com/getting-started-oauth-keys/)
* [Setting up an encrypted API Key](https://help.infusionsoft.com/userguides/get-started/tips-and-tricks/api-key)

To create an application:

1. Log in to your [developer account](https://keys.developer.infusionsoft.com/apps/).
3. Complete the required information.
4. Enter the OAuth callback URL of your application in Register Callback URL.
4. Click **Register Application**.
3. Record the **{{page.apiKey}}** and **{{page.apiSecret}}**.
![Key secret and URL](/assets/img/elements/infusionsoft/infusionsoft_creds.png)

To set up an encrypted API key:

1. Log in to your account at [Infusionsoft](https://www.infusionsoft.com/).
2. Navigate to **Admin>Settings**.
![Admin Settings](/assets/img/elements/infusionsoft/admin-settings.png)
3. In Application Settings, click **Application**.
4. Scroll down to the API section and enter a password in **API Passphrase**.
5. Click **Save**.
6. Record the **Encrypted Key** that Infusionsoft generate from your passphrase.
![Encrypted key](/assets/img/elements/infusionsoft/encrypted-key.png)

Next [authenticate an element instance with {{page.heading}}](authenticate.html).
