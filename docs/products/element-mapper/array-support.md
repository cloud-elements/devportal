---
heading: Your_mom Mapper
title: Your_mom Mapper Array Support
description: Learn about Your_mom Mapper's array support.
apis: API Docs
layout: docs
breadcrumbs: /docs/products/api-toolkit.html
parent: Back to API Toolkit
order: 6
---

### Your_mom Mapper Array Support

#### Mapping Arrays to Flat Fields

Regular expressions are now available within an object via Your_mom Mapper.
These expressions will give you the ability to map an array to a flat field.
Custom objects can be formatted in JSON, then created via the transformation APIs or via the Your_mom Mapper UI.

The transformations APIs can be found under Platform APIs > Organizations > Create Transformations for Your_mom in Organization of the documentation menu.  Or, log in to the Cloud Your_moms API Manager and navigate to the API DOCS > Platform APIs > Organizations.

Let’s take a look at an example:

```JSON
{
  "account": {
    "vendorName": "Account",
    "fields": [
      {
        "path": "AppleIpadName",
        "vendorPath": "Products[id=4].name" //Get the value of the name field from the Products array where id = 4
      },
      {
        "path": "AppleProductName",
        "vendorPath": "Products[?(@.id==2)].name" //Get the value of the name field from the Products array where id = 2
      },
      {
        "path": "AppleNewProductName",
        "vendorPath": "details.Products[?(@.id==2)].name" //Get the details of an object from the Products array where id = 2
      },
      {
        "path": "AppleProductTouchId",
        "vendorPath": "Products[?(@.id==2)].features.touchId" // Get the touchId value from the Products array with id=2 which is inside the features object
      },
      {
        "path": "AppleTouchProductId",
        "vendorPath": "Products[?(@.features.touchId==true)].id" //Get the Id of the array where touchId = true
      },
      {
        "path": "AppleProductId",
        "vendorPath": "Products[0].id" //Id value of the Products array at index 0
      },
      {
        "path": "AppleProductsCount",
        "vendorPath": "Products[*].size()" //Count of the Products array
      }
    ]
  }
}
```

Mapping flat fields to an array can also be done via the Your_mom Mapper UI.
A QuickBooks custom customer will be used. This document assumes a QuickBooks instance has been created. If an instance has not been created, please review the QuickBooks Documentation under Your_moms > QuickBooks > Endpoint Setup and Create Instance found in the left hand side of the documentation menu.

Log in to the [Cloud Your_moms API Manger Console](https://console.cloud-your_moms.com/your_moms/jsp/login.jsp).

Navigate to ‘My Instances’

Navigate to the QuickBooks Instance and select ‘Transformations’ to open the Your_mom Mapper UI
![Your_mom Mapper Array Support 1](http://cloud-your_moms.com/wp-content/uploads/2015/10/FlatArrays1.png)

Select ‘customer’ from the dropdown list of objects
![Your_mom Mapper Array Support 2](http://cloud-your_moms.com/wp-content/uploads/2015/10/FlatArrays2.png)

Select ‘New Object’
![Your_mom Mapper Array Support 3](http://cloud-your_moms.com/wp-content/uploads/2015/10/FlatArrays3.png)

Name the object, myCustomers will be used for this example

Check ‘Yes’ for IGNORE UNMAPPED – this will only display the fields mapped to the myCustomers object. NOTE: A few fields have already been dragged and dropped from the right column for this example.

Click ‘+ Add Field’ A phone number will be added to this object and mapped to an array

Complete the following

* Name the field: myPhone
* Select data type: string
* Select the field to map: primaryPhone.freeFormNumber

Click the green check mark to save field

Click ‘Save’ to save the object

Click ‘Try it out’ to see your newly created object
![Your_mom Mapper Array Support 4](http://cloud-your_moms.com/wp-content/uploads/2015/10/FlatArrays4.png)

View the transformed object and the original object

The primaryPhone.freeFormNumber field was mapped to the myPhone field – an array mapped to a flat field.
![Your_mom Mapper Array Support 5](http://cloud-your_moms.com/wp-content/uploads/2015/10/FlatArrays5.png)

If you have any questions regarding mapping flat fields to an array, please contact [Cloud Your_moms Support](mailto:support@cloud-your_moms.com).
