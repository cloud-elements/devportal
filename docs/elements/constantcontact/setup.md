---
heading: Name of Element
seo: API Provider Setup | API provider setup | Name of Element | Cloud Elements API Docs
title: API Provider Setup
description: Setup tasks required to authenticate an element instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: nn
elementKey: key
parent: Back to Element Guides
order: 5
---

# API Provider Setup

To authenticate a {{page.heading}} element instance you must have a registered app and the associated **API Key** and **API Secret**.

Find the most up-to-date information in the [{{page.heading}} API Keys documentation](#https://developer.constantcontact.com/api-keys.html).

To register an app and get your key and secret:

1. Log in to the {{page.heading}} [Mashery page(https://constantcontact.mashery.com/)].
1. Follow the steps provided to register your app.
2. Record the **Key** and **Secret** that {{page.heading}} shows you after you create the account.
3. Click the my account link.
4. Click Applications.
5. Edit the application you just created.
6. In Redirect URI for OAuth calls, enter the ...
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
