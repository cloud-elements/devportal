---
heading: Wufoo
seo: Create Instance | Wufoo | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 685
parent: Back to Element Guides
order: 20
---

## Create Instance

When you provision an instance, your app will have access to the different functionality offered by the Wufoo platform.

### Step 1. Create an Instance

To provision your Wufoo Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Wufoo is "wufoo".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```JSON
{
  "element": {
    "key": "wufoo"
  },
  "configuration": {
    "username": "<INSERT_WUFOO_API_KEY>",
    "password": "<INSERT_WUFOO_PASSWORD>",
    "site": "<INSERT_WUFOO_SUBDOMAIN>"
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
  "token": "YT70SDqDVrhw/TMD5oV831Yurfjk6E=",
  "element": {
    "id": 685,
    "name": "Wufoo",
    "hookName": "Wufoo",
    "key": "wufoo",
    "description": "Add a Wufoo Instance to connect your existing Wufoo account to the General Hub, allowing you to manage forms, entries, reports and fields across multiple Elements. You will need your Wufoo account information to add an instance.",
    "image": "elements/provider_wufoo.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "resources": []
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "base.url": "https://{site}.wufoo.com/api/v3",
    "bulk.add_metadata": null,
    "event.notification.subscription.id": null,
    "bulk.query.field_name": "",
    "pagination.max": "100",
    "event.vendor.type": "webhooks",
    "bulk.query.operator": null,
    "bulk.query.date_mask": "yyyy-MM-dd HH:mm:ss",
    "bulk.query.download_format": "JSON",
    "site": "WUFOO_SUBDOMAIN",
    "bulk.attribute.created_time": "DateCreated",
    "password": "********",
    "event.notification.instance.finder": "",
    "pagination.type": "page",
    "bulk.relations": null,
    "event.notification.callback.url": "false",
    "webhook.hash": "",
    "pagination.page.startindex": "0",
    "username": "M7HH-IUI8-TUO0-4RY6",
    "event.notification.enabled": "false"
  },
  "eventsEnabled": false,
  "eventsNotificationCallbackUrl": "false",
  "traceLoggingEnabled": false,
  "externalAuthentication": "none",
  "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.
