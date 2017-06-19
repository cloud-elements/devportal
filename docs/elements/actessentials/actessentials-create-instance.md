---
heading: Act! Essentials
seo: Create Instance | Act! Essentials | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 1251
parent: Back to Element Guides
order: 15
---

## Create Instance

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
'http://api.cloud-elements/elements/api-v2/elements/actessentialsoauth/oauth/url?apiKey=insert_actessentials_api_key&apiSecret=insert_actessentials_api_secret&callbackUrl=https%3A%2F%2Fmycoolapp.com%2Foauth'
```

Response:

```javascript
{
  "oauthUrl": "https://mycloud.act.com/act/oauth/v2/authorize?response_type=code&redirect_uri=https%3A%2F%2Fmycoolapp.com%2Foauth&state=actessentialsoauth&client_id=insert_actessentials_api_key",
  "element": "actessentialsoauth"
}

```

Handle Callback from the Endpoint:
Upon successful authentication and authorization by the user, the endpoint will redirect to the callback URL you provided when you setup your application with the endpoint, in our example, https://www.mycoolapp.com/auth. The endpoint will also provide two query string parameters: “state” and “code”. The value for the “state” parameter will be the name of the endpoint, e.g., "actessentialsoauth" in our example, and the value for the “code” parameter is the code required by Cloud Elements to retrieve the OAuth access and refresh tokens from the endpoint. If the user denies authentication and/or authorization, there will be a query string parameter called “error” instead of the “code” parameter. In this case, your application can handle the error gracefully.

### Step 2. Create an Instance

To provision your Act! Essentials Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Act! Essentials is "actessentialsoauth".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element" : {
      "key" : "actessentialsoauth"
    },
    "configuration" : {
      "oauth.api.key": "<INSERT_ACT_ESSENTIALS_API_KEY>",
      "oauth.api.secret": "<INSERT_ACT_ESSENTIALS_API_SECRET>",
      "oauth.callback.url": "<INSERT_OAUTH_CALLBACK_URL>"
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
    "id": 1160,
    "name": "Act! Essentials",
    "key": "actessentials",
    "description": "Add an Act! Essentials Instance to connect your existing Act! Essentials account to the CRM Hub, allowing you to manage contacts and activities across multiple Elements. You will need your Act! Essentials account and Act! Essentials API key (available in your Profile > Apps & Integrations section) to add an instance.",
    "image": "https://pbs.twimg.com/profile_images/497478802432217088/-NAAUSvt.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "resources": [],
    "transformationsEnabled": true,
    "bulkDownloadEnabled": true,
    "bulkUploadEnabled": true,
    "cloneable": true,
    "authentication": {
      "type": "oauth"
    },
    "hub": "crm",
    "protocolType": "http",
    "parameters": []
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "base.url": "https://mycloud.act.com/act/api/",
    "bulk.add_metadata": null,
    "bulk.query.field_name": "createdAt",
    "pagination.max": "150",
    "event.vendor.type": "polling",
    "bulk.query.operator": ">=",
    "bulk.query.date_mask": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
    "bulk.query.download_format": "JSON",
    "password": "PASSWORD",
    "pagination.type": "offset",
    "bulk.relations": null,
    "event.poller.refresh_interval": "15",
    "event.notification.callback.url": null,
    "pagination.page.startindex": "1",
    "username": "USERNAME",
    "event.notification.enabled": "false"
  },
  "eventsEnabled": false,
  "traceLoggingEnabled": false,
  "cachingEnabled": false,
  "externalAuthentication": "none",
  "user": {
    "id": 9723
  }
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

{% include common-instance-config.md %}
