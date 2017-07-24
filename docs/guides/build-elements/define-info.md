---
heading: Build Custom Elements
seo: Element Info | Elements | Cloud Elements API Docs
title: Define Basic Element Information
description: Defining element name and authentication
layout: sidebarleft
apis: API Docs
platform: elementsbuilder
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 12
simple_map: true
map_name: usermap
box_number: 1
---

## Define Basic Element Information

Basic information includes how you identify the element, the hub it belongs to, the type of service to connect to, the authentication type of the element, and information about the API.

## Build an Element

1. On the Elements page, click **Build a New Element**.
1. Click **Create**.
1. Enter basic information about the element:
  * Element Name &mdash; The name appears on the Element card and should clearly identify the API provider associated with it.
  * Element Key &mdash; Generated form the Element Name by default, but you can enter any text.
  * Description &mdash; The description appears in the response when you authenticate an instance of the element.
1. Select a Hub as a way to categorize the element.
2. Select the API type used by the Service Provider.
2. Select the type of authentication needed to connect with the API provider. You can typically find this information in an "Authorization" or "Authentication" section of the provider's API documentation.

    {% include note.html content=" Your authentication selection affects the configuration values that you will need to complete when you configure the element. " %}

3. Enter the URL to the API provider's documentation so....
4. Enter an API version so ....
5. Add a logo, these are the types...
6. Click **Next**.

## Properties

<to do>

| Info Tab Components | Description    |
| :------------- | :------------- |
| Hub       | Hubs map resources from a collection of endpoints (What we call Elements) into a uniform set of APIs.<br />Add a new hub from the dropdown menu to create a new collection if our defaults do not meet your needs.     |
| Name | The name of the Element. This helps form the default Element Key |
| Element Key | A unique identifier of the element. The default comes from the Element Name. |
| Description | Use the Description to provide detailed information about the Element |
| Logo URL | The URL to the image associated with the Element. The Cloud Elements logo is the default. |
| Authentication Type | See [Authentication Types](#authentication-types). |
| Protocol Type | Use the Protocol Type to identify the kind of Element that you are building, REST, SOAP, or database. <br />- For REST APIs, select HTTP<br />- For integrations with databases, select JDBC<br />- For SOAP APIs, select SOAP. |


Continue to the next step: [configure the element](config.html).
