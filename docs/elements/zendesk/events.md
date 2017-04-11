---
heading: Zendesk
seo: Events | Zendesk | Cloud Elements API Docs
title: Events
description: Enable Zendesk events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 41
parent: Back to Element Guides
order: 25
---

## Events

{% include polling_and_webhooks_defined.md %}

### Polling

In order to enable polling, add these extra configurations to your instance JSON:

```JSON
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
"event.poller.configuration": "<SEE_BELOW>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
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
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
      "users": {
        "url": "/hubs/helpdesk/users",
        "idField": "id",
        "pageSize": 100,
        "datesConfiguration": {
          "updatedDateField": "updated_at",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss'Z'",
          "createdDateField": "created_at",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss'Z'"
        }
      }
    }
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

#### Webhook JSON

```json
{
  "element": {
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
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```

NOTE: To begin all changes to tickets, your app will be notified.

You have the option to limit that scope according to your needs.

1. Login to your Zendesk account and click “Settings”
![Zendesk Webhooks step 1](http://cloud-elements.com/wp-content/uploads/2015/02/ZendeskAPI1.png)


2. Scroll and find “Triggers” and click to select
![Zendesk Webhooks step 2](http://cloud-elements.com/wp-content/uploads/2015/02/ZendeskAPI2.png)

3. Find the Cloud Elements Trigger and click “edit”
![Zendesk Webhooks step 3](http://cloud-elements.com/wp-content/uploads/2015/02/ZendeskAPI3.png)

4. NOTE: the following steps are OPTIONAL.  Can Change the name of the Trigger

5. Can Change the Conditions of the Trigger
![Zendesk Webhooks step 4](http://cloud-elements.com/wp-content/uploads/2015/02/ZendeskAPI4.png)

IMPORTANT: Please do not remove the target field, events will not function if removed.

Events rely on the target remaining the same and Message field conforming to a JSON friendly format.
![Zendesk Webhooks step 5](http://cloud-elements.com/wp-content/uploads/2015/02/ZendeskAPI5.png)

Feel free to add any of the Zendesk placeholders in your Message body, just remember to keep it JSON friendly.

* Click on the View available placeholders

* Add “Placeholders” to “Message” – Remember to keep in JSON friendly format.
![Zendesk Webhooks step 6](http://cloud-elements.com/wp-content/uploads/2015/02/ZendeskAPI6.png)
