---
heading: Microsoft Dynamics CRM
seo: Bulk APIs | Microsoft Dynamics CRM | Cloud Elements API Docs
title: Bulk APIs
description: Add Bulk functionality to your app.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 190
elementKey: dynamicscrmadfs
parent: Back to Element Guides
order: 35
sitemap: false
---

# Bulk

Cloud Elements Bulk support provides an option to upload a large number of resources, such as `accounts`, to Microsoft Dynamics CRM all at once. You can use bulk to [download a csv or json](../../guides/bulk/download.html) file from a large number of records or [upload a csv or json](../../guides/bulk/upload.html) file to add multiple records. See the [Bulk Guide](../../guides/bulk/index.html) for more information on managing bulk.

{% include note.html content="Cloud Elements leverages the native provider bulk endpoints whenever available. When there is no bulk available from the provider, Cloud Elements provides a bulk service for uploading and downloading data from the endpoint. See <a href=#bulk-details>Bulk Details</a> for the type of bulk used." %}

## Parameters

First we will make the GET /objects call to retrieve a list of available objects

```bash
curl -X GET
-H 'Authorization: Element <INSERT ELEMENT TOKEN>, User <INSERT_USER_SECRET>'
'https://api.cloud-elements.com/elements/api-v2/hubs/marketing/objects'
```

Example of Successful Response:

```javascript
[
  "activities",
  "contact",
  "campaign",
  "list",
  "account"
]
```

The `contact` object is available. We will use contact in our bulk upload. It will be placed in our request URL.

A `CSV` file with populated data is required in our request, like the one seen below. Example data will be used in this demonstration.

![Sample CSV Data](/assets/img/sample-csv.png)

An Example request can be seen below.:

```bash
curl -X POST
-H 'Authorization: Element <INSERT ELEMENT TOKEN>, User <INSERT_USER_SECRET>'
-F file=@sample.csv
'https://api.cloud-elements.com/elements/api-v2/hubs/marketing/bulk/contact?path=/sample.csv'
```

Example of Successful Response:

```javascript
{
  "id": "1234",
  "status": "CREATED"
}
```

An `id` is assigned to bulk job. This can be used to check the status of a bulk job.

The `id “1234”` will be used in the request URL in the next example.

```bash
curl -X GET
-H 'Authorization: Element <INSERT ELEMENT TOKEN>, User <INSERT_USER_SECRET>'
'https://api.cloud-elements.com/elements/api-v2/hubs/marketing/bulk/1234/status'
```

Example of Successful Response:

```javascript
{
  "id": "1234",
  "status": "COMPLETE"
}
```

Once the job is completed, login to the cloud service an find your newly created contacts.

## Bulk Details

| Bulk Information | Details   |
| :------------- | :------------- |
|  Bulk Type  |  Cloud Elements bulk service and not native bulk endpoints. Rate limits come into play when using the Cloud Elements bulk service, so review the limitations in the [service provider's documentation](https://developer.salesforce.com/docs/atlas.en-us.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_api.htm).   |
| Upsert Support | Yes |
| Field Selection Support | Yes. You can specify fields within a resource. For example, `select attributes.accountid from accounts`.|
| Order By Support | No, `order by fieldName` is not supported for this element. |
