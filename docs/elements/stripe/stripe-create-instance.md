---
heading: Cloud Elements for Stripe
seo: Create Instance | Cloud Elements for Stripe | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 475
parent: Back to Element Guides
order: 20
---

## Create Instance

Stripe is a Payments Platform. When you provision an instance, your app will have access to the different functionality offered by the Stripe platform.

### Step 1. Create an Instance

To provision your Cloud Elements for Stripe Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements for Stripe is "stripe".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```JSON
{
  "element": {
    "key": "stripe"
  },
  "configuration": {
    "api.key": "<INSERT_STRIPE_API_KEY>"
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
    "id": 483,
    "name": "Cloud Elements for Stripe",
    "key": "stripe",
    "description": "Add a Stripe Instance to connect your existing Stripe Enterprise account to the Payments Hub, allowing you to manage your customers, plans, charges, tokens, products etc. across multiple Payments Elements. You will need your Stripe Enterprise account information to add an instance.",
    "image": "https://stripe.com/img/about/logos/logos/black.png",
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
    "parameters": []
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "bulk.add_metadata": null,
    "base.url": "https://api.stripe.com/v1",
    "bulk.query.field_name": "created",
    "pagination.max": "100",
    "event.vendor.type": "polling",
    "bulk.query.operator": ">=",
    "bulk.query.date_mask": "yyyy-MM-dd'T'HH:mm:ssXXX",
    "bulk.query.download_format": "JSON",
    "password": "********",
    "pagination.type": "cursor",
    "bulk.relations": null,
    "event.poller.refresh_interval": "15",
    "event.notification.callback.url": null,
    "event.poller.configuration": "{\"events\":{\"url\":\"/hubs/payment/events?where=created >'${epoch}'\",\"idField\":\"id\"}}",
    "username": "STRIPE_API_KEY",
    "event.notification.enabled": "false"
  },
  "eventsEnabled": false,
  "traceLoggingEnabled": false,
  "externalAuthentication": "none",
  "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

{% include common-instance-config.md %}
