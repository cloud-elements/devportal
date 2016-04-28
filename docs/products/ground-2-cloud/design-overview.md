---
heading: Ground2Cloud
title: Design Overview
description: Visual workflow about how Ground2Cloud works.
layout: docs
breadcrumbs: /docs/products/api-toolkit.html
parent: Back to API Toolkit
order: 3
---

## Ground2Cloud Design Overview

![Cloud Elements Ground2Cloud Design Overview](/assets/img/ground2cloud/design-overview.png)

### Summary

Cloud Elements Ground2Cloud is a system designed to maintain and manage a reverse SSH (sometime called a “forward in”) tunnel from a Client Service Provider host to the CE Ground2Cloud Server. While this tunnel exists, TCP (including HTTP) messages can be forwarded from a CE Element Instance to the tightrope server process named “petit-serverd”, which is listening on port 80; to the reverse-tunnel port (11081 in this example, although each client will receive their own dynamically-assigned port number); through the tunnel to the client process named “petit-clientd”; and finally to the Client Service. Routing a client request in this way allows an Element Instance to communicate with a Client Service, even when the Client Service Provider machine is generally not reachable.

### Server Configuration

The Ground2Cloud Server is installed via the use of a package manager; on the current Cloud Elements infrastructure, this means that petit-server is installed via a Debian “.deb” package. Generation and installation resources for this package are available on the “petit-linux” git repository at [https://github.com/cloud-elements/petit-linux](https://github.com/cloud-elements/petit-linux).

### Server Control

Control and monitoring of the petit is done via two channels: the upstart service, created by the debian package, that provides a top-level systemic view, and the node “petit-server” library which can provide more fine-grained control.
Coarse start / stop / status controls are available via linux upstart:

`$ sudo service petit-server status`

Fine-grained control is available using the node petit-server command (as of this writing, a convenience global “petit-server” command is planned, but not yet available).

`$ sudo node /opt/petit-server/node_modules/cloudelements-petit/lib/server/petit-server-bin.js status -c /root/.petit/config.toml`

Petit-server communicates with the running petit-serverd on its command port (default 3016). See the petit documentation at [https://github.com/cloud-elements/petit](https://github.com/cloud-elements/petit) for a full selection of petit server commands.

### Server Routing

Every time a Ground2Cloud Client registers, the Ground2Cloud Server assigns it a unique ID (in this example: “1001”), and associates that ID with a distinct SSH reverse proxy port number (“11081”). It is then able to inspect incoming HTTP “Host” header, and create a transparent HTTP proxy to the correct port based on the value it finds there.

### Client Configuration

The Ground2Cloud Client is installed on the same machine or subnet as the Client Service, and can pass HTTP requests through to some configurable port (shown here as 8080) that the Client Service is listening on. During installation, it registers itself with a public key, and receives a unique registration ID and ssh port number via “backchannel” communication to the Ground2Cloud client on port 3014. When running, it connects to the sshd daemon running on the server’s port 22 to establish a reverse SSH tunnel. All data received on this “main” channel is transparently forwarded to the configured client port.

“On Windows, a self-installing executable can be created and made generally available for users that don’t wish to install and manage Node themselves. The repository at [https://github.com/cloud-elements/petit-windows](https://github.com/cloud-elements/petit-windows) contains the resources and instructions for creating and using this installer.”

### Client Control

Clients can be controlled using the “petit-client” node library in the same way that “petit-server” can be used to control the server, communicating with its command port on 3015. See [https://github.com/cloud-elements/petit](https://github.com/cloud-elements/petit) for a full selection of petit client commands. Alternately, a GUI is available that serves the same purpose, as show below. See the associated git repository [https://github.com/cloud-elements/petit-gui](https://github.com/cloud-elements/petit-gui) for details on how to build and run this GUI.
![Cloud Elements Ground2Cloud Client Control 1](/assets/img/ground2cloud/client-control1.png)

When installed via the Windows self-installer, coarse-grained control (start / stop / pause) is available via normal windows services under the “CloudElementsConnect” name.
![Cloud Elements Ground2Cloud Client Control 2](/assets/img/ground2cloud/client-control2.png)
