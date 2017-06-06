---
heading: Marketo
seo: Query Language | Marketo | Cloud Elements API Docs
title: Querying
description: Make database queries using Cloud Elements Query Language.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 85
parent: Back to Element Guides
order: 45
sitemap: false
---

{% include ceql.md %}

### Marketo restrictions

GET /contacts and GET /companies only accept one field on the `where` query parameter, but
must have an expression to query. Valid query parameters for contacts and companies are
`email` and `id`. The expression `where` : `id='123'` would return a contact with the resulting id.  IDs may also
be included as lists, the expression `where` : `id in (123,456)` is a valid query for
contacts with ID "123 or "456".
