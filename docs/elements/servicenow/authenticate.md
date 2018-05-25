---
heading: ServiceNow
seo: Authenticate | ServiceNow | Cloud Elements API Docs
title: Authenticate
description: Authenticate an element instance with the API provider.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 145
elementKey: servicenow
parent: Back to Element Guides
order: 20
---

# Authenticate with {{page.heading}}

You can authenticate with {{page.heading}} to create your own instance of the {{page.heading}} element through the UI or through APIs. Once authenticated, you can use the element instance to access the different functionality offered by the {{page.heading}} platform.

{% include callout.html content="<strong>On this page</strong></br><a href=#authenticate-through-the-ui>Authenticate Through the UI</a></br><a href=#authenticate-through-api>Authenticate Through API</a></br><a href=#parameters>Parameters</a></br><a href=#example-response>Example Response</a>" type="info" %}

## Authenticate Through the UI

Use the UI to authenticate with {{page.heading}} and create an element instance. {{page.heading}} authentication follows a basic authentication framework.  You will need your username and password along with the subdomain of your ServiceNow account.

If you are configuring events, see the [Events section](events.html).

To authenticate an element instance:

1. Sign in to Cloud Elements, and then search for {{page.heading}} in our Elements Catalog.
![Search](/assets/img/elements/element-search2.png)
4. Hover over the element card, and then click **Authenticate**.
![Create Instance](/assets/img/elements/authenticate-instance.gif)
5. Enter a name for the element instance.
6. In **The ServiceNow Subdomain** enter your subdomain or entire URL. The subdomain is the part of your URL that is specific to your organization, for example in `https://domain12345.service-now.com/` `domain12345` is the subdomain.
7. In **Username** and **Password**, enter the credentials that you use to log in to ServiceNow.
9. Optionally type or select one or more Element Instance Tags to add to the authenticated element instance.
7. Click **Create Instance**.
8. Provide your {{page.heading}} credentials, and then allow the connection.

After successfully authenticating, we give you several options for next steps. [Make requests using the API docs](https://docs.cloud-elements.com/home/view-element-api-docs) associated with the instance, [map the instance to a virtual data resource](https://docs.cloud-elements.com/home/common-object), or [use it in a formula template](https://docs.cloud-elements.com/home/formula-template).

## Authenticate Through API

Use the `/instances` endpoint to authenticate with ServiceNow and create an element instance. If you are configuring events, see the [Events section](events.html).

{% include note.html content="The endpoint returns an Element token upon successful completion. Retain the token for all subsequent requests involving this element instance.  " %}

To create an element instance:

1. Construct a JSON body as shown below (see [Parameters](#parameters)):

    ```json
    {
      "element": {
        "key": "{{page.elementKey}}"
      },
      "configuration": {
        "username": "<USERNAME>",
        "password": "<PASSWORD>",
      	"servicenow.subdomain": "<SUBDOMAIN>",
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

curl -X POST  \
 -H 'Authorization: User <INSERT>, Organization <INSERT>'  \
 -H 'Content-Type: application/json'  \
 --data '{ \
  "name": "My_ServiceNow", \
  "configuration": { \
    "filter.response.nulls": "true", \
    "username": "username", \
    "password": "******", \
    "servicenow.subdomain": "dev12345" \
  } \
}'  \
'https://api.cloud-elements.com/elements/api-v2/elements/145/instances'
```
## Parameters

API parameters not shown in {{site.console}} are in `code formatting`.

{% include note.html content="Event related parameters are described in <a href=events.html>Events</a>." %}

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| `key` | The element key.<br>{{page.elementKey}}  | string  |
|  Name</br>`name` |  The name for the element instance created during authentication.   | string  |
| Username</br>`username` | Your ServiceNow user name.  |
| Password</br>`password` | Your ServiceNow password. |  string |
| The ServiceNow Subdomain</br>`servicenow.subdomain` | This is the part of your URL that is specific to your organization, for example in `https://domain12345.service-now.com/` `domain12345` is the subdomain | string |
| Filter null values from the response </br>`filter.response.nulls` | *Optional*. Determines if null values in the response JSON should be filtered from the response. Yes or `true` indicates that Cloud Elements will filter null values. </br>Default: `true`.  | boolean |
| tags | *Optional*. User-defined tags to further identify the instance. | string |

## Example Response

```json
{
  "id": 427251,
  "name": "My_ServiceNow",
  "createdDate": "2017-06-06T22:26:22Z",
  "token": "kt6uJ77QG1iCIZNgRvl/BcpJL/JS94sBwwQdicNRZ5s=",
  "element": {
    "id": 145,
    "name": "ServiceNow",
    "hookName": "ServiceNow",
    "key": "servicenow",
    "description": "ServiceNow is changing the way people work, offering service management for every department in the enterprise including IT, human resources, facilities & more.",
    "image": "https://pbs.twimg.com/profile_images/378800000041139697/cf1e6299ecb533ed82725abe96bb96a9_400x400.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "resources": [],
    "transformationsEnabled": true,
    "bulkDownloadEnabled": true,
    "bulkUploadEnabled": true,
    "cloneable": true,
    "extendable": true,
    "beta": false,
    "authentication": {
      "type": "basic"
    },
    "extended": false,
    "hub": "helpdesk",
    "protocolType": "http",
    "parameters": [
      {
        "id": 11,
        "createdDate": "2015-04-26T16:11:49Z",
        "name": "servicenow.subdomain",
        "vendorName": "subdomain",
        "type": "configuration",
        "vendorType": "path",
        "source": "request",
        "elementId": 145,
        "required": false
      }
    ],
    "private": false
  },
  "elementId": 145,
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "base.url": "https://{subdomain}.service-now.com/api/now/v1/table",
    "bulk.add_metadata": "false",
    "event.notification.subscription.id": null,
    "bulk.query.field_name": "sys_updated_on",
    "pagination.max": "200",
    "servicenow.subdomain": "subdomain123",
    "event.vendor.type": "polling",
    "bulk.query.operator": ">=",
    "filter.response.nulls": "true",
    "bulk.query.date_mask": "yyyy/MM/dd HH:mm:ss",
    "bulk.attribute.created_time": "sys_created_on",
    "bulk.query.download_format": "json",
    "password": "********",
    "bulk.relations": "{}",
    "pagination.type": "offset",
    "event.poller.refresh_interval": "15",
    "event.notification.callback.url": null,
    "event.notification.signature.key": null,
    "event.poller.configuration": "{}",
    "username": "username",
    "event.notification.enabled": "false"
  },
  "eventsEnabled": false,
  "traceLoggingEnabled": false,
  "cachingEnabled": false,
  "externalAuthentication": "none",
  "user": {
    "id": 1234567
  }
}
```
