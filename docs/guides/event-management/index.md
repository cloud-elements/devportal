---
heading: Event Management
seo: Event Management | Cloud Elements API Docs
title: Event Management
description: View the Event Management Guide explaining the Cloud Elements Events Framework.
layout: sidebarleft
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 1
sitemap: false
redirect_from:
  - /docs/platform/event-management/
---

# Event Management

The Cloud Elements Events Framework provides a uniform mechanism for subscribing to events from API providers like Salesforce, HubSpot,
QuickBooks, and Dropbox. Our Events Framework gives you the flexibility to receive notifications to your app regarding user activity by having our Elements subscribe to API provider events. API providers publish changes to notify the elements that events have occurred. For example, a user uploads a file to her Dropbox account using the Dropbox user interface. This change is published to our Dropbox element. The Dropbox element notifies your app that a new file has been uploaded. Your app can then be updated with the most current data making it that much more cooperative and powerful.
![Cloud Elements Events 1](http://cloud-elements.com/wp-content/uploads/2015/01/DocumentManagementWorkflow1.png)

## Event Configuration Types

Cloud Elements currently supports building integrations with __polling__ or __webhooks__ capability.

With Polling Cloud Elements executes a configured query every __n minutes__ and captures the changed information.

With Webhooks the API provider lets Cloud Elements know what information has changed. Some API providers require some additional configuration setup for Event Management. Instructions and screen shots for these configurations can be found in the [Element Guides](/docs/elements.html) under Events for each API provider.

## Receiving Events
Events can be sent to your application by setting the Event Notification Callback URL (`event.notification.callback.url`) configuration value to your application's URL during provisioning, such as `https://mycoolapp.com/callback`. You can also return events to the elements with an Event Notification Callback URL like `https://api.cloud-elements.com/elements/api-v2/events/<Element-Key>/`.

To update an active instance use the __PATCH__ __/instances__ or __PATCH__ __/instances/{id}/configuration/{configurationId}__ endpoints to add an Event Notification Callback URL.
