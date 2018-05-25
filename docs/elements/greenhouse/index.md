---
heading: Greenhouse
apiProvider: Greenhouse # For cases where the API Provider is different than the element name. e;g;, ServiceNow vs. ServiceNow Oauth
seo: Overview | Greenhouse | Cloud Elements API Docs
title: Overview
description: Integrate Greenhouse into your application via the Cloud Elements APIs.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 6148
elementKey: greenhouse
parent: Back to Element Guides
order: 1
---

# Welcome to the {{page.heading}} Element

{{page.heading}} is available in the Human Capital hub. Connect a {{page.apiProvider}} account to integrate with candidates and jobs.

Use this Postman collection and the documentation here to get started.

<div>
{% include_relative postman/{{page.elementKey}}-postman.html %}
</div>


{% include callout.html content="<strong>On this page</strong></br><a href=#element-details>Element Details</a></br><a href=#base-url>Base URL</a></br><a href=#authenticating-with-cloud-elements>Authenticating with Cloud Elements</a></br><a href=#error-codes>Error Codes</a>" type="info" %}

## Element Details

| Element Information | Details     |
| :------------- | :------------- |
| API Documentation | [{{page.apiProvider}} API documentation](https://developers.greenhouse.io/harvest.html#introduction) |
| Authentication | Basic  |
| Events | Webhooks |
| Bulk | Not supported |
| Transformations | Supported. See [Define Common Resources and Transformations](https://docs.cloud-elements.com/home/common-object) for more information about transforming your {{page.apiProvider}} data.|
| Rate Limits | [{{page.heading}} rate limit documentation](https://developers.greenhouse.io/harvest.html#throttling)|

{% include Elements/index.md%}
