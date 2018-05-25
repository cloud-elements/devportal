---
heading: Evernote
apiProvider: Evernote # For cases where the API Provider is different than the element name. e;g;, ServiceNow vs. ServiceNow Oauth
seo: Authenticate | Evernote | Cloud Elements API Docs
title: Authenticate
description: Authenticate an element instance with the API provider
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 125
elementKey: evernote
apiKey: Consumer Key #In OAuth2 this is what the provider calls the apiKey, like Client ID, Consumer Key, API Key, or just Key
apiSecret: Consumer Secret #In OAuth2 this is what the provider calls the apiSecret, like Client Secret, Consumer Secret, API Secret, or just Secret
callbackURL: Callback URL Name #In OAuth2 this is what the provider calls the callbackURL, like Redirect URL, App URL, or just Callback URL
parent: Back to Element Guides
order: 20
---

# Authenticate with {{page.apiProvider}}

You can authenticate with {{page.apiProvider}} to create your own instance of the {{page.heading}} element through the UI or through APIs. Once authenticated, you can use the element instance to access the different functionality offered by the {{page.apiProvider}} platform.

{% include callout.html content="<strong>On this page</strong></br><a href=#authenticate-through-the-ui>Authenticate Through the UI</a></br><a href=#authenticate-through-api>Authenticate Through API</a></br><a href=#parameters>Parameters</a></br><a href=#example-response-for-an-authenticated-element-instance>Example Response for an Authenticated Element Instance</a>" type="info" %}

## Authenticate Through the UI

Use the UI to authenticate with {{page.apiProvider}} and create a {{page.heading}} element instance.  During authentication will need to sign in to {{page.apiProvider}} as part of the process.

To authenticate an element instance:

1. Sign in to Cloud Elements, and then search for {{page.heading}} in our Elements Catalog.
![Search](/assets/img/elements/element-search2.png)
4. Hover over the element card, and then click **Authenticate**.
![Create Instance](/assets/img/elements/authenticate-instance.gif)
5. Enter a name for the element instance.
6. In **Evernote OAuth API Key** and **Evernote OAuth API Secret**, enter the **{{page.apiKey}}** and **{{page.apiSecret}}** that you recorded in [API Provider Setup](setup.html).
7. If authenticating with a Sandbox account for testing, select **True** in **Evernote Sandbox**.
8. Optionally show the optional parameters and select to enable document tagging and how to handle null responses.
9. Optionally type or select one or more Element Instance Tags to add to the authenticated element instance.
7. Click **Create Instance**.
8. Provide your {{page.apiProvider}} credentials, and then allow the connection.

