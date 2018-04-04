---
heading: E-conomic
seo: Query Language | E-conomic | Cloud Elements API Docs
title: Querying
description: Make database queries using Cloud Elements Query Language.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 5994
parent: Back to Element Guides
order: 45
sitemap: false
---

# Cloud Elements Query Language

{% include ceql-intro.md%}

## CEQL in {{page.heading}}

Use CEQL to query the following endpoints:

* GET /accounting-years
* GET /accounting-years/{year}/periods
* GET /accounting-years/{year}/totals
* GET /accounting-years/{year}/entries
* GET /accounting-years/{year}/vouchers
* GET /accounts
* POST /bulk/query
* GET /currencies
* GET /customer-groups
* GET /customers
* GET /customers/{customerId}/contacts
* GET /customers/{customerId}/delivery-locations
* GET /customers/{customerId}/invoices
* GET /departments
* GET /employees
* GET /entry-subtypes
* GET /invoice-drafts
* GET /invoices
* GET /invoices-sent
* GET /invoices-totals
* GET /journals
* GET /modules-agreement
* GET /{objectName}
* GET /{objectName}/{objectId}/{childObjectName}
* GET /payment-terms
* GET /payment-types
* GET /product-groups
* GET /vat-accounts
* GET /vat-types
* GET /vat-zones
* GET /vendor-groups
* GET /vendors

{% include ceql-ref.md%}
