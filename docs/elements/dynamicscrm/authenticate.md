---
heading: Microsoft Dynamics CRM
seo: Authenticate | MS Dynamics CRM | Cloud Elements API Docs
title: Authenticate
description: Authenticate an element instance with the API provider.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 190
elementKey: dynamicscrmadfs
parent: Back to Element Guides
order: 20
---

## Authenticate with {{page.heading}}

You can authenticate with {{page.heading}} to create your own instance of the {{page.heading}} element through the UI or through APIs. Once authenticated, you can use the element instance to access the different functionality offered by the {{page.heading}} platform.

{% include callout.html content="<strong>On this page</strong></br><a href=#authenticate-through-the-ui>Authenticate Through the UI</a></br><a href=#authenticate-through-api>Authenticate Through API</a></br><a href=#custom-authentication>Custom Authentication</a></br><a href=#oauth-2-0-authentication>OAuth 2.0 Authentication</a></br><a href=#example-response-for-an-authenticated-element-instance>Example Response</a>" type="info" %}

## Authenticate Through the UI

Use the UI to authenticate with {{page.heading}} and create an element instance. {{page.heading}} authentication follows the typical OAuth 2 framework and you will need to sign in to {{page.heading}} as part of the process.

If you are configuring events, see the [Events section](events.html).

1. Sign in to Cloud Elements, and then search for {{page.heading}} in our Elements Catalog.
![Search](/assets/img/elements/element-search2.png)
4. Hover over the element card, and then click **Authenticate**.
![Create Instance](/assets/img/elements/authenticate-instance.gif)
5. Enter a name for the element instance.
6. Select an **Authentication Type**:
  * Choose **Custom** to authenticate through user name and password.
  * Choose **oauth2** to authenticate using the key and client id that you identified in [API Provider Setup](setup.html).
