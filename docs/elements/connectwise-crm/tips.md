---
heading: ConnectWise CRM
seo: Tips | ConnectWise CRM | Cloud Elements API Docs
title: Tips
description: ConnectWise CRM API Documentation.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 198
parent: Back to Element Guides
order: 75
---

# Tips

The Tips section includes more information about the element including FAQs, endpoint limitations, and general tips.

## WSDL Path

ConnectWise routinely changes the current WSDL version for the sandboxes they provide to developers, which can result in an error like:

        { "requestId": "587e64e1e4b0109b3b4637d6", "message": "Failed to connect to the API URL. Validate that you are using the correct WSDL path." }

If this occurs, you can find your updated WSDL path by logging in to ConnectWise and looking at the URL it redirects you to. For example, in the following URL the begining of the WSDL path appears after the ConnectWise URL:

        https://my.connectwise.com/v2017_2/ConnectWise.aspx?locale=en_US&session=...

The resulting WSDL path is `/v2017_2/apis/2.0/`.

## Bulk Metadata

For `POST /bulk/{objectName}` you must include the following in the metadata:

        "action":"create"

For `PATCH /bulk/{objectName}` you must include the following in the metadata:

        "identifierFieldName":"id"
