---
heading: Freshbooks Cloud Accounting
apiProvider: Freshbooks # For cases where the API Provider is different than the element name. e;g;, ServiceNow vs. ServiceNow Oauth
seo: Overview | Freshbooks Cloud Accounting | Cloud Elements API Docs
title: Overview
description: Integrate Freshbooks Cloud Accounting into your application via the Cloud Elements APIs.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 5924
parent: Back to Element Guides
order: 1
---

# Welcome to the {{page.heading}} Element

The {{page.heading}} element is available in the Finance hub. Connect a {{page.apiProvider}} account to integrate with invoices, payments, customers, taxes, and more.

{% include callout.html content="<strong>On this page</strong></br><a href=#element-details>Element Details</a></br><a href=#base-url>Base URL</a></br><a href=#authenticating-with-cloud-elements>Authenticating with Cloud Elements</a></br><a href=#error-codes>Error Codes</a>" type="info" %}

## Element Details

| Element Information | Details     |
| :------------- | :------------- |
| API Documentation | [{{page.apiProvider}} API documentation](https://www.freshbooks.com/api/start) |
| Authentication | OAuth 2.0  |
| Events | Webhooks |
| Bulk | Supported for both upload and download. |
| Transformations | Supported. See [Define Common Resources and Transformations](https://docs.cloud-elements.com/home/common-object) for more information about transforming your {{page.heading}} data.|
| Rate Limits | [{{page.heading}} rate limit documentation](https://www.freshbooks.com/api/limits)|

{% include Elements/index.md%}
