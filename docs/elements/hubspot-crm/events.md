---
heading: HubSpot CRM
seo: Events | HubSpot CRM | Cloud Elements API Docs
title: Events
description: Enable HubSpot CRM events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 168
elementKey: 'hubspotcrm'
parent: Back to Element Guides
order: 30
---

# Events

Cloud Elements supports events via polling or webhooks depending on the endpoint. If you would like to see more information on our Events framework, please see the [Event Management Guide](/docs/platform/event-management/index.html).

{% include callout.html content="<strong>On this page</strong></br><a href=#supported-events-and-resources>Supported Events and Resources</a></br><a href=#polling-events-via-cloud-elements-platform-ui>Polling via Platform</a></br><a
href=#polling-events-via-an-api-call>Polling via API call</a></br><a
href=#example>Example</a>" type="info" %}

## Supported Events and Resources

Cloud Elements supports polling events for {{page.heading}}.

You can set up events for the following resources:

* accounts
* contacts
* opportunities

{% include note.html content="You can also copy the configuration of the provided resources to poll other resources that include <code>created</code>, <code>updated</code>, and <code>deleted</code> data. See <a href=#configure-polling-through-api>Configure Polling Through API</a> for more information.  " %}

## Polling Events via Cloud Elements Platform (UI)

If you are using Cloud Elements' platform, by default, {{page.heading}} polling is setup to gather the following resources:

`accounts`, `contacts`, and `opportunities`.

In order to enable polling, you need to set `Event Notifications Enabled: True` and set the `Event poller refresh interval:` to how often you would like to have the polling job (minutes) performed.

## Polling Events via an API Call

However, if you are setting up an instance via an API call, in order to enable polling, you will need to add these extra configurations to your instance `JSON`.

```json
{
  "event.notification.enabled": "true",
  "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
  "event.poller.configuration": "<SEE_BELOW>"
}
```

{% include note.html content="The <code>objects</code> in the <code>event.poller.configuration</code> are the default configurations we support.  Feel free to remove any objects that do not fit your needs. " %}

## Example

Here is an example instance JSON with polling events enabled for HubSpot CRM:

```json
{
  "element": {
    "key": "hubspotcrm"
  },
  "providerData": {
    "apikey": "<INSERT HUBSPOT_OAUTH_CLIENT_ID>",
    "access_token": "<ACCESS_TOKEN RETURNED IN OAUTH EXCHANGE>",
    "refresh_token": "<REFRESH_TOKEN RETURNED IN OAUTH EXCHANGE>",
    "expires_in": "<TIME FRAME IN WHICH REFRESH TOKEN EXPIRES (seconds)>"
  },
  "configuration": {
    "oauth.api.key": "<INSERT HUBSPOT_OAUTH_CLIENT_ID>",
    "oauth.api.secret": "<INSERT HUBSPOT_OAUTH_PORTAL_ID>",
    "oauth.callback.url": "www.samplecallbackurl.com",
    "oauth.scope": "contacts-rw+offline",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
      "accounts": {
        "url": "/hubs/crm/accounts?where=lastmodifieddate='${date}'",
        "idField": "companyId",
        "filterByUpdatedDate": true,
        "datesConfiguration": {
          "updatedDateField": "properties.hs_lastmodifieddate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "properties.createdate",
          "createdDateFormat": "milliseconds"
        },
        "createdCheckTolerance": 10
      },
      "contacts": {
        "url": "/hubs/crm/contacts?where=lastmodifieddate='${date}'",
        "idField": "vid",
        "filterByUpdatedDate": true,
        "datesConfiguration": {
          "updatedDateField": "properties.lastmodifieddate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "properties.createdate",
          "createdDateFormat": "milliseconds"
        },
        "createdCheckTolerance": 10
      },
      "opportunities": {
        "url": "/hubs/crm/opportunities?where=lastmodifieddate='${date}'",
        "idField": "dealId",
        "filterByUpdatedDate": true,
        "datesConfiguration": {
          "updatedDateField": "properties.hs_lastmodifieddate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "properties.createdate",
          "createdDateFormat": "milliseconds"
        },"createdCheckTolerance": 10
      }
    }
  },
  "tags": [
    "<Add_Your_Tag>"
  ],
  "name": "<Insert_Instance_Name>"
}
```
