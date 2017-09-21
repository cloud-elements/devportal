---
heading: Marketo
seo: Overview | Marketo | Cloud Elements API Docs
title: Overview
description: Integrate Marketo into your application via the Cloud Elements APIs.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 85
parent: Back to Element Guides
order: 1
sitemap: false
---

# Welcome to the {{page.heading}} Element

{{page.heading}} provides revenue performance management services.

{% include callout.html content="<strong>On this page</strong></br><a href=#element-details>Element Details</a></br><a href=#base-url>Base URL</a></br><a href=#authenticating-with-cloud-elements>Authenticating with Cloud Elements</a></br><a href=#error-codes>Error Codes</a>" type="info" %}

## Element Details

| Element Information | Details     |
| :------------- | :------------- |
| API Documentation | [{{page.heading}} API documentation](http://developers.marketo.com/rest-api/) |
| Authentication | OAuth 2  |
| Events | Webhooks and polling |
| Bulk | Supported for both upload and download. |
| Transformations | Supported. See [Define Common Resources and Transformations](/docs/guides/common-resources/index.html) for more information about transforming your {{page.heading}} data.|

## Base URL

The Cloud Element Base URL for all API calls is `https://api.cloud-elements.com/elements/api-v2`.

HTTP requests to the REST API are protected with HTTP Custom authentication with your Organization and User secret and an Element Instance token. We use many standard HTTP features, like HTTP verbs, understood by most HTTP clients. JSON is returned in all responses from the API, including errors. The APIs have predictable, straightforward URLs and use HTTP response codes to indicate API errors.

## Authenticating with Cloud Elements

To authenticate with Cloud Elements, you need to know your Organization Secret and User Secret. When making some calls, you also need to know the Element Instance token.

When you create an account with us, we assign you an Organization Secret and a User Secret. An Organization is a customer of Cloud Elements (`/organizations`). The User and Organization secrets represent your account with Cloud Elements.

To find your Organization and User Secret:

| Latest UI | Earlier UI  |
| :------------- | :------------- |
| Open the profile menu.</br> ![Search](../img/Org-User-Secret-C2.png)  | Click __Secrets__ in the header.</br> ![Search](../img/Org-User-Secret.png)  |

When you create a new connection to an endpoint, you will receive an Element Instance token. After you create an instance, Cloud Elements automatically refreshes the token behind the scenes so that you won't need to connect your application again.

To find your Element instance token:

        GET /instances/<INSTANCE_ID>

An Element Instance token and a User secret are required to execute one of our Hub API calls (e.g. `/hubs/documents/files` or `/hubs/crm/contacts`). For more information about Hubs, see the Hub API docs in the navigation area.

Pass tokens and secrets as basic HTTP Header values.

* To make a Platform or API call, include the following in the header:

        Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_USER_SECRET>

* To make a Hub API call, include the following in the header:

        User <INSERT_USER_SECRET>, Element <INSERT_ELEMENT_INSTANCE_TOKEN>

{% include error-codes.md %}

Get started by [setting up the API provider](setup.html).
