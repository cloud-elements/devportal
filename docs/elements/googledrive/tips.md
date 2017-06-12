---
heading: Google Drive
seo: Tips | Google Drive | Cloud Elements API Docs
title: Tips
description: Google Drive Tips
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 21
parent: Back to Element Guides
order: 75
---

# Tips

The Tips section includes more information about the element including FAQs, endpoint limitations, and general tips.

{% include callout.html content="<strong>On this page</strong><br/><a href=#general>General</a><br/><a href=#events>Events</a> type="info" %}

## General

* Google Drive has a new optional parameter, mediaType, that allows you to specify the type for conversion from a native GoogleApp document. By default, Documents will be converted to MS Word, SpreadSheets to Excel, and Presentations to PowerPoints. (Ask Taylor if we need additional information)
* Google does not return a size for any google document including: sheets, docs, slides, forms, etc because these do not take up drive storage space.
* In order to receive every path of the file of the folder, the calculateFolderPath must be set to true.

## Events

* In order to use events with your own OAuth app, you must have a proxy server set up to verify the domain.
* Events are triggered in real time by Google Drive. This means that events will be triggered any time the document is saved in the google UI.
