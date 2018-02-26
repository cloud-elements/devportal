---
heading: Event Management
seo: Event Management | Cloud Elements API Docs
title: Tips
description: View the Event Management Guide explaining the Cloud Elements Events Framework.
layout: sidebarleft
breadcrumbs: /docs/platform/platform-docs.html
parent: Back to Platform Docs
order: 50
sitemap: false
---

### **Event Retry and Queueing**

There may be times when the service behind the URL provided by the user for Cloud Elements to push events to, is down or undergoing maintenance. In this scenario, Cloud Elements has a mechanism to retry the event push and/or queue the event to be retrieved at a later time, say after the user's service endpoint is back up.

In such a scenario, the user can choose between two mechanisms to receive events after the user's event reception service is back up

1. Retry the push of the events
2. Queue the events for the user to pull/retrieve at a later time

Each account with Cloud Elements can be configured to either retry event notification upon failure or to queue the event for later retrieval. After creation of the account, the mechanism can be configured by using the `POST /accounts/{accountId}/settings` API. The payload posted to this API is -

```
{
   "notification.webhook.failure.policy": "retry"
}
```

The event retry/queueing configuration for a given account can be modified via the `PATCH /accounts/{accountId}/settings` API. Say that the account was configured use an event `retry` mechanism and needs to be modified to use event `queueing`. The payload for this API call is -

```
{
   "notification.webhook.failure.policy": "queue"
}
```

The default, if neither of the above APIs is invoked after the account is created is to retry the events notification.

#### Retry Logic
If an account is configured to retry event notifications, then the web hook URL provided by the user, e.g., `https://events.myservice.com/receiver` is retried up to 9 times, with the interval using the equation `2^2x` where `x` is the retry attempt.

Based upon the above equation, the first attempt will be tried after 4 seconds, the second attempt after 16 seconds and so on. The 9th and final attempt will be made a little under 73 hours after the original failed attempt.

As soon as a retry attempt is successful, the notification is deemed completed and all is good to go. In the case where all 9 attempts fail, then the event subscription is deactivated, and future events are queued for retrieval by the user until the subscription is reactivated. **Note: Even though the events are queued after 9 retry attempts, the account configuration is NOT changed to `queue` events.**

If deactivated, the subscription can be reactivated and the queued events delivered via the `PUT /notifications/subscriptions/deliveries?where=channel='webhook' and status='queued'` API. As documented in the following section, an addition `where` clause parameter can be added to redeliver events only specific to a given subscription URL.

#### Queueing Logic
If the account is configured to queue events, or if the maximum number of retries (9) for a given push subscription is reached, then the event is queued for retrieval by the user.

If the user's web hook receiver url is `https://events.myservice.com/receiver`, then queued events for this endpoint can be retrieved by calling the `GET /notifications/subscriptions/deliveries?where=channel='webhook' and status='queued' and config.url= 'https://events.myservice.com/receiver'` API.

The above API requires the user to provide the Organization and User secrets, like most other non-Element or Platform APIs, and will retrieved the `queued` events for a given URL, for the given account. Each returned `delivery` object consists among other attributes, the event payload, including the event ID and the event data.

### **Asynchronous API Requests**

Asynchronous API Requests gives you the flexibility to start a job that
may take some time to complete and be notified when it has completed.
For example, a user makes a request to copy a folder to her account.
This request may take some time to process. With an Asynchronous API
Request, your app will receive a notification that job has started, as
well as, a notification when the job has processed.

**Performing an Asynchronous API Request:**

Additional Required Header:

* __Elements-Async-Request__ – this must be set to `True`

Optional Header:

* __Elements-Async-Callback-URL__ – if not included in request, then the
  app will use the callback URL associated with the instance. If you do
  not have a callback URL associated with the instance configuration or
  supply one in the request, then an error will be returned. If you configured the **Callback Notification Signature Key** (`event.notification.signature.key`) when you authenticated an element instance, the bulk APIs will use the signature key to provide hash verification in the header of bulk jobs. For more on Cloud Elements Hash Verification, see [Event Management: Security](/docs/guides/event-management/security.html)

For example, this request is asynchronous:

```bash
curl -X POST \
  -H 'Authorization: User <INSERT_USER_SECRET>, Element <INSERT_ELEMENT_SECRET>' \
  -H 'Content-Type: application/json' \
  -H 'Elements-Async-Request: True' \
  -H 'Elements-Async-Callback-Url: <www.samplecallbackurl.com>' \
  -d @copy-folder.json \
  'https://api.cloud-elements.com/elements/api-v2/hubs/documents/folders/copy?path=/TestFolderCreate'
```

with the following `copy-folder.json`:

```json
{
  "path": "/testfoldercopy",
  "tags": [
    "TestFolderCopy"
  ],
  "name": "TestFolderCopy"
}
```

The immediate response from this call will have content like this:

```json
{
  "eventId": 1028,
  "eventStatus": "dispatched"
}
```

When the copy is complete, a webhook will be delivered to the
notification callback URL that looks like this:

```json
{
  "eventId": 1028,
  "instanceId": 30,
  "response": {
    "events": [
      {
        "path": "/testfoldercopy",
        "metadata": {
          "path": "/TestFolderCopy",
          "name": "TestFolderCopy",
          "type": "folder"
        }
      },
      {
        "path": "/testfoldercopy/testuploadfile.txt",
        "metadata": {
          "path": "/TestFolderCopy/testUploadFile.txt",
          "name": "testUploadFile.txt",
          "type": "file"
        }
      }
    ]
  },
  "notificationId": 1084
}
```
