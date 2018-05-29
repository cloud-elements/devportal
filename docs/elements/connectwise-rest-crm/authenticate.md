---
heading: ConnectWise REST
seo: Authenticate | ConnectWise REST | Cloud Elements API Docs
title: Authenticate
description: Authenticate
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 3012
elementKey: connectwisecrmrest
parent: Back to Element Guides
order: 20
---

# Authenticate with {{page.heading}}

You can authenticate with {{page.heading}} to create your own instance of the {{page.heading}} element through the UI or through APIs. Once authenticated, you can use the element instance to access the different functionality offered by the {{page.heading}} platform.

{% include callout.html content="<strong>On this page</strong></br><a href=#authenticate-through-the-ui>Authenticate Through the UI</a></br><a href=#authenticate-through-api>Authenticate Through API</a></br><a href=#parameters>Parameters</a></br><a href=#example-response-for-an-authenticated-element-instance>Example Response for an Authenticated Element Instance</a>" type="info" %}

## Authenticate Through the UI

Use the UI to authenticate with {{page.heading}} and create an element instance.

If you are configuring events, see the [Events section](events.html).

To authenticate an element instance:

1. Sign in to Cloud Elements, and then search for {{page.heading}} in our Elements Catalog.
![Search](/assets/img/elements/element-search2.png)
4. Hover over the element card, and then click **Authenticate**.
![Create Instance](/assets/img/elements/authenticate-instance.gif)
5. Enter a name for the element instance
6. In **ConnectWise URL** replace `{siteUrl}` with the url of your ConnectWise site with `api-` appended.
7. In **Company** enter the company name associated with your account.
8. In **Public Key** and **Private Key** enter the keys that you identified in [API Provider Setup](setup.html).
9. Optionally type or select one or more Element Instance Tags to add to the authenticated element instance.
7. Click **Create Instance**.

After successfully authenticating, we give you several options for next steps. [Make requests using the API docs](https://docs.cloud-elements.com/home/view-element-api-docs) associated with the instance, [map the instance to a virtual data resource](https://docs.cloud-elements.com/home/common-object), or [use it in a formula template](https://docs.cloud-elements.com/home/formula-template).

## Authenticate Through API

Authenticating through API is similar to authenticating via the UI. Instead of clicking and typing through a series of buttons, text boxes, and menus, you will instead send a request to our `/instances` endpoint. The end result is the same, though: an authenticated element instance with a  **token** and **id**.

To authenticate an element instance:

1. Construct a JSON body as shown below (see [Parameters](#parameters)):

    ```json
    {
      "element": {
        "key": "connectwisecrmrest"
      },
      "configuration": {
    	"baseUrl": "https://api-<MYCONNECTWISE.COM>/v4_6_release/apis/3.0",
    	"company": "<COMPANY_NAME>",
    	"public.key": "<PUBLIC_KEY>",
    	"private.key": "<PRIVATE_KEY>"
      },
      "tags": [
    	"Docs"
      ],
      "name": "ConnectWise_Instance"
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
  -H 'Authorization: User <INSERT>, Organization <INSERT>'  \
  -H 'content-type: application/json' \
  -d '{
  "element": {
    "key": "connectwisecrmrest"
  },
  "configuration": {
    "baseUrl": "https://api-<MYCONNECTWISE.COM>/v4_6_release/apis/3.0",
    "company": "cloudelements",
    "public.key": "xxxxxxxx",
    "private.key": "xxxxxxxxxxxxxxxxxx"
  },
  "tags": [
    "Docs"
  ],
  "name": "ConnectWise_Instance"
}
'
```

## Parameters

API parameters not shown in {{site.console}} are in `code formatting`.

{% include note.html content="Event related parameters are described in <a href=events.html>Events</a>." %}

| Heading | Heading   | Data Type |
| :------------- | :------------- | :------------- |
| 'key' | The element key.<br>{{page.elementKey}}  | string  |
|  Name</br>`name` |  The name for the element instance created during authentication.   | Body  |
| Connectwise URL</br>`baseUrl` | The url of your ConnectWise site with `api-` appended.</br> Be sure to add your url only to the siteURL section of the entire URL, so the entire value looks like: `https://<api-myconnectwise.com>/v4_6_release/apis/3.0`.<br> Where `<api-myconnectwise.com>` is one of the following: <ul><li>`api-eu.myconnectwise.net`</li><li>`api-au.myconnectwise.net`</li><li>`api-na.myconnectwise.net`</li><li>`api-staging.connectwisedev.com`</li></ul>| string |
| Company</br>`company` | The company name that you use to log in. |  string |
| Public Key</br>`public.key` |  The Public Key from ConnectWise. See [API Provider Setup](setup.html)| string |
| Private Key</br>`private.key` | The Private Key from ConnectWise. See [API Provider Setup](setup.html)| string |
| Filter null values from the response </br>`filter.response.nulls` | *Optional*. Determines if null values in the response JSON should be filtered from the response. Yes or `true` indicates that Cloud Elements will filter null values. </br>Default: `true`  | boolean |

## Example Response for an Authenticated Element Instance

In this example, the instance ID is `12345` and the instance token starts with "ABC/D...". The actual values returned to you will be unique: make sure you save them for future requests to this new instance.

```json
{
  "id": 12345,
  "name": "API Instance",
  "createdDate": "2017-08-07T18:46:38Z",
  "token": "ABC/Dxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "element": {
      "id": 3012,
      "name": "Connectwise CRM REST Beta",
      "key": "connectwisecrmrest",
      "description": "Add a ConnectWise Instance to connect your existing ConnectWise account to the crm Hub, allowing you to manage contacts , organizations and incidents across multiple Elements. You will need your ConnectWise account and ConnectWise information to add an instance.",
      "image": "elements/provider_connectwise.png",
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
      "beta": false,
      "authentication": {
          "type": "custom"
      },
      "extended": false,
      "hub": "crm",
      "protocolType": "http",
      "parameters": [  ],
      "private": false
    },
    "elementId": {{page.elementId}},
    "tags": [
      "Docs"
      ],
    "provisionInteractions": [  ],
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

```
