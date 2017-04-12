---
heading: Common Resources
seo: Creating | Common Resources | Cloud Elements API Docs
title: Creating Common Resources
description: Common Resources Overview
layout: docs
apis: API Docs
platform: organizations
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 10
sitemap: false
---

# Creating Common Resources

A common resource is a resource with normalized fields and objects that you can use in place of specific elements to facilitate one-to-many integrations. In this section you will learn how to create a common resource at the organization level and map element resource data to it for transformation. You can create a common resource based on an existing resource (template, element resource, or existing common resource) or as an entirely new resource. This guide includes instructions for both methods.

{% include important.html content="Only users at the organization level can create common resources, but users at any level can create transformations at the instance level. If you are not a user at the organization level, skip to Creating Transformations." %}

{% include callout.html content="Important: Only users at the organization level can create common resources, but users at any level can create transformations at the instance level. If you are not a user at the organization level, skip to Creating Transformations. " type="primary" %}

{% include callout.html content="Important: Only users at the organization level can create common resources, but users at any level can create transformations at the instance level. If you are not a user at the organization level, skip to Creating Transformations. " type="info" %}

{% include callout.html content="Important: Only users at the organization level can create common resources, but users at any level can create transformations at the instance level. If you are not a user at the organization level, skip to Creating Transformations. " type="success" %}

{% include callout.html content="Important: Only users at the organization level can create common resources, but users at any level can create transformations at the instance level. If you are not a user at the organization level, skip to Creating Transformations. " type="warning" %}



