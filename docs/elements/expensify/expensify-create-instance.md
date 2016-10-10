---
heading: Expensify
seo: Create Instance | Expensify | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 675
parent: Back to Element Guides
order: 20
---

## Create Instance

Expensify is a Payments Platform. When you provision an instance, your app will have access to the different functionality offered by the Expensify platform.

### Step 1. Create an Instance

To provision your Expensify Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Expensify is "expensify".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```JSON
{
  "element": {
    "key": "expensify"
  },
  "configuration": {
    "partner.user.id":  "<INSERT_EXPENSIFY_EMAIL>",
    "partner.user.secret": "<INSERT_EXPENSIFY_PARTNER_USER_SECRET>"
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
      "id": 675,
      "name": "Expensify",
      "hookName": "Expensify",
      "key": "expensify",
      "description": "Add a Expensify Instance to connect your existing Expensify account to the Payments and Billing Hub, allowing you to manage your reports, etc. across multiple  Elements. You will need your Expensify account information to add an instance.",
      "image": "http://we.are.expensify.com/assets/img/icon-rounded.png",
      "active": false,
      "deleted": false,
      "typeOauth": false,
      "trialAccount": false,
      "resources": [],
      "transformationsEnabled": true,
      "bulkDownloadEnabled": true,
      "bulkUploadEnabled": true,
      "cloneable": true,
      "authentication": {
        "type": "custom"
      },
      "hub": "payment",
      "protocolType": "http",
      "parameters": []
    },
    "provisionInteractions": [],
    "valid": true,
    "disabled": false,
    "maxCacheSize": 0,
    "cacheTimeToLive": 0,
    "configuration": {
      "base.url": "https://integrations.expensify.com/Integration-Server",
      "bulk.add_metadata": null,
      "bulk.query.field_name": "startDate",
      "pagination.max": "1000000",
      "event.vendor.type": "polling",
      "bulk.query.operator": "=",
      "bulk.query.date_mask": "yyyy-MM-dd",
      "bulk.query.download_format": "JSON",
      "partner.user.secret": "user.secret",
      "bulk.relations": null,
      "pagination.type": "page",
      "event.poller.refresh_interval": "15",
      "event.notification.callback.url": null,
      "event.poller.configuration": "{\"reports\":{\"url\":\"/hubs/payment/reports?where=startDate ='${date:yyyy-MM-dd}'\",\"idField\":\"reportId\",\"datesConfiguration\":{\"updatedDateField\":\"created\",\"updatedDateFormat\":\"yyyy-MM-dd HH:mm:ss\",\"updatedDateTimezone\":\"GMT\",\"createdDateField\":\"created\",\"createdDateFormat\":\"yyyy-MM-dd HH:mm:ss\",\"createdDateTimezone\":\"GMT\"}}}",
      "partner.user.id": "user.id",
      "pagination.page.startindex": "1",
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
