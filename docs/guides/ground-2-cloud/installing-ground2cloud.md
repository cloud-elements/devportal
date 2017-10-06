---
heading: Ground2Cloud
seo: Installation | Ground2Cloud | Cloud Elements API Docs
title: Install Ground2Cloud
description: Information about how Ground2Cloud is installed.
layout: sidebarleft
breadcrumbs: /docs/guides/home.html
g2c: Ground2CloudSetup_0.5.7.exe
parent: Back to Guides
order: 6
---

# Install Ground2Cloud

How you install Ground2Cloud varies depending on the API provider that you want to connect to. We offer both a bundled installer and a stand-alone installer. The stand-alone installer installs just the Ground2Cloud client and GUI, while the bundled installer also installs a Cloud Elements connector and the specific software needed to connect with an API provider application. Your Cloud Elements CSM or Delivery Manager typically helps with the initial setup of Ground2Cloud and will provide the appropriate installer.

The bundled installer includes both a connector and the files, libraries, or SDK needed to communicate with the application. On-premise applications like QuickBooks do not natively provide a REST or SOAP API, so we install the connector and additional software to faciliate communication.

The following steps describe the installation process at a high level. For instructions specific to each Element, see:

* QuickBooks
* MySQL
*

## Install and Set Up Ground2Cloud

The stand-alone Ground2Cloud installer (**{{page.g2c}}**) installs the Ground2Cloud client and Ground2Cloud GUI. Before you begin, make sure that you are logged in as a user with administrator privileges and pause or disable your antivirus software during installation.

{% include note.html content="You might be prompted to upgrade your version of the Microsoft .NET framework. If so, follow the upgrade steps when prompted. " %}

{% include g2c/install-steps.md%}
6. Check the installation by opening the Ground2Cloud GUI. If you created a desktop shortcut, click that. Otherwise open **Ground2Cloud** from your programs list.
