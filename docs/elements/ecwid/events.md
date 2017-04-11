---
heading: Ecwid
seo: Events | Ecwid | Cloud Elements API Docs
title: Events
description: Enable Ecwid events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 52
parent: Back to Element Guides
order: 25
---

## Events

{% include polling_and_webhooks_defined.md %}

Cloud Elements supports webhook events for Ecwid.

### Webhooks

Follow these steps to set up a new Ecwid Application for API integration. Via a web browser go to: [https://my.ecwid.com/cp/#register](https://my.ecwid.com/cp/#register) and sign up. It must be a paid account.

Once setup, please login.

1. Make note of your Store ID as it will be needed to provision an Element Instance.
![Ecwid Connected App step 1](http://cloud-elements.com/wp-content/uploads/2015/02/EcwidAPI1.png)

2. Next the Legacy API keys will need to be retrieved.  In order to do retrieve them, you must be logged in to your store then navigate to a Legacy API Key URL

__NOTE:  Your store ID is required in the Legacy API Key URL - replace `INSERT_STORE_ID` in the URL with your actual store ID.__

Legacy API Key URL (Don't forget to insert your store ID):

`https://my.ecwid.com/store/INSERT_STORE_ID#legacy_api`

Copy the Order and Product API secrets
![Ecwid Legacy API](img/ecwid-legacy-api-1.png)

If you wish to add event functionality then please enter the following URL in the ION Cannon endpoint URL: `https://api.cloud-elements.com/elements/api-v2/events/ecwid`
![Ecwid Legacy API ION Cannon URL](img/ecwid-legacy-api-events.png)

Ecwid Orders are currently supported within the Events Framework.

In order to enable webhooks, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
```

instance JSON with webhook events enabled:

```json
{
  "element": {
    "key": "ecwid"
  },
  "configuration": {
    "ecwid.order.key": "<INSERT_API_ORDER_SECRET>",
    "ecwid.product.key": "<INSERT_API_PRODUCT_KEY>",
    "ecwid.store.id": "<INSERT_STORE_ID>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
  },
  "tags": [
    "<Add_Your_Tag>"
  ],
  "name": "<Insert_Instance_Name>"
}
```
