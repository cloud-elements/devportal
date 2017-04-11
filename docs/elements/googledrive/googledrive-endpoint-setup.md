---
heading: Google Drive
seo: Endpoint Setup | Google Drive | Cloud Elements API Docs
title: Endpoint Setup
description: Integrate Google Drive into your application via the Cloud Elements APIs.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 21
parent: Back to Element Guides
order: 2
---
## Endpoint Setup

Follow these steps to set up a Google Drive Application with the endpoint.  Further details on this process are documented at [https://developers.google.com/drive/web/enable-sdk](https://developers.google.com/drive/web/enable-sdk).

Via a web browser, go to [https://console.developers.google.com](https://console.developers.google.com).

1. Click “Create Project”
![Google Drive Connected App step 1](http://cloud-elements.com/wp-content/uploads/2015/03/GoogleDriveAPI1.png)

2. Name your project

3. Click create
![Google Drive Connected App step 2](http://cloud-elements.com/wp-content/uploads/2015/03/GoogleDriveAPI2.png)

4. Click “APIs and auth”
![Google Drive Connected App step 3](http://cloud-elements.com/wp-content/uploads/2015/03/GoogleDriveAPI3.png)

5. Click “Credentials”

6. Click “Create new Client ID”
![Google Drive Connected App step 4](http://cloud-elements.com/wp-content/uploads/2015/03/GoogleDriveAPI4.png)

7. Click “Web Application”

8. Click “Configure consent screen”
![Google Drive Connected App step 5](http://cloud-elements.com/wp-content/uploads/2015/03/GoogleDriveAPI5.png)

9. Name your product and fill out other information.

10. Click “Save”
![Google Drive Connected App step 6](http://cloud-elements.com/wp-content/uploads/2015/03/GoogleDriveAPI6.png)

11. Enter your product’s website.

12. Copy the OAuth2 callback URL

This URL will be in your application’s address space. You will be required to retrieve some information returned on this URL by the endpoint.

For our example, we’ll use a callback URL of https://www.mycompanyapp.com/oauth2callback.

13. Click “Create Client ID” - This will take you back to the “Credentials” Screen.
![Google Drive Connected App step 7](http://cloud-elements.com/wp-content/uploads/2015/03/GoogleDriveAPI7.png)

14. Copy the “Client ID”.

15. Copy the “Client Secret”.
![Google Drive Connected App step 8](http://cloud-elements.com/wp-content/uploads/2015/03/GoogleDriveAPI8.png)

Next [create an instance](googledrive-create-instance.html).
