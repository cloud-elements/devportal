---
heading: Shopify
seo: Query Language | Shopify | Cloud Elements API Docs
title: Querying
description: Make database queries using Cloud Elements Query Language.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 48
parent: Back to Element Guides
order: 45
sitemap: false
---

# Cloud Elements Query Language

The Cloud Elements Query Language (CEQL) is a query language used by Cloud Elements to standardize searching across all of our different elements. Many APIs support some form of searching in their APIs but they’re almost all different, so we have standardized a common way to search across all of our elements. Cloud Elements translates the CEQL to the endpoint’s searching syntax, however at times, CEQL supports more than the endpoint.

## CEQL in {{page.heading}}

When querying in {{page.heading}}, keep the following in mind:

* You can search by a different set of fields for each resource. You can find more details about which fields you can search by on [Shopify's API resource specific documentation](https://help.shopify.com/api/reference). For example, you can search the following fields in `/orders`:
  * financial_status
  * fulfillment_status
  * name
  * created_since
  * created_at_max
  * updated_at_min
  * updated_at_max
  * status
* To query by date for most resources you need to use where = `created_at_min='2017-06-01T07:12:57-04:00'` instead of just querying using the created_at field name.
* Querying using AND is supported, but OR is not.
* Use CEQL to query the following endpoints:
  * GET /products
  * GET /orders
  * GET /orders/{orderId}/fulfillments
  * GET /orders/{orderId}/fulfillments-count
  * GET /orders/{orderId}/payments
  * GET /orders/{orderId}/refunds
  * GET /query
  * GET /collects
  * GET /{objectName}
  * GET /{objectName}/{objectId}/{childObjectName}
  * GET /smart-collections
  * GET /price-rules
  * POST /bulk/query
  * GET /customers
  * GET /custom-collections
  * GET /custom-collections-count
  * GET /metafields


  {% include ceql-ref.md%}
