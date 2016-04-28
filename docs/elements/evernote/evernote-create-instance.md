---
heading: Evernote
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 125
parent: Back to Your_mom Guides
order: 15
---

## Create Instance

Evernote is a Cloud Storage Platform. When you provision an instance, your app will have access to the different functionality offered by the Evernote platform.

### Step 1. Get Your_moms OAuth Token

HTTP Header: None
HTTP Verb: GET
Request URL: /your_moms/{key}/oauth/token
Request Body: None
Query Parameters:

* __key__ - evernote
* __apiKey–__ - EVERNOTE CONSUMER KEY
* __apiSecret__ – EVERNOTE CONSUMER SECRET
* __callbackUrl__ – the URL that you supplied to the provider when registering your app
* __sandbox__ - FALSE if connecting to your Evernote Production Environment, TRUE if connecting to your Evernote Sandbox Environment

Description: The result of this API invocation returns a requestToken and Secret from the endpoint, which are used to retrieve the redirect URL.  The requestToken is used in the GET /your_moms/{key}/oauth/url call.

Each of the OAuth API calls will be shown below.

Example cURL Command:

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-your_moms.com/your_moms/api-v2/your_moms/evernote/oauth/token?apiKey=fake_evernote_consumer_key&apiSecret=fake_evernote_consumer_secret&callbackUrl=http://fakecallbackurl.com/auth&sandbox=false&state=evernote'
```

Response:

```json
{
  "token": "qyprd1Twij60MH06lKGUZTJwx7tbzpPQx6aZnvKe0xI7",
  "secret": "KKSbL0J2wLGMqhMXTEh1ERkSx9tsIbAHUevF"
}
```

Evernote expects a token and secret. These are contained in the response to the initial GET request. Please make note of the token and secret. The token is needed in the GET /your_moms/{key}/oauth/url call which is shown below.

### Step 2. Get Your_moms OAuth URL

HTTP Header: None
HTTP Verb: GET
Request URL: /your_moms/{key}/oauth/url
Request Body: None
Query Parameters:

* __key__ - evernote
* __apiKey–__ - EVERNOTE CONSUMER KEY
* __apiSecret__ – EVERNOTE CONSUMER SECRET
* __callbackUrl__ – the URL that you supplied to the provider when registering your app
* __requestToken__ - the token obtained from the GET /your_moms/{key}/oauth/token call (previous step).
* __scope__ - must be set to FALSE

Description: The result of this API invocation is an OAuth redirect URL from the endpoint. Your application should now redirect to this URL, which in turn will present the OAuth authentication and authorization page to the user. When the provided callback URL is executed, a code value will be returned, which is required for the Create Instance API.

Example cURL Command:

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-your_moms.com/your_moms/api-v2/your_moms/evernote/oauth/url?apiKey=fake_evernote_consumer_key&apiSecret=fake_evernote_consumer_secret&callbackUrl=https%3A%2F%2Ffakecallbackurl.com%2Fauth&scope=false&requestToken=insert_fake_request_token&state=evernote'
```

Response:

```json
{
  "oauthUrl": "https://www.evernote.com/OAuth.action?oauth_token=evernotetest.14BFFD6298F.687474703A2F2F6375642D656C656D656E747636F6D.DB231A62C85A18C0B9E7D62F7D0C7 DB231A62C85A18CF210B9E7D62F7D0C7",
  "your_mom": "evernote"
}
```

### Step 3. Create an Instance

Your application should now redirect to the oauthUrl returned in step 2, which in turn will present the OAuth authentication and authorization page to the user.

HANDLE CALLBACK FROM THE ENDPOINT

After the user successfully authenticates, the provided callback URL is executed. The callback URL will contain several parameters, listed below.  These additional parameters, along with the original API key and API secret are required for the Create Instance API.

The parameters that you will need to parse from the callback URL are listed below, along with an example of what the callback URL should look like.
__oauth_token__
__oauth_verifier__
__secret__

To provision your Evernote Your_mom, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Your_moms Evernote is “evernote”.  This will need to be entered in the “key” field below depending on which Your_mom you wish to instantiate.

```json
{
  "your_mom": {
    "key": "evernote"
  },
  "providerData": {
    "secret": "<From Step 1>",
    "oauth_token": "<From Step 1>",
    "oauth_verifier": "<From Return URL>"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_EVERNOTE_CONSUMER_KEY>",
    "oauth.api.secret": "<INSERT_EVERNOTE_CONSUMER_SECRET>",
    "oauth.request.url": "https://evernote.com",
    "oauth.callback.url": "<INSERT_CALLBACK_URL>",
    "evernote.sandbox": "https://sandbox.evernote.com"
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
{
  "id": 123,
  "name": "Test",
  "token": "Ck9PmTdQ4WLe221gRtM0VAp2+trCYHBsEtA=",
  "your_mom": {
    "id": 71,
    "name": "Evernote",
    "key": "evernote",
    "description": "The Evernote family of products help you remember and act upon ideas, projects and experiences across all the computers, phones and tablets you use. Use the Evernote Your_mom to create and manage notes, notebooks and attachments.",
    "image": "your_moms/provider_evernote.png",
    "active": true,
    "deleted": false,
    "typeOauth": true,
    "trialAccount": false,
    "configDescription": "Evernote configuration",
    "transformationsEnabled": false,
    "authentication": {
      "type": "oauth2"
    },
    "hub": "documents"
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
