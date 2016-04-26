---
heading: Element Mapper
title: Element Mapper Customized JavaScript
description: Learn about Element Mapper's customized JavaScript editor.
apis: API Docs
layout: docs
breadcrumbs: /docs/products/api-toolkit.html
parent: Back to API Toolkit
order: 5
---

### Element Mapper Custom JavaScript Feature

Element mapper includes a JavaScript feature which provides the ability to customize objects right from the UI.

The UI provides a prebuilt JavaScript function for customizing mappings and adding fields. Simply input the fields you wish to change using JavaScript.

```JavaScript
transformedObject.newfield = "MynewValue";

if(originalObject.status == 'open') {
    transformedObject.status = 'mynewstatus';
}
```
The `transformedObject.newfield = "MynewValue"` refers to the object you wish to change.
The `originalObject.status == 'open'` refers to the object value that the function is looking for, in this case `'open'`.

Let’s look at an example.

Log in to the [Cloud Elements API Manger Console](https://console.cloud-elements.com/elements/jsp/login.jsp).
Pipedrive will be used for this demonstration. An instance named Test has already been created.

Select “My Instances”

Select “Transformations”
![Element Mapper Custom JavaScript 1](http://cloud-elements.com/wp-content/uploads/2015/08/ElementMapperCustomJS1.png)

Select the object you wish to map, this case “Contacts”.
![Element Mapper Custom JavaScript 2](http://cloud-elements.com/wp-content/uploads/2015/08/ElementMapperCustomJS2.png)

Select “New Object”
![Element Mapper Custom JavaScript 3](http://cloud-elements.com/wp-content/uploads/2015/08/ElementMapperCustomJS3.png)

Name the object e.g. “myContact”

Choose the desired object level

In this case the object will be available for my Organization, as well as, the Test Instance of Pipedrive. Here we have chosen to have unmapped fields ignored. This is so only the fields that are mapped are visible in the transformed object.

Drag and drop the desired fields to be mapped
![Element Mapper Custom JavaScript 4](http://cloud-elements.com/wp-content/uploads/2015/08/CustomDataMappingJS1.png)

Select “Save”

Click “Try it out”
![Element Mapper Custom JavaScript 5](http://cloud-elements.com/wp-content/uploads/2015/08/CustomDataMappingJS2.png)

View the Original (untransformed) Object from Pipedrive

The transformed myContact with only the desired mapped fields present.

The transformed myContact shows the key value pair: `"activities_count": null`

Let’s say for example, an email or phone call needs to take place if a contact returns this key value pair. A new field can be added displaying the key value pair: `"needs_contact": true`

This could serve as a first step in triggering your own workflow to contact the user.
![Element Mapper Custom JavaScript 6](http://cloud-elements.com/wp-content/uploads/2015/08/CustomDataMappingJS3.png)

Select “Add JS Customization”

Input your custom JavaScript:

```JavaScript
if(originalObject.last_activity_date === null) {
    transformedObject.needs_contact = true;
}
```

Click “Save”
![Element Mapper Custom JavaScript 7](http://cloud-elements.com/wp-content/uploads/2015/08/CustomDataMappingJS4.png)

Click “Try it out”

View the newly transformed object with the custom property added.

This is just one example of what you can do with your own custom JavaScript.

The JS Customizer is capable of performing multiple JavaScript checks and operations. For example:

```JavaScript
if (originalObject.last_activity_date > '2015-05-19 23:27:17') {

transformedObject.needs_contact = 'mynewstatus';

}
```
![Element Mapper Custom JavaScript 8](http://cloud-elements.com/wp-content/uploads/2015/08/CustomDataMappingJS5.png)

__HAVE A FEATURE YOU WOULD LIKE TO ADD? [LET US KNOW](mailto:support@cloud-elements.com).__
