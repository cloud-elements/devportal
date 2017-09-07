---
heading: Manage Elements
seo: Element Info | Elements | Cloud Elements API Docs
title: Custom Events
description: Defining element name and authentication
layout: sidebarleft
apis: API Docs
platform: elementsbuilder
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 28
---

# Events

{% include workflow.html displayNames="Info,Authentication,Config & Parameters,Hooks,Events,Resources" links="define-info.html,auth.html,config.html,hooks.html,events.html,resources.html" active="Events"%}

In many cases you want your element to be updated when an event occurs at an API provider. For example, when a user uploads a file to a Dropbox account or when a new contact is added to a CRM element. Cloud elements supports two types of events: polling and webhooks. With polling, Cloud Elements pings the API provider at configurable intervals to see if a change has occurred. With webhooks, the API provider notifies Cloud Elements when changes occur.

## Configure Webhook Events

To see if the API provider provides webhooks, review the API documentation. Webhooks often require specific setup steps at the API provider. Adding webhooks to an element does not require any specific configuration. However, if you need to perform any configuration, you must do so using an [event hook](hooks.html). For example, if the API provider sends event webhook types in a different format you can manipulate the types using a event hook. See the code for this example in [Custom Hooks](custom-hooks-html#reading-event-webhooks).

To set up webhooks:

1. On the Setup page, open **Events**.
2. Switch **Enable Events** on.
3. From **Event Types**, select **Webhooks**.
4. Optionally click **Add an Event Hook** and use Javascript to write an event hook.
4. Click **Save**.

## Configure Polling Events

Even if the API provider does not explicitly support events, you can set up polling on any resource that that include `created` and `updated` data.

To set up polling:

1. On the Setup page, open **Events**.
2. Switch **Enable Events** on.
3. From **Event Types**, select **Polling**.
4. Use the **Default Interval Polling Time (in minutes)** slider or enter a number in minutes to specify how often Cloud Elements should poll for changes.
5. In **resource name**, enter the name of a resource that contains acceptable polling data (`created` and `updated` data).
6. Click **Add Polling Resource**.
7. Complete the resource properties:
  * URL The hub url with any query parameters needed to identify that the resource is updated. For example: `/hubs/finance/customers?where=lastModifiedDate>='${date:yyyy-MM-dd'T'HH:mm:ss'Z'}' `
  * Updated date field The parameter that identifes when a record was updated.
  * Updated date format The date and time format of the Updated date field.
  * Updated date timezone The time zone associated with the field.
  * ID Field The unique identifer of the data that you want to moinitor.
  * Created date field The parameter that identifies when a record was updated.
  * Created date format The date and time format of the Updated date field.
  * Created date timezone The time zone associated with the field.
7. Add additional resources as needed: Enter a resource name, click **Add Polling Resource**, and then complete the resource properties.
4. Optionally click **Add an Event Hook** and use Javascript to write an event hook.
4. Click **Save**.


Continue to the next step, [Custom Resources](resources.html).

{% include workflow.html displayNames="Info,Authentication,Config & Parameters,Hooks,Events,Resources" links="define-info.html,auth.html,config.html,hooks.html,events.html,resources.html" active="Resources"%}
