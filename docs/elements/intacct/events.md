---
heading: Intacct
seo: Events | Intacct | Cloud Elements API Docs
title: Events
description: Enable Intacct events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 1666
parent: Back to Element Guides
order: 30
---

## Events

Cloud Elements supports polling events for Intacct.

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "intacct"
  },
  "configuration": {
  	"intacct.user.company.id": "<INSERT_INTACCT_COMPANY_ID>",
  	"intacct.user.id": "<INSERT_INTACCT_USER_ID>",
  	"intacct.user.password": "<INSERT_INTACCT_USER_PASSWORD>",
  	"intacct.sender.id": "<INSERT_INTACCT_SENDER_ID>",
  	"intacct.sender.password": "<INSERT_INTACCT_SENDER_PASSWORD>",
  	"intacct.control.id": "<INSERT_INTACCT_CONTROL_ID>"  //unique value like myTestId,
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
