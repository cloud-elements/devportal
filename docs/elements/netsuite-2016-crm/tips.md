---
heading: NetSuite 2016 CRM
seo: Tips | NetSuite 2016 CRM | Cloud Elements API Docs
title: Tips
description: NetSuite 2016 CRM API Documentation.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 1687
parent: Back to Element Guides
order: 75
---

# Tips

The Tips section includes more information about the element including FAQs, endpoint limitations, and general tips.

## Custom Fields

Because we normalize Netsuite's SOAP API to a RESTful API at Cloud Elements, some known limitations around custom fields are unavoidable. We've added some APIs to help you work around the custom field limitations.

Whenever you need to access a custom field, you will need to know the `internalId`. We provide the following API call to get information about all custom objects, including `internalId`.

    GET /custom-fields

__Note__: `GET /objects` will not return any custom objects.

The response for `GET /custom-fields` looks like this. Note the `internalId` at the top:

```json
[
  {
    "internalId": "3793",
    "scriptId": "custentity_wc_picture",
    "name": "WC Picture",
    "subtab": {
      "internalId": "265",
      "name": "Asset Info"
    },
    "type": {
      "value": "entityCustomField"
    },
    "fieldType": "_image"
  },
  {
    "internalId": "3794",
    "scriptId": "custentity_wc_related_asset",
    "name": "Related Asset",
    "subtab": {
      "internalId": "265",
      "name": "Asset Info"
    },
    "type": {
      "value": "entityCustomField"
    },
    "fieldType": "_listRecord"
  }
]
```

## Picklists

When working with picklists, you also need to refer to them by `internalId`. We've provide the following API call to get information about picklists, including `internalId`.

    GET /lookups/fieldname

See the [API docs](api-documentation.html) for more.

Include the field name of a picklist to get a response like this:

```json
[
  {
    "internalId": "1",
    "name": "USA"
  },
  {
    "internalId": "2",
    "name": "British pound"
  },
  {
    "internalId": "3",
    "name": "Canadian dollar"
  },
  {
    "internalId": "4",
    "name": "Euro"
  }
]
```


## Querying Custom Fields

{% include netsuite/searchtip.md %}
