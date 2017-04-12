---
heading: Event Management
seo: Event Management | Cloud Elements API Docs
title: Provisioning via Console
description: View the Event Management Guide explaining the Cloud Elements Events Framework.
layout: sidebarleft
breadcrumbs: /docs/platform/platform-docs.html
parent: Back to Platform Docs
order: 10
sitemap: false
---

### Provisioning

Elements can be provisioned with Event Management Integration via the Manager Console or APIs. [Click here for provisioning via APIs](provisioning-apis.html).

#### **Provisioning via Manager Console**

__Dropbox__ will be used for most of this demonstration.  However the
majority of our Elements support events.

To start, sign into the Elements Manager and click "Elements Catalog"
![Cloud Elements Events 2](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuide1.png)

Click "Documents"
![Cloud Elements Events 3](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuide2.png)

Click "Create Instance for Dropbox"
![Cloud Elements Events 4](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuide3.png)

Click "+"
![Cloud Elements Events 5](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuide4.png)

The "Provision It" tab is where you set the event configuration. In the
Box example, you provide a name and tagging selection as normal (tagging
is optional so you may leave it set to “No”). To enable notifications,
select “True” on the "Enable/Disable Event Notifications" option, and
enter the callback URL to your application. Once your event
configuration is to your liking, click "Next".
![Cloud Elements Events 6](http://cloud-elements.com/wp-content/uploads/2015/01/DropboxCreateInstance11.png)

**Sidenote**: If an Element supports polling, then you may be asked for
the event poller refresh internal (in minutes). Depending on the
Element, you may also be asked for one of the the following: (1) Polling
objects: a comma-separated list of objects to poll for, as shown in the
Salesforce Element ...
![Cloud Elements Event Config GUI](/assets/img/events/events-objects-console.png)

... (2) polling URLs: a line-by-line list of objects, pipe-separated
with a URL template that retrieves that object; demonstrated in this
Sharepoint Element ...
![Cloud Elements Event Config GUI](/assets/img/events/events-urls-console.png)

... or (3) a polling configuration JSON block, which allows for even
tighter control over polling. Here you can see the start of that
configuration in this Stripe Element configuration.
![Cloud Elements Event Config GUI](/assets/img/events/events-config-console.png)
The details of the configuration JSON are described below in the section
titled "Polling Configuration": it's the same JSON format used when creating an instance via our APIs.

**Let's return** now to the Dropbox demo, where we've been redirected to
the Dropbox Login page. As per the typical OAuth Web Flow, login to your
Dropbox Account and click "Allow":
![Cloud Elements Events 7](http://cloud-elements.com/wp-content/uploads/2015/01/DropboxCreateInstance22.png)

And finally, click "Done". (As always, you can enter some tag
information here to help track your Element instances.)
![Cloud Elements Events 8](http://cloud-elements.com/wp-content/uploads/2015/01/DropboxCreateInstance31.png)

And that's it! You've successfully provisioned a new Element instance
with notifications via our Console UI.

[Provision via APIs](provisioning-apis.html)
