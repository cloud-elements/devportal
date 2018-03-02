{% include callout.html content="<strong>On this page</strong></br><a href=#working-with-objects>Working With Objects</a></br><a href=#retrieve-custom-fields-and-records>Retrieving Custom Fields and Records</a></br><a href=#retrieving-custom-fields>Retrieving Custom Fields and Records</a></br><a href=#retrieve-custom-records-and-associated-custom-fields>Retrieve Custom Records and Associated Custom Fields</a></br><a href=#retrieve-list-items>Retrieve List Items</a></br><a href=#search-custom-fields>Search Custom Fields</a></br><a href=#update-custom-fields>Update Custom Fields</a></br><a href=#limitations>Limitations</a></br><a href=#netsuite-finance>Netsuite Finance</a>" type="info" %}

## Working With Objects

When creating or updating entities, you must reference external objects by `internalId`. This includes any reference to a subsidiary, location, or department. Likewise ,when you search based on these fields you must use the `internalId`.

* `GET /customers?where=subsidiary=4`

SOAP APIs, like NetSuite, explicitly define every field. Therefore, custom fields are stored in arrays. If you need to support custom fields in NetSuite there are some additional steps.

## Retrieve Custom Fields and Records

Because we normalize Netsuite's SOAP API to a RESTful API at Cloud Elements, you need to use specific API calls to get information about custom fields, custom records, custom fields associated with custom records, and custom list items. All references to custom fields and records require the `internalId`, which you can find using the following endpoints:

* `GET /custom-fields` to [retrieve custom fields](#retrieving-custom-fields).
* `GET /custom-record-types` to [retrieve custom records](#retrieve-custom-records-and-associated-custom-fields).
* `GET /custom-record-types/{typeId}/custom-record-fields` to get the custom fields in custom records using the `internalId` from `GET /custom-record-types`.
* `GET /custom-record-types/{typeId}/custom-records` to get information in the custom fields using the `internalId` from `GET /custom-record-types`.
* `GET /lookups/{fieldName}` to [retrieve custom list items](#retrieve-list-items).

See the [API docs](api-documentation.html) for more information about these endpoints.

## Retrieving Custom Fields
Use `GET /custom-fields` to retrieve a list of all custom fields.

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

## Retrieve Custom Records and Associated Custom Fields
Custom records can contain custom fields. We provide the following endpoints to help retrieve a list of custom records and the fields in those records.

* `GET /custom-record-types`
* `GET /custom-record-types/{typeId}/custom-record-fields`
* `GET /custom-record-types/{typeId}/custom-records`

The response for `GET /custom-record-types` looks like this. Note the `internalId` at the top which you can use as `typeId`:

```json
[
   {
    "internalId": "67",
    "scriptId": "customrecord_assetlifetimes",
    "name": "FAM - Lifetimes",
    "type": {
      "value": "customRecordType"
    }
  },
  {
    "internalId": "74",
    "scriptId": "customrecord_ncfar_assetusage",
    "name": "FAM - Asset Usage",
    "type": {
      "value": "customRecordType"
    }
  },
  {
    "internalId": "279",
    "scriptId": "customrecord_pf_kb_sol_fb",
    "name": "KB Solution Feedback",
    "type": {
      "value": "customRecordType"
    }
  },
  {
    "internalId": "452",
    "scriptId": "customrecord_suitesocial_record",
    "name": "SuiteSocial Record",
    "type": {
      "value": "customRecordType"
    }
  }
]
```

## Retrieve List Items

You can access the `internalId` of list items with `GET /lookups/{fieldname}`, replacing {fieldname} with the name of a picklist.

The response for `GET /lookups/currency` looks like this:

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

## Search Custom Fields

Cloud Elements supports searching on the following types of custom objects:

  * boolean
  * long
  * string
  * multiselect
  * enums

__Note:__ You can search on only one custom field at a time.

To search on custom fields, add `custom.<type>` to the field reference and value in your `where` clause. Also, use the backtick ( ` ) symbol to enclose the field reference. For example:

 * To search on a custom boolean field:

```bash
`custom.boolean.scriptId` = 'custentity_2663_direct_debit' and `custom.boolean.value` = 'false'
```

* To search on a custom multiselect field:

```bash
`custom.multi.scriptId` = 'custentity_2663_direct_debit' and `custom.multi.value.internalId` = 1
```

* To search on a custom long field:

```bash
`custom.long.scriptId` = 'custentity1' and `custom.long.value` = 1000
```

## Update Custom Fields

When you make PATCH or POST API calls and need to update custom fields, you need to include a `customFieldList` and specify the `ce_type`.

Cloud Elements supports the following `ce_type` values:

* SelectCustomFieldRef
* date
* long
* integer
* float
* double
* boolean
* string

The following example shows how to include a `customFieldList`in the JSON body of a PATCH or POST request.

```json

{
"customFieldList": {
  "customField":[
    {
        "scriptId": "custentity7",
        "ce_type":"SelectCustomFieldRef",
        "value":{
            "internalId":"1"
            }
    }
],
"customField":[
      {
        "scriptId": "custentity9",
        "ce_type":"date",
        "value": "2015-06-25T07:00:00Z"
      }
]
  }
}
```

## Limitations

Netsuite querying does not currently support the “OR” functionality.

## Search Using internalId

Each object has its own `internalId`, but you can still search for more than one object by replacing `internalId` with the object name.

For example, if an entity has an internalId of 1769, and a salesRep has an internalId of 36, you can include `entity=11769` or `salesRep=36` in a query.

## Netsuite Finance

* Instead of an `/accounts` resource, Netsuite Finance supports the `/ledger-accounts` resources.
* When working with the `/items` object, you need to include the `_objType` to make POST /Items/{{id}} requests. You can retrieve an `_objType` by making a GET /Items/{id} request.
* `GET /invoices` returns null values for `amountPaid` and `amountRemaining`. This is expected behavior as described by Netsuite below:

    If a standard field is set to NOT show in the UI, it is not settable through web services, either. If you try to set such a field through web services, an error message is returned.

    This is true for the GET operation of web services as well. Web Services generally mimics the NetSuite UI. The fields available on the invoice form will be the only fields available in the GET response. To show the `amountPaid` and `amountRemaining` fields on the web service response, you customize your form to show the Amount Remaining (Due) and Amount Paid fields on the forms used by your invoices.
