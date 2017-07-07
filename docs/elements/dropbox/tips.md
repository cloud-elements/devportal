---
heading: Dropbox
layout: sidebarelementdoc
seo: Tips | Dropbox | Cloud Elements API Docs
title: Tips
description: Tips regarding the Dropbox Element.
breadcrumbs: /docs/elements.html
elementId: 1779
parent: Back to Element Guides
order: 50
sitemap: false
---

# Tips
The Tips section includes more information about the element including FAQs, endpoint limitations, and general tips.

{% include callout.html content="<strong>On this page</strong><br/><a href=#general>General</a><br/><a href=#dropbox V2>Dropbox V2</a>" type="info" %}


## General

* Dropbox files that have not been permanently deleted will still exist in your Trash folder and will generate an `UPDATED` event type if they are recreated.

## Dropbox V2

* Dropbox V2 API is now supported within the Cloud Elements Platform.  We want to give customers a chance to test the Dropbox V2 Element within their application.  To access the new Element, please create an Instance using the key `dropboxv2`.  

* The V2 Element includes a `refId` for certain APIs.  This is the actual ID of the file sent back from Dropbox.  It can be used as the `ID` with all API calls with the exception of `GET /folders/{id}/contents`.

The `GET /folders/{id}/contents` does not support the `refId` at this time.

{% include padding-all.html %}

{% include padding-all.html %}

{% include padding-all.html %}
