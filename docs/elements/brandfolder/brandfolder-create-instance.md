---
heading: Brandfolder
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 492
parent: Back to Element Guides
order: 15
---

## Create Instance

To provision your Brandfolder Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Brandfolder is "brandfolder".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "brandfolder"
  },
  "configuration": {
    "api-token": "&lt;INSERT_BRANDFOLDER_USER_TOKEN&gt;"
  },
  "tags": [
    "&lt;INSERT_TAGS&gt;"
  ],
  "name": "&lt;INSERT_INSTANCE_NAME&gt;"
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
    "id": 489,
    "name": "Brandfolder",
    "hookName": "Brandfolder",
    "key": "brandfolder",
    "description": "Add an Brandfolder Instance to connect your existing Brandfolder account to the General Hub, allowing you to manage assets and attachments across multiple Elements. You will need your Brandfolder account information to add an instance.",
    "image": "https://assets.brandfolder.com/6xnhmr5n/original/brandfolder_logo_black.png",
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
    "base.url": "https://api.brandfolder.com/v2",
    "event.notification.subscription.id": null,
    "event.notification.instance.finder": "",
    "pagination.type": "cursor",
    "event.poller.refresh_interval": "15",
    "event.notification.callback.url": null,
    "api-token": "BRANDFOLDER_USER_TOKEN",
    "pagination.max": "50",
    "event.vendor.type": "webhooks",
    "authentication.time": "",
    "event.poller.configuration": "{\"brandfolders\":{\"url\":\"/hubs/general/brandfolders?where=updated_dt>'${date:yyyy-MM-dd'T'HH:mm:ssXXX}'\",\"idField\":\"id\"},\"organizations\":{\"url\":\"/hubs/general/organizations?where=updated_dt>'${date:yyyy-MM-dd'T'HH:mm:ssXXX}'\",\"idField\":\"id\"}}",
    "event.notification.enabled": "false"
  },
  "eventsEnabled": false,
  "traceLoggingEnabled": false,
  "externalAuthentication": "none",
  "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.
