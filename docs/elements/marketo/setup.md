---
heading: Marketo
seo: Endpoint Setup | API Provider setup | Marketo | Cloud Elements API Docs
title: API Provider Setup
description: API Provider setup
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 85
parent: Back to Element Guides
order: 5
---

# API Provider Setup

To authenticate a {{page.heading}} element instance you must first belong to the [LaunchPoint Technology Partner Program](http://pages2.marketo.com/launchpoint-partner.html).  Once you have a Developer Sandbox, complete the setup steps described in this section.

To set up the API provider:

1. Via a web browser, log in to your Marketo account at [https://login.marketo.com/ ](https://login.marketo.com/ ).
1. Navigate to the admin area of the Marketo application.
2. Click **Users & Roles** in the left panel.
![Marketo Connected App step 2](http://cloud-elements.com/wp-content/uploads/2014/12/Marketowp2.png)
2. Click **New Role**.
![Marketo Connected App step 3](http://cloud-elements.com/wp-content/uploads/2014/12/Marketowp3.png)
3. Enter the **Role Name** and assign permissions.
![Marketo Connected App step 3a](http://cloud-elements.com/wp-content/uploads/2014/12/Marketowp3a.png)
4. The next step is to create an API only user and associating it with the API role that you created in the previous step. Select the **API-Only** check box and assign the **API Role** at the time of user creation.
![Marketo Connected App step 4](http://cloud-elements.com/wp-content/uploads/2014/12/Marketowp41.png)
5. A Custom LaunchPoint service is required to uniquely identify your client application. To create a custom service, go to the Admin->LaunchPoint screen and select **New Service** from the **New** menu item.
![Marketo Connected App step 5](http://cloud-elements.com/wp-content/uploads/2014/12/Marketowp5.png)
6. Choose **Custom** service type, provide the display name, description and the user created earlier.
![Marketo Connected App step 7](http://cloud-elements.com/wp-content/uploads/2014/12/Marketowp7.png)
8. Click the **View Details** link on the grid to get the Client Id and Client Secret.
![Marketo Connected App step 7a](http://cloud-elements.com/wp-content/uploads/2014/12/Marketowp7a.png)
9. Click the **Web Services** menu item and record the two URLs in the REST API section (Endpoint & Identity).
 ![Marketo Connected App step 8](http://cloud-elements.com/wp-content/uploads/2014/12/Marketowp8.png)

9. From here, you should have everything you need to authenticate an Element Instance of Marketo:
 * Client Id
 * Client Secret
 * Endpoint (REST) URL
 * Identity URL



Next [authenticate an element instance with {{page.heading}}](authenticate.html).
