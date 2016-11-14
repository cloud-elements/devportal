---
heading: ServiceNow OAuth
seo: Overview | ServiceNow OAuth | Cloud Elements API Docs
title: Overview
description: Integrate ServiceNow OAuth into your application via the Cloud Elements APIs.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 566
parent: Back to Element Guides
order: 1
sitemap: false
---

## Welcome to the ServiceNow OAuth Element

The ServiceNow OAuth element, as the name suggests, uses `OAuth 2.0` based authentication.

__Note:__ If you're looking for the ServiceNow element with `Basic` authentication, please visit the [ServiceNow](/docs/elements/servicenow/) documentation.


#### At a Glance

In order to create a connection to ServiceNow OAuth the following steps are required:

1. Retrieve your ServiceNow OAuth Username, Password, Client ID, Client Secret, and Subdomain URL when you register your connected app
2. Use the OAuth authentication flow as shown [here](/docs/getstarted/authentication.html) to complete the authentication and then,
3. Call the `POST /instances` API to instantiate your ServiceNow OAuth connected app

#### In Depth

The ServiceNow OAuth Element is a collection of resources providing a pre-built integration into a service endpoint. RESTful methods (POST, GET, PUT, PATCH, DELETE) are used to interact with these resources (accounts, contacts, files) regardless of the type of APIs (SOAP or REST) provided by the endpoint. Elements leverage Cloud Elements API Manager platform services including authentication, data transformation, and event management.  The API is built to allow you to create a functional application or integration quickly and easily.

All API calls to Cloud Elements should be made to the `https://api.cloud-elements.com/elements/api-v2` base domain. Requests are authorized with an Organization and User secret, as well as, an Element token.  We use many standard HTTP features, like HTTP verbs, which can be understood by many HTTP clients. JSON will be returned in all responses from the API, including errors. The APIs are designed to have predictable, straightforward URLs and to use HTTP response codes to indicate API errors.

Get started by [setting up the endpoint](servicenow-oauth-endpoint-setup.html).
