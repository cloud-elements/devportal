---
heading: Help Scout
seo: Events | Help Scout | Cloud Elements API Docs
title: Events
description: Enable Help Scout events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 338
parent: Back to Element Guides
order: 30
---

## Events

{% include polling_and_webhooks_defined.md %}

Cloud Elements supports webhook events for Help Scout.

Follow these steps to setup webhooks.

1. Log in to your Help Scout dashboard and select 'Apps'
![Help Scout Webhooks step 1](http://cloud-elements.com/wp-content/uploads/2016/08/HelpScoutWebhooks1.png)

2. Select Webhooks
![Help Scout Webhooks step 1](http://cloud-elements.com/wp-content/uploads/2016/08/HelpScoutWebhooks2.png)

3. Click 'Install App'

4. Complete form

5. Click 'Save'
![Help Scout Webhooks step 1](http://cloud-elements.com/wp-content/uploads/2016/08/HelpScoutWebhooks3.png)

For more information on Help Scout webhooks, please see the [Help Scout developer documentation](http://developer.helpscout.net/help-desk-api/webhooks/).

In order to enable events, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
```

instance JSON with polling events enabled:

```json
{
    "element" : {
        "key" : "helpscout"
    },
  "configuration" : {
    "username": "<INSERT_HELPSCOUT_API_KEY>",
    "password": "<INSERT_HELPSCOUT_PASSWORD>",
    "mailbox.name": "<INSERT_HELPSCOUT_MAILBOX>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
