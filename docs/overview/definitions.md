---
heading: Cloud Elements Definitions
seo: Cloud Elements Definitions | Cloud Elements API Docs
title: Definitions
description: Overview of common terms within the Cloud Elements Platform.
layout: sidebarleft
order: 2
published: true
sitemap: false
---

### Cloud Elements Definitions

#### ELEMENTS

An `Element` is a collection of resources providing a pre-built integration into a service endpoint. RESTful methods (POST, GET, UPDATE, PATCH, DELETE) are used to interact with these resources (accounts, contacts, files) regardless of the type of APIs (SOAP or REST) provided by the endpoint. Elements leverage Cloud Elements API Manager platform services including authentication, data transformation, and event management.

* Elements share common services including discovery, search query, pagination, bulk uploading and downloading, logging and interactive documentation.
* Methods are normalized and accessible through RESTful APIs
* Complete data payloads are returned in JSON and available to transform and normalize via the Cloud Elements API Manager Transformation Services.
* Cloud Elements keeps each Element up to date with changes at the endpoint.
* Each Elements is a “Multi-tenant” connector supporting an unlimited number of authenticated accounts with no additional code required.

#### HUBS

`Hubs` map resources from a collection of endpoints (What we call Elements) into a uniform set of APIs. With Hubs you can integrate an entire category of services (e.g., CRM, Documents, Finance) through a single set of APIs.

We normalize our API calls for all endpoints, to enable calls between services e.g. Salesforce to HubSpot. However, with this feature, certain endpoint resources cannot be mapped for each hub.

* Hubs provide uniform APIs to access any collection of Elements or a set of resources.
* Hubs enable “One-to-Many” access to an entire category of services.
* Hubs are accessed using a consistent RESTful API with a JSON payload regardless of the technology used at the endpoint.
* Hubs rapidly translate calls into the semantic and data structure required by each endpoint.
* Hubs provide a uniform set of interactive API documentation that developers use to access the resources in the Hub.
* Combine resources from multiple categories providing a consistent set of APIs and documentation to access any collection of resources (e.g., combine Salesforce, Box, and QuickBooks API resources into a Hub).

We’ve categorized the leading cloud applications into Hubs (e.g. CRM, Documents, and Messaging). You integrate to a Cloud Elements “Hub” via a single RESTful API and your app is instantly connected to all the leading services in that category, no need to do custom and costly integration to each service.

#### Instance

An Instance is your personalized version of an Element or formula.  An Element Instance allows you to access your data, custom objects, and fields for an Element.

An Element Instance consists of three components:

* __Instance Name__:  This allows you to identify multiple Instances of the same element.
* __Authentication__: For some elements, you need to provide your login credentials for that system.  Things like username/password combos, or API keys are some examples.  For OAuth authentication, Cloud Elements directs you to the login page of that element and handles the OAuth token exchange in the background seamlessly.
* __Events__: Cloud Elements allows you to set up events for your Element Instances.  If the cloud service supports Webhooks, you configure those through the instance.  If not, Cloud Elements supports custom polling of any object in that system.

An `instance` is always connected to a single account.  For every customer or account you wish to connect, an `instance` will need to be created.  For example, if five different customers need to access the data in my Salesforce account, I must create 5 different instances for those customers.

Example `cURL` request using Basic Authentication:

```bash
curl -X POST
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type: application/json'
-d @instance.json
'https://api.cloud-elements.com/elements/api-v2/instances'
```

```JSON
{
  "element": {
    "key": "closeio"  // The Cloud Application Service
  },
  "configuration": {
    "username": "<INSERT_CLOSE_IO_API_KEY>", // Credentials needed to provision the Element
    "password": "<INSERT_CLOSE_IO_PASSWORD>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```

Instances can be managed via API or our API Management Console.

Management via API:

Using our RESTful APIs, easily create, retrieve, update, and delete using the `/instances` endpoint.

Management via the Console:

From the left hand navigation menu, Elements > select My Instances.
This action will render a list of your current instances.
From this screen click the settings gear to edit, clone, or delete an instance.
API docs for the Element can also be viewed along with creating a transformation (more about this in the transformations defined section).

{% include padding-all.html %}

{% youtube "https://www.youtube.com/embed/qRCz9TdvksM?color=white&theme=light" %}

{% include padding-all.html %}

#### FORMULAS

Formulas are the automated workflows that sync data between Elements.  For example, if your integration use case calls for syncing `/contacts` between your CRM and Helpdesk Elements, you would build a formula to accomplish the movement of this data.  Formulas are user-defined workflows that have a trigger (incoming event, API request, timer, etc.) that, when triggered, will begin executing a series of steps.  These steps can go about accomplishing a large variety of different use cases across different services.

#### TRANSFORMATIONS

The purpose of the Transformation APIs (Beta) is to give you the option of defining what an object would look like in your app.

The Transformation APIs allow you to:

* manage custom object and custom data fields
* map custom data fields to and from the format that your application uses and expects
* programmatically persist and maintain transformations for each of your client’s CRM, Marketing, and Help Desk services

#### BULK APIs and CEQL

__Cloud Element Bulk API__ calls provide an option to upload a large number of resources, such as contacts, into a Cloud Service all at once.

The Bulk APIs require the name of the object identified within the cloud service and a `.csv` file with populated data included in each request.

Cloud Elements provides discovery services to get a list of available objects.

__The Cloud Elements Query Language (CEQL)__ is a query language used by Cloud Elements to standardize searching across all of our different elements. Many APIs support some form of searching in their APIs but they’re almost all different, so we have standardized a common way to search across all of our elements. Cloud Elements translates the CEQL to the endpoint’s searching syntax, however at times, CEQL supports more than the endpoint.

#### OAUTH PROXY

The __OAuth Proxy__ feature gives you the capability to have multiple environments, such as development, QA, etc, with one endpoint application. For example some vendors only allow one callback URL per application. The proxy will allow for the same callback URL to be used with multiple application endpoints. You would then use the proxy address as the Callback URL instead of your own Callback URL. This permits multiple endpoint applications to one callback URL.

We offer two forms of the proxy.
Standard OAuth Proxy Configuration: requires an API key and secret to be passed as URL parameters or in the JSON payload needed to create an instance.
OAuth Proxy with API Key and Secret Management: option to input your API key and secret during the proxy creation and we will take care of the rest during instance creation.
