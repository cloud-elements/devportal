---
heading: Event Management
seo: Event Management | Cloud Elements API Docs
title: Event Management
description: View the Event Management Guide explaining the Cloud Elements Events Framework.
layout: docs
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 2
sitemap: false
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

### Events

Cloud Elements currently supports building integrations with __polling__ or __webhooks__ capability.

__Polling__ is a mechanism where Cloud Elements executes the configured query every __n minutes__ and capture the changed information.

__Webhooks__ are when the provider lets Cloud Elements know what information has changed.
NOTE: Some Application Endpoints require some additional configuration setup for Event Management. Instructions and screen shots for these configurations can be found in the [Element Guides](/docs/elements.html) under Events for each endpoint.

### Provisioning

Elements can be provisioned with Event Management Integration via the Elements Manager or API. Instructions on provisioning with the Elements Manager will be shown first followed by provisioning via the `POST /instances API`.

#### **Provisioning via Manager Console**

__Dropbox__ will be used for most of this demonstration.  However the
majority of our Elements support events.

To start, sign into the Elements Manager and click "Elements Catalog"
![Cloud Elements Events 2](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuide1.png)

Click "Documents"
![Cloud Elements Events 3](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuide2.png)

Click "Create Instance for Dropbox"
![Cloud Elements Events 4](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuide3.png)

Click "+"
![Cloud Elements Events 5](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuide4.png)

