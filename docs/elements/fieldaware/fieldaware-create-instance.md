---
heading: FieldAware
seo: Create Instance | FieldAware | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 1062
parent: Back to Element Guides
order: 15
---

## Create Instance

To provision your FieldAware Element, use the /instances API.
You will need your FieldAware API Key, which will be provided by your FieldAware Rep.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements FieldAware is "fieldawarev2".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "fieldawarev2"
  },
  "configuration": {
    "api_key": "<INSERT_FIELDAWARE_API_KEY>"
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
    "id": 1062,
    "name": "FieldAware v2",
    "key": "fieldawarev2",
    "description": "New Fieldaware Element. https://api.fieldaware.net/doc/index.html",
    "image": "elements/provider_fieldawarev2.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "resources": [    ],
    "transformationsEnabled": true,
    "bulkDownloadEnabled": false,
    "bulkUploadEnabled": false,
    "cloneable": true,
    "authentication": {
      "type": "custom"
    },
    "hub": "fsa",
    "protocolType": "http",
    "parameters": [
      {
        "id": 646,
        "createdDate": "2016-09-25T10:00:51Z",
        "name": "Token ${configuration.api_key}",
        "vendorName": "Authorization",
        "type": "value",
        "vendorType": "header",
        "source": "request",
        "elementId": 1062,
        "required": false
      }
    ]
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "base.url": "https://api.fieldaware.net",
    "pagination.type": "page",
    "since_token": "179475654",
    "event.poller.refresh_interval": "15",
    "event.notification.callback.url": null,
    "api_key": "API_KEY",
    "pagination.max": "100",
    "event.vendor.type": "polling",
    "authentication.time": "1476992271551",
    "event.poller.configuration": "{\"changes\":{\"url\":\"/hubs/fsa/changes\",\"idField\":\"id\"}}",
    "pagination.page.startindex": "0",
    "event.notification.enabled": "false"
  },
  "eventsEnabled": false,
  "traceLoggingEnabled": false,
  "cachingEnabled": false,
  "externalAuthentication": "none"
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.
