---
heading: Maximizer
seo: Query Language | Maximizer | Cloud Elements API Docs
title: Querying
description: Make database queries using Cloud Elements Query Language.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 5127
parent: Back to Element Guides
order: 45
sitemap: false
---

# Cloud Elements Query Language

The Cloud Elements Query Language (CEQL) is a query language used by Cloud Elements to standardize searching across all of our different elements. Many APIs support some form of searching in their APIs but they’re almost all different, so we have standardized a common way to search across all of our elements. Cloud Elements translates the CEQL to the endpoint’s searching syntax, however at times, CEQL supports more than the endpoint.

## CEQL in {{page.heading}}

Use CEQL to query the following endpoints:

* GET /companies
* GET /addresses
* GET /{objectName}
* GET /{objectName}/{objectId}/{childObjectName}
* GET /custom-records
* POST /bulk/query
* GET /addressbook-entries
* GET /opportunities
* GET /contacts

{% include ceql-ref.md%}
