---
heading: OAuth Proxy
seo: OAuth Proxy Documentation | Cloud Elements API Docs
title: OAuth Proxy Documentation
description: View the OAuth Proxy Guide with screen shots and setup instructions.
layout: sidebarleft
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 4
sitemap: false
redirect_from:
  - /docs/platform/oauth-proxy/
---

## OAuth Proxy (OPTIONAL Feature)

The OAuth Proxy feature gives you the capability to have multiple environments, such as development, QA, etc, with one endpoint application. For example some vendors only allow one callback URL per application. The proxy will allow for the same callback URL to be used with multiple application endpoints. You would then use the proxy address as the Callback URL instead of your own Callback URL. This permits multiple endpoint applications to one callback URL.

We offer two forms of the proxy.
Standard OAuth Proxy Configuration: requires an API key and secret to be passed as URL parameters or in the JSON payload needed to create an instance.
OAuth Proxy with API Key and Secret Management: option to input your API key and secret during the proxy creation and we will take care of the rest during instance creation.

Currently, an OAuth Proxy can only be created from the Cloud Elements Console. The OAuth Proxy is an __OPTIONAL__ feature. This feature is NOT required to use Cloud Elements Service. Instructions on how to set up the Proxy are below.

How to use the OAuth Proxy:

Via a web browser go to: [https://console.cloud-elements.com/elements/jsp/login.jsp](https://console.cloud-elements.com/elements/jsp/login.jsp) and log in to your Cloud Elements account.

Select “OAUTH Proxy”

Click “Add Proxy”
![Cloud Elements OAuth Proxy 1](http://cloud-elements.com/wp-content/uploads/2015/06/OAuthProxyV201.png)

Name the Application

Click “Add”
![Cloud Elements OAuth Proxy 2](http://cloud-elements.com/wp-content/uploads/2015/04/OAuthProxyKey1.jpg)

A proxy URL will be created. Please copy this URL as it will be used as your Callback URL to the endpoint Application.
![Cloud Elements OAuth Proxy 3](http://cloud-elements.com/wp-content/uploads/2015/06/OAuthProxyV203.png)

Navigate to your connected apps and input the proxy URL into the redirect URI or URL field. Box will be used for this demonstration
![Cloud Elements OAuth Proxy 4](http://cloud-elements.com/wp-content/uploads/2015/06/OAuthProxyV204.png)

Enter your callback URLs of your applications.

Click “Add URL”
![Cloud Elements OAuth Proxy 5](http://cloud-elements.com/wp-content/uploads/2015/06/OAuthProxyV205.png)

Cloud Elements OAuth Proxy functionality supports domain regular expressions.
For example, if you have a number of different URLs to your apps, you may use a domain regular expression to minimize the number of URLs.
Example URLs:
`https://www.myapp.com`
`https://www.myapp.denver.ds`
`https://www.myapp.austin.ds`
`https://www.prodapp.com`
`https://www.prodapp.alpha.ds`
`https://www.prodapp.beta.ds`

Example Regular Expressions:
`https\:\/\/www\.(myapp|prodapp)\.com`
`https\:\/\/www\.(myapp|prodapp)(\.[a-zA-Z0-9]*\.ds)`
![Cloud Elements OAuth Proxy 6](http://cloud-elements.com/wp-content/uploads/2015/06/OAuthProxyV206.png)

## API Calls

__Performing a GET__

While calling the `GET /elements/{keyOrId}/oauth/url` to get the provider `URL`, please make sure the fields below are included in your parameters:
`isOauthProxy` – Should be set to true
`oauthProxyName` – Name of the proxy e.g. “TestApp”
`state` – should be the application callback URL which was provided during the creation of the Proxy

From here the OAuth Provisioning Process would follow the same instructions as shown in our Provisioning Instructions below.

The Callback URL retrieved by the initial `GET /elements/{keyOrId}/oauth/url` will be the OAuth Proxy URL that we created via the steps outlined above.

## Create Instance

Box is a Cloud Storage Platform. When you provision an instance, your app will have access to the different functionality offered by the Box platform.

### Step 1. Get Elements OAuth Information

HTTP Header: None
HTTP Verb: GET
Request URL: /elements/{keyOrId}/oauth/url
Request Body: None
Query Parameters:

* __key__ - `box`
* __apiKey__ - Client ID
* __apiSecret__ – Client Secret
* __callbackUrl__ – OAuth Proxy URL
* __isOauthProxy__ - `true`
* __oauthProxyName__ - Name of the proxy e.g. "TestApp"

Description: The result of this API invocation is an OAuth redirect URL from the endpoint. Your application should now redirect to this URL, which in turn will present the OAuth authentication and authorization page to the user. When the provided callback URL is executed, a code value will be returned, which is required for the Create Instance API.

Example cURL Command:

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/elements/box/oauth/url?isOauthProxy=true&oauthProxyName=TestApp&apiKey=fake_box_client_id&apiSecret=fake_box_client_secret&callbackUrl=insert_oauth_proxy_url&state=https://www.your_call_back_url&callbackProxy=true'
```

Response:

```javascript
{
  "oauthUrl": "https://www.box.com/api/oauth2/authorize?response_type=code&client_id=INSERT_BOX_CLIENT_ID&redirect_uri=https%3A%2F%2Finsert_oauth_proxy_url&state=cloud_elements_random_key",
  "element": "box"
}
```

Handle Callback from the Endpoint:
Upon successful authentication and authorization by the user, the endpoint will redirect to the callback URL you provided when you setup your application with the endpoint, in our example, https://www.mycoolapp.com/auth. The endpoint will also provide two query string parameters: “state” and “code”. The value for the “state” parameter will be the name of the endpoint, e.g., “box” in our example, and the value for the “code” parameter is the code required by Cloud Elements to retrieve the OAuth access and refresh tokens from the endpoint. If the user denies authentication and/or authorization, there will be a query string parameter called “error” instead of the “code” parameter. In this case, your application can handle the error gracefully.

### Step 2. Create an Instance

To provision your Box Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Box is “box”.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```javascript
{
  "element": {
    "key": "box"
  },
  "providerData": {
    "code": "Code on Return the URL"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_BOX_CLIENT_ID>",
    "oauth.api.secret": "<INSERT_BOX_CLIENT_SECRET>",
    "oauth.callback.url": "<INSERT_OAUTH_PROXY_URL>"
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
      "name": "Box",
      "key": "box",
      "description": "Add a Box Instance to connect your existing Box account to the Documents Hub, allowing you to manage files and folders. You will need your Box account information to add an instance.",
      "image": "elements/provider_box.png",
      "active": true,
      "deleted": false,
      "typeOauth": true,
      "trialAccount": false,
      "existingAccountDescription": "Give your application access to your existing
   Box accountEnter your credentials and details for your Box Account",
      "configDescription": "If you do not have an Box.net account, you can create one at Box.Net Signup",
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

#### OAuth Proxy with API Key and Secret Management

Implementing OAuth Proxy with API Key and Secret Management works the same as the process described above. An API Key and Secret are required when the proxy is set up.  This feature is NOT required to use Cloud Elements Service.  NOTE:  A sub-account user (user under your Organization) will not be able to access the API Key/ API Secret that has been added for OAuth proxy by the super-account user (The Organizational level account).  Instructions on how to set up the Proxy are below.

How to use the OAuth Proxy with API Key and Secret Managment:

Via a web browser go to: [https://console.cloud-elements.com/elements/jsp/login.jsp](https://console.cloud-elements.com/elements/jsp/login.jsp) and log in to your Cloud Elements account.

Select “OAUTH Proxy”

Click “Add Proxy”
![Cloud Elements OAuth Proxy 7](http://cloud-elements.com/wp-content/uploads/2015/06/OAuthProxyV201.png)

Name the Application, input your API Key and API secret

__NOTE:  You have option to add any additional parameters in the Configuration box.  This is only needed if the cloud service requires more than the API Key and Secret during authentication.  For example, HubSpot requires a “PortalID” during authentication.  These additional parameters need to be inputed as a JSON string.__

Click “Add”
![Cloud Elements OAuth Proxy 8](http://cloud-elements.com/wp-content/uploads/2015/04/OAuthProxyKey2.png)

A proxy URL will be created. Please copy this URL as it will be used as your Callback URL to the endpoint Application.
![Cloud Elements OAuth Proxy 9](http://cloud-elements.com/wp-content/uploads/2015/06/OAuthProxyV203.png)

Navigate to your connected apps and input the proxy URL into the redirect URI or URL field. Box will be used for this demonstration.
![Cloud Elements OAuth Proxy 10](http://cloud-elements.com/wp-content/uploads/2015/06/OAuthProxyV204.png)

Enter your callback URLs of your applications.

Click “Add URL”
![Cloud Elements OAuth Proxy 11](http://cloud-elements.com/wp-content/uploads/2015/06/OAuthProxyV205.png)

Cloud Elements OAuth Proxy functionality supports domain regular expressions.
For example, if you have a number of different URLs to your apps, you may use a domain regular expression to minimize the number of URLs.
Example URLs:
`https://www.myapp.com`
`https://www.myapp.denver.ds`
`https://www.myapp.austin.ds`
`https://www.prodapp.com`
`https://www.prodapp.alpha.ds`
`https://www.prodapp.beta.ds`

Example Regular Expressions:
`https\:\/\/www\.(myapp|prodapp)\.com`
`https\:\/\/www\.(myapp|prodapp)(\.[a-zA-Z0-9]*\.ds)`
![Cloud Elements OAuth Proxy 12](http://cloud-elements.com/wp-content/uploads/2015/06/OAuthProxyV206.png)

## API Calls

__Performing a GET__

While calling the `GET /elements/{keyOrId}/oauth/url` to get the provider `URL`, please make sure the fields below are included in your parameters:
`isOauthProxy` – Should be set to true
`oauthProxyName` – Name of the proxy e.g. “TestApp”
`state` – Your application callback URL

From here the OAuth Provisioning Process would follow the same instructions as shown in our Provisioning Instructions below.

The Callback URL retrieved by the initial `GET /elements/{keyOrId}/oauth/url` will be the OAuth Proxy URL that we created via the steps outlined above.

## Create Instance

Box is a Cloud Storage Platform. When you provision an instance, your app will have access to the different functionality offered by the Box platform.

### Step 1. Get Elements OAuth Information

HTTP Header: None
HTTP Verb: GET
Request URL: /elements/{keyOrId}/oauth/url
Request Body: None
Query Parameters:

* __key__ - `box`
* __oauthProxyName__ - Name of the proxy e.g. "TestApp"
* __isOauthProxy__ - `true`
* __state__ - your application callback URL

Description: The result of this API invocation is an OAuth redirect URL from the endpoint. Your application should now redirect to this URL, which in turn will present the OAuth authentication and authorization page to the user. When the provided callback URL is executed, a code value will be returned, which is required for the Create Instance API.

Example cURL Command:

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/elements/box/oauth/url?isOauthProxy=true&oauthProxyName=TestApp&state=https://www.yourcallbackurl.com'
```

Response:

```javascript
{
  "oauthUrl": "https://www.box.com/api/oauth2/authorize?response_type=code&client_id=INSERT_BOX_CLIENT_ID&redirect_uri=https%3A%2F%2Finsert_oauth_proxy_url&state=cloud_elements_random_key",
  "element": "box"
}
```

Handle Callback from the Endpoint:
Upon successful authentication and authorization by the user, the endpoint will redirect to the callback URL you provided when you setup your application with the endpoint, in our example, https://www.mycoolapp.com/auth. The endpoint will also provide two query string parameters: “state” and “code”. The value for the “state” parameter will be the name of the endpoint, e.g., “box” in our example, and the value for the “code” parameter is the code required by Cloud Elements to retrieve the OAuth access and refresh tokens from the endpoint. If the user denies authentication and/or authorization, there will be a query string parameter called “error” instead of the “code” parameter. In this case, your application can handle the error gracefully.

### Step 2. Create an Instance

To provision your Box Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Box is “box”.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```javascript
{
  "element": {
    "key": "box"
  },
  "providerData": {
    "code": "Code on Return the URL"
  },
  "oauthProxy": {
        "isOauthProxy": true,
        "oauthProxyName": "<INSERT_OAUTH_PROXY_NAME>"
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
      "name": "Box",
      "key": "box",
      "description": "Add a Box Instance to connect your existing Box account to the Documents Hub, allowing you to manage files and folders. You will need your Box account information to add an instance.",
      "image": "elements/provider_box.png",
      "active": true,
      "deleted": false,
      "typeOauth": true,
      "trialAccount": false,
      "existingAccountDescription": "Give your application access to your existing
   Box accountEnter your credentials and details for your Box Account",
      "configDescription": "If you do not have an Box.net account, you can create one at Box.Net Signup",
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

If you need any support integrating our APIs, please let us know. You can [email](mailto:support@cloud-elements.com) or give us a call at +1.866.830.3456. We will do our best to get back to you within 24 hours. Your success is our success.
