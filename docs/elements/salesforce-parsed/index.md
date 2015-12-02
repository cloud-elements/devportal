---
section: Salesforce
title: Overview
description: Integrate Salesforce into your application via the Cloud Elements APIs.
layout: docs
---

### Welcome to the Salesforce API

The Salesforce Element is a collection of resources providing a pre-built integration into a service endpoint. RESTful methods (POST, GET, PUT, PATCH, DELETE) are used to interact with these resources (accounts, contacts, files) regardless of the type of APIs (SOAP or REST) provided by the endpoint. Elements leverage Cloud Elements API Manager platform services including authentication, data transformation, and event management.  The API is built to allow you to create a functional application or integration quickly and easily.

All API calls to Cloud Elements should be made to the `https://api.cloud-elements.com/elements/api-v2` base domain. We use many standard HTTP features, like HTTP verbs, which can be understood by many HTTP clients. JSON will be returned in all responses from the API, including errors. The APIs are designed to have predictable, straightforward URLs and to use HTTP response codes to indicate API errors.



<!-- {% include transformations.md %}

{% include bulkloader.md hub="crm" %}

{% include ceql.md %}

{% include error-codes.md %} -->
