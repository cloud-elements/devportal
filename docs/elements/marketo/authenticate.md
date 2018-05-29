---
heading: Marketo
seo: Authenticate | Marketo | Cloud Elements API Docs
title: Authenticate
description: Authenticate an element instance with the API provider
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 85
elementKey: marketo
parent: Back to Element Guides
order: 20
---

# Authenticate with {{page.heading}}

You can authenticate with {{page.heading}} to create your own instance of the {{page.heading}} element through the UI or through APIs. Once authenticated, you can use the element instance to access the different functionality offered by the {{page.heading}} platform.

{% include callout.html content="<strong>On this page</strong></br><a href=#authenticate-through-the-ui>Authenticate Through the UI</a></br><a href=#authenticate-through-api>Authenticate Through API</a></br><a href=#parameters>Parameters</a></br><a href=#example-response>Example Response</a>" type="info" %}

## Authenticate Through the UI

Use the UI to authenticate with {{page.heading}} and create an element instance. {{page.heading}} authentication follows an OAuth 2 framework and you will need to sign in to {{page.heading}} as part of the process.

If you are configuring events, see the [Events section](events.html).

To authenticate an element instance:

1. Sign in to Cloud Elements, and then search for {{page.heading}} in our Elements Catalog.
![Search](/assets/img/elements/element-search2.png)
4. Hover over the element card, and then click **Authenticate**.
![Create Instance](/assets/img/elements/authenticate-instance.gif)
5. Enter a name for the element instance.
6. Enter the following pieces of information:
      * Client Id
      * Client Secret
      * Identity URL
      * REST URL<br/>

7. Click **Create Instance**.

After successfully authenticating, we give you several options for next steps. [Make requests using the API docs](https://docs.cloud-elements.com/home/view-element-api-docs) associated with the instance, [map the instance to a virtual data resource](https://docs.cloud-elements.com/home/common-object), or [use it in a formula template](https://docs.cloud-elements.com/home/formula-template).

## Authenticate Through API

Use the `/instances` endpoint to authenticate with Marketo and create an element instance. If you are configuring events, see the [Events section](events.html).

{% include note.html content="The endpoint returns an Element token upon successful completion. Retain the token for all subsequent requests involving this element instance.  " %}

To create an element instance:

1. Construct a JSON body as shown below (see [Parameters](#parameters)):

    ```json
    {
        "element": {
            "key": "marketo"
          },
        "providerData": {
            "code": ""
          },
        "configuration": {
            "oauth.api.key": "<<client_id>>",
            "oauth.api.secret": "<<client_secret>>",
            "marketo.identity.url": "<<marketo_identity_url",
            "base.url": "<<marketo_rest_url>>"
          },
        "tags": [
          "<<TAG_NAME>>",
          "<<TAG_NAME>>"
        ],
          "name": "<<INSERT INSTANCE NAME>>"
    }
    ```

1. Call the following, including the JSON body you constructed in the previous step:

        POST /instances

    {% include note.html content="Make sure that you include the User and Organization keys in the header. See <a href=index.html#authenticating-with-cloud-elements>the Overview</a> for details. " %}

1. Locate the `token` and `id` in the response and save them for all future requests using the element instance.

#### Example cURL

```bash
curl -X POST  \
 -H 'Authorization: User <INSERT>, Organization <INSERT>'  \
 -H 'Content-Type: application/json'  \
 --data '{ \
  "name": "My Instance", \
  "providerData": { \
    "code": "" \
  }, \
  "configuration": { \
    "filter.response.nulls": "true", \
    "oauth.api.key": "<INSERt>", \
    "oauth.api.secret": "<INSERT", \
    "marketo.identity.url": "<INSERT>", \
    "base.url": "<INSERT>" \
  } \
}'
```
## Parameters

API parameters not shown in {{site.console}} are in `code formatting`.

{% include note.html content="Event related parameters are described in <a href=events.html>Events</a>." %}

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| 'key' | The element key.<br>{{page.elementKey}}  | string  |
|  Name</br>`name` |  The name for the element instance created during authentication.   | string  |
| `marketo.identity.url` | The Identity URL from Marketo. This is the Identity URL that you noted at the end of the [Endpoint Setup section](setup.html).  |
| `oauth.api.key` | The API Key from Marketo. This is the API Key that you noted at the end of the [Endpoint Setup section](setup.html) |  string |
| `oauth.api.secret` | The Consumer Secret from Marketo. This is the Consumer Secret that you noted at the end of the [Endpoint Setup section](setup.html)| string |
| `base.url` | The Marketo REST URL. This is the REST URL that you noted at the end of the [Endpoint Setup section](setup.html)| string |
| Filter null values from the response </br>`filter.response.nulls` | *Optional*. Determines if null values in the response JSON should be filtered from the response. Yes or `true` indicates that Cloud Elements will filter null values. </br>Default: `true`.  | boolean |
| tags | *Optional*. User-defined tags to further identify the instance. | string |

## Example Response

```json
{
  "id": 427164,
  "name": "My Instance",
  "createdDate": "2017-06-06T18:00:26Z",
  "token": "<<token value>>",
  "element": {
    "id": 85,
    "name": "Marketo",
    "hookName": "Marketo",
    "key": "marketo",
    "description": "Add a Marketo Instance to connect your existing Marketo account to the Marketing Hub, allowing you to manage accounts, campaigns, contacts, leads etc. across multiple Marketing Elements. You will need your Marketo account information to add an instance.",
    "image": "elements/provider_marketo.png",
    "active": true,
    "deleted": false,
    "typeOauth": true,
    "trialAccount": false,
    "configDescription": "If you do not have an Marketo account, you can create one at <a href=\"//http://pages2.marketo.com/freetrial.html\"\n        target=\"_blank\">Marketo Signup</a>",
    "resources":[],
    "transformationsEnabled": true,
    "bulkDownloadEnabled": true,
    "bulkUploadEnabled": true,
    "cloneable": true,
    "extendable": true,
    "beta": false,
    "authentication": {
      "type": "oauth2"
    },
    "extended": false,
    "hub": "marketing",
    "protocolType": "http",
    "parameters": [],
    "private": false
  },
  "elementId": 85,
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "event.notification.subscription.id": null,
    "oauth.api.secret": "qePHp0mBzTE693mJg20ls2CNhSi0Bbmm",
    "base.url": "https://338-ZRW-745.mktorest.com/rest",
    "marketo.identity.url": "https://338-ZRW-745.mktorest.com/identity",
    "event.vendor.type": "polling",
    "event.helper.key": "marketoPolling",
    "oauth.user.token": "25607056-f75d-42b5-a58a-cef2f016ad36:ab",
    "filter.response.nulls": "true",
    "event.poller.refresh_interval": "15",
    "event.notification.callback.url": null,
    "event.notification.signature.key": null,
    "event.poller.urls": "leads",
    "oauth.user.refresh_interval": "3381",
    "oauth.api.key": "451a529b-8f0f-404a-93b7-b5adb7a01ef1",
    "oauth.user.refresh_time": "1496772027604"
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
