---
heading: Chargify
seo: Create Instance | Chargify | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 525
parent: Back to Element Guides
order: 15
---

## Create Instance

To provision your Chargify Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Chargify is "chargify".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "chargify"
  },
  "configuration": {
    "username":  "<INSERT_CHARGIFY_API_KEY>",
    "password": "<INSERT_CHARGIFY_PASSWORD>",
    "site": "<INSERT_CHARGIFY_SUBDOMAIN>"
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
      "id": 498,
      "name": "Chargify",
      "key": "chargify",
      "description": "Add a Chargify Instance to connect your existing Chargify Enterprise account to the Payments Hub, allowing you to manage your customers, products, etc. across multiple Payments Elements. You will need your Chargify Enterprise account information to add an instance.",
      "image": "https://www.chargify.com/images/chargify-logo-dark-37df595c.png",
      "active": false,
      "deleted": false,
      "typeOauth": false,
      "trialAccount": false,
      "transformationsEnabled": true,
      "bulkDownloadEnabled": true,
      "bulkUploadEnabled": true,
      "cloneable": true,
      "authentication": {}
    },
    "provisionInteractions": [],
    "valid": true,
    "disabled": false,
    "maxCacheSize": 0,
    "cacheTimeToLive": 0,
    "configuration": {
      "base.url": "https://{site}.chargify.com",
      "bulk.add_metadata": null,
      "bulk.query.field_name": "",
      "pagination.max": "50",
      "event.vendor.type": "polling",
      "bulk.query.operator": null,
      "bulk.query.date_mask": "yyyy-MM-dd'T'HH:mm:ssXXX",
      "bulk.attribute.created_time": "customer.created_at",
      "bulk.query.download_format": "JSON",
      "site": "CHARGIFY_SUBDOAMIN",
      "password": "********",
      "pagination.type": "page",
      "bulk.relations": null,
      "event.poller.refresh_interval": "15",
      "event.notification.callback.url": null,
      "event.poller.configuration": "{}",
      "pagination.page.startindex": "1",
      "username": "CHARGIFY_API_KEY",
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
