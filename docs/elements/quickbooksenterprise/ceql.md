---
heading: QuickBooks Enterprise
seo: Query Language | QuickBooks Enterprise | Cloud Elements API Docs
title: Querying
description: Make database queries using Cloud Elements Query Language.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 195
parent: Back to Element Guides
order: 45
sitemap: false
---

# Cloud Elements Query Language

The Cloud Elements Query Language (CEQL) is a query language used by Cloud Elements to standardize searching across all of our different elements. Many APIs support some form of searching in their APIs but they’re almost all different, so we have standardized a common way to search across all of our elements. Cloud Elements translates the CEQL to the endpoint’s searching syntax, however at times, CEQL supports more than the endpoint.

## CEQL in {{page.heading}}

Use CEQL to query the following endpoints:

* GET /reports &mdash; see [Reports](reports.html) for details.
* GET /credit-memos
* GET /payment-methods
* GET /classes
* GET /ledger-accounts
* GET /payments
* GET /journal-entries
* GET /bill-payment-checks
* GET /bill-payment-cards
* GET /products
* GET /tax-rates
* GET /invoices
* GET /sales-receipts
* GET /vendor-credits
* GET /bills
* GET /customers
* GET /inventory-adjustments
* GET /vendors
* GET /purchase-orders
* GET /sales-orders
* GET /tax-codes
* GET /payroll-wage-items
* GET /credit-terms
* GET /{objectName}
* GET /{objectName}/{objectId}/{childObjectName}
* GET /item-receipts
* GET /employees
* POST /bulk/query
* GET /inventory-sites
* GET /currencies
* GET /time-activities

{% include ceql-ref.md%}
