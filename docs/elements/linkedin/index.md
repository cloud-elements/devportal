---
heading: LinkedIn
seo: Overview | LinkedIn | Cloud Elements API Docs
title: Overview
description: Integrate LinkedIn into your application via the Cloud Elements APIs.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 4169
parent: Back to Element Guides
order: 1
sitemap: false
---

# Welcome to the {{page.heading}} Element

{{page.heading}} provides a business social networking hub.

{% include note.html content="For most API requests, you must know the Company ID. To find a Company ID call <code>GET /companies</code>.  " %}

{% include callout.html content="<strong>On this page</strong></br><a href=#element-details>Element Details</a></br><a href=#base-url>Base URL</a></br><a href=#authenticating-with-cloud-elements>Authenticating with Cloud Elements</a></br><a href=#error-codes>Error Codes</a>" type="info" %}

## Element Details

| Element Information | Details     |
| :------------- | :------------- |
| API Documentation | [{{page.heading}} API documentation](https://developer.linkedin.com/docs/rest-api#) |
| Authentication | OAuth 2.0  |
| Events | Polling |
| Bulk | Supported for both upload and download. |
| Transformations | Supported. See [Define Common Resources and Transformations](https://docs.cloud-elements.com/home/common-object) for more information about transforming your {{page.heading}} data.|
| Rate Limits | Limits vary by endpoint. See [Throttle Limits in LinkedIn's API documentation](https://developer.linkedin.com/docs/company-pages). |

{% include Elements/index.md%}
