---
heading: Google Drive
seo: Tips | Google Drive | Cloud Elements API Docs
title: Tips
description: Frequently asked questions and notes on conventions.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 21
parent: Back to Element Guides
order: 50
---

## Tips

A note about Google Drive regarding folder naming conventions. Currently, users can have the same name for multiple folders. This could provide a potential challenge as the API call may be unsure of what path to take on some calls.

Also, Google Drive provides users the option to use the “/” to name a folder. This could also present a potential challenge as our API calls are resource based. With this extra “/” option, the resource URL could potentially be /folder///sub_folder. The API call would then register the path as | “folder” | “” | “” | “sub_folder” |.
