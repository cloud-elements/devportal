CEQL represent the "where" portion of a typical query that can include many other components like field selection, sorting, and pagination. Take a look at `GET` requests or `POST /bulk/query` in the API docs for any element to see how you can structure your queries. Here are some examples from QuickBooks Online, MailChimp, and Salesforce Sales Cloud.
![CEQL in API Docs](/assets/img/ceql/api-docs.png)

The easiest way to make queries is through the API docs, but when you integrate your code with Cloud Elements you'll need to understand how to structure queries with CEQL.

You compose queries with available query elements field selection, sorting, and pagination. Each element allows different components of the query, but inmost situations you can use some common parts. The most common components include the object name, CEQL expression, field selection, field sorting, and pagination. Here's how you might construct a query:

```
<object name>?where <expression>&<select fields>&<sort fields>&<page size (limit)>&<page offset (offset)>
```

An example query with all components:

```
/contacts?where=Department!='Procurement'&fields=username&orderBy=MailingCity asc&page=1&pageSize=10
```

### Query Reference

| Query Component | Example   | Description |
| :------------- | :------------- | :------------- |
|  Object name  | **/contacts**?where=Department!='Procurement'&fields=username&orderBy=MailingCity asc&page=1&pageSize=10  | The name of the object to search.  |
| CEQL query</br>the "where" expression  | /contacts**?where=Department!='Procurement'**&fields=username&orderBy=MailingCity asc&page=1&pageSize=10  | The expression or expressions specifying what to search and what objects to return in our result set. See [Valid CEQL Operators](#valid-ceql-operators).</br>This is made up of a left­ hand ­side (LHS), an operator and a right­ hand­ side (RHS).  |
| Select fields   | /contacts?where=Department!='Procurement'**&fields=username**&orderBy=MailingCity asc&page=1&pageSize=10  | The field or fields to return in your result set. </br>Field selection is available only for elements where the resource supports selecting fields. When not available, you can use a common resource to filter the fields that you receive in a response.  |
| Sort fields   | /contacts?where=Department!='Procurement'&fields=username**&orderBy=MailingCity asc**&page=1&pageSize=10  | The field or fields to sort your result set.</br>Include `asc` to sort ascending, and `desc` for descending.   |
| Pagination   | /contacts?where=Department!='Procurement'&fields=username&orderBy=MailingCity asc**&page=1&pageSize=10**  |   `page` is the offset to begin your results. </br>`pageSize` is the maximum number of results to return.  |

### Valid CEQL Operators

| Operator | Descriptions   |
| :------------- | :------------- |
| AND | TRUE if all the conditions separated by AND is TRUE  |
| OR | TRUE if any of the conditions separated by OR is TRUE  |
| =  | Equal to   |
| != | Not equal to  |
| < | Less than   |
| > | Greater than   |
| <= | Less than or equal to	   |
| >= | Greater than or equal to   |
| LIKE |TRUE if the operand matches a pattern  |
| IN | TRUE if the operand is equal to one of a list of expressions |
| IS NULL |  TRUE if a NULL value is found |


### Examples

* [Equal Operator (=)](#equal-operator)
* [AND Operator](#and-operator)
* [OR and Greater Than (>) Operators](#or-and-greater-than-operators)
* [LIKE Operator](#like-operator)
* [Greater Than or Equal To (>=) Operator](#greater-than-or-equal-to-operator)

#### Equal Operator

Select from accounts where the Name equals a specific value.
![Select where name](/assets/img/ceql/select-where-name.png)

##### HTTP Request

```
https://api.cloud-elements.com/elements/api-v2/hubs/crm/accounts?where=Name='Edge Communications'
```

##### cURL

```
curl -X GET \
  'https://api.cloud-elements.com/elements/api-v2/hubs/crm/accounts?where=Name=%27Edge%20Communications%27' \
  -H 'Authorization: User zyWPKPPPpRxvTol6ERrbm9MQFzcW7+Yj/ntkkchW06S=, Organization 4e3127e892099c22a5181492329bd10c, Element +HQhPaKeEcBZXif+xDaMf9E1JQqs9FR9zU1+VBQWPwg=' \
  -H 'Content-Type: application/json' \
```

#### AND Operator

Select from accounts where the Name equals a specific value and the Industry equals a specific value.
![Select where name and name](/assets/img/ceql/select-where-name-and-name.png)

##### HTTP Request

```
https://api.cloud-elements.com:443/elements/api-v2/hubs/crm/accounts?where=Name=’Account Name’ AND Industry=’Electronics’
```

##### cURL

```
curl -X GET \
  'https://api.cloud-elements.com/elements/api-v2/hubs/crm/accounts?where=Name%3D'Account%20Name'%20AND%20Industry%3D'Electronics'' \
  -H 'Authorization: User zyWPKPPPpRxvTol6ERrbm9MQFzcW7+Yj/ntkkchW06S=, Organization 4e3127e892099c22a5181492329bd10c, Element +HQhPaKeEcBZXif+xDaMf9E1JQqs9FR9zU1+VBQWPwg=' \
  -H 'Content-Type: application/json' \
```

#### OR and Greater Than Operators

Select from accounts where the name equals a specific value OR the Industry is a specific value AND the LastModifiedDate > a specific value.
![Select where name and name and date](/assets/img/ceql/select-where-name-or-name-and-date.png)

When working with dates and time, wrapping a value in the ` character will ensure a column does not get split.

For example:  `select * from customers ‘`metaData.lastUpdateTime` > 2015-01-06T09:31:38-07:00’`

Since the ``metaData.lastUpdateTime` > 2015-01-06T09:31:38-07:00′` is wrapped in \` character, the column will not get split.

##### HTTP Request

```
https://api.cloud-elements.com/elements/api-v2/hubs/crm/accounts?where=LastModifiedDate>'2018-01-15T00:00:00.000Z' AND (Name='Account Name' OR Industry='Apparel')
```

##### cURL

```
curl -X GET \
  'https://api.cloud-elements.com/elements/api-v2/hubs/crm/accounts?where=LastModifiedDate%3E%272018-01-15T00:00:00.000Z%27%20AND%20%28Name=%27Account%20Name%27%20OR%20Industry=%27Apparel%27%29' \
  -H 'Authorization: User zyWPKPPPpRxvTol6ERrbm9MQFzcW7+Yj/ntkkchW06S=, Organization 4e3127e892099c22a5181492329bd10c, Element +HQhPaKeEcBZXif+xDaMf9E1JQqs9FR9zU1+VBQWPwg=' \
  -H 'Content-Type: application/json' \
```

#### LIKE Operator

Select from accounts where the name is like a specific value. Use `%` as a wildcard character.
![Select where name like](/assets/img/ceql/like.png)

##### HTTP Request

```
https://api.cloud-elements.com/elements/api-v2/hubs/crm/accounts?where=Name LIKE 'Acc%')
```

##### cURL

```
curl -X GET \
  'https://api.cloud-elements.com/elements/api-v2/hubs/crm/accounts?where=Name%20LIKE%20%27Acc%25%27' \
  -H 'Authorization: User zyWPKPPPpRxvTol6ERrbm9MQFzcW7+Yj/ntkkchW06S=, Organization 4e3127e892099c22a5181492329bd10c, Element +HQhPaKeEcBZXif+xDaMf9E1JQqs9FR9zU1+VBQWPwg=' \
  -H 'Content-Type: application/json' \
```

#### Greater Than or Equal To Operator

Select from accounts where the estimated value of the AnnualRevenue is greater than or equal to a specific value.
![Select where name like](/assets/img/ceql/greater-than-equal-to.png)

##### HTTP Request

```
https://api.cloud-elements.com/elements/api-v2/hubs/crm/accounts?where=AnnualRevenue >= 100000)
```

##### cURL

```
curl -X GET \
  'https://api.cloud-elements.com/elements/api-v2/hubs/crm/accounts?where=AnnualRevenue%20%3E=%20100000' \
  -H 'Authorization: User zyWPKPPPpRxvTol6ERrbm9MQFzcW7+Yj/ntkkchW06S=, Organization 4e3127e892099c22a5181492329bd10c, Element +HQhPaKeEcBZXif+xDaMf9E1JQqs9FR9zU1+VBQWPwg=' \
  -H 'Content-Type: application/json' \
```
