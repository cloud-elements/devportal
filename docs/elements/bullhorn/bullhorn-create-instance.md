---
heading: Bullhorn CRM
seo: Create Instance | Bullhorn CRM | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 426
parent: Back to Element Guides
order: 20
---

## Create Instance

Bullhorn CRM is an Signature Platform. When you provision an instance, your app will have access to the different functionality offered by the Bullhorn CRM platform.

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
'http://api.cloud-elements/elements/api-v2/elements/bullhorn/oauth/url?apiKey=insert_bullhorn_client_id&apiSecret=insert_bullhorn_client_secret&callbackUrl=www.mycoolapp.com/auth'
```

Response:

```javascript
{
  "oauthUrl": "https://auth.bullhornstaffing.com/oauth/authorize?response_type=code&redirect_uri=https%3A%2F%2mycoolapp.com%2Fauth&state=bullhorn&client_id=bullhorn_client_id",
  "element": "bullhorn"
}
```

Handle Callback from the Endpoint:
Upon successful authentication and authorization by the user, the endpoint will redirect to the callback URL you provided when you setup your application with the endpoint, in our example, https://www.mycoolapp.com/auth. The endpoint will also provide two query string parameters: “state” and “code”. The value for the “state” parameter will be the name of the endpoint, e.g., "bullhorn" in our example, and the value for the “code” parameter is the code required by Cloud Elements to retrieve the OAuth access and refresh tokens from the endpoint. If the user denies authentication and/or authorization, there will be a query string parameter called “error” instead of the “code” parameter. In this case, your application can handle the error gracefully.

### Step 2. Create an Instance

To provision your Bullhorn CRM Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Bullhorn CRM is "bullhorn".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "bullhorn"
  },
  "providerData": {
    "code": "Code on Return the URL"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_BULLHORN_CLIENT_ID>",
    "oauth.api.secret": "<INSERT_BULLHORN_CLIENT_SECRET>",
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
  "name": "Test",
  "token": "5MOr3Sl/E4kww6mTjmjBYV/hAUAzz1g=",
  "element": {
    "id": 2686,
    "name": "Bullhorn",
    "key": "bullhorn",
    "description": "Add a Bullhorn Instance to connect your existing Bullhorn account to the CRM Hub, allowing you to manage contacts, leads, accounts, opportunities etc. across multiple CRM Elements. You will need your Bullhorn account information to add an instance.",
    "image": "http://1agb93314bcf1knhv22id9u9.wpengine.netdna-cdn.com/wp-content/themes/bh14/_media/logo_new_color.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "resources": [],
    "private": false
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "base.url": "{baseUrl}",
    "bulk.add_metadata": null,
    "event.vendor.type": "polling",
    "bulk.query.date_mask": "yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
    "bulk.attribute.created_time": "dateAdded",
    "pagination.type": "page",
    "bulk.relations": null,
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "oauth.user.refresh_token": "OAUTH.REFRESH.TOKEN",
    "oauth.user.refresh_interval": "600",
    "oauth.api.key": "CLIENT_ID",
    "event.notification.enabled": "false",
    "oauth.api.secret": "CLIENT_SECRET",
    "oauth.token.url": "https://auth.bullhornstaffing.com/oauth/token",
    "bulk.query.field_name": "dateAdded",
    "pagination.max": "100",
    "sessionId": "SESSIONID",
    "oauth.token.refresh_url": "https://auth.bullhornstaffing.com/oauth/token",
    "version": "2.0",
    "oauth.user.token": "OAUTH.USER.TOKEN",
    "bulk.query.operator": ">=",
    "oauth.authorization.url": "https://auth.bullhornstaffing.com/oauth/authorize",
    "baseUrl": "https://rest1.bullhornstaffing.com/rest-services/46290/",
    "bulk.query.download_format": "JSON",
    "event.poller.refresh_interval": "15",
    "event.notification.callback.url": null,
    "bulk.query.response.date_mask": "milliseconds",
    "oauth.user.refresh_time": "1483634186994",
    "event.poller.configuration": "{\"candidates\":{\"url\":\"/hubs/crm/candidates?where=dateLastModified>'${gmtDate:yyyy-MM-dd'T'HH:mm:ss}'\",\"idField\":\"id\",\"datesConfiguration\":{\"updatedDateField\":\"dateLastModified\",\"updatedDateFormat\":\"milliseconds\",\"createdDateField\":\"dateAdded\",\"createdDateFormat\":\"milliseconds\"}}}",
    "oauth.basic.header": "true",
    "pagination.page.startindex": "0"
  },
  "eventsEnabled": false,
  "traceLoggingEnabled": false,
  "cachingEnabled": false,
  "externalAuthentication": "none"
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

{% include common-instance-config.md %}
