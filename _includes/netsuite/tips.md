On this page:

* [Getting Information About Custom Fields](#getting-information-about-custom-fields)
* [Searching Custom Fields](#searching-custom-fields)
* [Updating Custom Fields](#updating-custom-fields)

## Limitations

Netsuite querying does not currently support the “OR” functionality.

## Getting Information About Custom Fields

Because we normalize Netsuite's SOAP API to a RESTful API at Cloud Elements, you need to use specific API calls to get information about custom fields. All references to custom fields require the `internalId`, which you can find using the following API calls to retrieve custom objects and picklists:

* `GET /custom-fields` to retrieve custom objects
* `GET /lookups/{fieldname}` to retrieve picklists

### Retrieving Custom Objects

Typically, you use `GET /objects` to retrieve information, but it does not return custom objects. Instead, use `GET /custom-fields`.

See the [API docs](api-documentation.html) for more information about `GET /custom-fields`.

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

### Retrieving Picklists

When working with picklists, you also need to refer to them by `internalId`. To get information about a picklist, use `GET /lookups/{fieldname}`, replacing {fieldname} with the name of a picklist.

See the [API docs](api-documentation.html) for more information about `GET /lookups/{fieldname}`.

The response for `GET /lookups/{fieldname}` looks like this:

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

## Searching Custom Fields

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

## Updating Custom Fields

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
