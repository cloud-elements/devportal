---
heading: Google Drive
seo: Endpoint Setup | Service provider setup | Google Drive | Cloud Elements API Docs
title: Service Provider Setup
description: Service provider setup
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 21
parent: Back to Element Guides
order: 5
---

# Service Provider Setup

{% include note.html content="Google Drive provides the most up-to-date and detailed setup instructions <a href=https://developers.google.com/drive/web/enable-sdk>here</a>" %}

Navigate to <a href=https://console.developers.google.com/apis/dashboard>your Google Drive developer dashboard</a> and select your Google Drive project.  If you do not have any Google Drive projects, create a new one by clicking "Select a project" and then the "+": ![Screenshot1](./img/GoogleDriveCreateProject.png)

Once you have created, or selected, your Google Drive project, enable the Google Drive API for this project.  You are free to enable other APIs as well, but *at least* this API should be enabled. ![Screenshot2](./img/GoogleApi.png)

After the Google Drive API is enabled, click on "Credentials" on the left-hand side and then click "Create credentials".  Select "Web Application" as the "Application type" and follow the necessary prompts as necessary.  

{% include note.html content="Remember your OAuth callback URL.  This should be the URL that your app is setup to handle once a user has granted access to this OAuth application." %}

Once you are finished, you will be given an OAuth client secret and OAuth client ID.  Take note of these, as they will be needed when creating a Google Drive Element Instance. ![Screenshot3](./img/GoogleClientSecret.png)

Next [authenticate an element instance with Google Drive](authenticate.html).
