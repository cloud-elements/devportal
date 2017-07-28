---
heading: Box
seo: Endpoint Setup | API provider setup | Box | Cloud Elements API Docs
title: API Provider Setup
description: API provider setup
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 22
parent: Back to Element Guides
order: 5
---

# API Provider Setup

To authenticate a {{page.heading}} element instance you must [register an app](#register-an-app) with {{page.heading}} and know the **client_id,** **client__secret**, and **redirect_uri** of the app. You will use these as the API Key, API Secret, and Callback URL when you authenticate an element instance.

Also, if you plan to use events, you need to know the [List ID](#find-a-list-id) of any lists that you want to monitor for events.

## Register an App

To setup the endpoint for {{page.heading}}, complete the setup steps described in this section.

1. Via a web browser, go to  [https://app.box.com/developers/services/edit/](https://app.box.com/developers/services/edit/).

2. Input an application name.

3. Select the type of Box application.

4. Click **Create Application**

5. After the Box application is created, click **Configure your application**.

6. Copy the **client_id** and the **client_secret**.

7. Input a **redirect_uri** (your app’s callback URL).

8. Select the appropriate **Scopes** for the application.

    {% include note.html content="“Read and write all files and folders” is required for most integrations. " %}
    ![Box Connected App step 3](img/EndpointSetupStep8.png)

Next [authenticate an element instance with {{page.heading}}](authenticate.html).
