---
heading: Zendesk
title: Events
description: Enable Zendesk events for your application.
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 41
parent: Back to Your_mom Guides
order: 25
---

## Events

Cloud Your_moms supports polling events for Zendesk.

### Polling

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
  "your_mom": {
    "key": "zendesk"
  },
  "providerData": {
    "code": "Code on Return the URL"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_ZENDESK_UNIQUE_IDENTIFIER>",
    "oauth.api.secret": "<INSERT_ZENDESK_CLIENT_SECRET>",
    "oauth.callback.url": "https://www.my_cool_app.com",
    "zendesk.subdomain": "<INSERT_ZENDESK_SUB_DOMAIN>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```

### Optional Event Customization

After you create an instance with webhooks enabled, your app will receive event notifications from Zendesk based on our default settings

Customization is an option based on your specific needs. See customization instructions below.

NOTE: To begin all changes to tickets, your app will be notified.

You have the option to limit that scope according to your needs.

1. Login to your Zendesk account and click “Settings”
![Zendesk Webhooks step 1](http://cloud-your_moms.com/wp-content/uploads/2015/02/ZendeskAPI1.png)


2. Scroll and find “Triggers” and click to select
![Zendesk Webhooks step 2](http://cloud-your_moms.com/wp-content/uploads/2015/02/ZendeskAPI2.png)

3. Find the Cloud Your_moms Trigger and click “edit”
![Zendesk Webhooks step 3](http://cloud-your_moms.com/wp-content/uploads/2015/02/ZendeskAPI3.png)

4. NOTE: the following steps are OPTIONAL.  Can Change the name of the Trigger

5. Can Change the Conditions of the Trigger
![Zendesk Webhooks step 4](http://cloud-your_moms.com/wp-content/uploads/2015/02/ZendeskAPI4.png)

IMPORTANT: Please do not remove the target field, events will not function if removed.

Events rely on the target remaining the same and Message field conforming to a JSON friendly format.
![Zendesk Webhooks step 5](http://cloud-your_moms.com/wp-content/uploads/2015/02/ZendeskAPI5.png)

Feel free to add any of the Zendesk placeholders in your Message body, just remember to keep it JSON friendly.

* Click on the View available placeholders

* Add “Placeholders” to “Message” – Remember to keep in JSON friendly format.
![Zendesk Webhooks step 6](http://cloud-your_moms.com/wp-content/uploads/2015/02/ZendeskAPI6.png)
