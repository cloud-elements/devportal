---
heading: Ground2Cloud
seo: Design Overview | Ground2Cloud | Cloud Elements API Docs
title: Design Overview
description: Visual workflow about how Ground2Cloud works.
layout: sidebarleft
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 3
---

## Ground2Cloud Design Overview

![Cloud Elements Ground2Cloud Design Overview](/assets/img/ground2cloud/design-overview.png)

### Summary

Cloud Elements Ground2Cloud is a system designed to maintain and manage a reverse SSH (sometime called a “forward in”) tunnel from a Client Service Provider host to the CE Ground2Cloud Server. While this tunnel exists, TCP (including HTTP) messages can be forwarded from a CE Element Instance to the tightrope server process named “petit-serverd”, which is listening on port 80; to the reverse-tunnel port (11081 in this example, although each client will receive their own dynamically-assigned port number); through the tunnel to the client process named “petit-clientd”; and finally to the Client Service. Routing a client request in this way allows an Element Instance to communicate with a Client Service, even when the Client Service Provider machine is generally not reachable.

### Client Configuration

The Ground2Cloud Client is installed on the same machine or subnet as the Client Service, and can pass HTTP requests through to some configurable port (shown here as 8080) that the Client Service is listening on. During installation, it registers itself with a public key, and receives a unique registration ID and ssh port number via “backchannel” communication to the Ground2Cloud client on port 3014. When running, it connects to the sshd daemon running on the server’s port 22 to establish a reverse SSH tunnel. All data received on this “main” channel is transparently forwarded to the configured client port.
