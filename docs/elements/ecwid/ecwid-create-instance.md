---
heading: Ecwid
title: Create Instance
description: Create Instance
layout: docs
order: 15
---

## Create Instance

To provision your Ecwid Element, use the /instances API.

### Step 1. Call the /instances API

* __HTTP Headers__: Authorization- User <user secret>, Organization <organization secret>
* __HTTP Verb__: POST
* __Request URL__: /instances
* __Request Body__: Required – see below
* __Query Parameters__: none

In order to create an Ecwid instance, you will need the Store ID, Order API Key, and Product API Key. For instructions on how to retrieve those credentials, please see our Ecwid Endpoint Setup.
NOTE: Ecwid currently supports the the GET, PUT/PATCH, DELETE API calls. POST is not available at this time.

Description: An Element token is returned upon successful execution of this API. This token needs to be retained by the application for all subsequent requests involving this element instance.

A sample request illustrating the /instances API is shown below.

HTTP Headers:

```bash
Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>

```
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Ecwid is “ecwid”.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "ecwid"
  },
  "configuration": {
    "ecwid.order.key": "<INSERT_API_ORDER_SECRET>",
    "ecwid.product.key": "<INSERT_API_PRODUCT_KEY>",
    "ecwid.store.id": "<INSERT_STORE_ID>"
 },
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
  "id": 12345,
  "name": "test",
  "token": "dsPr6AheLIS8pt7rp8E81bSKEkx9Ftr+9Y",
  "element": {
    "id": 42,
    "name": "Ecwid",
    "key": "ecwid",
    "description": "Ecwid is everything you need to sell anywhere.",
    "image": "elements/provider_ecwid.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "configDescription": "If you do not have a Ecwid account, you can create one at Ecwid Signup"
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "cachingEnabled": false
}
```
Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.
