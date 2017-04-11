---
heading: Common Resources
seo: Creating Transformations | Common Resources | Cloud Elements API Docs
title: Creating Transformation
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
  <a href="#" data-toggle="tooltip" data-original-title="{{site.data.glossary.common_resource}}">common resource</a>.

In addition to the basic object mapping described in [Create a New Common Resource](#create-a-new-common-resource), you can use the transformations page to fine tune your common resources. This section describes more advanced activities that you can do to fine tune your common resources, deal with more difficult objects, manage what appears in your payloads, and more.

In this section:

* [Use Javascript to Manage Complex Objects](#usejavascript-to-manage-complex-objects)
* [Transforming Custom Objects](#transforming-custom-objects)
* [Removing Fields During Transformation](#removing-fields-during-transformation)
* [Setting Default Values](#setting-default-values)
* [Testing Your Transformations](#testing-your-transformations)
* [Adding Your Common Resource to the API Docs](#adding-your-common-resource-to-the-api-docs)
* [Working With Arrays](#working-with-arrays)

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
