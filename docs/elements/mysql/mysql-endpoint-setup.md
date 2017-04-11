---
heading: MySQL
seo: Endpoint Setup | MySQL | Cloud Elements API Docs
title: Endpoint Setup
description: Integrate a MySQL Database via the Cloud Elements APIs.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 479
parent: Back to Element Guides
order: 2
---

## Endpoint Setup

Cloud Elements supports two ways of connecting a Database:
* Connect Directly via IP Address and Port Number
* Use Cloud Elements [Ground2Cloud](/docs/products/ground-2-cloud/index.html) service

{% include padding-all.html %}

###  Option 1: Connecting Directly via IP Address and Port Number

This method would require a port be exposed so a connection can be made with Cloud Elements.
When creating an instance, the user would input the IP Address and Port Number exposed publicly.

{% include padding-all.html %}

###  Option 2: Connecting via Ground2Cloud

The Ground2Cloud integration consists of two parts: Client and Server.
The Ground2Cloud Client creates a tunnel to a public Ground2Cloud Server, and enables requests from the Cloud Elements Production Cloud to transparently pass through that tunnel to reach the Client Service.
![Cloud Elements Ground2Cloud 1](/assets/img/ground2cloud/how-it-works.png)

The Ground2Cloud Client installation program is a self-unpacking executable. Once it finishes running, the Ground2Cloud Client is installed as Windows Service which constantly runs to keep this tunnel open. You generally don’t have to worry about this; once installed, the service automatically restarts in case of failure, or when your Windows machine is rebooted.

The installer also installs a GUI (Graphical User Interface) program, which can be used to monitor and manage the Ground2Cloud Client. When launched, it opens a window with simple dialogs that let you browse logs files, change configuration, and perform other management operations. Details on how to use the GUI is described in the [User’s Manual](/docs/products/ground-2-cloud/index.html).

If you are interested in using our Ground2Cloud Service, please [contact us](info@cloud-elements.com) for details.

{% include padding-all.html %}

Next [create an instance](mysql-create-instance.html).
