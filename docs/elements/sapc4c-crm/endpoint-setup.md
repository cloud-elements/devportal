---
heading: SAP Hybris Cloud for Customer CRM
seo: Endpoint Setup | SAP Hybris Cloud for Customer CRM | Cloud Elements API Docs
title: Service Provider Setup
description: Endpoint setup
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 3521
parent: Back to Element Guides
order: 5
---

# Service Provider Setup

To authenticate an element instance, use credentials associated with a Development User. The user credentials associated with an authenticated element instance must have access to any resources that you access.

To confirm or change access to resources:

1. Go to your SAP Hybris Cloud for Customer application.
2. Click **Administrator** in the main menu, and then click **Business Users**.
![Administrator Page](img/admin.png)
2. Select your user in the list, and then click **Edit>Access Rights**.
3. Review the Work Center / View Name column for resources that you need access to.
4. Select **Assigned to User** for each resource, as shown for the Leads resource below.
![Leads Selected](img/leads.png)

    {% include note.html content="If you experience an error, click <strong>Edit without Business Roles</strong> at the top of the page and try again. " %}

6. Refresh your session by closing and logging back in.






Next [authenticate an element instance](authenticate.html).
