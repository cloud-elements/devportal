---
heading: SAP S/4 BAPI
apiProvider: SAP S/4 # For cases where the API Provider is different than the element name. e;g;, ServiceNow vs. ServiceNow Oauth
seo: Overview | SAP S/4 BAPI | Cloud Elements API Docs
title: Overview
description: Integrate SAP S/4 into your application via the Cloud Elements APIs.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementKey: saps4bapi
elementId: 6354
parent: Back to Element Guides
order: 1
---

# Welcome to the {{page.heading}} Element

{{page.heading}} is available in the ERP hub. Connect an SAP S/4 account to integrate with business processes and data via the Business Application Programming Interface (BAPI).

Use this Postman collection and the documentation here to get started.

<div>
{% include_relative includes/{{page.elementKey}}-postman.html %}
</div>

{% include callout.html content="<strong>On this page</strong></br><a href=#element-details>Element Details</a></br><a href=#base-url>Base URL</a></br><a href=#authenticating-with-cloud-elements>Authenticating with Cloud Elements</a></br><a href=#error-codes>Error Codes</a>" type="info" %}

## Element Details

| Element Information | Details     |
| :------------- | :------------- |
| API Documentation | [{{page.apiProvider}} API documentation](https://help.sap.com/saphelp_nw73ehp1/helpdata/en/48/5f9ba265c907dce10000000a42189d/frameset.htm) |
| Authentication | Custom  |
| Events | Polling via SAP [IDocs](https://help.sap.com/doc/saphelp_di46c2/4.6C2/en-US/72/c18ee5546a11d182cc0000e829fbfe/frameset.htm) |
| Bulk | Not supported |
| Transformations | Supported. See [Define Common Resources and Transformations](https://docs.cloud-elements.com/home/common-object) for more information about transforming your {{page.apiProvider}} data.|

{% include Elements/index.md%}
