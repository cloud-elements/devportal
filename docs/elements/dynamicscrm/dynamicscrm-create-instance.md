---
heading: Microsoft Dynamics CRM
seo: Create Instance | MS Dynamics CRM | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 190
parent: Back to Element Guides
order: 20
---

## Create Instance

Microsoft Dynamics CRM is a Customer Success Platform. When you provision an instance, your app will have access to the different functionality offered by the Microsoft Dynamics CRM platform.

You can provision the instance using custom [authentication](#custom-authentication) or [OAuth](#oauth-authentication).

### Custom Authentication

To provision your Microsoft Dynamics CRM Element, use the /instances API.

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

This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Microsoft Dynamics CRM is “autotaskhelpdesk”.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```JSON
{
  "element": {
    "key": "dynamicscrmadfs"
  },
  "configuration": {
    "user.username": "<INSERT_DYNMAICS_CRM_USERNAME>",
    "user.password": "<INSERT_DYNMAICS_CRM_PASSWORD>",
    "dynamics.tenant": "yourcompanyname.crm.dynamics.com",
    "document.tagging": false
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

```JSON
{
  "id": 1234,
  "name": "Test",
  "token": "D52NHV9MUU+00dcGRLu9hsCnaBwqMuWnjbA=",
  "element": {
    "id": 124,
    "name": "Dynamics CRM Beta",
    "key": "dynamicscrm",
    "description": "Add a Microsoft Dynamics CRM Instance to connect your existing Microsoft Dynamics CRM account to the CRM Hub, allowing you to manage contacts, leads, accounts, opportunities etc. across multiple CRM Elements. You will need your Microsoft Dynamics CRM account information to add an instance.",
    "image": "elements/provider_dynamicscrm.png",
    "active": true,
    "deleted": false,
    "typeOauth": true,
    "trialAccount": false,
    "configDescription": "Microsoft Dynamics CRM",
    "transformationsEnabled": true,
    "authentication": {
      "type": "custom"
    },
    "hub": "crm"
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

### OAUth Authentication

OAUth Authentication involves two steps:
1. Get Element OAuth Information
2. Create an Instance


#### Step 1. Get Element OAuth Information

* HTTP Header: None
* HTTP Verb: GET
* Request URL: /elements/{keyOrId}/oauth/url
* Request Body: None
* Query Parameters:

* __apiKey__: the key obtained from registering your app with the provider
* __apiSecret__:  the secret obtained from registering your app with the provider
* __callbackUrl__: the URL that you supplied to the provider when registering your app, state – any custom value that you want passed to the callback handler listening at the provided callback URL.

Description: The result of this API invocation is an OAuth redirect URL from the endpoint. Your application should now redirect to this URL, which in turn will present the OAuth authentication and authorization page to the user. When the provided callback URL is executed, a code value will be returned, which is required for the Create Instance API.

Example cURL Command:

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/elements/dynamicscrmadfs/oauth/url?apiKey=fake_dynamics_client_id&apiSecret=fake_dynamics_client_secret&siteAddress=yourdynamicssiteaddress&callbackUrl=http://fake.oauth.callback/url&state=dynamics'
```

Response:

```json
{
"element": "dynamicscrmadfs",
"oauthUrl": "https://cloudelements1-my.sharepoint.com/_layouts/15/OAuthAuthorize.aspx?client_id=20f1fc85-bd8a-430e-ba36-7877fd26b720&redirect_uri=https%3A%2F%2Fwww.callbackUrl%2F&response_type=code&scope=AllSites.Manage&state=dynamicscrmadfs"
}
```

Handle Callback from the Endpoint:
Upon successful authentication and authorization by the user, the endpoint will redirect to the callback URL you provided when you set up your application with the endpoint, in our example, https://www.mycoolapp.com/auth. The endpoint will also provide two query string parameters: “state” and “code”. The value for the “state” parameter will be the name of the endpoint, e.g., "dynamicscrmadfs" in our example, and the value for the “code” parameter is the code required by Cloud Elements to retrieve the OAuth access and refresh tokens from the endpoint. If the user denies authentication and/or authorization, there will be a query string parameter called “error” instead of the “code” parameter. In this case, your application can handle the error gracefully.

#### Step 2. Create an Instance

To provision your Dynamics Element, use the /instances API.

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
This instance.json file must be included with your instance request.  The “key” into Cloud Elements MS Dynamics is “dynamicscrmadfs”.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "dynamicscrmadfs"
  },
  "providerData": {
    "code": "<Code_On_The_Return_URL>"
  },
  "configuration": {
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "oauth.api.key": "<Dynamics_CLIENT_ID>",
    "oauth.api.secret": "<Dynamics_Key_Value>",
    "dynamics.tenant": "<URL_of_CRM_Instance>"
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
    "id": 123,
    "name": "test",
    "token": "3sU/S/kZD36BaABPS7EAuSGHF+1wsthT+mvoukiE",
    "element": {
        "id": 39,
        "name": "Microsoft Dynamics CRM",
        "key": "dynamicscrmadfs",
        "description": "Add a Microsoft Dynamics CRM Instance to connect your existing Microsoft Dynamics CRM\naccount (Online or On Premise) to the CRM Hub, allowing you to manage contacts, leads, accounts, opportunities etc. across multiple CRM Elements. You will need your Microsoft Dynamics CRM account information to add an instance.",
        "active": true,
        "deleted": false,
        "typeOauth": true,
        "trialAccount": false,
        "configDescription": "Microsoft Dynamics CRM For Online and On Premise",
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
