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


Follow these steps to set up a new Ecwid Application for API integration. Via a web browser go to:  [https://my.ecwid.com/cp/#register](https://my.ecwid.com/cp/#register) and sign up. It must be a paid account.

Once setup, please login.

1. Make note of your Store ID as it will be needed to provision an Element Instance.
![Ecwid Connected App step 1](http://cloud-elements.com/wp-content/uploads/2015/02/EcwidAPI1.png)

2. Navigate to “System Settings” in the top right of your menu, underneath your username.
![Ecwid Connected App step 2](http://cloud-elements.com/wp-content/uploads/2015/02/EcwidAPI2.png)

3. Click “Apps”
![Ecwid Connected App step 3](http://cloud-elements.com/wp-content/uploads/2015/02/EcwidAPI3.png)

4. Scroll down to bottom of page and click “Legacy API keys”
![Ecwid Connected App step 4](http://cloud-elements.com/wp-content/uploads/2015/02/EcwidAPI4.png)

5. Make note of the Order API Secret and the Product API Secret as they will be needed to create an Element Instance.
![Ecwid Connected App step 5](http://cloud-elements.com/wp-content/uploads/2015/02/EcwidAPI5.png)

6. Input the URL: `https://api.cloud-elements.com/elements/api-v2/events/ecwid`

7. Click “Save”
![Ecwid Connected App step 5](http://cloud-elements.com/wp-content/uploads/2015/02/EcwidAPI6.png)

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
