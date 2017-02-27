---
heading: Box
seo: Events | Box | Cloud Elements API Docs
title: Events
description: Enable Box events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 22
parent: Back to Element Guides
order: 30
---

## Events

{% include polling_and_webhooks_defined.md %}

Box supports webhooks.  Follow these directions to configure your application to accept webhooks.

### Endpoint Setup

Follow these steps to set up a Box application with the endpoint.
Via a web browser, go to  [https://app.box.com/developers/services/edit/](https://app.box.com/developers/services/edit/).

1. Enter the name of your application

2. Select the appropriate options

3. Click “Create Application”
![Box Connected App step 1](http://cloud-elements.com/wp-content/uploads/2014/08/BoxAPI1.png)

4. After receiving confirmation that your application is created, click “Configure your application”
![Box Connected App step 2](http://cloud-elements.com/wp-content/uploads/2014/08/BoxAPI2.png)

5. Copy the “client_id”

6. Copy the “client_secret”

7. You will be required to enter a callback URL from the endpoint. Enter this URL: `https://console.cloud-elements.com/elements/jsp/home.jsp`

8. Select your “Scopes” (check “Read and write all files and folders”)
![Box Connected App step 3](http://cloud-elements.com/wp-content/uploads/2014/08/BoxAPI31.png)

9. Scroll down and click “Create a New Webhook”
![Box Connected App step 4](http://cloud-elements.com/wp-content/uploads/2014/08/BoxCreateWebhook.png)

On “Create Webhook” Screen

1. Fill out app information

2. Select “Event Types” - Events your app will be notified on
![Box Connected App step 5](http://cloud-elements.com/wp-content/uploads/2014/08/BoxNameWebhook.png)

3. Input this Endpoint URL: `https://api.cloud-elements.com/elements/api-v2/events/box`

4. Select the minimum configurations:
Input “userId” Input “#to_user_id#”
Input “event” Input “#event_type#”
Input “itemId” Input “#item_id#”
Input “itemType” Input “#item_type#”
Input “newItemId” Input “#new_item_id#”

5. Click “Save Webhook”
![Box Connected App step 6](http://cloud-elements.com/wp-content/uploads/2014/08/BoxCreateWebhookMinimumConfigs.png)

NOTE: As long as the minimum configuration fields are set properly, any other additional fields can also be specified. These additional fields will be sent along in the webhook call.

Box requires you to submit a Support Request to enable webhooks for your app. You must complete this step before you will receive events from Box.

Go to this URL: [https://developers.box.com/view-webhooks/](https://developers.box.com/view-webhooks/)

Scroll to the bottom of the page and click Contact Us to submit a request. You will need your API Key. This can be found at the bottom of the app configuration screen.
![Box Connected App step 7](http://cloud-elements.com/wp-content/uploads/2015/01/BoxContactUs.png)

For your Box Ticket Request:

* Select “Platform”
* Select “View API”
* Select “Webhooks”
* Input “API Key” This is your client_id that was assigned by Box when you created your app.

Input your email and webhook request, as well as, a request to enable “As-User” functionality.
![Box Connected App step 7](http://cloud-elements.com/wp-content/uploads/2014/08/BoxContactUs2.png)

In order to enable events, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "box"
  },
  "providerData": {
    "code": "Code on Return the URL"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_BOX_CLIENT_ID>",
    "oauth.api.secret": "<INSERT_BOX_CLIENT_SECRET>",
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
