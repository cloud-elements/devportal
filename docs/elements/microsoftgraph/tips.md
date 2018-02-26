---
heading: Microsoft Graph
seo: Tips | Microsoft Graph | Cloud Elements API Docs
title: Tips
description: Microsoft Graph Tips
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 5836
parent: Back to Element Guides
order: 75
---

# Tips

The Tips section includes more information about the element including FAQs, endpoint limitations, and general tips.

## Set up webhooks for extended elements

Currently webhooks for Microsoft Graph support events for the calendar. Meaning events that are accepted or posted on your default calendar will trigger an event. If you need events for other resources (if you extend your element and want webhooks on the extended endpoints or if you want events on a specific element) you can edit the webhook in the element configuration by updating the `webhooks` resource:

To update webhooks:

7. Hover over the element card and then click **My Resources**.
2. Edit the `webhooks` resource.
4. In the PreRequest Hook change the body to have the resource of the event you are polling on.
![Key secret and URL](./img/UpdateWebHooks.gif)
