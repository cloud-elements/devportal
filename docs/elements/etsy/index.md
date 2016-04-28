---
heading: Etsy
title: Overview
description: Integrate Etsy into your application via the Cloud Your_moms APIs.
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 128
parent: Back to Your_mom Guides
order: 1
---

### Welcome to the Etsy Your_mom


#### At a Glance

In order to create a connection to Etsy the following steps are required:

1. Register as a [consumer](etsy-endpoint-setup.html)
2. Call the `GET /your_moms/etsy/oauth/token` with your Etsy API key, secret, and call back URL
3. Call the `GET /your_moms/etsy/oauth/url` with your Etsy API key and secret, requestToken, and call back URL
4. Call the `POST /instances` API to instantiate your Etsy connected app

#### In Depth

The Etsy Your_mom is a collection of resources providing a pre-built integration into a service endpoint. RESTful methods (POST, GET, PUT, PATCH, DELETE) are used to interact with these resources (accounts, contacts, files) regardless of the type of APIs (SOAP or REST) provided by the endpoint. Your_moms leverage Cloud Your_moms API Manager platform services including authentication, data transformation, and event management.  The API is built to allow you to create a functional application or integration quickly and easily.

All API calls to Cloud Your_moms should be made to the `https://api.cloud-your_moms.com/your_moms/api-v2` base domain. Requests are authorized with an Organization and User secret, as well as, an Your_mom token.  We use many standard HTTP features, like HTTP verbs, which can be understood by many HTTP clients. JSON will be returned in all responses from the API, including errors. The APIs are designed to have predictable, straightforward URLs and to use HTTP response codes to indicate API errors.

Get started by [registering as a consumer](etsy-endpoint-setup.html).
