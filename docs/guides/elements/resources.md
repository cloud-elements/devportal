---
valeOff: <!-- vale off -->
heading: Manage, Build and Extend Elements
seo: Element Info | Elements | Cloud Elements API Docs
title: Element Builder Resources
description: Defining element name and authentication
layout: sidebarleft
apis: API Docs
platform: elementsbuilder
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 40
ValeOn: <!-- vale on -->
---

# Element Builder Resources

{% include workflow.html displayNames="Info,Properties,Authentication,Config & Parameters,Hooks,Events,Resources" links="define-info.html,properties.html,auth.html,config.html,hooks.html,events.html,resources.html" active="Resources"%}



After you set up your element, you can add resources to start making requests. As you create new resources, keep the API documentation of the API provider close. You will refer to it often.

The last step in setting up an element is to add resources to it. To add a resource, click **Resources** in the toolbar. After you arrive on the editable Resources page, follow the instructions in [Define New Resources](#define-new-resources).
![My Resources](img/eb-my-resources.png)


Certain resources automatically appear based on the hub. For example, if you create an element in the CRM hub, Cloud Elements creates endpoints resources like accounts, contacts, leads, and opportunities. The resources created differ from hub to hub, but we will always create the following resources:

* /ping
* /objects
* /objectName

{% include note.html content="Throughout this section, we provide several examples. To keep them consistent, we are using the use case of adding a <code>/deals</code> resource to a CRM element.  " %}

{% include callout.html content="<strong>On this page</strong></br><a href=#define-new-resources>Define New Resources</a></br><a href=#delete-endpoints>Delete Endpoints</a></br><a href=#copy-endpoints>Copy Endpoints</a></br><a href=#chaining-resources>Chaining Resources</a>" type="info" %}

{% include elements-guide/define-new-resource.md%}