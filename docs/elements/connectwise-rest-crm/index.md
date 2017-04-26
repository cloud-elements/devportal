---
heading: ConnectWise REST BETA
seo: Overview | ConnectWise REST | Cloud Elements API Docs
title: Overview
description: Integrate ConnectWise REST into your application via the Cloud Elements APIs.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 3012
parent: Back to Element Guides
order: 1
sitemap: false
---

# Welcome to the ConnectWise REST Element

{{page.heading}} is an element available in the CRM hub .

This Overview section describes basic element details, the Base URL for API calls, and information about authenticating with Cloud Elements.

__On this page__

[Element details](#element-details)

[Base URL](#base-url)

[Authenticating with Cloud Elements](#authenticating-with-cloud-elements)

### Element Details

| Element Information | Details     |
| :------------- | :------------- |
| Transformations       | Supported    |
| Events | Not supported|
| Bulk | Supported |
| API Documentation | [ConnectWise API documentation](https://developer.connectwise.com/Documentation) </br> __Note__: You must log in to access the ConnectWise API documentation.|
| Authentication | Basic authentication with Public Key and Private Key. |

### Base URL

The Cloud Element Base URL for all API calls is `https://api.cloud-elements.com/elements/api-v2`.

HTTP requests to the REST API are protected with HTTP Basic authentication with your Organization and User secret and an Element token. We use many standard HTTP features, like HTTP verbs, understood by most HTTP clients. JSON is returned in all responses from the API, including errors. The APIs have predictable, straightforward URLs and use HTTP response codes to indicate API errors.

### Authenticating with Cloud Elements

To authenticate with Cloud Elements, you need to know your Organization Secret and User Secret. When making some calls, you also need to know the Element Token.

When you create an account with us, we assign you an Organization Secret and a User Secret. An Organization is a customer of Cloud Elements (`/organizations`). The User and Organization secrets represent your account with Cloud Elements.

To find your Organization and User Secret, open the profile menu.
![Secrets](../img/Org-User-Secret-C2.png)

When you create a new connection to an endpoint, you will receive an Element token. After you create an instance, Cloud Elements automatically refreshes the token behind the scenes so that you won't need to connect your application again.

To find your Element token:

        GET /instances/<INSTANCE_ID>

An Element token and a User secret are required to execute one of our Hub API calls (e.g. `/hubs/documents/files` or `/hubs/crm/contacts`). For more information about Hubs, see [Hub API Docs](../../hubs/hub-docs)

Pass tokens and secrets as basic HTTP Header values.

* To make a Platform or API call, include the following in the header:

        Authorization: User 7OpR4MRo7wnPoVKkKFXHhHBUPRzqutoem/d+WEnR1kY=, Organization ce7f1f9be0d2a8b1f37bcfa6d71eda20

* To make a Hub API call, include the following in the header:

        User 7OpR4MRq7wnpnVKkKFXhhHbUPRzQutoem/d+WEnR1kY=, Element fJ5HQ135fW4okMt5AWq0hzm2X7kaK5OpQB0Uxjvlz6U=

Get started by [setting up the endpoint](connectwise-rest-endpoint-setup.html).
