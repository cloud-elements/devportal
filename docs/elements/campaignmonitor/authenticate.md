---
heading: Campaign Monitor
apiProvider: Campaign Monitor # For cases where the API Provider is different than the element name. e;g;, ServiceNow vs. ServiceNow Oauth
seo: Authenticate | Campaign Monitor | Cloud Elements API Docs
title: Authenticate
description: Authenticate an element instance with the API provider
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 3928
elementKey: campaignmonitor
parent: Back to Element Guides
order: 20
---

# Authenticate with {{page.heading}}

You can authenticate with {{page.heading}} to create your own instance of the {{page.heading}} element through the UI or through APIs. Once authenticated, you can use the element instance to access the different functionality offered by the {{page.heading}} platform.

{% include callout.html content="<strong>On this page</strong></br><a href=#authenticate-through-the-ui>Authenticate Through the UI</a></br><a href=#authenticate-with-basic-through-api>Authenticate with Basic Through API</a></br><a href=#authenticate-with-oauth-through-api>Authenticate with OAuth Through API</a></br><a href=#parameters>Parameters</a></br><a href=#example-response-for-an-authenticated-element-instance>Example Response for an Authenticated Element Instance</a>" type="info" %}

## Authenticate Through the UI

Use the UI to authenticate with {{page.heading}} and create an element instance. {{page.heading}} authentication follows the typical OAuth 2 framework and you will need to sign in to {{page.heading}} as part of the process.

If you are configuring events, see the [Events section](events.html).

To authenticate an element instance:

1. Sign in to Cloud Elements, and then search for {{page.heading}} in our Elements Catalog.
![Search](/assets/img/elements/element-search2.png)
4. Hover over the element card, and then click **Authenticate**.
![Create Instance](/assets/img/elements/authenticate-instance.gif)
5. Enter a name for the element instance.
{% include note.html content="The optional List IDs field is needed only for event setup. See <a href=events.html>Events</a>.  " %}
6. In Authentication Type, keep the default **OAuth2** or select **Basic** to authenticate with just an API Key.
   * For OAuth 2.0 authentication, enter the Campaign Monitor **Client ID** in **OAuth API Key** and **Client Secret** in **OAuth API Secret**.
   * For Basic authentication, enter the Campaign Monitor **API Key** in **API Key**.
9. Optionally type or select one or more Element Instance Tags to add to the authenticated element instance.
7. Click **Create Instance**.
8. If authenticating using OAuth 2.0, log in to {{page.apiProvider}}, and then allow the connection.

