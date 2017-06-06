---
heading: Microsoft Dynamics CRM
seo: Events | Microsoft Dynamics CRM | Cloud Elements API Docs
title: Events
description: Enable Microsoft Dynamics CRM events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 190
elementKey: dynamicscrmadfs
parent: Back to Element Guides
order: 30
---

## Events

Cloud Elements supports events via polling or webhooks depending on the endpoint. If you would like to see more information on our Events framework, please see the [Event Management Guide](/docs/platform/event-management/index.html).

{% include callout.html content="<strong>On this page</strong></br><a href=#supported-events-and-resources>Supported Events and Resources</a></br><a href=#polling>Polling</a></br><a href=#webhooks>Webhooks</a></br><a href=#parameters>Parameters</a>" type="info" %}

<!-- remove this link below (has been replaced with the above code) -->
<!-- {% include polling_and_webhooks_defined.md %} -->

## Supported Events and Resources

Cloud Elements supports polling events for {{page.heading}}.

Polling can be set up for one specific resource (i.e. `accounts`) or for multiple resources. If you are using Cloud Elements' platform, by default, MS Dynamics polling is setup to gather the following resources:

`accounts`, `contacts`, `opportunities`, `leads`, `tasks`, `notes`, and `activities`.

However, if you are setting up an instance via an API call, in order to enable polling, you will need to add these extra configurations to your instance `JSON`.

For more information, please visit our [Configure Polling Through API](#configure-polling-through-api) page.

```JSON
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
"event.poller.configuration": "<SEE_BELOW>"
```

NOTE: The `objects` in the `event.poller.configuration` are the default configurations we support.  Feel free to remove any objects that do not fit your needs.

Here is an example instance JSON with polling events enabled for Microsoft Dynamics 2016 and later:

```JSON
{
  "element": {
    "key": "dynamicscrmadfs"
  },
  "configuration": {
    "user.username": "<INSERT_DYNMAICS_CRM_USERNAME>",
    "user.password": "<INSERT_DYNMAICS_CRM_PASSWORD>",
    "dynamics.tenant": "yourcompanyname.crm.dynamics.com",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
      "accounts": {
        "url": "/hubs/crm/accounts?where=fetchChanges='true'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "attributes.modifiedon",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "attributes.createdon",
          "createdDateFormat": "milliseconds"
        }
      },
      "contacts": {
        "url": "/hubs/crm/contacts?where=fetchChanges='true'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "attributes.modifiedon",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "attributes.createdon",
          "createdDateFormat": "milliseconds"
        }
      },
      "opportunities": {
        "url": "/hubs/crm/opportunities?where=fetchChanges='true'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "attributes.modifiedon",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "attributes.createdon",
          "createdDateFormat": "milliseconds"
        }
      },
      "leads": {
        "url": "/hubs/crm/leads?where=fetchChanges='true'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "attributes.modifiedon",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "attributes.createdon",
          "createdDateFormat": "milliseconds"
        }
      },
      "tasks": {
        "url": "/hubs/crm/tasks?where=fetchChanges='true'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "attributes.modifiedon",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "attributes.createdon",
          "createdDateFormat": "milliseconds"
        }
      },
      "notes": {
        "url": "/hubs/crm/notes?where=fetchChanges='true'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "attributes.modifiedon",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "attributes.createdon",
          "createdDateFormat": "milliseconds"
        }
      },
      "activities": {
        "url": "/hubs/crm/activities?where=fetchChanges='true'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "attributes.modifiedon",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "attributes.createdon",
          "createdDateFormat": "milliseconds"
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

Here is an example instance JSON with polling events enabled for earlier versions of Microsoft Dynamics:

```JSON
{
  "element": {
    "key": "dynamicscrmadfs"
  },
  "configuration": {
    "user.username": "<INSERT_DYNMAICS_CRM_USERNAME>",
    "user.password": "<INSERT_DYNMAICS_CRM_PASSWORD>",
    "dynamics.tenant": "yourcompanyname.crm.dynamics.com",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
      "accounts": {
        "url": "/hubs/crm/accounts?where=modifiedon >'${gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
        "idField": "id",
        "datesConfiguration": {
        "updatedDateField": "attributes.modifiedon",
        "updatedDateFormat": "milliseconds",
        "createdDateField": "attributes.createdon",
        "createdDateFormat": "milliseconds"
        }
      },
      "contacts": {
        "url": "/hubs/crm/contacts?where=modifiedon >'${gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
        "idField": "id",
        "datesConfiguration": {
        "updatedDateField": "attributes.modifiedon",
        "updatedDateFormat": "milliseconds",
        "createdDateField": "attributes.createdon",
        "createdDateFormat": "milliseconds"
        }
      },
      "opportunities": {
        "url": "/hubs/crm/opportunities?where=modifiedon >'${gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
        "idField": "id",
        "datesConfiguration": {
        "updatedDateField": "attributes.modifiedon",
        "updatedDateFormat": "milliseconds",
        "createdDateField": "attributes.createdon",
        "createdDateFormat": "milliseconds"
        }
      },
      "leads": {
        "url": "/hubs/crm/leads?where=modifiedon >'${gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
        "idField": "id",
        "datesConfiguration": {
        "updatedDateField": "attributes.modifiedon",
        "updatedDateFormat": "milliseconds",
        "createdDateField": "attributes.createdon",
        "createdDateFormat": "milliseconds"
        }
      },
      "tasks": {
        "url": "/hubs/crm/tasks?where=modifiedon >'${gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
        "idField": "id",
        "datesConfiguration": {
        "updatedDateField": "attributes.modifiedon",
        "updatedDateFormat": "milliseconds",
        "createdDateField": "attributes.createdon",
        "createdDateFormat": "milliseconds"
        }
      },
      "notes": {
        "url": "/hubs/crm/notes?where=modifiedon >'${gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
        "idField": "id",
        "datesConfiguration": {
        "updatedDateField": "attributes.modifiedon",
        "updatedDateFormat": "milliseconds",
        "createdDateField": "attributes.createdon",
        "createdDateFormat": "milliseconds"
        }
      },
      "activities": {
        "url": "/hubs/crm/activities?where=modifiedon >'${gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
        "idField": "id",
        "datesConfiguration": {
        "updatedDateField": "attributes.modifiedon",
        "updatedDateFormat": "milliseconds",
        "createdDateField": "attributes.createdon",
        "createdDateFormat": "milliseconds"
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

Please note that when creating an instance via the APIs with Polling configuration, the double quotes will need to be escaped and it should not contain any new line characters. The above examples have omitted this formatting for readability.
