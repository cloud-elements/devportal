---
heading: Oracle Sales Cloud
seo: Events | Oracle Sales Cloud | Cloud Elements API Docs
title: Events
description: Enable Oracle Sales Cloud events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 167
parent: Back to Element Guides
order: 30
---

## Events

{% include polling_and_webhooks_defined.md %}

Cloud Elements supports Polling events for Oracle Sales Cloud.

### Polling

In order to enable polling, add these extra configurations to your instance JSON:

```JSON
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
"event.poller.configuration": "<SEE_BELOW>"
```

NOTE: The `objects` in the `event.poller.configuration` are the default configurations we support.  Feel free to remove any objects that do not fit your needs.

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "oraclesalescloud"
  },
  "configuration": {
    "username": "<INSERT_ORACLE_SALES_CLOUD_USERNAME>",
    "password": "<INSERT_ORACLE_SALES_CLOUD_PASSWORD>",
    "site.url": "<INSERT_ORACLE_SALES_CLOUD_SERVER_URL>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.vendor.type": "polling",
    "event.poller.configuration": {
    	"contacts": {
    		"url": "/hubs/crm/contacts?where=CreationDate>'${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
    		"idField": "PartyNumber",
    		"datesConfiguration": {
    			"updatedDateField": "LastUpdateDate",
    			"updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
    			"createdDateField": "CreationDate",
    			"createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
    		}
    	},
    	"leads": {
    		"url": "/hubs/crm/leads?where=CreationDate >'${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
    		"idField": "LeadId",
    		"datesConfiguration": {
    			"updatedDateField": "LastUpdateDate",
    			"updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
    			"updatedDateTimezone": "PST",
    			"createdDateField": "CreationDate",
    			"createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
    			"createdDateTimezone": "PST"
    		}
    	},
    	"accounts": {
    		"url": "/hubs/crm/accounts?where=CreationDate >'${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
    		"idField": "PartyNumber",
    		"datesConfiguration": {
    			"updatedDateField": "LastUpdateDate",
    			"updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
    			"createdDateField": "CreationDate",
    			"createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
    		}
    	},
    	"opportunities": {
    		"url": "/hubs/crm/opportunities?where=CreationDate>'${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
    		"idField": "OptyNumber",
    		"datesConfiguration": {
    			"updatedDateField": "LastUpdateDate",
    			"updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
    			"createdDateField": "CreationDate",
    			"createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
    		}
    	},
    	"deals": {
    		"url": "/hubs/crm/deals?where=CreationDate>'${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
    		"idField": "DealId",
    		"datesConfiguration": {
    			"updatedDateField": "LastUpdateDate",
    			"updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
    			"createdDateField": "CreationDate",
    			"createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
    		}
    	},
    	"activities": {
    		"url": "/hubs/crm/activities?where=CreationDate>'${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
    		"idField": "ActivityNumber",
    		"datesConfiguration": {
    			"updatedDateField": "LastUpdateDate",
    			"updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
    			"createdDateField": "CreationDate",
    			"createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
    		}
    	}
    }
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
