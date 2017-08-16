# Cloud Elements Query Language

The Cloud Elements Query Language (CEQL) is a query language used by Cloud Elements to standardize searching across all of our different elements. Many APIs support some form of searching in their APIs but they’re almost all different, so we have standardized a common way to search across all of our elements. Cloud Elements translates the CEQL to the endpoint’s searching syntax, however at times, CEQL supports more than the endpoint.

## CEQL in {{page.heading}}

Use CEQL to query the following endpoints

* GET /accounts
* GET /agents
* POST /bulk/query
* GET /contacts
* GET /incidents
* GET /incidents/{id}/attachments
* GET /{objectName}
* GET /{objectName}/{objectId}/{childObjectName}

{% include ceql-ref.md%}
