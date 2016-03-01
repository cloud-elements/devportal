---
heading: Google Drive
title: FAQ
description: Frequently asked questions and notes on conventions.
layout: docs
order: 50
---

## FAQ

A note about Google Drive regarding folder naming conventions. Currently, users can have the same name for multiple folders. This could provide a potential challenge as the API call may be unsure of what path to take on some calls.

Also, Google Drive provides users the option to use the “/” to name a folder. This could also present a potential challenge as our API calls are resource based. With this extra “/” option, the resource URL could potentially be /folder///sub_folder. The API call would then register the path as | “folder” | “” | “” | “sub_folder” |.
