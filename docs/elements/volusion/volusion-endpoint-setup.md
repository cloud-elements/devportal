---
heading: Volusion
seo: Endpoint Setup | Volusion | Cloud Elements API Docs
title: Endpoint Setup
description: Endpoint setup
layout: docs
breadcrumbs: /docs/elements.html
elementId: 51
parent: Back to Element Guides
order: 5
---

## Endpoint Setup

Follow these steps to create a New Volusion Application for API integration. Via a web browser go to: [http://www.volusion.com/](http://www.volusion.com/) and setup a store. Once setup, please login.

1. From the Dashboard, click “Manage Store”
![Volusion Connected App step 1](http://cloud-elements.com/wp-content/uploads/2015/09/VolusionAPI1.png)

2. Login to your storefront.
![Volusion Connected App step 2](http://cloud-elements.com/wp-content/uploads/2015/09/VolusionAPI2.png)

3. From the dashboard, click “Inventory” and then click “Import/Export”.
![Volusion Connected App step 3](http://cloud-elements.com/wp-content/uploads/2015/09/VolusionAPI3.png)

4. Click “Volusion API”
![Volusion Connected App step 4](http://cloud-elements.com/wp-content/uploads/2015/09/VolusionAPI4.png)

5. Make sure you enable public XML for both “Featured Products” and “All Products”

6. Click “Save
![Volusion Connected App step 5](http://cloud-elements.com/wp-content/uploads/2015/09/VolusionAPI5.png)

7. Next, scroll down to the Generic orders section, under Accounts and click “Run”.
![Volusion Connected App step 6](http://cloud-elements.com/wp-content/uploads/2015/09/VolusionAPI6.png)

8. Click “Run”
![Volusion Connected App step 7](http://cloud-elements.com/wp-content/uploads/2015/09/VolusionAPI7.png)

9. Copy the URL returned from the “Run” command.  It will be needed to provision the Volusion Element.
![Volusion Connected App step 8](http://cloud-elements.com/wp-content/uploads/2015/09/VolusionAPI8.png)

An example of the URL copied in the previous step can be seen below:

`http://otnqw.rakrt.servertrust.com/net/WebService.aspx?Login=volusion@acmedata.com&EncryptedPassword=64F3C0572DB54CB36951010E7200391418E79AC678214B366FBD4E&EDI_Name=GenericOrders`

The beginning portion of the URL is your store URL – `http://otnqw.rakrt.servertrust.com`. Then the login email – volusion@acmedata.com, and finally the EncryptedPassword – `64F3C0572DB54CB36951010E7200418E79AC678214B366FBD4E&EDI`

### Need Help finding your Encrypted Password?

1. From the Dashboard, click "Manage Store"
![Volusion Connected App step 1](http://cloud-elements.com/wp-content/uploads/2015/09/VolusionAPI1.png)

2. Login to your storefront.
![Volusion Connected App step 2](http://cloud-elements.com/wp-content/uploads/2015/09/VolusionAPI2.png)

3. From the dashboard, click "Inventory" and then click "Import/Export".
![Volusion Connected App step 3](http://cloud-elements.com/wp-content/uploads/2015/09/VolusionAPI3.png)

4. Click "Volusion API"
![Volusion Connected App step 4](http://cloud-elements.com/wp-content/uploads/2015/09/VolusionAPI4.png)

5. Click "Get Help" then "Get help with this page" in the top right corner.
![Volusion Encrypted Password 1](img/encrypted-password-1.png)

6. In the pop up window, click "Volusion API Integration Help".
![Volusion Encrypted Password 2](img/encrypted-password-2.png)

7. In the new window, click on the lower box labeled "URL with Query String and General Information for Importing and Exporting".
![Volusion Encrypted Password 3](img/encrypted-password-3.png)

8. In this box, you will find your encrypted password.
![Volusion Encrypted Password 4](img/encrypted-password-4.png)

Next [create an instance](volusion-create-instance.html).
