---
heading: Sage CRM
seo: Authenticate | Sage CRM | Cloud Elements API Docs
title: Authenticate
description: Authenticate an element instance with the API provider
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 3641
elementKey: sagecrm
parent: Back to Element Guides
order: 20
---

# Authenticate with {{page.heading}}

You can authenticate with {{page.heading}} to create your own instance of the {{page.heading}} element through the UI or through APIs. Once authenticated, you can use the element instance to access the different functionality offered by the {{page.heading}} platform.

{% include callout.html content="<strong>On this page</strong></br><a href=#authenticate-through-the-ui>Authenticate Through the UI</a></br><a href=#authenticate-through-api>Authenticate Through API</a></br><a href=#parameters>Parameters</a></br><a href=#example-response>Example Response</a>" type="info" %}

## Authenticate Through the UI

Use the UI to authenticate with {{page.heading}} and create an element instance.

If you are configuring events, see the [Events section](events.html).

To authenticate an element instance:

1. Sign in to Cloud Elements, and then search for the element in our Elements Catalog.

    | Latest UI | Earlier UI  |
    | :------------- | :------------- |
    |  ![Search](/assets/img/elements/element-search2.png)  |  ![Search](/assets/img/elements/element-search.png)  |

3. Create an element instance.

    | Latest UI | Earlier UI  |
    | :------------- | :------------- |
    | Hover over the element card, and then click __Create Instance__.</br> ![Create Instance](/assets/img/elements/authenticate-instance.gif)  | Click __Add Instance__.</br> ![Search](/assets/img/elements/add-instance.png)  |

5. Enter a name for the element instance.
6. In **Subdomain** enter just the subdomain portion of the URL that you use to log in to Sage CRM, excluding the `HTTPS://` portion of your URL.
7. Enter your Sage CRM user name and password.
7. Click __Create Instance__ (latest UI) or __Next__ (earlier UI).
8. Optionally add tags in the earlier UI:
     1. On the Tag It page, enter any tags that might help further define the instance.
      * To add more than one tag, click __Add__ after each tag.
      ![Add tag](/assets/img/elements/add-tag.png)
     1. Click __Done__.
9. Note the **Token** and **ID** and save them for all future requests using the element instance.
8. Take a look at the documentation for the element resources now available to you.

## Authenticate Through API

Use the `/instances` endpoint to authenticate with {{page.heading}} and create an element instance. If you are configuring events, see the [Events section](events.html).

{% include note.html content="The endpoint returns an element instance token and id upon successful completion. Retain the token and id for all subsequent requests involving this element instance.  " %}

To create an element instance:

1. Construct a JSON body as shown below (see [Parameters](#parameters)):


    ```json
    {
      "element": {
        "key": "{{page.elementKey}}"
      },
      "configuration": {
        "subdomain": "sagecrm-0.<YOUR_TENANT>.com",
        "username": "<YOUR_USERNAME>",
        "password": "<YOUR_PASSWORD>"
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
  	"key": "sagecrm"
    },
    "configuration": {
    	"subdomain": "sagecrm-0.cloud-elements.com",
    	"username": "XXXXXX",
    	"password": "XXXXXXXXXX"
    },
    "tags": [
  	 "Docs"
    ],
    "name": "SageCRM"
  }
  '
```
## Parameters

API parameters not shown in {{site.console}} are in `code formatting`.

{% include note.html content="Event related parameters are described in <a href=events.html>Events</a>." %}

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| 'key' | The element key.</br>{{page.elementKey}}  | string  |
|  Name</br>`name` |  The name for the element instance created during authentication.   | string  |
| Subdomain</br>`subdomain` | The subdomain portion of your Sage CRM URL, excluding HTTPS:// |string |
| Username</br>`username` | Your Sage CRM user name. |  string |
| Password</br>`password` | Your Sage CRM password. | string |
| tags | *Optional*. User-defined tags to further identify the instance. | string |

## Example Response

```json
{
  "id": 427902,
  "name": "SageCRM",
  "createdDate": "2017-06-12T14:09:00Z",
  "token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "element": {
      "id": 3641,
      "name": "Sage CRM",
      "key": "sagecrm",
      "description": "Add a Sage CRM  Instance to connect your existing Sage account to the SageCRM Hub, allowing you to manage accounts, contacts, leads, opportunities, and users, etc. across multiple Sage Elements. You will need your Sage CRM account information to add an instance.",
      "image": "/elements/provider_sagecrm.png",
      "active": true,
      "deleted": false,
      "typeOauth": false,
      "trialAccount": false,
      "resources": [ ]
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
      "hub": "crm",
      "protocolType": "http",
      "parameters": [],
      "private": false
    },
    "elementId": 3641,
    "provisionInteractions": [],
    "valid": true,
    "disabled": false,
    "maxCacheSize": 0,
    "cacheTimeToLive": 0,
    "configuration":  {
        "base.url": "https://{subdomain}/sdata/crmj/sagecrm2/-",
        "bulk.add_metadata": null,
        "bulk.query.field_name": "replaceMe",
        "pagination.max": "200",
        "bulk.accounts.attribute.created_time": "Comp_UpdatedDate",
        "event.vendor.type": "polling",
        "bulk.query.operator": ">=",
        "bulk.query.date_mask": "yyyy-MM-dd'T'HH:mm:ss'Z'",
        "bulk.query.download_format": "JSON",
        "password": "********",
        "bulk.contacts.attribute.created_time": "Pers_UpdatedDate",
        "pagination.type": "cursor",
        "bulk.relations": null,
        "event.poller.refresh_interval": "15",
        "event.notification.callback.url": null,
        "subdomain": "sagecrm-0.cloud-elements.com",
        "bulk.leads.attribute.created_time": "Lead_UpdatedDate",
        "bulk.users.attribute.created_time": "User_UpdatedDate",
        "bulk.opportunities.attribute.created_time": "Oppo_UpdatedDate",
        "bulk.query.update": "true",
        "event.poller.configuration": "{ }",
        "username": "xxxxx",
        "event.notification.enabled": "false"
    },
    "eventsEnabled": false,
    "traceLoggingEnabled": false,
    "cachingEnabled": false,
    "externalAuthentication": "none",
    "user": {
        "id": 160673
    }
}
```