After successfully authenticating, we give you several options for next steps. [Make requests using the API docs](https://docs.cloud-elements.com/home/view-element-api-docs) associated with the instance, [map the instance to a virtual data resource](https://docs.cloud-elements.com/home/common-object), or [use it in a formula template](https://docs.cloud-elements.com/home/formula-template).

## Authenticate with Basic Through API

Authenticating through API is similar to authenticating via the UI. Instead of clicking and typing through a series of buttons, text boxes, and menus, you will instead send a request to our `/instances` endpoint. The end result is the same, though: an authenticated element instance with a  **token** and **id**.

To authenticate an element instance:

1. Construct a JSON body as shown below (see [Parameters](#parameters)):

    ```json
    {
      "element": {
        "key": "{{page.elementKey}}"
      },
      "configuration": {
        "authentication.type": "basic",
        "username": "<{{page.apiProvider}} {{page.username}}>"
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
  "configuration": {
    "authentication.type": "basic",
    "username": "xxxxxxxxxxxxxxxxxxxxxxxx"
  },
  "tags": [
    "Docs"
  ],
  "name": "API Instance"
}'
```

## Authenticate with OAuth Through API

Authenticating with OAuth 2.0 through API is a multi-step process that involves:

* [Getting a redirect URL](#getting-a-redirect-url). This URL sends users to the vendor to log in to their account.
* [Authenticating users and receiving the authorization grant code](#authenticating-users-and-receiving-the-authorization-grant-code). After the user logs in, the vendor makes a callback to the specified url with an authorization grant code.
* [Authenticating the element instance](#authenticating-the-element-instance). Using the authorization code from the vendor, authenticate with the vendor to create an element instance at Cloud Elements.

### Getting a Redirect URL

Use the following API call to request a redirect URL where the user can authenticate with the API provider. Replace `{keyOrId}` with the element key, `{{page.elementKey}}`.

```bash
curl -X GET /elements/api-v2/{keyOrId}/oauth/url?apiKey=<api_key>&apiSecret=<api_secret>&callbackUrl=<url>&siteAddress=<url>
```

#### Query Parameters

| Query Parameter | Description   |
| :------------- | :------------- |
| apiKey | The key obtained from registering your app with the provider. This is the **Client ID** that you recorded in [API Provider Setup section](setup.html).  |
| apiSecret |  The secret obtained from registering your app with the provider.  This is the **Client Secret** that you recorded in [API Provider Setup section](setup.html).   |
| callbackUrl | The URL that will receive the code from the vendor to be used to create an element instance.   |

#### Example cURL

```bash
'https://api.cloud-elements.com/elements/api-v2/elements/{{page.elementKey}}/oauth/url?apiKey=fake_api_key&apiSecret=fake_api_secret&callbackUrl=https://www.mycoolapp.com/auth&state={{page.elementKey}}' \
```

#### Example Response

Use the `oauthUrl` in the response to allow users to authenticate with the vendor.

```json
{
    "oauthUrl": "https://api.createsend.com/oauth?scope=ViewReports%2CManageLists%2CCreateCampaigns%2CImportSubscribers%2CSendCampaigns%2CViewSubscribersInReports%2CManageTemplates%2CAdministerPersons%2CAdministerAccount%2CViewTransactional%2CSendTransactional&response_type=code&redirect_uri=https%3A%2F%2Fhttpbin.org%2Fget&state=campaignmonitor&client_id=123456",
    "element": "campaignmonitor"
}
```

### Authenticating Users and Receiving the Authorization Grant Code

Provide the response from the previous step to the users. After they authenticate, {{page.heading}} provides the following information in the response:

* code
* state

| Response Parameter | Description   |
| :------------- | :------------- |
| code | The Authorization Grant Code required by Cloud Elements to retrieve the OAuth access and refresh tokens from the endpoint.|
| state | A customizable identifier, typically the element key (`{{page.elementKey}}`) . |

{% include note.html content="If the user denies authentication and/or authorization, there will be a query string parameter called <code>error</code> instead of the <code>code</code> parameter. In this case, your application can handle the error gracefully." %}

### Authenticating the Element Instance

Use the `/instances` endpoint to authenticate with {{page.heading}} and create an element instance. If you are configuring events, see the [Events section](events.html).

{% include note.html content="The endpoint returns an element instance token and id upon successful completion. Retain the token and id for all subsequent requests involving this element instance.  " %}

To create an element instance:

1. Construct a JSON body as shown below (see [Parameters](#parameters)):


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
    "code": "xoz8AFqScK2ngM04kSSM"
  },
  "configuration": {
    "authentication.type": "oauth2",
    "oauth.callback.url": "<CALLBACK_URL>",
    "oauth.api.key": "<CONSUMER_KEY>",
    "oauth.api.secret": "<CONSUMER_SECRET>"
  },
  "tags": [
    "For Docs"
  ],
  "name": "API Instance"
}'
```
## Parameters

API parameters not shown in the {{site.console}} are in `code formatting`.

{% include note.html content="Event related parameters are described in <a href=events.html>Events</a>." %}

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| 'key' | The element key.<br>{{page.elementKey}}  | string  |
|  Name</br>`name` |  The name for the element instance created during authentication.   | Body  |
| **Authentication Type**</br>`authentication.type`  | How you want to authenticate with the API provider, either **oauth2** or **basic**.  | string  |
| **API Key**</br>`username`   |  **Basic Authentication only.** The Campaign Monitor API Key. |   |
| `oauth.callback.url` | **OAuth 2.0 Authentication only.** The URL where you want to redirect users after they grant access. This is the **Callback URL** that you noted in the [API Provider Setup section](setup.html).  |
| **OAuth API Key**</br>`oauth.api.key` | **OAuth 2.0 Authentication only.** The Client ID from {{page.heading}}. This is the **Client ID** that you noted in the [API Provider Setup section](setup.html) |  string |
| **OAuth API Secret**</br>`oauth.api.secret` | **OAuth 2.0 Authentication only.** The Client Secret from {{page.heading}}. This is the **Client Secret** that you noted in the [API Provider Setup section](setup.html)| string |
| tags | *Optional*. User-defined tags to further identify the instance. | string |

## Example Response for an Authenticated Element Instance

```json
{
  "id": 123,
  "name": "test",
  "token": "3sU/S/kZD36BaABPS7EAuSGHF+1wsthT+mvoukiE",
  "element": {
      "id": 39,
      "name": "{{page.heading}}",
      "key": "{{page.elementKey}}",
      "description": "Campaign Monitor makes it easy for you to create, send, and optimize your email marketing campaigns.",
      "image": "https://www.campaignmonitor.com/assets/brand/campaignmonitor.jpg",
      "active": true,
      "deleted": false,
      "typeOauth": false,
      "trialAccount": false,
      "resources": [ ],
      "transformationsEnabled": true,
      "bulkDownloadEnabled": true,
      "bulkUploadEnabled": true,
      "cloneable": true,
      "extendable": false,
      "beta": true,
      "authentication": {
          "type": "oauth2"
      },
      "elementId": {{page.elementId}},
      "provisionInteractions": [],
      "valid": true,
      "disabled": false,
      "maxCacheSize": 0,
      "cacheTimeToLive": 0,
      "configuration": {    },
      "eventsEnabled": false,
      "eventsNotificationCallbackUrl": "false",
      "traceLoggingEnabled": false,
      "cachingEnabled": false,
      "externalAuthentication": "none",
      "user": {
          "id": 12345
        }
    }
 }
```
