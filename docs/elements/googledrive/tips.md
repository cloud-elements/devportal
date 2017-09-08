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

{% include callout.html content="<strong>On this page</strong><br/><a href=#general>General</a><br/><a href=#get-files>Get files</a><br/><a href=#get-search>GET search</a><br/><a href=#events>Events</a>" type="info" %}

## General

Google does not return a size for any Google document including sheets, docs, slides, forms, etc because these do not take up drive storage space.

## GET files

Use the `mediaType` parameter to specify the type for conversion from a native GoogleApp document. By default, Documents will be converted to MS Word, SpreadSheets to Excel, and Presentations to PowerPoints.

## GET search

To receive every path of the file of the folder, set `calculateFolderPath` to true.

## Events

* To use events with your own OAuth app, you must have a proxy server set up to verify the domain.
* Events are triggered in real time by Google Drive. This means that events will be triggered any time the document is saved in the Google UI
* Google Drive reports Created events differently depending on whether the file is created through the UI or via API. When created in the UI, Google returns a Created event. When created via API, the event type is inferred based on the difference between the created time and modified time. If the Created Time and the Modified Time are within 1000ms, we treat the event as a Created event
* Deleting a file or folder in the UI results in an updated event because the object is moved to the trash. When you empty the trash, you will receive a deleted event.
