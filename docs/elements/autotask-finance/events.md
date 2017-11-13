---
heading: Autotask Finance
seo: Events | Autotask Finance | Cloud Elements API Docs
title: Events
description: Enable Autotask Finance events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 4895
elementKey: autotaskfinance
hdOrcrm: finance
pollObject: customers
parent: Back to Element Guides
order: 30
---

# Events

Cloud Elements supports events via polling or webhooks depending on the API provider. If you would like to see more information on our Events framework, please see the [Event Management Guide](/docs/platform/event-management/index.html).

{% include callout.html content="<strong>On this page</strong></br><a href=#supported-events-and-resources>Supported Events and Resources</a></br><a href=#polling>Polling</a></br><a href=#parameters>Parameters</a>" type="info" %}

## Supported Events and Resources

Cloud Elements supports polling events for {{page.heading}}. You can set up events for the following resources:

* customers
* invoices

{% include note.html content="You can set up polling for other resources that include <code>created</code>, <code>updated</code>, and <code>deleted</code> data through our API. Copy the configuration of one of the default resources, and replace the name with the resource that you want to poll.  " %}

{% include Elements/autotask/events.md%}
