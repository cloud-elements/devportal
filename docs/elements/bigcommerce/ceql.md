---
heading: BigCommerce
seo: Query Language | BigCommerce | Cloud Elements API Docs
title: Querying
description: Make database queries using Cloud Elements Query Language.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 274
parent: Back to Element Guides
order: 45
sitemap: false
---

# Cloud Elements Query Language

The Cloud Elements Query Language (CEQL) is a query language used by Cloud Elements to standardize searching across all of our different elements. Many APIs support some form of searching in their APIs but they’re almost all different, so we have standardized a common way to search across all of our elements. Cloud Elements translates the CEQL to the endpoint’s searching syntax, however at times, CEQL supports more than the endpoint.

## CEQL in {{page.heading}}

Use CEQL to query the following endpoints:

* GET /products
* GET /products/brands
* GET /products/categories
* GET /products/options
* GET /products/{id}/skus
* POST /bulk/query
* GET /customers
* GET /customers/groups
* GET /orders
* GET /orders/{id}/comments
* GET /{objectName}
* GET /{objectName}/{objectId}/{childObjectName}

{% include ceql-ref.md%}
