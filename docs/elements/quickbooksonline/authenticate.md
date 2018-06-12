---
heading: QuickBooks Online
seo: Authenticate | QuickBooks Online | Cloud Elements API Docs
title: Authenticate
description: Authenticate an element instance with the API provider
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 39
elementKey: quickbooks
apiKey: Client ID #In OAuth2 this is what the provider calls the apiKey, like Client ID, Consumer Key, API Key, or just Key
apiSecret: Client Secret #In OAuth2 this is what the provider calls the apiSecret, like Client Secret, Consumer Secret, API Secret, or just Secret
callbackURL: Redirect URI #In OAuth2 this is what the provider calls the callbackURL, like Redirect URL, App URL, or just Callback URL
parent: Back to Element Guides
order: 20
---

# Authenticate with {{page.heading}}

You can authenticate with QuickBooks using either [OAuth 2.0 authentication](#authenticate-with-oauth-2-0) or [OAuth 1.0 authentication](#authenticate-with-oauth-1-0). OAuth 2.0 is available for new apps created after July 17, 2017, while OAuth 1.0 is available for apps created before then. See [Intuit's documentation](https://developer.intuit.com/docs/0100_quickbooks_online/0100_essentials/000500_authentication_and_authorization/connect_from_within_your_app) about OAuth 2.0 for more details.

For apps created prior to July 2017, QuickBooks authentication also supports [Token Based authentication](#token-based-authentication).

{% include callout.html content="<strong>On this page</strong></br><a href=#authenticate-with-oauth-2-0>Authenticate with OAuth 2.0</a></br><a href=#authenticate-with-oauth-1-0>Authenticate with OAuth 1.0</a>" type="info" %}

## Authenticate with OAuth 2.0

You can authenticate with {{page.heading}} to create your own instance of the {{page.heading}} element only through APIs. Once authenticated, you can use the element instance to access the different functionality offered by the {{page.heading}} platform.

{% include note.html content="You can connect to sandbox accounts by specifying <code> use_sandbox</code> as <code>true</code> when you authenticate an element instance.  " %}

Authenticating through API follows a multi-step OAuth 2.0 process that involves:

{% include workflow.html displayNames="Redirect URL,Authenticate Users,Authenticate Instance" links="#getting-a-redirect-url,#authenticating-users-and-receiving-the-authorization-grant-code,#authenticating-the-element-instance" active=" "%}

* [Getting a redirect URL](#getting-a-redirect-url). This URL sends users to the vendor to log in to their account.
* [Authenticating users and receiving the authorization grant code](#authenticating-users-and-receiving-the-authorization-grant-code). After the user logs in, the vendor makes a callback to the specified url with an authorization grant code.
* [Authenticating the element instance](#authenticating-the-element-instance). Using the authorization code from the vendor, authenticate with the vendor to create an element instance at Cloud Elements.

### Getting a Redirect URL

{% include workflow.html displayNames="Redirect URL,Authenticate Users,Authenticate Instance" links="#getting-a-redirect-url,#authenticating-users-and-receiving-the-authorization-grant-code,#authenticating-the-element-instance" active="Redirect URL"%}

Use the following API call to request a redirect URL where the user can authenticate with the service provider. Replace `{keyOrId}` with the element key, `{{page.elementKey}}`. Note the `scope` and `authentication.type` parameters that are unique to QuickBooks Online.

```bash
curl -X GET /elements/{keyOrId}/oauth/url?apiKey=<api_key>&apiSecret=<api_secret>&callbackUrl=<url>&siteAddress=<url>&scope=com.intuit.quickbooks.accounting&authentication.type=oauth2
```

#### Query Parameters

| Query Parameter | Description   |
| :------------- | :------------- |
| apiKey |  {{site.data.glossary.element-auth-api-key}} This is the **{{page.apiKey}}** that you recorded in [API Provider Setup section](setup.html). |
| apiSecret |    {{site.data.glossary.element-auth-api-secret}} This is the **{{page.apiSecret}}** that you recorded in [API Provider Setup section](setup.html).  |
| callbackUrl |   {{site.data.glossary.element-auth-oauth-callback}} This is the **{{page.callbackURL}}** that you recorded in [API Provider Setup section](setup.html)   |
| scope   | The scope provided is required to access data in QuickBooks online.  |
| authentication.type   | Identifies that you are authenticating with OAuth 2.0.  |

#### Example cURL

```bash
curl -X GET \
  'https://api.cloud-elements.com/elements/api-v2/elements/{{page.elementKey}}/oauth/url?apiKey=fake_api_key&apiSecret=fake_api_secret&callbackUrl=https://www.mycoolapp.com/auth&scope=com.intuit.quickbooks.accounting&authentication.type=oauth2' \
```

#### Example Response

Use the `oauthUrl` in the response to allow users to authenticate with the vendor.

```json
{
"oauthUrl": "https://appcenter.intuit.com/connect/oauth2?scope=com.intuit.quickbooks.accounting&response_type=code&redirect_uri=https%3A%2F%2Fhttpbin.org%2Fget&state=quickbooks&client_id=Q0rGWmlUp1UFMHPqaZ8nwjyiA5linuQ23RmjsMPHL658osSGlk",
"element": "{{page.elementKey}}"
}
```

### Authenticating Users and Receiving the Authorization Grant Code

{% include workflow.html displayNames="Redirect URL,Authenticate Users,Authenticate Instance" links="#getting-a-redirect-url,#authenticating-users-and-receiving-the-authorization-grant-code,#authenticating-the-element-instance" active="Authenticate Users"%}

Provide the response from the previous step to the users. After they authenticate, {{page.heading}} provides the following information in the response:

```json
{
    "code": "Q011xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "realmId": "1231xxxxxxxxxxxxx",
    "state": "quickbooks"
  }
  ```

| Response Parameter | Description   |
| :------------- | :------------- |
| code | {{site.data.glossary.element-auth-grant-code}} |
| realmID   | An identifier unique to QuickBooks that identifies the company that the authenticated instance is connected to.  |
| state | {{site.data.glossary.element-auth-state}} (`{{page.elementKey}}`) . |

{% include note.html content="If the user denies authentication and/or authorization, there will be a query string parameter called <code>error</code> instead of the <code>code</code> parameter. In this case, your application can handle the error gracefully." %}

### Authenticating the Element Instance

{% include workflow.html displayNames="Redirect URL,Authenticate Users,Authenticate Instance" links="#getting-a-redirect-url,#authenticating-users-and-receiving-the-authorization-grant-code,#authenticating-the-element-instance" active="Authenticate Instance"%}

Use the `/instances` endpoint to authenticate with {{page.heading}} and create an element instance. If you are configuring events, see the [Events section](events.html).

{% include note.html content="The endpoint returns an element instance token and id upon successful completion. Retain the token and id for all subsequent requests involving this element instance.  " %}

To authenticate an element instance:

1. Construct a JSON body as shown below (see [Parameters](#parameters)):


    ```json
    {
      "element": {
        "key": "{{page.elementKey}}"
      },
      "providerData": {
        "code": "<AUTHORIZATION_GRANT_CODE>",
        "realmId": "<REALMID_FROM_PREVIOUS_STEP>"
      },
      "configuration": {
        "oauth.callback.url": "<CALLBACK_URL>",
        "oauth.api.key": "<CONSUMER_KEY>",
      	"oauth.api.secret": "<CONSUMER_SECRET>",
        "quickbooks.minorversion":"<VERSION_NUMBER>",
        "authentication.type" : "oauth2",
        "use_sandbox": "<true_or_false>",
        "scope" : "com.intuit.quickbooks.accounting openid profile email phone address"
      },
      "tags": [
        "<Add_Your_Tag>"
      ],
      "name": "<INSTANCE_NAME>"
    }
    ```

1. Call the following, including the JSON body you constructed in the previous step:

        POST /instances

    {% include note.html content="Make sure that you include the User and Organization keys in the header. See <a href=index.html#authenticating-with-cloud-elements>the Overview</a> for details. " %}

1. Locate the `token` and `id` in the response and save them for all future requests using the element instance.

#### Example cURL

```bash
curl -X POST \
  https://api.cloud-elements.com/elements/api-v2/instances \
  -H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
  -H 'content-type: application/json' \
  -d '{
  "element": {
    "key": "{{page.elementKey}}"
  },
  "providerData": {
    "code": "xxxxxxxxxxxxxxxxxxxxxxx",
    "realmId": "xxxxxxxxxxxxxxxxx"
  },
  "configuration": {
    "oauth.callback.url": "https;//mycoolapp.com",
    "oauth.api.key": "xxxxxxxxxxxxxxxxxx",
    "oauth.api.secret": "xxxxxxxxxxxxxxxxxxxxxxxx",
    "quickbooks.minorversion":"23",
    "authentication.type" : "oauth2",
    "use_sandbox": "true",
    "scope" : "com.intuit.quickbooks.accounting openid profile email phone address"
    },
  "tags": [
    "Docs"
  ],
  "name": "API Instance"
}'
```
## Parameters

API parameters not shown in {{site.console}} are in `code formatting`.

{% include note.html content="Event related parameters are described in <a href=events.html>Events</a>." %}

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| `key` | The element key.<br>{{page.elementKey}}  | string  |
| `code` | {{site.data.glossary.element-auth-grant-code}} | string |
| `realmId`   | The realmId returned upon user authorization.An identifier unique to QuickBooks that identifies the company that the authenticated instance is connected to  | string  |
|  `name` |  {{site.data.glossary.element-auth-name}}  | string  |
| `oauth.api.key` |  {{site.data.glossary.element-auth-api-key}} This is the **{{page.apiKey}}** that you noted in [API Provider Setup](setup.html). |  string |
| `oauth.api.secret` | {{site.data.glossary.element-auth-api-secret}} This is the **{{page.apiSecret}}** that you noted in [API Provider Setup](setup.html). | string |
| `oauth.callback.url` | {{site.data.glossary.element-auth-api-key}} This is the **{{page.callbackURL}}** that you noted in [API Provider Setup](setup.html).  | string |
|  `authentication.type`  |  Identifies the authentication type to use with the request. |  string |
| `quickbooks.minorversion`   | A specific version of the API other than the generally available version. For more information, see [Minor Versions in the QuickBooks docs](https://developer.intuit.com/docs/00_quickbooks_online/2_build/20_explore_the_quickbooks_online_api/80_minor_versions).  | STRING  |
| scope   |  Identifies the QuickBooks API access that your application is requesting. | string  |
| `tags` | {{site.data.glossary.element-auth-tags}} | string |

## Example Response for an OAuth 2.0 Authenticated Element Instance

In this example, the instance ID is `12345` and the instance token starts with "ABC/D...". The actual values returned to you will be unique: make sure you save them for future requests to this new instance.

```json
{
  "id": 12345,
  "name": "API Instance",
  "createdDate": "2017-08-07T18:46:38Z",
  "token": "ABC/Dxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "element": {
      "id": 39,
      "name": "QuickBooks Online",
      "hookName": "QuickBooksOnline",
      "key": "quickbooks",
      "description": "Add a QuickBooks Online Instance to connect your existing QuickBooks Online account to the Finance Hub, allowing you to manage your customers, employees, invoices, purchase orders etc. across multiple Finance Elements. You will need your QuickBooks Online account information to add an instance.",
      "image": "elements/provider_quickbooks.png",
      "active": true,
      "deleted": false,
      "typeOauth": true,
      "trialAccount": false,
      "configDescription": "If you do not have an QuickBooks account, you can create one at <a href=\"http://quickbooks.intuit.com/signup/\" target=\"_blank\">QuickBooks Signup</a>",
      "signupURL": "http://quickbooks.intuit.com/signup/",
      "defaultTransformations": [ ],
      "objectMetadata": [ ],
      "transformationsEnabled": true,
      "bulkDownloadEnabled": true,
      "bulkUploadEnabled": true,
      "cloneable": false,
      "extendable": true,
      "beta": false,
      "authentication": {
          "type": "oauth1"
      },
      "extended": false,
      "hub": "finance",
      "protocolType": "http",
      "parameters": [],
      "private": false
  },
  "elementId": 39,
  "tags": [
      "Docs"
  ],
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "cacheTimeToLive": 0,
  "configuration": {    },
  "eventsEnabled": false,
  "traceLoggingEnabled": false,
  "cachingEnabled": false,
  "externalAuthentication": "none",
  "user": {
        "id": 12345
      }
}
```

## Authenticate with OAuth 1.0

You can authenticate with {{page.heading}} to create your own instance of the {{page.heading}} in the UI or through APIs. Once authenticated, you can use the element instance to access the different functionality offered by the {{page.heading}} platform.

### Authenticate Through the UI

Use the UI to authenticate with {{page.heading}} and create an element instance. {{page.heading}} authentication follows the typical OAuth 1 framework and you will need to sign in to {{page.heading}} as part of the process.

If you are configuring events, see the [Events section](events.html).

To authenticate an element instance:

1. Sign in to Cloud Elements, and then search for {{page.heading}} in our Elements Catalog.
![Search](/assets/img/elements/element-search2.png)
4. Hover over the element card, and then click **Authenticate**.
![Create Instance](/assets/img/elements/authenticate-instance.gif)
5. Enter a name for the element instance.
7. Click **Create Instance**.
8. Provide your QuickBooks Online, and then allow the connection.

After successfully authenticating, we give you several options for next steps. [Make requests using the API docs](https://docs.cloud-elements.com/home/view-element-api-docs) associated with the instance, [map the instance to a virtual data resource](https://docs.cloud-elements.com/home/common-object), or [use it in a formula template](https://docs.cloud-elements.com/home/formula-template).

### Authenticate Through API

Authenticating through API is a multi-step process that involves:

* [Getting an Oauth token](#getting-an-oauth-token). This call requests a token needed to complete the authentication process.
* [Getting a redirect URL](#getting-a-redirect-url). This URL sends users to the vendor to log in to their account.
* [Authenticating users and receiving the authorization grant code](#authenticating-users-and-receiving-the-authorization-grant-code). After the user logs in, the vendor makes a callback to the specified url with an authorization grant code.
* [Authenticating the element instance](#authenticating-the-element-instance). Using the authorization code from the vendor, authenticate with the vendor to create an element instance at Cloud Elements.

#### Getting an OAuth Token
Use the following API call to request an Oauth Token. Replace 'keyOrId' with the element key, `{{page.elementKey}}`. You will also need to replace 'api_key', 'api_secret' and 'callbackUrl'.

```bash
GET /elements/{keyOrId}/oauth/token?apiKey=<api_key>&apiSecret=<api_secret>&callbackUrl=<url>
```

##### Query Parameters

| Query Parameter | Description   |
| :------------- | :------------- |
| apiKey | The key obtained from registering your app with the provider. This is the **Consumer Key** that you recorded in [API Provider Setup section](setup.html).  |
| apiSecret |  The secret obtained from registering your app with the provider.  This is the **Consumer Secret** that you recorded in [API Provider Setup section](setup.html).   |
| callbackUrl | The URL that will receive the code from the vendor to be used to create an element instance. This is the **Callback URL** that you noted at the end of the [Endpoint Setup section](setup.html).  |

##### Example cURL
```
curl -X GET
-H 'Content-Type: application/json'
https://api.cloud-elements.com/elements/api-v2/elements/{keyOrId}/oauth/token?apiKey=<api_key>&apiSecret=<api_secret>&callbackUrl=<url>'
```

##### Example Response

```json
{
  "secret": "xxxxxx",
  "token": "xxxxxxx"
}
```
You will use the token returned on this call to get the redirect URL and to provison the instance. The secret returned will be used as the oauth.api.user.secret.

#### Getting a Redirect URL

Use the following API call to request a redirect URL where the user can authenticate with the API provider. Replace `{keyOrId}` with the element key, `{{page.elementKey}}`.

```bash
GET /elements/{keyOrId}/oauth/url?apiKey=<api_key>&apiSecret=<api_secret>&callbackUrl=<url>&requestToken=insert_fake_request_token&state=quickbooks
```

##### Query Parameters

| Query Parameter | Description   |
| :------------- | :------------- |
| apiKey | The key obtained from registering your app with the provider. This is the **Consumer Key** that you recorded in [API Provider Setup section](setup.html).  |
| apiSecret |  The secret obtained from registering your app with the provider.  This is the **Consumer Secret** that you recorded in [API Provider Setup section](setup.html).   |
| callbackUrl | The URL that will receive the code from the vendor to be used to create an element instance. This is the **Callback URL** that you noted at the end of the [Endpoint Setup section](setup.html).  |
| requestToken | The token returned from the previous step.

##### Example cURL

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/elements/{{page.elementKey}}/oauth/url?apiKey=fake_api_key&apiSecret=fake_api_secret&callbackUrl=https://www.mycoolapp.com/auth&state={{page.elementKey}}'
```

##### Example Response

Use the `oauthUrl` in the response to allow users to authenticate with the vendor.

```json
{
"element": "{{page.elementKey}}",
"oauthUrl": "https://appcenter.intuit.com/Connect/Begin?oauth_token=<fake_token>&oauth_callback=<fake_callback>%3Fstate%3D{{page.elementKey}}"
}
```

#### Authenticating Users and Receiving the Authorization Grant Code

Provide the response from the previous step to the users. After they authenticate, {{page.heading}} provides the following information in the response:

* oauth_verifier
* realmId

| Response Parameter | Description   |
| :------------- | :------------- |
| oauth_verifier | The Authorization Grant Code required by Cloud Elements to retrieve the OAuth access and refresh tokens from the endpoint.|
| realmID | The unique identifier for the authorized QuickBooks Online company. |
| dataSource | This value determines what data source should be used for the connection. |

{% include note.html content="If the user denies authentication and/or authorization, there will be a query string parameter called <code>error</code> instead of the <code>code</code> parameter. In this case, your application can handle the error gracefully." %}

#### Authenticating the Element Instance

Use the `/instances` endpoint to authenticate with QuickBooks and create an element instance. If you are configuring events, see the [Events section](events.html).

{% include note.html content="The endpoint returns an Element token upon successful completion. Retain the token for all subsequent requests involving this element instance.  " %}

To create an element instance:

1. Construct a JSON body as shown below (see [Parameters](#parameters)):

    ```json
    {
      "element": {
        "key": "{{page.elementKey}}"
      },
      "providerData": {
        "oauth_token": "<OAUTH_TOKEN>",
        "realmId": "<REALMID>",
        "oauth_verifier": "<OAUTH_VERIFIER>",
        "secret": "<OAUTH_USER_SECRET>",
        "state": "quickbooks",
        "dataSource": "<dataSource>"
      },
      "configuration": {
        "oauth.callback.url": "<CALLBACK_URL>",
        "oauth.api.key": "<CONSUMER_KEY>",
      	"oauth.api.secret": "<CONSUMER_SECRET>",
        "filter.response.nulls": true
      },
      "tags": [
        "<Add_Your_Tag>"
      ],
      "name": "<INSTANCE_NAME>"
    }
    ```

1. Call the following, including the JSON body you constructed in the previous step:

        POST /instances

    {% include note.html content="Make sure that you include the User and Organization keys in the header. See <a href=index.html#authenticating-with-cloud-elements>the Overview</a> for details. " %}

1. Locate the `token` and `id` in the response and save them for all future requests using the element instance.

##### Example cURL

```bash
curl -X POST \
  https://api.cloud-elements.com/elements/api-v2/instances \
  -H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
  -H 'content-type: application/json' \
  -d '{
  "element": {
    "key": "{{page.elementKey}}"
  },
  "providerData": {
    "oauth_token": "<OAUTH_TOKEN>",
    "realmId": "<REALMID>",
    "oauth_verifier": "<OAUTH_VERIFIER>",
    "secret": "<OAUTH_USER_SECRET>",
    "state": "quickbooks",
    "dataSource": "QBO"
  },
  "configuration": {
    "oauth.callback.url": "<CALLBACK_URL>",
    "oauth.api.key": "<CONSUMER_KEY>",
    "oauth.api.secret": "<CONSUMER_SECRET>"
  },
  "tags": [
    "For Docs",
    "tag 2"
  ],
  "name": "QBO_Instance"
}'
```
##### Parameters

API parameters not shown in {{site.console}} are in `code formatting`.

{% include note.html content="Event related parameters are described in <a href=events.html>Events</a>." %}

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| 'key' | The element key.<br>{{page.elementKey}}  | string  |
|  Name</br>`name` |  The name for the element instance created during authentication.   | Body  |
| `oauth_verifier` | A verification code generated by Intuit that an App is supposed to pass back during the get_access_token step. |
| `oauth_token` | The token retrieve in the [Getting an Oauth Token step](#getting-an-oauth-token). |
| `secret` | A secret to establish the ownership of the token. |
| `realmId` | An identifier unique to QuickBooks that identifies the company that the authenticated instance is connected to. |
| `state` | This should always be {{page.elementKey}} |
| `dataSource` | This value determines what data source should be used for the connection. It is returned after authentication. |
| `oauth.callback.url` | The Callback URL from QuickBooks. This is the Callback URL that you noted at the end of the [Endpoint Setup section](setup.html).  |
| `oauth.api.key` | The Consumer Key from QuickBooks. This is the Consumer Key that you noted at the end of the [Endpoint Setup section](setup.html) |  string |
| `oauth.api.secret` | The Consumer Secret from QuickBooks. This is the Consumer Secret that you noted at the end of the [Endpoint Setup section](setup.html)| string |
| Filter null values from the response </br>`filter.response.nulls` | *Optional*. Determines if null values in the response JSON should be filtered from the response. Yes or `true` indicates that Cloud Elements will filter null values. </br>Default: `true`.  | boolean |
| tags | *Optional*. User-defined tags to further identify the instance. | string |

##### Example Response

```json
{
    "id": 123,
    "name": "test",
    "token": "3sU/S/kZD36BaABPS7EAuSGHF+1wsthT+mvoukiE",
    "element": {
        "id": 39,
        "name": "QuickBooks Online",
        "key": "quickbooks",
        "description": "Add a QuickBooks Online Instance to connect your existing QuickBooks Online account to the Finance Hub, allowing you to manage your customers, employees, invoices, purchase orders etc. across multiple Finance Elements. You will need your QuickBooks Online account information to add an instance.",
        "active": true,
        "deleted": false,
        "typeOauth": true,
        "trialAccount": false,
        "configDescription": "If you do not have an QuickBooks account, you can create one at <a href=\"http://quickbooks.intuit.com/signup/\" target=\"_blank\">QuickBooks Signup</a>",
        "signupURL": "http://quickbooks.intuit.com/signup/"
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

## Token Based Authentication

The QuickBooks Online element also allows for token based authentication. To provision an instance using this method, you are still required to have all of the OAuth information ahead of time.

### Example cURL

```bash
curl -X POST \
  https://api.cloud-elements.com/elements/api-v2/instances \
  -H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
  -H 'content-type: application/json' \
  -d '{
  "element": {
    "key": "quickbooks"
  },
  "configuration": {
    "oauth.callback.url":"<INSERT_CALLBACK_URL>",
    "quickbooks.datasource": "<INSERT_DATASOURCE>",
    "oauth.user.refresh_interval": "<INSERT_REFRESH_INTERVAL>",
    "quickbooks.realm.id" : "<INSERT_REALM_ID>",
    "oauth.user.token":"<INSERT_USER_TOKEN>",
    "oauth.user.token.secret":"<INSERT_USER_TOKEN_SECRET>",
    "oauth.api.key": "<INSERT_API_KEY>",
    "oauth.api.secret": "<INSERT_API_SECRET>"
  },
  "tags": [
    "QBO Token"
  ],
  "name": "QBO Token",
  "externalAuthentication": "initial"
}'
```

### Parameters for Token Based Authentication

API parameters not shown in {{site.console}} are in `code formatting`.

{% include note.html content="Event related parameters are described in <a href=events.html>Events</a>." %}

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| 'key' | The element key.<br>{{page.elementKey}}  | string  |
|  Name</br>`name` |  The name for the element instance created during authentication.   | Body  |
| `"oauth.user.refresh_interval"` | In seconds, the amount of time that should pass before a refresh needs to take place. The default for QuickBooks Online is 151 days or 13046400. |
| `oauth.user.token` | The token retrieve in the [Getting an Oauth Token step](#getting-an-oauth-token). |
| `oauth.user.token.secret` | A secret to establish the ownership of the token. |
| `quickbooks.realm.id` | The unique Identifier for the authorized QuickBooks company. |
| `state` | This should always be {{page.elementKey}} |
| `quickbooks.dataSource` | This value determines what data source should be used for the connection. |
| `oauth.callback.url` | The Callback URL from QuickBooks. This is the Callback URL that you noted at the end of the [Endpoint Setup section](setup.html).  |
| `oauth.api.key` | The Consumer Key from QuickBooks. This is the Consumer Key that you noted at the end of the [Endpoint Setup section](setup.html) |  string |
| `oauth.api.secret` | The Consumer Secret from QuickBooks. This is the Consumer Secret that you noted at the end of the [Endpoint Setup section](setup.html)| string |
| Filter null values from the response </br>`filter.response.nulls` | *Optional*. Determines if null values in the response JSON should be filtered from the response. Yes or `true` indicates that Cloud Elements will filter null values. </br>Default: `true`.  | boolean |
| tags | *Optional*. User-defined tags to further identify the instance. | string |

### Example Response

```json
{
    "id": 123,
    "name": "test",
    "token": "3sU/S/kZD36BaABPS7EAuSGHF+1wsthT+mvoukiE",
    "element": {
        "id": 39,
        "name": "QuickBooks Online",
        "key": "quickbooks",
        "description": "Add a QuickBooks Online Instance to connect your existing QuickBooks Online account to the Finance Hub, allowing you to manage your customers, employees, invoices, purchase orders etc. across multiple Finance Elements. You will need your QuickBooks Online account information to add an instance.",
        "active": true,
        "deleted": false,
        "typeOauth": true,
        "trialAccount": false,
        "configDescription": "If you do not have an QuickBooks account, you can create one at <a href=\"http://quickbooks.intuit.com/signup/\" target=\"_blank\">QuickBooks Signup</a>",
        "signupURL": "http://quickbooks.intuit.com/signup/"
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
