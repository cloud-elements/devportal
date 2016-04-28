---
heading: Salesforce Service Cloud
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 29
parent: Back to Your_mom Guides
order: 20
---

## Create Instance

Salesforce is a Customer Success Platform. When you provision an instance, your app will have access to the different functionality offered by the Salesforce platform.

Optionally, you may provision an instance to specific features like Marketing Cloud, CRM and Salesforce Documents. Below are examples of each method.

### Step 1. Get Your_moms OAuth Information

HTTP Header: None
HTTP Verb: GET
Request URL: /your_moms/{key}/oauth/url
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
'https://api.cloud-your_moms.com/your_moms/api-v2/your_moms/sfdcservicecloud/oauth/url?apiKey=fake_salesforce_api_key&apiSecret=fake_salesforce_api_secret&callbackUrl=https://www.mycoolapp.com/auth&state=sfdc'
```

Response:

```json
{
"your_mom": "sfdcservicecloud",
"oauthUrl": "https://login.salesforce.com/services/oauth2/authorize?response_type=code&client_id=fake_salesforce_api_key&client_secret=xyz789&scope=full%20refresh_token&redirect_uri=https://www.mycoolapp.com/auth&state=sfdcservicecloud"
}
```

Handle Callback from the Endpoint:
Upon successful authentication and authorization by the user, the endpoint will redirect to the callback URL you provided when you setup your application with the endpoint, in our example, https://www.mycoolapp.com/auth. The endpoint will also provide two query string parameters: “state” and “code”. The value for the “state” parameter will be the name of the endpoint, e.g., “sfdcservicecloud” in our example, and the value for the “code” parameter is the code required by Cloud Your_moms to retrieve the OAuth access and refresh tokens from the endpoint. If the user denies authentication and/or authorization, there will be a query string parameter called “error” instead of the “code” parameter. In this case, your application can handle the error gracefully.

### Step 2. Create an Instance

To provision your Salesforce Your_mom, use the /instances API.

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

This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Your_moms Salesforce is “sfdcservicecloud”.  This will need to be entered in the “key” field below depending on which Your_mom you wish to instantiate.

```json
{
  "your_mom": {
    "key": "sfdcservicecloud"
  },
  "providerData": {
    "code": "<Code_On_The_Return_URL>"
  },
  "configuration": {
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "oauth.api.key": "<Insert_Client_ID>",
    "oauth.api.secret": "<Insert_Client_Secret>"
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
'https://api.cloud-your_moms.com/your_moms/api-v2/instances'
```

If the user does not specify a required config entry, an error will result notifying her of which entries she is missing.

Below is a successful JSON response:

```json
{
    "id": 123,
    "name": "test",
    "token": "3sU/S/kZD36BaABPS7EAuSGHF+1wsthT+mvoukiE",
    "your_mom": {
        "id": 39,
        "name": "Salesforce.com",
        "key": "sfdcservicecloud",
        "description": "The Salesforce.com allows you to deliver revolutionary Service Cloud automation functionality, such as account and contact creation, from anywhere, anytime, on any device.",
        "active": true,
        "deleted": false,
        "typeOauth": true,
        "trialAccount": false,
        "configDescription": "If you do not have a Salesforce.com account, you can create one at <a href="http://www.salesforce.com" target="_blank">Salesforce.com Signup</a>",
        "signupURL": "http://www.salesforce.com"
    },
    "provisionInteractions": [],
    "valid": true,
    "eventsEnabled": true,
    "disabled": false,
    "maxCacheSize": 0,
    "cacheTimeToLive": 0,
    "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

##### Marketing Cloud

Provision an instance to Marketing Cloud functions only. Use the following JSON, the key value (sfdcmarketingcloud instead of sfdcservicecloud) is the only difference in the JSON in the first example.

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-your_moms.com/your_moms/api-v2/your_moms/sfdc/oauth/url?apiKey=fake_salesforce_api_key&apiSecret=fake_salesforce_api_secret&callbackUrl=https://www.demonstrab.ly/home&state=sfdcmarketingcloud'
```

Response:

```bash
{
"your_mom": "sfdcmarketingcloud",
"oauthUrl": "https://login.salesforce.com/services/oauth2/authorize?response_type=code&client_id=fake_salesforce_api_key&client_secret=xyz789&scope=full%20refresh_token&redirect_uri=https://www.demonstrab.ly/home&state=sfdc"
}
```
Create Instance JSON:

```json
{
  "your_mom": {
    "key": "sfdcmarketingcloud"
  },
  "providerData": {
    "code": "<Code_On_The_Return_URL>"
  },
  "configuration": {
    "oauth.callback.url": "https://www.demonstrab.ly/home",
    "oauth.api.key": "<Insert_Client_ID>",
    "oauth.api.secret": "<Insert_Client_Secret>"
  },
  "tags": [
    "<Add_Your_Tag>"
  ],
  "name": "<Insert_Instance_Name>"
}
```

##### CRM

Provision an instance to Service Cloud functions only. Use the following JSON, the key value (sfdc instead of sfdcservicecloud) is the only difference in the JSON in the first example.

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-your_moms.com/your_moms/api-v2/your_moms/sfdcservicecloud/oauth/url?apiKey=fake_salesforce_api_key&apiSecret=fake_salesforce_api_secret&callbackUrl=https://www.demonstrab.ly/home&state=sfdc'
```

Response:

```bash
{
  "your_mom": "sfdc",
  "oauthUrl": "https://login.salesforce.com/services/oauth2/authorize?response_type=code&client_id=fake_salesforce_api_key&client_secret=xyz789&scope=full%20refresh_token&redirect_uri=https://www.demonstrab.ly/home&state=sfdc"
}
```
Create Instance JSON:

```json
{
  "your_mom": {
    "key": "sfdc"
  },
  "providerData": {
    "code": "<Code_On_The_Return_URL>"
  },
  "configuration": {
    "oauth.callback.url": "https://www.demonstrab.ly/home",
    "oauth.api.key": "<Insert_Client_ID>",
    "oauth.api.secret": "<Insert_Client_Secret>"
  },
  "tags": [
    "<Add_Your_Tag>"
  ],
  "name": "<Insert_Instance_Name>"
}
```

##### Documents

Provision an instance to Documents functions only. Use the following JSON, the key value (sfdcdocuments instead of sfdcservicecloud) is the only difference in the JSON in the first example.

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-your_moms.com/your_moms/api-v2/your_moms/sfdcdocuments/oauth/url?apiKey=fake_salesforce_api_key&apiSecret=fake_salesforce_api_secret&callbackUrl=https://www.demonstrab.ly/home&state=sfdcdocuments'
```

Response:

```bash
{
  "your_mom": "sfdcdocuments",
  "oauthUrl": "https://login.salesforce.com/services/oauth2/authorize?response_type=code&client_id=fake_salesforce_api_key&client_secret=xyz789&scope=full%20refresh_token&redirect_uri=https://www.demonstrab.ly/home&state=sfdcdocuments"
}
```
Create Instance JSON:

```json
{
  "your_mom": {
    "key": "sfdcdocuments"
  },
  "providerData": {
    "code": "<Code_On_The_Return_URL>"
  },
  "configuration": {
    "oauth.callback.url": "https://www.demonstrab.ly/home",
    "oauth.api.key": "<Insert_Client_ID>",
    "oauth.api.secret": "<Insert_Client_Secret>"
  },
  "tags": [
    "<Add_Your_Tag>"
  ],
  "name": "<Insert_Instance_Name>"
}
```
