---
heading: Marketo
seo: Bulk APIs | Marketo | Cloud Elements API Docs
title: Bulk APIs
description: Add Bulk functionality to your app.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 85
parent: Back to Element Guides
order: 35
sitemap: false
---

# Bulk

Cloud Elements Bulk support provides an option to upload a large number of resources, such as contacts, to an API provider all at once. You can use bulk to [download a csv or json](../../guides/bulk/download.html) file from a large number of records or [upload a csv or json](../../guides/bulk/upload.html) file to add multiple records. See the [Bulk Guide](../../guides/bulk/index.html) for more information on managing bulk.

{% include note.html content="Cloud Elements leverages the native provider bulk endpoints whenever available. When there is no bulk available from the provider, Cloud Elements provides a bulk service for uploading and downloading data from the endpoint. See <a href=#bulk-details>Bulk Details</a> for the type of bulk used." %}

## Bulk Details

| Bulk Information | Details   |
| :------------- | :------------- |
|  Bulk Type  |  Marketo's native bulk endpoints  |
| Upsert Support | Yes |
| Field Selection Support | Yes. You can specify fields within a resource. For example, `select name,id from contacts`. |
| Order By Support | Yes, you can add `order by fieldName` to the query. |

## Hash Verification

If you configured the **Callback Notification Signature Key** (`event.notification.signature.key`) when you authenticated an element instance, the bulk APIs will use the signature key to provide hash verification in the header of bulk jobs. For more on Cloud Elements Hash Verification, see [Event Management: Security](https://docs.cloud-elements.com/home/hash-verification).

## Limiters

When using our Bulk API's with Marketo you also have the option of using limiters. In order to use the limiters you need to change the query to add a limit. For example if your query was "select * from contacts" you would update it to "select * from contacts limit 1000" (or however many you want to limit it to). After you create this you will get a response that includes an ID. If you then want to get the next part of this same query you use the ID for that job by clearing out the q (or query) field and instead filling out the field "continueFromJobID" and placing the job id in this field. In this example this would grab the next 1000 items.

## Querying Leads by List
If querying leads by list, include a where expression with a `listId` specified.

The bulk upload endpoint supports upserts, and will upsert records by default if no parameter is specified in the metadata via `{"action":"upsert"}`.  Upserts and updates require "identifierFieldName" or "primaryKeyName" to be set in the metadata field
as well.  A full payload looks something like:

```json
  {
    "action" : "upsert",
    "primaryKeyName" : "id"
  }
```

If uploading leads to a list, use "listId" as a key in the metadata JSON.

```json
  {
    "listId": "123",
    "action" : "upsert",
    "primaryKeyName" : "id"
  }
```
