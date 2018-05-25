---
heading: Zuora v2
apiProvider: Zuora # For cases where the API Provider is different than the element name. e;g;, ServiceNow vs. ServiceNow Oauth
seo: Overview | Zuora | Cloud Elements API Docs
title: Overview
description: Integrate Zuora into your application via the Cloud Elements APIs.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 2245
parent: Back to Element Guides
order: 1
sitemap: false
---

# Welcome to the {{page.heading}} Element

{{page.apiProvider}} enables you to manage customers, invoices, products, payments, etc. across multiple elements in the Payments hub.

{% include callout.html content="<strong>On this page</strong></br><a href=#element-details>Element Details</a></br><a href=#base-url>Base URL</a></br><a href=#authenticating-with-cloud-elements>Authenticating with Cloud Elements</a></br><a href=#error-codes>Error Codes</a>" type="info" %}

## Element Details

| Element Information | Details     |
| :------------- | :------------- |
| API Documentation | [{{page.apiProvider}} API documentation](https://www.zuora.com/developer/api-reference/#) |
| Authentication | Basic and Custom OAuth 2.0  |
| Events | Webhooks |
| Bulk | Supported for both upload and download. |
| Transformations | Supported. See [Define Common Resources and Transformations](https://docs.cloud-elements.com/home/common-object) for more information about transforming your {{page.heading}} data.|

{% include Elements/index.md%}
