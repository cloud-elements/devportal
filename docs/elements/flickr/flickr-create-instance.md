---
heading: Flickr
seo: Create Instance | Flickr | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 251
parent: Back to Element Guides
order: 15
---

## Create Instance

Flickr is a Social Platform. When you provision an instance, your app will have access to the different functionality offered by the Flickr platform.

### Step 1. Get Elements OAuth Token

* HTTP Header: None
* HTTP Verb: GET
* Request URL: /elements/{key}/oauth/token
* Request Body: None
* Query Parameters:

* __key__ - flickr
* __apiKey–__ - the key obtained from registering your app with the provider
* __apiSecret__ – the secret obtained from registering your app with the provider
* __callbackUrl__ – the URL that you supplied to the provider when registering your app

Description: The result of this API invocation returns a requestToken and Secret from the endpoint, which are used to retrieve the redirect URL.  The requestToken is used in the GET /elements/{key}/oauth/url call.

Each of the OAuth API calls will be shown below.

Example cURL Command:

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/elements/flickr/oauth/token?apiKey=insert_fake_api_key&apiSecret=insert_fake_api_secret&callbackUrl=https://www.mycoolapp.com/auth'
```

Response:

```json
{
  "token": "qyprd1Twij60MH06lKGUZTJwx7tbzpPQx6aZnvKe0xI7",
  "secret": "KKSbL0J2wLGMqhMXTEh1ERkSx9tsIbAHUevF"
}
```

Flickr expects a token and secret. These are contained in the response to the initial GET request. Please make note of the token and secret. The token is needed in the GET /elements/{key}/oauth/url call which is shown below.

### Step 2. Get Elements OAuth URL

* HTTP Header: None
* HTTP Verb: GET
* Request URL: /elements/{key}/oauth/url
* Request Body: None
* Query Parameters:

* __key__ - flickr
* __apiKey–__ - the key obtained from registering your app with the provider
* __apiSecret__ – the secret obtained from registering your app with the provider
* __callbackUrl__ – the URL that you supplied to the provider when registering your app,
* __requestToken__ - the token obtained from the GET /elements/{key}/oauth/token call (previous step).

Description: The result of this API invocation is an OAuth redirect URL from the endpoint. Your application should now redirect to this URL, which in turn will present the OAuth authentication and authorization page to the user. When the provided callback URL is executed, a code value will be returned, which is required for the Create Instance API.

Example cURL Command:

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/elements/flickr/oauth/url?apiKey=insert_fake_api_key&apiSecret=insert_fake_api_secret&callbackUrl=https://www.mycoolapp.com/auth&requestToken=insert_fake_request_token&state=flickr'

```

Response:

```json
{
  "oauthUrl": "https://www.flickr.com/services/oauth/authorize?perms=write&oauth_token=insert_fake_oauth_token&oauth_callback=http%3A%2F%2Fwww.mycoolapp.com%2Fauth%3Fstate%3Dflickr",
  "element": "flickr"
}
```

### Step 3. Create an Instance

Your application should now redirect to the oauthUrl returned in step 2, which in turn will present the OAuth authentication and authorization page to the user.

HANDLE CALLBACK FROM THE ENDPOINT

After the user successfully authenticates, the provided callback URL is executed. The callback URL will contain several parameters, listed below.  These additional parameters, along with the original API key and API secret are required for the Create Instance API.

The parameters that you will need to parse from the callback URL are listed below, along with an example of what the callback URL should look like.
__oauth_token__
__oauth_verifier__

To provision your Flickr Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Flickr is "flickr".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "flickr"
  },
  "providerData": {
       "oauth_token": "<OAUTH_TOKEN_RETURNED_IN_OAUTH_EXCHANGE>",
       "oauth_verifier": "<OAUTH_VERIFIER_RETURNED_IN_OAUTH_EXCHANGE>",
       "secret": "<SECRET_RETURNED_IN_OAUTH_EXCHANGE>"
   },
  "configuration": {
    "oauth.api.key": "<INSERT_FLICKR_API_KEY>",
    "oauth.api.secret": "<INSERT_FLICKR_API_SECRET>",
    "oauth.callback.url": "<SAME_CALLBACK_URL_USED_IN_STEP_2>",
    "oauth.request.url": "https://www.flickr.com/services/oauth/request_token"
  }
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
  "id": 123,
  "name": "Test",
  "token": "Ck9PmTdQ4WLe221gRtM0VAp2+trCYHBsEtA=",
  "element": {
   "id": 649,
   "name": "flickr",
   "key": "flickr",
   "description": "Add a Flickr Instance to connect your existing Flickr account to the Cloud Storage and Documents Hub, allowing you to manage photos and albums. You will need your Flickr account information to add an instance.",
   "image": "http://images.en.yibada.com/data/images/full/44764/yahoo-flickr-logo.jpg",
   "active": true,
   "deleted": false,
   "typeOauth": false,
   "trialAccount": false,
   "resources": [],
   "provisionInteractions": [],
 "valid": true,
 "disabled": false,
 "maxCacheSize": 0,
 "cacheTimeToLive": 0,
 "configuration": {
   "event.notification.subscription.id": null,
   "base.url": "https://api.flickr.com/services",
   "oauth.api.secret": "FLICKR_API_SECRET",
   "bulk.query.field_name": "",
   "oauth.token.url": "https://www.flickr.com/services/oauth/access_token",
   "pagination.max": "100",
   "oauth.user.token.secret": "e40714b43ec7a762",
   "event.vendor.type": "polling",
   "oauth.request.url": "https://www.flickr.com/services/oauth/request_token",
   "oauth.user.token": "72157652744881424-bc519556b630c11e",
   "bulk.query.operator": ">=",
   "bulk.query.date_mask": "key",
   "oauth.authorization.url": "https://www.flickr.com/services/oauth/authorize?perms=write",
   "event.notification.instance.finder": "",
   "pagination.type": null,
   "event.notification.callback.url": null,
   "oauth.callback.url": "https://www.mycoolapp.com/auth",
   "oauth.api.key": "FLICKR_API_KEY",
   "event.notification.enabled": "false"
 },
 "eventsEnabled": false,
 "traceLoggingEnabled": false,
 "cachingEnabled": false
 }
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.
