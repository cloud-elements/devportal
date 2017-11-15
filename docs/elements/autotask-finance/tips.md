---
heading: Autotask Finance
seo: Tips | Autotask Finance | Cloud Elements API Docs
title: Tips
description: Autotask Finance Tips
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 4895
parent: Back to Element Guides
order: 75
---

# Tips

The Tips section includes more information about the element including FAQs, endpoint limitations, and general tips.

## API limitations

For the `PATCH /invoices/{id}` request, you can updated only the `InvoiceNumber`, `PaidDate`, and `webServiceDate` fields. For the `PATCH /items/{id}` request you can update only the `webServiceDate` field. All other fields in the `Invoice` and `BillingItem` objects are read-only. See the Autotask API documentation for more details about the fields available in the Autotask objects.
