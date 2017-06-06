---
heading: Shopify
seo: Tips | Shopify | Cloud Elements API Docs
title: Tips
description: Element Tips
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 48
parent: Back to Element Guides
order: 5
---

# Tips

The Tips section includes more information about the element including FAQs, endpoint limitations, and general tips.

{% include callout.html content="<strong>On this page</strong><br/><a href=#transformation>Transformation</a>" type="info" %}

## Transformation

If a field is used for querying (ie. 'customer_id', 'product_id', 'collection_id'), the field will not be able to be mapped on that transformation. If the reserved field name is needed for the transformation, then custom JS will be needed to alter the field name after the response has been returned.  
