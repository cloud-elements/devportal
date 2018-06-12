---
heading: Sharepoint
apiProvider: Microsoft # For cases where the API Provider is different than the element name. e;g;, ServiceNow vs. ServiceNow Oauth
seo: Overview | Sharepoint | Cloud Elements API Docs
title: Overview
description: Integrate Sharepoint into your application via the Cloud Elements APIs.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementKey: sharepoint
elementId: 30
parent: Back to Element Guides
order: 1
---

# Welcome to the {{page.heading}} Element

{{page.heading}} is available in the Documents hub. Connect a {{page.apiProvider}} account to integrate with files, sites, sub-site, and more.

{% include callout.html content="<strong>On this page</strong></br><a href=#element-details>Element Details</a></br><a href=#base-url>Base URL</a></br><a href=#authenticating-with-cloud-elements>Authenticating with Cloud Elements</a></br><a href=#error-codes>Error Codes</a>" type="info" %}

## Element Details

| Element Information | Details     |
| :------------- | :------------- |
| API Documentation | [{{page.apiProvider}} API documentation](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/sharepoint-net-server-csom-jsom-and-rest-api-index) |
| Authentication | OAuth 2.0  |
| Events | Polling |
| Bulk | Not supported |
| Transformations | Not supported. |

{% include Elements/index.md%}
