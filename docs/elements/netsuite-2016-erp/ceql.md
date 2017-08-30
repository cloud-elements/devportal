---
heading: NetSuite 2016 ERP
seo: Query Language | NetSuite 2016 ERP | Cloud Elements API Docs
title: Querying
description: Make database queries using Cloud Elements Query Language.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 987
parent: Back to Element Guides
order: 45
sitemap: false
---

# Cloud Elements Query Language

The Cloud Elements Query Language (CEQL) is a query language used by Cloud Elements to standardize searching across all of our different elements. Many APIs support some form of searching in their APIs but they’re almost all different, so we have standardized a common way to search across all of our elements. Cloud Elements translates the CEQL to the endpoint’s searching syntax, however at times, CEQL supports more than the endpoint.

## CEQL in {{page.heading}}

Use CEQL to query the following endpoints:

* GET /accounts
* GET /bills
* POST /bulk/query
* GET /cases
* GET /cases/{id}/messages
* GET /contacts
* GET /credit-terms
* GET /custom-fields
* GET /customers
* GET /employees
* GET /estimates
* GET /invoices
* GET /journal-entries
* GET /leads
* GET /ledger-accounts
* GET /opportunities
* GET /payment-methods
* GET /payments
* GET /products
* GET /projects
* GET /prospects
* GET /purchase-orders
* GET /tax-codes
* GET /tax-rates
* GET /time-activities
* GET /transaction-summaries
* GET /vendor-payments
* GET /vendors

{% include ceql-ref.md%}
