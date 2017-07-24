---
heading: Build Custom Elements
seo: Element Info | Elements | Cloud Elements API Docs
title: Build an Element
description: Defining element name and authentication
layout: sidebarleft
apis: API Docs
platform: elementsbuilder
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 16
simple_map: true
map_name: usermap
box_number: 3
---

## Define Basic Element Information

Basic information about an element includes the name, lement key, and description; the type of service to connect to; the authentication type of the element, API docs; vendor API documentation, and logo.

## Build an Element

1. On the Elements page, click Build a New Element__.
1. Click Build New Element__.
1. Enter basic information about the element:
  * Element Name &mdash;The name appears on the Element card and should clearly identify the API provider associated with it.
  * Element Key &mdash; Generated form the Element Name by default, but you can enter any text.
  * Description &mdash; The description appears in the response when you authenticate an instance of the element.
1. Select the API type used by the Service Provider.
2. Select the type of authentication needed to connect with the API provider. You can typically find this information in an "Authorization" or "Authentication" section of the provider's API documentation.

    {% include note.html content=" Your authentication selection affects the configuration values that you will need to complete when you configure the element. " %}

3. Enter the URL to the API provider's documentation so....
4. Enter an API version so ....
5. Add a logo, these are the types...
6. Click **Next**.

Continue to the next step: [configure the element](config.html).
