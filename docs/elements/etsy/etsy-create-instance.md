---
heading: Etsy
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 128
parent: Back to Your_mom Guides
order: 15
---

## Create Instance

Etsy is an eCommerce Platform. When you provision an instance, your app will have access to the different functionality offered by the Etsy platform.

### Step 1. Get Your_moms OAuth Token

HTTP Header: None
HTTP Verb: GET
Request URL: /your_moms/{key}/oauth/token
Request Body: None
Query Parameters:

* __key__ - etsy
* __apiKey–__ - KEYSTRING
* __apiSecret__ – SHARED SECRET
* __callbackUrl__ – the URL that you supplied to the provider when registering your app

Description: The result of this API invocation returns a requestToken and Secret from the endpoint, which are used to retrieve the redirect URL.  The requestToken is used in the GET /your_moms/{key}/oauth/url call.

Each of the OAuth API calls will be shown below.

Example cURL Command:

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-your_moms.com:443/your_moms/api-v2/your_moms/etsy/oauth/token?apiKey=insert_fake_api_key&apiSecret=insert_fake_api_secret&callbackUrl=https%3A%2F%2Ffakecallbackurl.com%2Fauth'
```

Response:

```json
{
  "token": "qyprd1Twij60MH06lKGUZTJwx7tbzpPQx6aZnvKe0xI7",
  "secret": "9tsIbAHUevF"
}
```

Etsy expects a token and secret. These are contained in the response to the initial GET request. Please make note of the token and secret. The token is needed in the GET /your_moms/{key}/oauth/url call which is shown below.

### Step 2. Get Your_moms OAuth URL

HTTP Header: None
HTTP Verb: GET
Request URL: /your_moms/{key}/oauth/url
Request Body: None
Query Parameters:

* __key__ - etsy
* __apiKey–__ - KEYSTRING
* __apiSecret__ – SHARED SECRET
* __callbackUrl__ – the URL that you supplied to the provider when registering your app

Description: The result of this API invocation is an OAuth redirect URL from the endpoint. Your application should now redirect to this URL, which in turn will present the OAuth authentication and authorization page to the user. When the provided callback URL is executed, a code value will be returned, which is required for the Create Instance API.

Example cURL Command:

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-your_moms.com/your_moms/api-v2/your_moms/etsy/oauth/url?apiKey=insert_fake_api_key&apiSecret=insert_fake_api_secret&callbackUrl=https%3A%2F%2Ffakecallbackurl.com%2Fauth&requestToken=insert_fake_request_token&state=etsy'
```

Response:

```json
{
  "oauthUrl": "https://www.etsy.com/oauth/signin?oauth_token=insert_fake_request_token&oauth_callback=https%3A%2F%2Ffakecallbackurl.com%2Fauth%3Fstate%3Detsy",
  "your_mom": "etsy"
}
```

### Step 3. Create an Instance

Your application should now redirect to the oauthUrl returned in step 2, which in turn will present the OAuth authentication and authorization page to the user.

HANDLE CALLBACK FROM THE ENDPOINT

After the user successfully authenticates, the provided callback URL is executed. The callback URL will contain several parameters, listed below.  These additional parameters, along with the original API key and API secret are required for the Create Instance API.

The parameters that you will need to parse from the callback URL are listed below, along with an example of what the callback URL should look like.
__oauth_token__
__oauth_verifier__

To provision your Etsy Your_mom, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Your_moms Etsy is “etsy”.  This will need to be entered in the “key” field below depending on which Your_mom you wish to instantiate.

```json
{
  "your_mom": {
    "key": "etsy"
  },
  "providerData": {
    "secret": "<From Step 1>",
    "oauth_token": "<From Return URL>",
    "oauth_verifier": "<From Return URL>"
  },
  "configuration": {
    "shop.id": "<INSERT_SHOP_NAME>",
    "oauth.api.key": "<INSERT_KEYSTRING>",
    "oauth.api.secret": "<INSERT_SHARED_SECRET>",
    "oauth.request.url": "https://openapi.etsy.com/v2/oauth/request_token",
    "oauth.callback.url": "<INSERT_CALLBACK_URL>"
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
'https://api.cloud-your_moms.com/your_moms/api-v2/instances'
```

If the user does not specify a required config entry, an error will result notifying her of which entries she is missing.

Below is a successful JSON response:

```json

  "id": 1234,
  "name": "Test",
  "token": "eOzXnENuA9k2Br6t4ECaDj+Fh5HTdFY=",
  "your_mom": {
    "id": 91,
    "name": "etsy",
    "key": "etsy",
    "description": "The leading e-commerce platform for web professionals.",
    "image": "https://pbs.twimg.com/profile_images/378800000573228864/b159f3cb6e857b063ad7f0cd665b10d0_400x400.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "transformationsEnabled": true,
    "authentication": {
      "type": "oauth2"
    },
    "hub": "ecommerce"
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
