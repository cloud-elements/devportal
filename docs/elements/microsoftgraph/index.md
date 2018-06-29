---
heading: Microsoft Graph
apiProvider: Microsoft
seo: Overview | Name of Element | Cloud Elements API Docs
title: Overview
description: Integrate Microsoft Graph into your application via the Cloud Elements APIs.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 5836
parent: Back to Element Guides
order: 1
---

# Welcome to the {{page.heading}} Element

{{page.heading}} provides access to connect to a Microsoft calendar. The Microsoft Graph element can receive events only for the calendar of the authenticated user.

{% include callout.html content="<strong>On this page</strong></br><a href=#element-details>Element Details</a></br><a href=#base-url>Base URL</a></br><a href=#authenticating-with-cloud-elements>Authenticating with Cloud Elements</a></br><a href=#error-codes>Error Codes</a>" type="info" %}

## Element Details

| Element Information | Details     |
| :------------- | :------------- |
| API Documentation | [{{page.apiProvider}} API documentation](https://developer.microsoft.com/en-us/graph/docs/concepts/overview) |
| Authentication | OAuth 2.0  |
| Events | Webhooks |
| Bulk | Supported for both upload and download. |
| Transformations | Supported. See [Define Common Resources and Transformations](https://docs.cloud-elements.com/home/common-object) for more information about transforming your {{page.heading}} data.|

{% include Elements/index.md%}
