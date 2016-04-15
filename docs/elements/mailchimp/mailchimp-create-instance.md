---
heading: MailChimp
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 197
parent: Back to Element Guides
order: 15
---

## Create Instance

MailChimp is a Marketing Platform. When you provision an instance, your app will have access to the different functionality offered by the MailChimp platform.

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
'https://api.cloud-elements.com/elements/api-v2/elements/mailchimp3/oauth/url?apiKey=INSERT_CLIENT_ID&apiSecret=INSERT_CLIENT_SECRET&callbackUrl=https://www.mycoolapp.com/auth'
```

Response:

```json
{
  "element": "mailchimp3",
  "oauthUrl": "https://login.mailchimp.com/oauth2/authorize?response_type=code&client_id=INSERT_CLIENT_ID&redirect_uri=http%3A%2F%2Fwww.mycoolapp.com%2Fauth&state=mailchimp"
}
```

Handle Callback from the Endpoint:
Upon successful authentication and authorization by the user, the endpoint will redirect to the callback URL you provided when you setup your application with the endpoint, in our example, https://www.mycoolapp.com/auth. The endpoint will also provide two query string parameters: “state” and “code”. The value for the “state” parameter will be the name of the endpoint, e.g., “mailchimp3” in our example, and the value for the “code” parameter is the code required by Cloud Elements to retrieve the OAuth access and refresh tokens from the endpoint. If the user denies authentication and/or authorization, there will be a query string parameter called “error” instead of the “code” parameter. In this case, your application can handle the error gracefully.

### Step 2. Create an Instance

To provision your MailChimp Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements MailChimp is “mailchimp3”.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "mailchimp3"
  },
  "providerData": {
    "code": "<INSERT_CODE_ON_THE_RETURN_URL>"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_MAILCHIMP_API_KEY>",
    "oauth.api.secret": "<INSERT_MAILCHIMP_API_SECRET>",
    "oauth.callback.url": "<INSERT_APP_CALLBACK_URL>"
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
  "name": "Test",
  "token": "TVZSABK59NX8yK/uwvCKmoDxdGMSK2IZKE=",
  "element": {
    "id": 1234,
    "name": "MailChimp",
    "key": "mailchimp3",
    "description": "Send better email. MailChimp is a leading online email marketing solution. More than 6 million people use MailChimp to design and send email marketing campaigns.",
    "image": "elements/provider_mailchimp.png",
    "active": true,
    "deleted": false,
    "typeOauth": true,
    "trialAccount": false,
    "configDescription": "MailChimp configuration",
    "elementProvisionType": "OAUTH_TEMPLATE"
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "cachingEnabled": false,
  "defaultTransformation": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.
