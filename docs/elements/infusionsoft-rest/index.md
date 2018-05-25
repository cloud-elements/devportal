---
heading: Infusionsoft REST
apiProvider: Infusionsoft # For cases where the API Provider is different than the element name. e;g;, ServiceNow vs. ServiceNow Oauth
seo: Overview | Infusionsoft CRM | Cloud Elements API Docs
title: Overview
description: Integrate Infusionsoft CRM into your application via the Cloud Elements APIs.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 6158
hub: CRM
auth: OAuth 2.0
events: Polling
bulk: Supported
parent: Back to Element Guides
order: 1
redirect_from:
  - docs/elements/infusionsoft-crm/events.html
sitemap: false
---

# Welcome to the {{page.heading}} Element

The {{page.heading}} element provides access to {{page.apiProvider}} functionality in the {{page.hub}} hub.

Use this Postman collection and the documentation here to get started.

<div>
{% include_relative includes/inrest-postman.html %}
</div>


{% include callout.html content="<strong>On this page</strong></br><a href=#element-details>Element Details</a></br><a href=#base-url>Base URL</a></br><a href=#authenticating-with-cloud-elements>Authenticating with Cloud Elements</a></br><a href=#error-codes>Error Codes</a>" type="info" %}

## Element Details

| Element Information | Details     |
| :------------- | :------------- |
| API Documentation | [{{page.heading}} API documentation](https://developer.infusionsoft.com/docs/rest/#!/Affiliate/searchCommissionsUsingGET) |
| Authentication | {{page.auth}}  |
| Events | {{page.events}} |
| Bulk | {{page.bulk}} |
| Transformations | Supported. See [Define Common Resources and Transformations](https://docs.cloud-elements.com/home/common-object) for more information about transforming your {{page.heading}} data.|

{% include Elements/index.md%}
