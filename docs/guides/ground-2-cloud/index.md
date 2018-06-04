---
heading: Ground2Cloud
seo: Overview | Ground2Cloud | Cloud Elements API Docs
title: Overview
description: Overview Guide explaining the Cloud Elements Ground2Cloud On-Prem Connector.
layout: sidebarleft
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 1
sitemap: false
redirect_from:
  - /docs/products/ground-2-cloud/
---

# Overview

Ground2Cloud helps connect to an API provider application that runs in a private cloud which is not publicly available, like QuickBooks Enterprise or MySQL. Cloud Elements Ground2Cloud manages a reverse SSH (sometime called a “forward in”) tunnel from the application to the Cloud Elements Ground2Cloud Server. The Ground2Cloud Client creates a tunnel to the public Ground2Cloud Server, and enables requests from the Cloud Elements Production Cloud to transparently pass through that tunnel to reach the application running in the private cloud.
![Cloud Elements Ground2Cloud 1](/assets/img/ground2cloud/how-it-works.png)

The Ground2Cloud Client installation program is a self-unpacking executable. The Ground2Cloud Client runs as Windows service which constantly runs to keep the tunnel open. Once installed, the service automatically restarts in case of failure, or when the Windows machine is rebooted.

Ground2Cloud also includes a GUI (Graphical User Interface), which you can use to monitor and manage the Ground2Cloud Client. The Ground2Cloud GUI includes a window with simple dialogs that let you browse logs files, change configuration, and perform other management operations.

## Design Overview

![Cloud Elements Ground2Cloud Design Overview](/assets/img/ground2cloud/design-overview.png)

While the tunnel created by Ground2Cloud exists, TCP (including HTTP) messages can be forwarded from an authenticated element instance to the tightrope server process named “petit-serverd”, which is listening on port 80. Messages are forwarded again to the reverse-tunnel port (11081 in this example).  Messages continue through the tunnel to the client process named “petit-clientd”, and finally to the API provider application. Routing a client request in this way allows an authenticated element instance to communicate with an application, even when the machine is generally not reachable.

Install the Ground2Cloud Client on the same machine or subnet that runs the application that you want to connect to. The client can pass HTTP requests through to some configurable port (shown here as 8080) that the API provider application is listening on. During installation, it registers itself with a public key, and receives a unique registration ID and ssh port number via “backchannel” communication to the Ground2Cloud client on port 3014. When running, it connects to the [OpenSH SSH (sshd) daemon](https://man.openbsd.org/sshd) daemon running on the server’s port 22 to establish a reverse SSH tunnel. All data received on this “main” channel is transparently forwarded to the configured client port.

## Requirements

Ground2Cloud works with following Elements:

* QuickBooks Enterprise
* Microsoft SQL Server
* MySQL
* PostgreSQL

The Ground2Cloud Client runs machine running the following versions of Windows:

* Windows 7
* Windows 8
* Windows 10
* Windows Server 2012
* Windows Server 2016

If the machine running the application is not on Windows, you can still install the client via [npm](https://www.npmjs.com/get-npm).
