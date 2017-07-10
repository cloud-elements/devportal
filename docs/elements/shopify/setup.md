---
heading: Shopify
seo: Service Provider Setup | Shopify | Cloud Elements API Docs
title: Service Provider Setup
description: Service Provider Setup
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 48
parent: Back to Element Guides
order: 5
---

# Service Provider Setup

To authenticate a {{page.heading}} element instance you must set up a store and be a Shopify Partner. If you are a developer building a store for a client, then you will need to acquire the shop name from your client

To set up the service provider:

1. Via a web browser, go to: [http://www.shopify.com/](http://www.shopify.com/)and sign up for a store.
2. Go to: [https://accounts.shopify.com/signup](https://accounts.shopify.com/signup) to become a Shopify Partner.  It's free to sign up.
1. Once signed up, from the Dashboard > Apps, click **Create App**.
![Shopify Connected App step 1](img/shopify-api-1.png)

2. Fill out the App Information.  The the **App URL** enter your application callback URL, and then click **Create App**.
![Shopify Connected App step 2](img/shopify-api-2.png)

3. Under `App Info` > `App Credentials`, copy the **API key** and **API secret key**.
![Shopify Connected App step 3](img/shopify-api-3.png)

Next [authenticate an element instance with Shopify](authenticate.html).
