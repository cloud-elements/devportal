---
heading: Act Essentials
seo: Create Instance | Act Essentials | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 1160
parent: Back to Element Guides
order: 15
---

## Create Instance

To provision your Act Essentials Element, use the /instances API.

### Step 1. Call the /instances API

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Act Essentials is "actessentials".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element" : {
      "key" : "actessentials"
    },
    "configuration" : {
      "username": "<INSERT_ACT_ESSENTIALS_API_KEY>",
      "password": "<INSERT_ACT_ESSENTIALS_DEVELOPER_KEY>"
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

```json
{
  "id": 12,
  "name": "Test",
  "token": "cuED0/DezalhhzK2OtO6kMP7NvPnMyNcRDZc=",
  "element": {
    "id": 1160,
    "name": "Act! Essentials",
    "key": "actessentials",
    "description": "Add an Act! Essentials Instance to connect your existing Act! Essentials account to the CRM Hub, allowing you to manage contacts and activities across multiple Elements. You will need your Act! Essentials account and Act! Essentials API key (available in your Profile > Apps & Integrations section) to add an instance.",
    "image": "https://pbs.twimg.com/profile_images/497478802432217088/-NAAUSvt.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "resources": [],
    "transformationsEnabled": true,
    "bulkDownloadEnabled": true,
    "bulkUploadEnabled": true,
    "cloneable": true,
    "authentication": {
      "type": "basic"
    },
    "hub": "crm",
    "protocolType": "http",
    "parameters": []
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "base.url": "https://mycloud.act.com/act/api/",
    "bulk.add_metadata": null,
    "bulk.query.field_name": "createdAt",
    "pagination.max": "150",
    "event.vendor.type": "polling",
    "bulk.query.operator": ">=",
    "bulk.query.date_mask": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
    "bulk.query.download_format": "JSON",
    "password": "PASSWORD",
    "pagination.type": "offset",
    "bulk.relations": null,
    "event.poller.refresh_interval": "15",
    "event.notification.callback.url": null,
    "pagination.page.startindex": "1",
    "username": "USERNAME",
    "event.notification.enabled": "false"
  },
  "eventsEnabled": false,
  "traceLoggingEnabled": false,
  "cachingEnabled": false,
  "externalAuthentication": "none",
  "user": {
    "id": 9723
  }
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.
