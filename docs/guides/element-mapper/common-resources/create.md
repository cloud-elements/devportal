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
redirect_from:
  - /docs/products/common-resources/
---

# Creating Common Resources

In this section you will learn how to create an organization-level common resource and map element resource data to it for trnsformation. You can create a common resource based on an existing resource (template, element resource, or existing common resource) or as an entirely new resource. This guide includes instructions for both methods.

Only users at the Organization level can create common resources, but users at any level can create transformations at the account or instance level. If you are not a user at the Organization level, skip to [Map Resources for Transformation](#map-resources-for-transformation).

Jump to the instructions you need:

* [Create a New Common Resource](#create-a-new-common-resource) for steps to create a common resource from scratch.
* [Create a Common Resource Based on Another Common Resource](#create-a-common-resource-based-on-another-common-resource) for steps to create a resource based on an existing resource. You might create copies of resources to provide different common resources for different accounts.
* [Create a Common Resource Based on an Element Instance Resource](#create-a-common-resource-based-on-an-element-instance-resource) for steps to create a common resource based on an element resource. You might use element instance resources because you want your common resource to be based on a certain element.
* [Create a Common Resource Based on a Cloud Elements Template](#create-a-common-resource-based-on-a-cloud-elements-template) for steps to create a common resource based on a Cloud Elements template. Cloud elements templates represent typical common resources.
* [Map Resources for Transformation](#map-resources-for-transformation) for steps to map your common resource to element instances.

# Create a New Common Resource

Follow the instructions in this section to create an entirely new common resource.

To create a new Common Resource:

1. On the Common Resources page, click __Create New Common Resource__.
1. Click __Create New Resource__.
1. Enter a name for your resource, and then click __Create__.

    The Transformations page shows your new Common Resource with a default organization-level field of __id__.
    ![New Resource from Scratch](img/New-Common_Resource.png)

1. Continue to the next step: [map fields from a resource](#map-resources-for-transformation).

<span style="color:red">Draft API content, still needs some work. </span>

## Create a New Common Resource via API

1. Call POST /organizations/objects/definitions cURL.
2. Include fields in the JSON body as described below.

### POST /organizations/objects/definitions

```curl
curl --request POST \
  --url https://staging.cloud-elements.com/elements/api-v2/organizations/objects/definitions \
  --header 'authorization: User <USER_SECRET>, Organization <ORG_SECRET>' \
  --header 'cache-control: no-cache' \
  --header 'content-type: application/json' \
  --data @resource.json
```

### Resource JSON

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

### JSON Parameters

| Parameter | Description   |
| :------------- | :------------- |
| object_name |  The name of the new common resource.  |
| fields | An array containing the field names and data types of the common resource. |
| path  | The name of the field. |
| type |  The data type of the field. |

# Create a Common Resource Based on Another Common Resource

You can create a common resource based on other common resources in your organization. You might do this to create variations of a common resource for multiple different accounts.

To set up a common resource based on an existing common resource:

1. On the Common Resources page, click __Create New Common Resource__.
1. Click __Create From Existing Resource__.
1. Select the resource from the __My Resources__ list.
1. Enter a name for your resource, and then click __Create__.

    The Transformations page shows your new common resource with all of the fields that were in your other common resource.

1. Continue to the next step: [map fields from a resource](#map-resources-for-transformation).

## Create a Common Resources Based on Another Common Resource via API

To create a resource based on an existing resource:

1. Call GET /organizations/objects/{objectName}/definitions, replacing {objectName} with the name of the common resource that you want to copy.
2. Copy the response to the JSON body for POST /organizations/objects/definitions (see [Create a New Common Resource via API](#create-a-new-common-resource-via-api)).

### GET /organizations/objects/{objectName}/definitions cURL

```bash
curl --request GET \
  --url https://staging.cloud-elements.com/elements/api-v2/organizations/objects/<COMMON_RESOURCE_NAME>/definitions \
  --header 'authorization: User <USER_SECRET>, Organization <ORG_SECRET' \
  --header 'cache-control: no-cache' \
  --header 'content-type: application/json' \
  --header 'postman-token: 629ac38a-d596-a3c5-b64e-6358e567db64' \
  ```

# Create a Common Resource Based on an Element Instance Resource

You can create a new common resource based on an element resource. For example, if you know that you want all of your contacts to look the contacts in the Salesforce `Contact` resource, you would create a new resource based on the Salesforce `Contact` resource.

To set up a common resource based on an existing element instance:

1. On the Common Resources page, click __Create New Common Resource__.
1. Click __Create From Existing Resource__.
1. On the left side, click __Existing Element Instance Resources__.

    ![Existing Element Instance Resources](img/Exist-Element.png)

1. Select the element instance that contains the resource that you want to use.
1. Select the resource from the __Element Instance Resources__ list.

    ![Select Element Instance and Resource](img/Select-Element-Resource.png)

1. Enter a name for your resource, and then click __Create__.

    The Transformations page shows your new common resource with all of the fields in the element instance resource. We've already mapped the element instance that you based the common resource on to it.

1. Continue to the next step: [map fields from a resource](#map-resources-for-transformation).

## Create a Common Resources Based on Element Resource via API

To create a resource base on an element resource:

1. Call GET /objects/{objectName}/metadata.
2. Copy the response to a new JSON body and rename `vendorPath` to `path`.
3. Remove all other fields.
3. Use the new JSON body for POST /organizations/objects/definitions (see [Create a New Common Resource via API](#create-a-new-common-resource-via-api)).

### GET /objects/{objectName}/metadata cURL

```bash
curl --request GET \
  --url https://snapshot.cloud-elements.com/elements/api-v2/hubs/crm/objects/<RESOURCE>/metadata \
  --header 'authorization: User <USER_SECRET>, Organization <ORG_SECRET>, Element <ELEMENT_TOKEN>' \
  --header 'cache-control: no-cache' \
  --header 'content-type: application/json' \
  ```

# Create a Common Resource Based on a Cloud Elements Template

To set up a common resource based on a Cloud Elements template:

1. On the Common Resources page, click __Create New Common Resource__.
1. Click __Create From Existing Resource__.
1. On the left side, click __Existing Element Instance Resources__.

    ![Cloud Elements Resource Template](img/CE-Template.png)

    <span style:"color:red">No idea what happens from here on </span>

1. Select the resource from the __My Resources__ list.
1. Enter a name for your resource, and then click __Create__.

    The Transformations page shows your new common resource with all of the fields that were in your other common resource.

1. Continue to the next step: [map fields from a resource](#map-resources-for-transformation).

# Map Resources for Transformation

Use the Transformations page to map fields in your elements instances to fields in your common resource. This is where you will decided which fields you care about and what to call them.

__Note:__ You must already have element instances.

To map fields:

1. On the Common Resources > Transformations page, click  __Create New Transformation__.

    You see a list of Element Instances available to you. If the list is long, use the Search to narrow it down.
    ![Chooser Search](img/Chooser-Search.png)

1. Select the Element Instance, and then select the Element Instance Resource.

    The Resources available to that Element Instance appear in the Element Instance Resources column after you select a resource.
  	![Chooser](img/Chooser.png)

1. Beginning with the default field __id__, select an instance resources on the right to map to the Common Resource on the left.

    For example, select an ID field in your instance resource to map to the default __id__ field.
    ![Mapped id](img/Mapped-id.png)

1. For the next field, decide which level to create the field, and then click the + button. See [Understanding Levels](#understanding-levels).

    ![Add a Field](img/Add-Field.png)

1. Enter a name for the field, and then choose the data type.
1. Select the corresponding Instance Resource on the right to map to the new field.

    __Note__: You can type to filter.
  <span style="Color:red">Link to custom objects.</span>

1. Continue adding resources until you’re complete, and then click __Save__.
1. Click __Back__ to return to transform another instance.

### Tips

* You don't have to map fields one at a time. You can add multiple fields to the Common Resources side at once, and then map them later. Use <img src="img/nnn.png" alt="Alt Text" class="inlineImage"> to show only those fields that haven't been mapped.
* If you made a mistake and don't want to include a field in a common resource, click <img src="img/btn-Delete.png" alt="Delete" class="inlineImage">. If you still want the field, but want to remove the mapping, click <img src="img/btn-Clear.png" alt="Clear" class="inlineImage">.






# Create a New Common Resource


Creating a common resource entails the high-level steps outlined below.

1. [Set up the new common resource](#set-up-the-common-resource). Get started, choose how to create the common resource, and give it a name.
2. [Map the resources that you want to transform to the fields in the common object](#map-resources-for-transformation).
3. [Fine tune the common resource](#advanced-custom-resources). Map custom objects, use javascript to map complex objects, set properties on the instance and on the individual fields, test your transformations, and more.

## Set up the Common Resource

The first step in the process is to choose how you’ll set up your common resource -- completely new or based on an existing resource -- and what to name it.

* [Set up an entirely new common resource](#setting-up-a-new-common-resource) if you want to start from scratch.
* [Set up a copy of an existing common resource](#setting-up-a-common-resource-based-on-another-common-resource) if you have an existing common resource that you want to copy.
* [Set up a new common resource based on a resource in an existing element instance](#setting-up-a-common-resource-based-on-an-element-instance-resource). Choose this option if have an existing element resource that you want to model similar resources after. For example, you want all of your contacts to match Saleforce contacts.
* [Set up a new common resource based on a Cloud Elements template](#setting-up-a-common-resource-based-on-a-cloud-elements-template) if you want to leverage Cloud Elements template.
