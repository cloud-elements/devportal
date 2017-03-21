---
heading: Facebook Lead Ads
seo: Create Instance | Facebook Lead Ads | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 222
parent: Back to Element Guides
order: 20
---

## Create Instance

<span style="color:red"> Update this paragraph. </span> Facebook Lead Ads is a platform to capture leads in Facebook ads. When you provision an instance, your app will have access to the different functionality offered by Facebook Lead Ads.

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
'http://api.cloud-elements/elements/api-v2/elements/facebookleadads/oauth/url?apiKey=insert_facebook_app_id&apiSecret=insert_facebook_app_secret&callbackUrl=www.mycoolapp.com/auth&scope=public_profile'
```

Response:

```json
{
  "oauthUrl": "https://graph.facebook.com/v2.8/dialog/oauth?scope=manage_pages%2Cads_management%2Cpages_messaging&response_type=code&redirect_uri=http%3A%2F%2Fwww%3%2Fmycoolapp%2Fcom&state=facebookleadads&client_id=845967205524376",
  "element": "facebookleadads"
}
```

Handle Callback from the Endpoint:
Upon successful authentication and authorization by the user, the endpoint will redirect to the callback URL you provided when you setup your application with the endpoint, in our example, https://www.mycoolapp.com/auth. The endpoint will also provide two query string parameters: “state” and “code”. The value for the “state” parameter will be the name of the endpoint, e.g., "facebookleadads" in our example, and the value for the “code” parameter is the code required by Cloud Elements to retrieve the OAuth access and refresh tokens from the endpoint. If the user denies authentication and/or authorization, there will be a query string parameter called “error” instead of the “code” parameter. In this case, your application can handle the error gracefully.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Facebook is "facebookleadads".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "facebookleadads"
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

```json
{
  "id": 409955,
  "name": "FB Lead Ads DW",
  "createdDate": "2017-03-06T23:17:56Z",
  "token": "<Token>",
  "element": {
    "id": 202,
    "name": "Facebook Lead Ads",
    "hookName": "FacebookLeadAds",
    "key": "facebookleadads",
    "description": "Add a Facebook Lead Ads Instance to connect your existing Facebook account to the Marketing Hub, allowing you to manage pages, etc. across multiple Marketing Elements. You will need your Facebook account information to add an instance.",
    "image": "https://pbs.twimg.com/profile_images/3513354941/24aaffa670e634a7da9a087bfa83abe6_400x400.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
  },
  "tags": [
    "FB Lead Ads Tag"
  ],
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "oauth.api.secret": "FACEBOOK_APP_SECRET",
    "base.url": "https://graph.facebook.com/v2.8",
    "event.notification.subscription.id": null,
    "oauth.token.url": "https://graph.facebook.com/v2.8/oauth/access_token",
    "pagination.max": "200",
    "event.vendor.type": "webhooks",
    "facebookleadads.pages": "371849943149280|1766381080257409",
    "oauth.scope": "manage_pages,ads_management,pages_messaging",
    "oauth.user.token": "FACEBOOK_USER_TOKEN",
    "filter.response.nulls": "true",
    "oauth.authorization.url": "https://www.facebook.com/v2.8/dialog/oauth",
    "event.notification.instance.finder": null,
    "pagination.type": "offset",
    "event.notification.callback.url": null,
    "oauth.callback.url": "http://www.mycoolapp.com/auth",
    "event.notification.signature.key": null,
    "oauth.user.refresh_token": null,
    "oauth.user.refresh_interval": "5183992",
    "oauth.app.token": null,
    "oauth.api.key": "FACEBOOK_APP_ID",
    "oauth.user.refresh_time": null,
    "oauth.basic.header": "true",
    "event.notification.enabled": "false"
  },
  "eventsEnabled": false,
  "traceLoggingEnabled": false,
  "cachingEnabled": false,
  "externalAuthentication": "none",
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

{% include common-instance-config.md %}
