---
heading: Marketo
seo: Endpoint Setup | Service provider setup | Marketo | Cloud Elements API Docs
title: Service Provider Setup
description: Service provider setup
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 85
parent: Back to Element Guides
order: 5
---

# Service Provider Setup

To authenticate a {{page.heading}} element instance you must first belong to the [LaunchPoint Technology Partner Program](http://pages2.marketo.com/launchpoint-partner.html).  Once you have a Developer Sandbox, complete the setup steps described in this section.

To set up the service provider:

1. Via a web browser, log in to your Marketo account:  [https://login.marketo.com/ ](https://login.marketo.com/ ) <br/>
1. Navigate to the admin area of the Marketo application
![Marketo Connected App step 1](/img/marketo_admin.png)
2. Click on the Users & Roles node on the left panel.
![Marketo Connected App step 2](http://cloud-elements.com/wp-content/uploads/2014/12/Marketowp2.png)
2. Create a new role
![Marketo Connected App step 3](http://cloud-elements.com/wp-content/uploads/2014/12/Marketowp3.png)
3. Input Role Name and Assign Read-Write Permissions.
![Marketo Connected App step 3a](http://cloud-elements.com/wp-content/uploads/2014/12/Marketowp3a.png)
4. The next step is to create an API only user and associating it with the API role that you created in step 3. You can do so by checking the API-Only user checkbox at the time of user creation.
![Marketo Connected App step 4](http://cloud-elements.com/wp-content/uploads/2014/12/Marketowp41.png)
5. A Custom service is required to uniquely identify your client application. To create a custom application, go to the Admin->LaunchPoint screen and create a new service.
![Marketo Connected App step 5](http://cloud-elements.com/wp-content/uploads/2014/12/Marketowp5.png)
6. Choose “Custom” service type, provide the display name, description and the user created in step 2.
![Marketo Connected App step 7](http://cloud-elements.com/wp-content/uploads/2014/12/Marketowp7.png)
8. Click on “View Details” link on the grid to get the Client Id and Client Secret.
![Marketo Connected App step 7a](http://cloud-elements.com/wp-content/uploads/2014/12/Marketowp7a.png)
9. Click the "Web Services" menu item and record the two URLs in the REST API section (Endpoint & Identity)
 ![Marketo Connected App step 8](http://cloud-elements.com/wp-content/uploads/2014/12/Marketowp8.png)

9. From here, you should have everything you need to authenticate an Element Instance of Marketo
 * Client Id
 * Client Secret
 * Endpoint (REST) URL
 * Identity URL



Next [Authenticate an element instance with {{page.heading}}](authentication.html).
