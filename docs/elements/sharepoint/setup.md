---
heading: Sharepoint
apiProvider: Microsoft # For cases where the API Provider is different than the element name. e;g;, ServiceNow vs. ServiceNow Oauth
seo: API Provider Setup | API provider setup | Sharepoint | Cloud Elements API Docs
title: API Provider Setup
description: Setup tasks required to authenticate an element instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 30
elementKey: sharepoint
apiKey: Client Id #In OAuth2 this is what the provider calls the apiKey, like Client ID, Consumer Key, API Key, or just Key
apiSecret: Client Secret  #In OAuth2 this is what the provider calls the apiSecret, like Client Secret, Consumer Secret, API Secret, or just Secret
callbackURL: Redirect URI #In OAuth2 this is what the provider calls the callbackURL, like Redirect URL, App URL, or just Callback URL
parent: Back to Element Guides
order: 5
---

# API Provider Setup

To authenticate a {{page.heading}} element instance you must register an app with {{page.apiProvider}}. When you authenticate, use the **{{page.apiKey}}**, **{{page.apiSecret}}**, and **{{page.callbackURL}}** as the **API Key** (`oauth.api.key`), **API Secret** (`oauth.api.secret`), and **Callback URL** (`oauth.callback.url`). You'll also need your Sharepoint Site Collection URL as the **Sharepoint Site Address** (`sharepoint.site.address`).  The Sharepoint Site Collection URL is the initial portion of your URL, for example in `https://cloudelements1.sharepoint.com/SitePages/DevHome.aspx`, `cloudelements1` is the Sharepoint Site Collection URL.

Note the following:
* Even though OAuth has security inherent in the protocol, OAuth authentication with SharePoint must use https, so your version of Sharepoint must have https enabled for OAuth to work. You can use OAuth internally as a dev environment without https, but it will not connect externally to the SharePoint element.
* Note that our SharePoint Element works with the Sharepoint REST API. Not all versions of SharePoint support the 2013 API so verify the level supported by the endpoint you’re connecting to.

See the latest setup instructions in the [{{page.apiProvider}} documentation](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/register-sharepoint-add-ins#to-register-by-using-appregnewaspx).

## Register an Application

These steps include instruction to register by using AppRegNew.aspx. Microsoft provides other ways, including registration through Microsoft Visual Studio. See their [documentation](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/register-sharepoint-add-ins#to-register-by-using-appregnewaspx) for more details.

To register an application:

1. Go to `https://<site collection url>/_layouts/15/AppRegNew.aspx`, replacing `<site collection url>` with your actual url. For example in `https://cloudelements1.sharepoint.com/SitePages/DevHome.aspx`, `cloudelements1.sharepoint.com` is the Sharepoint Site Collection URL.
2. Complete the forms by entering your information or generating the id and secret.
3. Enter the callback URL for your application in Redirect URI.
4. Click **Create**.
3. Record the **{{page.apiKey}}** and **{{page.apiSecret}}**.
3. Record the **{{page.callbackURL}}** for your app.
![Key secret and URL](https://dyzz9obi78pm5.cloudfront.net/app/image/id/5b1aeaf88e121c604bf5ed0c/n/sharepoint-creds.png)

## Enable Sharing

When enabling the Microsoft SharePoint Element, be sure that sharing is enabled by your admin in the instance of SharePoint you are connecting with. Sharing is disabled by default when Sharepoint is initially started.

For detailed steps from Microsoft, see [https://support.office.com/en-us/article/turn-external-sharing-on-or-off-for-sharepoint-online-6288296a-b6b7-4ea4-b4ed-c297bf833e30](https://support.office.com/en-us/article/turn-external-sharing-on-or-off-for-sharepoint-online-6288296a-b6b7-4ea4-b4ed-c297bf833e30).

To turn on External Sharing:

1. Select the app launcher icon <img src="https://support.content.office.net/en-us/media/3b8a317e-13ba-4bd4-864e-1ccd47af39ee.png" alt="launcher" class="inlineImage">, and the click **Admin** to open the Office 365 admin center.
2. In the left pane, choose **Admin centers > SharePoint**.
![Admin](https://dyzz9obi78pm5.cloudfront.net/app/image/id/5b1af5406e121c383f20b40b/n/admin-sharepoint.png)
3. On the Sharepoint Admin Center page, click **sharing** in the left menu.
4. Under **Sharing outside your organization**, select **Allow sharing to authenticated external users and using anonymous access links**.
5. Set up any additional settings that you want, and then click **OK**.





In the left pane, click sharing.





Next [authenticate an element instance with {{page.apiProvider}}](authenticate.html).
