---
heading: Adobe Sign
seo: Create Instance | Adobe Sign | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 426
parent: Back to Element Guides
order: 20
---

## Create Instance

Adobe Sign is an Signature Platform. When you provision an instance, your app will have access to the different functionality offered by the Adobe Sign platform.

### Step 1. Get Elements OAuth Information

* HTTP Header: None
* HTTP Verb: GET
* Request URL: /elements/{keyOrId}/oauth/url
* Request Body: None
* Query Parameters:

* __apiKey–__ the key obtained from registering your app with the provider
* __apiSecret__ – the secret obtained from registering your app with the provider
* __callbackUrl__ – the URL that you supplied to the provider when registering your app, state – any custom value that you want passed to the callback handler listening at the provided callback URL.

Description: The result of this API invocation is an OAuth redirect URL from the endpoint. Your application should now redirect to this URL, which in turn will present the OAuth authentication and authorization page to the user. When the provided callback URL is executed, a code value will be returned, which is required for the Create Instance API.

Example cURL Command:

```bash
curl -X GET
-H 'Content-Type: application/json'
'http://api.cloud-elements/elements/api-v2/elements/adobe-esign/oauth/url?apiKey=insert_adobe-esign_app_id&apiSecret=insert_adobe-esign_app_secret&callbackUrl=www.mycoolapp.com/auth&scope=public_profile'
```

Response:

```javascript
{
  "oauthUrl": "https://secure.na1.echosign.com/public/oauth?scope=agreement_read%3Aaccount+agreement_send%3Aaccount+agreement_write%3Aaccount+library_read%3Aaccount+library_write%3Aaccount+user_login%3Aaccount+user_read%3Aaccount+user_write%3Aaccount+widget_read%3Aaccount+widget_write%3Aaccount+workflow_read%3Aaccount+workflow_write%3Aaccount&response_type=code&redirect_uri=https%3A%2F%2Fwww.mycoolapp.com%2Fauth&state=adobe_esign&client_id=adobe-esign_client_id",
  "element": "adobe-esign"
}

```

Handle Callback from the Endpoint:
Upon successful authentication and authorization by the user, the endpoint will redirect to the callback URL you provided when you setup your application with the endpoint, in our example, https://www.mycoolapp.com/auth. The endpoint will also provide two query string parameters: “state” and “code”. The value for the “state” parameter will be the name of the endpoint, e.g., "adobe-esign" in our example, and the value for the “code” parameter is the code required by Cloud Elements to retrieve the OAuth access and refresh tokens from the endpoint. If the user denies authentication and/or authorization, there will be a query string parameter called “error” instead of the “code” parameter. In this case, your application can handle the error gracefully.

### Step 2. Create an Instance

To provision your Adobe Sign Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Adobe Sign is "adobe-esign".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "adobe-esign"
  },
  "providerData": {
    "code": "Code on Return the URL"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_ADOBE_ESIGN_CLIENT_ID>",
    "oauth.api.secret": "<INSERT_ADOBE_ESIGN_CLIENT_SECRET>",
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "oauth.scope": "agreement_read:account agreement_send:account agreement_write:account library_read:account library_write:account user_login:account user_read:account user_write:account widget_read:account widget_write:account workflow_read:account workflow_write:account"
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
  "token": "5MOr3Sl/E4kww6mTjmjBYV/hAUAzz1g=",
  "element": {
    "id": 22,
    "name": "Adobe Sign",
    "key": "adobe-esign",
    "description": "The future of business is digital. Adobe Esign helps businesses of all sizes easily and securely sign, send, and manage documents in the cloud, with unmatched availability and legal enforceability.",
    "image": "elements/provider_adobeesign.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "configuration": [],
    "provisionInteractions": [],
    "valid": true,
    "disabled": false,
    "maxCacheSize": 0,
    "cacheTimeToLive": 0,
    "configuration": {
      "oauth.api.secret": "<OAUTH_API_SECRET>",
      "oauth.token.url": "https://secure.na1.echosign.com/oauth/refresh",
      "pagination.max": "100",
      "event.vendor.type": "webhook",
      "oauth.scope": "agreement_read:account agreement_send:account agreement_write:account library_read:account library_write:account user_login:account user_read:account user_write:account widget_read:account widget_write:account workflow_read:account workflow_write:account",
      "oauth.user.token": "<OAUTH_USER_TOKEN>",
      "oauth.authorization.url": "https://secure.na1.echosign.com/public/oauth",
      "pagination.type": null,
      "event.notification.callback.url": null,
      "oauth.callback.url": "http://www.your_callback_url.com",
      "oauth.user.refresh_token": "<OAUTH_REFRESH_TOKEN>",
      "oauth.user.refresh_interval": "3599",
      "oauth.api.key": "<ADOBE_ESIGN_CLIENT_ID>",
      "document.tagging": "false",
      "oauth.user.refresh_time": "1434646531161",
      "event.notification.enabled": "false"
    },
    "eventsEnabled": false,
    "cachingEnabled": false,
    "traceLoggingEnabled": false
  }
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

{% include common-instance-config.md %}
