---
heading: Oracle Eloqua
seo: Query Language | Oracle Eloqua | Cloud Elements API Docs
title: Querying
description: Make database queries using Cloud Elements Query Language.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 27
parent: Back to Element Guides
order: 45
sitemap: false
---

# Cloud Elements Query Language

The Cloud Elements Query Language (CEQL) is a query language used by Cloud Elements to standardize searching across all of our different elements. Many APIs support some form of searching in their APIs but they’re almost all different, so we have standardized a common way to search across all of our elements. Cloud Elements translates the CEQL to the endpoint’s searching syntax, however at times, CEQL supports more than the endpoint.

## CEQL in {{page.heading}}

Use CEQL to query the following endpoints:

* GET /emails
* GET /email-footers
* GET /email-headers
* GET /content-sections
* GET /landing-pages
* GET /campaigns
* GET /lists
* GET /lists/{listId}/contacts
* GET /{objectName}
* GET /{objectName}/{objectId}/{childObjectName}
* POST /bulk/query
* GET /contacts
* GET /contacts/{contactId}/activities
* GET /emails
* GET /emails
* GET /emails

{% include ceql-ref.md%}
