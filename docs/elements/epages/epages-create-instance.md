---
heading: ePages
seo: Create Instance | ePages | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 1595
parent: Back to Element Guides
order: 15
---

## Create Instance

To provision your ePages Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements ePages is "abbyy".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element" : {
      "key" : "epages"
    },
    "configuration" : {
      "epages.access.token": "<INSERT_EPAGES_ACCESS_TOKEN>",
      "base.url": "<INSERT_EPAGES_BASE_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```

__NOTE: the `base.url` config is the full base URL and shop of the store, (i.e. `https://devshop.epages.com/rs /shops/{fullShopId}` )__

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
    "id": 260,
    "name": "ePages",
    "key": "abbyy",
    "description": "Add ePages instance to generate OCR text for your files. You will need your ePages account details to create an instance",
    "image": "http://www.paystreamadvisors.com/wp-content/uploads/2015/01/ePages-Logo_340x170_01-new.gif",
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
    "event.notification.subscription.id": null,
    "bulk.query.field_name": "",
    "pagination.max": "100",
    "event.vendor.type": "webhooks",
    "bulk.query.operator": ">=",
    "bulk.query.date_mask": "key",
    "password": "ePages_PASSWORD",
    "event.notification.instance.finder": null,
    "event.poller.refresh_interval": "15",
    "pagination.type": null,
    "event.notification.callback.url": null,
    "event.poller.configuration": "{}",
    "username": "ePages_APP_NAME",
    "event.notification.enabled": "false"
  },
  "eventsEnabled": false,
  "traceLoggingEnabled": false,
  "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

{% include common-instance-config.md %}
