---
heading: Dropbox
seo: Authenticate | Dropbox | Cloud Elements API Docs
title: Authenticate
description: Authenticate
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 1779
elementKey: dropbox
parent: Back to Element Guides
order: 20
---

{% include Elements/dropbox/authenticate.md %}

## Example Response for an Authenticated Element Instance

```json
{
  "id": 58992,
  "name": "API Instance",
  "createdDate": "2017-08-03T14:41:52Z",
  "token": "5MOxxxxxxxxxxxxxxxxxxxxxxxxx",
  "element": {
      "id": 14,
      "name": "Dropbox",
      "key": "dropbox",
      "description": "Add a Dropbox Instance to connect your existing Dropbox account to the Cloud Storage and Documents Hub, allowing you to manage files and folders. You will need your Dropbox account information to add an instance.",
      "image": "elements/provider_dropbox.png",
      "active": true,
      "deleted": false,
      "typeOauth": true,
      "trialAccount": false,
      "configDescription": "If you do not have an Dropbox account, you can create one at <a href=\"http://www.dropbox.com\" target=\"_blank\">Dropbox Signup</a>",
      "signupURL": "http://www.dropbox.com",
      "transformationsEnabled": false,
      "bulkDownloadEnabled": false,
      "bulkUploadEnabled": false,
      "cloneable": false,
      "extendable": false,
      "beta": false,
      "authentication": {
        "type": "oauth2"
      },
      "extended": false,
      "hub": "documents",
      "protocolType": "http",
      "parameters": [  ],
      "private": false
    },
    "provisionInteractions": [  ],
    "valid": true,
    "disabled": false,
    "maxCacheSize": 0,
    "cacheTimeToLive": 0,
    "configuration": {  },
    "eventsEnabled": false,
    "traceLoggingEnabled": false,
    "cachingEnabled": false,
    "externalAuthentication": "none",
    "user": {
        "id": 12345
    }
  }
```
