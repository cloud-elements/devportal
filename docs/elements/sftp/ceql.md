---
heading: SFTP Beta
seo: Query Language | SFTP | Cloud Elements API Docs
title: Querying
description: Make database queries using Cloud Elements Query Language.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 1742
parent: Back to Element Guides
order: 45
sitemap: false
---

## Cloud Elements Query Language (CEQL)

### Description:

The Cloud Elements Query Language (CEQL) is a query language used by Cloud Elements to standardize searching across all of our different elements. Many APIs support some form of searching in their APIs but they’re almost all different, so we have standardized a common way to search across all of our elements. Cloud Elements translates the CEQL to the endpoint’s searching syntax, however at times, CEQL supports more than the endpoint.

CEQL is composed of the following parts:

* __Object name__
  * The name of the object to search
* __Select fields__
  * The field or fields to return in our result set
* __Sort fields__
  * The field or fields to sort our result set
* __Where expressions__
  * The expression or expressions specifying what to search and what objects to return in our result set
    * This is made up of a left­hand­side (LHS), an operator and a right­hand­side (RHS).
    * The valid CEQL operators are:
      * “AND”
      * “OR”
      * “=”
      * “!=”
      * “<” “>”
      * “<=” “>=”
      * “LIKE”
      * “IN”
      * “IS NULL”
* __Page size (limit)__
  * The maximum number of results to return
* __Page offset (offset)__
  * The offset to begin our results
* __Example: select id,name from account where name=’foo’ order by name asc limit 10 offset 0__
  * Object name: account
  * Select fields: id,name
  * Sort fields: name asc
  * Where expression: name=’foo’
  * Page size: 10
  * Page offset: 0

Where can it be used?

  * CEQL, or at least parts of CEQL, can be used in most of our find or search related APIs.

![Cloud Elements Query Language CEQL](/assets/img/ceql-description.png)

### Examples:

Select from accounts where the Name equals a specific value:

* __API Docs:__ where Name=’Foo Account’
* __Request URL:__ https://console.cloud-elements.com:443/elements/api-v2/hubs/crm/accounts?where=Name=’Foo Account’
* __Encoded:__ https://console.cloud-elements.com:443/elements/api-v2/hubs/crm/accounts?where=Name%3D%E2%80%99Foo%20Account%E2%80%99

Select from accounts where the Name equals a specific value and the Industry equals a specific value:

* __API Docs:__ where Name=’Foo Account’ AND Industry=’Biotechnology’
* __Request URL:__ https://console.cloud-elements.com:443/elements/api-v2/hubs/crm/accounts?where=Name=’Foo Account’ AND Industry=’Biotechnology’
* __Encoded:__ https://console.cloud-elements.com:443/elements/api-v2/hubs/crm/accounts?where=Name%3D’Foo%20Account’%20AND%20Industry%3D’Biotechnology’

Select from accounts where the name equals a specific value OR the Industry is a specific value AND the LastModifiedDate > a specific value:

__NOTE: when working with dates and time, wrapping a value in the ` character will ensure a column does not get split.__

For example:  __select * from customers ‘`metaData.lastUpdateTime` > 2015-01-06T09:31:38-07:00’__

Since the __‘`metaData.lastUpdateTime` > 2015-01-06T09:31:38-07:00′__  is wrapped in \` character, the column will not get split.

* __API Docs:__ where Name=’GenePoint’ OR (Industry=’Biotechnology’ AND LastModifiedDate>’2015-01-01T00:00:00.000Z’)
* __Request URL:__ https://console.cloud-elements.com:443/elements/api-v2/hubs/crm/accounts?where=Name=’GenePoint’ OR (Industry=’Biotechnology’ AND LastModifiedDate>’2015-01-01T00:00:00.000Z’)
* __Encoded:__ https://console.cloud-elements.com:443/elements/api-v2/hubs/crm/accounts?where=Name%3D’GenePoint’%20OR%20(Industry%3D’Biotechnology’%20AND%20LastModifiedDate%3E’2015-01-01T00%3A00%3A00.000Z’)

Select from accounts where the name is like a specific value:

* __API Docs:__ where Name LIKE ‘%Foo%’
* __Request URL:__ https://console.cloud-elements.com:443/elements/api-v2/hubs/crm/accounts?where=Name LIKE ‘%Foo%’
* __Encoded:__ https://console.cloud-elements.com:443/elements/api-v2/hubs/crm/accounts?where=Name%20LIKE%20’%25Foo%25′

Select from accounts where the estimated value of the AnnualRevenue is greater than or equal to a specific value:

* __API Docs:__ where AnnualRevenue >= 100000
* __Request URL:__ https://console.cloud-elements.com:443/elements/api-v2/hubs/crm/accounts?where=AnnualRevenue >= 100000
* __Encoded:__ https://console.cloud-elements.com:443/elements/api-v2/hubs/crm/accounts?where=AnnualRevenue%20%3E%3D%20100000

The SFTP Element does support Complex Queries:

Example Query:

`"select c.first_name, c.last_name, cp.name from contact c inner join company cp on cp.company_id = c.company_id"`

CEQL SHORTCOMINGS:

* CEQL does not support sub­queries

__Select from accounts where the name equals a specific value OR the Industry is a specific value AND the LastModifiedDate > a specific value__

![Cloud Elements Query Language CEQL](/assets/img/ceql-example.png)
