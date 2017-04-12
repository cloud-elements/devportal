---
heading: Ground2Cloud
seo: Creating an Element | Ground2Cloud | Cloud Elements API Docs
title: Creating an Element
description: How an Element can use Ground2Cloud
layout: sidebarleft
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 8
---

## Creating an Element

Once the Ground2Cloud client is installed and running, you can use its
public endpoint to make REST service calls to your private service. One
of the best ways to do that is to create a new Element. Using
Ground2Cloud with an Element allows you to apply Element benefits--error
handling, transformation, normalization, workflows, notifications, event
management and more--to any service connected with Ground2Cloud.

The details of creating and using each element are documented on the
[elements page](/docs/elements.html) elsewhere on this devportal site.
To use a Ground2Cloud service, simply replace the normal URL endpoint
with the Ground2Cloud endpoint listed on the GUI.

![Show Element](/assets/img/ground2cloud/g2c-gui-endpoint.png)

Here's an example for the QuickBooks Enterprise element: note that every
client will have a different endpoint listed.

![Creating an Element](/assets/img/ground2cloud/new-qb-element.png)

Some elements don't use an HTTP-based protocol to connect to their
service: for example, our Postgres, MySQL, and SQL Server elements use
the underlying native protocol to communicate directly with the
database. For these types of elements, you need to enter the host and
port shown on the G2C client.

![Creating a DB Element](/assets/img/ground2cloud/new-psql-element.png)
