---
heading: SAP Hybris Cloud for Customer CRM
seo: Authenticate an Element Instance | SAP Anywhere | Cloud Elements API Docs
title: Authenticate
description: Authenticate an Element Instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 3521
parent: Back to Element Guides
order: 20
---

# Authenticate with SAP Hybris Cloud for Customer

You can authenticate with SAP Hybris Cloud for Customer to create your own instance of the {{page.heading}} element through {{site.console}} or through APIs. You can use the authenticated element instance to access the different resources at the {{page.heading}} platform.

{% include note.html content="If you want to set up events when you authenticate, go to <a href=events.html>the Events section</a>" %}

{% include callout.html content="<strong>On this page</strong></br><a href=#authenticate-through-the-ui>Authenticate Through the UI</a></br><a href=#authenticate-through-api>Authenticate Through API</a></br><a href=#parameters>Parameters</a></br><a href=#example-response>Example Response</a>" type="info" %}

## Authenticate Through the UI

Use {{site.console}} to authenticate with SAP Hybris Cloud for Customer and create an element instance. If you are authenticating with events, see the [Events section](events.html).

To authenticate an element instance:

1. Sign in to Cloud Elements, and then search for {{page.heading}} in our Elements Catalog.
![Search](/assets/img/elements/element-search2.png)
4. Hover over the element card, and then click **Authenticate**.
![Create Instance](/assets/img/elements/authenticate-instance.gif)
5. Enter a name for the element instance.
6. Complete the required parameters in the Configuration section: **Subdomain**, **Username**, and **Password**. See [Parameters](#parameters) for descriptions.
7. If you want to add events, go to [Configure Polling Through the UI](events.html#configure-polling-through-the-ui).
7. Click **Create Instance**.

After successfully authenticating, we give you several options for next steps. [Make requests using the API docs](https://docs.cloud-elements.com/home/view-element-api-docs) associated with the instance, [map the instance to a virtual data resource](https://docs.cloud-elements.com/home/common-object), or [use it in a formula template](https://docs.cloud-elements.com/home/formula-template).

## Authenticate Through API

Use the `/instances` endpoint to authenticate with SAP Hybris Cloud for Customer and create an authenticated element instance. If you are authenticating with events, see the [Events section](events.html).

{% include note.html content="The endpoint returns an Element token upon successful completion. Retain the token for all subsequent requests involving this element instance.  " %}

To authenticate an element instance:

1. Construct a JSON body as shown below (see [Parameters](#parameters)):

    ```json
    {
        "element": {
          "key": "sapc4ccrm"
        },
        "configuration": {
          "subdomain": "<domain>.crm.ondemand.com",
          "username": "<YOUR_SAP_Hybris Cloud for Customer_USERNAME>",
          "password": "<YOUR_SAP_Hybris Cloud for Customer_PASSWORD>"
        },
        "tags": [
          "ElementDocs"
          ],
        "name": "<AUTHENTICATED_INSTANCE_NAME>"
    }
    ```
1. Call the following, including the JSON body you constructed in the previous step:

        POST /instances

    {% include note.html content="Make sure that you include the User and Organization keys in the header. See <a href=index.html#authenticating-with-cloud-elements>the Overview</a> for details. " %}

1. Locate the `token` and `id` in the response and save them for all future requests using the element instance.

### Example cURL

```
curl -X POST \
  https://staging.cloud-elements.com/elements/api-v2/instances \
  -H 'Authorization: User <INSERT>, Organization <INSERT>'  \
  -H 'content-type: application/json' \
  -d '{
  "element": {
	"key": "sapc4ccrm"
  },
  "configuration": {
    "subdomain": "<domain>.crm.ondemand.com",
    "username": "<YOUR_SAP_Hybris Cloud for Customer_USERNAME>",
    "password": "<YOUR_SAP_Hybris Cloud for Customer_PASSWORD>"
  },
  "tags": [
	"ElementDocs"
  ],
  "name": "SAPHybris Cloud for CustomerAPI3"
}
'
```

## Parameters

API parameters not shown in {{site.console}} are in `code formatting`.

{% include note.html content="Event related parameters are described in <a href=events.html>Events</a>." %}

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| 'key' | The element key.<br>sapc4ccrm  | string  |
|  Name</br>`name` |  The name for the element instance created during authentication.   | string  |
| Subdomain </br>`subdomain`| The url of your {{page.heading}} site. Replace <domain> in the default url with your own information.    |   |string |
| Username | Your user name for {{page.heading}}. | String |
| Password | Your password for {{page.heading}}. | String |
| tags | *Optional*. User-defined tags to further identify the instance. | string |

## Example Response

```json
{
  "id": 50753,
  "name": "SAPC4HDCAPI2",
  "createdDate": "2017-05-22T04:12:16Z",
  "token": "jDCglCWOTvIjkqB54Kaz249kXcydo+ADNUUcPR1FriI=",
  "element": {
    "id": 5354,
    "name": "SAP Hybris Cloud for Customer Helpdesk",
    "key": "sapc4chd",
    "description": "Add a SAP Cloud for Customer (Hybris Cloud for Customer) Instance to connect your existing SAP Cloud for Customer (Hybris Cloud for Customer) account to the Helpdesk Hub, allowing you to manage accounts, contacts, incidents, etc. across multiple Helpdesk Elements. You will need your SAP Cloud for Customer (Hybris Cloud for Customer) account information to add an instance.",
    "image": "elements/provider_sapc4c.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "resources": [],
    "transformationsEnabled": true,
    "bulkDownloadEnabled": true,
    "bulkUploadEnabled": true,
    "cloneable": true,
    "extendable": false,
    "beta": false,
    "authentication": {
      "type": "basic"
    },
    "extended": false,
    "hub": "helpdesk",
    "protocolType": "odata",
    "parameters": [
      {
        "id": 3990,
        "createdDate": "2017-05-17T09:37:05Z",
        "name": "subdomain",
        "vendorName": "siteUrl",
        "type": "configuration",
        "vendorType": "path",
        "source": "request",
        "elementId": 5353,
        "required": false
      }
    ],
    "private": false
  },
  "elementId": 5353,
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {  },
  "eventsEnabled": false,
  "traceLoggingEnabled": false,
  "cachingEnabled": false,
  "externalAuthentication": "none",
  "user": {  }
}
```
