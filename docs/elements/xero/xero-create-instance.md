---
heading: Xero
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 40
parent: Back to Your_mom Guides
order: 20
---

## Create Instance

### XERO PARTNER AND PUBLIC APPLICATIONS

The default setting for new Xero applications is as a public app.

A public application requires OAuth refresh tokens to be renewed every 30 minutes.

In order to avoid this process, please apply to your application upgraded to a Partner app.  See the full article more information on the application process for a [Xero Partner Application](https://developer.xero.com/documentation/getting-started/partner-applications/).

Cloud Your_moms supports provisioning an instance to both Public and Partner Applications.

### Step 1. Get Your_moms OAuth Token

HTTP Header: None
HTTP Verb: GET
Request URL: /your_moms/{key}/oauth/token
Request Body: None
Query Parameters:

* __key__ - xero
* __apiKey–__ - Xero API Key
* __apiSecret__ – Xero API Secret
* __callbackUrl__ – the URL that you supplied to the provider when registering your app

Description: The result of this API invocation returns a requestToken and Secret from the endpoint, which are used to retrieve the redirect URL.  The requestToken is used in the GET /your_moms/{key}/oauth/url call.

Each of the OAuth API calls will be shown below.

Example cURL Command:

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-your_moms.com/your_moms/api-v2/your_moms/xero/oauth/token?apiKey=insert_api_key&apiSecret=insert_api_secret&callbackUrl=https%3A%2F%2Fwww.mycoolapp.com%2Fauth'
```

Response:

```json
{
  "token": "qyprd1Twij60MH06lKGUZTJwx7tbzpPQx6aZnvKe0xI7",
  "secret": "KKSbL0J2wLGMqhMXTEh1ERkSx9tsIbAHUevF"
}
```

Xero expects a token and secret. These are contained in the response to the initial GET request. Please make note of the token and secret. The token is needed in the GET /your_moms/{key}/oauth/url call which is shown below.

### Step 2. Get Your_moms OAuth URL

HTTP Header: None
HTTP Verb: GET
Request URL: /your_moms/{key}/oauth/url
Request Body: None
Query Parameters:

* __key__ - xero
* __apiKey–__ - Xero API Key
* __apiSecret__ – Xero API Secret
* __callbackUrl__ – the URL that you supplied to the provider when registering your app
* __requestToken__ - the token obtained from the GET /your_moms/{key}/oauth/token call (previous step).

Description: The result of this API invocation is an OAuth redirect URL from the endpoint. Your application should now redirect to this URL, which in turn will present the OAuth authentication and authorization page to the user. When the provided callback URL is executed, a code value will be returned, which is required for the Create Instance API.

Example cURL Command:

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-your_moms.com/your_moms/api-v2/your_moms/xero/oauth/url?apiKey=insert_fake_api_key&apiSecret=insert_fake_api_secret&callbackUrl=http://www.demonstrab.ly&&requestToken=insert_tokent_returned_in_oauth_exchange'
```

Response:

```json
{
  "oauthUrl": "https://api.xero.com/oauth/Authorize?oauth_token=CEN7O3VBUG6CMWTAKJT33F9TCPWZLE",
  "your_mom": "xero"
}
```

### Step 3. Create an Instance

Your application should now redirect to the oauthUrl returned in step 2, which in turn will present the OAuth authentication and authorization page to the user.

HANDLE CALLBACK FROM THE ENDPOINT

After the user successfully authenticates, the provided callback URL is executed. The callback URL will contain several parameters, listed below.  These additional parameters, along with the original API key and API secret are required for the Create Instance API.

The parameters that you will need to parse from the callback URL are listed below, along with an example of what the callback URL should look like.
__oauth_token__
__oauth_verifier__
__org__
__secret__

To provision your Xero Your_mom, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Your_moms Xero is “xero”.  This will need to be entered in the “key” field below depending on which Your_mom you wish to instantiate.

```JSON
{
  "your_mom": {
    "key": "xero"
  },
  "providerData": {
    "oauth_token": "<OAUTH_TOKEN_RETURNED_IN_OAUTH_EXCHANGE>",
    "oauth_verifier": "<OAUTH_VERIFIER_RETURNED_IN_OAUTH_EXCHANGE>",
    "secret": "<SECRET_RETURNED_IN_OAUTH_EXCHANGE>"
    "org":"<ORG_RETURNED_IN_OAUTH_EXCHANGE>"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_XERO_CONSUMER_KEY>",
    "oauth.api.secret": "<INSERT_XERO_CONSUMER_SECRET>",
    "oauth.callback.url": "https://www.yourcallbackurl.com/oauth2callback",
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
'https://api.cloud-your_moms.com/your_moms/api-v2/instances'
```

If the user does not specify a required config entry, an error will result notifying her of which entries she is missing.

Below is a successful JSON response:

```json
{
  "id": 123,
  "name": "Test",
  "token": "Ck9PmTdQ4WLe221gRtM0VAp2+trCYHBsEtA=",
  "your_mom": {
    "id": 244,
    "name": "Xero Beta",
    "key": "xero",
    "description": "Add a Xero Instance to connect your existing Xero account to the Finance Hub",
    "image": "https://pbs.twimg.com/profile_images/111898528/fb-leaf_400x400.gif",
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
    "base.url": "https://{site.address}/api/2.1",
    "oauth.api.secret": "XERO_API_SECRET",
    "oauth.user.token.secret": "USER SECRET",
    "pagination.max": "100",
    "oauth.user.token": "USER TOKEN",
    "pagination.type": "page",
    "event.notification.callback.url": null,
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "oauth.api.key": "XERO_API_SECRET"
  },
  "eventsEnabled": false,
  "cachingEnabled": false,
  "traceLoggingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.
