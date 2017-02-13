---
heading: Ecwid
seo: Endpoint Setup | Ecwid | Cloud Elements API Docs
title: Endpoint Setup
description: Endpoint setup
layout: docs
breadcrumbs: /docs/elements.html
elementId: 52
parent: Back to Element Guides
order: 5
---

## Endpoint Setup

Follow these steps to set up a new Ecwid Application for API integration. Via a web browser go to: [https://my.ecwid.com/cp/#register](https://my.ecwid.com/cp/#register) and sign up. It must be a paid account.

Once setup, please login.

1. Make note of your Store ID as it will be needed to provision an Element Instance.
![Ecwid Connected App step 1](http://cloud-elements.com/wp-content/uploads/2015/02/EcwidAPI1.png)

2. Next the Legacy API keys will need to be retrieved.  In order to do retrieve them, you must be __logged in__ to your store.

Once you are logged in, navigate to a Legacy API Key URL:

https://my.ecwid.com/cp/CP.html#legacy_api

Copy the Order and Product API secrets
![Ecwid Legacy API](img/ecwid-legacy-api-1.png)

The Legacy API values provide the minimum required configuration needed to create an Instance.

If you wish to add event functionality then please enter the following URL in the ION Cannon endpoint URL: `https://api.cloud-elements.com/elements/api-v2/events/ecwid`
![Ecwid Legacy API ION Cannon URL](img/ecwid-legacy-api-events.png)

Next [create an instance](ecwid-create-instance.html).
