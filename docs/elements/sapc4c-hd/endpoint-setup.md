---
heading: SAP C4C Helpdesk
seo: Endpoint Setup | SAP C4C Helpdesk | Cloud Elements API Docs
title: Endpoint Setup
description: Endpoint setup
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 1468
parent: Back to Element Guides
order: 5
---

# Endpoint Setup

To authenticate an element instance, use credentials associated with a Development User. The user credentials associated with an authenticated element instance must have access to any resources that you access.

To confirm or change access to resources:

1. Go to your SAP C4C application.
2. Click **Administrator** in the main menu, and then click **Business Users**.
![Administrator Page](../sapc4c-crm/img/admin.png)
2. Select your user in the list, and then click **Edit>Access Rights**.
3. Review the Work Center / View Name column for resources that you need access to.
4. Select **Assigned to User** for each resource, as shown for the Leads resource below.
![Leads Selected](../sapc4c-crm/img/leads.png)

    {% include note.html content="If you experience an error, click <strong>Edit without Business Roles</strong> at the top of the page and try again. " %}

6. Refresh your session by closing and logging back in.






Next [authenticate an element instance](authenticate.html).
