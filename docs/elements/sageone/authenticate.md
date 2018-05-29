---
heading: Sage One
seo: Authenticate | Sage One | Cloud Elements API Docs
title: Authenticate
description: Authenticate an element instance with the API provider
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 3458
elementKey: sageone
parent: Back to Element Guides
order: 20
---

# Authenticate with {{page.heading}}

You can authenticate with {{page.heading}} to create your own instance of the {{page.heading}} element through the UI or through APIs. Once authenticated, you can use the element instance to access the different functionality offered by the {{page.heading}} platform.

{% include callout.html content="<strong>On this page</strong></br><a href=#authenticate-through-the-ui>Authenticate Through the UI</a></br><a href=#authenticate-through-api>Authenticate Through API</a></br><a href=#parameters>Parameters</a></br><a href=#example-response>Example Response</a>" type="info" %}

## Authenticate Through the UI

Use the UI to authenticate with {{page.heading}} and create an element instance. {{page.heading}} authentication follows the typical OAuth 2 framework and you will need to sign in to {{page.heading}} as part of the process.

If you are configuring events, see the [Events section](events.html).

To authenticate an element instance:

1. Sign in to Cloud Elements, and then search for {{page.heading}} in our Elements Catalog.
![Search](/assets/img/elements/element-search2.png)
4. Hover over the element card, and then click **Authenticate**.
![Create Instance](/assets/img/elements/authenticate-instance.gif)
5. Enter a name for the element instance.
6. You can choose to authenticate with the default APIM Subscription Key, or you can enter your own. The APIM Subscription Key is the subscription Primary key that you noted in the [API Provider Setup section](setup.html).
7. Click **Create Instance**.
8. Provide your Sage credentials, and then allow the connection.

