---
heading: Citrix GoToWebinar
seo: Create Instance | Citrix GoToWebinar | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 1743
parent: Back to Element Guides
order: 20
---

## Create Instance

Citrix GoToWebinar is a Cloud Storage Platform. When you provision an instance, your app will have access to the different functionality offered by the Citrix GoToWebinar platform.

### Step 1. Get Elements OAuth Information

* HTTP Header: None
* HTTP Verb: GET
* Request URL: /elements/{keyOrId}/oauth/url
* Request Body: None
* Query Parameters:

* __key__ - gotowebinar
* __apiKey__ - the key obtained from registering your app with the provider
* __apiSecret__ – the secret obtained from registering your app with the provider
* __callbackUrl__ – the URL that you supplied to the provider when registering your app, state – any custom value that you want passed to the callback handler listening at the provided callback URL.

Description: The result of this API invocation is an OAuth redirect URL from the endpoint. Your application should now redirect to this URL, which in turn will present the OAuth authentication and authorization page to the user. When the provided callback URL is executed, a code value will be returned, which is required for the Create Instance API.

Example cURL Command:

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/elements/gotowebinar/oauth/url?apiKey=gotowebinar_consumer_key&apiSecret=gotowebinar_consumer_secret&callbackUrl=http://www.my_cool_app.com/auth&state=gotowebinar'
```

Response:

```json
{
  "oauthUrl": "https://api.citrixonline.com/oauth/authorize?response_type=code&redirect_uri=https%3A%2F%2Fmycoolapp%2Fauth&state=gotowebinar&client_id=gotowebinar_consumer_key",
  "element": "gotowebinar"
}
```

Handle Callback from the Endpoint:
Upon successful authentication and authorization by the user, the endpoint will redirect to the callback URL you provided when you setup your application with the endpoint, in our example, https://www.mycoolapp.com/auth. The endpoint will also provide two query string parameters: “state” and “code”. The value for the “state” parameter will be the name of the endpoint, e.g., `gotowebinar` in our example, and the value for the “code” parameter is the code required by Cloud Elements to retrieve the OAuth access and refresh tokens from the endpoint. If the user denies authentication and/or authorization, there will be a query string parameter called “error” instead of the “code” parameter. In this case, your application can handle the error gracefully.

### Step 2. Create an Instance

To provision your Citrix GoToWebinar Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Citrix GoToWebinar is `gotowebinar`.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "gotowebinar"
  },
  "providerData": {
    "code": "Code on Return the URL"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_GOTOWEBINAR_CONSUMER_KEY>",
    "oauth.api.secret": "<INSERT_GOTOWEBINAR_CONSUMER_SECRET>",
    "oauth.callback.url": "https://www.my_cool_app.com/auth"
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
  "id": 1234,
  "name": "Test",
  "token": "zg1dx35BCjiKo+pbTQS3dxcAKlfZcNVOWtI=",
  "element": {
    "id": 8391,
    "name": "GoToWebinar",
    "key": "gotowebinar",
    "description": "Add an GoToWebinar Instance to connect your existing GoToWebinar account to the Conferencing Hub, allowing you to manage meetings etc. across multiple Conferencing Elements. You will need your GoToWebinar account information to add an instance. ",
    "image": "https://login.citrixonline.com/static/g2w/images/g2wlogo.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "resources": [    ],
    "private": false
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "base.url": "https://api.citrixonline.com/G2W/rest",
    "oauth.api.secret": "API_SECRET",
    "organizer_key": "376041051",
    "oauth.token.url": "https://api.citrixonline.com/oauth/access_token",
    "pagination.max": "100",
    "event.vendor.type": "polling",
    "oauth.token.refresh_url": "https://api.citrixonline.com/oauth/access_token",
    "oauth.user.token": "fqECFdWJfm2AsR",
    "js_safe_long_to_string": "webinarKey,organizerKey,registrantKey",
    "oauth.authorization.url": "https://api.citrixonline.com/oauth/authorize",
    "pagination.type": "page",
    "event.poller.refresh_interval": "15",
    "event.notification.callback.url": null,
    "oauth.callback.url": "https://www.getpostman.com/oauth2/callback",
    "oauth.user.refresh_token": "GEASGOwY4lRKgTaRzAqW2e",
    "oauth.user.refresh_interval": "30758399",
    "oauth.api.key": "API_KEY",
    "oauth.user.refresh_time": "1483984092072",
    "oauth.basic.header": "true",
    "pagination.page.startindex": "1",
    "event.notification.enabled": "false"
  },
  "eventsEnabled": false,
  "traceLoggingEnabled": false,
  "externalAuthentication": "none",
  "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

{% include common-instance-config.md %}
