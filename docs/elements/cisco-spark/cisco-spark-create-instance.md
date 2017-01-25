---
heading: Cisco Spark
seo: Create Instance | Cisco Spark | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 1358
parent: Back to Element Guides
order: 15
---

## Create Instance

Cloud Elements recommends visiting the Cisco Spark API Documentation and reviewing the information posted regarding the [OAuth Scope and Permissions](https://developer.ciscospark.com/authentication.html).

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
'https://api.cloud-elements.com/elements/api-v2/elements/ciscospark/oauth/url?apiKey=insert_client_id&apiSecret=insert_client_secret&callbackUrl=https%3A%2F%2Fmycoolapp.com%2Fauth'
```

Response:

```javascript
{
  "oauthUrl": "https://api.ciscospark.com/v1/authorize?scope=spark%3Arooms_read+spark%3Arooms_write+spark%3Apeople_read+spark%3Amessages_read+spark%3Amessages_write+spark%3Amemberships_read+spark%3Amemberships_write+spark%3Ateams_write+spark%3Ateams_read+spark%3Ateam_memberships_read+spark%3Ateam_memberships_write+spark-admin%3Aorganizations_read++spark-admin%3Alicenses_read+spark-admin%3Aroles_read+spark-admin%3Apeople_write+spark-admin%3Apeople_read&response_type=code&redirect_uri=https%3A%2F%2Fmycoolapp.com%2Fauth&state=ciscospark&client_id=client_id",
  "element": "ciscospark"
}
```

Handle Callback from the Endpoint:
Upon successful authentication and authorization by the user, the endpoint will redirect to the callback URL you provided when you setup your application with the endpoint, in our example, https://www.mycoolapp.com/auth. The endpoint will also provide two query string parameters: “state” and “code”. The value for the “state” parameter will be the name of the endpoint, e.g., `ciscospark` in our example, and the value for the “code” parameter is the code required by Cloud Elements to retrieve the OAuth access and refresh tokens from the endpoint. If the user denies authentication and/or authorization, there will be a query string parameter called “error” instead of the “code” parameter. In this case, your application can handle the error gracefully.

### Step 2. Create an Instance

To provision your Cisco Spark Element, use the /instances API.

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
This `instance.json` file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Cisco Spark is `ciscospark`.  This will need to be entered in the `key` field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "ciscospark"
  },
  "providerData": {
    "code": "<CODE_ON_THE_RETURN_URL>"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_CLIENT_ID>",
    "oauth.api.secret": "<INSERT_CLIENT_SECRET>",
    "oauth.callback.url": "<INSERT_CALLBACK_URL>"
  },
  "tags": [
    "<ADD_YOUR_TAG>"
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
  "token": "6mDba4fstzWLJSr3VWh+PQLTy/LuGsxyU+qT1jaPYEo=",
  "element": {
    "id": 8728,
    "name": "Cisco Spark",
    "hookName": "CiscoSpark",
    "key": "ciscospark",
    "description": "Add an Cisco Spark Instance to connect your existing Cisco Spark account to the Collaboration Hub, allowing you to manage channels, users, etc. across multiple Collaboration Elements. You will need your Cisco Spark account information to add an instance.",
    "image": "https://web.ciscospark.com/images/logo_spark_256px.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "resources": [    ],
    "transformationsEnabled": true,
    "bulkDownloadEnabled": false,
    "bulkUploadEnabled": false,
    "cloneable": true,
    "authentication": {
      "type": "oauth2"
    },
    "hub": "collaboration",
    "protocolType": "http",
    "parameters": [],
    "private": false
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "oauth.api.secret": "API.SECRET",
    "base.url": "https://api.ciscospark.com/v1",
    "event.notification.subscription.id": null,
    "oauth.token.url": "https://api.ciscospark.com/v1/access_token",
    "pagination.max": "100",
    "event.vendor.type": "webhooks",
    "oauth.scope": "spark:rooms_read spark:rooms_write spark:people_read spark:messages_read spark:messages_write spark:memberships_read spark:memberships_write spark:teams_write spark:teams_read spark:team_memberships_read spark:team_memberships_write spark-admin:organizations_read  spark-admin:licenses_read spark-admin:roles_read spark-admin:people_write spark-admin:people_read",
    "oauth.user.token": "USER.TOKEN",
    "oauth.authorization.url": "https://api.ciscospark.com/v1/authorize",
    "event.notification.instance.finder": "",
    "pagination.type": "cursor",
    "event.notification.callback.url": null,
    "oauth.callback.url": "https://mycoolapp.com/auth",
    "oauth.user.refresh_token": "REFRESH.TOKEN",
    "oauth.user.refresh_interval": "1209599",
    "oauth.api.key": "API.KEY",
    "oauth.user.refresh_time": "1485373769308",
    "ciscospark.hooks.id": "",
    "oauth.basic.header": "true",
    "event.notification.enabled": "false"
  },
  "eventsEnabled": false,
  "traceLoggingEnabled": false,
  "cachingEnabled": false,
  "externalAuthentication": "none"
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

{% include common-instance-config.md %}
