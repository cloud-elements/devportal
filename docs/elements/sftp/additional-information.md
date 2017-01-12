---
heading: SFTP
seo: Additional Information | SFTP | Cloud Elements API Docs
title: Additional Information
description: SFTP FAQ.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 450
parent: Back to Element Guides
order: 50
---

### Additional Information about the SFTP Element

__Accessing Files__

If a `home_directory` is not provided in the `instance.json` configuration, then the top level `root` folder will be accessed when making API calls.

This will translate into having to put a full `path` when trying to access a file or folder.

Instances may be created to a specific file path e.g. `/home/documents/test`

Only files in the `/home/documents/test` folder can be accessed using this specific instance.

{% include padding-all.html %}

{% include padding-all.html %}

{% include padding-all.html %}

{% include padding-all.html %}
