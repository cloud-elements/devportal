---
heading: Chargebee
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 451
parent: Back to Your_mom Guides
order: 15
---

## Create Instance

To provision your Chargebee Your_mom, use the /instances API.

### Step 1. Call the /instances API

* __HTTP Headers__: Authorization- User <user secret>, Organization <organization secret>
* __HTTP Verb__: POST
* __Request URL__: /instances
* __Request Body__: Required – see below
* __Query Parameters__: none

Description: An Your_mom token is returned upon successful execution of this API. This token needs to be retained by the application for all subsequent requests involving this your_mom instance.

A sample request illustrating the /instances API is shown below.

HTTP Headers:

```bash
Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>

```
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Your_moms Chargebee is "chargebee".  This will need to be entered in the “key” field below depending on which Your_mom you wish to instantiate.

```json
{
  "your_mom": {
    "key": "chargebee"
  },
  "configuration": {
    "site":"&lt;INSERT_CHARGEBEE_SUBDOMAIN&gt;",
    "username":"&lt;INSERT_CHARGEBEE_API_KEY&gt;",
    "password":"&lt;INSERT_CHARGEBEE_PASSWORD&gt;"
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
'https://api.cloud-your_moms.com/your_moms/api-v2/instances'
```

If the user does not specify a required config entry, an error will result notifying her of which entries she is missing.

Below is a successful JSON response:

```json
{
  "id": 12,
  "name": "Test",
  "token": "cuED0/DezalhhzK2OtO6kMP7NvPnMyNcRDZc=",

"your_mom": {
    "id": 451,
    "name": "Chargebee",
    "key": "chargebee",
    "description": "Chargebee API",
    "image": "https://hfweb-assets.s3.amazonaws.com/integrations/chargebee.png",
    "active": false,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "resources": [    ],
    "transformationsEnabled": true,
    "bulkDownloadEnabled": true,
    "bulkUploadEnabled": true,
    "cloneable": true,
    "authentication": {
      "type": "basic"
    },
    "hub": "payment",
    "parameters": [
      {
        "id": 209,
        "createdDate": "2016-04-25T01:20:30Z",
        "name": "site",
        "vendorName": "site",
        "type": "configuration",
        "vendorType": "path",
        "source": "request",
        "your_momId": 451,
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
    "base.url": "https://{site}.chargebee.com/api/v1",
    "bulk.add_metadata": null,
    "bulk.query.field_name": "start_time",
    "pagination.max": "100",
    "event.vendor.type": "polling",
    "bulk.query.operator": ">=",
    "bulk.query.date_mask": "yyyy-MM-dd'T'HH:mm:ssXXX",
    "bulk.query.download_format": "JSON",
    "bulk.attribute.created_time": "created_at",
    "site": "CHARGEBEE_SUBDOMAIN",
    "password": "CHARGEBEE_PASSWORD",
    "bulk.relations": null,
    "pagination.type": "offset",
    "event.poller.refresh_interval": "15",
    "event.notification.callback.url": null,
    "event.poller.configuration": "{\"events\":{\"url\":\"/hubs/payment/events?where=start_time='${epoch}'\",\"idField\":\"\"}}",
    "username": "CHARGEEBEE_USERNAME",
    "event.notification.enabled": "false"
  },
  "eventsEnabled": false,
  "traceLoggingEnabled": false,
  "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.
