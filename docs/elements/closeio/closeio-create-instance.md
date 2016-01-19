---
heading: Close.io
title: Create Instance
description: Create Instance
layout: docs
order: 15
---

## Create Instance

To provision your Close.io Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Close.io is “closeio”.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "closeio"
  },
  "configuration": {
    "username": "<INSERT_CLOSE_IO_API_KEY>",
    "password": "<INSERT_CLOSE_IO_PASSWORD>"
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
    "id": 146,
    "name": "Close.io Beta",
    "key": "closeio",
    "description": "Add a Close.io CRM Instance to connect your existing Close.io account to the CRM Hub, allowing you to manage contacts, accounts, opportunities, etc. across multiple CRM Elements. You will need your Close.io CRM account information to add an instance.",
    "image": "https://pbs.twimg.com/profile_images/497905627948015616/vNCOkr1Z.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "transformationsEnabled": true,
    "authentication": {
      "type": "basic"
    },
    "hub": "crm",
    "parameters": []
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "base.url": "https://app.close.io/api/v1",
    "pagination.offset": "true",
    "password": "CLOSE_IO_PASSOWRD",
    "pagination.max": "100",
    "username": "CLOSE_IO_API_KEY"
  },
  "eventsEnabled": false,
  "cachingEnabled": false
}
```
