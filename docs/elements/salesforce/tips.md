---
heading: Salesforce CRM
seo: Tips | Salesforce CRM | Cloud Elements API Docs
title: Tips
description: Salesforce CRM Tips
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 23
parent: Back to Element Guides
order: 75
---

## Tips

The Tips section includes more information about the element including FAQs, endpoint limitations, and general tips.

[General](#general)

[Accounts and Permissions](#accounts-and-permissions)

[Events](#events)

[Authentication](#authentication)

[Pagination](#pagination)

[Bulk](#bulk)

[Version](#version)

### General

* Cloud elements supports your custom objects and fields in the Salesforce CRM Element. Use the `GET /objects` API to return all custom objects, the `GET /{objectName}` API to interact with the custom APIs, and the `GET /objects/{objectName}/metadata` API to expose metadata for fields associated with your custom object.
* When using transformations with Salesforce, only the mapped fields are returned. Salesforce requires all fields that need to be returned to be included in the request. To avoid issues with accounts that have a large number of custom fields, the transformation functionality is designed to only request the mapped fields. If a field needs to be included, or custom javascript needs to be written for a certain field, be sure to include it within your mapped fields.
* There is a setting in Salesforce that may lead to an issues where calls return ``“INVALID_SESSION_ID – Session expired or invalid”``. If this is occurring, clear the  the Session Setting __Lock sessions to the IP address from which they originated__ check box.
* The SFDC query resource (object) can be accessed by using the `GET /query` API. e.g., `/query?q%3Dselect%20*%20from%20opportunity`

  ![Salesforce Tips Session Settings](img/Salesforce_Tips_SessionSettings.png)

### Accounts and Permissions

* If you have different levels of permissions configured for users within your Salesforce application, those permissions will be inherited and remain unchanged through the OAuth flow as the Salesforce CRM element is integrated.
* Salesforce has multiple types of accounts and editions. Only these allow you to use the API:
  * Enterprise Edition
  * Unlimited Edition
  * Developer Edition
  * Performance Edition
Visit https://help.salesforce.com/HTViewSolution?id=000005140&language=en_US for more information

### Events

* Salesforce events support both Polling and Webhooks. When you create an instance with event type  “webhook”, it creates an Apex class and triggers in your Salesforce account. If your production account doesn’t allow customer Apex triggers or if your production account is blocked, the provisioning will fail.

### Authentication

* The console will use default application permissions when asking for access to your Salesforce applications. If you would like custom application permissions, you will need to create your own connected app and configure the application access in your custom UI. This cannot be done in the Cloud Elements console. Follow instructions on [Endpoint Setup](https://developers.cloud-elements.com/docs/elements/salesforce/salesforce-endpoint-setup.html)
* If you create a custom application, you will need to create instances via the APIs to use this new app. You only need to create this application once and you can use it for all of your customers.
* Once an instance is created Cloud Elements will automatically refresh the token behind the scenes so that you will never have to connect your application again.

### Pagination

* Salesforce allows paging only up to 2000 records. If you need to go above 2000 records, you should use the orderBy function and select a unique parameter such as “Id ascending”. However the recommended approach is to use the bulk APIs

### Bulk

* Consider using the Bulk API if you are managing over 2000 records.
* The Salesforce bulk chunking mechanism allows you to use bulk on large data sets without limitations. If you use an orderBy clause, chunking is disabled. If chunking is enabled, it may take longer to get all the data. Also, be aware that Salesforce has daily upload and download limits.

### Version

* After you connect an instance to Salesforce, Cloud Elements remains up-to-date with the latest versions of REST APIs.
