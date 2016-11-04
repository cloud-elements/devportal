---
heading: Microsoft Dynamics CRM
seo: FAQ | Microsoft Dynamics CRM | Cloud Elements API Docs
title: FAQ
description: Frequently asked questions and notes on conventions.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 21
parent: Back to Element Guides
order: 50
published: false
---

## FAQ

How can I create an incident (case) and assign it to a contact in Microsoft Dynamics CRM?

```bash
curl -X POST
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type: application/json'
-d @incident.json
'https://api.cloud-elements.com/elements/api-v2/instances'
```

First call

 'https://console.cloud-elements.com/elements/api-v2/hubs/crm/incident'

Without the "lookup" : "contact" Dynamics will default to associating the incident on an Account ID.
