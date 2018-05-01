---
heading: Infusionsoft Marketing Automation
seo: Create Instance | Infusionsoft Marketing | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 192
elementKey: infusionsoftmarketing
apiKey: client_id #In OAuth2 this is what the provider calls the apiKey, like Client ID, Consumer Key, API Key, or just Key
apiSecret: client_secret #In OAuth2 this is what the provider calls the apiSecret, like Client Secret, Consumer Secret, API Secret, or just Secret
callbackURL: Callback URL  #In OAuth2 this is what the provider calls the callbackURL, like Redirect URL, App URL, or just Callback URL
parent: Back to Element Guides
order: 20
---

{% include Elements/infusionsoft/authenticate.md%}

## Example Response for an Authenticated Element Instance

```json
{
  "id": 1234,
  "name": "Test",
  "token": "a5y4EtYt+ZYRpnIBD7gkQtthDebK8qKVU=",
  "element": {
    "id": 126,
    "name": "Infusionsoft Beta",
    "key": "infusionsoftmarketing",
    "description": "Add an Infusionsoft Instance to connect your existing Infusionsoft account to the Marketing Hub, allowing you to manage contacts, leads, accounts, opportunities etc. across multiple Marketing Elements. You will need your Infusionsoft account information to add an instance.",
    "image": "http://www.sagepay.co.uk/files/styles/img_220x220/public/partner-logo/infusionsoft-220px.png?itok=yDDuLcdL",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "resources": [],
    "transformationsEnabled": true,
    "authentication": {
      "type": "oauth2"
    },
    "hub": "marketing",
    "parameters": []
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "oauth.api.secret": "INFUSIONSOFT_API_SECRET",
    "base.url": "https://fm260.infusionsoft.com/api/xmlrpc",
    "oauth.token.url": "https://api.infusionsoft.com/token",
    "pagination.max": "100",
    "event.vendor.type": "webhook",
    "oauth.scope": "full",
    "oauth.user.token": "INFUSIONSOFT_USER_TOKEN",
    "oauth.authorization.url": "https://signin.infusionsoft.com/app/oauth/authorize",
    "event.notification.callback.url": null,
    "oauth.callback.url": "https://mycoolapp.com/auth",
    "oauth.user.refresh_token": "OAUTH_REFRESH_TOKEN",
    "oauth.user.refresh_interval": "28800",
    "oauth.api.key": "INFUSIONSOFT_API_KEY",
    "oauth.user.refresh_time": "1436369668710",
    "event.notification.enabled": "false"
  },
  "eventsEnabled": false,
  "cachingEnabled": false,
  "traceLoggingEnabled": false
}
```
