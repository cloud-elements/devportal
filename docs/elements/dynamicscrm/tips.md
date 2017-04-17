---
heading: Microsoft Dynamics CRM
seo: Tips | Microsoft Dynamics CRM | Cloud Elements API Docs
title: Tips
description: Frequently asked questions and notes on conventions.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 21
parent: Back to Element Guides
order: 50
---

## Tips

### Objects

Although not all entities are documented in the [API docs](api-documentation.html), all entities are available. To get a list of entities call:

```bash
GET /objects
```
Use the list to make calls to any of the entities, for example:

```bash
GET /contract
GET /customeraddress
GET /account
GET /sharepointdocumentlocation
```

### Searching

You can search on almost any attribute. However, we recommend that you keep your searches as simple as possible. Cloud Elements normalizes the proprietary FetchXML queries used by MS Dynamics, simplifying their verbose query language.

### Metadata

MS Dynamics provides rich metadata. Make sure that you call `GET /objects/{objectName}/metadata` and review the metadata.

### On Premise Authentication

For on-premise authentication, we support Federated, but not Active Directory.
