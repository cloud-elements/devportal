---
heading: HubSpot
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 43
parent: Back to Element Guides
order: 15
---

## Create Instance

HubSpot is a Customer Success Platform. When you provision an instance, your app will have access to the different functionality offered by the HubSpot platform.

Optionally, you may provision an instance to specific features like Marketing and CRM. Below are examples of each method beginning with HubSpot Marketing.

### Step 1. Get Elements OAuth Information

HTTP Header: None
HTTP Verb: GET
Request URL: /elements/{key}/oauth/url
Request Body: None
Query Parameters:

* __apiKey–__ the __Client ID__
* __apiSecret__ – the __Portal ID__
* __scopes__ – scopes you defined in HubSpot application setup. To use the Cloud Elements API, you must at least provide the following scopes: “contacts-rw+offline”
* __callbackUrl__ – the URL that you supplied to the provider when registering your app, state – any custom value that you want passed to the callback handler listening at the provided callback URL.

Description: The result of this API invocation is an OAuth redirect URL from the endpoint. Your application should now redirect to this URL, which in turn will present the OAuth authentication and authorization page to the user. When the provided callback URL is executed, a code value will be returned, which is required for the Create Instance API.

Input Query Parameters:

OAuth client (apiKey): 123456789d-1234-12e4-bda9-12345b8bf20
Portal ID (apiSecret): 123456
The scope is notated as “scope=contacts-rw%20offline”. The API call will not work without the scope parameters.
Callback URL: http://demonstrab.ly
A sample request illustrating the API is shown below.

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
The URL returned in the GET /elements/{key}/oauth/url call is where you need to send your user. When that URL is executed, an authorization screen will render.
Once the user has successful authorized the app, HubSpot will provide three query string parameters: “access token”, “refresh token”, and “time expiration”. The value for the “access token”, “refresh token”, and “time expiration” parameters are required by Cloud Elements to create a HubSpot Element Instance.

### Step 2. Create an Instance

To provision your HubSpot Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements HubSpot is “hubspot”.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

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
    "name": "HubSpot",
    "key": "hubspot",
    "description": "HubSpot is an inbound marketing software platform that helps companies attract visitors, convert leads, and close customers.",
    "image": "elements/provider_hubspot.png",
    "active": true,
    "deleted": false,
    "typeOauth": true,
    "trialAccount": false,
    "existingAccountDescription": "Give your application access to your existing
 HubSpot accountEnter your credentials and details for your HubSpot Account",
    "configDescription": "If you do not have a HubSpot account, you can create one at HubSpot Signup"
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
