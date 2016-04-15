---
heading: ServiceMax
title: Endpoint Setup
description: Endpoint setup
layout: docs
breadcrumbs: /docs/elements.html
elementId: 169
parent: Back to Element Guides
order: 5
---

## Endpoint Setup

Follow these steps to setup your ServiceMax application with the endpoint.

__In order to create a ServiceMax Element Instance you must have the Enterprise edition or Professional edition with API support is required. Also, to set up a new application in ServiceMax, you must have Administrator privileges. Please contact your system administrator if you do not have those privileges.__

Via a web browser, login to your ServiceMax account:
[https://servicemax.cloudforce.com/](https://servicemax.cloudforce.com/)

1. Select "Setup" if not taken there by default
![ServiceMax Connected App step 1](http://cloud-elements.com/wp-content/uploads/2015/05/ServiceMaxAPI1.png)

2. In left hand nav menu, under create, select "Apps"
![ServiceMax Connected App step 2](http://cloud-elements.com/wp-content/uploads/2015/05/ServiceMaxAPI2.png)

3. Click “New” in the Connected Apps Category.
![ServiceMax Connected App step 3](http://cloud-elements.com/wp-content/uploads/2015/05/ServiceMaxAPI3.png)

4. Fill out the basic information about the app

5. Make sure to select "Enable OAuth Settings"

6. You’ll be required to enter a callback URL from the endpoint. This URL will be in your application’s address space, and you will be required to retrieve some information returned on this URL by the endpoint. For our example,we’ll use a callback URL of https://mycoolapp.com/auth

7. Choose from the "Selected OAuth Scopes". "Full Access" and "Perform requests on your behalf at any time (refresh_token_, offline_access)" are the minimum needed scopes.

8. Add the selected scopes
![ServiceMax Connected App step 4](http://cloud-elements.com/wp-content/uploads/2015/05/ServiceMaxAPI4.png)

9. Click "Save" at the bottom of the window
![ServiceMax Connected App step 5](http://cloud-elements.com/wp-content/uploads/2015/05/ServiceMaxAPI5.png)

10. Please make a note of the "Consumer Key"

11. Please make a note of the "Consumer Secret"
![ServiceMax Connected App step 6](http://cloud-elements.com/wp-content/uploads/2015/05/ServiceMaxAPI6.png)

Next [create an instance](servicemax-create-instance.html).
