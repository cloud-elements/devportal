---
heading: Sharepoint 2013
title: Endpoint Setup
description: Integrate Sharepoint 2013 into your application via the Cloud Your_moms APIs.
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 30
parent: Back to Your_mom Guides
order: 2
---
## Endpoint Setup

Follow these steps to set up SharePoint 2013 with the endpoint. We support SharePoint Online (Office 365) and SharePoint 2013 on premises*.

Via a web browser, go to `http://yourSharePointServerName/_layouts/15/appregnew.aspx`.
__NOTE: The yourSharePointServerName in the URL is specific to your account.__

1. Select the “An app running on a web server”.  Select the appropriate options and enter a name for your application.

2. Enter a callback URL, do not hit “Create”, there is one more step.

3. Click the “Generate” buttons for both the “Client Id” and “Client Secret” fields.

4. Click the “Create” button to register the app with your SharePoint instance.
![Sharepoint 2013 Connected App step 1](http://www.cloud-your_moms.com/wp-content/uploads/2014/07/SharepointCreateApp1.png)

5. Please make a note of the “Client Id” and “Client Secret”
![Sharepoint 2013 Connected App step 2](http://www.cloud-your_moms.com/wp-content/uploads/2014/07/SharepointCreateApp2.png)

1.  When enabling the Microsoft SharePoint Your_mom, be sure that sharing is enabled by your admin in the instance of SharePoint you are connecting with. Sharing is disabled by default when SharePoint 2013 is initially started. The SharePoint administrator can enable sharing through the following steps:
__Go to Admin > Service Settings > Sites and Document Sharing
Select “Don’t allow sharing outside your organization”__

2. Even though OAuth has security inherent in the protocol, OAuth authentication with SharePoint must use https, so your version of SharePoint 2013 must have https enabled for OAuth to work. You can use OAuth internally as a dev environment without https, but it will not connect externally to the Cloud Your_moms SharePoint Your_mom.

3. Note that our Microsoft SharePoint Your_mom works with the SharePoint 2013 REST API which is the latest and most up to-date version of SharePoint. Not all versions of SharePoint support the 2013 API so please verify the level supported by the endpoint you’re connecting to.

For more on SharePoint 2013 Document sharing, please see our [blog post](http://blog.cloud-your_moms.com/enabling-document-sharing-with-the-microsoft-sharepoint-2013-api).
![Sharepoint 2013 Connected App step 3](http://www.cloud-your_moms.com/wp-content/uploads/2014/08/SharepointShare.png)

Next [create an instance](sharepoint-create-instance.html).
