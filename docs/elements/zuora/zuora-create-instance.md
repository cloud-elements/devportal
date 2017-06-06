---
heading: Zuora
seo: Create Instance | Zuora | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 2245
parent: Back to Element Guides
order: 20
---

## Create Instance

When you provision an instance, your app will have access to the different functionality offered by the Zuora application.

__Note:__ Zuora provide separate credentials for sandbox and production accounts. When you create a Zuora instance, you can choose to create a sandbox instance. If you do, make sure that you use your sandbox-specific credentials to do so.


### Step 1. Create an Instance

To provision your Zuora Element, use the /instances API.

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

This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Zuora is "zuorav2".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```JSON
{
  "element": {
    "key": "zuorav2"
  },
  "configuration": {
    "zuorav2.sandbox": true, // To instantiate your production account, set this to false
    "username": "<INSERT_YOUR_ZUORA_USERNAME>",
    "password": "<INSERT_YOUR_ZUORA_PASSWORD>"
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
  "token": "/sO6vVsB2eXhOlgvNR/p+G7wC/+rhY5M=",
  "element": {
    "id": 9380,
    "name": "Zuora v2-clone Beta",
    "hookName": "ZuoraV2",
    "key": "zuorav2",
    "description": "Add an Instance of Zuora to get started with Zuora to the Payment Hub, allowing you to manage customers, invoices, products, payments, etc. across multiple Payment Elements. You will need your Zuora account to create an instance.",
    "image": "http://info.zuora.com/rs/zuora/images/zuora-logoblue.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "resources": [],
    "transformationsEnabled": true,
    "bulkDownloadEnabled": false,
    "bulkUploadEnabled": false,
    "cloneable": true,
    "beta": false,
    "authentication": {
      "type": "basic"
    },
    "hub": "payment",
    "protocolType": "http",
    "parameters": [],
    "private": true
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "base.url": "https://rest.zuora.com/v1",
    "bulk.add_metadata": null,
    "event.notification.subscription.id": null,
    "bulk.query.field_name": "CreatedDate",
    "pagination.max": "2000",
    "zuorav2.sandbox": "true",
    "event.vendor.type": "webhooks",
    "bulk.query.operator": ">=",
    "bulk.query.date_mask": "yyyy-MM-dd'T'HH:mm:ss'Z'",
    "bulk.query.download_format": "JSON",
    "password": "********",
    "event.notification.instance.finder": "",
    "pagination.type": "cursor",
    "bulk.relations": null,
    "event.notification.callback.url": null,
    "username": "username",
    "event.notification.enabled": "false"
  },
  "eventsEnabled": false,
  "traceLoggingEnabled": false,
  "cachingEnabled": false,
  "externalAuthentication": "none"
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

{% include common-instance-config.md %}
