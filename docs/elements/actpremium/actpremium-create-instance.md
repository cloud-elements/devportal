---
heading: Act! Premium
seo: Create Instance | Act! Premium | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 816
parent: Back to Element Guides
order: 15
---

## Create Instance

To provision your Act! Premium Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Act! Premium is "actpremium".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element" : {
      "key" : "actpremium"
    },
    "configuration" : {
      "username": "<INSERT_ACT_PREMIUM_USERNAME>",
      "password": "<INSERT_ACT_PREMIUM_PASSWORD>",
      "act": "<INSERT_ACT_PREMIUM_BASE_URL>",
      "database": "<INSERT_ACT_PREMIUM_LOCAL_DATABASE_NAME>"
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
    "id": 750,
    "name": "Act! Premium",
    "key": "actpremium",
    "description": "Add Act! Premium instance.  You will need your Act! Premium account details to create an instance",
    "image": "http://www.paystreamadvisors.com/wp-content/uploads/2015/01/Act! Premium-Logo_340x170_01-new.gif",
    "active": false,
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
    "base.url": "http://cloud.ocrsdk.com",
    "username": "USERNAME",
    "event.notification.enabled": "false"
  },
  "eventsEnabled": false,
  "traceLoggingEnabled": false,
  "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

{% include common-instance-config.md %}
