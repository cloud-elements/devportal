---
heading: Build Custom Elements
seo: Element Info | Elements | Cloud Elements API Docs
title: Add Resources
description: Defining element name and authentication
layout: sidebarleft
apis: API Docs
platform: elementsbuilder
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 30
---

# Add Resources

## Step 1: define the resource

To add a resources:

1. Switch to Edit Mode.
2. Click Add Resources.
3. If the resource is a child resource to another resource, switch **Is this a child resource?** on.
3. Create your resource name and map it: <do we need to add that you do or don't need the slash?>
  * In **Cloud Elements Resource Name** enter the name of the resource as you want it to appear in the API docs and in requests.
  * In **Vendor Resource Name** enter the name of the resource at the API provider.
3. Enter the following fields needed to ???
  * Primary Key
  * Created Date Key
  * Updated Date Key
4. Select the methods to use to interact with the resource.
5. Click **Go**.
![Add Resource Step 1](img/add-resource.png)

You move to the endpoint step

## Configure the endpoint

Endpoints are configured with some defaults:

* GET
  * where
  * page
  * pageSize
  *

To configure the endpoint:

1. On the endpoints tab, select the endpoint to configure, and then click **Go**.
2. Each parameter include as Cloud Elements side and a vendor side 
