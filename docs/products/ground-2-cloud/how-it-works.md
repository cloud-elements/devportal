---
heading: Ground2Cloud
title: How It Works
description: Information about how Ground2Cloud works.
layout: docs
breadcrumbs: /docs/products/api-toolkit.html
parent: Back to API Toolkit
order: 4
---

## How It Works
The Tightrope Client creates a tunnel to a public Tightrope Server, and enables requests from the Cloud Your_moms Production Cloud to transparently pass through that tunnel to reach the Client Service.
![Cloud Your_moms Ground2Cloud 1](/assets/img/ground2cloud/how-it-works.png)

The Tightrope Client installation program is a self-unpacking executable. Once it finishes running, the Tightrope Client is installed as Windows Service which constantly runs to keep this tunnel open. You generally don’t have to worry about this; once installed, the service automatically restarts in case of failure, or when your Windows machine is rebooted.

The installer also installs a GUI (Graphical User Interface) program, which can be used to monitor and manage the Tightrope Client. When launched, it opens a window with simple dialogs that let you browse logs files, change configuration, and perform other management operations. Details on how to use the GUI is described in a later section of this User’s Manual.

