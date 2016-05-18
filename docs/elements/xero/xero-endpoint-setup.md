---
heading: Xero
seo: Endpoint Setup | Xero | Cloud Elements API Docs
title: Endpoint Setup
description: Endpoint setup
layout: docs
breadcrumbs: /docs/elements.html
elementId: 40
parent: Back to Element Guides
order: 5
---

## Endpoint Setup

Follow these steps to set up a Xero Application with the endpoint.Via a web browser go to:  [https://api.xero.com](https://api.xero.com) and login.

1. Go to the My Applications > Add Application screen in the Xero Developer portal to add your application.
![Xero Connected App step 1](http://cloud-elements.com/wp-content/uploads/2014/10/Xero2.png)

2. Fill out App Information and click save.
![Xero Connected App step 2](http://cloud-elements.com/wp-content/uploads/2014/10/Xero3.png)

3. Click on the app from you list and make note of the consumer key and consumer secret as they are needed for the provisioning process.
![Xero Connected App step 3](http://cloud-elements.com/wp-content/uploads/2014/10/Xero4.png)

XERO PARTNER AND PUBLIC APPLICATIONS

The default setting for new Xero applications is as a public app.

A public application requires OAuth refresh tokens to be renewed every 30 minutes.

In order to avoid this process, please apply to your application upgraded to a Partner app.  See the full article more information on the application process for a [Xero Partner Application](https://developer.xero.com/documentation/getting-started/partner-applications/).

Cloud Elements supports provisioning an instance to both Public and Partner Applications.

Next [create an instance](xero-create-instance.html).
