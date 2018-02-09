---
heading: Defining Common Resources & Transformations
seo: Creating Transformations | Common Resources | Cloud Elements API Docs
title: Transforming Fields via API
description: Creating Transformations
layout: sidebarleft
uiContentVersion: mapping
apis: API Docs
platform: organizations
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 21
---

# Transforming Fields via API

{% include common-resources/map.md%}

You can test the APIs described in this section using our interactive documentation. Open {{site.console}}, and then click <img src="img/btn-Code.png" alt="Custom JS" class="inlineImage"> in the header.

{% include callout.html content="<strong>On this page</strong><br/><a href=#retrieve-a-list-of-common-resources>Retrieve a List of Common Resources</a><br/><a href=#map-fields-to-create-a-default-transformation>Map Fields to Create a Default Transformation</a><br/><a href=#map-fields-at-the-instance-level>Map Fields at the Instance Level</a></br><a href=#map-fields-at-the-account-level>Map Fields at the Account Level</a></br><a href=#map-complex-objects>Map Complex Objects</a>" type="primary" %}

## Retrieve a List of Common Resources

You can retrieve a list of the common resources in your organization. The list includes all fields defined in the common resource.

To retrieve a list of common resources:

1. Call the following:

          GET /organizations/objects/definitions


1. Continue to the next step: [map fields to create a transformation](#map-fields-to-create-a-default-transformation).

### cURL Example

```bash
curl -X GET \
  https://api.cloud-elements.com/elements/api-v2/organizations/objects/definitions \
  -H 'authorization: User {USER_SECRET}, Organization {ORGANIZATION_SECRET}' \
  -H 'content-type: application/json'
```

## Map Fields to Create a Default Transformation

Cloud Elements provides several APIs to map resources. This section describes mapping fields for an organization-level default transformation. The result is a default transformation for all instances of a specific element.

To map fields:

1. Construct a JSON body as shown below. For descriptions of each parameter, see [Transformation JSON Parameters](#transformation-json-parameters).

    ```json
    {
      "level":"organization",
      "vendorName":"<VENDOR_RESOURCE>",
      "fields":[
        {
          "path":"<COMMON_RESOURCE_FIELD>",
          "type":"<COMMON_RESOURCE_TYPE>",
          "vendorPath":"<VENDOR_FIELD>",
          "vendorType":"<VENDOR_TYPE>"
        }
      ]
    }
    ```

1. Call the following, including the JSON body from the previous step:

          POST /organizations/elements/{keyOrId}/transformations/{objectName}

      {% include note.html content="Replace {keyOrId} with the element key or id and replace {objectName} with the name of the common resource." %}

### Transformation JSON Parameters

| Parameter | Description   |  Required (Y/N) |
| :------------- | :------------- |:------------- |
| level |  The access level of the transformation, either `organization`, `account`, or `instance`.  | N. Default depends on endpoint.|
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
  -d '
  {
  "level":"organization",
  "vendorName":"Contact",
  "fields":[
    {
      "type":"string",
      "path":"FirstName",
      "vendorPath":"FirstName"
    },
    {
      "type":"string",
      "path":"id",
      "vendorPath":"Id"
    },
    {
      "type":"string",
      "path":"LastName",
      "vendorPath":"LastName"
    },
    {
      "type":"date",
      "path":"birthdate",
      "vendorPath":"Birthdate",
      "vendorType":"date",
      "configuration":[

      ]
    }
  ]
}'
```

## Map Fields at the Instance Level

Using the Cloud Elements `instances` endpoint, you can map fields at the instance level. Mapping fields is a two-step process that includes creating an instance level resource, and then mapping fields to it.

To create an instance level common resource and map fields to it:

1. Construct a JSON body for the instance level common resource as shown below (see [New Common Resource JSON Parameters](createapi.html#new-common-resource-json-parameters)):

    ```json
    {
      "fields": [
        {
          "type": "<dataType>",
          "path": "<fieldName>"
        }
      ]
    }
    ```

1. Create the common resource. Make the following API call with the JSON body from the previous step, replacing `{id}` with the instance id, and replacing `{objectName}` with the name of the common resource:

        POST /instances/{id}/objects/{objectName}/definitions

1. Construct a JSON body to map fields to the new common resource as shown below. For descriptions of each parameter, see [Transformation JSON Parameters](#transformation-json-parameters).

    ```json
    {
      "level":"instance",
      "vendorName":"<VENDOR_RESOURCE>",
      "fields":[
        {
          "path":"<COMMON_RESOURCE_FIELD>",
          "type":"<COMMON_RESOURCE_TYPE>",
          "vendorPath":"<VENDOR_FIELD>",
          "vendorType":"<VENDOR_TYPE>"
        }
      ]
    }
    ```

2. Map fields to the common resource. Call the following, including the JSON body from the previous step:

        POST /instances/{id}/transformations/{objectName}

     {% include note.html content="Replace `{id}` with the instance id and replace `{objectName}` with the name of the common resource." %}


### cURL Example

#### Step 1: Create the common resource

```bash
curl -X POST \
  https://api.cloud-elements.com/elements/api-v2/instances/{id}/objects/{objectName}/definitions \
  -H 'authorization: User {USER_SECRET}, Organization {ORGANIZATION_SECRET}' \
  -H 'content-type: application/json' \
  -d '
  {
    "fields": [
      {
        "type": "string",
        "path": "title"
      }
    ]
  }'
```

#### Step 2: Map fields to the common resource

```bash
curl -X POST \
  https://api.cloud-elements.com/elements/api-v2/instances/{id}/transformations/{objectName} \
  -H 'authorization: User {USER_SECRET}, Organization {ORGANIZATION_SECRET}' \
  -H 'content-type: application/json' \
  -d '
  {
    "vendorName": "Contact",
    "level": "instance",
    "fields": [
      {
        "path": "title",
        "type":"string",
        "vendorPath": "Title"
      }
    ]
  }'
```

## Map Fields at the Account Level

Using the Cloud Elements `accounts` endpoint, you can map fields at the account level. Mapping fields is a two-step process that includes creating an account level resource, and then mapping fields to it.

To create an account level common resource and map fields to it:

1. Construct a JSON body for the account level common resource as shown below (see [New Common Resource JSON Parameters](createapi.html#new-common-resource-json-parameters)):

    ```json
    {
      "fields":[
        {
          "type":"<dataType>",
          "path":"<fieldName>"
        }
      ]
    }
    ```

1. Create the common resource. Make one of the following API calls with the JSON body from the previous step, replacing `{id}` with the account id, and replacing `{objectName}` with the name of the common resource:

          POST /accounts/objects/{objectName}/definitions

      {% include note.html content="Use this API call to create a common resource at the default account level." %}

          POST /accounts/{id}/objects/{objectName}/definitions

       {% include note.html content="Use this API call to specify an account by id." %}

1. Construct a JSON body to map fields to the new common resource as shown below. For descriptions of each parameter, see [Transformation JSON Parameters](#transformation-json-parameters).

    ```json
    {
      "level":"instance",
      "vendorName":"<VENDOR_RESOURCE>",
      "fields":[
        {
          "path":"<COMMON_RESOURCE_FIELD>",
          "type":"<COMMON_RESOURCE_TYPE>",
          "vendorPath":"<VENDOR_FIELD>",
          "vendorType":"<VENDOR_TYPE>"
        }
      ]
    }
    ```

2. Map fields to the common resource. Call the following, including the JSON body from the previous step:

        POST /accounts/{id}/elements/{keyOrId}/transformations/{objectName}

      {% include note.html content="Replace`{id}` with the instance id, replace `{keyOrId}` with the element key or id, and replace `{objectName}` with the name of the common resource." %}

### cURL Example

#### Step 1: Create the common resource (default account)

```bash
curl -X POST \
  https://api.cloud-elements.com/elements/api-v2/accounts/objects/{objectName}/definitions \
  -H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
  -H 'content-type: application/json' \
  -d '
  {
    "fields": [
      {
        "type": "string",
        "path": "title"
      }
    ]
  }'
```

#### Step 1: Create the common resource (specific account)

```bash
curl -X POST \
  https://api.cloud-elements.com/elements/api-v2/accounts/{id}/objects/{objectName}/definitions \
  -H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
  -H 'content-type: application/json' \
  -d '
  {
    "fields": [
      {
        "type": "string",
        "path": "title"
      }
    ]
  }'
```


#### Step 2: Map fields to the common resource

```bash
curl -X POST \
  https://api.cloud-elements.com/elements/api-v2/accounts/{id}/elements/{keyOrIdtransformations}/{objectName} \
  -H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
  -H 'content-type: application/json' \
  -d '{
    "vendorName": "Contact",
    "level": "account",
    "fields": [
      {
        "path": "title",
        "type":"string",
        "vendorPath": "Title"
      }

  }'
```

## Map Complex Objects

You can use regular expressions as values for the JSON body parameters.

Examples:

* Get the value of the name field from the Products array where id = 4.

    ```json
    {
      "fields": [
        {
          "path": "AppleIpadName",
          "vendorPath": "Products[id=4].name"
        }
      ]
    }
    ```

* Get the value of the name field from the Products array where id = 2.

    ```json
    {
      "fields": [
        {
          "path": "AppleNewProductName",
          "vendorPath": "details.Products[?(@.id==2)].name"
        }
      ]
    }
    ```

* Get the touchId value from the Products array with id=2 which is inside the features object.

    ```json
    {
      "fields": [
        {
          "path": "AppleTouchProductId",
          "vendorPath": "Products[?(@.features.touchId==true)].id"
        }
      ]
    }
    ```

* Get the Id value of the Products array at index 0.

    ```json
    {
      "fields": [
        {
          "path": "AppleProductId",
          "vendorPath": "Products[0].id"
        }
      ]
    }
    ```

* Get a count of the Products array.

```json
{
  "fields": [
    {
      "path": "AppleProductsCount",
      "vendorPath": "Products[*].size()"
    }
  ]
}
```
