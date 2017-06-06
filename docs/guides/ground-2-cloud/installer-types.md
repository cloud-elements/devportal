---
heading: Ground2Cloud
seo: Installer Types | Ground2Cloud | Cloud Elements API Docs
title: Installer Types
description: Information about Ground2Cloud installer types.
layout: sidebarleft
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 5
---

## Installer Types

{% include favicon.html %}

There are actually two different types of installers: a __Standalone Installer__, and __Bundled Installer__. The Standalone Installer installs only the Ground2Cloud Client and GUI. The Bundled Installer installs those things, __and additional software__ for specific types of Client Services.

For example, QuickBooks Enterprise requires the Intuit QuickBooks SDK and a protocol translator program named “Cloud Elements QuickBooks Connector” to be installed before the Cloud Elements Platform can communicate with it. So, the __Ground2Cloud Bundled Installer For QuickBooks__ also attempts to install all of those things, in addition to the Ground2Cloud Client itself.

You should download the Standalone Installer if your Client Service works out-of-the-box with Cloud Elements Instances. Generally, these types of Client Services natively provide a REST or SOAP API. Or, download the Standalone Installer if you have separately installed all of the other required software for Client Service.

Download the Bundled Installer if you know what kind of Client Service you have, and have not installed (or are not sure if you have) all of the necessary connecting software. Contact your Cloud Elements representative if you have questions about the type of service you have, what installer type you need to download, and/or what other pieces of software need to be installed.

[Download Ground2Cloud](https://github.com/cloud-elements/g2c-releases/releases)

[Download Ground2Cloud for QuickBooks Only](https://github.com/cloud-elements/g2c-releases/releases)

