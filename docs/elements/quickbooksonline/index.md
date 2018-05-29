---
heading: QuickBooks Online
seo: Overview | QuickBooks Online | Cloud Elements API Docs
title: Overview
description: Integrate QuickBooks Online into your application via the Cloud Elements APIs.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 39
parent: Back to Element Guides
order: 1
sitemap: false
---

# Welcome to the {{page.heading}} Element

{{page.heading}} provides on-demand customer relationship management (CRM) services.

{% include callout.html content="<strong>On this page</strong></br><a href=#element-details>Element Details</a></br><a href=#base-url>Base URL</a></br><a href=#authenticating-with-cloud-elements>Authenticating with Cloud Elements</a></br><a href=#error-codes>Error Codes</a>" type="info" %}

## Element Details

| Element Information | Details     |
| :------------- | :------------- |
| API Documentation | [QuickBooks API documentation](https://developer.intuit.com/docs) |
| Authentication | OAuth 2.0 for apps created after July 2017, OAuth 1.0 for apps created before July 2017 |
| Events | Polling and webhooks |
| Bulk | Supported for both upload and download. |
| Transformations | Supported. See [Define Common Resources and Transformations](https://docs.cloud-elements.com/home/common-object) for more information about transforming your {{page.heading}} data.|
| Rate Limits | [{{page.heading}} rate limit documentation](https://developer.intuit.com/docs/0100_quickbooks_online/0300_references/0000_programming_guide/0000_rest_api_quick_reference#/Limits_and_throttles)|
| Authentication Requirements |  Only the Master Administrator or a Company Administrator can authorize access to a QuickBooks company.|

{% include Elements/index.md%}
