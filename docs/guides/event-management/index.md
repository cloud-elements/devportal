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

## Event Management:
### Cloud Elements Events Framework

Cloud Elements Events Framework provides a uniform mechanism for
subscribing to events from Endpoints (e.g. Salesforce, HubSpot,
QuickBooks, Dropbox). Our Framework gives you the flexibility to receive
notifications to your app regarding user activity by having our Elements
subscribe to Endpoint Events. Endpoints publish changes to notify the
Elements that events have occurred. For example, a user uploads a file
to her Dropbox account using the Dropbox user interface. This change
would be published to our Dropbox Element. The Dropbox Element would
then notify your app that a new file has been uploaded. Your app can
then be updated with the most current data making it that much more
cooperative and powerful.
![Cloud Elements Events 1](http://cloud-elements.com/wp-content/uploads/2015/01/DocumentManagementWorkflow1.png)

### **Event Configuration Types**

Cloud Elements currently supports building integrations with __polling__ or __webhooks__ capability.

__Polling__ is a mechanism where Cloud Elements executes the configured query every __n minutes__ and capture the changed information.

__Webhooks__ are when the provider lets Cloud Elements know what information has changed.
NOTE: Some Application Endpoints require some additional configuration setup for Event Management. Instructions and screen shots for these configurations can be found in the [Element Guides](/docs/elements.html) under Events for each endpoint.
