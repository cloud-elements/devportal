---
heading: QuickBooks Enterprise
seo: Authenticate | QuickBooks Enterprise | Cloud Elements API Docs
title: Authenticate
description: Authenticate an element instance with the API provider
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 195
elementKey: quickbooksonprem
parent: Back to Element Guides
order: 20
---

# Authenticate with {{page.heading}}

You can authenticate with {{page.heading}} to create your own instance of the {{page.heading}} element through the UI or through APIs. Once authenticated, you can use the element instance to access the different functionality offered by the {{page.heading}} platform.

{% include callout.html content="<strong>On this page</strong><br/><a href=#authenticate-through-the-ui>Authenticate Through the UI</a><br/><a href=#authenticate-through-api>Authenticate Through API</a><br/><a href=#parameters>Parameters</a><br/><a href=#example-response>Example Response</a>" type="info" %}

## Authenticate Through the UI

Use the UI to authenticate with {{page.heading}} and create an element instance. {{page.heading}} uses a simple authentication method for its connections. All we need is the _exact_ app name that is setup in QuickBooks, and the endpoint IP or URL (most likely a [Ground2Cloud](https://docs.cloud-elements.com/home/ground-2-cloud-connect-your-on-premise-apps) URL).

If you are configuring events, see the [Events section](events.html).

To authenticate an element instance:

1. Sign in to Cloud Elements, and then search for {{page.heading}} in our Elements Catalog.
![Search](/assets/img/elements/element-search2.png)
4. Hover over the element card, and then click **Authenticate**.
![Create Instance](/assets/img/elements/authenticate-instance.gif)
1. Enter a name for the element instance.
2. In **Configured Application Name**, enter the application name that is configured in the QuickBooks application.
3. In **Host Name/IP**, enter the address of the application endpoint. In most cases, this will be a [Ground2Cloud](https://docs.cloud-elements.com/home/ground-2-cloud-connect-your-on-premise-apps) address. The Ground2Cloud endpoint will look something like: `https://1234.g2c.cloud-elements.com`. Where `1234` is the number specific to your application. The reason for using Ground2Cloud is so that the Cloud Elements servers can communicate with an on-premise installation of QuickBooks Enterprise, without the need to open up firewalls to your site.
1. Click **Create Instance**.

After successfully authenticating, we give you several options for next steps. [Make requests using the API docs](https://docs.cloud-elements.com/home/view-element-api-docs) associated with the instance, [map the instance to a virtual data resource](https://docs.cloud-elements.com/home/common-object), or [use it in a formula template](https://docs.cloud-elements.com/home/formula-template).

## Authenticate Through API

Authenticating through API is as simple as providing the necessary authentication parameters in the request body in order to [Authenticate the element instance](#authenticating-the-element-instance).

### Authenticating the Element Instance

Use the `/instances` endpoint to authenticate with {{page.heading}} and create an element instance. If you are configuring events, see the [Events section](events.html).

{% include note.html content="The endpoint returns an Element token upon successful completion. Retain the token for all subsequent requests involving this element instance." %}

To create an element instance:

1. Construct a JSON body as shown below (see [Parameters](#parameters)):

    ```json
    {
      "element": {
        "key": "{{page.elementKey}}"
      },
      "configuration": {
        "filter.response.nulls": "true",
        "app.name": "<APP_NAME>",
        "host.ip": "<HOST_IP>"
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
    "filter.response.nulls": "true",
    "app.name": "<APP_NAME>",
    "host.ip": "<HOST_IP>"
  },
  "tags": [
    "QuickBooks"
  ],
  "name": "QuickBooks Enterprise"
}'
```
## Parameters

API parameters not shown in {{site.console}} are in `code formatting`.

{% include note.html content="Event related parameters are described in <a href=events.html>Events</a>." %}

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| Key<br/>`key` | The element key.<br/>{{page.elementKey}}  | string  |
|  Name<br/>`name` |  The name for the element instance created during authentication.   | Body  |
| Configured Application Name</br>`app.name` | The **Configured Application Name** that you noted in [API Provider Setup](setup.html). | string |
| Host Name/IP</br>`host.ip` | The **Host Name/IP** that you noted in [API Provider Setup](setup.html). | string |
| Filter null values from the response <br/>`filter.response.nulls` | *Optional*. Determines if null values in the response JSON should be filtered from the response. Yes or `true` indicates that Cloud Elements will filter null values. <br/>Default: `true`.  | boolean |
| tags | *Optional*. User-defined tags to further identify the instance. | string |

## Example Response

```json
{
	"id": 1,
	"name": "QuickBooks Enterprise",
	"createdDate": "2017-06-06T19:08:52Z",
	"token": "pIHuafNc/17ADfEjcqIsFZ9eNNk58dXSEdqhC5QnQBk=",
	"element": {
		"id": 195,
		"name": "QuickBooks Enterprise",
		"hookName": "QuickBooksEnterprise",
		"key": "quickbooksonprem",
		"description": "Add a QuickBooks Enterprise Instance to connect your existing QuickBooks Enterprise account to the Finance Hub, allowing you to manage your customers, employees, invoices, purchase orders etc. across multiple Finance Elements. You will need your QuickBooks Enterprise account information to add an instance.",
		"image": "elements/provider_quickbooks.png",
		"active": true,
		"deleted": false,
		"typeOauth": true,
		"trialAccount": false,
		"configDescription": "QuickBooks Desktop Element",
		"defaultTransformations": [{"...": "..."}]
  },
  "elementId": 195,
"provisionInteractions": [],
"valid": true,
"disabled": false,
"maxCacheSize": 0,
"cacheTimeToLive": 0,
"configuration": {
  "bulk.add_metadata": "false",
  "event.notification.subscription.id": null,
  "bulk.query.field_name": "TimeModified",
  "event.vendor.type": "polling",
  "bulk.query.operator": ">=",
  "filter.response.nulls": "true",
  "bulk.query.date_mask": "yyyy-MM-dd'T'HH:mm:ssXXX",
  "host.ip": "<HOST_IP>",
  "bulk.query.download_format": "json",
  "bulk.attribute.created_time": "TimeCreated",
  "bulk.relations": "{}",
  "event.poller.refresh_interval": "15",
  "event.notification.callback.url": null,
  "event.notification.signature.key": null,
  "bulk.attribute.modified_time": "TimeModified",
  "event.poller.urls": null,
  "event.poller.configuration": "...",
  "app.name": "<APP_NAME>",
  "event.notification.enabled": "false"
},
"eventsEnabled": false,
"traceLoggingEnabled": false,
"cachingEnabled": false,
"externalAuthentication": "none",
"user": {
  "id": "..."
}
```
