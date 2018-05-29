---
heading: Plaid
apiProvider: Plaid # For cases where the API Provider is different than the element name. e;g;, ServiceNow vs. ServiceNow Oauth
seo: Overview | Plaid | Cloud Elements API Docs
title: Overview
description: Integrate Plaid into your application via the Cloud Elements APIs.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 5865
parent: Back to Element Guides
order: 1
---

# Welcome to the {{page.heading}} Element

Plaid is available in the Finance hub. Connect a Plaid account to integrate with accounts, transactions, institutions, categories, and more.

{% include callout.html content="<strong>On this page</strong></br><a href=#element-details>Element Details</a></br><a href=#base-url>Base URL</a></br><a href=#authenticating-with-cloud-elements>Authenticating with Cloud Elements</a></br><a href=#error-codes>Error Codes</a>" type="info" %}

## Element Details

| Element Information | Details     |
| :------------- | :------------- |
| API Documentation | [{{page.apiProvider}} API documentation](https://plaid.com/docs/api/) |
| Authentication | Custom  |
| Events | Polling |
| Bulk | Supported for both upload and download. |
| Transformations | Supported. See [Define Common Resources and Transformations](https://docs.cloud-elements.com/home/common-object) for more information about transforming your {{page.heading}} data.|
| Rate Limits | [{{page.heading}} rate limit documentation](https://plaid.com/docs/api/#rate-limit-exceeded-errors)|

{% include Elements/index.md%}
