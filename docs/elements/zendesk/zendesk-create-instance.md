---
heading: Zendesk
seo: Create Instance | Zendesk | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 41
parent: Back to Element Guides
order: 20
---

## Create Instance

Zendesk is a Help Desk Platform. When you provision an instance, your app will have access to the different functionality offered by the Zendesk platform.

### Step 1. Get Elements OAuth Information

* HTTP Header: None
* HTTP Verb: GET
* Request URL: /elements/{keyOrId}/oauth/url
* Request Body: None
* Query Parameters:

* __key__ - zendesk
* __apiKey__ - the key obtained from registering your app with the provider
* __apiSecret__ – the secret obtained from registering your app with the provider
* __callbackUrl__ – the URL that you supplied to the provider when registering your app, state – any custom value that you want passed to the callback handler listening at the provided callback URL.
* __siteAddress__ – Your Zendesk Subdomain

Description: The result of this API invocation is an OAuth redirect URL from the endpoint. Your application should now redirect to this URL, which in turn will present the OAuth authentication and authorization page to the user. When the provided callback URL is executed, a code value will be returned, which is required for the Create Instance API.

Example cURL Command:

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/elements/zendesk/oauth/url?apiKey=zendesk_unique_identifier&apiSecret=zendesk_client_secret&siteAddress=your_zendesk_sbudomain&callbackUrl=http://www.my_cool_app.com/auth&state=zendesk'
```

Response:

```json
{
  "oauthUrl": "https://yoursubdoamin.zendesk.com/oauth/authorizations/new?response_type=code&client_id=zendesk_unique_identifier&redirect_uri=http://www.my_cool_app.com/auth&scope=read write&state=zendesk",
  "element": "zendesk"
}
```

Handle Callback from the Endpoint:
Upon successful authentication and authorization by the user, the endpoint will redirect to the callback URL you provided when you setup your application with the endpoint, in our example, https://www.mycoolapp.com/auth. The endpoint will also provide two query string parameters: “state” and “code”. The value for the “state” parameter will be the name of the endpoint, e.g., “zendesk” in our example, and the value for the “code” parameter is the code required by Cloud Elements to retrieve the OAuth access and refresh tokens from the endpoint. If the user denies authentication and/or authorization, there will be a query string parameter called “error” instead of the “code” parameter. In this case, your application can handle the error gracefully.

### Step 2. Create an Instance

To provision your Zendesk Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Zendesk is “zendesk”.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "zendesk"
  },
  "providerData": {
    "code": "Code on Return the URL"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_ZENDESK_UNIQUE_IDENTIFIER>",
    "oauth.api.secret": "<INSERT_ZENDESK_CLIENT_SECRET>",
    "oauth.callback.url": "https://www.my_cool_app.com",
    "zendesk.subdomain": "<INSERT_ZENDESK_SUB_DOMAIN>"
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
    "id": 41,
    "name": "Zendesk",
    "key": "zendesk",
    "description": "Add a Zendesk Instance to connect your existing Zendesk account to the Help Desk Hub, allowing you to manage your  incidents, priorities, statuses, users, etc. across multiple Help Desk Elements. You will need your Zendesk account information to add an instance.",
    "image": "elements/provider_zendesk.png",
    "active": true,
    "deleted": false,
    "typeOauth": true,
    "trialAccount": false,
    "configDescription": "If you do not have an Zendesk account, you can create one at Zendesk Register",
    "signupURL": "https://www.zendesk.com/register#company",
    "transformationsEnabled": true,
    "authentication": {
      "type": "oauth2"
    },
    "hub": "helpdesk",
    "parameters": []
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "oauth.api.secret": "zendesk_api_secret",
    "event.notification.subscription.id": null,
    "zendesk.subdomain": "zendesksubdomain",
    "helpdesk.zendesk.tokenaccess": null,
    "oauth.token.url": "https://zendesksubdomain.zendesk.com/oauth/tokens",
    "helpdesk.zendesk.webhook.target_id": null,
    "helpdesk.zendesk.username": null,
    "oauth.scope": "read write",
    "oauth.user.token": "5459e125b67523a3f98f18e5da0b96d7cd744fdcb",
    "oauth.authorization.url": "https://zendesksubdomain.zendesk.com/oauth/authorizations/new",
    "event.notification.callback.url": null,
    "oauth.callback.url": "http://deomstrab.ly/authz",
    "oauth.user.refresh_token": null,
    "helpdesk.zendesk.password": null,
    "oauth.user.refresh_interval": null,
    "helpdesk.zendesk.url": "https://zendesksubdomain.zendesk.com",
    "helpdesk.zendesk.webhook.trigger_id": null,
    "oauth.api.key": "my_cool_app",
    "oauth.user.refresh_time": null,
    "event.notification.enabled": "false"
  },
  "eventsEnabled": false,
  "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

{% include common-instance-config.md %}
