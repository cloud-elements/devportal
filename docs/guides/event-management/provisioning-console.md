---
heading: Event Management
seo: Event Management | Cloud Elements API Docs
title: Authenticate With Events - UI
description: View the Event Management Guide explaining the Cloud Elements Events Framework.
layout: sidebarleft
restContentVersion: provisioning-apis.html
breadcrumbs: /docs/platform/platform-docs.html
parent: Back to Platform Docs
order: 10
sitemap: false
---

# Authenticate an Element Instance with Events

This section provides a summary of how to authenticate an element instance with events. Each element is different, so take a look at the [Events section of the specific Element guide](/docs/elements.html). You can authenticate  via <a href="#" data-toggle="tooltip" data-original-title="{{site.data.glossary.ce-ui}}">Cloud Elements</a> or APIs. Use the UI/API switch at the top of this page to switch between UI or API steps.

{% include callout.html content="<strong>On this page</strong></br><a href=#authenticate-an-element-instance-with-polling>Authenticate an Element Instance with Polling</a></br><a href=#polling-parameters>Polling Parameters</a></br><a href=#authenticate-an-element-instance-with-webhooks>Authenticate an Element Instance with Webhooks</a></br><a href=#webhook-parameters>Webhook Parameters</a>" type="info" %}

## Authenticate an Element Instance with Polling

Authenticating an element instance with events works the same as authenticating an instance, you just need to turn on events and set a few more parameters.

For more information about each field described here, see [Parameters](#parameters).

To authenticate an element instance with polling:

1. Enter the Name of the element instance and any configuration parameters need to authenticate the element instance.
2. To enable hash verification in the headers of event callbacks, click **Show Optional Fields**, and then add a key to **Callback Notification Signature Key**.
2. Enable events: Switch **Events Enabled** on.
![event-enabled-on](/assets/img/elements/event-enabled-on.png)
3. If the element supports both polling and webhooks, select **polling** in **Event Type**.
8. Add an **Event Notification Callback URL** to receive information about the events.
4. Use the **Event poller refresh interval (mins)** slider or enter a number in minutes to specify how often Cloud Elements should poll for changes.
5. Click <img src="/assets/img/elements/polling-resource-select.png" alt="Polling Resource Select" class="inlineImage"> to select a resource to poll.

    The code view on the right updates the `event.poller.configuration` JSON object with the default polling configuration. You can change the polling configuration for each authenticated instance.

6. Optionally, click <img src="/assets/img/platform-icons/pencil.png" alt="Edit Button" class="inlineImage"> to update the polling configuration, which appears in the Event Poller Configuration pane on the right.

    {% include note.html content="The default polling configuration represents the optimal configuration. Although you can change anything in the poller configuration, we recommend that you do so rarely and in conjunction with Cloud Elements support.  " %}

7. In the Event Poller Configuration pane, you can update any of the fields, including the date fields under **Advanced Filtering**. After you make changes, click **Save**.

Your polling configuration is complete and you can authenticate the element instance. Use the events to build formulas to accomplish a wide variety of workflows.

{% include events/polling-parameters.md%}

## Authenticate an Element Instance with Webhooks

Authenticating an element instance with events works the same as authenticating an instance, you just need to turn on events and set a few more parameters.

{% include note.html content="When you authenticate an element instance with webhook events, make sure that you check the Element Guide for any additional setup you need at the API provider." %}

To authenticate an element instance with webhooks:

1. Enter the Name of the element instance and any configuration parameters need to authenticate the element instance.
2. To enable hash verification in the headers of event callbacks, click **Show Optional Fields**, and then add a key to **Callback Notification Signature Key**.
2. Enable events: Switch **Events Enabled** on.
![event-enabled-on](/assets/img/elements/event-enabled-on.png)
3. If the element supports both polling and webhooks, select **webhooks** in **Event Type**.
8. Add an **Event Notification Callback URL** to receive information about the events.

    {% include note.html content="In most cases you must set up the event callback URL as part of API provider's webhook setup, and what you enter here should match. " %}

Your webhooks configuration is complete and you can authenticate the element instance. Use the events to build formulas to accomplish a wide variety of workflows.

{% include events/webhook-parameters.md%}
