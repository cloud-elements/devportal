---
heading: QuickBooks Online
seo: Query Language | QuickBooks Online | Cloud Elements API Docs
title: Querying
description: Make database queries using Cloud Elements Query Language.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 39
parent: Back to Element Guides
order: 45
sitemap: false
---

# Cloud Elements Query Language

The Cloud Elements Query Language (CEQL) is a query language used by Cloud Elements to standardize searching across all of our different elements. Many APIs support some form of searching in their APIs but they’re almost all different, so we have standardized a common way to search across all of our elements. Cloud Elements translates the CEQL to the endpoint’s searching syntax, however at times, CEQL supports more than the endpoint.

## CEQL in {{page.heading}}

When querying in {{page.heading}}, keep the following in mind:

* Wild card character searching is supported with the `LIKE` operator. You can use `%` as a wild card to represent one or more characters. For example for GET /products you can search using a where clause like `name LIKE '%product'` to search for products with names ending in `product`.
* Using `OR` is not supported.
* Most fields are searchable, but not all. If you attempt to search using a field that is not supported, you will get an error like: `Invalid query - QueryValidationError: property 'Taxable' is not queryable`.
* Use CEQL to query the following endpoints:
  * GET /departments
  * GET /produces
  * GET /tax-codes
  * GET /credit-memos
  * GET /employees
  * GET /classes
  * GET /invoices
  * GET /{objectName}
  * GET /{objectName}/{objectId}/{childObjectName}
  * GET /ledger-accounts
  * GET /vendors
  * GET /payment-methods
  * GET /bills
  * GET /time-activities
  * GET /payments
  * GET /refund-receipts
  * GET /purchase-orders
  * GET /tax-rates
  * POST /bulk/query
  * GET /purchases
  * GET /credit-terms
  * GET /bill-payments
  * GET /customers
  * GET /vendor-credits
  * GET /journal-entries
  * GET /sales-receipts
  * GET /reports/{reportId}


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

CEQL, or at least parts of CEQL, can be used in most of our find or search related APIs. You can add CEQL as query parameters to API calls (for example, `GET products?where=name=’Foo Product’`) or directly in our API Documentation as shown below.

![Cloud Elements Query Language CEQL](/assets/img/ceql-description.png)

### Examples

* Select from `products` where the `name` equals a specific value:
  * __API Docs:__ where name=’Foo Product’
  * __Request URL:__ https://console.cloud-elements.com:443/elements/api-v2/hubs/finance/products?where=name=’Foo Product’
  * __Encoded:__ https://console.cloud-elements.com:443/elements/api-v2/hubs/finance/products?where=name%3D%E2%80%99Foo%20Product%E2%80%99
* Select from `products` where the `name` equals a specific value and the type equals a specific value:
  * __API Docs:__ where name=’Foo Product’ AND type=’SERVICE’
  * __Request URL:__ https://console.cloud-elements.com:443/elements/api-v2/hubs/finance/products?where=name=’Foo Product’ AND type=’SERVICE’
  * __Encoded:__ https://console.cloud-elements.com:443/elements/api-v2/hubs/finance/products?where=name%3D’Foo%20Product’%20AND%20type%3D’SERVICE’
* Select from products where the name is like a specific value:
  * __API Docs:__ where name LIKE ‘%Foo%’
  * __Request URL:__ https://console.cloud-elements.com:443/elements/api-v2/hubs/finance/products?where=name LIKE ‘%Foo%’
  * __Encoded:__ https://console.cloud-elements.com:443/elements/api-v2/hubs/finance/products?where=name%20LIKE%20’%25Foo%25′
* Select from products where the createTime is greater than a specific value:
  * __API Docs:__ where metaData.createTime>'2017-01-14T00:36:24Z'
  * __Request URL:__ https://console.cloud-elements.com:443/elements/api-v2/hubs/finance/products?where=metaData.createTime > '2017-01-14T00:36:24Z'
  * __Encoded:__ https://console.cloud-elements.com:443/elements/api-v2/hubs/finance/products?where=metaData.createTime+%3E+%272017-01-14T00:36:24Z%27

### CEQL Limitations

* CEQL does not support sub­queries
