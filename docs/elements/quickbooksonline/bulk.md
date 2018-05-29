---
heading: QuickBooks Online
seo: Bulk APIs | QuickBooks Online| Cloud Elements API Docs
title: Bulk APIs
description: Add Bulk functionality to your app.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 39
parent: Back to Element Guides
order: 30
sitemap: false
---

# Bulk

Cloud Elements Bulk support provides an option to upload a large number of resources, such as contacts, to an API provider all at once. You can use bulk to [download a csv or json](../../guides/bulk/download.html) file from a large number of records or [upload a csv or json](../../guides/bulk/upload.html) file to add multiple records. See the [Bulk Guide](../../guides/bulk/index.html) for more information on managing bulk.

{% include note.html content="Cloud Elements leverages the native provider bulk endpoints whenever available. When there is no bulk available from the provider, Cloud Elements provides a bulk service for uploading and downloading data from the endpoint. See <a href=#bulk-details>Bulk Details</a> for the type of bulk used." %}

## Bulk Details

| Bulk Information | Details   |
| :------------- | :------------- |
|  Bulk Type  |  Cloud Elements Bulk Service. Rate limits come into play when using the Cloud Elements bulk service, so review the limitations in the [API provider's documentation](https://developer.intuit.com/docs/0100_quickbooks_online/0300_references/0000_programming_guide/0000_rest_api_quick_reference#/Limits_and_throttles).   |
| Upsert Support | No |
| Field Selection Support | No. To limit the fields returned by the query, you must use a transformation. See [Define Common Resources and Transformations](https://docs.cloud-elements.com/home/common-object). For example, you can use only `select *` for this element. |
| Order By Support | No, Order By is not currently supported. |

## Hash Verification

If you configured the **Callback Notification Signature Key** (`event.notification.signature.key`) when you authenticated an element instance, the bulk APIs will use the signature key to provide hash verification in the header of bulk jobs. For more on Cloud Elements Hash Verification, see [Event Management: Security](https://docs.cloud-elements.com/home/hash-verification).
