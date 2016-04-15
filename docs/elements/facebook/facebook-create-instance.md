---
heading: Facebook
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 222
parent: Back to Element Guides
order: 20
---

## Create Instance

Facebook is a Social Platform. When you provision an instance, your app will have access to the different functionality offered by the Facebook platform.

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
'http://api.cloud-elements/elements/api-v2/elements/facebooksocial/oauth/url?apiKey=insert_facebook_app_id&apiSecret=insert_facebook_app_secret&callbackUrl=www.mycoolapp.com/auth&scope=public_profile'
```

Response:

```javascript
{
  "oauthUrl": "https://graph.facebook.com/oauth/authorize?scope=public_profile&response_type=code&redirect_uri=http%3A%2F%2Fwww%3%2Fmycoolapp%2Fcom%2Fauth&state=facebooksocial&client_id=insert_facebook_app_id",
  "element": "facebooksocial"
}
```

Handle Callback from the Endpoint:
Upon successful authentication and authorization by the user, the endpoint will redirect to the callback URL you provided when you setup your application with the endpoint, in our example, https://www.mycoolapp.com/auth. The endpoint will also provide two query string parameters: “state” and “code”. The value for the “state” parameter will be the name of the endpoint, e.g., "facebooksocial" in our example, and the value for the “code” parameter is the code required by Cloud Elements to retrieve the OAuth access and refresh tokens from the endpoint. If the user denies authentication and/or authorization, there will be a query string parameter called “error” instead of the “code” parameter. In this case, your application can handle the error gracefully.

### Step 2. Create an Instance

To provision your Facebook Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Facebook is "facebooksocial".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```javascript
{
  "element": {
    "key": "facebooksocial"
  },
  "providerData": {
    "code": "Code on Return the URL"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_FACEBOOK_CLIENT_ID>",
    "oauth.api.secret": "<INSERT_FACEBOOK_CLIENT_SECRET>",
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "oauth.scope": "<INSERT_FACEBOOK_LEVEL_OF_PERMISSION>"
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

```javascript
{
  "id": 123,
  "name": "Test",
  "token": "5MOr3Sl/E4kww6mTjmjBYV/hAUAzz1g=",
  "element": {
    "id": 48,
    "name": "Facebook",
    "key": "facebooksocial",
    "description": "Add a Facebook Instance to connect your existing Facebook account to the Social Hub, allowing you to manage photos and posts across multiple Social Elements. You will need your Facebook account information to add an instance.",
    "image": "elements/provider_facebook.png",
    "active": true,
    "deleted": false,
    "typeOauth": true,
    "trialAccount": false,
    "configDescription": "If you do not have an Facebook account, you can create one at https://www.facebook.com",
    "signupURL": "https://www.facebook.com",
    "transformationsEnabled": true,
    "authentication": {
      "type": "oauth2"
    },
    "hub": "social",
    "parameters": []
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "base.url": "https://graph.facebook.com/v2.5",
    "oauth.api.secret": "FACEBOOK_APP_SECRET",
    "oauth.token.url": "https://graph.facebook.com/v2.5/oauth/access_token",
    "pagination.max": "100",
    "oauth.scope": "public_profile+user_photos+publish_actions",
    "oauth.user.token": "FACEBOOK_USER_TOKEN",
    "oauth.authorization.url": "https://graph.facebook.com/oauth/authorize",
    "event.notification.instance.finder": null,
    "pagination.offset": "false",
    "oauth.callback.url": "http://www.mycoolapp.com/auth",
    "oauth.user.refresh_token": null,
    "oauth.user.refresh_interval": "3600",
    "oauth.api.key": "FACEBOOK_APP_ID",
    "oauth.user.refresh_time": null
  },
  "eventsEnabled": false,
  "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.
