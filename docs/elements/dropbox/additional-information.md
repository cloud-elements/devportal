---
heading: Dropbox
seo: Additional Information | Dropbox | Cloud Elements API Docs
title: Additional Information
description: Additional Information regarding the Dropbox Element.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 1779
parent: Back to Element Guides
order: 50
sitemap: false
---

### Additional Information

__How can I test out the new Dropbox V2 Element?__

Dropbox V2 API is now supported within the Cloud Elements Platform.  We want to give customers a chance to test the Dropbox V2 Element within their application.  To access the new Element, please create an Instance using the key `dropboxv2`.  Please let [support](mailto:support@cloud-elements.com) know if you have any questions.

__What new features does the Dropbox V2 Element include within the Cloud Elements Platform?__

The V2 Element includes a `refId` for certain APIs.  This is the actual ID of the file sent back from Dropbox.  It can be used as the `ID` with all API calls with the exception of `GET /folders/{id}/contents`.

The `GET /folders/{id}/contents` does not support the `refId` at this time.

{% include padding-all.html %}

{% include padding-all.html %}

{% include padding-all.html %}
