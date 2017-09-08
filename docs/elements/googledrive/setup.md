---
heading: Google Drive
seo: API Provider Setup | API Provider setup | Google Drive | Cloud Elements API Docs
title: API Provider Setup
description: API Provider setup
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 21
parent: Back to Element Guides
order: 5
---

# API Provider Setup

To authenticate a {{page.heading}} element instance you must have a project withe the Google Drive API enabled.


{% include note.html content="Google Drive provides the most up-to-date and detailed setup instructions <a href=https://developers.google.com/drive/web/enable-sdk>here</a>." %}

To set up the API Provider:

1. Navigate to <a href=https://console.developers.google.com/apis/dashboard>your Google Drive developer dashboard</a> and select your Google Drive project.

    {% include note.html content="If you do not have any Google Drive projects, create a new one by clicking <strong>Select a project</strong>and then the <strong>+</strong>, as shown below.  " %}

    ![Screenshot1](./img/GoogleDriveCreateProject.png)

1. Enable the Google Drive API for the project.  You are free to enable other APIs as well, but we require *at least* the Google Drive API.
![Screenshot2](./img/GoogleApi.png)
1. After you enable the Google Drive API, click **Credentials** on the left-hand side ,and then click **Create credentials**.
2. Select **Web Application** as the **Application type** and follow the prompts.

    {% include note.html content="Remember your OAuth callback URL.  This should be the URL that your app is set up to handle after a user grants access to this OAuth application." %}

1. Note the OAuth client secret and OAuth client ID, which you need to authenticate an element instance. ![Screenshot3](./img/GoogleClientSecret.png)

Next [authenticate an element instance with Google Drive](authenticate.html).
