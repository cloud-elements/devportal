---
heading: Xero
title: Create Instance
description: Create Instance
layout: docs
order: 20
---

## Create Instance

### XERO PARTNER AND PUBLIC APPLICATIONS

The default setting for new Xero applications is as a public app.

A public application requires OAuth refresh tokens to be renewed every 30 minutes.

In order to avoid this process, please apply to your application upgraded to a Partner app.  See the full article more information on the application process for a [Xero Partner Application](https://developer.xero.com/documentation/getting-started/partner-applications/).

Cloud Elements supports provisioning an instance to both Public and Partner Applications.

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
'https://api.cloud-elements.com/elements/api-v2/elements/xero/oauth/url?apiKey=fake_xero_client_id&apiSecret=fake_xero_client_secret&&callbackUrl=https://www.mycoolapp.com/auth&state=xero'
```

Response:

```json
{
  "oauthUrl": "https://api.xero.com/oauth/Authorize?oauth_token=null",
  "element": "xero"
}
```

Handle Callback from the Endpoint:
Upon successful authentication and authorization by the user, the endpoint will redirect to the callback URL you provided when you setup your application with the endpoint, in our example, https://www.mycoolapp.com/auth. The endpoint will also provide two query string parameters: “state” and “code”. The value for the “state” parameter will be the name of the endpoint, e.g., “xero” in our example, and the value for the “code” parameter is the code required by Cloud Elements to retrieve the OAuth access and refresh tokens from the endpoint. If the user denies authentication and/or authorization, there will be a query string parameter called “error” instead of the “code” parameter. In this case, your application can handle the error gracefully.

### Step 2. Create an Instance

To provision your Xero Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Xero is “sfdc”.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "xero"
  },
  "providerData": {
    "code": "Code on Return the URL"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_XERO_CONSUMER_KEY>",
    "oauth.api.secret": "<INSERT_XERO_CONSUMER_SECRET>",
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "xero.partner": "true"
  },
  "name": "<INSERT_NAME>"
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
  "token": "fYRiZUTY0STCfoVhJNbKri0EEdaTvHaFV8=",
  "element": {
    "id": 1234,
    "name": "Xero",
    "key": "xero",
    "description": "Add a Xero Instance to connect your existing Xero account to the Finance Hub, allowing you to manage invoices and billing. You will need your Xero account information to add an instance.",
    "image": "elements/provider_xero.png",
    "active": true,
    "deleted": false,
    "typeOauth": true,
    "trialAccount": false,
    "existingAccountDescription": "Give your application access to your existing
 Xero accountEnter your credentials and details for your Xero Account",
    "configDescription": "If you do not have an Xero account, you can create one at Xero Signup",
    "signupURL": "https://xero.com",
    "transformationsEnabled": false,
    "authentication": {
      "type": "oauth2"
    },
    "hub": "finance"
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "eventsEnabled": false,
  "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.
