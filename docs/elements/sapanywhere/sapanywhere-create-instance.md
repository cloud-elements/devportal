---
heading: SAP Anywhere
seo: Create Instance | SAP Anywhere | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 23
parent: Back to Element Guides
order: 20
---

## Create Instance

When you provision an instance, your app will have access to the different functionality offered by the SAP Anywhere platform.

### Step 1. Get Elements OAuth Information

* HTTP Header: None
* HTTP Verb: GET
* Request URL: /elements/{keyOrId}/oauth/url
* Request Body: None
* Query Parameters:

* __apiKey–__ the key obtained from registering your app with the provider
* __apiSecret__ – the secret obtained from registering your app with the provider
* __callbackUrl__ – the URL that you supplied to the provider when registering your app, state – any custom value that you want passed to the callback handler listening at the provided callback URL.

Description: The result of this API invocation is an OAuth redirect URL from the endpoint. Your application should now redirect to this URL, which in turn will present the OAuth authentication and authorization page to the user. When the provided callback URL is executed, a code value will be returned, which is required for the Create Instance API.

Example cURL Command:

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/elements/sapanywhere/oauth/url?apiKey=fake_sapanywhere_api_key&apiSecret=fake_sapanywhere_api_secret&callbackUrl=https://www.mycoolapp.com/auth&state=sapanywhere'
```

Response:

```json
{
  "oauthUrl": "https://app1-us.sapanywhere.com/sbo/oauth2/authorize?scope=BusinessData_RW&response_type=code&redirect_uri=https%3A%2F%2Fwww.mycoolapp.com%2Fauth&state=sapanywhere&client_id=https://api.cloud-elements.com/elements/api-v2/elements/sapanywhere/oauth/url?apiKey=fake_sapanywhere_api_key&apiSecret=fake_sapanywhere_api_secret&callbackUrl=https://www.mycoolapp.com/auth&state=sapanywhere_client_id",
  "element": "sapanywhere"
}
```

Handle Callback from the Endpoint:
Upon successful authentication and authorization by the user, the endpoint will redirect to the callback URL you provided when you setup your application with the endpoint, in our example, https://www.mycoolapp.com/auth. The endpoint will also provide two query string parameters: “state” and “code”. The value for the “state” parameter will be the name of the endpoint, e.g., "sapanywhere" in our example, and the value for the “code” parameter is the code required by Cloud Elements to retrieve the OAuth access and refresh tokens from the endpoint. If the user denies authentication and/or authorization, there will be a query string parameter called “error” instead of the “code” parameter. In this case, your application can handle the error gracefully.

### Step 2. Create an Instance

To provision your SAP Anywhere Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements SAP Anywhere is "sapanywhere".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "sapanywhere"
  },
  "providerData": {
    "code": "<CODE_ON_THE_RETURN_URL>"
  },
  "configuration": {
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "oauth.api.key": "<INSERT_CLIENT_ID>",
    "oauth.api.secret": "<INSERT_CLIENT_SECRET>"
  },
  "tags": [
    "<ADD_YOUR_TAG>"
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
  "id": 123,
  "name": "test",
  "token": "3sU/S/kZD36BaABPS7EAuSGHF+1wsthT+mvoukiE",
  "element": {
    "id": 2198,
    "name": "SAP Anywhere",
    "key": "sapanywhere",
    "description": "Add an SAP Anywhere Instance to connect your existing SAP Anywhere account to the eCommerce Hub, allowing you to manage customers, orders and products across multiple eCommerce Elements. You will need your SAP Anywhere account information to add an instance.",
    "image": "elements/provider_sapanywhere.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "resources": [],
    "private": false
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "base.url": "https://api-us.sapanywhere.com/v1/",
    "bulk.add_metadata": null,
    "event.notification.subscription.id": null,
    "sapanywhere.hooks.ordersupdated.id": "",
    "sapanywhere.hooks.productsdeleted.id": "",
    "event.vendor.type": "webhooks",
    "filter.response.nulls": "true",
    "bulk.query.date_mask": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
    "bulk.attribute.created_time": "creationTime",
    "sapanywhere.hooks.customersupdated.id": "",
    "bulk.relations": null,
    "pagination.type": "offset",
    "sapanywhere.hooks.productsupdated.id": "",
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "oauth.user.refresh_token": "74aa707d-b7692ecc4a55",
    "oauth.user.refresh_interval": "43199",
    "oauth.api.key": "API_KEY",
    "sapanywhere.hooks.orderscancelled.id": "",
    "event.notification.enabled": "false",
    "oauth.api.secret": "API_SECRET",
    "bulk.query.field_name": "creationTime",
    "oauth.token.url": "https://app1-us.sapanywhere.com/sbo/oauth2/token",
    "pagination.max": "100",
    "sapanywhere.hooks.ordersadded.id": "",
    "sapanywhere.hooks.customersadded.id": "",
    "oauth.scope": "BusinessData_RW",
    "sapanywhere.hooks.customersdeleted.id": "",
    "oauth.user.token": "eee1db172c126639e29e",
    "bulk.query.operator": ">=",
    "sapanywhere.hooks.ordersdeleted.id": "",
    "oauth.authorization.url": "https://app1-us.sapanywhere.com/sbo/oauth2/authorize",
    "bulk.query.download_format": "JSON",
    "event.notification.instance.finder": "",
    "event.notification.callback.url": "false",
    "sapanywhere.hooks.productsadded.id": "",
    "oauth.user.refresh_time": "147931541",
    "oauth.basic.header": "true"
  },
  "eventsEnabled": false,
  "eventsNotificationCallbackUrl": "false",
  "traceLoggingEnabled": false,
  "cachingEnabled": false,
  "externalAuthentication": "none",
  "user": {
    "id": 123
  }
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.
