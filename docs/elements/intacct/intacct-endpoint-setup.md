---
heading: Intacct
seo: Endpoint Setup | Intacct | Cloud Elements API Docs
title: Endpoint Setup
description: Integrate Intacct into your application via the Cloud Elements APIs.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 921
parent: Back to Element Guides
order: 2
---
## Endpoint Setup

In order to interact with the Intacct API, you must subscribe to web services.
Please see the [developer documentation](https://developer.intacct.com/wiki/web-services-v21-quick-start-guide) for more information on the Intacct API.

__NOTE FROM INTACCT:  SenderId and password are your api gateway credentials, one level above your company credentials. Only Intacct can issue these to you. Contact support or your account manager at Intacct for more details.__

1. Subscribe to Web Services:  Under Company > Subscriptions
![Intacct Connected App step 1](http://cloud-elements.com/wp-content/uploads/2016/08/IntacctAPI1.png)

2. Click "Web Services"
![Intacct Connected App step 2](http://cloud-elements.com/wp-content/uploads/2016/08/IntacctAPI2.png)

Next [create an instance](intacct-create-instance.html) with your Intacct Company ID, User ID, Password, Sender ID and Sender Password.

### Set up User Permissions

**Single-Entity Account**

1. In Intacct, go to **Company** > **Users** 
2. Locate the user, and click Subscriptions 
3. Click each individual permission and select All
  1. You may need to click into the permission link on each module
  ![Intacct Permissions](/assets/img/elements/intacct/IntacctPermissions.gif)
4. Click Save

**Multi-Entity Account**

1. In Intacct, go to **Company** > **Roles**
2. Create a new Role
3. Make sure all Modules are selected
  1. You may need to click into the permission link on each module
  ![Intacct Permissions](/assets/img/elements/intacct/IntacctPermissions.gif)
4. Click Save
5. Go to **Company** > **Users**
6. Locate the user, and assign the newly created role to it.
7. Click Save