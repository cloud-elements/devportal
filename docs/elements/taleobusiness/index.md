---
heading: Taleo Business Edition
apiProvider: Oracle Taleo # For cases where the API Provider is different than the element name. e;g;, ServiceNow vs. ServiceNow Oauth
seo: Overview | Taleo Business Edition | Cloud Elements API Docs
title: Overview
description: Integrate Taleo Business Edition into your application via the Cloud Elements APIs.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementKey: taleobusiness
elementId: 6157
parent: Back to Element Guides
order: 1
---

# Welcome to the {{page.heading}} Element

{{page.heading}} is available in the Human Capital hub. Connect a {{page.apiProvider}} account to integrate with accounts, candidates, employees, and more.

Use this Postman collection and the documentation here to get started.

<div>
{% include_relative includes/taleobusiness-postman.html %}
</div>

{% include callout.html content="<strong>On this page</strong></br><a href=#element-details>Element Details</a></br><a href=#base-url>Base URL</a></br><a href=#authenticating-with-cloud-elements>Authenticating with Cloud Elements</a></br><a href=#error-codes>Error Codes</a>" type="info" %}

## Element Details

| Element Information | Details     |
| :------------- | :------------- |
| API Documentation | [{{page.apiProvider}} API documentation](http://www.oracle.com/technetwork/documentation/tberestapiguide-v15b1-2665296.pdf/) |
| Authentication | Basic + Company Code  |
| Events | Polling |
| Bulk | Supported |
| Transformations | Supported. See [Define Common Resources and Transformations](https://docs.cloud-elements.com/home/common-object) for more information about transforming your {{page.apiProvider}} data.|

{% include Elements/index.md%}
