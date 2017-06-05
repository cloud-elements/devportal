---
heading: Name of Element
seo: Endpoint Setup | Service provider setup | Salesforce Sales Cloud | Cloud Elements API Docs
title: Service Provider Setup
description: Service provider setup
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: nn
parent: Back to Element Guides
order: 5
---

# Service Provider Setup

To authenticate a {{page.heading}} element instance you must have the {{page.heading}} Enterprise edition or Professional edition with API support. Also, to set up a new application in {{page.heading}}, you must have Administrator privileges. Contact your system administrator if you do not have those privileges.

<span style="color:red">Use the first paragraph to specify any important information about what type of account is needed or if there are any requirements about the type of software.</span>

<span style="color:red">If there is nothing special to say, just use the following paragraph:</span>

To authenticate a {{page.heading}} element instance, complete the setup steps described in this section.

{% include note.html content="If there is a note needed, add it here.</a>" %}

To set up the service provider: <span style="color:red">The steps are going to differ widely. Try to only use screen shots where necessary, but by the end of the steps, the user should have the information needed to authenticate an instance with the service provider.</span>

1. Via a web browser, log in to your Salesforce account:
  * Sandbox: [https://test.salesforce.com/](https://test.salesforce.com/)
  * Production: [https://login.salesforce.com/](https://login.salesforce.com/)
1. If not already on the Setup page, [navigate to it](https://help.salesforce.com/articleView?id=basics_nav_setup.htm&type=0).
2. In the menu on the left, click __Apps__, and then click __App Manager__.
![Salesforce Connected App step 1](img/Apps.gif)
2. Click __New Connected App__.
3. Complete the Basic Information section.
4. In the API (Enable OAuth Settings) section, select __Enable OAuth Settings__.
5. Enter a Callback URL to redirect the user to after authentication. This URL will be in your application’s address space, and you will be required to retrieve some information returned on this URL by the endpoint.
6. In __Selected OAuth Scopes__, add the scopes needed from Available to Selected.
      {% include note.html content="At a minimum, you must select <strong>Full Access</strong> and <strong>Perform requests on your behalf at any time (refresh\_token_, offline\_access)</strong>." %}
8. Complete the remaining settings as needed for your app.
8. Click __Save__ at the bottom of the window.
9. Click __Continue__.
9. Note the following in the API (Enable OAuth Settings) section, which you will need to authenticate a Cloud Elements Salesforce element instance with Salesforce.
 * Consumer Key
 * Consumer Secret
 * Callback URL

![Salesforce Connected App step 3](img/salesforce-connected-app-3.png)

Next [authenticate an element instance with {{page.heading}}](authenticate.html).
