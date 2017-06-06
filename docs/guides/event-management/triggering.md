---
heading: Event Management
seo: Event Management | Cloud Elements API Docs
title: Triggering Events
description: View the Event Management Guide explaining the Cloud Elements Events Framework.
layout: sidebarleft
breadcrumbs: /docs/platform/platform-docs.html
parent: Back to Platform Docs
order: 20
sitemap: false
---

### **Triggering Events**

To kick off an event, you generally need to do something in the service.
Here, we'll make a `POST /folders` request to create a new folder, and
expect to get a notification:

* HTTP Headers: `Authorization- User <user secret>, Organization <organization secret>`
* HTTP Verb: `POST`
* Request URL: `/folders`
* Request Body: Required – see below
* Query Parameters: None

```bash
curl -X POST \
  -H 'Authorization: User <INSERT_USER_SECRET>, Element <INSERT_ELEMENT_SECRET>' \
  -H 'Content-Type: application/json' \
  -d @TestFolderCreate.json \
  'https://api.cloud-elements.com/elements/api-v2/hubs/documents/folders?path=/testfoldercreate'
```

with the following in `TestFolderCreate.json`:

```json
{
  "path": "/testfoldercreate",
  "tags": [
    "TestFolderCreate"
  ],
  "createdDate": "",
  "size": 0,
  "name": "TestFolderCreate",
  "directory": false
}
```

Once that's done, we would expect to eventually see the following
webhook content made to the endpoint we specified in the instance's
"event.notification.callback.url" configuration
("http://my-cool-site/callback" in our example):

```json
{
  "eventId": 1088,
  "instanceId": 31,
  "response": {
    "events": [
      {
        "path": "/testfoldercreate",
        "metadata": {
          "path": "/TestFolderCreate",
          "name": "TestFolderCreate",
          "type": "folder"
        }
      }
    ]
  },
  "notificationId": 1047
}
```

Note that **any** change made on the service end will trigger a
notification, not just changes initiated from Cloud Elements. In this
example, if a user of this Dropbox account were to add a folder via the
Dropbox Web UI, then a webhook would still be delivered to the
instance's callback URL.
