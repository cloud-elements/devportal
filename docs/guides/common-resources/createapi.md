---
heading: Defining Common Resources & Transformations
seo: Creating | Common Resources | Cloud Elements API Docs
title: Creating Common Resources via API
description: Common Resources Overview
layout: sidebarleft
uiContentVersion: create
apis: API Docs
platform: organizations
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 11
sitemap: false
---

# Creating Common Resources via API

{% include common-resources/create-cr.md%}

{% include important.html content="Only users at the organization level can create common resources, but users at any level can create transformations at the instance level. If you are not a user at the organization level, skip to Creating Transformations." %}

You can test the APIs described in this section using our interactive documentation. Open {{site.console}}, and then click <img src="img/btn-Code.png" alt="Custom JS" class="inlineImage"> in the header. Under Platform API Documentation, open `organizations` for common resources and transformations .

To create a common resource, go to the steps that match how you plan to create the resource:

* [Create a New Common Resource](#create-a-new-common-resource) for steps to create an entirely new common resource.
* [Create a Common Resource Based on Another Common Resource](#create-a-common-resource-based-on-another-common-resource) for steps to create a resource based on an existing resource. You might create copies of resources to provide different common resources for different accounts.
* [Create a Common Resource Based on an Element Instance Resource](#create-a-common-resource-based-on-an-element-instance-resource) for steps to create a common resource based on an element resource. You might use element instance resources because you want your common resource to be based on a certain element.
* [Create a Common Resource Based on a Cloud Elements Template](#create-a-common-resource-based-on-a-cloud-elements-template) for steps to create a common resource based on a Cloud Elements template. Cloud Elements templates represent typical common resources.

## Create a New Common Resource

Follow the instructions in this section to create an entirely new common resource. When finished, you will have a common resource with a single default field called __id__.

To create a new common resource:

1. Construct a JSON body as shown below (see [New Common Resource JSON Parameters](#new-common-resource-json-parameters)):

    ```json
    {
      "<objectName>": {
        "fields": [
          {
            "path": "<fieldName>",
            "type": "<dataType>"
          }
        ]
      }
    }
    ```

1. Call the following, including the JSON body you constructed in the previous step:

          POST /organizations/objects/definition

1. Continue to the next step: [map fields to the common resource](mappingapi.html).

### New Common Resource JSON Parameters

| Parameter | Description   |
| :------------- | :------------- |
| objectName |  The name of the new common resource.  |
| fields | An object containing the field names and data types of the common resource. |
| path  | The name of the field. |
| type |  The data type of the field. |

### cURL Example

```bash
curl -X POST \
  https://api.cloud-elements.com/elements/api-v2/organizations/objects/definitions \
  -H 'authorization: User {USER_SECRET}, Organization {ORGANIZATION_SECRET}' \
  -H 'content-type: application/json' \
  -d '
  {
    "myContacts": {
      "fields": [
        {
          "path": "id",
          "type": "string"
        }
      ]
    }
  }'
```

## Create a Common Resource Based on Another Common Resource

You can create a common resource based on other common resources in your organization. You might do this to create variations of a common resource for multiple different accounts.

To set up a common resource based on an existing common resource:

1. Call the following, replacing `{objectName}` with the name of the common resource that you want to copy:

          GET /organizations/objects/{objectName}/definitions

2. Copy the `fields` array in the response to the JSON body for `POST /organizations/objects/definitions` (see [Create a New Common Resource](#create-a-new-common-resource)).
3. Continue to the next step: [map fields to create a transformation](#mappingapi.html).

### cURL Example

#### 1. Get the Existing Common Resource Payload

```bash
curl --request GET \
  --url https://staging.cloud-elements.com/elements/api-v2/organizations/objects/[COMMON_RESOURCE_NAME]/definitions \
  -H 'authorization: User {USER_SECRET}, Organization {ORGANIZATION_SECRET}' \
  -H 'content-type: application/json' \
  ```

#### 2. Create the Copy of the Common Resources

```bash
curl -X POST \
  https://api.cloud-elements.com/elements/api-v2/organizations/objects/definitions \
  -H 'authorization: User {USER_SECRET}, Organization {ORGANIZATION_SECRET}' \
  -H 'content-type: application/json' \
  -d '
  {
    "Copy_of_existing_resource": {
    "fields": [
      {
        "type": "string",
        "path": "FirstName"
      },
      {
        "type": "string",
        "path": "id"
      },
      {
        "type": "string",
        "path": "LastName"
      }
      ]
    }
  }
'
```

## Create a Common Resource Based on an Element Instance Resource

You can create a new common resource based on an element resource. For example, if you know that you want all of your contacts to match the contacts in the Salesforce `Contact` resource, you would create a new resource based on the Salesforce `Contact` resource.

To set up a common resource based on an existing element instance:

1. Call the following to get the element token (`token`) for the instance:

          GET /instances/{id}

      Or if you do not know the instance ID, you can call:

        GET /instances

1. Save the element `token` to use in the header of the next API call.
1. Call the following, replacing `{objectName}` with the name of the element instance resource, to get the fields that comprise the resource:

          GET /objects/{objectName}/metadata

    __Note__: Make sure that you include the `token` from `GET /instances/{id}` in the header.

2. Copy the `vendorPath` and `type` fields to a new JSON body.
3. Rename `vendorPath` to `path`.
3. Use the new JSON body for `POST /organizations/objects/definitions` (see [Create a New Common Resource](#create-a-new-common-resource)).
4. Continue to the next step: [map fields to the common resource](mappingapi.html).


### cURL Example

#### 1. Get the Element Token

```bash
curl -X GET \
  https://api.cloud-elements.com/elements/api-v2/instances/{INSTANCE_ID} \
  -H 'authorization: User {USER_SECRET}, Organization {ORGANIZATION_SECRET}' \
  -H 'content-type: application/json' \
```

#### 2. Get the Fields in the Resource

```bash
curl --request GET \
  --url https://api.cloud-elements.com/elements/api-v2/hubs/crm/objects/{RESOURCE}/metadata \
  --H 'authorization: User [USER_SECRET], Element [ELEMENT_TOKEN]' \
  --H 'content-type: application/json' \
  ```

#### 3. Create the Common Resource Based on the Element Resource

  ```bash
  curl -X POST \
    https://api.cloud-elements.com/elements/api-v2/organizations/objects/definitions \
    -H 'authorization: User {USER_SECRET}, Organization {ORGANIZATION_SECRET}' \
    -H 'content-type: application/json' \
    -d '
  {
    "Element_Instance_Resource": {
    "fields": [
      {
        "type": "string",
        "path": "FirstName" 
      },
      {
        "type": "string",
        "path": "id"
      },
      {
        "type": "string",
        "path": "LastName"
      }
      ]
    }
  }
  '
  ```

## Create a Common Resource Based on a Cloud Elements Template

Cloud Elements provides templates for several frequently used resources like accounts and contacts. You can use these templates as a starting point for your own definitions of a common resource.

To set up a common resource based on a Cloud Elements template:

1. Call the following to get a list of Cloud Elements templates and their fields.

          GET /organizations/objects/definitions?systemOnly=true

2. Locate the template that you want to use.
2. Copy the `fields` array to the JSON body for `POST /organizations/objects/definitions` (see [Create a New Common Resource](#create-a-new-common-resource)).
1. Continue to the next step: [map fields to the common resource](mappingapi.html).

### cURL Example

#### 1. Get the List of Cloud Elements Templates

```bash
curl -X GET \
  https://api.cloud-elements.com/elements/api-v2//organizations/objects/definitions?systemOnly=true \
  -H 'authorization: User {USER_SECRET}, Organization {ORGANIZATION_SECRET}' \
  -H 'content-type: application/json' \
```

#### 2. Create the Common Resource Based on the Element Resources

  ```bash
  curl -X POST \
    https://api.cloud-elements.com/elements/api-v2/organizations/objects/definitions \
    -H 'authorization: User {USER_SECRET}, Organization {ORGANIZATION_SECRET}' \
    -H 'content-type: application/json' \
    -d '
  {
    "Resource_Based_on_Template_API2": {
    "fields": [
      {
        "type": "string",
        "path": "name"
      },
      {
        "type": "string",
        "path": "lastName"
      },
      {
        "type": "string",
        "path": "email"
      },
      {
        "type": "string",
        "path": "id"
      },
      {
        "type": "boolean",
        "path": "active"
      },
      {
        "type": "string",
        "path": "phone"
      },
      {
        "type": "string",
        "path": "notes"
      }
      ]
    }
  }
  '
  ```
