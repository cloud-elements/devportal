---
valeOff: <!-- vale off -->
heading: Cloud Elements Definitions
seo: Cloud Elements Definitions | Cloud Elements API Docs
title: Definitions
description: Overview of common terms within the Cloud Elements Platform.
layout: sidebarleft
order: 2
published: true
sitemap: false
ValeOn: <!-- vale on -->
---

See the entries below for definitions of some common terms that you'll encounter while using Cloud Elements.

{% include callout.html content="<strong>On this page</strong></br><a href=#api-hub>API Hub</a></br><a href=#authenticated-element-instance>Authenticated Element Instance</a></br><a href=#bulk-api>Bulk API</a></br><a href=#ceql>CEQL</a></br><a href=#common-resource>Common Resource</a></br><a href=#discovery-service>Discovery Service</a></br><a href=#element>Element</a></br><a href=#endpoint>Endpoint</a></br><a href=#event>Event</a></br><a href=#formula-instance>Formula Instance</a></br><a href=#formula-template>Formula Template</a></br><a href=#oauth-proxy>OAuth Proxy</a></br><a href=#payload>Payload</a></br><a href=#resource>Resource</a></br><a href=#transformation>Transformation</a>" type="info" %}

## API Hub

{{site.data.glossary.hub-full}}

We normalize our API calls for all endpoints, to enable calls between services e.g., Salesforce to HubSpot. However, with this feature, certain endpoint resources cannot be mapped for each hub.

* Hubs provide uniform APIs to access any collection of elements or a set of resources.
* Hubs enable “One-to-Many” access to an entire category of services.
* Hubs are accessed using a consistent RESTful API with a JSON payload regardless of the technology used at the endpoint.
* Hubs rapidly translate calls into the semantic and data structure required by each endpoint.
* Hubs provide a uniform set of interactive API documentation that developers use to access the resources in the Hub.
* Hubs combine resources from multiple categories providing a consistent set of APIs and documentation to access any collection of resources (e.g., combine Salesforce, Box, and QuickBooks API resources into a Hub).

## Authenticated Element Instance

{{site.data.glossary.element-instance-full}}

## Bulk API

{{site.data.glossary.bulk-full}}

## CEQL

{{site.data.glossary.ceql-full}}

## Common Resource

{{site.data.glossary.common-resource-full}}

## Discovery Service

{{site.data.glossary.discovery-service}}

## Element

{{site.data.glossary.element-full}} For example, Salesforce Sales Cloud has APIs that many other CRM services do not support. You can find these APIs that are specific to just Salesforce in the documentation for that Element

* Elements share common services including discovery, search query, pagination, bulk uploading and downloading, logging, and interactive documentation.
* Methods are normalized and accessible through RESTful APIs.
* Complete data payloads are returned in JSON and available to transform and normalize to a common resource.
* Cloud Elements keeps each element up-to-date with changes at the endpoint.
* Each elements is a multi-tenant connector supporting an unlimited number of authenticated accounts with no additional code required.

## Endpoint

{{site.data.glossary.endpoint-full}}

## Event

{{site.data.glossary.event}}

## Formula Instance

{{site.data.glossary.formula-instance}}

## Formula Template

{{site.data.glossary.formula-template-full}}

## OAuth Proxy

{{site.data.glossary.oauth-proxy}}

## Payload

{{site.data.glossary.payload}}

## Resource

{{site.data.glossary.resource}}

## Transformation

{{site.data.glossary.transformation-full}}
