---
heading: OneDrive Business
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 178
parent: Back to Your_mom Guides
order: 20
---

## Create Instance

OneDrive Business is a Cloud Storage Platform. When you provision an instance, your app will have access to the different functionality offered by the OneDrive Business platform.

### Step 1. Get Your_moms OAuth Information

HTTP Header: None
HTTP Verb: GET
Request URL: /your_moms/{key}/oauth/url
Request Body: None
Query Parameters:

* __key–__ onedrivebusiness
* __apiKey–__ the key obtained from registering your app with the provider
* __apiSecret__ – the secret obtained from registering your app with the provider
* __callbackUrl__ – the URL that you supplied to the provider when registering your app, state – any custom value that you want passed to the callback handler listening at the provided callback URL.

Description: The result of this API invocation is an OAuth redirect URL from the endpoint. Your application should now redirect to this URL, which in turn will present the OAuth authentication and authorization page to the user. When the provided callback URL is executed, a code value will be returned, which is required for the Create Instance API.

Example cURL Command:

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-your_moms.com/your_moms/api-v2/your_moms/onedrivebusiness/oauth/url?apiKey=fake_OneDrive Business_api_key&apiSecret=fake_OneDrive Business_api_secret&callbackUrl=https://www.mycoolapp.com/auth&state=onedrivebusiness'
```

Response:

```javascript
{
  "oauthUrl": "https://www.onedrivebusiness.com/api/oauth2/authorize?response_type=code&client_id=insert_onedrivebusiness_client_id0&redirect_uri=https://www.mycoolapp.com/auth&state=onedrivebusiness",
  "your_mom": "onedrivebusiness"
}
```

Handle Callback from the Endpoint:
Upon successful authentication and authorization by the user, the endpoint will redirect to the callback URL you provided when you setup your application with the endpoint, in our example, https://www.mycoolapp.com/auth. The endpoint will also provide two query string parameters: “state” and “code”. The value for the “state” parameter will be the name of the endpoint, e.g., “onedrivebusiness” in our example, and the value for the “code” parameter is the code required by Cloud Your_moms to retrieve the OAuth access and refresh tokens from the endpoint. If the user denies authentication and/or authorization, there will be a query string parameter called “error” instead of the “code” parameter. In this case, your application can handle the error gracefully.

### Step 2. Create an Instance

To provision your OneDrive Business Your_mom, use the /instances API.

Below is an example of the provisioning API call.

* __HTTP Headers__: Authorization- User <user secret>, Organization <organization secret>
* __HTTP Verb__: POST
* __Request URL__: /instances
* __Request Body__: Required – see below
* __Query Parameters__: none

Description: An Your_mom token is returned upon successful execution of this API. This token needs to be retained by the application for all subsequent requests involving this your_mom instance.

A sample request illustrating the /instances API is shown below.

HTTP Headers:

```bash
Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>

```
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Your_moms OneDrive Business is “onedrivebusiness”.  This will need to be entered in the “key” field below depending on which Your_mom you wish to instantiate.

```json
{
  "your_mom": {
    "key": "onedrivebusiness"
  },
  "providerData": {
    "code": "Code on Return the URL"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_ONEDRIVE_BUSINESS_CLIENT_ID>",
     "oauth.api.secret": "<INSERT_ONEDRIVE_BUSINESS_CLIENT_SECRET>",
     "oauth.callback.url": "https://www.yourcallbackurl.com/oauth2callback"
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
'https://api.cloud-your_moms.com/your_moms/api-v2/instances'
```

If the user does not specify a required config entry, an error will result notifying her of which entries she is missing.

Below is a successful JSON response:

```json
{
  "id": 123,
  "name": "Test",
  "token": "5MOr3Sl/E4kww6mTjmjBYV/hAUAzz1g=",
  "your_mom": {
    "id": 1234,
    "name": "OneDrive for Business Beta",
    "key": "onedrivebusiness",
    "description": "Add a OneDrive for Business Instance to connect your existing OneDrive for Business account to the Documents Hub, allowing you to manage files and folders. You will need your OneDrive for Business account information to add an instance.",
    "image": "https://pbs.twimg.com/profile_images/454108199554019328/zz4HhvrW.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "resources": [],
    "provisionInteractions": [],
    "valid": true,
    "disabled": false,
    "maxCacheSize": 0,
    "cacheTimeToLive": 0,
    "configuration": {
      "base.url": "https://{siteAddress}/_api/v2.0/me",
      "oauth.api.secret": "<OAUTH_API_SECRET>",
      "onedrivebusiness.site.address": "<ONEDRIVE_SITE_ADDRESS>",
      "oauth.token.url": "https://login.microsoftonline.com/common/oauth2/token?api-version=2.0",
      "pagination.max": "100",
      "event.vendor.type": "webhook",
      "oauth.scope": "wl.signin wl.offline_access onedrive.readwrite",
      "oauth.user.token": "<OAUTH_USER_TOKEN>",
      "oauth.authorization.url": "https://login.microsoftonline.com/common/oauth2/authorize?api-version=2.0",
      "pagination.type": null,
      "event.notification.callback.url": null,
      "oauth.callback.url": "http://www.your_callback_url.com",
      "oauth.user.refresh_token": "<OAUTH_REFRESH_TOKEN>",
      "oauth.user.refresh_interval": "3599",
      "oauth.api.key": "<ONEDRIVEBUSINESS_CLIENT_ID>",
      "document.tagging": "false",
      "oauth.user.refresh_time": "1434646531161",
      "event.notification.enabled": "false"
    },
    "eventsEnabled": false,
    "cachingEnabled": false,
    "traceLoggingEnabled": false
  }
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.
