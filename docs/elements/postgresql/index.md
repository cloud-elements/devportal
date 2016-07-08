---
heading: PostgreSQL
seo: Overview | PostgreSQL | Cloud Elements API Docs
title: Overview
description: Integrate PostgreSQL into your application via the Cloud Elements APIs.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 478
parent: Back to Element Guides
order: 1
sitemap: false
---

## Welcome to the PostgreSQL Element


#### At a Glance

In order to create a connection to a PostgreSQL Database, the following steps are required:

1. Choose how to connect:
  * Directly via an IP Address and Port Number, e.g. `123.123.1.123:3306`
  * Use Cloud Elements [Ground2Cloud](/docs/products/ground-2-cloud/index.html) service to connect your Database
2. Call the `POST /instances` API to instantiate your PostgreSQL Database

#### In Depth

The PostgreSQL Element leverages the tables contained within your PostgreSQL database and transforms them into a collection of resources. RESTful methods (POST, GET, PATCH, DELETE) are used to interact with these resources (accounts, contacts, files). The columns in the table become the modeling attributes used to send payloads with each API call.
For example a database with the following columns of data:

| name    | phone        | address  |
|---------|--------------|----------|
| Jon Doe | 333-333-3333 | 123 Main |

transforms to this JSON body:

```JSON
{
  "name": "Jon Doe",
  "phone": 333-333-3333,
  "address": "123 Main"
}
```

If the table __contains__ a __primary key__, the Retrieve, Update, and Delete by ID APIs can be generated.
If a table __does not__ have a primary key or __contains multiple__ primary keys, the Retrieve, Update, and Delete by ID APIs cannot be generated.

Elements leverage Cloud Elements API Manager platform services including authentication and data transformation.  The API is built to allow you to create a functional application or integration quickly and easily.

All API calls to Cloud Elements should be made to the `https://api.cloud-elements.com/elements/api-v2` base domain. Requests are authorized with an Organization and User secret, as well as, an Element token.  We use many standard HTTP features, like HTTP verbs, which can be understood by many HTTP clients. JSON will be returned in all responses from the API, including errors. The APIs are designed to have predictable, straightforward URLs and to use HTTP response codes to indicate API errors.

__NOTE:  API Docs are not available for viewing as they are generated based on the information contained in the Database Table.__

Get started by [selecting how to connect your database](mysql-endpoint-setup.html).