After successfully authenticating, we give you several options for next steps. [Make requests using the API docs](https://docs.cloud-elements.com/home/view-element-api-docs#test-an-element-instance) associated with the instance, [map the instance to a virtual data resource](https://docs.cloud-elements.com/home/common-object), or [use it in a formula template](https://docs.cloud-elements.com/home/formula-template).

## Authenticate Through API

Authenticating through API is similar to authenticating via the UI. Instead of clicking and typing through a series of buttons, text boxes, and menus, you will instead send a request to our `instance` endpoint. The end result is the same, though: an authenticated element instance with a  **token** and **id**.

Authenticating through API follows a multi-step OAuth process that involves:

{% include workflow.html displayNames="Outh Token,OAuth URL,Authenticate Instance" links="#getting-an-oauth-token,#getting-an-oauth-url,#authenticating-the-element-instance" active=" "%}

* [Getting an OAuth token](#getting-an-oauth-token). Request the `token` and `secret` to be used in later steps.
* [Getting an OAuth URL](#getting-an-oauth-url). Use the `token` from the previous step to request a URL to redirect your users to. After they authenticate through this URL, you receive and `oauth_token` and `oauth_verifier` to use in the next step.
* [Authenticating the element instance](#authenticating-the-element-instance). Using the `secret` returned in step one, along with the `oauth_token` and `oauth_verifier` returned in step two to authenticate with the API Provider to create an element instance at Cloud Elements.

### Getting an OAuth Token

{% include workflow.html displayNames="Oauth Token,OAuth URL,Authenticate Instance" links="#getting-an-oauth-token,#getting-an-oauth-url,#authenticating-the-element-instance" active="OAuth Token"%}

Use the following API call to request a `secret` and `token`. Replace `{keyOrId}` with the element key, `{{page.elementKey}}`.

```bash
curl -X GET /elements/{keyOrId}/oauth/token?apiKey=<api_key>&apiSecret=<api_secret>&callbackUrl=<url>&siteAddress=<url>
```

#### Query Parameters

| Query Parameter | Description   |
| :------------- | :------------- |
| apiKey |  {{site.data.glossary.element-auth-api-key}} This is the **{{page.apiKey}}** that you recorded in [API Provider Setup](setup.html). |
| apiSecret |    {{site.data.glossary.element-auth-api-secret}} This is the **{{page.apiSecret}}** that you recorded in [API Provider Setup](setup.html).  |
| callbackUrl |   {{site.data.glossary.element-auth-api-key}}   |

#### Example cURL

```bash
curl -X GET \
'https://api.cloud-elements.com/elements/api-v2/elements/{{page.elementKey}}/oauth/token?apiKey=Rand0MAP1-key&apiSecret=fak3AP1-s3Cr3t&callbackUrl=https:%3A%2F%2Fwww.mycoolapp.com%2auth' \
```

#### Example Response

Use the `oauthUrl` in the response to allow users to authenticate with the vendor.

```json
{
    "secret": "4006B6SU5ZJ55RBUWN58OZVPE",
    "token": "evernoteALG86K3XCI190U9VDER7FDSI4MAGPRF0161RPQYBALG86K3XCI190U9VDER7ALG86K3XCI190U9VDER7"
}
```

### Getting an OAuth URL

{% include workflow.html displayNames="Oauth Token,OAuth URL,Authenticate Instance" links="#getting-an-oauth-token,#getting-an-oauth-url,#authenticating-the-element-instance" active="OAuth URL"%}

Use the following API call to request a redirect URL where the user can authenticate with the API provider. Replace `{keyOrId}` with the element key, `{{page.elementKey}}`.

```bash
GET /elements/{keyOrId}/oauth/url?apiKey=<api_key>&apiSecret=<api_secret>&callbackUrl=<url>&siteAddress=<url>&scope=false&requestToken=<oauth_token RECEIVED IN PREVIOUS STEP>
```

#### Query Parameters

| Query Parameter | Description   |
| :------------- | :------------- |
| apiKey | The key obtained from registering your app with the provider. This is the **Consumer Key** that you recorded in [API Provider Setup section](setup.html).  |
| apiSecret |  The secret obtained from registering your app with the provider. This is the **Consumer Secret** that you recorded in [API Provider Setup section](setup.html).   |
| callbackUrl | The URL that will receive the code from the vendor to be used to create an element instance. This is the **Callback URL** that you noted at the end of the [API Provider section](setup.html).  |
| scope   | Set to `false`  |
| requestToken  | The Request Token (`oauth_token`) obtained from Evernote in the previous step  |

#### Example cURL

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/elements/{{page.elementKey}}/oauth/url?apiKey=fake_api_key&apiSecret=fake_api_secret&callbackUrl=https://httpbin.org/get&scope=false&requestToken=evernoteALG86K3XCI190U9VDER7FDSI4MAGPRF0161RPQYBALG86K3XCI190U9VDER7ALG86K3XCI190U9VDER7'
```

#### Example Response

Use the `oauthUrl` in the response to allow users to authenticate with the vendor.

```json
{
  "oauthUrl": "https://sandbox.evernote.com/OAuth.action?oauth_token=evernoteALG86K3XCI190U9VDER7FDSI4MAGPRF0161RPQYBALG86K3XCI190U9VDER7ALG86K3XCI190U9VDER7",
  "element": "box"
}
```

### Authenticating the Element Instance

{% include workflow.html displayNames="Oauth Token,OAuth URL,Authenticate Instance" links="#getting-an-oauth-token,#getting-an-oauth-url,#authenticating-the-element-instance" active="Authenticate Instance"%}

Use the `secret` from [step one](#getting-an-oauth-token) and the `oauth_token` and `oauth_verifier` returned in [step two](#getting-an-oauth-url) to make a request to the `/instances` endpoint to authenticate an element instance.

{% include note.html content="The endpoint returns an element instance token and id upon successful completion. Retain the token and id for all subsequent requests involving this element instance.  " %}

To authenticate an element instance:

1. Construct a JSON body as shown below (see [Parameters](#parameters)):

      ```json
      {
        "element": {
          "key": "evernote"
        },
        "providerData": {
          "secret": "<From Step 1>",
          "oauth_token": "<From Step 1>",
          "oauth_verifier": "<From Return URL>"
        },
        "configuration": {
          "oauth.api.key": "<INSERT_EVERNOTE_CONSUMER_KEY>",
          "oauth.api.secret": "<INSERT_EVERNOTE_CONSUMER_SECRET>",
          "oauth.request.url": "https://evernote.com",
          "oauth.callback.url": "<INSERT_CALLBACK_URL>",
          "evernote.sandbox": "https://sandbox.evernote.com"
        },
        "tags": [
          "<INSERT_TAGS>"
        ],
        "name": "<INSERT_INSTANCE_NAME>"
      }
      ```




    ```json
    {
      "element": {
        "key": "{{page.elementKey}}"
      },
      "providerData": {
        "secret": "<From Step 1>",
        "oauth_token": "<From Step 1>",
        "oauth_verifier": "<From Return URL>"
      },
      "configuration": {
        "oauth.api.key": "<{{page.apiProvider}} app {{page.apiKey}}>",
      	"oauth.api.secret": "<{{page.apiProvider}} app {{page.apiSecret}}>",
        "oauth.callback.url": "<{{page.apiProvider}} app {{page.callbackURL}} >",
        "oauth.request.url": "<https://evernote.com or https://sandbox.evernote.com>",
        "evernote.sandbox": "<true or false>"
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
    "secret": "15D1CFxxxxxxxxxxxxxxxxxxxxxx",
    "oauth_token": "evernoteALG86K3XCI190U9VDER7FDSI4MAGPRF0161RPQYBALG86K3XCI190U9VDER7ALG86K3XCI190U9VDER7",
    "oauth_verifier": "Dxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  },
  "configuration": {
    "oauth.callback.url": "https;//mycoolapp.com",
    "oauth.api.key": "xxxxxxxxxxxxxxxxxx",
    "oauth.api.secret": "xxxxxxxxxxxxxxxxxxxxxxxx",
    "oauth.request.url": "https://sandbox.evernote.com",
    "evernote.sandbox": "true"
  },
  "tags": [
    "Docs"
  ],
  "name": "API Instance"
}'
```

## Parameters

API parameters not shown in {{site.console}} are in `code formatting`.

{% include workflow.html displayNames="Oauth Token,OAuth URL,Authenticate Instance" links="#getting-an-oauth-token,#getting-an-oauth-url,#authenticating-the-element-instance" active="Authenticate Instance"%}



| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| `key` | The element key.<br>{{page.elementKey}}  | string  |
| `secret` | The `secret` returned in the response to getting the OAuth token.  | string |
| `oauth_token`   | The `oauth_token` in the response to getting the OAuth token. Evernote also returns the `oauth_token` in the response after a user authorizes your app.  | string |
| `oauth_verifier`   |  A value in the Evernote response after a user authorizes your app.  |   |
|  Name</br>`name` |  {{site.data.glossary.element-auth-name}}  | string  |
| `oauth.api.key` |  {{site.data.glossary.element-auth-api-key}} This is the **{{page.apiKey}}** that you noted in [API Provider Setup](setup.html). |  string |
| `oauth.api.secret` | {{site.data.glossary.element-auth-api-secret}} This is the **{{page.apiSecret}}** that you noted in [API Provider Setup](setup.html). | string |
| `oauth.callback.url` | {{site.data.glossary.element-auth-api-key}}  | string |
|  `oauth.request.url` | One of either `https://evernote.com` for production account or `https://sandbox.evernote.com` for sandbox accounts. | string |
|  `evernote.sandbox`  | Set to `true` if authenticating with a sandbox account and `false` if using a production account. |
| tags | {{site.data.glossary.element-auth-tags}} | string |

## Example Response for an Authenticated Element Instance

In this example, the instance ID is `12345` and the instance token starts with "ABC/D...". The actual values returned to you will be unique: make sure you save them for future requests to this new instance.

```json
{
  "id": 12345,
  "name": "API Instance",
  "createdDate": "2018-01-22T20:55:08Z",
  "token": "ABC/Dxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "element": {
        "id": 125,
        "name": "Evernote",
        "hookName": "Evernote",
        "key": "evernote",
        "description": "Add an Evernote Instance to connect your existing Evernote account to the Cloud Storage and Documents Hub, allowing you to manage files and folders. You will need your Evernote account information to add an instance.",
        "image": "elements/provider_evernote.png",
        "active": true,
        "deleted": false,
        "typeOauth": true,
        "trialAccount": false,
        "configDescription": "Evernote configuration",
        "transformationsEnabled": false,
        "bulkDownloadEnabled": false,
        "bulkUploadEnabled": false,
        "cloneable": false,
        "extendable": false,
        "beta": false,
        "authentication": {
            "type": "oauth2"
        },
        "extended": false,
        "hub": "documents",
        "protocolType": "http",
        "parameters": [],
        "private": false
    },
    "elementId": 125,
    "tags": [
        "Docs"
    ],
    "provisionInteractions": [],
    "valid": true,
    "disabled": false,
    "maxCacheSize": 0,
    "cacheTimeToLive": 0,
    "providerData": {   },
    "configuration": {   },
    "eventsEnabled": false,
    "traceLoggingEnabled": false,
    "cachingEnabled": false,
    "externalAuthentication": "none",
    "user": {
        "id": 3306,
        "emailAddress": "claude.elements@cloud-elements.com",
        "firstName": "Claude",
        "lastName": "Elements"
      }
}
```
