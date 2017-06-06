---
heading: BigCommerce
seo: Create Instance | BigCommerce | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 274
parent: Back to Element Guides
order: 20
---

## Create Instance

BigCommerce is an eCommerce Platform. When you provision an instance, your app will have access to the different functionality offered by the BigCommerce platform.

### Step 1. Create an Instance

To provision your BigCommerce Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements BigCommerce is "bigcommerce".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```JSON
{
  "element" : {
    "key" : "bigcommerce"
  },
  "configuration" : {
    "store.url": "https://store-{INSERT_STORE_HASH}.mybigcommerce.com/api/v2/",
    "username": "<INSERT_BIGCOMMERCE_USERNAME>",
    "password": "<INSERT_BIGCOMMERCE_API_KEY>"
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
    "id": 274,
    "name": "BigCommerce",
    "key": "bigcommerce",
    "description": "Add a Big Commerce Instance to connect your existing Big Commerce account to the eCommerce Hub, allowing you to manage orders and products across multiple eCommerce Elements. You will need your Big Commerce account information to add an instance.",
    "image": "elements/provider_bigcommerce.png",
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
    "base.url": "{store.url}",
    "bulk.add_metadata": "false",
    "bulk.query.field_name": "min_date_modified",
    "pagination.max": "250",
    "event.vendor.type": "polling",
    "store.url": "https://store-{BIGCOMMERCE_STORE_HASH}.mybigcommerce.com/api/v2/",
    "oauth.user.token": null,
    "bulk.query.operator": "=",
    "bulk.query.date_mask": "EEE, dd MMM yyyy HH:mm:ss Z",
    "bulk.attribute.created_time": "date_created",
    "password": "BIGCOMMERCE_API_KEY",
    "bulk.query.download_format": "json",
    "pagination.type": "page",
    "bulk.relations": "{}",
    "event.poller.refresh_interval": "15",
    "event.notification.callback.url": null,
    "event.notification.signature.key": null,
    "bulk.attribute.modified_time": "min_date_modified",
    "event.poller.configuration": "{\"orders\":{\"url\":\"/hubs/ecommerce/orders?where=min_date_modified=${date:yyyy-MM-dd'T'HH:mm:ssXXX}\",\"idField\":\"id\",\"datesConfiguration\":{\"updatedDateField\":\"\",\"updatedDateFormat\":\"key\",\"createdDateField\":\"\",\"createdDateFormat\":\"key\"}},\"products\":{\"url\":\"/hubs/ecommerce/products?where=min_date_modified=${date:yyyy-MM-dd'T'HH:mm:ssXXX}\",\"idField\":\"id\",\"datesConfiguration\":{\"updatedDateField\":\"\",\"updatedDateFormat\":\"key\",\"createdDateField\":\"\",\"createdDateFormat\":\"key\"}},\"customers\":{\"url\":\"/hubs/ecommerce/customers?where=min_date_modified=${date:yyyy-MM-dd'T'HH:mm:ssXXX}\",\"idField\":\"id\",\"datesConfiguration\":{\"updatedDateField\":\"\",\"updatedDateFormat\":\"key\",\"createdDateField\":\"\",\"createdDateFormat\":\"key\"}}}",
    "username": "integration",
    "event.notification.enabled": "false"
  },
  "eventsEnabled": false,
  "traceLoggingEnabled": false,
  "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

{% include common-instance-config.md %}
