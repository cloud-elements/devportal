---
heading: Event Management
seo: Event Management | Cloud Elements API Docs
title: Provisioning via APIs
description: View the Event Management Guide explaining the Cloud Elements Events Framework.
layout: sidebarleft
breadcrumbs: /docs/platform/platform-docs.html
parent: Back to Platform Docs
order: 15
sitemap: false
---
Elements can be provisioned with Event Management Integration via the Elements Manager or APIs. [Click here for provisioning via Manager Console](provisioning-console.html).

#### **Provisioning via APIs**

In order to provision an instance via the API, we must first make a
request to the Element's `/oauth` url with the necessary keys. (Note,
you can skip to the `/instances` call description below if your Element
doesn't use OAuth authentication.)

* HTTP Header: None
* HTTP Verb: GET
* Request URL: /elements/{key}/oauth/url
* Request Body: None
* Query Parameters:
    * __apiKey–__ the key obtained from registering your app with the
      provider
    * __apiSecret__ – the secret obtained from registering your app with the
      provider
    * __callbackUrl__ – the URL that you supplied to the provider when
      registering your app
    * __state__ – any custom value that you want passed to the callback
      handler listening at the provided callback URL.

The result of this API invocation is an OAuth redirect URL from the
endpoint. Your application should now redirect to this URL, which in
turn will present the OAuth authentication and authorization page to the
user. When the provided callback URL is executed, a code value will be
returned, which is required to create a new instance.

Example cURL Command:

```bash
curl -X GET -H 'Content-Type: application/json' \
  'https://api.cloud-elements.com/elements/api-v2/elements/dropbox/oauth/url?apiKey=fake_Dropbox_api_key&apiSecret=fake_Dropbox_api_secret&callbackUrl=https://www.mycoolapp.com/auth&state=dropbox'
```

Response:

```json
{
  "oauthUrl": "https://www.dropbox.com/api/oauth2/authorize?response_type=code&client_id=insert_dropbox_client_id0&redirect_uri=https://www.mycoolapp.com/auth&state=dropbox",
  "element": "dropbox"
}
```

Upon successful authentication and authorization by the user, the
endpoint will redirect to the callback URL you provided when you setup
your application with the endpoint, in our example,
`https://www.mycoolapp.com/auth`. The endpoint will also provide two query
string parameters: “state” and “code”. The value for the “state”
parameter will be the name of the endpoint, e.g., “dropbox” in our
example, and the value for the “code” parameter is the code required by
Cloud Elements to retrieve the OAuth access and refresh tokens from the
endpoint. If the user denies authentication and/or authorization, there
will be a query string parameter called “error” instead of the “code”
parameter. In this case, your application can handle the error
gracefully.

Once you have the necessary authorization values, you can make a call to
the `/instances` API to actually create a new instance.

Below is an example of the provisioning API call.

* __HTTP Headers__: Authorization- User <user secret>, Organization <organization secret>
* __HTTP Verb__: POST
* __Request URL__: /instances
* __Request Body__: Required – see below
* __Query Parameters__: none

An Element token is returned upon successful execution of this API. This
token needs to be retained by the application for all subsequent
requests involving this Element instance.

A sample request illustrating the `/instances` API is shown below.

#### HTTP Headers:

```bash
Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>
```

Below is an example of the body that must be included in your instance
request, which would provision a new Dropbox Element instance. Note the
`event` configuration properties are similar to what we specify in the
GUI:

```json
{
  "element": {
    "key": "dropbox"
  },
  "providerData": {
    "code": "'code' from the oauth call (required for OAuth only)"
  },
  "configuration": {
    "oauth.callback.url": "<SAMPLE_CALLLBACK_URL>",
    "oauth.api.key": "<SAMPLE_API_KEY>",
    "oauth.api.secret": "<SAMPLE_API_SECRET>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "http://my-cool-site/callback",
    "document.tagging": false
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```

If your element supports polling, you would need to provide additional
configuration values to enable it: see the "Polling Configuration"
section below for details.

If this JSON was saved in a file named `instance.json`, then we could
make the following cURL command to create an instance:

```bash
curl -X POST \
  -H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>' \
  -H 'Content-Type: application/json' \
  -d @instance.json \
  'https://api.cloud-elements.com/elements/api-v2/instances'
```

Below is an example of a successful JSON response that might result:
note the "token" property, which is required to make any API requests to
the new Element instance.

```json
{
  "id": 123,
  "name": "Test",
  "token": "5MOr3Sl/E4kww6mTjmjBYV/hAUAzz1g=",
  "element": {
    "id": 22,
    "name": "Dropbox",
    "key": "dropbox",
    "description": "Add a Dropbox instance to connect your existing Dropbox account to the Documents Hub, allowing you to manage files and folders. You will need your Dropbox account information to add an instance.",
    "image": "elements/provider_dropbox.png",
    "active": true,
    "deleted": false,
    "typeOauth": true,
    "trialAccount": false,
    "existingAccountDescription": "Give your application access to your existing Dropbox accountEnter your credentials and details for your Dropbox Account",
    "configDescription": "If you do not have an Dropbox.net account, you can create one at Dropbox.Net Signup",
    "transformationsEnabled": false,
    "authentication": {
      "type": "oauth2"
    },
    "hub": "documents"
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "eventsEnabled": false,
  "cachingEnabled": false
}
```

And that's it: you've used our APIs to provision a new Element instance
with notifications enabled.

[Provisioning via Manager Console](provisioning-console.html).
