---
heading: Salesforce Sales Cloud
seo: Bulk APIs | Salesforce Sales Cloud | Cloud Elements API Docs
title: Bulk APIs
description: Add Bulk functionality to your app.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 23
parent: Back to Element Guides
order: 30
sitemap: false
---

# Bulk

Cloud Elements Bulk support provides an option to upload a large number of resources, such as contacts, to an API provider all at once. You can use bulk to [download a csv or json](../../guides/bulk/download.html) file from a large number of records or [upload a csv or json](../../guides/bulk/upload.html) file to add multiple records. See the [Bulk Guide](../../guides/bulk/index.html) for more information on managing bulk.

## Types of Bulk

Cloud Elements leverages the native provider bulk endpoints whenever available. When there is no bulk available from the provider, Cloud Elements provides a bulk service for uploading and downloading data from the endpoint.

The {{page.heading}} element uses the Salesforce bulk endpoints (batch APIs). Rate limits come into play when the Salesforce batch APIs, so review the limitations in the [API provider's documentation](https://developer.salesforce.com/docs/atlas.en-us.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_api.htm).

## Hash Verification

If you configured the **Callback Notification Signature Key** (`event.notification.signature.key`) when you authenticated an element instance, the bulk APIs will use the signature key to provide hash verification in the header of bulk jobs. For more on Cloud Elements Hash Verification, see [Event Management: Security](https://docs.cloud-elements.com/home/hash-verification).