__Important!__ Only users at the organization level can create common resources, but users at any level can create transformations at the instance level. If you are not a user at the organization level, skip to [Map Resources for Transformation](mapping.html#map-resources-for-transformation).

To create a common resource, go to the steps that match how you plan to create the resource:

* [Create a New Common Resource](#create-a-new-common-resource) for steps to create an entirely new common resource.
* [Create a Common Resource Based on Another Common Resource](#create-a-common-resource-based-on-another-common-resource) for steps to create a resource based on an existing resource. You might create copies of resources to provide different common resources for different accounts.
* [Create a Common Resource Based on an Element Instance Resource](#create-a-common-resource-based-on-an-element-instance-resource) for steps to create a common resource based on an element resource. You might use element instance resources because you want your common resource to be based on a certain element.
* [Create a Common Resource Based on a Cloud Elements Template](#create-a-common-resource-based-on-a-cloud-elements-template) for steps to create a common resource based on a Cloud Elements template. Cloud elements templates represent typical common resources.

## Create a New Common Resource

Follow the instructions in this section to create an entirely new common resource. When finished, you will have a common resource with a single default field called __id__.

To create a new common resource:

1. On the Common Resources page, click __Create New Common Resource__.
1. Click __Create New Resource__.
1. Enter a name for your resource, and then click __Create__.

    The Transformations page shows your new Common Resource with a default organization-level field of __id__.
    ![New Resource from Scratch](img/New-Common_Resource.png)

1. Continue to [transform your element instance resources](pamming.html).

<span style="color:red">Draft API content, still needs some work. </span>

### Create a New Common Resource via API

* Call the following with a JSON body :

          POST /organizations/objects/definition

#### New Common Resource JSON

```json
{
  "<object_name>": {
    "fields": [
      {
        "path": "<Field_Name>",
        "type": "<Data_Type>"
      }
    ]
  }
}
```

#### New Common Resource JSON Parameters

| Parameter | Description   |
| :------------- | :------------- |
| object_name |  The name of the new common resource.  |
| fields | An array containing the field names and data types of the common resource. |
| path  | The name of the field. |
| type |  The data type of the field. |

#### New Common Resource cURL Example

```curl
curl -X POST \
  https://api.cloud-elements.com/elements/api-v2/organizations/objects/definitions \
  -H 'authorization: User {USER_SECRET}=, Organization {ORGANIZATION_SECTER} \
  -H 'content-type: application/json' \
  -d '{
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

1. On the Common Resources page, click __Create New Common Resource__.
1. Click __Create From Existing Resource__.
1. Select an existing resource from the __My Resources__ list.

    {% include tip.html content="If the list is long, use Search to filter it." %}

    {% include note.html content="If the list is long, use Search to filter it." %}


1. Enter a name for your resource, and then click __Create__.

    The Transformations page shows your new common resource with all of the fields that were in your other common resource.

1. Continue to the next step: [map fields from a resource](#map-resources-for-transformation).

## Create a Common Resources Based on Another Common Resource via API

To create a resource based on an existing resource:

1. Call `GET /organizations/objects/{objectName}/definitions`, replacing `{objectName}` with the name of the common resource that you want to copy.
2. Copy the response to the JSON body for `POST /organizations/objects/definitions` (see [Create a New Common Resource via API](#create-a-new-common-resource-via-api)).

### GET /organizations/objects/{objectName}/definitions cURL

```curl
curl --request GET \
  --url https://staging.cloud-elements.com/elements/api-v2/organizations/objects/<COMMON_RESOURCE_NAME>/definitions \
  --header 'authorization: User <USER_SECRET>, Organization <ORG_SECRET' \
  --header 'content-type: application/json' \
  ```

# Create a Common Resource Based on an Element Instance Resource

You can create a new common resource based on an element resource. For example, if you know that you want all of your contacts to match the contacts in the Salesforce `Contact` resource, you would create a new resource based on the Salesforce `Contact` resource.

To set up a common resource based on an existing element instance:

1. On the Common Resources page, click __Create New Common Resource__.
1. Click __Create From Existing Resource__.
1. On the left side, click __Existing Element Instance Resources__.

    ![Existing Element Instance Resources](img/Exist-Element.png)

1. From the __Existing Element Instant Resources__ list, select the element instance that contains the resource that you want to use.
1. From the __Element Instance Resources__ list, select the resource.

    ![Select Element Instance and Resource](img/Select-Element-Resource.png)

1. Enter a name for your resource, and then click __Create__.

    The Transformations page shows your new common resource with all of the fields in the element instance resource. We've already mapped the source element instance to your common resource.

1. Continue to the next step: [map fields from a resource](#map-resources-for-transformation).

## Create a Common Resources Based on Element Resource via API

To create a resource base on an element resource:

1. Call `GET /instances/{id}` to get the element token (`token`) for the instance.
1. Call `GET /objects/{objectName}/metadata`.

    __Note__: Include the `token` from `GET /instances/{id}` in the header.

2. Copy the response to a new JSON body and rename `vendorPath` to `path`.
3. Remove all other fields.
3. Use the new JSON body for `POST /organizations/objects/definitions` (see [Create a New Common Resource via API](#create-a-new-common-resource-via-api)).

### GET /objects/{objectName}/metadata cURL

```bash
curl --request GET \
  --url https://console.cloud-elements.com/elements/api-v2/hubs/crm/objects/<RESOURCE>/metadata \
  --header 'authorization: User <USER_SECRET>, Organization <ORG_SECRET>, Element <ELEMENT_TOKEN>' \
  --header 'content-type: application/json' \
  ```

# Create a Common Resource Based on a Cloud Elements Template

To set up a common resource based on a Cloud Elements template:

1. On the Common Resources page, click __Create New Common Resource__.
1. Click __Create From Existing Resource__.
1. On the left side, click __Existing Element Instance Resources__.

    ![Cloud Elements Resource Template](img/CE-Template.png)

    <span style="color:red">No idea what happens from here on </span>

1. Select the template.
1. Enter a name for your resource, and then click __Create__.

    The Transformations page shows your new common resource with all of the fields that were in your other common resource.

1. Continue to the next step: [map fields from a resource](#map-resources-for-transformation).
