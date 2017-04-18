---
heading: Creating Resources
seo: Creating Transformations | Common Resources | Cloud Elements API Docs
title: Mapping Fields to Common Resources via API
description: Creating Transformations
layout: sidebarleft
uiContentVersion: mapping
apis: API Docs
platform: organizations
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 21
---

# Mapping Fields to Common Resources via API

You can test the APIs described in this section using our interactive documentation. Open {{site.console}}, and then click <img src="img/btn-Code.png" alt="Custom JS" class="inlineImage"> in the header. Under Platform API Documentation, open `organizations` for common resources and transformations .

A transformation is the result of the process of <a href="#" data-toggle="tooltip" data-original-title="{{site.data.glossary.map}}">mapping</a> fields in your <a href="#" data-toggle="tooltip" data-original-title="{{site.data.glossary.element-instance-resource}}">element instance resources</a> to existing fields and objects in a
  <a href="#" data-toggle="tooltip" data-original-title="{{site.data.glossary.common_resource}}">common resource</a>. After you create a common resource, you will select an element instance, choose the resource containing the objects that you want to map to the common resource, and map fields to the common resource. The end result is a a transformation of the selected objects in the element instance.


__On this page__

* [Retrieve a List of Common Resources](#retrieve-a-list-of-common-resources)
* [Map Resources for Transformation](#map-resources-for-transformation)


## Retrieve a List of Common Resources

You can retrieve a list of the common resources in your organization. The list includes all fields defined in the common resource.

To retrieve a list of common resources:

1. Call the following:

          GET /organizations/objects/definitions


1. Continue to the next step: [map fields to create a transformation](#map-resources-for-transformation).

### cURL Example

```bash
curl -X GET \
  https://api.cloud-elements.com/elements/api-v2/organizations/objects/definitions \
  -H 'authorization: User {USER_SECRET}, Organization {ORGANIZATION_SECRET}' \
  -H 'content-type: application/json'
```

## Map Resources to Create a Default Transformation

Cloud Elements provides several APIs to map resources. This section describes mapping fields for an organization-level default transformation. The result is a default transformation for all instances of a specific element.

To map fields:

1. Construct a JSON body as shown below. For descriptions of each parameter, see [Transformation JSON Parameters](#transformation-json-parameters).

          {
            "level": "organization",
            "vendorName": "VENDOR_RESOURCE",
            "fields": [
              {
                "path": "{COMMON_RESOURCE_FIELD}",
                "type":"{COMMON_RESOURCE_TYPE}",
                "vendorPath": "{VENDOR_FIELD}",
                "vendorType": "{VENDOR_TYPE}"
              }
            ]
          }

1. Call the following, including the JSON body :

          POST /organizations/elements/{keyOrId}/transformations/{objectName}

      {% include note.html content="Replace {keyOrId} with the element key or id and replace {objectName} with the name of the common resource." %}

### Transformation JSON Parameters

| Parameter | Description   |  Optional (Y/N) |
| :------------- | :------------- |:------------- |
| level |  The access level of the transformation, either `organization`, `account`, or `instance`.  | Y </br>If not included, `organization` is the default. |
| vendorName | The name of the resource that contains the fields that you want to map to the common resource. | N |
| fields |  An object containing the field names and data types of the common resource and the vendor resource. </br>{% include tip.html content="To get a list of fields in a resource, call `GET hubs/{hub}/objects/{RESOURCE}/metadata`." %} | N |
| path | The name of the field in the common resource. | Y |
| vendorPath | The name of the field in the vendor resource. | Y |
| type | The data type of the field in the common resource. </br>Data types can be `boolean`, `string`, `date`, and `number`. | N |
| vendorType | The data type of the field at the vendor. Unless the format is `date`, you do not need to include this parameter. If the format is `date`, also include a mask.  | N |

### cURL Example

```bash
curl -X POST \
  https://api.cloud-elements.com/elements/api-v2/organizations/elements/sfdc/transformations/myContacts \
  -H 'authorization: User {USER_SECRET}, Organization {ORGANIZATION_SECRET}' \
  -H 'content-type: application/json' \
  -d '{
  "level": "organization",
  "vendorName": "Contact",
  "fields": [
    {
      "type": "string",
      "path": "FirstName",
      "vendorPath": "FirstName",
    },
    {
      "type": "string",
      "path": "id",
      "vendorPath": "Id",
    },
    {
      "type": "string",
      "path": "LastName",
      "vendorPath": "LastName",
    },
    {
      "type": "date",
      "path": "birthdate",
      "vendorPath": "Birthdate",
      "vendorType": "date",
      "configuration": [
        {
          "properties": {
            "pattern": "yyyy-mm-dd"
          }
        }
      ]
    }
  ]
}'
```

## Map Resources to Instances and Accounts

Using the Cloud Elements `instances` and `accounts` endpoints, you can map resources to different levels using the following API calls:

* `POST /instances/{id}/transformations/{objectName}`
* `POST /accounts/{id}/transformations/{objectName}`



## Map Resources to Multiple Levels



## Map Resources to Accounts




## Working with Date Type Fields

aksdjkjdsklfja

## Using Regular Expressions

You can use regular expressions as values for the JSON body parameters.

Examples:

* Get the value of the name field from the Products array where id = 4.

        "fields": [
        {
         "path": "AppleIpadName",
         "vendorPath": "Products[id=4].name"
        },

* Get the value of the name field from the Products array where id = 2.

        "fields": [
        {
         "path": "AppleNewProductName",
         "vendorPath": "details.Products[?(@.id==2)].name"
        }

* Get the touchId value from the Products array with id=2 which is inside the features object.

        "fields": [
         {
          "path": "AppleTouchProductId",
          "vendorPath": "Products[?(@.features.touchId==true)].id"
         }

* Get the Id of the array where touchId = true.

         "fields": [
         {
           "path": "AppleTouchProductId",
           "vendorPath": "Products[?(@.features.touchId==true)].id"
         }

* Get the Id value of the Products array at index 0.

         "fields": [
         {
           "path": "AppleProductId",
           "vendorPath": "Products[0].id"
         }

* Get a count of the Products array.

         "fields": [
         {
           "path": "AppleProductsCount",
           "vendorPath": "Products[*].size()" 
         }
