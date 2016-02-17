---
heading: WooCommerce
title: Create Instance
description: Create Instance
layout: docs
order: 20
---

## Create Instance

WooCommerce is an eCommerce platform.  When you provision an instance, your app will have access to the different functionality offered by the WooCommerce platform.

### Step 1. Create an Instance

To provision your WooCommerce Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements WooCommerce is “volusion”.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "woocommerce"
  },
  "configuration": {
    "base.url": "<INSERT_STORE_URL>/wc-api/v2",
    "oauth.api.key": "<INSERT_WOOCOMMERCE_CLIENT_ID>",
    "oauth.api.secret": "<INSERT_WOOCOMMERCE_CLIENT_SECRET>",
    "store.url": "<INSERT_WOOCOMMERCE_STORE_URL>"
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
  "id": 1234,
  "name": "Test",
  "token": "Maz7vUCHoEULazrBrBZWPA6iL3t1njyQdA=",
  "element": {
    "id": 188,
    "name": "WooCommerce Beta",
    "key": "woocommerce",
    "description": "Add a WooCommerce Instance to connect your existing WooCommerce account to the eCommerce Hub, allowing you to manage orders and products across multiple eCommerce Elements. You will need your WooCommerce API information to add an instance.",
    "image": "https://pbs.twimg.com/profile_images/378800000726053868/44a02004f2aeab0534c26fb5afc37784_400x400.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "eventsEnabled": true,
  "eventsNotificationCallbackUrl": "http://requestb.in/166rcqk1",
  "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.
