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

# Tips

The Tips section includes more information about the element including FAQs, endpoint limitations, and general tips.

{% include callout.html content="<strong>On this page</strong></br><a href=#objects>Objects</a></br><a href=#custom-objects>Custom Objects</a></br><a href=#searching>Searching</a></br><a href=#metadata>Metadata</a></br><a href=#on-premise-authentication>On Premise Authentication</a>" type="info" %}

## Objects

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

Not seeing a custom object? See below.

## Custom Objects

When you make a `GET /objects` request Microsoft Dynamics does not include custom objects in the response. You can include custom objects by adding the query parameter `?getall=true`. In the API Docs, change the **getall** field to true.

### Example http Request

```bash
https://api.cloud-elements.com/elements/api-v2/hubs/crm/objects?getall=true
```

### Example API Docs
![getall Example](img/getall.png)

## Searching

You can search on almost any attribute. However, we recommend that you keep your searches as simple as possible. Cloud Elements normalizes the proprietary FetchXML queries used by MS Dynamics, simplifying their verbose query language.

## Metadata

MS Dynamics provides rich metadata. Make sure that you call `GET /objects/{objectName}/metadata` and review the metadata.

## On Premise Authentication

For on-premise authentication, we support Federated, but not Active Directory.
