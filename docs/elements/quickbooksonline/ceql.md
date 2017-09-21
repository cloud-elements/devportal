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


  {% include ceql-ref.md%}
