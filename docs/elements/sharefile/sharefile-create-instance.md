---
heading: ShareFile
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 450
parent: Back to Element Guides
order: 20
---

## Create Instance

ShareFile is a Help Desk Platform. When you provision an instance, your app will have access to the different functionality offered by the ShareFile platform.

### Step 1. Get Elements OAuth Information

HTTP Header: None
HTTP Verb: GET
Request URL: /elements/{key}/oauth/url
Request Body: None
Query Parameters:

* __key__ - sharefile
* __apiKey__ - the key obtained from registering your app with the provider
* __apiSecret__ – the secret obtained from registering your app with the provider
* __callbackUrl__ – the URL that you supplied to the provider when registering your app, state – any custom value that you want passed to the callback handler listening at the provided callback URL.
* __siteAddress__ – Your ShareFile Subdomain

Description: The result of this API invocation is an OAuth redirect URL from the endpoint. Your application should now redirect to this URL, which in turn will present the OAuth authentication and authorization page to the user. When the provided callback URL is executed, a code value will be returned, which is required for the Create Instance API.

Example cURL Command:

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/elements/shareFile/oauth/url?apiKey=shareFile_unique_identifier&apiSecret=shareFile_client_secret&siteAddress=your_shareFile_sbudomain&callbackUrl=http://www.my_cool_app.com/auth&state=shareFile'
```

Response:

```json
{
  "oauthUrl": "https://secure.sharefile.com/oauth/authorize?client_id=insert_sharefile_client_id&response_type=code&redirect_uri=https%3A%2F%2Fhttpbin.org%2Fget&state=sharefile",
  "element": "sharefile"
}
```

Handle Callback from the Endpoint:
Upon successful authentication and authorization by the user, the endpoint will redirect to the callback URL you provided when you setup your application with the endpoint, in our example, https://www.mycoolapp.com/auth. The endpoint will also provide two query string parameters: “state” and “code”. The value for the “state” parameter will be the name of the endpoint, e.g., “sharefile” in our example, and the value for the “code” parameter is the code required by Cloud Elements to retrieve the OAuth access and refresh tokens from the endpoint. If the user denies authentication and/or authorization, there will be a query string parameter called “error” instead of the “code” parameter. In this case, your application can handle the error gracefully.

### Step 2. Create an Instance

To provision your ShareFile Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements ShareFile is “sharefile”.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "shareFile"
  },
  "providerData": {
    "code": "Code on Return the URL"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_SHAREFILE_UNIQUE_IDENTIFIER>",
    "oauth.api.secret": "<INSERT_SHAREFILE_CLIENT_SECRET>",
    "sharefile.callback.url": "https://www.my_cool_app.com/auth",
    "sharefile.subdomain": "<INSERT_SHAREFILE_SUB_DOMAIN>"
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
    "id": 450,
    "name": "Sharefile",
    "key": "sharefile",
    "description": "Sharefile Element",
    "image": "https://lh6.googleusercontent.com/--zcBqgYsBHE/AAAAAAAAAAI/AAAAAAAAAks/ICvceS9qZ-I/s0-c-k-no-ns/photo.jpg",
    "active": true,
    "deleted": false,
    "typeOauth": true,
    "trialAccount": false,
    "transformationsEnabled": true,
    "bulkDownloadEnabled": false,
    "bulkUploadEnabled": false,
    "cloneable": true,
    "authentication": {
      "type": "oauth2"
    },
    "hub": "documents",
    "parameters": []
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "base.url": "https://{sharefile.subdomain}.sf-api.com/sf/v3",
    "oauth.api.secret": "SHAREFILE_API_SECRET",
    "event.notification.subscription.id": null,
    "pagination.max": "100",
    "event.vendor.type": "polling",
    "oauth.user.token": "ydDkYnjaxBiywa8jYBub2UQikA7SqlnD$$FRvqiwAdMEtRijHvyqeD",
    "sharefile.token.url": "https://secure.sharefile.com/oauth/token?grant_type=authorization_code",
    "pagination.type": "",
    "event.poller.refresh_interval": "5",
    "event.notification.callback.url": null,
    "event.notification.signature.key": null,
    "oauth.user.refresh_token": "ydDkYnjaxBiywa8jYBub2UQikA7SqlnD$$t5A4a5oU7FYJeZwa4V7LZzrl82AmdG9xmH8",
    "sharefile.subdomain": "cloudelements",
    "event.poller.urls": "documents|/hubs/documents/events/poll/documents?where=lastmodifieddate='${gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
    "sharefile.auth.url": "https://secure.sharefile.com/oauth/index.aspx",
    "oauth.api.key": "SHAREFILE_API_KEY",
    "sharefile.callback.url": "https://httpbin.org/get",
    "oauth.user.refresh_time": "1461625686998",
    "sharefile.format": "json",
    "event.notification.enabled": "false"
  },
  "eventsEnabled": false,
  "cachingEnabled": false,
  "traceLoggingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.
