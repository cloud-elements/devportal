---
heading: Instagram
seo: Create Instance | Instagram | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 143
parent: Back to Element Guides
order: 20
---

## Create Instance

Instagram is a Social Platform. When you provision an instance, your app will have access to the different functionality offered by the Instagram platform.

### Step 1. Get Elements OAuth Information

* HTTP Header: None
* HTTP Verb: GET
* Request URL: /elements/{key}/oauth/url
* Request Body: None
* Query Parameters:

* __key__ - "instagram"
* __apiKey__ - the key obtained from registering your app with the provider
* __apiSecret__ – the secret obtained from registering your app with the provider
* __callbackUrl__ – the URL that you supplied to the provider when registering your app, state – any custom value that you want passed to the callback handler listening at the provided callback URL.

Description: The result of this API invocation is an OAuth redirect URL from the endpoint. Your application should now redirect to this URL, which in turn will present the OAuth authentication and authorization page to the user. When the provided callback URL is executed, a code value will be returned, which is required for the Create Instance API.

Example cURL Command:

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/elements/dropinstagram/oauth/url?apiKey=fake_instagram_client_id&apiSecret=fake_instagram_client_secret&siteAddress=yourinstagramsiteaddress.instagram.com&callbackUrl=http://fake.oauth.callback/url&state=instagram'
```

Response:

```javascript
{
  "oauthUrl": "https://api.instagram.com/oauth/authorize?response_type=code&client_id=<INSERT_INSTAGRAM_CLIENT_ID>&redirect_uri=https://www.demonstrab.ly/authz&scope=basic+comments+relationships+likes&state=instagram",
  "element": "instagram"
}
```

Handle Callback from the Endpoint:
Upon successful authentication and authorization by the user, the endpoint will redirect to the callback URL you provided when you setup your application with the endpoint, in our example, https://www.mycoolapp.com/auth. The endpoint will also provide two query string parameters: “state” and “code”. The value for the “state” parameter will be the name of the endpoint, e.g., "instagram" in our example, and the value for the “code” parameter is the code required by Cloud Elements to retrieve the OAuth access and refresh tokens from the endpoint. If the user denies authentication and/or authorization, there will be a query string parameter called “error” instead of the “code” parameter. In this case, your application can handle the error gracefully.

### Step 2. Create an Instance

To provision your Instagram Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Instagram is "instagram".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```javascript
{
  "element": {
    "key": "instagram"
  },
  "providerData": {
    "code": "Code on Return the URL"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_INSTAGRAM_CLIENT_ID>",
    "oauth.api.secret": "<INSERT_INSTAGRAM_CLIENT_SECRET>",
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

```javascript
{
  "id": 123,
  "name": "Test",
  "token": "5MOr3Sl/E4kww6mTjmjBYV/hAUAzz1g=",
  "element": {
    "id": 74,
    "name": "Instagram Beta",
    "key": "instagram",
    "description": "Instagram is an online mobile photo-sharing, video-sharing and social networking service that enables its users to take pictures and videos, and share them on a variety of social networking platforms, such as Facebook, Twitter, Tumblr and Flickr.",
    "image": "https://pbs.twimg.com/profile_images/1550954462/instagramIcon.png",
    "active": false,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "transformationsEnabled": true,
    "authentication": {
      "type": "oauth2"
    },
    "hub": "social",
    "parameters": [
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "base.url": "https://api.instagram.com/v1",
    "oauth.api.secret": "INSTAGRAM_SECRET",
    "oauth.token.url": "https://api.instagram.com/oauth/access_token",
    "pagination.max": "100",
    "oauth.scope": "basic+comments+relationships+likes",
    "oauth.user.token": "566745376.519b1fd.6b5c06dd1683bf72698",
    "oauth.authorization.url": "https://api.instagram.com/oauth/authorize",
    "event.notification.instance.finder": null,
    "pagination.offset": "false",
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "oauth.user.refresh_token": null,
    "oauth.user.refresh_interval": "3600",
    "oauth.api.key": "INSTAGRAM_API_KEY",
    "oauth.user.refresh_time": null
  },
  "eventsEnabled": false,
  "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.
