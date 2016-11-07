---
heading: QuickBooks Online
seo: Events | QuickBooks Online | Cloud Elements API Docs
title: Events
description: Enable QuickBooks Online events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 39
parent: Back to Element Guides
order: 30
---

## Events

{% include polling_and_webhooks_defined.md %}

In order to enable polling, add these extra configurations to your instance JSON:

```JSON
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
"event.poller.urls": "bill-payments|bills|classes|credit-memos|credit-terms|currencies|customers|employees|invoices|journal-entries|ledger-accounts|payment-methods|payments|products|purchase-orders|refund-receipts|sales-receipts|tax-codes|tax-rates|time-activities|vendor-credits|vendors"
```

instance JSON with polling events enabled:

### Step 1. Get Elements OAuth Token

HTTP Header: None
HTTP Verb: GET
Request URL: /elements/{keyOrId}/oauth/token
Request Body: None
Query Parameters:

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

HTTP Header: None
HTTP Verb: GET
Request URL: /elements/{keyOrId}/oauth/url
Request Body: None
Query Parameters:

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

`http://demonstrab.ly/?state=quickbooks&oauth_token=qyprdlGChtClXwBpAw1vm1fJSC3mQqS3dGX0PPphEzNEUI9s&oauth_verifier=br6qctk&realmId=12345678910&dataSource=QBO`

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
    "oauth.callback.url": "<SAME CALLBACK URL USED IN STEP 2>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.urls": "bill-payments|bills|classes|credit-memos|credit-terms|currencies|customers|employees|invoices|journal-entries|ledger-accounts|payment-methods|payments|products|purchase-orders|refund-receipts|sales-receipts|tax-codes|tax-rates|time-activities|vendor-credits|vendors"
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
