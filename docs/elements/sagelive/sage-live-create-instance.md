---
heading: Sage Live
seo: Create Instance | Sage Live | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 676
parent: Back to Element Guides
order: 20
---

## Create Instance

When you provision an instance, your app will have access to the different functionality offered by the Sage Live platform.

### Step 1. Get Elements OAuth Information

* HTTP Header: None
* HTTP Verb: GET
* Request URL: /elements/{keyOrId}/oauth/url
* Request Body: None
* Query Parameters:

* __apiKey–__ the key obtained from registering your app with the provider
* __apiSecret__ – the secret obtained from registering your app with the provider
* __callbackUrl__ – the URL that you supplied to the provider when registering your app
* __state__ – any custom value that you want passed to the callback handler listening at the provided callback URL.
* __scope__ – `full refresh_token`

Description: The result of this API invocation is an OAuth redirect URL from the endpoint. Your application should now redirect to this URL, which in turn will present the OAuth authentication and authorization page to the user. When the provided callback URL is executed, a code value will be returned, which is required for the Create Instance API.

Example cURL Command:

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/elements/sagelive/oauth/url?apiKey=fake_sagelive_api_key&apiSecret=fake_sagelive_api_secret&scope=full%20refresh_token&callbackUrl=https://www.mycoolapp.com/auth&state=sagelive'
```

Response:

```json
{
"element": "sagelive",
"oauthUrl": "https://login.salesforce.com/services/oauth2/authorize?response_type=code&client_id=fake_sagelive_api_key&client_secret=xyz789&scope=full%20refresh_token&redirect_uri=https://www.mycoolapp.com/auth&state=sagelive"
}
```

Handle Callback from the Endpoint:
Upon successful authentication and authorization by the user, the endpoint will redirect to the callback URL you provided when you setup your application with the endpoint, in our example, https://www.mycoolapp.com/auth. The endpoint will also provide two query string parameters: “state” and “code”. The value for the “state” parameter will be the name of the endpoint, e.g., "sagelive" in our example, and the value for the “code” parameter is the code required by Cloud Elements to retrieve the OAuth access and refresh tokens from the endpoint. If the user denies authentication and/or authorization, there will be a query string parameter called “error” instead of the “code” parameter. In this case, your application can handle the error gracefully.

### Step 2. Create an Instance

To provision your Sage Live Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Sage Live is `sagelive`.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "sagelive"
  },
  "providerData": {
    "code": "<Code_On_The_Return_URL>"
  },
  "configuration": {
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "oauth.api.key": "<Insert_Client_ID>",
    "oauth.api.secret": "<Insert_Client_Secret>"
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
  "id": 123,
  "name": "test",
  "token": "3sU/S/kZD36BaABPS7EAuSGHF+1wsthT+mvoukiE",
  "element": {
    "id": 676,
    "name": "Sage Live Beta",
    "hookName": "SageLive",
    "key": "sagelive",
    "description": "Add a Sage Live Instance to connect your existing Sage account to the Sage Hub, allowing you to manage customers, journals, ledger accounts, etc. across multiple Sage Elements. You will need your Sage Live account information to add an instance.",
    "image": "http://images.go.sage.com/EloquaImages/clients/SageGlobalInstance/%7b3e60c666-8177-4c78-b101-1ca2387cd431%7d_Qualification_Email_1_RealTimeAccounting_logo.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "configDescription": "If you do not have a Salesforce.com account, you can create one at <a href=\"http://www.salesforce.com\" target=\"_blank\">Salesforce.com Signup</a>",
    "signupURL": "https://developer.salesforce.com/en/signup",
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
    "sfdc.user.id": "",
    "sfdc.password": "PASSWORD",
    "sfdc.api.secret": "",
    "event.vendor.type": "polling",
    "bulk.query.date_mask": "yyyy-MM-dd'T'HH:mm:ssXXX",
    "bulk.attribute.created_time": "CreatedDate",
    "crm.session.refresh.time": "",
    "pagination.type": "offset",
    "bulk.relations": null,
    "sfdc.revoke.url": "https://login.salesforce.com/services/oauth2/revoke",
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "oauth.user.refresh_token": "5Aep861rz1k6fS7SfdwznVUO_Kni7yFUpJRIAnC8rWS9ykbt_dyF",
    "event.poller.urls": "",
    "sfdc.session.signature": "",
    "oauth.user.refresh_interval": "3600",
    "sfdc.user.id.url": "https://login.salesforce.com/id/00D24000000tVQFEA2/005240000019YWwAAM",
    "oauth.api.key": "API_KEY",
    "event.notification.enabled": "false",
    "oauth.api.secret": "API_SECRET",
    "sfdc.session.api.version.uri": "",
    "bulk.query.field_name": "CreatedDate",
    "sfdc.token.url": "https://login.salesforce.com/services/oauth2/token",
    "pagination.max": "100",
    "sfdc.session.instance.url": "",
    "sfdc.username": "",
    "oauth.scope": "full refresh_token",
    "event.helper.key": "",
    "sfdc.api.key": "",
    "oauth.user.token": "WGf2x7vrDs0J.U3VBViFEZ1VqAJZio2H_0.3j5H_hKx1CNX8he",
    "sfdc.user.display.name": "",
    "bulk.query.operator": ">",
    "bulk.query.download_format": "JSON",
    "event.poller.refresh_interval": "15",
    "event.notification.callback.url": null,
    "crm.session.refresh.interval": "",
    "sfdc.security.token": "",
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
