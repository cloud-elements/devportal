---
heading: Zendesk
seo: Tips | Zendesk | Cloud Elements API Docs
title: Tips
description: Integrate Zendesk into your application via the Cloud Elements APIs.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 41
parent: Back to Element Guides
order: 1
---

# Tips

The Tips section includes more information about the element including FAQs, endpoint limitations, and general tips.

{% include callout.html content="<strong>On this page</strong><br/><a href=#general>General</a>" type="info" %}

## General

* Side loading functionality is available for Zendesk `/incidents`, `/users`, `/groups`, `/agents` and `/incident/{id}/comments`. To utilize this functionality, send a where parameter of include = 'users,groups'.
* Zendesk CEQL does not support the "OR" operator
