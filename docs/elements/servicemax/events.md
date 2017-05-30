---
heading: ServiceMax
seo: Events | ServiceMax | Cloud Elements API Docs
title: Events
description: Enable ServiceMax events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 169
parent: Back to Element Guides
order: 30
---

## Events

{% include polling_and_webhooks_defined.md %}

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
    "key": "servicemax"
  },
  "providerData": {
    "code": "<Code_On_The_Return_URL>"
  },
  "configuration": {
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "oauth.api.key": "<INSERT_SERVICEMAX_CLIENT_ID>",
    "oauth.api.secret": "<INSERT_SERVICEMAX_CLIENT_SECRET>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
    	"installed-products": {
    		"url": "/hubs/fsa/installed-products?where=LastModifiedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ss.SSS'Z'}'",
    		"idField": "Id",
    		"datesConfiguration": {
    			"updatedDateField": "LastModifiedDate",
    			"updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
    			"createdDateField": "CreatedDate",
    			"createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSSZ"
    		}
    	},
    	"order-parts": {
    		"url": "/hubs/fsa/order-parts?where=LastModifiedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ss.SSS'Z'}'",
    		"idField": "Id",
    		"datesConfiguration": {
    			"updatedDateField": "LastModifiedDate",
    			"updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
    			"createdDateField": "CreatedDate",
    			"createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSSZ"
    		}
    	},
    	"products": {
    		"url": "/hubs/fsa/products?where=LastModifiedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ss.SSS'Z'}'",
    		"idField": "Id",
    		"datesConfiguration": {
    			"updatedDateField": "LastModifiedDate",
    			"updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
    			"createdDateField": "CreatedDate",
    			"createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSSZ"
    		}
    	},
    	"service-contracts": {
    		"url": "/hubs/fsa/service-contracts?where=LastModifiedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ss.SSS'Z'}'",
    		"idField": "Id",
    		"datesConfiguration": {
    			"updatedDateField": "LastModifiedDate",
    			"updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
    			"createdDateField": "CreatedDate",
    			"createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSSZ"
    		}
    	},
    	"work-orders": {
    		"url": "/hubs/fsa/work-orders?where=LastModifiedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ss.SSS'Z'}'",
    		"idField": "Id",
    		"datesConfiguration": {
    			"updatedDateField": "LastModifiedDate",
    			"updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
    			"createdDateField": "CreatedDate",
    			"createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSSZ"
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
