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


## CEQL Reference

CEQL is composed of the following parts:

* __Object name__
  * The name of the object to search
* __Select fields__
  * The field or fields to return in our result set
* __Sort fields__
  * The field or fields to sort our result set
* __Where expressions__
  * The expression or expressions specifying what to search and what objects to return in our result set
    * This is made up of a left­hand­side (LHS), an operator and a right­hand­side (RHS).
    * The valid CEQL operators are:
      * “AND”
      * “OR”
      * “=”
      * “!=”
      * “<” “>”
      * “<=” “>=”
      * “LIKE”
      * “IN”
      * “IS NULL”
* __Page size (limit)__
  * The maximum number of results to return
* __Page offset (offset)__
  * The offset to begin our results
* __Example: select id,name from account where name=’foo’ order by name asc limit 10 offset 0__
  * Object name: account
  * Select fields: id,name
  * Sort fields: name asc
  * Where expression: name=’foo’
  * Page size: 10
  * Page offset: 0

### Where can it be used?

CEQL, or at least parts of CEQL, can be used in most of our find or search related APIs. You can add CEQL as query parameters to API calls (for example, `GET products?where=title=’Foo Product’`) or directly in our API Documentation as shown below.

![Cloud Elements Query Language CEQL](/assets/img/ceql-description.png)

### Examples

* Select from `products` where the `title` equals a specific value:
  * __API Docs:__ where title=’Foo Title’
  * __Request URL:__ https://console.cloud-elements.com:443/elements/api-v2/hubs/ecommerce/products?where=title=’Foo Title’
  * __Encoded:__ https://console.cloud-elements.com:443/elements/api-v2/hubs/ecommerce/products?where=title%3D%E2%80%99Foo%20Title%E2%80%99
* Select from `products` where the `title` equals a specific value and the vendor equals a specific value:
  * __API Docs:__ where title=’Foo Title’ AND vendor=’Vendor’
  * __Request URL:__ https://console.cloud-elements.com:443/elements/api-v2/hubs/ecommerce/produces?where=title=’Foo Title’ AND vendor=’Vendor’
  * __Encoded:__ https://console.cloud-elements.com:443/elements/api-v2/hubs/ecommerce/products?where=title%3D’Foo%20Title’%20AND%20vendor%3D’Vendor’
* Select from products where the created date is greater than a specific value:
  * __API Docs:__ where = `created_at_min = '2017-06-01T04:56:42-05:00'`
  * __Request URL:__ https://console.cloud-elements.com:443/elements/api-v2/hubs/ecommerce/products?where=created_at_min = '2017-06-01T04:56:42-05:00'
  * __Encoded:__ https://console.cloud-elements.com:443/elements/api-v2/hubs/ecommerce/products?where=created_at_min+%3D+%272017-06-01T04:56:42-05:00%27

### CEQL Limitations

* CEQL does not support sub­queries
