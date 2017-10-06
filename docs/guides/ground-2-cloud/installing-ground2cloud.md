---
heading: Ground2Cloud
seo: Installation | Ground2Cloud | Cloud Elements API Docs
title: Install Ground2Cloud
description: Information about how Ground2Cloud is installed.
layout: sidebarleft
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 6
---

# Install Ground2Cloud

How you install Ground2Cloud varies depending on the API provider that you want to connect to. We offer both a bundled installer and a stand-alone installer. The stand-alone installer installs just the Ground2Cloud client and GUI, while the bundled installer also installs a Cloud Elements connector and the specific software needed to connect with an API provider application.

Your Cloud Elements CSM or Delivery Manager typically helps with the initial setup of Ground2Cloud and the CE Connector application.

The following steps describe the installation process at a high level. For instructions specific to each Element, see:

* QuickBooks
* MySQL
*

There are actually two different types of installers: a __Standalone Installer__, and __Bundled Installer__. The Standalone Installer installs only the Ground2Cloud Client and GUI. The Bundled Installer installs those things, __and additional software__ for specific types of Client Services.

For example, QuickBooks Enterprise requires the Intuit QuickBooks SDK and a protocol translator program named “Cloud Elements QuickBooks Connector” to be installed before the Cloud Elements Platform can communicate with it. So, the __Ground2Cloud Bundled Installer For QuickBooks__ also attempts to install all of those things, in addition to the Ground2Cloud Client itself.

You should download the Standalone Installer if your Client Service works out-of-the-box with Cloud Elements Instances. Generally, these types of Client Services natively provide a REST or SOAP API. Or, download the Standalone Installer if you have separately installed all of the other required software for Client Service.

Download the Bundled Installer if you know what kind of Client Service you have, and have not installed (or are not sure if you have) all of the necessary connecting software. Contact your Cloud Elements representative if you have questions about the type of service you have, what installer type you need to download, and/or what other pieces of software need to be installed.


### Choosing an Installer

As mentioned in the previous section, you need to choose which installer program you want to run. Download the Unbundled Installer (named `Ground2CloudSetup.exe`) if you use a service that doesn’t require additional software, or for which you’ve already installed all the required software. Download a Bundled Installer (named, for example, `Ground2CloudQbSetup.exe` for the Bundled Installer For QuickBooks) if you also want to install additional software specific for your service.

### Starting the Installer

Double-click on the installer, where ever you have installed it. Alternately, some browsers will let you run a program as soon as it’s completed it’s download, so that will work, too. You need to be logged in as a user with administrator privileges to install the Ground2Cloud Client. You should also pause or disable your Anti-Virus software while running the installation program.

Once started, the installer will walk you through some installation prompts, asking if you want to authorize the installation ...
![Cloud Elements Ground2Cloud Install 1](/assets/img/ground2cloud/installing1.png)

… if you want to install a desktop shortcut for the GUI …
![Cloud Elements Ground2Cloud Install 2](/assets/img/ground2cloud/installing2.png)

… and to confirm your installation choices …
![Cloud Elements Ground2Cloud Install 3](/assets/img/ground2cloud/installing3.png)

… once you have gone through these prompts, installation will run. It should only take a few minutes, depending on the speed of your Windows machine.
![Cloud Elements Ground2Cloud Install 4](/assets/img/ground2cloud/installing4.png)

### Finishing the Installer

![Cloud Elements Ground2Cloud Install 5](/assets/img/ground2cloud/installing5.png)

Once the installer is finished, you’re done! The Ground2Cloud Client is now installed and running on your Windows Desktop or Windows Server machine, and is forwarding all tunneled requests to your Client Service. You can go about your business, confident that your service is being utilized to its fullest, via integration with the Cloud Elements Platform. Or, you can read the next section “Managing Ground2Cloud”, and use the installed GUI to view and manage your Ground2Cloud installation.





### QuickBooks Only
The following sections are only applicable for the Ground2Cloud Bundled Installer For QuickBooks. Skip this section if you’re using the Standalone Installer, or if you’re using a different flavor of Bundled Installer.
Installing the QuickBooks SDK
The Bundled Installer For QuickBooks will attempt to install or upgrade your version of the QuickBooks Software Development Kit (SDK), a set of routines that Intuit provides to grant programs access to your QuickBooks data.

You’ll need to click through a number of prompts, including a terms of service agreement, user group, setup type, and confirmation screen. The default values for these screens usually works the best, unless you are familiar with the QuickBooks SDK, and want to craft custom installation options.

If your QuickBooks program is currently running, you may also be asked to shut it down while the SDK is installed. This is fine: you’ll be able to restart QuickBooks and pick up where you left off when the installation is complete.

Finally, the QuickBooks SDK installer might finishing by opening up a “Getting started with the QuickBooks SDK” web page. Unless you’re curious about how the SDK technology works, feel free to close this page.
![Cloud Elements Ground2Cloud QuickBooks 1](/assets/img/ground2cloud/quickbooks1.png)

![Cloud Elements Ground2Cloud QuickBooks 2](/assets/img/ground2cloud/quickbooks2.png)

![Cloud Elements Ground2Cloud QuickBooks 3](/assets/img/ground2cloud/quickbooks3.png)

![Cloud Elements Ground2Cloud QuickBooks 4](/assets/img/ground2cloud/quickbooks4.png)

![Cloud Elements Ground2Cloud QuickBooks 5](/assets/img/ground2cloud/quickbooks5.png)

![Cloud Elements Ground2Cloud QuickBooks 6](/assets/img/ground2cloud/quickbooks6.png)

#### Installing the QuickBooks Connector

The QuickBooks Connector is the other piece of software required for QuickBooks Element integration. The Bundled Installer For QuickBooks will prompt you for authorization to install, and then will open up the QuickBooks Connector window. You can minimize the Connector for now; you’ll need to return to it in the next sub-section “Authorizing the QuickBooks Connector”.
![Cloud Elements Ground2Cloud QuickBooks 7](/assets/img/ground2cloud/quickbooks7.png)

![Cloud Elements Ground2Cloud QuickBooks 8](/assets/img/ground2cloud/quickbooks8.png)

#### Upgrading .NET Software

During installation of the QuickBooks Connector, your Windows operating system may determine that you need to upgrade your version of the Microsoft .NET framework. This is fine: just follow the steps shown, and you will have the latest applicable version of .NET, which is used by a vast array of programs and utilities.
![Cloud Elements Ground2Cloud QuickBooks 9](/assets/img/ground2cloud/quickbooks9.png)

#### Authorizing the QuickBooks Connector

Once the QuickBooks Connector is installed, it needs to be authorized by you in your QuickBooks file before it is allowed to access any data; this is a security feature provided by Intuit and QuickBooks.
![Cloud Elements Ground2Cloud QuickBooks 10](/assets/img/ground2cloud/quickbooks10.png)
