---
heading: Name of Element
seo: Events | Name of Element | Cloud Elements API Docs
title: Events
description: Enable Salesforce Sales Cloud events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 23
elementKey: fake
parent: Back to Element Guides
order: 25
---

# Events

Cloud Elements supports events via polling or webhooks depending on the endpoint. If you would like to see more information on our Events framework, please see the [Event Management Guide](/docs/platform/event-management/index.html).

{% include callout.html content="<strong>On this page</strong></br><a href=#supported-events-and-resources>Supported Events and Resources</a></br><a href=#webhooks>Webhooks</a></br><a href=#parameters>Parameters</a>" type="info" %}

## Supported Events and Resources

Cloud Elements supports webhook events for {{page.heading}}.  Whenever a file or folder is created, updated, or deleted, Cloud Elements will receive an event from Google Drive.  Once that event is received, Cloud Elements will standardize the payload and dispatch an event to the configured callback URL your Element Instance.
