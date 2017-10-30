---
heading: Quickbooks Online
seo: Overview | Quickbooks Online | Cloud Elements API Docs
title: Overview
description: Integrate Quickbooks Online into your application via the Cloud Elements APIs.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 39
parent: Back to Element Guides
order: 1
sitemap: false
---

# Welcome to the {{page.heading}} Element

{{page.heading}} provides on-demand customer relationship management (CRM) services.

{% include note.html content="As of July 17, 2017 you cannot authenticate a new instance with Quickbooks Online. Cloud Elements supports OAuth 1.0 authentication which is no longer supported for new apps.  We expect to release an updated element in the 3rd quarter of 2017. See <a href=https://developer.intuit.com/docs/0100_quickbooks_online/0100_essentials/000500_authentication_and_authorization/connect_from_within_your_app>Intuit's documentation on OAuth 2.0</a> for more." %}

{% include callout.html content="<strong>On this page</strong></br><a href=#element-details>Element Details</a></br><a href=#base-url>Base URL</a></br><a href=#authenticating-with-cloud-elements>Authenticating with Cloud Elements</a></br><a href=#error-codes>Error Codes</a>" type="info" %}

## Element Details

| Element Information | Details     |
| :------------- | :------------- |
| API Documentation | [Quickbooks API documentation](https://developer.intuit.com/docs) |
| Authentication | OAuth 1.0 or Token Based |
| Events | Polling |
| Bulk | Supported for both upload and download. |
| Transformations | Supported. See [Define Common Resources and Transformations](/docs/guides/common-resources/index.html) for more information about transforming your {{page.heading}} data.|
| Rate Limits | [{{page.heading}} rate limit documentation](https://developer.intuit.com/docs/0100_quickbooks_online/0300_references/0000_programming_guide/0000_rest_api_quick_reference#/Limits_and_throttles)|
| Authentication Requirements |  Only the Master Administrator or a Company Administrator can authorize access to a QuickBooks company.|

{% include Elements/index.md%}
