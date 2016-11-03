---
heading: Dropbox Business
seo: Events | Dropbox Business | Cloud Elements API Docs
title: Events
description: Enable Dropbox Business events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 414
parent: Back to Element Guides
order: 30
---

## Events

{% include polling_and_webhooks_defined.md %}

Dropbox Business supports webhooks.  Follow these directions to configure your application to accept webhooks.

### Endpoint Setup

Follow these steps to set up a Dropbox Business application with the endpoint. Via a web browser, go to [https://www.dropbox.com/developers/apps/create](https://www.dropbox.com/developers/apps/create) and login to your account.

1. Select the Dropbox Business API app option

2. Select the appropriate options

3. Enter a name for your application.

4. Select which account if applicable

5. Click “Create app”.
![Dropbox Business Connected App step 1](http://cloud-elements.com/wp-content/uploads/2016/03/DropboxBusinessAPI1.png)

6. Make note of the App Key and App Secret

7. Input this redirect URI:  `https://console.cloud-elements.com/elements/jsp/home.jsp`

8. Click “Add”

9. Input this redirect URI:  `https://api.cloud-elements.com/elements/api-v2/events/dropboxbusiness`

10. Click “Add”
![Dropbox Business Connected App step 2](http://cloud-elements.com/wp-content/uploads/2016/03/DropboxBusinessAPI2.png)

In order to enable events, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "dropboxbusiness"
  },
  "providerData": {
    "code": "Code on Return the URL"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_DROPBOX_CLIENT_ID>",
    "oauth.api.secret": "<INSERT_DROPBOX_CLIENT_SECRET>",
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
