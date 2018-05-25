---
heading: Insightly
apiProvider: Insightly # For cases where the API Provider is different than the element name. e;g;, ServiceNow vs. ServiceNow Oauth
seo: Overview | Insightly | Cloud Elements API Docs
title: Overview
description: Integrate Insightly into your application via the Cloud Elements APIs.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 5993
parent: Back to Element Guides
order: 1
---

# Welcome to the {{page.heading}} Element

{{page.heading}} is available in the CRM hub. Connect an {{page.apiProvider}} account to integrate with accounts, contacts, leads, opportunities, and more.

Use this Postman collection and the documentation here to get started.

<div>
{% include_relative postman/insightly-postman.html %}
</div>

{% include callout.html content="<strong>On this page</strong></br><a href=#element-details>Element Details</a></br><a href=#base-url>Base URL</a></br><a href=#authenticating-with-cloud-elements>Authenticating with Cloud Elements</a></br><a href=#error-codes>Error Codes</a>" type="info" %}

## Element Details

| Element Information | Details     |
| :------------- | :------------- |
| API Documentation | [{{page.apiProvider}} API documentation](https://api.insight.ly/v2.2/Help) |
| Authentication | Basic |
| Events | Polling |
| Bulk | Supported for both upload and download. |
| Transformations | Supported. See [Define Common Resources and Transformations](https://docs.cloud-elements.com/home/common-object) for more information about transforming your {{page.heading}} data.|

{% include Elements/index.md%}
