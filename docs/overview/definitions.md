---
heading: Cloud Elements Definitions
seo: Cloud Elements Definitions | Cloud Elements API Docs
title: Definitions
description: Overview of common terms within the Cloud Elements Platform.
layout: sidebarleft
order: 2
published: true
sitemap: false
---

## Element

An Element is a pre-built API integration that enables a connection into a specific cloud application endpoint
(e.g., Salesforce, Quickbooks, or Marketo). All Elements start with a normalized set of features, including authentication,
resources, paging, errors, events and search. At the Element level, we also seek to support the richer set
of APIs that an application provides, even when not all of the Elements in that category share that resource.

* Elements share common services including discovery, search query, pagination, bulk uploading and downloading, logging and interactive documentation.
* Methods are normalized and accessible through RESTful APIs
* Complete data payloads are returned in JSON and available to transform and normalize via the Cloud Elements API Manager Transformation Services.
* Cloud Elements keeps each Element up to date with changes at the endpoint.
* Each Elements is a “Multi-tenant” connector supporting an unlimited number of authenticated accounts with no additional code required.

## API Hub

Hubs map resources from a collection of endpoints (What we call Elements) into a uniform set of APIs. With Hubs you can integrate an entire category of services (e.g., CRM, Documents, Finance) through a single set of APIs.

We normalize our API calls for all endpoints, to enable calls between services e.g. Salesforce to HubSpot. However, with this feature, certain endpoint resources cannot be mapped for each hub.

* Hubs provide uniform APIs to access any collection of Elements or a set of resources.
* Hubs enable “One-to-Many” access to an entire category of services.
* Hubs are accessed using a consistent RESTful API with a JSON payload regardless of the technology used at the endpoint.
* Hubs rapidly translate calls into the semantic and data structure required by each endpoint.
* Hubs provide a uniform set of interactive API documentation that developers use to access the resources in the Hub.
* Combine resources from multiple categories providing a consistent set of APIs and documentation to access any collection of resources (e.g., combine Salesforce, Box, and QuickBooks API resources into a Hub).

We’ve categorized the leading cloud applications into Hubs (e.g. CRM, Documents, and Messaging). You integrate to a Cloud Elements “Hub” via a single RESTful API and your app is instantly connected to all the leading services in that category, no need to do custom and costly integration to each service.

## Element Instance

An Element Instance is an Element that is authenticated to a specific user account for the application service. An
instance can access all of the objects, fields and data for that account - including custom data. An instance is created
when a user successfully connects to the endpoint by providing an instance name, the required authentication credentials
for that Element, and optionally add configuration for events. An Element Instance represents a connection
to a single authenticated account at the target endpoint such as a Salesforce, Marketo, or Netsuite.

## Transformation

Cloud Element supports mapping and transforming data between your application and any of the cloud services you're leveraging through our Element Mapper. Element Mapper is an API and Data Mapping Application to map and transform data across different Elements. This allows you to define how you want your resource to look and then go about mapping and transforming that resource for each Element, as needed.

## Formula

Cloud Elements supports customizable workflows, called Formulas. Formulas are user-defined workflows that have a trigger (incoming event, API request, timer, etc.) that, when triggered, will begin executing a series of steps. These steps can go about accomplishing a large variety of different use cases across different services. Some ways our customers are using them now include keeping their systems in sync, migrating data between systems, automating business workflows, and many more.


The Transformation APIs allow you to:

* manage custom object and custom data fields
* map custom data fields to and from the format that your application uses and expects
* programmatically persist and maintain transformations for each of your client’s CRM, Marketing, and Help Desk services

## Bulk API and CEQL

__Cloud Element Bulk API__ calls provide an option to upload a large number of resources, such as contacts, into a Cloud Service all at once.

The Bulk APIs require the name of the object identified within the cloud service and a `.csv` file with populated data included in each request.

Cloud Elements provides discovery services to get a list of available objects.

__The Cloud Elements Query Language (CEQL)__ is a query language used by Cloud Elements to standardize searching across all of our different elements. Many APIs support some form of searching in their APIs but they’re almost all different, so we have standardized a common way to search across all of our elements. Cloud Elements translates the CEQL to the endpoint’s searching syntax, however at times, CEQL supports more than the endpoint.

## Discovery Service

Cloud Elements includes a comprehensive data discovery service that provides **normalized metadata**, such as the list of  field names and types. Additional information, if available from an endpoint, may also be obtained such as: display name, read-only, etc. If an endpoint doesn’t provide discovery service APIs, Cloud Elements will still provide a minimum set of metadata about the given resource (e.g., name and type). Cloud Elements also allows you to discover **custom fields** (as long as the values are not empty), by supplying an object Id when a native discovery service is not available. The Discovery Service is used along with the Transformation Service to normalize the responses across endpoints.

## OAuth Proxy

The __OAuth Proxy__ feature gives you the capability to have multiple environments, such as development, QA, etc, with one endpoint application. For example some vendors only allow one callback URL per application. The proxy will allow for the same callback URL to be used with multiple application endpoints. You would then use the proxy address as the Callback URL instead of your own Callback URL. This permits multiple endpoint applications to one callback URL.

We offer two forms of the proxy.
Standard OAuth Proxy Configuration: requires an API key and secret to be passed as URL parameters or in the JSON payload needed to create an instance.
OAuth Proxy with API Key and Secret Management: option to input your API key and secret during the proxy creation and we will take care of the rest during instance creation.
