---
heading: Zendesk
seo: Query Language | Zendesk | Cloud Elements API Docs
title: Querying
description: Make database queries using Cloud Elements Query Language.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 41
parent: Back to Element Guides
order: 45
sitemap: false
---

# Cloud Elements Query Language

The Cloud Elements Query Language (CEQL) is a query language used by Cloud Elements to standardize searching across all of our different elements. Many APIs support some form of searching in their APIs but they’re almost all different, so we have standardized a common way to search across all of our elements. Cloud Elements translates the CEQL to the endpoint’s searching syntax, however at times, CEQL supports more than the endpoint.

## CEQL in {{page.heading}}

Use CEQL to query the following endpoints:

* GET /slaPolicies
* GET /brands
* GET /resources/categories
* GET /resources/sections
* GET /users
* GET /agents
* GET /priorities
* GET /incidents
* GET /incidents/{incidentId}/comments
* GET /incidents/{incidentId}/history
* GET /incidents/{incidentId}/{objectName}
* GET /organizations
* GET /statuses
* GET /{objectName}
* GET /{objectName}/{objectId}/{childObjectName}
* POST /bulk/query
* GET /fields
* GET /contacts

{% include ceql-ref.md%}
