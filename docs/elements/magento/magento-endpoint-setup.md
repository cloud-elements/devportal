---
heading: Magento Beta
seo: Endpoint Setup | Magento | Cloud Elements API Docs
title: Register as a Consumer
description: Register as a Consumer
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 356
parent: Back to Element Guides
order: 5
---

## Endpoint Setup

Follow these steps to create a new Magento Connected app.
    You will need to create an OAuth Consumer which gives you the API key and secret to be used during provisioning and you will need to give access to make API calls to a User or Users

Log in to the admin dashboard of your store.

1. Select System > Web Services > REST -OAuth Consumers
![Magento Connected App step 1](http://cloud-elements.com/wp-content/uploads/2016/03/MagentoAPI1.png)

2. Click “Add New”
![Magento Connected App step 2](http://cloud-elements.com/wp-content/uploads/2016/03/MagentoAPI2.png)

3. Name Consumer

4. Make note of the “Key” and “Secret”

5. Input callback URL

6. Input Admin Password and click “Save”
![Magento Connected App step 3](http://cloud-elements.com/wp-content/uploads/2016/03/MagentoAPI3.png)

7. Select System > Web Services > REST - Roles
![Magento Connected App step 4](http://i65.tinypic.com/10hqgew.png)

8. Click “Add Admin Role”
![Magento Connected App step 5](http://i67.tinypic.com/zjaqo9.png)

9. Enter Name of Role (e.g. Administrator, API User, Name of Integration)

10. Select “Role API Resources” on left
![Magento Connected App step 6](http://i67.tinypic.com/2myytrs.png)

11. Either assign what resources you’d like to access via API or select “All” from the “Resource Access” dropdown menu

12. Select “Save Role”
![Magento Connected App step 7](http://i67.tinypic.com/o9iebq.png)

13. Select “Role Users” from side menu

14. Assign specific users (the user or users that will be used to authenticate on provisioning) to this REST role by checking the box next to the user name.

15. Select "Save Role"
![Magento Connected App step 8](http://i63.tinypic.com/30b05rb.png)

16. If there are no users displayed change the drop down filter on the checkbox column to “Any” and click “Search” and then go back to step 14
![Magento Connected App step 9](http://i67.tinypic.com/e8s4cl.png)


Next [create an instance](magento-create-instance.html).
