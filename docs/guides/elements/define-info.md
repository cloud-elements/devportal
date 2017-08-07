---
heading: Manage Elements
seo: Element Info | Elements | Cloud Elements API Docs
title: Custom Element Information
description: Defining element name and authentication
layout: sidebarleft
apis: API Docs
platform: elementsbuilder
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 22
simple_map: true
map_name: usermap
box_number: 1
---

# Custom Element Information

When you create an element, the first step is to provide some basic information about the element. Basic information includes how you identify the element, the hub it belongs to, the type of service to connect to, the authentication type of the element, and information about the API.

## Build an Element

1. On the Elements page, click **Build a New Element**.
1. Click **Create**.
1. Enter basic information about the element:
  * Element Name &mdash; The name appears on the Element card and should clearly identify the API provider associated with it.
  * Element Key &mdash; Generated form the Element Name by default, but you can enter any text.
  * Description &mdash; The description appears in the response when you authenticate an instance of the element.
1. Choose the Hub associated with the new element. Make sure that you choose an accurate hub because you can leverage existing hub resources when you add resources to the element.
2. Select the API type used by the API provider. You can usually find the API type on an overview or introductory section of the API documentation.
 * REST API &mdash; Select if the API is a REST or RESTful API.
 * SOAP API &mdash; Select if the API is a SOAP API.
 * Database &mdash; Select of the API is for a database application.
2. Select the type of authentication needed to connect with the API provider. You can typically find this information in an "Authorization" or "Authentication" section of the provider's API documentation. See the [Parameters table(#element-info-parameters)] for details.

    {% include note.html content=" Your authentication selection affects the configuration values that you will need to complete when you configure the element. " %}

3. Add reference information that you will need while building the element:
  * Documentation URL &mdash; Add a link to the API documentation. You will reference this throughout the element building process.
  * Vendor API Version &mdash; Add a version number here if available so you always know what version of the API the element was built for.
6. Click **Next**.
7. [Define the information needed to configure an authenticated element instance](config.html).

## Element Info Parameters

| Parameter | Description    | Required |
| :------------- | :------------- | :------------- |
| Name | The name of the Element. This helps form the default Element Key | Y |
| Element Key | A unique identifier for the element. The default comes from the Element Name. The Element Key is used in `/elements `endpoints that require `{keyOrId}`. | Y |
| Hub  | The hub to which the element belongs.  {{site.data.glossary.hub}} | N |
| Service type | Identifies the kind of element that you are building, either REST, SOAP, or database| Y |
|   | **JSON REST API** for REST or RESTful APIS |  |
|   | **SOAP/XML** for SOAP APIs  |  |
|   | **Database** for APIs provided by database applications.|  |
| Authentication Type | The authorization type used by the API provider. Find this in the API docs under _Authorization_ or _Authentication_.  | Y |
|  | **Basic** Integrations authenticate with the API provider via user name and password.   |
|  | **OAUth 1.0** Integrations authenticate with the cloud service via OAuth 1.0. OAuth 1.0 does not require users to expose their credentials. OAuth 1.0 is a three step authentication process. The OAuth 1.0 protocol involves signing the payload on every request and thus is used by many financial services. <br /> While OAuth 1.0 provides a standard way to authenticate, many cloud services implement it in unique ways. Cloud Elements implements OAuth 1.0 to the specification defined at  [OAuth 1.0 specification](https://tools.ietf.org/html/rfc5849). |  |
|  | **OAuth 2.0** A newer two step process employed by many of the today’s modern cloud services. OAuth 2.0 is not very strongly specified and many API providers implement it differently,  so make sure that you read the API provider's documentation. Cloud Elements implements OAuth 2 to the specification defined at [OAuth 2.0 specification](https://oauth.net/2/). |  |
|  | **AWS V2** Amazon Web Services Signature Version 2 for older AWS resources. |  |
|  | **AWS V4** Amazon Web Services Signature Version 4 for the latest AWS resources. |  |
|  | **Custom** For user-defined authentications, such as passing an API key in the header or login requests made during authentication where tokens are passed. Because OAuth 1.0 and 2.0 are implemented differently at different cloud services, you might need to choose Custom. |  |
| Documentation URL | The URL to the API provider's API documentation. | N |
| Vendor API version | Some vendors offer multiple versions of their API. Enter the version that you are building the element for here. | N |


Continue to the next step, [Define Configuration & Parameters](config.html).

{% include maps/usermap.html%}
