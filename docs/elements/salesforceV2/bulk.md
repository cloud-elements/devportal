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

Cloud Elements Bulk support provides an option to upload a large number of resources, such as contacts, to a service provider all at once. You can use bulk to [download a csv or json](../../guides/bulk/download.html) file from a large number of records or [upload a csv or json](../../guides/bulk/upload.html) file to add multiple records. See the [Bulk Guide](../../guides/bulk/index.html) for more information on managing bulk.

If we support a GET /objectName API, like GET /contacts or GET /accounts, then you can bulk download from that resource. If we support a POST/objectName API, like POST /leads or POST /campaigns, then you can bulk upload to that resource.

Cloud Elements leverages the provider bulk endpoints whenever available. When there is no bulk available from the provider, Cloud Elements provides a bulk service for uploading and downloading data from the endpoint.

The {{site.heading}} element uses the Cloud Elements bulk service. Rate limits come into play when using the bulk service, so review the limitations in the [service provider's documentation](https://developer.salesforce.com/docs/atlas.en-us.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_api.htm).
