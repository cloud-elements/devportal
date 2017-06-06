---
heading: Dropbox Business
seo: Create Instance | Dropbox Business | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 1780
parent: Back to Element Guides
order: 20
---

## Create Instance

**NOTE:  Dropbox Business V2 API is now supported within the Cloud Elements Platform.  We want to give customers a chance to test the Dropbox Business V2 Element within their application.  To access the new Element, please create an Instance using the key `dropboxbusinessv2`.  Please let [support](mailto:support@cloud-elements.com) know if you have any questions.**

**The V2 Element includes a `refId` for certain APIs.  This is the actual ID of the file sent back from Dropbox Business.  It can be used as the `ID` with all API calls with the exception of `GET /folders/{id}/contents`.**

**The `GET /folders/{id}/contents` does not support the `refId` at this time.**

Dropbox Business is a Cloud Storage Platform. When you provision an instance, your app will have access to the different functionality offered by the Dropbox Business platform.

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
'https://api.cloud-elements.com/elements/api-v2/elements/dropboxbusiness/oauth/url?apiKey=fake_Dropbox_Business_api_key&apiSecret=fake_Dropbox_Business_api_secret&callbackUrl=https://www.mycoolapp.com/auth&state=dropboxbusiness'
```

Response:

```javascript
{
  "oauthUrl": "https://www.dropboxbusiness.com/api/oauth2/authorize?response_type=code&client_id=insert_dropbox_client_id0&redirect_uri=https://www.mycoolapp.com/auth&state=dropboxbusiness",
  "element": "dropbox"
}
```

Handle Callback from the Endpoint:
Upon successful authentication and authorization by the user, the endpoint will redirect to the callback URL you provided when you setup your application with the endpoint, in our example, https://www.mycoolapp.com/auth. The endpoint will also provide two query string parameters: “state” and “code”. The value for the “state” parameter will be the name of the endpoint, e.g., “dropboxbusiness” in our example, and the value for the “code” parameter is the code required by Cloud Elements to retrieve the OAuth access and refresh tokens from the endpoint. If the user denies authentication and/or authorization, there will be a query string parameter called “error” instead of the “code” parameter. In this case, your application can handle the error gracefully.

### Step 2. Create an Instance

To provision your Dropbox Business Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Dropbox Business is “dropboxbusiness”.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "dropboxbusiness"
  },
  "providerData": {
    "code": "Code on Return the URL"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_DROPBOX_CLIENT_ID>",
    "oauth.api.secret": "<INSERT_DROPBOX_CLIENT_SECRET>",
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

```json
{
  "id": 123,
  "name": "Test",
  "token": "5MOr3Sl/E4kww6mTjmjBYV/hAUAzz1g=",
  "element": {
      "id": 22,
      "name": "Dropbox Business",
      "key": "dropboxbusiness",
      "description": "Add a Dropbox Business Instance to connect your existing Dropbox Business account to the Documents Hub, allowing you to manage files and folders. You will need your Dropbox Business account information to add an instance.",
      "image": "elements/provider_dropbox.png",
      "active": true,
      "deleted": false,
      "typeOauth": true,
      "trialAccount": false,
      "existingAccountDescription": "Give your application access to your existing
   Dropbox Business accountEnter your credentials and details for your Dropbox Business Account",
      "configDescription": "If you do not have an Dropbox Business.net account, you can create one at Dropbox Business.Net Signup",
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

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

{% include common-instance-config.md %}
