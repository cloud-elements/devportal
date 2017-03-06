---
heading: PayPal
seo: Create Instance | PayPal | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 2244
parent: Back to Element Guides
order: 20
---

## Create Instance

PayPal is a Customer Success Platform. When you provision an instance, your app will have access to the different functionality offered by the PayPal platform.

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
'https://api.cloud-elements.com/elements/api-v2/elements/paypalv2/oauth/url?apiKey=fake_PayPal_api_key&apiSecret=fake_PayPal_api_secret&callbackUrl=https://www.mycoolapp.com/auth&state=paypalv2'
```

Response:

```javascript
{
  "oauthUrl": "https://www.paypal.com/signin/authorize?response_type=code&client_id=insert_paypal_client_id0&redirect_uri=https://www.mycoolapp.com/auth&state=paypalv2",
  "element": "paypalv2"
}
```

Handle Callback from the Endpoint:
Upon successful authentication and authorization by the user, the endpoint will redirect to the callback URL you provided when you setup your application with the endpoint, in our example, https://www.mycoolapp.com/auth. The endpoint will also provide two query string parameters: “state” and “code”. The value for the “state” parameter will be the name of the endpoint, e.g., `paypalv2` in our example, and the value for the “code” parameter is the code required by Cloud Elements to retrieve the OAuth access and refresh tokens from the endpoint. If the user denies authentication and/or authorization, there will be a query string parameter called “error” instead of the “code” parameter. In this case, your application can handle the error gracefully.

### Step 2. Create an Instance

To provision your PayPal Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements PayPal is “base”.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```JSON
{
  "element": {
    "key": "paypalv2"
  },
  "providerData": {
    "code": "Code on Return the URL"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_PAYPAL_CLIENT_ID>",
    "oauth.api.secret": "<INSERT_PAYPAL_CLIENT_SECRET>",
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "paypalv2.sandbox": false // default - if you wish to instantiate a sandbox account - then change to true
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
    "id": 2244,
    "name": "Paypal v2",
    "key": "paypalv2",
    "description": "Add a Paypal Instance to connect your existing Paypal account to the Payments and Billing Hub, allowing you to manage your payments, transactions, etc. across multiple Elements. You will need your Paypal account information to add an instance.",
    "image": "https://www.paypalobjects.com/webstatic/icon/pp258.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "resources": [    ],
    "transformationsEnabled": true,
    "bulkDownloadEnabled": false,
    "bulkUploadEnabled": false,
    "cloneable": true,
    "beta": false,
    "authentication": {
      "type": "oauth2"
    },
    "hub": "payment",
    "protocolType": "http",
    "parameters": [],
    "private": false
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "oauth.api.secret": "CLIENT_SECRET",
    "base.url": "https://api.paypal.com/v1",
    "event.notification.subscription.id": null,
    "oauth.token.url": "https://api.paypal.com/v1/identity/openidconnect/tokenservice",
    "pagination.max": "10",
    "event.vendor.type": "webhooks",
    "paypalv2.sandbox": "false",
    "oauth.token.refresh_url": "https://api.paypal.com/v1/identity/openidconnect/tokenservice",
    "oauth.user.token": "A103.QPuFPgkomCzjJTG_f73VFCQHI4qEsopHL_g_fC4Qz.mNBZKctsfSpUoUizFX8fH-S7n_e",
    "paypalv2.hooks.id": "",
    "oauth.authorization.url": "https://www.paypal.com/signin/authorize",
    "event.notification.instance.finder": "",
    "pagination.type": "offset",
    "event.notification.callback.url": "false",
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "oauth.user.refresh_token": "R103.RB-y78o9os_AY8rVBEyOWc38OXmQkROO22-CokpqSAcnrBxQrWnFrm17hEmCaSZS3Zy0fA4NK4eU-SGUwz92zj3AJtx2Cy2SumzRqNQlbFlMvNF4jHB5",
    "oauth.user.refresh_interval": "3600",
    "oauth.api.key": "CLIENT_ID",
    "oauth.user.refresh_time": "1488818916580",
    "oauth.basic.header": "true",
    "event.notification.enabled": "false"
  },
  "eventsEnabled": false,
  "eventsNotificationCallbackUrl": "false",
  "traceLoggingEnabled": false,
  "cachingEnabled": false,
  "externalAuthentication": "none"
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

{% include common-instance-config.md %}