6. Enter the parameters required by your selected authentication type. See [Custom Parameters](#custom-parameters) or [OAuth2 Parameters](#oauth-2-0-parameters) for details.

    | Custom Authentication | OAuth2 Authentication  |
    | :------------- | :------------- |
    |  User Name  |  OAuth Client ID in Azure AD  |
    |  Password  |  OAuth Client Secret in Azure AD  |
    |  Dynamics CRM URL  |  Microsoft Dynamics CRM Tenant URL  |

9. Optionally type or select one or more Element Instance Tags to add to the authenticated element instance.
7. Click **Create Instance**.
8. Provide your {{page.heading}} credentials, and then allow the connection.

After successfully authenticating, we give you several options for next steps. [Make requests using the API docs](https://docs.cloud-elements.com/home/view-element-api-docs) associated with the instance, [map the instance to a virtual data resource](https://docs.cloud-elements.com/home/common-object), or [use it in a formula template](https://docs.cloud-elements.com/home/formula-template).

## Authenticate Through API

Authenticating through API is similar to authenticating via the UI. Instead of clicking and typing through a series of buttons, text boxes, and menus, you will instead send a request to our `/instances` endpoint. The end result is the same, though: an authenticated element instance with a  **token** and **id**.

You can authenticate using either [custom authentication](#custom-authentication) or [OAuth 2.0](#oauth-2-0-authentication).

### Custom Authentication

Use the `/instances` endpoint to authenticate with {{page.heading}} and create an element instance. If you are configuring events, see the [Events section](events.html).

{% include note.html content="The endpoint returns an Element id and token upon successful completion. Retain the token and id for all subsequent requests involving this element instance.  " %}

To create an element instance:

1. Construct a JSON body as shown below (see [Custom Parameters](#custom-parameters)):

    ```json
            {
              "element": {
                "key": "{{page.elementKey}}"
              },
              "configuration": {
                "authentication.type": "custom",
                "user.username": "<USERNAME>",
                "user.password": "<PASSWORD>",
                "dynamics.tenant": "yourcompanyname.crm.dynamics.com"
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

9. Note the **Token** and **ID** and save them for all future requests using the element instance.

#### Custom Authentication Example cURL

```bash
curl -X POST \
  https://api.cloud-elements.com/elements/api-v2/instances \
  -H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
  -H 'content-type: application/json' \
  -d '{
    "element": {
      "key": "dynamicscrmadfs"
    },
    "configuration": {
      "authentication.type": "custom",
      "user.username": "xxxxxxxxxxxxxxxxxx",
      "user.password": "xxxxxxxxxxxxxxxxxxxxxx",
      "dynamics.tenant": "yourcompanyname.crm.dynamics.com"
    },
    "tags": [
      "Test"
    ],
    "name": "DynamicsCRMInstance"
  }'
```
#### Custom Parameters

API parameters not shown in {{site.console}} are in `code formatting`.

{% include note.html content="Event related parameters are described in <a href=events.html>Events</a>." %}

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| `key` | The element key.<br>{{page.elementKey}}  | string  |
|  Name</br>`name` |  {{site.data.glossary.element-auth-name}}  | string  |
| Authentication Type</br>`authentication.type` | _Optional_. Identifies the type of authentication used in the request. Use `custom`. | string |
| User Name</br>`user.username` | The USERNAME of the Dynamics CRM account  | string |
| User password</br>`user.password` | The PASSWORD of the Dynamics CRM account  | string |
| Dynamics CRM URL</br>`dynamics.tenant` | The Microsoft Dynamics Tenant URL. | string |
| `tags` | *Optional*. User-defined tags to further identify the instance. | string |

### OAuth 2.0 Authentication

Using OAuth 2.0 to authenticate through API follows a multi-step process that involves:

{% include workflow.html displayNames="Redirect URL,Authenticate Users,Authenticate Instance" links="#getting-a-redirect-url,#authenticating-users-and-receiving-the-authorization-grant-code,#authenticating-the-element-instance" active=" "%}

* [Getting a redirect URL](#getting-a-redirect-url). This URL sends users to the vendor to log in to their account.
* [Authenticating users and receiving the authorization grant code](#authenticating-users-and-receiving-the-authorization-grant-code). After the user logs in, the vendor makes a callback to the specified url with an authorization grant code.
* [Authenticating the element instance](#authenticating-the-element-instance). Using the authorization code from the vendor, authenticate with the vendor to create an element instance at Cloud Elements.

#### Getting a Redirect URL

{% include workflow.html displayNames="Redirect URL,Authenticate Users,Authenticate Instance" links="#getting-a-redirect-url,#authenticating-users-and-receiving-the-authorization-grant-code,#authenticating-the-element-instance" active="Redirect URL"%}

Use the following API call to request a redirect URL where the user can authenticate with the API provider. Replace `{keyOrId}` with the element key, `{{page.elementKey}}`.

```bash
curl -X GET /elements/{keyOrId}/oauth/url?apiKey=<api_key>&apiSecret=<api_secret>&callbackUrl=<url>&siteAddress=<url>
```

##### Query Parameters

| Query Parameter | Description   |
| :------------- | :------------- |
| apiKey |  {{site.data.glossary.element-auth-api-key}} This is the **{{page.apiKey}}** that you recorded in [API Provider Setup section](setup.html). |
| apiSecret |    {{site.data.glossary.element-auth-api-secret}} This is the **{{page.apiSecret}}** that you recorded in [API Provider Setup section](setup.html).  |
| callbackUrl |   {{site.data.glossary.element-auth-oauth-callback}} This is the **{{page.callbackURL}}** that you recorded in [API Provider Setup section](setup.html)   |

##### Example cURL

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/elements/{{page.elementKey}}/oauth/url?apiKey=fake_api_key&apiSecret=fake_api_secret&callbackUrl=https://www.mycoolapp.com/auth&siteAddress=&siteAddress=yourcompanyname.crm.dynamics.com&state={{page.elementKey}}'
```

##### Example Response

Use the `oauthUrl` in the response to allow users to authenticate with the vendor.

```json
{
"element": "{{page.elementKey}}",
"oauthUrl": "https://login.microsoftonline.com/common/oauth2/authorize?response_type=code&redirect_uri=https%3A%2F%2Fmycoolapp.com%2Fauth&state={{page.elementKey}}&client_id=1234567890"
}
```

#### Authenticating Users and Receiving the Authorization Grant Code

{% include workflow.html displayNames="Redirect URL,Authenticate Users,Authenticate Instance" links="#getting-a-redirect-url,#authenticating-users-and-receiving-the-authorization-grant-code,#authenticating-the-element-instance" active="Authenticate Users"%}

Provide the response from the previous step to the users. After they authenticate, {{page.heading}} provides the following information in the response:

* code
* state

| Response Parameter | Description   |
| :------------- | :------------- |
| code | The Authorization Grant Code required by Cloud Elements to retrieve the OAuth access and refresh tokens from the endpoint.|
| state | A customizable identifier, typically the element key (`{{page.elementKey}}`) . |

{% include note.html content="If the user denies authentication and/or authorization, there will be a query string parameter called <code>error</code> instead of the <code>code</code> parameter. In this case, your application can handle the error gracefully." %}

#### Authenticating the Element Instance

{% include workflow.html displayNames="Redirect URL,Authenticate Users,Authenticate Instance" links="#getting-a-redirect-url,#authenticating-users-and-receiving-the-authorization-grant-code,#authenticating-the-element-instance" active="Authenticate Instance"%}

Use the `/instances` endpoint to authenticate with {{page.heading}} and create an element instance. If you are configuring events, see the [Events section](events.html).

{% include note.html content="The endpoint returns an Element id and token upon successful completion. Retain the token and id for all subsequent requests involving this element instance.  " %}

To create an element instance:

1. Construct a JSON body as shown below (see [OAuth2 Parameters](#oauth-2-0-parameters)):

    ```json
            {
              "element": {
                "key": "{{page.elementKey}}"
              },
              "providerData": {
                "code": "<AUTHORIZATION_GRANT_CODE>"
              },
              "configuration": {
                "authentication.type": "oauth2",
                "oauth.api.key": "<CLIENT_ID>",
                "oauth.api.secret": "<CLIENT_SECRET>",
                "oauth.callback.url": "<CALLBACK_URL>",
                "oauth.resource.url": "yourcompanyname.crm.dynamics.com"
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

9. Note the **Token** and **ID** and save them for all future requests using the element instance.

#### OAuth2 Example cURL

```bash
curl -X POST \
  https://api.cloud-elements.com/elements/api-v2/instances \
  -H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
  -H 'content-type: application/json' \
  -d '{
    "element": {
      "key": "dynamicscrmadfs"
    },
    "providerData": {
      "code": "8aa74ff8ae16ba3ca19d12cbdea83aff16bddcd7"
    },
    "configuration": {
      "authentication.type": "oauth2",
      "oauth.api.key": "xxxxxxxxxxxxxxxxxx",
      "oauth.api.secret": "xxxxxxxxxxxxxxxxxxxxxx",
      "oauth.resource.url": "yourcompanyname.crm.dynamics.com"
      "oauth.callback.url": "https://mycoolapp.com"
    },
    "tags": [
      "Test"
    ],
    "name": "DynamicsCRMInstance"
  }'
```
## OAuth 2.0 Parameters

API parameters not shown in {{site.console}} are in `code formatting`.

{% include note.html content="Event related parameters are described in <a href=events.html>Events</a>." %}

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| `key` | The element key.<br>{{page.elementKey}}  | string  |
| `code` | {{site.data.glossary.element-auth-grant-code}} | string |
|  Name</br>`name` |  {{site.data.glossary.element-auth-name}}  | string  |
| Authentication Type</br>`authentication.type` | Optional. Identifies the type of authentication used in the request. Use `oauth2`. | string |
| `oauth.api.key` |  {{site.data.glossary.element-auth-api-key}} This is the **{{page.apiKey}}** that you recorded in [API Provider Setup section](setup.html). |  string |
| `oauth.api.secret` | {{site.data.glossary.element-auth-api-secret}} This is the **{{page.apiSecret}}** that you recorded in [API Provider Setup section](setup.html). | string |
| `oauth.callback.url` | {{site.data.glossary.element-auth-oauth-callback}} This is the **{{page.callbackURL}}** that you recorded in [API Provider Setup section](setup.html).  |
| `oauth.resource.url` | The Microsoft Dynamics Tenant URL. | string |
| `tags` | *Optional*. User-defined tags to further identify the instance. | string |

## Example Response for an Authenticated Element Instance

The following example response is the payload received when authenticating through OAuth 2.0.

In this example, the instance ID is `12345` and the instance token starts with "ABC/D...". The actual values returned to you will be unique: make sure you save them for future requests to this new instance.

```json
{
  "id": 12345,
  "name": "API Instance",
  "createdDate": "2017-08-07T18:46:38Z",
  "token": "ABC/Dxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "element": {
    "id": 361,
    "name": "Microsoft Dynamics CRM",
    "hookName": "DynamicsCRM",
    "key": "dynamicscrmadfs",
    "description": "Add a Microsoft Dynamics CRM Instance to connect your existing Microsoft Dynamics CRM\naccount (Online or On Premise) to the CRM Hub, allowing you to manage contacts, leads, accounts, opportunities etc. across multiple CRM Elements. You will need your Microsoft Dynamics CRM account information to add an instance.",
    "image": "elements/provider_dynamicscrm.png",
    "active": true,
    "deleted": false,
    "typeOauth": true,
    "trialAccount": false,
    "configDescription": "Microsoft Dynamics CRM For Online and On Premise",
    "defaultTransformations": [  ],
    "transformationsEnabled": true,
    "bulkDownloadEnabled": true,
    "bulkUploadEnabled": true,
    "cloneable": false,
    "extendable": false,
    "beta": false,
    "authentication": {
        "type": "custom"
    },
    "extended": false,
    "hub": "crm",
    "protocolType": "http",
    "parameters": [   ],
    "private": false    },
    "elementId": 361,
    "tags": [
      "Docs"
      ],
    "provisionInteractions": [],
    "valid": true,
    "disabled": false,
    "maxCacheSize": 0,
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
