---
heading: Base CRM
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 201
parent: Back to Element Guides
order: 20
---

## Create Instance

Base CRM is a Customer Success Platform. When you provision an instance, your app will have access to the different functionality offered by the Base CRM platform.

### Step 1. Get Elements OAuth Information

HTTP Header: None
HTTP Verb: GET
Request URL: /elements/{key}/oauth/url
Request Body: None
Query Parameters:

* __apiKey–__ the key obtained from registering your app with the provider
* __apiSecret__ – the secret obtained from registering your app with the provider
* __callbackUrl__ – the URL that you supplied to the provider when registering your app, state – any custom value that you want passed to the callback handler listening at the provided callback URL.

Description: The result of this API invocation is an OAuth redirect URL from the endpoint. Your application should now redirect to this URL, which in turn will present the OAuth authentication and authorization page to the user. When the provided callback URL is executed, a code value will be returned, which is required for the Create Instance API.

Example cURL Command:

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/elements/base/oauth/url?apiKey=fake_Base CRM_api_key&apiSecret=fake_Base CRM_api_secret&callbackUrl=https://www.mycoolapp.com/auth&state=base'
```

Response:

```javascript
{
  "oauthUrl": "https://api.getbase.com/oauth2/authorize?response_type=code&client_id=insert_basecrm_client_id0&redirect_uri=https://www.mycoolapp.com/auth&state=base",
  "element": "base"
}
```

Handle Callback from the Endpoint:
Upon successful authentication and authorization by the user, the endpoint will redirect to the callback URL you provided when you setup your application with the endpoint, in our example, https://www.mycoolapp.com/auth. The endpoint will also provide two query string parameters: “state” and “code”. The value for the “state” parameter will be the name of the endpoint, e.g., “base” in our example, and the value for the “code” parameter is the code required by Cloud Elements to retrieve the OAuth access and refresh tokens from the endpoint. If the user denies authentication and/or authorization, there will be a query string parameter called “error” instead of the “code” parameter. In this case, your application can handle the error gracefully.

### Step 2. Create an Instance

To provision your Base CRM Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Base CRM is “base”.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```javascript
{
  "element": {
    "key": "base"
  },
  "providerData": {
    "code": "Code on Return the URL"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_BASECRM_CLIENT_ID>",
    "oauth.api.secret": "<INSERT_BASECRM_CLIENT_SECRET>",
    "oauth.callback.url": "https://www.mycoolapp.com/auth"
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

```javascript
{
  "id": 123,
  "name": "Test",
  "token": "5MOr3Sl/E4kww6mTjmjBYV/hAUAzz1g=",
  "element": {
    "id": 48,
    "name": "BaseCRM Beta",
    "key": "basecrm",
    "description": "Add a BaseCRM Instance to connect your existing BaseCRM account to the eCommerce Hub, allowing you to manage orders and products across multiple eCommerce Elements. You will need your BaseCRM account information to add an instance.",
    "image": "elements/provider_BaseCRM.png",
    "active": true,
    "deleted": false,
    "typeOauth": true,
    "trialAccount": false,
    "configDescription": "If you do not have an BaseCRM account, you can create one at https://www.BaseCRM.com/login",
    "signupURL": "https://www.BaseCRM.com/login",
    "transformationsEnabled": true,
    "authentication": {
      "type": "oauth2"
    },
    "hub": "ecommerce",
    "parameters": []
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "oauth.api.secret": "BaseCRM_API_SECRET",
    "event.notification.subscription.id": null,
    "event.notification.callback.url": null,
    "oauth.callback.url": "https://examplecallbackurl.com",
    "BaseCRM.site.address": "SHOP_NAME",
    "oauth.scope": "write_orders,write_products,write_customers",
    "oauth.api.key": "BaseCRM_API_KEY",
    "oauth.user.token": "f9a67e985bee7c6352c739d1ddcdb0f9",
    "event.notification.enabled": "false"
  },
  "eventsEnabled": false,
  "cachingEnabled": false,
  "traceLoggingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.
