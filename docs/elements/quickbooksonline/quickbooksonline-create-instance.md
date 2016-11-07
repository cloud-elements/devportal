---
heading: QuickBooks Online
seo: Create Instance | QuickBooks Online | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 39
parent: Back to Element Guides
order: 15
---

## Create Instance

__Note from Intuit:__

With the introduction of sandboxes, there have been some changes to app tokens. Previously, your development app tokens could connect to any kind of QuickBooks Online account – trial subscriptions, paid subscriptions, or 1 year developer subscriptions. You can now only connect your development app tokens to your single US sandbox. There is no limit on the number of connections to your sandbox from your development app token.

To create a sandbox, please go to [https://developer.intuit.com/](https://developer.intuit.com/) and sign in. At the bottom of the page, there is a link for QuickBooks sandbox. Just click on it and you will be set. You can manage your sandbox [here](https://developer.intuit.com/v2/ui#/sandbox).

To test your application against any kind of existing QuickBooks Online account, including your existing trial or 1 year developer subscription, you must switch your application to use production app tokens. If you do not do this, you will get the following error:

```bash
Error code : invalid_database. Error message : Development application can only subscribe to sandbox company. No sandbox company found Error Id :
```

To summarize, development app tokens will work only for sandbox companies and production app tokens will work for all other cases. You do not need to publish your application to use your production app tokens.

For the complete article from Intuit, please [click here](https://developer.intuit.com/blog/2014/10/24/intuit-developer-now-offers-quickbooks-sandboxes).

### Step 1. Get Elements OAuth Token

* HTTP Header: None
* HTTP Verb: GET
* Request URL: /elements/{keyOrId}/oauth/token
* Request Body: None
* Query Parameters:

* __key__ - quickbooks
* __apiKey–__ - the key obtained from registering your app with the provider
* __apiSecret__ – the secret obtained from registering your app with the provider
* __callbackUrl__ – the URL that you supplied to the provider when registering your app

Description: The result of this API invocation returns a requestToken and Secret from the endpoint, which are used to retrieve the redirect URL.  The requestToken is used in the GET /elements/{keyOrId}/oauth/url call.

Each of the OAuth API calls will be shown below.

Example cURL Command:

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/elements/quickbooks/oauth/token?apiKey=insert_fake_api_key&apiSecret=insert_fake_api_secret&callbackUrl=http://www.demonstrab.ly'
```

Response:

```json
{
  "token": "qyprd1Twij60MH06lKGUZTJwx7tbzpPQx6aZnvKe0xI7",
  "secret": "KKSbL0J2wLGMqhMXTEh1ERkSx9tsIbAHUevF"
}
```

QuickBooks Online expects a token and secret. These are contained in the response to the initial GET request. Please make note of the token and secret. The token is needed in the GET /elements/{keyOrId}/oauth/url call which is shown below.

### Step 2. Get Elements OAuth URL

* HTTP Header: None
* HTTP Verb: GET
* Request URL: /elements/{keyOrId}/oauth/url
* Request Body: None
* Query Parameters:

* __key__ - quickbooks
* __apiKey–__ - the key obtained from registering your app with the provider
* __apiSecret__ – the secret obtained from registering your app with the provider
* __callbackUrl__ – the URL that you supplied to the provider when registering your app,
* __requestToken__ - the token obtained from the GET /elements/{keyOrId}/oauth/token call (previous step).

Description: The result of this API invocation is an OAuth redirect URL from the endpoint. Your application should now redirect to this URL, which in turn will present the OAuth authentication and authorization page to the user. When the provided callback URL is executed, a code value will be returned, which is required for the Create Instance API.

Example cURL Command:

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/elements/quickbooks/oauth/url?apiKey=insert_fake_api_key&apiSecret=insert_fake_api_secret&callbackUrl=http://www.demonstrab.ly&requestToken=insert_fake_request_token&state=quickbooks'
```

Response:

```json
{
    "element": "quickbooks",
    "oauthUrl": "https://appcenter.intuit.com/Connect/Begin?oauth_token=qyprdJHtIbwm3sGOoOCvXuv2Cs8fsQrZFjJWe4HEZAyb0&oauth_callback=http%3A%2F%2Fwww.cloud-elements.com%3Fstate%3Dquickbooks"
}
```

### Step 3. Create an Instance

Your application should now redirect to the oauthUrl returned in step 2, which in turn will present the OAuth authentication and authorization page to the user.

HANDLE CALLBACK FROM THE ENDPOINT

After the user successfully authenticates, the provided callback URL is executed. The callback URL will contain several parameters, listed below.  These additional parameters, along with the original API key and API secret are required for the Create Instance API.

The parameters that you will need to parse from the callback URL are listed below, along with an example of what the callback URL should look like.
__oauth_token__
__oauth_verifier__
__realmId__
__dataSource__

```bash
http://demonstrab.ly/?state=quickbooks&oauth_token=qyprdlGChtClXwBpAw1vm1fJSC3mQqS3dGX0PPphEzNEUI9s&oauth_verifier=br6qctk&realmId=12345678910&dataSource=QBO
```

These values will be used to create an Instance. An example of this process along with sample JSON will be shown in the next section.

To provision your QuickBooks Online Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements QuickBooks Online is “quickbooks”.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "quickbooks"
  },
  "providerData": {
    "oauth_token": "<OAUTH_TOKEN_RETURNED_IN_OAUTH_EXCHANGE>",
    "realmId": "<REALMID_RETURNED_IN_OAUTH_EXCHANGE>",
    "oauth_verifier": "<OAUTH_VERIFIER_RETURNED_IN_OAUTH_EXCHANGE>",
    "secret": "<SECRET_RETURNED_IN_OAUTH_EXCHANGE>",
    "state": "quickbooks",
    "dataSource": "<RETURNED_IN_OAUTH_EXCHANGE>"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_QUICKBOOKS_API_KEY>",
    "oauth.api.secret": "<INSERT_QUICKBOOKS_API_SECRET>",
    "oauth.callback.url": "<SAME CALLBACK URL USED IN STEP 2>"
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
    "id": 1234,
    "name": "test",
    "token": "3sU/S/kZC46BaABPS7EAuhT+ukiEHkI=",
    "element": {
        "id": 1234,
        "name": "QuickBooks",
        "key": "quickbooks",
        "description": "Run your entire business with QuickBooks. Track your sales and expenses, get paid faster, and even run payroll with it.",
        "active": true,
        "deleted": false,
        "typeOauth": true,
        "trialAccount": false,
        "configDescription": "If you do not have an QuickBooks account, you can create one at QuickBooks Signup",
        "signupURL": "http://quickbooks.intuit.com/signup"
    },
    "provisionInteractions": [],
    "valid": true,
    "disabled": false,
    "maxCacheSize": 0,
    "cacheTimeToLive": 0,
    "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

#### QuickBooks Quick Provision

It is now possible to directly provision a Quickbooks instance via API if the data for all necessary fields is available. This means that it is not required to go through the OAuth flow if the OAuth info is already available.

For example:

```json
{
  "element": {
    "key": "quickbooks"
  },
  "configuration": {
    "oauth.callback.url":"<INSERT_CALLBACK_URL>",
    "quickbooks.datasource": "<INSERT_DATASOURCE>",
    "oauth.user.refresh_interval": "<INSERT_REFRESH_INTERVAL>",
    "quickbooks.realm.id" : "<INSERT_REALM_ID>",
    "oauth.user.token":"<INSERT_USER_TOKEN>",
    "oauth.user.token.secret":"<INSERT_USER_TOKEN_SECRET>",
    "oauth.api.key": "<INSERT_API_KEY>",
    "oauth.api.secret": "<INSERT_API_SECRET>",
    "oauth.user.refresh_time":"<INSERT_REFRESH_TIME>"
  },
  "tags": [
    "QBO Token"
  ],
  "name": "QBO Token",
  "externalAuthentication": "initial"
}
```
