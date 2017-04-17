---
heading: Help Scout
seo: Create Instance | Help Scout | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 338
parent: Back to Element Guides
order: 20
---

## Create Instance

When you provision an instance, your app will have access to the different functionality offered by the Help Scout platform.

### Step 1. Create an Instance

To provision your Help Scout Element, use the /instances API.

Below is an example of the provisioning API call.

* __HTTP Headers__: Authorization- User <user secret>, Organization <organization secret>
* __HTTP Verb__: POST
* __Request URL__: /instances
* __Request Body__: Required – see below
* __Query Parameters__: none

Description: An Element token is returned upon successful execution of this API. This token needs to be retained by the application for all subsequent requests involving this element instance.

A sample request illustrating the /instances API is shown below.

HTTP Headers:

```bash
Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>

```
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Help Scout is "helpscout".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```JSON
{
    "element" : {
        "key" : "helpscout"
    },
    "configuration" : {
        "username": "<INSERT_HELPSCOUT_API_KEY>",
        "password": "<INSERT_HELPSCOUT_PASSWORD>",
        "mailbox.name": "<INSERT_HELPSCOUT_MAILBOX>"
    },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```

Here is an example cURL command to create an instance using /instances API.

Example Request:

```bash
curl -X POST
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type: application/json'
-d @instance.json
'https://api.cloud-elements.com/elements/api-v2/instances'
```

If the user does not specify a required config entry, an error will result notifying her of which entries she is missing.

Below is a successful JSON response:

```JSON
{
  "id": 1234,
  "name": "Test",
  "token": "mQuw4rrhnrMl1UeDj25v0xDU5TUx6WUw=",
  "element": {
      "id": 370,
      "name": "Help Scout",
      "key": "helpscout",
      "description": "Add a Help Scout Instance to connect your existing Help Scout account to the Help Desk Hub, allowing you to manage your incidents, priorities, statuses, users, etc. across multiple Help Desk Elements. You will need your Help Scout account information to add an instance.",
      "image": "elements/provider_helpscout.png",
      "active": true,
      "deleted": false,
      "typeOauth": false,
      "trialAccount": false,
      "resources": [],
      "transformationsEnabled": true,
      "bulkDownloadEnabled": false,
      "bulkUploadEnabled": false,
      "authentication": {
        "type": "basic"
      },
      "hub": "helpdesk",
      "parameters": []
    },
    "provisionInteractions": [],
    "valid": true,
    "disabled": false,
    "maxCacheSize": 0,
    "cacheTimeToLive": 0,
    "configuration": {
      "bulk.add_metadata": "true",
      "base.url": "https://api.helpscout.net/v1",
      "event.notification.subscription.id": null,
      "bulk.query.field_name": "",
      "pagination.max": "50",
      "event.vendor.type": "webhooks",
      "mailbox.id": "1234",
      "helpscout.webhook.id": null,
      "bulk.query.operator": ">=",
      "bulk.query.date_mask": null,
      "bulk.query.download_format": "json",
      "password": "HELPSCOUT_PASSWORD",
      "event.notification.instance.finder": "",
      "pagination.type": "page",
      "bulk.relations": "{}",
      "mailbox.name": "HELPSCOUT_MAILBOX_NAME",
      "event.notification.callback.url": null,
      "event.notification.signature.key": null,
      "username": "HELPSCOUT_API_KEY",
      "event.notification.enabled": "false"
    },
    "eventsEnabled": false,
    "traceLoggingEnabled": false,
    "cachingEnabled": false
  }
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

{% include common-instance-config.md %}
