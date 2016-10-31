---
heading: Weebly
seo: Events | Weebly | Cloud Elements API Docs
title: Events
description: Enable Weebly events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 449
parent: Back to Element Guides
order: 25
---

## Events

Cloud Elements supports webhook events for Weebly.

### Webhooks

In order to enable webhooks, add this data to your `manifest.json`:

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
	////WITH WEBHOOKS ENABLED///////
	////////////////////////////////
	"webhooks": {
		"callback_url": "https://console.cloud-elements.com/elements/api-v2/weebly/events",
		"events": ["store.product.create", "store.product.update", "store.product.delete",
		"store.cart.create", "store.cart.update"]
	}
}
```

This `manifest.json` must be uploaded when you create your app.  For more information on creating your app, see the [Weebly Endpoint Setup](weebly-endpoint-setup.html).

Add the following two configurations to the `instance.json`:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
```

instance JSON with polling events enabled:

```json
{
	"element": {
		"key": "weebly"
	},
	"providerData": {
		"code": "Code on Return the URL"
	},
	"configuration": {
		"oauth.api.key": "<INSERT_ZENDESK_UNIQUE_IDENTIFIER>",
		"oauth.api.secret": "<INSERT_ZENDESK_CLIENT_SECRET>",
		"site.id": "<FROM_OAUTH_EXCHANGE>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
