---
heading: Event Management
seo: Event Management | Cloud Elements API Docs
title: Polling Configuration
description: View the Event Management Guide explaining the Cloud Elements Events Framework.
layout: sidebarleft
breadcrumbs: /docs/platform/platform-docs.html
parent: Back to Platform Docs
order: 30
sitemap: false
---

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
