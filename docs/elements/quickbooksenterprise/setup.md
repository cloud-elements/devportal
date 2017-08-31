---
heading: Quickbooks Enterprise
seo: API Provider Setup | API provider setup | Name of Element | Cloud Elements API Docs
title: API Provider Setup
description: Setup tasks required to authenticate an element instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 195
elementKey: quickbooksonprem
parent: Back to Element Guides
order: 5
---

# API Provider Setup

To authenticate a {{page.heading}} you need to install Ground2Cloud and the Cloud Elements QuickBooks Connector (CE Connector) on the machine running QuickBooks. Ground2Cloud and the CE Connector enable the Cloud Elements servers to communicate with an on premise installation of Quickbooks Enterprise.

After you install Ground2Cloud and the CE Connector, use the **Configured Application Name** and **Host Name/IP** to authenticate an element instance. If you already installed Ground2Cloud and just need to locate your information, see [Locate Credentials for Authentication](#locate-credentials-for-authentication). If you need to install Ground2Cloud, see [Install Ground2Cloud](#install-ground2cloud)

{% include callout.html content="<strong>On this page</strong></br><a href=#locate-credentials-for-authentication>Locate Credentials for Authentication</a></br><a href=#create-an-application>Create an Application</a></br><a href=#set-up-events>Set Up Events</a>" type="info" %}

## Locate Credentials for Authentication

If you already installed Ground2Cloud and the CE Connector, follow the steps below to locate the **Configured Application Name** and **Host Name/IP**.

To find authentication information:

1. Open the CE Connector.
2. Find the **Configured Application Name** under **Authorize**.
3. Find the **Host Name/IP** under Registrations.
![Authentication Information](img/info.png)

## Install and Set Up Ground2Cloud

Your Cloud Elements CSM or Delivery Manager typically helps with the initial setup of Ground2Cloud and the CE Connector. The following steps describe the installation process at a high level.

1. Run the Ground2Cloud Setup Wizard.

    After installing Ground2Cloud, the wizard prompts you to install the CE Connector application.

3. Click **Install**.
4. Finish the Ground2Cloud Setup Wizard.

    To connect to QuickBooks, you must authorize the CE Connector as an application.

4. Click **Edit**, and then click **Authorize**.
![Authorize](img/authorize.png)
4. In **Authorized App Name** enter a name for the connection. The name is used as the **Configured Application Name** when you authenticate an element instance.
![Authorization Window](img/auth-window.png)
5. Keep the default port number and click **OK**.
6. Note the url under Registrations. This is used as the **Host Name/IP** when you authenticate an element instance.
If you have not created an application, you need one to authenticate with {{page.heading}}.

Next [authenticate an element instance with {{page.heading}}](authenticate.html).