The "Provision It" tab is where you set the event configuration. In the
Box example, you provide a name and tagging selection as normal (tagging
is optional so you may leave it set to “No”). To enable notifications,
select “True” on the "Enable/Disable Event Notifications" option, and
enter the callback URL to your application. Once your event
configuration is to your liking, click "Next".
![Cloud Elements Events 6](http://cloud-elements.com/wp-content/uploads/2015/01/DropboxCreateInstance11.png)

**Sidenote**: If an Element supports polling, then you may be asked for
the event poller refresh internal (in minutes). Depending on the
Element, you may also be asked for one of the the following: (1) Polling
objects: a comma-separated list of objects to poll for, as shown in the
Salesforce Element ...
![Cloud Elements Event Config GUI](/assets/img/events/events-objects-console.png)

... (2) polling URLs: a line-by-line list of objects, pipe-separated
with a URL template that retrieves that object; demonstrated in this
Sharepoint Element ...
![Cloud Elements Event Config GUI](/assets/img/events/events-urls-console.png)

... or (3) a polling configuration JSON block, which allows for even
tighter control over polling. Here you can see the start of that
configuration in this Stripe Element configuration.
![Cloud Elements Event Config GUI](/assets/img/events/events-config-console.png)
The details of the configuration JSON are described below in the section
titled "Polling Configuration": it's the same JSON format used when creating an instance via our APIs.

**Let's return** now to the Dropbox demo, where we've been redirected to
the Dropbox Login page. As per the typical OAuth Web Flow, login to your
Dropbox Account and click "Allow":
![Cloud Elements Events 7](http://cloud-elements.com/wp-content/uploads/2015/01/DropboxCreateInstance22.png)

And finally, click "Done". (As always, you can enter some tag
information here to help track your Element instances.)
![Cloud Elements Events 8](http://cloud-elements.com/wp-content/uploads/2015/01/DropboxCreateInstance31.png)

And that's it! You've successfully provisioned a new Element instance
with notifications via our Console UI.

#### **Provisioning via APIs**

In order to provision an instance via the API, we must first make a
request to the Element's `/oauth` url with the necessary keys. (Note,
you can skip to the `/instances` call description below if your Element
doesn't use OAuth authentication.)

* HTTP Header: None
* HTTP Verb: GET
* Request URL: /elements/{key}/oauth/url
* Request Body: None
* Query Parameters:
    * __apiKey–__ the key obtained from registering your app with the
      provider
    * __apiSecret__ – the secret obtained from registering your app with the
      provider
    * __callbackUrl__ – the URL that you supplied to the provider when
      registering your app
    * __state__ – any custom value that you want passed to the callback
      handler listening at the provided callback URL.

The result of this API invocation is an OAuth redirect URL from the
endpoint. Your application should now redirect to this URL, which in
turn will present the OAuth authentication and authorization page to the
user. When the provided callback URL is executed, a code value will be
returned, which is required to create a new instance.

Example cURL Command:

```bash
curl -X GET -H 'Content-Type: application/json' \
  'https://api.cloud-elements.com/elements/api-v2/elements/dropbox/oauth/url?apiKey=fake_Dropbox_api_key&apiSecret=fake_Dropbox_api_secret&callbackUrl=https://www.mycoolapp.com/auth&state=dropbox'
```

Response:

```json
{
  "oauthUrl": "https://www.dropbox.com/api/oauth2/authorize?response_type=code&client_id=insert_dropbox_client_id0&redirect_uri=https://www.mycoolapp.com/auth&state=dropbox",
  "element": "dropbox"
}
```

Upon successful authentication and authorization by the user, the
endpoint will redirect to the callback URL you provided when you setup
your application with the endpoint, in our example,
`https://www.mycoolapp.com/auth`. The endpoint will also provide two query
string parameters: “state” and “code”. The value for the “state”
parameter will be the name of the endpoint, e.g., “dropbox” in our
example, and the value for the “code” parameter is the code required by
Cloud Elements to retrieve the OAuth access and refresh tokens from the
endpoint. If the user denies authentication and/or authorization, there
will be a query string parameter called “error” instead of the “code”
parameter. In this case, your application can handle the error
gracefully.

Once you have the necessary authorization values, you can make a call to
the `/instances` API to actually create a new instance.

Below is an example of the provisioning API call.

* __HTTP Headers__: Authorization- User <user secret>, Organization <organization secret>
* __HTTP Verb__: POST
* __Request URL__: /instances
* __Request Body__: Required – see below
* __Query Parameters__: none

An Element token is returned upon successful execution of this API. This
token needs to be retained by the application for all subsequent
requests involving this Element instance.

A sample request illustrating the `/instances` API is shown below.

#### HTTP Headers:

```bash
Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>
```

Below is an example of the body that must be included in your instance
request, which would provision a new Dropbox Element instance. Note the
`event` configuration properties are similar to what we specify in the
GUI:

```json
{
  "element": {
    "key": "dropbox"
  },
  "providerData": {
    "code": "'code' from the oauth call (required for OAuth only)"
  },
  "configuration": {
    "oauth.callback.url": "<SAMPLE_CALLLBACK_URL>",
    "oauth.api.key": "<SAMPLE_API_KEY>",
    "oauth.api.secret": "<SAMPLE_API_SECRET>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "http://my-cool-site/callback",
    "document.tagging": false
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```

If your element supports polling, you would need to provide additional
configuration values to enable it: see the "Polling Configuration"
section below for details.

If this JSON was saved in a file named `instance.json`, then we could
make the following cURL command to create an instance:

```bash
curl -X POST \
  -H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>' \
  -H 'Content-Type: application/json' \
  -d @instance.json \
  'https://api.cloud-elements.com/elements/api-v2/instances'
```

Below is an example of a successful JSON response that might result:
note the "token" property, which is required to make any API requests to
the new Element instance.

```json
{
  "id": 123,
  "name": "Test",
  "token": "5MOr3Sl/E4kww6mTjmjBYV/hAUAzz1g=",
  "element": {
    "id": 22,
    "name": "Dropbox",
    "key": "dropbox",
    "description": "Add a Dropbox instance to connect your existing Dropbox account to the Documents Hub, allowing you to manage files and folders. You will need your Dropbox account information to add an instance.",
    "image": "elements/provider_dropbox.png",
    "active": true,
    "deleted": false,
    "typeOauth": true,
    "trialAccount": false,
    "existingAccountDescription": "Give your application access to your existing Dropbox accountEnter your credentials and details for your Dropbox Account",
    "configDescription": "If you do not have an Dropbox.net account, you can create one at Dropbox.Net Signup",
    "transformationsEnabled": false,
    "authentication": {
      "type": "oauth2"
    },
    "hub": "documents"
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "eventsEnabled": false,
  "cachingEnabled": false
}
```

And that's it: you've used our APIs to provision a new Element instance
with notifications enabled.

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

### **Polling Configuration**

If you're using an Element that supports polling, in addition to the `"event.notification.enabled"` and `"event.notification.callback.url"` configuration, you need to provide configuration that allows the element instance to determine how to poll the service provider endpoint for data. In addition the poll interval is specified via an element instance property called `event.poller.refresh_interval`. The value (in minutes) is used to determine how often to run the poller for a given element instance.

There are two types of polling configuration available -
* A legacy `|` delimiter based configuration provided via the `event.poller.urls` instance property/attribute
* JSON based configuration provided via the `event.poller.configuration` instance property.

#### URL Poller Configuration (Legacy)

The URL based poller configuration is the legacy event poller configuration, which is being replaced by the JSON based configuration (described in the following section). A handful of elements still use the legacy URL polling configuration. These are - `HubSpot`, `HubSpot CRM`, `Autotask Helpdesk`, `Oracle Service Cloud`, `Sharepoint`, `Sharefile` and `Quickbooks Online`. In the near future these elements will be upgraded to use the JSON based poller configuration.

The format of the legacy URL based poller configuration is as follows -

```
<resource>|<pollerUrl>|<xPathFilter>|<updatedDateField>|<updatedDateFormat>|<updatedDateTimezone>|<createdDateField>|<createdDateFormat>|<createdDateTimezone>
```

Each polled resource is on a single line, i.e., multiple polled resources are configured via multiple lines with the above configuration format. For example, if a given element instance needs to poll `accounts` and `contacts`, the poller configuration may be as follows -

```
accounts|/hubs/crm/accounts?where=LastModifiedDate>=${date}||LastModifiedDate|yyyy-MM-dd'T'HH:mm:ssZ||CreatedDate|yyyy-MM-dd'T'HH:mm:ssZ
contacts|/hubs/crm/contacts?where=LastModifiedDate>=${date}||LastModifiedDate|yyyy-MM-dd'T'HH:mm:ssZ||CreatedDate|yyyy-MM-dd'T'HH:mm:ssZ
```

The above poller configuration will allow the element instance to poll for accounts and contacts, sequentially, at the specified poller interval, with the given URL.

#### JSON Poller Configuration

User should use the JSON poller configuration format, as the URL poller configuration format will be deprecated and decommissioned at some point in the near future. **Note: Cloud Elements will automatically migrate the `Poller URL` format to the `Poller JSON` format for all customer instances, so customers are not expected to reprovision their element instances.

The JSON poller configuration format is stored in the `event.poller.configuration` property of the element instance and is described below.

* `url`: The find API URL to fetch records for the resource. The url typically has a where clause to fetch the records since the last time the endpoint was polled. The date/time format is important to specify in the where clause so that the comparison between the updated date/time and the last polled date time will be accurate. This field is required.
* `filterByCurrentDate`: A boolean indicating whether the poller should add an upper limit date constraint to the polled objects. Since most service provider APIs do not support multiple date based filters (lower and upper limit), the Cloud Elements platform can prune objects that were created just after the poller started its execution. In an edge case scenario, if one or more records are created at the service endpoint wherein the creation date is after the poller starts its execution, but before the actual polling API is invoked, the objects created within this time frame will be returned with the current event and the next polling event, thus leading to duplication downstream. By constraining the polled objects with an upper limit, such duplication can be avoided. If the `filterByCurrentDate` flag is set to `true`, the `updatedDateField`, `updatedDateFormat` and `updatedDateTimezone` configuration within the `datesConfiguration` is utilized. **Note: If the updated date configuration is incorrect, it could result in object being excluded from the polling event that should not be. So, please ensure that these configuration parameters are set accurately for your service account.** This field is optional.
* `filterByUpdateDate`: A boolean indicating whether the poller should filter by updated date or not. This field defaults to true and must be explicitly set to false if such filtering is not required.
* `idField`: The JSON path to ID field in the returned payload. This configuration parameter is used to set the objectId in the normalized event payload
* `datesConfiguration`: A JSON object which has the following keys:
  * `updatedDateField`: This parameter, when specified, is used to retrieve the updated date value from the payload to filter out the non-updated or records that haven't changed since the last poll date/time.
  * `updatedDateFormat`: This parameter is used to ensure that any date comparison occurs with dates in the same timezone for accuracy.
  * `updatedDateTimezone`: The `timezone` to use to parse the updated date from the response payload. Examples of the `timezone` are `GMT`, `EST`, etc. This field is optional, but may be required in order to parse the dates accurately.
  * `createdDateField`: This field is used when the event type, UPDATED or CREATED needs to be determined by comparing the updated date and the created date.
  * `createdDateTimezone`: The `timezone` to use to parse the record created date from the response payload. Examples of the `timezone` are `GMT`, `EST`, etc. This field is optional, but may be required in order to parse the dates accurately.
  * `createdDateFormat`: This parameter is used to ensure that any date comparison occurs with dates in the same timezone for accuracy.
* `createdCheckTolerance`: An integer indicating the number of seconds to use as a tolerance for the comparison between created and updated date to determine if the record was CREATED or UPDATED.
* `pageSize`: The number of records to retrieve per page. When not specified, the default page size is used. supplied in the updated date format
* `pollDelay`: The number of seconds to subtract from the last poll date to ensure that records created but not yet available for search, are also included in the poller search run. If omitted, the value of this attribute defaults to 0

Here's an example of what you might see for the `event.poller.configuration` value:

```json
{
  "contacts": {
    "url": "/hubs/crm/contacts?where=update_time >= '${gmtDate:yyyy-MM-dd HH:mm:ss}'",
    "filterByCurrentDate": true,
    "filterByUpdatedDate": false,
    "idField": "user.id",
    "datesConfiguration": {
      "updatedDateField": "update_time",
      "updatedDateFormat": "yyyy-MM-dd HH:mm:ss",
      "updatedDateTimezone": "GMT",
      "createdDateField": "add_time",
      "createdDateFormat": "yyyy-MM-dd HH:mm:ss",
      "createdDateTimezone": "GMT"
    },
    "createdCheckTolerance": 2,
    "pageSize": 10000,
    "updatedDateTimezone": "MST",
    "pollDelay": 30
  },
  "accounts": {
    "url": "/hubs/crm/accounts?where=update_time >= '${gmtDate:yyyy-MM-dd HH:mm:ss}'",
    "filterByUpdatedDate": false,
    "idField": "user.id",
    "datesConfiguration": {
      "updatedDateField": "update_time",
      "updatedDateFormat": "yyyy-MM-dd HH:mm:ss",
      "createdDateField": "add_time",
      "createdDateFormat": "yyyy-MM-dd HH:mm:ss"
    },
    "createdCheckTolerance": 2,
    "pageSize": 10000,
    "updatedDateTimezone": "MST"
  }
}
```

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
  supply one in the request, then an error will be returned.

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
