---
heading: SAP C4C CRM
seo: Bulk APIs | SAP Anywhere | Cloud Elements API Docs
title: Bulk APIs
description: Add Bulk functionality to your app.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 1468
parent: Back to Element Guides
order: 30
sitemap: false
---

# Bulk

Cloud Elements Bulk support provides an option to upload a large number of resources, such as contacts, to a service provider all at once. You can use bulk to [download a csv or json](../../guides/bulk/download.html) file from a large number of records or [upload a csv or json](../../guides/bulk/upload.html) file to add multiple records. See the [Bulk Guide](../../guides/bulk/index.html) for more information on managing bulk.

If we support a GET /objectName endpoint, like GET /contacts or GET /accounts, then you can bulk download from that resource. If we support a POST/objectName endpoint, like POST /leads or POST /campaigns, then you can bulk upload to that resource. See the [API docs](api-documentation.html) to review the endpoints that we support.

Cloud Elements leverages the provider bulk endpoints whenever available. When there is no bulk available from the provider, Cloud Elements provides a bulk service for uploading and downloading data from the endpoint.

The {{site.heading}} element uses the Cloud Elements bulk service. Rate limits come into play when using the bulk service, so review the limitations of your service provider.
