---
heading: FreshBooks
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 172
parent: Back to Element Guides
order: 15
---

## Create Instance

FreshBooks is a Finance Platform. When you provision an instance, your app will have access to the different functionality offered by the FreshBooks platform.

### Step 1. Get Elements OAuth Token

HTTP Header: None
HTTP Verb: GET
Request URL: /elements/{key}/oauth/token
Request Body: None
Query Parameters:

* __key__ - freshbooks
* __apiKey–__ - “Your Personal Subsite e.g. for mycompany.freshbooks.com would be mycompany”
* __apiSecret__ – the secret obtained from registering your app with the provider
* __callbackUrl__ – the URL that you supplied to the provider when registering your app,
* __siteAddress__ - your FreshBooks Site Address you are wanting to Authorize e.g. for targetcompany.freshbooks.com would be targetcompany

Description: The result of this API invocation returns a requestToken and Secret from the endpoint, which are used to retrieve the redirect URL.  The requestToken is used in the GET /elements/{key}/oauth/url call.

Each of the OAuth API calls will be shown below.

Example cURL Command:

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/elements/freshbooks/oauth/token?apiKey=insert_api_key&apiSecret=insert_api_secret&callbackUrl=https%3A%2F%2Fwww.mycoolapp.com%2Fauth&siteAddress=insert_freshbooks_site_address'
```

Response:

```json
{
  "token": "qyprd1Twij60MH06lKGUZTJwx7tbzpPQx6aZnvKe0xI7",
  "secret": "KKSbL0J2wLGMqhMXTEh1ERkSx9tsIbAHUevF"
}
```

FreshBooks expects a token and secret. These are contained in the response to the initial GET request. Please make note of the token and secret. The token is needed in the GET /elements/{key}/oauth/url call which is shown below.

### Step 2. Get Elements OAuth URL

HTTP Header: None
HTTP Verb: GET
Request URL: /elements/{key}/oauth/url
Request Body: None
Query Parameters:

* __key__ - freshbooks
* __apiKey–__ - “Your Personal Subsite e.g. for mycompany.freshbooks.com would be mycompany”
* __apiSecret__ – the secret obtained from registering your app with the provider
* __callbackUrl__ – the URL that you supplied to the provider when registering your app,
* __requestToken__ - the token obtained from the GET /elements/{key}/oauth/token call (previous step).
* __siteAddress__ - your FreshBooks Site Address you are wanting to Authorize e.g. for targetcompany.freshbooks.com would be targetcompany

Description: The result of this API invocation is an OAuth redirect URL from the endpoint. Your application should now redirect to this URL, which in turn will present the OAuth authentication and authorization page to the user. When the provided callback URL is executed, a code value will be returned, which is required for the Create Instance API.

Example cURL Command:

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/elements/freshbooks/oauth/url?apiKey=insert_fake_api_key&apiSecret=insert_fake_api_secret&callbackUrl=http://www.demonstrab.ly&requestToken=insert_requestToken&siteAddress=insert_freshbooks_site_address'
```

Response:

```json
{
  "oauthUrl": "https://siteaddress.freshbooks.com/oauth/oauth_authorize.php?oauth_token=null&oauth_callback=https%3A%2F%2Fwww.mycoolapp.com%2Fauth%3Fstate%3Dfreshbooks",
  "element": "freshbooks"
}
```

### Step 3. Create an Instance

Your application should now redirect to the oauthUrl returned in step 2, which in turn will present the OAuth authentication and authorization page to the user.

HANDLE CALLBACK FROM THE ENDPOINT

After the user successfully authenticates, the provided callback URL is executed. The callback URL will contain several parameters, listed below.  These additional parameters, along with the original API key and API secret are required for the Create Instance API.

The parameters that you will need to parse from the callback URL are listed below, along with an example of what the callback URL should look like.
__oauth_token__
__oauth_verifier__
__refresh_token__
__secret__

To provision your FreshBooks Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements FreshBooks is “freshbooks”.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "freshbooks"
  },
  "providerData": {
       "oauth_token": "<OAUTH_TOKEN_RETURNED_IN_OAUTH_EXCHANGE>",
       "oauth_verifier": "<OAUTH_VERIFIER_RETURNED_IN_OAUTH_EXCHANGE>",
       "secret": "<SECRET_RETURNED_IN_OAUTH_EXCHANGE>"
   },
  "configuration": {
  	"oauth.api.key":"<INSERT_FRESHBOOKS_API_KEY>",
  	"oauth.api.secret":"<INSERT_FRESHBOOKS_API_SECRET>",
        "freshbooks.site.address":"<INSERT_FRESHBOOKS_SITE_ADDRESS>"
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
    "id": 123,
    "name": "Freshbooks Beta",
    "key": "freshbooks",
    "description": "Add a Freshbooks Instance to connect your existing Freshbooks account to the Finance Hub",
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
    "oauth.api.secret": "FRESHBOOKS_API_SECRET",
    "site.address": "FRESHBOOKS_SITE_ADDRESS",
    "oauth.token.url": "https://siteaddress.freshbooks.com/oauth/oauth_access.php",
    "oauth.user.token.secret": "USER SECRET",
    "pagination.max": "100",
    "event.vendor.type": "webhook",
    "oauth.request.url": "https://siteaddress.freshbooks.com/oauth/oauth_request.php",
    "oauth.user.token": "USER TOKEN",
    "oauth.authorization.url": "https://siteaddress.freshbooks.com/oauth/oauth_authorize.php",
    "pagination.type": "page",
    "event.notification.callback.url": null,
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "oauth.api.key": "FRESHBOOKS_API_SECRET",
    "event.notification.enabled": "false"
  },
  "eventsEnabled": false,
  "cachingEnabled": false,
  "traceLoggingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.
