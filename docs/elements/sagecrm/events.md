---
heading: Sage CRM
seo: Events | Sage CRM | Cloud Elements API Docs
title: Events
description: Enable Sage CRM events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 3641
elementKey: sagecrm
parent: Back to Element Guides
order: 25
---

# Events

Cloud Elements supports events via polling or webhooks depending on the endpoint. If you would like to see more information on our Events framework, see the [Event Management Guide](/docs/platform/event-management/index.html).

{% include callout.html content="<strong>On this page</strong></br><a href=#supported-events-and-resources>Supported Events and Resources</a></br><a href=#polling>Polling</a></br><a href=#parameters>Parameters</a>" type="info" %}

## Supported Events and Resources

Cloud Elements supports polling events for {{page.heading}}.

You can set up events for the following resources:

* accounts
* contacts
* leads
* opportunities
* users

{% include note.html content="You can set up polling for other resources that include <code>created</code>, <code>updated</code>, and <code>deleted</code> data through our API. Copy the configuration of one of the default resources, and replace the name with the resource that you want to poll.  " %}

## Polling

You can configure polling [through the UI](#configure-polling-through-the-ui) or in the JSON body of the `/instances` [API call](#configure-polling-through-api) .

{% include note.html content="Unless configured for a specific time zone, polling occurs in UTC.  " %}


### Configure Polling Through the UI

For more information about each field described here, see [Parameters](#parameters).

{% include note.html content="To set up polling, the Sage CRM server time zone, system administrator time zone, and polling configuration must match. See <a href=setup.html>API Provider Setup</a> for instructions.  " %}

To authenticate an element instance with polling:

1. Enter the basic information required to create an element instance as described in [Authenticate with {{page.heading}}](authenticate.html) .
2. Enable events: Switch **Events Enabled** on.
![event-enabled-on](/assets/img/elements/event-enabled-on.png)
8. Add an Event Notification Callback URL.
4. Use the __Event poller refresh interval (mins)__ slider or enter a number in minutes to specify how often Cloud Elements should poll for changes.
5. Select the resources to poll.
6. Advanced users can further configure polling:
  - Click <img src="/assets/img/platform-icons/code.png" alt="Code Button" class="inlineImage"> to edit the polling configuration JSON directly.
  ![Configure Polling UI](/assets/img/elements/configure-polling-json.gif)
  - Click <img src="/assets/img/platform-icons/pencil.png" alt="Edit Button" class="inlineImage"> to access the poller configuration.
  ![Configure Polling JSON](/assets/img/elements/configure-polling2.gif)

    {% include note.html content="If the time zones that you set up in Sage CRM are not UTC+00:00, make sure that you update the time zones in the poller configuration to match.  " %}

7. Click **Create Instance**.

After successfully authenticating, we give you several options for next steps. [Make requests using the API docs](https://docs.cloud-elements.com/home/view-element-api-docs) associated with the instance, [map the instance to a virtual data resource](https://docs.cloud-elements.com/home/common-object), or [use it in a formula template](https://docs.cloud-elements.com/home/formula-template).

### Configure Polling Through API

Use the `/instances` endpoint to authenticate with {{page.heading}} and create an element instance with polling enabled.

{% include note.html content="The endpoint returns an element instance token and id upon successful completion. Retain the token and id for all subsequent requests involving this element instance.  " %}

To authenticate an element instance with polling:

1. Construct a JSON body as shown below (see [Parameters](#parameters)):

    ```json
    {
      "element":{
        "key":"{{page.elementKey}}"
      },
      "configuration":{
        "subdomain": "sagecrm-0.<YOUR_TENANT>.com",
        "username": "<YOUR_USERNAME>",
        "password": "<YOUR_PASSWORD>",
        "event.notification.enabled": true,
        "event.notification.callback.url": "https://console.cloud-elements.com",
        "event.poller.refresh_interval": "15",
        "event.poller.configuration":{
          	"accounts": {
          		"url": "/hubs/crm/accounts?where=Comp_UpdatedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
          		"idField": "key",
          		"datesConfiguration": {
          			"updatedDateField": "Comp_UpdatedDate",
          			"updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss'Z'",
          			"updatedDateTimezone": "GMT",
          			"createdDateField": "Comp_CreatedDate",
          			"createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss'Z'",
          			"createdDateTimezone": "GMT"
          		}
          	},
          	"contacts": {
          		"url": "/hubs/crm/contacts?where=Pers_UpdatedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
          		"idField": "key",
          		"datesConfiguration": {
          			"updatedDateField": "Pers_UpdatedDate",
          			"updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss'Z'",
          			"updatedDateTimezone": "GMT",
          			"createdDateField": "Pers_CreatedDate",
          			"createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss'Z'",
          			"createdDateTimezone": "GMT"
          		}
          	},
          	"leads": {
          		"url": "/hubs/crm/leads?where=Lead_UpdatedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
          		"idField": "key",
          		"datesConfiguration": {
          			"updatedDateField": "Lead_UpdatedDate",
          			"updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss'Z'",
          			"updatedDateTimezone": "GMT",
          			"createdDateField": "lead_createddate",
          			"createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss'Z'",
          			"createdDateTimezone": "GMT"
          		}
          	},
          	"opportunities": {
          		"url": "/hubs/crm/opportunities?where=Oppo_UpdatedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
          		"idField": "key",
          		"datesConfiguration": {
          			"updatedDateField": "Oppo_UpdatedDate",
          			"updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss'Z'",
          			"updatedDateTimezone": "GMT",
          			"createdDateField": "Oppo_CreatedDate",
          			"createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss'Z'",
          			"createdDateTimezone": "GMT"
          		}
          	},
          	"users": {
          		"url": "/hubs/crm/users?where=User_UpdatedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
          		"idField": "key",
          		"datesConfiguration": {
          			"updatedDateField": "User_UpdatedDate",
          			"updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss'Z'",
          			"updatedDateTimezone": "GMT",
          			"createdDateField": "User_CreatedDate",
          			"createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss'Z'",
          			"createdDateTimezone": "GMT"
          		}
          	}
          }
      },
      "tags":[
        "<Add_Your_Tag>"
      ],
      "name":"<INSTANCE_NAME>"
    }
    ```

1. Call the following, including the JSON body you constructed in the previous step:

        POST /instances

    {% include note.html content="Make sure that you include the User and Organization keys in the header. See <a href=index.html#authenticating-with-cloud-elements>the Overview</a> for details. " %}

1. Locate the `token` and `id` in the response and save them for all future requests using the element instance.


### Example JSON with Polling

instance JSON with polling events enabled:

```json
{
  "element": {
	"key": "sagecrm"
  },
  "configuration": {
	"subdomain": "sagecrm-0.cloud-elements.com",
	"username": "xxxxx",
	"password": "xxxxxxxxxxxxxxxxxxxxxx",
	"event.notification.enabled": true,
	"event.notification.callback.url": "https://console.cloud-elements.com",
	"event.poller.refresh_interval": "15",
	"event.poller.configuration":{
	  	"accounts": {
	  		"url": "/hubs/crm/accounts?where=Comp_UpdatedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
	  		"idField": "key",
	  		"datesConfiguration": {
	  			"updatedDateField": "Comp_UpdatedDate",
	  			"updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss'Z'",
	  			"updatedDateTimezone": "GMT",
	  			"createdDateField": "Comp_CreatedDate",
	  			"createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss'Z'",
	  			"createdDateTimezone": "GMT"
	  		}
	  	},
	  	"contacts": {
	  		"url": "/hubs/crm/contacts?where=Pers_UpdatedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
	  		"idField": "key",
	  		"datesConfiguration": {
	  			"updatedDateField": "Pers_UpdatedDate",
	  			"updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss'Z'",
	  			"updatedDateTimezone": "GMT",
	  			"createdDateField": "Pers_CreatedDate",
	  			"createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss'Z'",
	  			"createdDateTimezone": "GMT"
	  		}
	  	},
	  	"leads": {
	  		"url": "/hubs/crm/leads?where=Lead_UpdatedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
	  		"idField": "key",
	  		"datesConfiguration": {
	  			"updatedDateField": "Lead_UpdatedDate",
	  			"updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss'Z'",
	  			"updatedDateTimezone": "GMT",
	  			"createdDateField": "lead_createddate",
	  			"createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss'Z'",
	  			"createdDateTimezone": "GMT"
	  		}
	  	},
	  	"opportunities": {
	  		"url": "/hubs/crm/opportunities?where=Oppo_UpdatedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
	  		"idField": "key",
	  		"datesConfiguration": {
	  			"updatedDateField": "Oppo_UpdatedDate",
	  			"updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss'Z'",
	  			"updatedDateTimezone": "GMT",
	  			"createdDateField": "Oppo_CreatedDate",
	  			"createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss'Z'",
	  			"createdDateTimezone": "GMT"
	  		}
	  	},
	  	"users": {
	  		"url": "/hubs/crm/users?where=User_UpdatedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
	  		"idField": "key",
	  		"datesConfiguration": {
	  			"updatedDateField": "User_UpdatedDate",
	  			"updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss'Z'",
	  			"updatedDateTimezone": "GMT",
	  			"createdDateField": "User_CreatedDate",
	  			"createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss'Z'",
	  			"createdDateTimezone": "GMT"
	  		}
	  	}
	  }
  },
  "tags": [
	"Docs"
  ],
  "name": "SageCRMPolling"
}

```

## Parameters

API parameters not shown in {{site.console}} are in `code formatting`.

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| 'key' | The element key.</br>{{page.elementKey}}  | string  |
|  Name</br>`name` |  The name for the element instance created during authentication.   | string  |
| Subdomain</br>`subdomain` | The subdomain portion of your Sage CRM URL, excluding HTTPS:// |string |
| Username</br>`username` | Your Sage CRM user name. |  string |
| Password</br>`password` | Your Sage CRM password. | string |
| Events Enabled </br>`event.notification.enabled` | *Optional*. Identifies that events are enabled for the element instance.</br>Default: `false`.  | boolean |
| Event Notification Callback URL</br>`event.notification.callback.url` |  The URL where you want Cloud Elements to send the events. | string |
| Event poller refresh interval (mins)</br>`event.poller.refresh_interval`  | A number in minutes to identify how often the poller should check for changes. |  number|
| Configure Polling</br>`event.poller.configuration`  | Optional*. Configuration parameters for polling. | JSON object |
| \<resource name\> (e.g., accounts, contacts, or lists)  | The polling configuration of the resource. | JSON object |
| \<resource name\>URL</br>`url` | The url to query for updates to the resource.  | String |
| \<resource name\>ID Field</br>`idField` | The field in the resource that is used to uniquely identify it.  | String |
| \<resource name\>Advanced Filtering</br>`datesConfiguration` | Configuration parameters for dates in polling | JSON Object |
| \<resource name\>Updated Date Field</br>`updatedDateField` | The field that identifies an updated object. | String |
| \<resource name\>Updated Date Format</br>`updatedDateFormat` | The date format of the field that identifies an updated object.  | String |
| \<resource name\>Created Date Field</br>`createdDateField` | The field that identifies a created object. | String |
| \<resource name\>Created Date Format</br>`createdDateFormat` | The date format of the field that identifies a created object.  | String |
| tags | *Optional*. User-defined tags to further identify the instance. | string |
