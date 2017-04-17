---
heading: HubSpot Marketing
seo: Create Instance | HubSpot Marketing | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 43
parent: Back to Element Guides
order: 15
---

## Create Instance

HubSpot Marketing is a Customer Success Platform. When you provision an instance, your app will have access to the different functionality offered by the HubSpot Marketing platform.

Cloud Elements supports instantiating HubSpot via __OAuth 2__, __OAuth 2 Legacy__, and __API Token Based__ authentication.

- [Updated OAuth 2](#oauth-2)
- [OAuth 2 Legacy](#oauth-2-legacy)
- [API Token Based Authentication](#hubspot-marketing-quick-provision)

## OAuth 2

{% include padding-all.html %}

__NOTE:__ In order to instantiate using the new HubSpot OAuth 2 spec, you must have paid access to the account.
Developer portals will not have access to any of these scopes, and cannot be authorized with an app. You will need to create a test portal to test authorization.

__More from HubSpot__

Scopes have to match what was set up in their OAuth application exactly
paid Marketing HubSpotters can use all:
`contacts content reports social automation timeline forms`

Scope is required.  For more information on HubSpot scope, please the the [developer documentation](http://developers.hubspot.com/docs/methods/oauth2/initiate-oauth-integration).

### Step 1. Get Elements OAuth Information

* HTTP Header: None
* HTTP Verb: GET
* Request URL: /elements/{keyOrId}/oauth/url
* Request Body: None
* Query Parameters:

* __apiKey–__ the __Client ID__
* __apiSecret__ – the __Client Secret__
* __scopes__ – Scopes have to match what was set up in their OAuth application exactly
paid Marketing HubSpotters can use all: `contacts content reports social automation timeline forms`
* __callbackUrl__ – the URL that you supplied to the provider when registering your app, state – any custom value that you want passed to the callback handler listening at the provided callback URL.

Description: The result of this API invocation is an OAuth redirect URL from the endpoint. Your application should now redirect to this URL, which in turn will present the OAuth authentication and authorization page to the user. When the provided callback URL is executed, a code value will be returned, which is required for the Create Instance API.

Here's an example with an empty scope:

Example cURL Command:

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/elements/hubspot/oauth/url?apiKey=123456789d-1234-12e4-bda9-12345b8bf20&apiSecret=123456789d-1234-12e4-bda9-12345b8bf20&scope=&callbackUrl=https%3A%2F%2Fwww.mycoolapp.com%2Fauth'
```

Here's an example with all objects granted in scope:

Example cURL Command:

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/elements/hubspot/oauth/url?apiKey=123456789d-1234-12e4-bda9-12345b8bf20&apiSecret=123456789d-1234-12e4-bda9-12345b8bf20&scope=contacts%20content%20reports%20social%20automation%20timeline%20forms&callbackUrl=https%3A%2F%2Fwww.mycoolapp.com%2Fauth'
```

Response:

```json
{
  "element": "hubspot",
  "oauthUrl": "https://app.hubspot.com/oauth/authorize?client_id=insert_hubspot_client_id&redirect_uri=https%3A%2F%2Fwww.mycoolapp.com%2Fauth&state=hubspot&scope=contacts%20content%20reports%20social%20automation%20timeline%20forms"
}
```

Handle Callback from the Endpoint:
Upon successful authentication and authorization by the user, the endpoint will redirect to the callback URL you provided when you setup your application with the endpoint, in our example, https://www.mycoolapp.com/auth. The endpoint will also provide two query string parameters: “state” and “code”. The value for the “state” parameter will be the name of the endpoint, e.g., `hubspot` in our example, and the value for the `code` parameter is the code required by Cloud Elements to retrieve the OAuth access and refresh tokens from the endpoint. If the user denies authentication and/or authorization, there will be a query string parameter called `error` instead of the `code` parameter. In this case, your application can handle the error gracefully.

### Step 2. Create an Instance

To provision your HubSpot Marketing Element, use the /instances API.

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
This `instance.json` file must be included with your instance request.  Please fill your information to provision.  The `key` into Cloud Elements HubSpot Marketing is `hubspot`.  This will need to be entered in the `key` field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "hubspot"
  },
  "providerData": {
  	"code": "<CODE_ON_THE_RETURN_URL>"
  },
  "configuration": {
    "oauth.api.key": "<INSERT HUBSPOT_OAUTH_CLIENT_ID>",
    "oauth.api.secret": "<INSERT HUBSPOT_OAUTH_CLIENT_SECRET>",
    "oauth.callback.url": "https://www.mycoolapp.com/auth"
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
  "id": 12345,
  "name": "Test",
  "token": "dsPr6AheKIS8pt7rp8E81bSRINFgeEkx9Ftr+7t",
  "element": {
    "id": 43,
    "name": "Hubspot Marketing",
    "hookName": "HubSpot",
    "key": "hubspot",
    "description": "Add a HubSpot Instance to connect your existing HubSpot account to the Marketing Hub, allowing you to manage accounts, campaigns, contacts, leads etc. across multiple Marketing Elements. You will need your HubSpot account information to add an instance.",
    "image": "elements/provider_hubspot.png",
    "active": true,
    "deleted": false,
    "typeOauth": true,
    "trialAccount": false,
    "configDescription": "If you do not have a HubSpot account, you can create one at <a href=\"http://www.hubspot.com\" target=\"_blank\">HubSpot Signup</a>",
    "transformationsEnabled": true,
    "bulkDownloadEnabled": false,
    "bulkUploadEnabled": false,
    "cloneable": false,
    "authentication": {
      "type": "oauth2"
    },
    "hub": "marketing",
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
    "oauth.api.secret": "********",
    "event.notification.subscription.id": null,
    "create.bulk.properties": "false",
    "authentication.type": "oauth2",
    "event.vendor.type": "polling",
    "oauth.scope": "contacts",
    "oauth.user.token": "CLrzzsWRKxICAQEYjNsaIPyJLCjmrQIyGQBC-V1vGbNI",
    "filter.response.nulls": "true",
    "event.poller.refresh_interval": "15",
    "event.notification.callback.url": null,
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "event.notification.signature.key": null,
    "oauth.user.refresh_token": "9b5eced4-f557-ba1c-1a3e14",
    "hubspot.authorization.apikey": null,
    "event.poller.urls": "contacts\naccounts",
    "hubspot.webhook.workflow.id": null,
    "oauth.user.refresh_interval": "21600",
    "oauth.api.key": "API_KEY",
    "oauth.user.refresh_time": "1482156872",
    "event.notification.enabled": "false"
  },
  "eventsEnabled": false,
  "traceLoggingEnabled": false,
  "cachingEnabled": false,
  "externalAuthentication": "none"
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.


## OAuth 2 Legacy

{% include padding-all.html %}

### Step 1. Get Elements OAuth Information

* HTTP Header: None
* HTTP Verb: GET
* Request URL: /elements/{keyOrId}/oauth/url
* Request Body: None
* Query Parameters:

* __apiKey–__ the __Client ID__
* __apiSecret__ – the __Portal ID__
* __scopes__ – scopes you defined in HubSpot Marketing application setup. To use the Cloud Elements API, you must at least provide the following scopes: “contacts-rw+offline”
* __callbackUrl__ – the URL that you supplied to the provider when registering your app, state – any custom value that you want passed to the callback handler listening at the provided callback URL.

Description: The result of this API invocation is an OAuth redirect URL from the endpoint. Your application should now redirect to this URL, which in turn will present the OAuth authentication and authorization page to the user. When the provided callback URL is executed, a code value will be returned, which is required for the Create Instance API.

Input Query Parameters:

* OAuth client (apiKey): 123456789d-1234-12e4-bda9-12345b8bf20
* Portal ID (apiSecret): 123456
* The scope is notated as “scope=contacts-rw%20offline”. The API call will not work without the scope parameters.
* Callback URL: http://demonstrab.ly
* A sample request illustrating the API is shown below.

Example cURL Command:

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/elements/hubspot/oauth/url?apiKey=123456789d-1234-12e4-bda9-12345b8bf20&apiSecret=123456&scope=contacts-rw%20offline&callbackUrl=http://demonstrab.ly'
```

Response:

```json
{
  "element": "hubspot",
  "oauthUrl": "https://app.hubspot.com/auth/authenticate?client_id=123456789d-1234-12e4-bda9-12345b8bf20&portalId=123456&redirect_uri=http%3A%2F%2Fdemonstrab.ly&scope=contacts-rw%20offline"
}
```

Handle Callback from the Endpoint:
The URL returned in the GET /elements/{keyOrId}/oauth/url call is where you need to send your user. When that URL is executed, an authorization screen will render.
Once the user has successful authorized the app, HubSpot Marketing will provide three query string parameters: “access token”, “refresh token”, and “time expiration”. The value for the “access token”, “refresh token”, and “time expiration” parameters are required by Cloud Elements to create a HubSpot Marketing Element Instance.

### Step 2. Create an Instance

To provision your HubSpot Marketing Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements HubSpot Marketing is “hubspot”.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "hubspot"
  },
  "providerData": {
    "apikey": "<INSERT HUBSPOT_OAUTH_CLIENT_ID>",
    "access_token": "<ACCESS_TOKEN RETURNED IN OAUTH EXCHANGE>",
    "refresh_token": "<REFRESH_TOKEN RETURNED IN OAUTH EXCHANGE>",
    "expires_in": "<TIME FRAME IN WHICH REFRESH TOKEN EXPIRES (seconds)>"
  },
  "configuration": {
    "oauth.api.key": "<INSERT HUBSPOT_OAUTH_CLIENT_ID>",
    "oauth.api.secret": "<INSERT HUBSPOT_OAUTH_PORTAL_ID>",
    "oauth.callback.url": "www.samplecallbackurl.com",
    "oauth.scope": "contacts-rw+offline"
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
  "id": 12345,
  "name": "Test",
  "token": "dsPr6AheKIS8pt7rp8E81bSRINFgeEkx9Ftr+7t",
  "element": {
    "id": 43,
    "name": "HubSpot Marketing",
    "key": "hubspot",
    "description": "HubSpot Marketing is an inbound marketing software platform that helps companies attract visitors, convert leads, and close customers.",
    "image": "elements/provider_hubspot.png",
    "active": true,
    "deleted": false,
    "typeOauth": true,
    "trialAccount": false,
    "existingAccountDescription": "Give your application access to your existing
 HubSpot Marketing accountEnter your credentials and details for your HubSpot Marketing Account",
    "configDescription": "If you do not have a HubSpot Marketing account, you can create one at HubSpot Marketing Signup"
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

## HubSpot Marketing Quick Provision

{% include padding-all.html %}

### Token Based Authentication

```json
{
  "element": {
    "key": "hubspot"
  },
   "configuration": {
       "hubspot.authorization.apikey": "<INSERT_HUBSPOT_CRM_OAUTH_CLIENT_ID>",
       "authentication.type": "apiKey",
       "create.bulk.properties": "<INSERT_TRUE_TO_CREATE_BULK_PROPERTIES_OTHERWISE_FALSE>"
   },
  "tags": [
    "<ADD_YOUR_TAG>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```

{% include common-instance-config.md %}
