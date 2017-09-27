---
valeOff: <!-- vale off -->
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
ValeOn: <!-- vale on -->
---

# Events

{% include workflow.html displayNames="Info,Authentication,Config & Parameters,Hooks,Events,Resources" links="define-info.html,auth.html,config.html,hooks.html,events.html,resources.html" active="Events"%}

In many cases you want your element to be updated when an event occurs at an API provider. For example, when a user uploads a file to a Dropbox account or when a new contact is added to a CRM element. Cloud Elements supports two types of events: polling and webhooks. With polling, Cloud Elements pings the API provider at configurable intervals to see if a change has occurred. With webhooks, the API provider notifies Cloud Elements when changes occur.

{% include callout.html content="<strong>On this page</strong></br><a href=#configure-webhook-events>Configure Webhook Events</a></br><a href=#webhook-parameters>Webhook Parameters</a></br><a href=#configure-webhook-events>Configure Polling Events</a></br><a href=#polling-parameters>Polling Parameters</a>" type="info" %}

## Configure Webhook Events

To see if the API provider provides webhooks, review the API documentation. Webhooks often require specific setup steps at the API provider. Adding webhooks to an element does not require any specific configuration. However, if you need to perform any configuration, you must do so using an [event hook](hooks.html). For example, if the API provider sends event webhook types in a different format you can manipulate the types using a event hook. See the code for this example in [Custom Hooks](hooks.html#reading-event-webhooks).

To set up webhooks:

1. On the Setup page, open **Events**.
2. Switch **Enable Events** on.
3. From **Event Types**, select **Webhooks**.
4. Optionally click **Add an Event Hook** and use JavaScript to write an event hook.
4. Click **Save**.

## Configure Polling Events

Even if the API provider does not explicitly support events, you can set up polling on any resource that include `created` and `updated` data. With polling, Cloud Elements checks for updates to a resource at specified intervals. Set up polling for one resource at a time by defining a GET request that filters out records that have not changed. Define what makes each record unique and how the date formats that the API provider uses for updated and created records.

The information that you include about the updated and created date fields help Cloud Elements make decisions about records. For example, if the times in the **Updated date field** and **Created date field** are the same, we know the record was created, not updated. If the time in the **Created date field** is earlier than the  **Updated date field**, we know the record changed since it was created. If the **Updated date field** is not later than the last polling time, we ignore the record.

When users authenticate an element instance, they can customize these settings. Changing polling resource configuration is recommended only for the most technical users, but updating a polling interval can be done by anyone.

The steps outlined below assumes that the resource meets two prerequisites. First, the resource supports filtering through a where clause in the request. Second, the resource metadata includes an identifier field (such as `id`, `internalID`, or `resourceId`) and date fields that distinguish between updated and created dates (such as `modifiedDate`, `updatedDate`, or `createdDate`). You can still poll resource that do not meet the prerequisites, but you need to follow a different process. See [Polling Tips](#polling-tips).

To set up polling:

1. On the Setup page, open **Events**.
2. Switch **Enable Events** on.
3. From **Event Types**, select **Polling**.
4. Use the **Default Interval Polling Time (in minutes)** slider or enter a number in minutes to specify how often Cloud Elements should poll for changes.
5. In **resource name**, enter the name of a resource that contains acceptable polling data (`created` and `updated` data).
6. Click **Add Polling Resource**.
7. Complete the resource properties (see [Polling Parameters](#polling-parameters) for details):
![Resource Properties](img/polling-info.png)
  * **URL** &mdash; Enter the hub url with any query parameters needed to identify that the resource is updated. For example: `/hubs/finance/customers?where=lastModifiedDate>='${date:yyyy-MM-dd'T'HH:mm:ss'Z'}' `. See [Resource URL Date Format](#resource-url-date-format) for details about how to format the date portion of the where clause.
  * **ID Field** &mdash; Enter the unique identifier of the resource that you want to monitor.
7. Complete the updated date properties (see [Polling Parameters](#polling-parameters) for details):
![Updated Date Properties](img/polling-updated.png)
* **Updated date field** &mdash; Enter the name of the parameter in the resource that identifies when a record was updated.
  * **Updated date format** &mdash; Select the date and time format of the **Updated date field**. See [Polling Date Formats](#polling-date-formats) for more information.
  * **Updated date timezone** &mdash; Select the time zone associated with the updated date field.
7. Complete the created date properties (see [Polling Parameters](#polling-parameters) for details):
![Created Date Properties](img/polling-created.png)
  - **Created date field** &mdash; Enter the name of the parameter in the resource that identifies when a record was created.
  * **Created date format** &mdash; Select the date and time format of the **Created date field**. See [Polling Date Formats](#polling-date-formats) for more information.
  * **Created date timezone** &mdash; Select the time zone associated with the updated date field.
7. Add more resources as needed: Enter a resource name, click **Add Polling Resource**, and then complete the resource properties.
4. Optionally click **Add an Event Hook** and use JavaScript to write an event hook.
4. Click **Save**.

## Advanced Polling

While you can configure polling for most cases in the Cloud Elements, you need to use the element's configuration code to solve advanced polling problems. You can access the element configuration using the Element Builder API.

To access the element configuration:

```
GET /elements/{keyOrId}/configuration
```

where {keyOrId} is your element key or element ID.

Within the element configuration, look for the Event Poller Resources Configuration, or `event.poller.configuration`.

```json
{
  "id": 66749,
  "name": "Event Poller Resources Configuration",
  "key": "event.poller.configuration",
  "description": "ActiveCampaign2 Event Poller Resources Configuration",
  "defaultValue": "{\"deals\":{\"url\":\"/hubs/marketing/deals?where=mdate>=2017-02-28T16:11:29-06:00\",\"idField\":\"id\",\"datesConfiguration\":{\"updatedDateField\":\"mdate\",\"updatedDateFormat\":\"yyyy-MM-dd'T'HH:mm:ssXXX\",\"createdDateField\":\"cdate\",\"createdDateFormat\":\"yyyy-MM-dd'T'HH:mm:ssXXX\",\"createdDateTimezone\":\"\"}}}",
  "resellerConfig": false,
  "companyConfig": false,
  "active": true,
  "internal": false,
  "groupControl": false,
  "displayOrder": 104,
  "type": "TEXTAREA",
  "hideFromConsole": false,
  "required": false
}
```

In `defaultValue`, you see the entries you made in Cloud Elements. However, the default value section can include additional parameters. Here is a cleaned up version of the JSON with all available parameters:

```json
{
  "events":{
    "url":"/hubs/documents/events",
    "idField":"event_object_id",
    "filterByUpdatedDate": true,
    "datesConfiguration":{
      "updatedDateField":"event_date",
      "updatedDateFormat":"yyyy-MM-dd'T'HH:mm:ss.SSSX",
      "updatedDateTimezone":"GMT",
      "createdDateField":"event_date",
      "createdDateFormat":"yyyy-MM-dd'T'HH:mm:ss.SSSX'",
      "createdDateTimezone":"GMT"
    },
    "createdCheckTolerance": 60,
    "pageSize": 20,
    "updatedDateTimezone": "GMT",
    "pollDelay": 60
  }
}
```

You can use the additional settings to solve various challenges that the API provider presents in their code. For example, if you set `filterByUpdatedDate` to `false`, you can manage a situation where the API provider does not distinguish between updated and created dates. Or, if the API provider's data shows a minor variation between created and updated dates on created records, you can account for that by setting createdCheckTolerance. See [Polling Parameters](#polling-parameters) for definitions and details.

When you authenticate an element instance and set up polling, you can add or change parameters for each authenticated element instance.

## Polling Parameters

| Parameter | Description    | Required | Code Only |
| :------------- | :------------- | :------------- |  :------------- |
| Default Interval Polling Time </br>`event.poller.refresh_interval` | {{site.data.glossary.event-polling-refresh-interval}} | Y | N |
| Resource Name </br>`name` | {{site.data.glossary.event-polling-refresh-interval}} | Y | N |
| URL </br> `url` | The URL used to fetch records for the resource. Include a where clause to fetch the records since the last time that Cloud Elements checked for changes. Specify the within `${date:}` to ensure that we correctly compare the updated date and time to the last polled date time. For example: `/hubs/finance/customers?where=lastModifiedDate>='${date:yyyy-MM-dd'T'HH:mm:ss'Z'}' `. </br>See [Resource URL Date Format](#resource-url-date-format) for details about how to format the date portion of the where clause. | Y | N |
| ID Field </br>`idField` | The unique identifier of the resource that you want to monitor. | Y |N |
| `filterByUpdatedDate`   | Identifies the parameter used to determine if a record is updated. <br>**Default:** `true`  |  N |  Y  |
| Updated date field </br>`updatedDateField`  | The parameter in the resource that identifies when a record was updated.  | Y  |N |
| Updated date format </br>`updatedDateFormat` | The date and time format of the **Updated date field**. See [Polling Date Formats](#polling-date-formats) for more information.  |   | N |
| Updated date timezone </br>`updatedDateTimezone`  | The time zone associated with the updated date field. Match the time zone to the one used by the API provider. | N  |
| Created date field </br>`createdDateField`  |  The parameter in the resource that identifies when a record was created. |   | N |
| Created date format </br>`createdDateFormat`  | The date and time format of the **Created date field**. See [Polling Date Formats](#polling-date-formats) for more information.  |  Y | N |
| Created date timezone </br>`createdDateTimezone`   | The time zone associated with the updated date field. Match the time zone to the one used by the API provider.  | N  | N |
| `createdCheckTolerance`  | An integer indicating the number of seconds to use as a tolerance for the comparison between created and updated date to determine if the record was created or updated.  | N  |  Y |
| `pageSize`  | The number of records to retrieve per page. If you don't specify, we use the default page size.  | N  | Y  |
| `updatedDateTimezone`  | The time zone abbreviation for updated records if not supplied in the updated date format  | N  | Y  |
| `pollDelay`  | The number of seconds to subtract from the last poll date to ensure that records created, but not yet available for search, are also included in the poller search run. </br>**Default:** `0`  | N  | Y  |


See below for details about date formats in polling and tips to handle various situations, or continue to the next step, [Custom Resources](resources.html).

{% include workflow.html displayNames="Info,Authentication,Config & Parameters,Hooks,Events,Resources" links="define-info.html,auth.html,config.html,hooks.html,events.html,resources.html" active="Resources"%}

## Dates in Polling

When configuring polling you enter dates as part of the where clause in the URL and when you set up the date formats of the updated and created date fields.

### Resource URL Date Format

Use the following pattern to specify a date format in the URL:` '${dateFieldDescriptor:dateFieldFormat}'`.

For example:

```
/hubs/finance/customers?where=lastModifiedDate>='${date:yyyy-MM-dd'T'HH:mm:ss'Z'}'
```

The `dateFieldDescriptor` helps to describe the `dateFieldFormat` to ensure that Cloud Elements knows what time zone is associated with the dates in the API vendor's response. Our servers run on GMT so specifying that an API provider's date format is also GMT is easy. However, some API providers send their data in a specific time zone or use UNIX epochs. When this is the case, use the `dateFieldDescriptor` to get specific.

Cloud Elements supports the following `dateFieldDescriptor`s:

* `date` &mdash; Specifies that the `dateFieldFormat` is a simple date and that the time zone is GMT unless specified differently.
* `gmtDate` &mdash; Specifies that the `dateFieldFormat` is a simple date and that the time zone is GMT.
* `dateTimeZone:{zone}` Specifies that the `dateFieldFormat` is a simple date and that the time zone is specified in the `{zone}` as time zone using [common abbreviations](https://www.timeanddate.com/time/zones/) (MST, EST, UTC) or offsets (-6:00 or +6:00). For example, `dateTimeZone:PST` identifies the time zone as Pacific Standard time.
* `now` &mdash; Specifies that the `dateFieldFormat` is a simple date and that the time zone is GMT unless specified differently. Most use cases for now can be addressed in the date descriptors above.
* `epoch` &mdash; Specifies that the API provider returns the date in a UNIX time format. If using epochs, do not enter a `dateFieldFormat`. Enter only `${epoch}`, which describes the time to the millisecond (such as 1506544512258). If the API provider calculates epochs to the second use `epoch:s`, or if calculated to the microsecond use `epoch:us`.

## Polling Date Formats

Cloud Elements can handle almost any date format used by API providers. Use the date formats in the URL, Updated date format (`updatedDateFormat`), and Created date format (`createdDateFormat`). Use the following table to help understand some of date formats.

| Format | Example   |
| :------------- | :------------- |
| yyyy-MM-dd'T'HH:mm:ssXXX  |  2017-08-30 13:19:29-0600  |
| yyyy-MM-dd'T'HH:mm:ssZ   | 2017-08-30 13:19:29+0100  |
| yyyy-MM-dd | 2017-08-30  |
| yyyy/MM/dd HH:mm:ss   | 2017-08-30 13:19:29  |
| MM/dd/yyy'T'HH:mm:ssXXX  | 08-30-2017 13:19:29-0600  |
| MM/dd/yyy   | 08-30-2017  |
| dd/MM/yyy'T'HH:mm:ssXXX   | 30-08-2017 13:19:29-0600  |
| dd/MM/yyy   |  30-08-2017 |
| EEE, dd MMM yyyy HH:mm:ss Z   | Saturday, 30-08-2017 13:19:29+0 |

[http://tutorials.jenkov.com/java-internationalization/simpledateformat.html](http://tutorials.jenkov.com/java-internationalization/simpledateformat.html)

* 'T' separtes date and time.
* Z defines GMT (UTC) time. ?????
* XXX defines a specific time zone. ?????

## Polling Tips

* The resource does not support a where clause.
  - Enter the URL without a where clause. Cloud Elements will check the response 20 records at a time, and look for records updated after the last polling time.
* The resource does not distinguish between created and modified dates.
  - Enter the same date field as both the created and updated dates and change `filterByUpdatedDate` to `false`. Cloud Elements will filter by the Created Date and compare that to the last polling date.
* The API provider does not support greater than or less than symbols.
  - See the API provider's modified fields in the response and use build a query with keywords like `since modifiedField` to imply greater than, or `before modifiedField` to imply less than.
* The API provider returns
