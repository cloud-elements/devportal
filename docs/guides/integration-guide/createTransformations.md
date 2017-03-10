---
heading: Create Transformations
seo: Create Transformations | Create Salesforce Transformation | Create Shopify Transformation
title: Transformations
description: Create Tranformations for Salesforce and Shopify
layout: docs
order: 3
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
published: true
sitemap: false
---

In order to move a contact from Salesforce to Shopify, we need to map both the Salesforce and Shopify Contact Objects to a Common Object. We can accomplish through Transformations.

## Create a Salesforce Transformation
We will start by creating a transformation for the Contact Object in Salesforce.
 
1. Click on the blue Transformations button on the Salesforce Instance. This will open the transformations window.
2. Select the `Contact` Object from the drop-down menu under Salesforce ![Salesforce Transform](https://cl.ly/1M3D1C1q3333/Image%202017-03-09%20at%2011.43.29%20AM.public.png)  
3. Click the green `New Object` button to create a new Common Object and give it a name like "MyConctact"
4. You can now start mapping fields from Salesforce to the Common Object, by dragging them from the right side of the screen to the left. 
5. Start by mapping the following fields from Salesforce:
  - `Email`  
  - `First Name`
  - `Last Name`
  - `Business Phone` ![Mapping](https://cl.ly/271J3r3g1c3p/Image%202017-03-09%20at%201.37.33%20PM.public.png)
6. Set the toggles `Add to Docs` and `Ignore Unmapped` to yes. ![Toggles](https://cl.ly/1r3k3r2M3T0U/Screen%20Shot%202017-03-09%20at%201.43.17%20PM.png)
7. **Save your transformation** and click the Try it out button at the bottom of the window to see it in action!

## Create a Shopify Transformation
Now we will need to map the Shopify `customer` object to the common object we just created.

1. Click the blue Transformations button on the Shopify Instance.
2. Select the customer object from the drop-down under Shopify.
3. Instead of creating a new object, select the common object you created for salesforce from the My Objects drop-down.
4. The transformation window should then look similar to this: ![Unmapped](https://cl.ly/3j3T1V2h1T2h/Image%202017-03-09%20at%201.58.58%20PM.public.png).
5. Now map the corresponding fields in Shopify to the common object by dragging and dropping.

