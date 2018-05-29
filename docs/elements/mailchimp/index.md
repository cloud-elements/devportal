---
heading: MailChimp v3.0
apiProvider: MailChimp # For cases where the API Provider is different than the element name. e;g;, ServiceNow vs. ServiceNow Oauth
seo: Overview | MailChimp | Cloud Elements API Docs
title: Overview
description: Integrate MailChimp into your application via the Cloud Elements APIs.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 197
parent: Back to Element Guides
order: 1
sitemap: false
---

# Welcome to the {{page.heading}} Element

{{page.apiProvider}} provides marketing automation for e-commerce businesses.

{% include callout.html content="<strong>On this page</strong></br><a href=#element-details>Element Details</a></br><a href=#base-url>Base URL</a></br><a href=#authenticating-with-cloud-elements>Authenticating with Cloud Elements</a></br><a href=#error-codes>Error Codes</a>" type="info" %}

## Element Details

| Element Information | Details     |
| :------------- | :------------- |
| API Documentation | [{{page.apiProvider}} API documentation](https://developer.mailchimp.com/documentation/mailchimp/reference/overview/) |
| Authentication | OAuth 2.0  |
| Events | Webhooks  |
| Bulk | Supported for both upload and download. |
| Transformations | Supported. See [Define Common Resources and Transformations](https://docs.cloud-elements.com/home/common-object) for more information about transforming your {{page.heading}} data.|
| Rate Limits | [{{page.heading}} rate limit documentation](https://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#throttling)|

{% include Elements/index.md%}
