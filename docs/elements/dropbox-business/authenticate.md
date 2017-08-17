---
heading: Dropbox Business
seo: Create Instance | Dropbox Business | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 1780
elementKey: dropboxbusiness
parent: Back to Element Guides
order: 20
---

{% include Elements/dropbox/authenticate.md %}

## Example Response for an Authenticated Element Instance

```json
{
  "id": 123,
  "name": "Test",
  "token": "5MOr3Sl/E4kww6mTjmjBYV/hAUAzz1g=",
  "element": {
      "id": 22,
      "name": "Dropbox Business",
      "key": "dropboxbusiness",
      "description": "Add a Dropbox Business Instance to connect your existing Dropbox Business account to the Documents Hub, allowing you to manage files and folders. You will need your Dropbox Business account information to add an instance.",
      "image": "elements/provider_dropbox.png",
      "active": true,
      "deleted": false,
      "typeOauth": true,
      "trialAccount": false,
      "existingAccountDescription": "Give your application access to your existing
   Dropbox Business accountEnter your credentials and details for your Dropbox Business Account",
      "configDescription": "If you do not have an Dropbox Business.net account, you can create one at Dropbox Business.Net Signup",
      "transformationsEnabled": false,
      "authentication": {
        "type": "oauth2"
      },
      "hub": "documents"
    },
    "provisionInteractions": [],
    "valid": true,
    "disabled": false,
    "maxCacheSize": 0,
    "cacheTimeToLive": 0,
    "eventsEnabled": false,
    "cachingEnabled": false
  }
```
