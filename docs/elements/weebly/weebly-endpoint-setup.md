---
heading: Weebly
seo: Endpoint Setup | Weebly | Cloud Elements API Docs
title: Endpoint Setup
description: Endpoint setup
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 449
parent: Back to Element Guides
order: 5
---

## Endpoint Setup

Follow these steps to set up a Weebly application with the endpoint.

Before you can use the portal, you need to create a developer account. You also need to create a web site to test your applications or themes.

If you don't already have one, create a basic Weebly account. Visit [weebly.com](https://www.weebly.com/), create your account, and create a test web site. Once your account and site are created, access the [Developer Admin](https://www.weebly.com/developer-admin/) portal from [dev.weebly.com](https://dev.weebly.com) (click Admin Login) and log in.

The dialog displays the name and email associated with your standard account. By default, these will be used for your developer account. Add the following information that will be used to create your App card in the App Center:

* A description about yourself. This will display on your App card in the App Center.
* The URL to your web site. This is where you want your customers to visit for more information about your app, your other products and services, your company, etc.
* An optional phone number.

Accept the Developer agreement and save your information. The Developer Admin portal page displays your account. From this point on, when you log into the Developer site, your Developer Admin portal will display.

Please review the steps necessary to [create your Weebly App](https://dev.weebly.com/get-started-with-developing-apps.html).

Weebly requires a zip file be uploaded to their Admin Dashboard with a `manifest.json` file indicating the app file structure.

Example `manifest.json`

```JSON
	////////////////////////////////
	///////BASIC APP STRUCTURE//////
	////////////////////////////////
{
	"manifest": "1",
	"client_id": "INSERT_CLIENT_ID",
	"version": "2.0.0",
	"manage_app_url":	"https://mycoolapp.com",
	"callback_url": "https://mycoolapp.com/auth",
	"oauth_final_destination": "editor",
	"locale": {
		"default": "en-us",
		"supported": ["en-us"]
	},
	////////////////////////////////
	////WITH WEBHOOKS (OPTIONAL)////
	////////////////////////////////
	"webhooks": {
		"callback_url": "https://console.cloud-elements.com/elements/api-v2/weebly/events",
		"events": ["store.product.create", "store.product.update", "store.product.delete",
		"store.cart.create", "store.cart.update"]
	}
}
```

Review how to [configure the Manifest for OAuth](https://dev.weebly.com/app-authorization-and-install-flow.html).

1. Click “Create New App”.
![Weebly Connected App step 1](http://cloud-elements.com/wp-content/uploads/2016/04/WeeblyAPI1.png)

2. Name the App and select category

3. Click “Save”
![Weebly Connected App step 2](http://cloud-elements.com/wp-content/uploads/2016/04/WeeblyAPI2.png)

4. Copy the Client ID and Secret

5. Click "Upload New Version"
![Weebly Connected App step 3](http://cloud-elements.com/wp-content/uploads/2016/04/WeeblyAPI3.png)

6. Input App Store Listing Info

7. Click "Upload New Zip" > the compressed `manifest.json`

8. Click "Submit for Review"
![Weebly Connected App step 4](http://cloud-elements.com/wp-content/uploads/2016/04/WeeblyAPI4.png)

9. From the Admin Dashboard, select the app
![Weebly Connected App step 5](http://cloud-elements.com/wp-content/uploads/2016/04/WeeblyAPI5.png)

10. Select the appropriate version
![Weebly Connected App step 6](http://cloud-elements.com/wp-content/uploads/2016/04/WeeblyAPI6.png)

11. Click the App Card
![Weebly Connected App step 7](http://cloud-elements.com/wp-content/uploads/2016/04/WeeblyAPI7.png)

12. Click "Add"
![Weebly Connected App step 8](http://cloud-elements.com/wp-content/uploads/2016/04/WeeblyAPI8.png)

13. Select A Site

14. Click "Continue"
![Weebly Connected App step 9](http://cloud-elements.com/wp-content/uploads/2016/04/WeeblyAPI9.png)

15. Click "Connect"
![Weebly Connected App step 10](http://cloud-elements.com/wp-content/uploads/2016/04/WeeblyAPI10.png)

This Connection will kick off the [reverse OAuth](https://dev.weebly.com/authentication-using-oauth2.html) process needed to provision a Weebly Instance.
