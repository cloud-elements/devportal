---
heading: Sage One US
seo: Create Instance | Sage One US | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 653
parent: Back to Element Guides
order: 20
---

## Create Instance

When you provision an instance, your app will have access to the different functionality offered by the Sage One US platform.

### Step 1. Get Elements OAuth Information

* HTTP Header: None
* HTTP Verb: GET
* Request URL: /elements/{keyOrId}/oauth/url
* Request Body: None
* Query Parameters:

* __apiKey–__ the key obtained from registering your app with the provider
* __apiSecret__ – the secret obtained from registering your app with the provider
* __Signature__ – the signature obtained from registering your app with the provider
* __callbackUrl__ – the URL that you supplied to the provider when registering your app, state – any custom value that you want passed to the callback handler listening at the provided callback URL.

Description: The result of this API invocation is an OAuth redirect URL from the endpoint. Your application should now redirect to this URL, which in turn will present the OAuth authentication and authorization page to the user. When the provided callback URL is executed, a code value will be returned, which is required for the Create Instance API.

Example cURL Command:

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/elements/sageoneus/oauth/url?apiKey=fake_SageOneUS_api_key&apiSecret=fake_SageOneUS_api_secret&callbackUrl=https://www.mycoolapp.com/auth&state=sageoneus'
```

Response:

```javascript
{
  "oauthUrl": "https://www.sageone.com/oauth2/auth?response_type=code&client_id=insert_sageoneus_client_id0&redirect_uri=https://www.mycoolapp.com/auth&state=sageoneus",
  "element": "sageoneus"
}
```

Handle Callback from the Endpoint:
Upon successful authentication and authorization by the user, the endpoint will redirect to the callback URL you provided when you setup your application with the endpoint, in our example, https://www.mycoolapp.com/auth. The endpoint will also provide two query string parameters: “state” and “code”. The value for the “state” parameter will be the name of the endpoint, e.g., `sageoneus` in our example, and the value for the “code” parameter is the code required by Cloud Elements to retrieve the OAuth access and refresh tokens from the endpoint. If the user denies authentication and/or authorization, there will be a query string parameter called “error” instead of the “code” parameter. In this case, your application can handle the error gracefully.

### Step 2. Create an Instance

To provision your Sage One US Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Sage One US is `sageoneus`.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```JSON
{
  "element": {
    "key": "sageoneus"
  },
  "providerData": {
    "code": "Code on Return the URL"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_SAGEONE_US_CLIENT_ID>",
    "oauth.api.secret": "<INSERT_SAGEONE_US_CLIENT_SECRET>",
    "signature": "<INSERT_SAGEONE_US_SIGNATURE>",
    "oauth.callback.url": "https://www.mycoolapp.com/auth"
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
  "name": "test",
  "token": "3sU/S/kZD36BaABPS7EAuSGHF+1wsthT+mvoukiE",
  "element": {
    "id": 676,
    "name": "Sage One US Beta",
    "key": "sageoneus",
    "description": "Add a Sage One US Instance to connect your existing Sage account to the Sage Hub, allowing you to manage customers, journals, ledger accounts, etc. across multiple Sage Elements. You will need your Sage One US account information to add an instance.",
    "image": "http://images.go.sage.com/EloquaImages/clients/SageGlobalInstance/%7b3e60c666-8177-4c78-b101-1ca2387cd431%7d_Qualification_Email_1_RealTimeAccounting_logo.png",
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
      "type": "oauth2"
    },
    "hub": "sage",
    "protocolType": "http",
    "parameters": []
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "bulk.add_metadata": null,
    "base.url": "https://eu5.salesforce.com",
    "event.notification.subscription.id": null,
    "event.vendor.type": "polling",
    "bulk.query.date_mask": "yyyy-MM-dd'T'HH:mm:ssXXX",
    "bulk.attribute.created_time": "CreatedDate",
    "crm.session.refresh.time": "",
    "pagination.type": "offset",
    "bulk.relations": null,
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "oauth.user.refresh_token": "5Aep861rz1k6fS7SfdwznVUO_Kni7yFUpJRIAnC8rWS9ykbt_dyF",
    "event.poller.urls": "",
    "oauth.user.refresh_interval": "3600",
    "oauth.api.key": "API_KEY",
    "event.notification.enabled": "false",
    "oauth.api.secret": "API_SECRET",
    "bulk.query.field_name": "CreatedDate",
    "pagination.max": "100",
    "oauth.scope": "full refresh_token",
    "event.helper.key": "",
    "oauth.user.token": "WGf2x7vrDs0J.U3VBViFEZ1VqAJZio2H_0.3j5H_hKx1CNX8he",
    "bulk.query.operator": ">",
    "bulk.query.download_format": "JSON",
    "event.poller.refresh_interval": "15",
    "event.notification.callback.url": null,
    "crm.session.refresh.interval": "",
    "oauth.user.refresh_time": "1467737443234",
    "session.id": "",
    "oauth.basic.header": "true"
  },
  "eventsEnabled": false,
  "traceLoggingEnabled": false,
  "cachingEnabled": false,
  "externalAuthentication": "none"
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

{% include common-instance-config.md %}
