# API Provider Setup

To authenticate a {{page.heading}} element instance you must configure a {{page.product}} product with {{page.apiProvider}}. When you authenticate, use the LaunchBI **{{page.apiKey}}**, **{{page.apiSecret}}**, and **{{page.callbackURL}}** as the **OAuth API Key** (`oauth.api.key`), **OAuth API Secret** (`oauth.api.secret`), and **Callback URL** (`oauth.callback.url`).

If you've already configured a {{page.product}} product and just need to know how to find your **{{page.apiKey}}** and **{{page.apiSecret}}**, see [Locate Credentials for Authentication](#locate-credentials-for-authentication). If you need to configure a product, see [Configure a LaunchBI Product](#configure-a-launchbi-product).

{% include callout.html content="<strong>On this page</strong></br><a href=#locate-credentials-for-authentication>Locate Credentials for Authentication</a></br><a href=#configure-a-launchbi-product>Configure a LaunchBI Product</a>" type="info" %}

## Locate Credentials for Authentication

If you already created an application, follow the steps below to locate the **{{page.apiKey}}**, **{{page.apiSecret}}**, and **{{page.callbackURL}}**. If you have not created an app, see [Configure a LaunchBI Product](#configure-a-launchbi-product).

To find your OAuth 2.0 credentials:

1. Log in to your account at [{{page.apiProvider}}](https://launchbi.launchworks.com/launchbi-admin/).
2. Find the Inventory Name, and then click **Edit** on the right.
3. Click **Manage OAuth** on the top right.
3. Record the **{{page.apiKey}}**, **{{page.apiSecret}}**, and **{{page.callbackURL}}**.
![Key secret and URL](/assets/img/elements/launchbi/launchbi-creds.png)

## Configure a LaunchBI Product

If you have not created an application, you need one to authenticate with {{page.apiProvider}}.

To create an application:

1. Log in to your account at [{{page.apiProvider}}](https://launchbi.launchworks.com/launchbi-admin/).
2. Click **New User? Start a 14 day trial**.
3. Complete the **Create New Account** form, accept the terms and privacy policy, and then click **Create My Account**.
4. Complete the **Billing Information** form, and then click **Purchase**.
5. On Choose Product, select **{{page.product}}**, and then click **Next**.
6. Choose the term: trial or 1 year.
7. Complete the **New {{page.product}} Configuration** form, and then click **Create**.
8. Record the **{{page.apiKey}}** as the **OAuth API Secret** (`oauth.api.secret`).
9. Contact LaunchBI support for your **{{page.apiSecret}}** and **{{page.callbackURL}}**.

Next [authenticate an element instance with {{page.apiProvider}}](authenticate.html).
