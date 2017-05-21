---
heading: SAP C4C CRM
seo: Events | SAP C4C CRM | Cloud Elements API Docs
title: Events
description: Enable SAP Anywhere events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 1468
parent: Back to Element Guides
order: 25
---

# Events

{% include polling_and_webhooks_defined.md %}

Cloud Elements supports polling events for the following {{page.heading}} resources:

* accounts
* contacts
* leads
* opportunities

## Configure Polling Through the UI

Use the {{site.console}} to authenticate with SAP C4C and create an element instance with polling enabled.

To authenticate an element instance with polling:

1. Sign in to Cloud Elements, and then search for the element in our Elements Catalog.

    | Latest UI | Earlier UI  |
    | :------------- | :------------- |
    |  ![Search](../img/Element-Search2.png)  |  ![Search](../img/Element-Search.png)  |

3. Create an element instance.

    | Latest UI | Earlier UI  |
    | :------------- | :------------- |
    | Hover over the element card, and then click __Create Instance__.</br> ![Create Instance](../img/Create-Instance.gif)  | Click __Add Instance__.</br> ![Search](../img/Add-Instance.png)  |

5. Enter a name for the element instance.
6. Complete the required parameters in the Configuration section: **Subdomain**, **Username**, and **Password**. See [Parameters](#parameters) for descriptions.
7. Switch **Events Enabled** on.
8. Add an Event Notification Callback URL.
4. Use the __Event poller refresh interval (mins)__ slider or enter a number in minutes to specify how often Cloud Elements should poll for changes.
5. Select and configure the resources to poll.

    | Latest UI | Earlier UI  |
    | :------------- | :------------- |
    | Select the resources to poll. </br>Optionally, click the pencil icon to further configure polling. | Edit the JSON to add or remove resources and optionally change the `datesConfiguration`.  |

7. Click __Create Instance__ (latest UI) or __Next__ (earlier UI).
8. Optionally add tags in the earlier UI:
     1. On the Tag It page, enter any tags that might help further define the instance.
      * To add more than one tag, click __Add__ after each tag.
      ![Add tag](../img/Add-Tag.png)
     1. Click __Done__.
8. Take a look at the documentation for the element resources now available to you.



### Webhooks

The following JSON may be used to create a SAP Anywhere Instance with webhooks enabled:

```json
{
  "element": {
    "key": "sapanywhere"
  },
  "providerData": {
    "code": "<CODE_ON_THE_RETURN_URL>"
  },
  "configuration": {
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "oauth.api.key": "<INSERT_CLIENT_ID>",
    "oauth.api.secret": "<INSERT_CLIENT_SECRET>",
    "event.notification.enabled": "true",
    "event.vendor.type": "webhook",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
  },
  "tags": [
    "<ADD_YOUR_TAG>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
