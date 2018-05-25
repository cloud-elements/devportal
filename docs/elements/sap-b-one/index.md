---
heading: SAP Business One
apiProvider: SAP # For cases where the API Provider is different than the element name. e;g;, ServiceNow vs. ServiceNow Oauth
seo: Overview | SAP Business One | Cloud Elements API Docs
title: Overview
description: Integrate SAP Business One into your application via the Cloud Elements APIs.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementKey: sapbusinessone
elementId: 4377
parent: Back to Element Guides
order: 1
---

# Welcome to the {{page.heading}} Element

{{page.heading}} is available in the ERP hub. Connect a {{page.apiProvider}} account to integrate with customers, ledger accounts, equipment cards, invoice drafts, and more.

{% include callout.html content="<strong>On this page</strong></br><a href=#element-details>Element Details</a></br><a href=#about-the-sap-business-one-element>About the SAP Business One Element</a></br><a href=#prerequisites>Prerequisites</a></br><a href=#events>Events</a></br><a href=#ceql>CEQL</a></br><a href=#pagination>Pagination</a>" type="info" %}

## Element Details

| Element Information | Details     |
| :------------- | :------------- |
| API Documentation | [{{page.apiProvider}} SDK documentation](https://www.sapappsdevelopmentpartnercenter.com/en/get-started/business-one-applications/business-one-sdk/) |
| Authentication | Custom with Ground2Cloud  |
| Events | Polling |
| Bulk | Not supported |
| Transformations | Supported. See [Define Common Resources and Transformations](https://docs.cloud-elements.com/home/common-object) for more information about transforming your {{page.apiProvider}} data.|

## About the {{page.heading}} Element

SAP Business One is a unique element in that you need our help to authenticate with SAP and configure the element. The SAP Business One documentation is also unique as it does not provide the same step-by-step instructions as our other element docs. Instead, the intent of this topic is to help you understand the requirements, capabilities, and limits of the SAP Business One element.

The off-the-shelf version of the SAP Business One element contains only a few resources. SAP Business One has thousands of resources. If you need access to a specific resource, let us know when you set up your integration.

When you are ready to integrate with SAP Business One, [contact our support team](https://support.cloud-elements.com/hc/en-us/requests/new).

## Prerequisites

The SAP Business One element support the on-premise SAP Business One software. Because it is on-premise software, you need to install Ground2Cloud to connect SAP Business One to Cloud Elements. Ground2Cloud runs as a Windows service on the with access to the SAP Business One system.

We support all versions of SAP Business One that are supported by the  [{{page.apiProvider}} SDK](https://www.sapappsdevelopmentpartnercenter.com/en/get-started/business-one-applications/business-one-sdk/).

We support the following databases:

* Microsoft SQL Server 2008, 2012, 2014, and 2016
* SAP HANA

## Events

The SAP Business One element supports Polling one the following resources:

* customers
* products
* drafts

Polling is limited because SAP Business One timestamps include only dates, not times. Therefore, polling any more than once per day, while supported, will not identify any changes. If your require more granularity in events than once per day, let us know and we can discuss workarounds for you.

## CEQL

We support querying the SAP Business One resources, but you must know the table column names to query. This requires knowledge of the underlying database.

## Pagination

We typically normalize pagination to 200 records, but SAP Business One limitations required that we paginate 20 records at a time.
