---
heading: Marketo
seo: Endpoint Setup | Marketo | Cloud Elements API Docs
title: Endpoint Setup
description: Endpoint setup
layout: docs
breadcrumbs: /docs/elements.html
elementId: 85
parent: Back to Element Guides
order: 5
---

## Endpoint Setup

Follow these steps to setup your Marketo application with the endpoint.

Via a web browser, login to your Marketo account:
[https://login.marketo.com/ ](https://login.marketo.com/ )

These steps are also available on the Marketo Developer Site at: [http://developers.marketo.com/blog/quick-start-guide-for-marketo-rest-api/](http://developers.marketo.com/blog/quick-start-guide-for-marketo-rest-api/).

A Custom Service in Marketo allows you to describe and define what data your application will have access to. You need to be logged in as a Marketo administrator to create a Custom Service and associate that service with a single API-Only user.

Navigate to the admin area of the Marketo application
![Marketo Connected App step 1](http://cloud-elements.com/wp-content/uploads/2014/12/Marketowp1.png)

Click on the Users & Roles node on the left panel.
![Marketo Connected App step 2](http://cloud-elements.com/wp-content/uploads/2014/12/Marketowp2.png)

Create a new role
![Marketo Connected App step 3](http://cloud-elements.com/wp-content/uploads/2014/12/Marketowp3.png)

Input Role Name and Assign Permissions.
![Marketo Connected App step 3a](http://cloud-elements.com/wp-content/uploads/2014/12/Marketowp3a.png)

The next step is to create an API only user and associating it with the API role that you created in step 3. You can do so by checking the API-Only user checkbox at the time of user creation.
![Marketo Connected App step 4](http://cloud-elements.com/wp-content/uploads/2014/12/Marketowp41.png)

A Custom service is required to uniquely identify your client application. To create a custom application, go to the Admin->LaunchPoint screen and create a new service.
![Marketo Connected App step 5](http://cloud-elements.com/wp-content/uploads/2014/12/Marketowp5.png)

Choose “Custom” service type, provide the display name, description and the user created in step 2.
![Marketo Connected App step 7](http://cloud-elements.com/wp-content/uploads/2014/12/Marketowp7.png)

Click on “View Details” link on the grid to get the Client Id and Client Secret.
![Marketo Connected App step 7a](http://cloud-elements.com/wp-content/uploads/2014/12/Marketowp7a.png)

In making a request to Marketo API, you will need to specify your Marketo instance in the endpoint URL. All request to Marketo REST API will follow the format below.
![Marketo Connected App step 8](http://cloud-elements.com/wp-content/uploads/2014/12/Marketowp8.png)

```bash
REST API Endpoint URL->/rest/
```

The REST API Endpoint URL can be found within the Marketo Admin->Web Services panel.

Your Marketo endpoint URL structure should look similar to the example below.

```bash
http://100-AEK-913.mktorest.com/rest/v1/lead/{id}.json
```

Next [create an instance](marketo-create-instance.html).
