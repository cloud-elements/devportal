---
heading: Marketo
seo: Events | Marketo | Cloud Elements API Docs
title: Events
description: Enable Marketo events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 85
parent: Back to Element Guides
order: 30
---

## Events

Cloud Elements supports both polling and webhook events for Marketo.

### Polling

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "marketo"
  },
  "providerData": {
    "code": "<Code_On_The_Return_URL>"
  },
  "configuration" : {
      "oauth.api.key": "<INSERT_MARKETO_CLIENT_ID>",
      "oauth.api.secret": "<INSERT_MARKETO_CLIENT_SECRET>",
      "oauth.callback.url": "https://www.mycoolapp.com/auth",
      "marketo.identity.url":  "<INSERT_YOUR_IDENTITY_URL>",
      "marketo.rest.url": "<INSERT_YOUR_REST_URL>",
      "event.notification.enabled": "true",
      "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```

### Webhooks

Create a Marketo instance with events enabled and supply your event notification url.

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
'https://api-v2/elements/marketo/oauth/url?apiKey=insert_client_id&apiSecret=insert_client_secret&callbackUrl=https://www.mycoolapp.com/auth'
```

Response:

```json
{
  "element": "marketo",
  "oauthUrl": "https://www.mycoolapp.com/auth?state=marketo&code=7AB987CDDNC"
}
```

Handle Callback from the Endpoint:
Upon successful authentication and authorization by the user, the endpoint will redirect to the callback URL you provided when you setup your application with the endpoint, in our example, https://www.mycoolapp.com/auth. The endpoint will also provide two query string parameters: “marketo” and “code”. The value for the “state” parameter will be the name of the endpoint, e.g., “sfdc” in our example, and the value for the “code” parameter is the code required by Cloud Elements to retrieve the OAuth access and refresh tokens from the endpoint. If the user denies authentication and/or authorization, there will be a query string parameter called “error” instead of the “code” parameter. In this case, your application can handle the error gracefully.

### Step 2. Create an Instance

To provision your Marketo Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Marketo is “marketo”.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "marketo"
  },
  "providerData": {
    "code": "<Code_On_The_Return_URL>"
  },
  "configuration" : {
      "oauth.api.key": "<INSERT_MARKETO_CLIENT_ID>",
      "oauth.api.secret": "<INSERT_MARKETO_CLIENT_SECRET>",
      "oauth.callback.url": "https://www.mycoolapp.com/auth",
      "marketo.identity.url":  "<INSERT_YOUR_IDENTITY_URL>",
      "marketo.rest.url": "<INSERT_YOUR_REST_URL>",
      "event.notification.enabled": "true",
      "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
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

__Make Note of the Instance ID__

```json
{
/////////////////
// "id": 1234, // Make Note of Instance ID
/////////////////
  "name": "test instance",
  "token": "VAnlQ/V28PT+M62kdajlsd9088HHtUJai+Efq8=",
  "element": {
   "id": 46,

    "name": "Marketo",
    "key": "marketo",
    "description": "Marketo Software's provides easy and powerful marketing automation software with everything a marketer needs: email, social, analytics, lead management, and more.",
    "image": "elements/provider_marketo.png",
    "active": true,
    "deleted": false,
    "typeOauth": true,
    "trialAccount": false,
    "existingAccountDescription": "Give your application access to your existing
 Marketo accountEnter yourn  credentials and details for your Marketo Account",
    "configDescription": "If you do not have a Marketo account, you can create one at Marketon  Signup",
    "elementProvisionType": "OAUTH_TEMPLATE"
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "cachingEnabled": false,
  "defaultTransformation": false
}
```
Note: Make sure you have straight quotes in your JSON files and cURL commands. Please use plain text formatting in your code. Make sure you do not have spaces after the in the cURL command.

Call GET /instances and get your instance ID for the Marketo instance you just created

Example Request:

```bash
curl -X GET
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/instances'
```
Retrieve the Instance ID and Base64 encode it. We recommend the site:
[https://www.base64encode.org/](https://www.base64encode.org/)

Log in to your Marketo Account and select “Admin”
![Marketo Webhooks step 1](http://cloud-elements.com/wp-content/uploads/2015/10/MarketoAPI1.png)

Select “Webhooks”
![Marketo Webhooks step 2](http://cloud-elements.com/wp-content/uploads/2015/10/MarketoAPI2.png)

Select “New Webhook”
![Marketo Webhooks step 3](http://cloud-elements.com/wp-content/uploads/2015/10/MarketoAPI3.png)

Name the webhook and give it a description
Input the following URL:
`https://api.cloud-elements.com/elements/api-v2/events/marketo/{INSERT_BASE64_ENCODED_INSTANCE_ID}`
Select “POST” as the Request Type
Input your desired template, example below:

{% assign esc = '{"first_name":{{lead.First Name}},"last_name":{{lead.Last Name}},"email":{{lead.Email Address}}}' %}
```json
{{esc}}
```

Select JSON for “Request Token Encoding” as well as “Response Type”
Select Save
![Marketo Webhooks step 4](http://cloud-elements.com/wp-content/uploads/2015/10/MarketoAPI4.png)

Select “Marketing Activities”
![Marketo Webhooks step 5](http://cloud-elements.com/wp-content/uploads/2015/10/MarketoAPI5.png)

Select “New Smart Campaign”
![Marketo Webhooks step 7](http://cloud-elements.com/wp-content/uploads/2015/10/MarketoAPI7.png)

Select the newly created webhook for the “Campaign Folder”
Name the campaign and give it a description
![Marketo Webhooks step 7](http://cloud-elements.com/wp-content/uploads/2015/10/MarketoAPI8.png)

Select Smart List – “Who”
![Marketo Webhooks step 8](http://cloud-elements.com/wp-content/uploads/2015/10/MarketoAPI9.png)

Drag and drop events you wish to associate with the campaign
![Marketo Webhooks step 9](http://cloud-elements.com/wp-content/uploads/2015/10/MarketoAPI10.png)

Select “Flow”
Select the newly created webhook
![Marketo Webhooks step 10](http://cloud-elements.com/wp-content/uploads/2015/10/MarketoAPI11.png)

Select “Activate”
![Marketo Webhooks step 11](http://cloud-elements.com/wp-content/uploads/2015/10/MarketoAPI12.png)
