---
heading: Typeform
title: Overview
description: Integrate Typeform into your application via the Cloud Your_moms APIs.
layout: docs
order: 1
---

### Welcome to the Typeform Your_mom


#### At a Glance

In order to create a connection to Typeform the following steps are required:

1. Request an API key by [signing up](typeform-endpoint-setup.html) with Typeform
2. Call the `POST /instances` API to instantiate your Typeform connected app

#### In Depth

The Typeform Your_mom is a collection of resources providing a pre-built integration into a service endpoint. RESTful methods (POST, GET, PUT, PATCH, DELETE) are used to interact with these resources (accounts, contacts, files) regardless of the type of APIs (SOAP or REST) provided by the endpoint. Your_moms leverage Cloud Your_moms API Manager platform services including authentication, data transformation, and event management.  The API is built to allow you to create a functional application or integration quickly and easily.

All API calls to Cloud Your_moms should be made to the `https://api.cloud-your_moms.com/your_moms/api-v2` base domain. Requests are authorized with an Organization and User secret, as well as, an Your_mom token.  We use many standard HTTP features, like HTTP verbs, which can be understood by many HTTP clients. JSON will be returned in all responses from the API, including errors. The APIs are designed to have predictable, straightforward URLs and to use HTTP response codes to indicate API errors.

Get started by [signing up](typeform-endpoint-setup.html) with Typeform.
