---
heading: Infusionsoft CRM
seo: Create Instance | Infusionsoft CRM | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 191
parent: Back to Element Guides
order: 20
---

## Create Instance

Infusionsoft is a Customer Success Platform. When you provision an instance, your app will have access to the different functionality offered by the Infusionsoft platform.

Optionally, you may provision an instance to specific features like Marketing and CRM.

### Step 1. Get Elements OAuth Information

* HTTP Header: None
* HTTP Verb: GET
* Request URL: /elements/{key}/oauth/url
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
'https://api.cloud-elements.com/elements/api-v2/elements/infusionsoftcrm/oauth/url?apiKey=fake_infusionsoft_client_id&apiSecret=fake_infusionsoft_client_secret&callbackUrl=http://fake.oauth.callback/url&state=infusionsoft'
```

Response:

```json
{
"element": "infusionsoftcrm",
"oauthUrl": "https://signin.infusionsoft.com/app/oauth/authorize?response_type=code&client_id=insert_infusionsoft_api_key&redirect_uri=https://mycoolapp.com/auth&scope=full&state=infusionsoft"
}
```

Handle Callback from the Endpoint:
Upon successful authentication and authorization by the user, the endpoint will redirect to the callback URL you provided when you setup your application with the endpoint, in our example, https://www.mycoolapp.com/auth. The endpoint will also provide two query string parameters: “state” and “code”. The value for the “state” parameter will be the name of the endpoint, e.g., “infusionsoftcrm” in our example, and the value for the “code” parameter is the code required by Cloud Elements to retrieve the OAuth access and refresh tokens from the endpoint. If the user denies authentication and/or authorization, there will be a query string parameter called “error” instead of the “code” parameter. In this case, your application can handle the error gracefully.

### Step 2. Create an Instance

To provision your Infusionsoft Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Infusionsoft is “infusionsoftcrm”.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "infusionsoftcrm"
  },
  "providerData": {
    "code": "Code on the Return URL"
  },
  "configuration": {
    "oauth.callback.url": "https://www.yourcallbackurl.com",
    "oauth.api.key": "<INSERT_INFUSIONSOFT_CLIENT_ID>",
    "oauth.api.secret": "<INSERT_INFUSIONSOFT_CLIENT_SECRET>",
    "document.tagging": false
  },
  "tags": [
    "<Add_Your_Tag>"
  ],
  "name": "<Insert_Instance_Name>"
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
  "token": "a5y4EtYt+ZYRpnIBD7gkQtthDebK8qKVU=",
  "element": {
    "id": 126,
    "name": "Infusionsoft Beta",
    "key": "infusionsoftcrm",
    "description": "Add an Infusionsoft Instance to connect your existing Infusionsoft account to the CRM Hub, allowing you to manage contacts, leads, accounts, opportunities etc. across multiple CRM Elements. You will need your Infusionsoft account information to add an instance.",
    "image": "http://www.sagepay.co.uk/files/styles/img_220x220/public/partner-logo/infusionsoft-220px.png?itok=yDDuLcdL",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "resources": [],
    "transformationsEnabled": true,
    "authentication": {
      "type": "oauth2"
    },
    "hub": "crm",
    "parameters": []
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "oauth.api.secret": "INFUSIONSOFT_API_SECRET",
    "base.url": "https://fm260.infusionsoft.com/api/xmlrpc",
    "oauth.token.url": "https://api.infusionsoft.com/token",
    "pagination.max": "100",
    "event.vendor.type": "webhook",
    "oauth.scope": "full",
    "oauth.user.token": "INFUSIONSOFT_USER_TOKEN",
    "oauth.authorization.url": "https://signin.infusionsoft.com/app/oauth/authorize",
    "event.notification.callback.url": null,
    "oauth.callback.url": "https://mycoolapp.com/auth",
    "oauth.user.refresh_token": "OAUTH_REFRESH_TOKEN",
    "oauth.user.refresh_interval": "28800",
    "oauth.api.key": "INFUSIONSOFT_API_KEY",
    "oauth.user.refresh_time": "1436369668710",
    "event.notification.enabled": "false"
  },
  "eventsEnabled": false,
  "cachingEnabled": false,
  "traceLoggingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.