After successfully authenticating, we give you several options for next steps. [Make requests using the API docs](https://docs.cloud-elements.com/home/view-element-api-docs) associated with the instance, [map the instance to a virtual data resource](https://docs.cloud-elements.com/home/common-object), or [use it in a formula template](https://docs.cloud-elements.com/home/formula-template).

## Authenticate Through API

Authenticating through API is a multi-step process that involves:

* [Getting a redirect URL](#getting-a-redirect-url). This URL sends users to the vendor to log in to their account.
* [Authenticating users and receiving the authorization grant code](#authenticating-users-and-receiving-the-authorization-grant-code). After the user logs in, the vendor makes a callback to the specified url with an authorization grant code.
* [Authenticating the element instance](#authenticating-the-element-instance). Using the authorization code from the vendor, authenticate with the vendor to create an element instance at Cloud Elements.

### Getting a Redirect URL

Use the following API call to request a redirect URL where the user can authenticate with the vendor. Replace `{keyOrId}` with the element key, `{{page.elementKey}}`.

```bash
GET /elements/{keyOrId}/oauth/url?apiKey=<api_key>&apiSecret=<api_secret>&callbackUrl=<url>&siteAddress=<url>
```

#### Query Parameters

| Query Parameter | Description   |
| :------------- | :------------- |
| apiKey | The key obtained from registering your app with the provider. This is the **Client ID** that you recorded in [API Provider Setup section](setup.html).  |
| apiSecret |  The client secret obtained from registering your app with the provider.  This is the **Client Secret** that you recorded in [API Provider Setup section](setup.html).   |
| callbackUrl | The URL that will receive the code from the vendor to be used to create an element instance. This is the **Callback URL** that you recorded in [API Provider Setup section](setup.html).  |

#### Example cURL

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/elements/{{page.elementKey}}/oauth/url?apiKey=fake_api_key&apiSecret=fake_api_secret&callbackUrl=https://www.mycoolapp.com/auth&state={{page.elementKey}}'
```

#### Example Response

Use the `oauthUrl` in the response to allow users to authenticate with the vendor.

```json
{
"element": "{{page.elementKey}}",
"oauthUrl": "https://www.sageone.com/oauth2/auth?scope=full_access&response_type=code&redirect_uri=https%3A%2F%2Fhttpbin.org%2Fget&state=sageone&client_id=b8cb21f24d3f1a2d8c5d"
}
```

### Authenticating Users and Receiving the Authorization Grant Code

Provide the response from the previous step to the users. After they authenticate, {{page.heading}} provides the following information in the response:

* code
* country
* state

| Response Parameter | Description   |
| :------------- | :------------- |
| code | The Authorization Grant Code required by Cloud Elements to retrieve the OAuth access and refresh tokens from the endpoint.|
| country | The country code associated with your account at {{page.heading}} |
| state | A customizable identifier, typically the element key (`{{page.elementKey}}`) . |

{% include note.html content="If the user denies authentication and/or authorization, there will be a query string parameter called <code>error</code> instead of the <code>code</code> parameter. In this case, your application can handle the error gracefully." %}

### Authenticating the Element Instance

Use the `/instances` endpoint to authenticate with {{page.heading}} and create an element instance. If you are configuring events, see the [Events section](events.html).

{% include note.html content="The endpoint returns an Element id and token upon successful completion. Retain the token and id for all subsequent requests involving this element instance.  " %}

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
                "oauth.api.key": "<CLIENT_ID>",
                "oauth.api.secret": "<CLIENT_SECRET>",
                "signature.secret": "<SIGNING_SECRET>",
              	"apim.subscription.key": "<SUBSCRIPTION_PRIMARY_KEY_or_APIM_SUBSCRIPTION_KEY>",
                "country": "<COUNTRY_CODE>",
                "oauth.callback.url": "<CALLBACK_URL>"
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

#### Example cURL

```bash
curl -X POST \
  https://api.cloud-elements.com/elements/api-v2/instances \
  -H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
  -H 'content-type: application/json' \
  -d '{
    "element": {
      "key": "sageone"
    },
    "providerData": {
      "code": "8aa74ff8ae16ba3ca19d12cbdea83aff16bddcd7"
    },
    "configuration": {
      "oauth.api.key": "xxxxxxxxxxxxxxxxxx",
      "oauth.api.secret": "xxxxxxxxxxxxxxxxxxxxxx",
      "signature.secret": "xxxxxxxxxxxxxxxxxxxxxxxxx",
      "apim.subscription.key": "xxxxxxxxxxxxxxxxxxxxxxxxx",
      "country": "US",
      "oauth.callback.url": "https://mycoolapp.com"
    },
    "tags": [
      "Test"
    ],
    "name": "SageOneInstance"
  }'
```
## Parameters

API parameters not shown in {{site.console}} are in `code formatting`.

{% include note.html content="Event related parameters are described in <a href=events.html>Events</a>." %}

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| 'key' | The element key.<br>{{page.elementKey}}  | string  |
|  Name</br>`name` |  The name for the element instance created during authentication.   | Body  |
| `oauth.callback.url` | The Callback URL  for the connected app you created for {{page.heading}}. This is the Callback URL that you recorded in [API Provider Setup section](setup.html).  |
| `oauth.api.key` | The key obtained from registering your app with the provider. This is the **Client ID** that you recorded in [API Provider Setup section](setup.html). |  string |
| `oauth.api.secret` | The client secret obtained from registering your app with the provider.  This is the **Client Secret** that you recorded in [API Provider Setup section](setup.html).| string |
| `signature.secret` | The signing secret obtained from registering your app with the provider.  This is the **Signing Secret** that you recorded in [API Provider Setup section](setup.html). | string |
| APIM Subscription Key</br> `apim.subscription.key` | The subscription primary key obtained from subscribing to the Sage One API.  This is the **Primary Key** that you recorded in [API Provider Setup section](setup.html). <br> {% include note.html content=" When authenticating through the UI, you can use the default or your own subscription primary key. " %} | string |
| `country` | The two digit country code associated with the account of the authenticating user. | string |
| tags | *Optional*. User-defined tags to further identify the instance. | string |

## Example Response

```json
{
    "id": 123,
    "name": "SageOneInstance",
    "token": "xxxxxxxxxxxxxxxxxx",
    "element": {
        "id": 3458,
        "name": "Sage One",
        "key": "sageone",
        "description": "Add a Sage One Instance to connect your existing Sage One account to the Finance Hub, allowing you manage your customers, employees, invoices, etc. across multiple Finance Elements. You will need your Sage One account information to add an instance.",
        "image": "http://www.merchantmaverick.com/wp-content/uploads/2015/09/sage-one-logo1.jpg",
        "active": true,
        "deleted": false,
        "typeOauth": false,
        "trialAccount": false,
        "resources": [ ],
        "transformationsEnabled": true,
        "bulkDownloadEnabled": false,
        "bulkUploadEnabled": false,
        "cloneable": true,
        "extendable": false,
        "beta": false,
        "authentication": {
          "type": "oauth2"
        },
        "extended": false,
        "hub": "finance",
        "protocolType": "http",
        "parameters": [],
        "private": false
          },
    "elementId": 3458,
    "provisionInteractions": [],
    "valid": true,
    "disabled": false,
    "maxCacheSize": 0,
    "cacheTimeToLive": 0,
    "configuration": {
      "base.url": "https://api.columbus.sage.com/us/sageone",
      "country": "US",
      "event.vendor.type": "polling",
      "bulk.query.date_mask": "yyyy-MM-dd'T'HH:mm:ss'Z'",
      "pagination.type": "page",
      "oauth.callback.url": "https://httpbin.org/get",
      "oauth.user.refresh_token": "7cc8cd2b4d619e5a09eb5a006bbe5deb7a84d695",
      "oauth.user.refresh_interval": "3600",
      "oauth.token.revoke_url": "https://oauth.na.sageone.com/revoke",
      "oauth.api.key": "b8cb21f24d3f1a2d8c5d",
      "signature.secret": "c956dd3431bc13c5bf9ee1d72d253d2df3fa871a",
      "event.notification.enabled": "false",
      "oauth.api.secret": "d29b5ea1b9b026b6f89e57666897be5a406563df",
      "resource_owner_id": "6ca18a4d6d3443bea14cfe2b48374b5c",
      "oauth.token.url": "https://oauth.na.sageone.com/token",
      "pagination.max": "200",
      "oauth.scope": "full_access",
      "oauth.token.refresh_url": "https://oauth.na.sageone.com/token",
      "oauth.user.token": "b6edb717088721befc7699eda91928d04430ab77",
      "apim.subscription.key": "9317ebcbf83c49ecbafec63becdb1500",
      "oauth.authorization.url": "https://www.sageone.com/oauth2/auth",
      "bulk.query.download_format": "JSON",
      "event.poller.refresh_interval": "15",
      "event.notification.callback.url": null,
      "authentication.time": "",
      "oauth.user.refresh_time": "1496258839283",
      "event.poller.configuration": "{\"customers\":{\"url\":\"/hubs/finance/customers?where=lastModifiedDate>='${date:yyyy-MM-dd'T'HH:mm:ss'Z'}' and attributes='created_at,updated_at'\",\"idField\":\"id\",\"datesConfiguration\":{\"updatedDateField\":\"updated_at\",\"updatedDateFormat\":\"yyyy-MM-dd'T'HH:mm:ss'Z'\",\"updatedDateTimezone\":\"GMT\",\"createdDateField\":\"created_at\",\"createdDateFormat\":\"yyyy-MM-dd'T'HH:mm:ss'Z'\",\"createdDateTimezone\":\"GMT\"}}}",
      "oauth.basic.header": "true",
      "pagination.page.startindex": "1"
    },
    "eventsEnabled": false,
    "traceLoggingEnabled": false,
    "cachingEnabled": false,
    "externalAuthentication": "none",
    "user": {
      "id": 123456
      }
}
```
