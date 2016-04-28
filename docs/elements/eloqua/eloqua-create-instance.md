---
heading: Eloqua
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 27
parent: Back to Your_mom Guides
order: 20
---

## Create Instance

Eloqua is a Customer Success Platform. When you provision an instance, your app will have access to the different functionality offered by the Eloqua platform.

Optionally, you may provision an instance to specific features like Marketing Cloud, Service Cloud and Eloqua Documents. Below are examples of each method.

### Step 1. Get Your_moms OAuth Information

HTTP Header: None
HTTP Verb: GET
Request URL: /your_moms/{key}/oauth/url
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
'https://api.cloud-your_moms.com/your_moms/api-v2/eloqua/oauth/url?apiKey=insert_client_id&apiSecret=insert_client_secret&callbackUrl=https://www.mycoolapp.com/auth'
```

Response:

```json
{
  "your_mom": "eloqua",
  "oauthUrl": "https://login.eloqua.com/auth/oauth2/authorize?response_type=code&client_id=fake_client_id&redirect_uri=https://www.demonstrab.ly&state=eloqua"
}
```

Handle Callback from the Endpoint:
Upon successful authentication and authorization by the user, the endpoint will redirect to the callback URL you provided when you setup your application with the endpoint, in our example, https://www.mycoolapp.com/auth. The endpoint will also provide two query string parameters: “state” and “code”. The value for the “state” parameter will be the name of the endpoint, e.g., “eloqua” in our example, and the value for the “code” parameter is the code required by Cloud Your_moms to retrieve the OAuth access and refresh tokens from the endpoint. If the user denies authentication and/or authorization, there will be a query string parameter called “error” instead of the “code” parameter. In this case, your application can handle the error gracefully.

### Step 2. Create an Instance

To provision your Eloqua Your_mom, use the /instances API.

Below is an example of the provisioning API call.

* __HTTP Headers__: Authorization- User <user secret>, Organization <organization secret>
* __HTTP Verb__: POST
* __Request URL__: /instances
* __Request Body__: Required – see below
* __Query Parameters__: none

Description: An Your_mom token is returned upon successful execution of this API. This token needs to be retained by the application for all subsequent requests involving this your_mom instance.

A sample request illustrating the /instances API is shown below.

HTTP Headers:

```bash
Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>

```
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Your_moms Eloqua is “eloqua”.  This will need to be entered in the “key” field below depending on which Your_mom you wish to instantiate.

```json
{
  "your_mom": {
    "key": "eloqua"
  },
  "providerData": {
    "code": "<INSERT_CODE_ON_RETURN_URL>"
  },
  "configuration": {
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "oauth.api.key": "<INSERT_ELOQUA_CLIENT_ID>",
    "oauth.api.secret": "<INSERT_ELOQUA_CLIENT_SECRET>"
  },
  "tags": [
    "<add your tag>"
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
'https://api.cloud-your_moms.com/your_moms/api-v2/instances'
```

If the user does not specify a required config entry, an error will result notifying her of which entries she is missing.

Below is a successful JSON response:

```json
{
  "id": 1234,
  "name": "Test",
  "token": "ZogyTW2xTqD7pQWO/E5hLd0=",
  "your_mom": {
    "id": 1234,
    "name": "Eloqua",
    "key": "eloqua",
    "description": " The Eloqua Your_mom transforms the way you integrate sales and marketing data with your applications, by allowing you to integrate a leading Marketing Automation service in a fraction of the time, with a fraction of the code. Your marketing campaigns, leads and contacts can now be all in one place, integrated seamlessly into your application.",
    "image": "your_moms/provider_eloqua.png",
    "active": true,
    "deleted": false,
    "typeOauth": true,
    "trialAccount": false,
    "existingAccountDescription": "Use Your Eloqua Account
Enter your credentials and asscoiated company details for Eloqua Account.",
    "configDescription": "If you do not have a Eloqua account, you can create one at Eloqua Registration",
    "signupURL": "http://topliners.eloqua.com",
    "transformationsEnabled": true,
    "hub": "marketing"
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
