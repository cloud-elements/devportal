---
heading: Facebook Lead Ads
seo: Endpoint Setup | Facebook Lead Ads | Cloud Elements API Docs
title: Endpoint Setup
description: Integrate Facebook Lead Ads into your application via the Cloud Elements APIs.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 202
parent: Back to Element Guides
order: 2
---
## Endpoint Setup

To set up the Facebook Lead Ads endpoint, you need to have a developer account and create or already have an app.

__Note__: Facebook provides the most up-to-date and detailed setup instructions at [https://developers.facebook.com/docs/apps/register](https://developers.facebook.com/docs/apps/register).

To create an app:

1. Log in to your Facebook Lead Ads developer account at [https://developers.facebook.com/](https://developers.facebook.com/).
1. If you don't already have one, create a developer account.
1. Create a new Facebook app.

    __Note__: The Add App button is located in several places, but an easy way to get to it is from your menu at the the top of any Facebook for developers page:
    ![Facebook Add App](https://cl.ly/3u393Q30450G/Add%20App.png)
1. Complete the Create a New App ID form.
  * For the Category, select __Apps for Pages__.
    ![Facebook Add App ID](https://cl.ly/3v3L3z2n210z/Create-a-New-AppID.png)
1. Click __Create App ID__.
1. On the Product Setup page, locate Marketing API, and then click __Get Started__ to complete the Marketing API setup for Facebook Lead Ads.
1. Set up the app's platform as a website: Go to Basic Settings, click __+Add Platform__, and then click __Website__.
    ![Facebook Select Platform](https://cl.ly/0K2913290G08/select-platform.png).
1. For OAuth authentication, add the Facebook Login product: click __+ Add Product__, find Facebook Login at the top, and then click __Get Started__.
![Facebook Add Login](https://cl.ly/2G3R440Q0o3e/FB-Login.png)
1. In __Valid OAuth redirect URIs__, enter your `oauth.callback.url`.
1. Click __Save Changes__.

Once you are ready to release to production, you will need to submit your app for testing.  You can read more about the process at: [https://developers.facebook.com/docs/facebook-login/review/requirements](https://developers.facebook.com/docs/facebook-login/review/requirements)

Next [create an instance](facebook-create-instance.html).
