---
heading: Common Resources
seo: Creating Transformations | Common Resources | Cloud Elements API Docs
title: Creating Transformations
description: Creating Transformations
layout: docs
apis: API Docs
platform: organizations
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 20
---

# Creating Transformations

A transformation is the result of the process of mapping fields and objects in your element instances to existing fields and objects in a
  <a href="#" data-toggle="tooltip" data-original-title="{{site.data.glossary.common_resource}}">common resource</a>. After you create a common resource, you will select an element instance, choose the resource containing the objects that you want to map to the common resource, and map fields to the common resource. The end result is a a transformation of the selected objects in the element instance.


__On this page__

* [Map Resources for Transformation](#map-resources-for-transformation)
* [Use Javascript to Manage Complex Objects](#usejavascript-to-manage-complex-objects)
* [Transforming Custom Objects](#transforming-custom-objects)
* [Removing Fields During Transformation](#removing-fields-during-transformation)
* [Setting Default Values](#setting-default-values)
* [Testing Your Transformations](#testing-your-transformations)
* [Adding Your Common Resource to the API Docs](#adding-your-common-resource-to-the-api-docs)
* [Working With Arrays](#working-with-arrays)

## Map Resources for Transformation

Before you can transform fields, you need to map the fields for each element instance to the common resource. The common resource fields are on the left and the element instance fields are on the right. We provide a default __id__ field, which you can choose to map to an element instance ID, delete, or rename to an entirely different field. You can map fields one at a time, or you can add several fields to the common resource at one time and map them later.

This section describes creating a common resource at the organization level. You must be an organization level user to create a common resource. Users within your organization can use this common resource for configuring transformations at the instance level. For more about account and instance level transformations, see [Mapping Account Level Transformations](#mapping-account-level-transformations) or [Mapping Instance Level transformations](#mapping-account-level-transformations)

__Note:__ To map element instances to a common resource, you need to already have element instance ready to map.

These instructions describe mapping a single field at a time. However, you can approach mapping fields in different ways. For example, you can add several fields all at once without mapping them.

To map fields:

1. On the Common Resources > Transformations page, click  __Create New Transformation__.
![Create New Transformation](img/Transformations-Page.png)

1. Select the Element Instance, and then select the Element Instance Resource.

    The Resources available to that Element Instance appear in the Element Instance Resources column after you select a resource.
  	![Chooser](img/Chooser.png)

1. Beginning with the default field __id__, select an instance resources on the right to map to the common resource on the left.

    __Note__: If you created a resource based on an existing resource, you will see more fields than just the __id__ field. Start with the first one in your list.

    __Note__: If you want to change the name of the default Organization Level Field (or any field), click the __Field Name__ and overwrite it.

    For example, select an ID field in your instance resource to map to the default __id__ field.
    ![Mapped id](img/Mapped-id.png)

1. Click <img src="img/btn-Add-Field.png" alt="Alt Text" class="inlineImage"> for the Organization Level Fields to add another field.

    __Note__:You can add fields at the account and instance level also, but these steps focus on creating an organization level common resource. For more information, see [Mapping Fields for Accounts](#mapping-fields-for-accounts) or [Mapping Instance Level transformations](#mapping-account-level-transformations).

1. Enter a name for the field, and then choose the data type.
1. Select the corresponding Instance Resource on the right to map to the new field.

    __Note__: You can type to filter.
![Filtering Resources](img/gif-filter.gif)

1. Continue adding resources until you’re complete, and then click __Save__.
3. To map another instance, click the common resource name in the breadcrumbs at the top of the page.

### Tips

* You don't have to map fields one at a time. You can add multiple fields to the Common Resources side at once, and then map them later. Use <img src="img/btn-Filter.png" alt="Filter" class="inlineImage"> to show only those element instance resource fields that haven't been mapped.
* If you made a mistake and don't want to include a field in a common resource, click <img src="img/btn-Delete.png" alt="Delete" class="inlineImage">. If you still want the field, but want to remove the mapping, click <img src="img/btn-Clear.png" alt="Clear" class="inlineImage">.
* If you need to map a custom field, click <img src="img/btn-Free-Text.png" alt="Free Text Button" class="inlineImage">, and then type a name. See [Advanced Common Resources: Transforming Custom Resources](advanced.html#transforming-custom-resources) for details.
* We use dot notation to show arrays in the element instance resources. If you need to create arrays in your common resource, use dot notation. Examples include address.city, address.state, and address.street. See [Advanced Common Resources: Working With Arrays](advanced.html#working-with-arrays) for details.

## Mapping Fields for Accounts

Users at the organization level can map fields to organizations or to specific accounts.

To map fields to a specific account:

* Click <img src="img/btn-Add-Field.png" alt="Add Account Field" class="inlineImage"> for the Account Level Fields.

    or

* Click the arrow next to the fields to demote the field from the organization level to the account level.

    ![Demote](img/gif-Demote.gif)


## Use Javascript to Manage Complex Objects

You can use custom Javascript when the basic object mapping described in [Create a New Common Resource](#create-a-new-common-resource) does not meet your needs. For example, you might need to break a single address object into its component parts (address.city, address.state, address.street, and address.zip).

To access the custom Javascript functionality:

* Click   <img src="img/btn-Custom-JS.png" alt="Custom JS" class="inlineImage">.

Common resource functions include the parameters and functions in the following table:

### Common Resources Custom JS Parameters and Functions

| Parameter | Description   |
| :------------- | :------------- |
| transformedObject  |  The transformed object, with any mappings already taking place.  |
| originalObject  | The original object, with no transformations or mappings taking place on it. |
| fromVendor  | Is the transformation being executed coming back from the vendor (on an API response) ? |
| done |   The callback function needed to call at the end of your JS. |

### Examples

* Adding fields to a resource when a certain endpoint does not provide them:

    ```javascript
    function (originalObject, transformedObject, fromVendor, done) {
    transformedObject.isCreatedThisYear = (fromVendor && transformedObject.createdDt > '2016-01-01');
    done(transformedObject);
    }
    ```

* Two endpoints identify priority differently: one users numbers (1 or 2) and the other descriptions (low or high).

    ```javascript
    function (originalObject, transformedObject, fromVendor, done) {
    if (!fromVendor) done(transformedObject); // only care when returning data from the vendor

    transformedObject.priority = transformedObject.priorityNumber === 1 ? 'low' : 'high'; // we prefer our priority to be the string representation, so we convert the endpoints "priorityNumber" field to the appropriate string representation here.

    done(transformedObject);
  }
    ```

## Transforming Custom Objects

If you do not see an object that you expect in the instance resources you can still map it by entering the object name. This sometime happens for custom objects you created at the endpoint. You might not find all objects that you would expect to  you might not find a custom object.

To map a custom object:

1. Click <img src="img/btn-Free-Text.png" alt="Free Text Toggle" class="inlineImage">.

    The list becomes a text entry field.

1. In __Field Name__, enter the name of the object.

    ![Custom Object](img/Custom-Object.gif)


## Removing Fields During Transformation

Cloud Elements passes all fields in the JSON through on both requests and responses. However, you can choose to remove all unmapped fields or specific fields from requests or responses.

To remove unmapped fields:

1. On the Transformations page, click <img src="img/btn-Advanced-Settings.png" alt="Advanced Settings" class="inlineImage">.
1. Switch __Remove Unmapped Fields__ to on.
1. Click __Save__.

To remove fields from requests or responses:

1. On the Transformations page, click <img src="img/btn-Field-Settings.png" alt="Field Settings" class="inlineImage">.
1. Switch on or off the sliders for the requests or responses.

    For example, in the following configuration, we remove the portal-id field from the response.
    ![Removed field from response](img/Remove-Fields.png)


## Setting Default Values

If no values exist for a specific field, but you do not want to remove it, you can set a default value.

To set a default value:

1. On the Transformations page, click <img src="img/btn-Advanced-Settings.png" alt="Advanced Settings" class="inlineImage">.
1. Click __Default Value__, and then type the value.
1. Click __Save__.

## Testing Your Transformations

After you set up your mapping, you can test your transformations.

To test a transformation:

1. On the Transformations page, click <img src="img/btn-Try.png" alt="Try It Out" class="inlineImage">.
1. Review the Transformed response body. This is the response containing only the fields in your common resource.
1. Click __Original__ to see the entire response JSON payload.
1. Test a Put or Patch by selecting the appropriate method, and then entering the JSON request.

    __Tip__: Copy the JSON payload from Transformed.

1. Click __Run__.

## Adding Your Common Resource to the API Docs

You can add the common resource you create to the instances of each affected element.

To add a common resource to API docs:

1. On the Transformations page, click <img src="img/btn-Advanced-Settings.png" alt="Advanced Settings" class="inlineImage">.
1. Switch __Add to API Docs__ on.
1. Click __Save__.

Try it out:

1. Go to an element instance.
1. Hover over the instance card, and the click __API Docs__.
1. Scroll to your common resource.

The list of resources is in alphabetical order, so the example myContact in this guide is after the `leads` resource:
![myContact in API docs](img/api-docs.png)

## Working with Arrays

We display object arrays in dot notation. You can also use dot notation to nest objects in your common resource. For example, you might want to nest address properties like those shown in the example below:

![Nesting Example](img/Nesting.png)

The JSON result of this nested object:

```json
{
  "Address": {
    "city": "Cambridge",
    "state": "MA",
    "street":"1234567 Elm St",
    "zip":"99999"
  }
}
```
