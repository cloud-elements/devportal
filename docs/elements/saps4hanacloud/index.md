---
heading: SAP S/4 HANA Cloud
apiProvider: SAP S/4HANA Cloud # For cases where the API Provider is different than the element name. e;g;, ServiceNow vs. ServiceNow Oauth
seo: Overview | SAP S/4 HANA Cloud | Cloud Elements API Docs
title: Overview
description: Integrate SAP S/4 HANA Cloud into your application via the Cloud Elements APIs.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementKey: saps4hanacloud
elementId: 6374
parent: Back to Element Guides
order: 1
---

# Welcome to the {{page.heading}} Element

{{page.heading}} is available in the ERP hub. Connect an SAP S/4 HANA account to integrate with business partners, customers, and more.

Use this Postman collection and the documentation here to get started.

<div>
{% include_relative includes/{{page.elementKey}}-postman.html %}
</div>

{% include callout.html content="<strong>On this page</strong></br><a href=#element-details>Element Details</a></br><a href=#base-url>Base URL</a></br><a href=#authenticating-with-cloud-elements>Authenticating with Cloud Elements</a></br><a href=#error-codes>Error Codes</a>" type="info" %}

## Element Details

| Element Information | Details     |
| :------------- | :------------- |
| API Documentation | [{{page.apiProvider}} API documentation](https://api.sap.com/package/SAPS4HANACloud?section=Artifacts) |
| Authentication | Custom  |
| Events | Polling |
| Bulk | Supported |
| Transformations | Supported. See [Define Common Resources and Transformations](https://docs.cloud-elements.com/home/common-object) for more information about transforming your {{page.apiProvider}} data.|

{% include Elements/index.md%}
