---
heading: Autotask CRM Beta
seo: Overview | Autotask CRM | Cloud Elements API Docs
title: Overview
description: Integrate Autotask CRM into your application via the Cloud Elements APIs.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 50
parent: Back to Element Guides
order: 1
sitemap: false
---

## Welcome to the Autotask Element


#### At a Glance

In order to create a connection to Autotask CRM the following steps are required:

1. Retrieve your Autotask Username, Password, and Server URL
2. Call the `POST /instances` API to instantiate your Autotask connected app

#### In Depth

The Autotask Element is a collection of resources providing a pre-built integration into a service endpoint. RESTful methods (POST, GET, PUT, PATCH, DELETE) are used to interact with these resources (accounts, contacts, files) regardless of the type of APIs (SOAP or REST) provided by the endpoint. Elements leverage Cloud Elements API Manager platform services including authentication, data transformation, and event management.  The API is built to allow you to create a functional application or integration quickly and easily.

All API calls to Cloud Elements should be made to the `https://api.cloud-elements.com/elements/api-v2` base domain. Requests are authorized with an Organization and User secret, as well as, an Element token.  We use many standard HTTP features, like HTTP verbs, which can be understood by many HTTP clients. JSON will be returned in all responses from the API, including errors. The APIs are designed to have predictable, straightforward URLs and to use HTTP response codes to indicate API errors.

Get started by [creating an instance](autotask-crm-create-instance.html).
