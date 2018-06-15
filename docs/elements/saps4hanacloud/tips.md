---
heading: SAP S/4 HANA Cloud
apiProvider: SAP S/4HANA Cloud
seo: Tips | SAP S/4 HANA Cloud | Cloud Elements API Docs
title: Tips
description: SAP S/4 HANA Cloud Tips
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 6374
parent: Back to Element Guides
order: 75
---

# Tips

The Tips section includes more information about the element including FAQs, endpoint limitations, and general tips.

## Create Customers

If you look at the API docs for SAP S/4 HANA Cloud, you'll notice that the /customers resource does not include a POST method. This is because you create customers using POST /business-partners. Follow the steps below to create a customer.

1. Call the `POST /business-partners` endpoint with this body (replacing values with your own):

    ```JSON
    {
      "BusinessPartnerCategory": "1",
      "BusinessPartnerGrouping": "0001",
      "FirstName": "WeMake",
      "LastName": "Integrations",
      "BusinessPartnerFullName": "WeMake Integrations",
      "CorrespondenceLanguage": "EN",
      "IsMale" : true,
      "to_BusinessPartnerAddress": [
        {
          "Country": "DE",
          "StreetName": "Dietmar-Hopp-Allee 16",
          "PostalCode": "69190",
          "CityName": "Walldorf",
          "to_AddressUsage": [
            {
              "AddressUsage": "XXDEFAULT"
            }
          ]
        }
      ],
      "to_BusinessPartnerTax": [
        {
          "BPTaxType": "DE0",
          "BPTaxNumber": "DE012345678"
        }
      ],
      "to_BusinessPartnerRole": {
        "results": [
          {
            "BusinessPartnerRole": "FLCU01"
          }
        ]
      }
    }
    ```

2. In the response, find `BusinessPartner`, and copy the value (the Business Partner id).
3. Call the `GET/business-partners/{id}?expand=to_Customer` endpoint, using the `BusinessPartner` value from the previous step as the id.
4. In the response, find `Customer` (nested in `to_Customer`), and copy the value (the Customer id).
5. Call the `GET/customer/{id}` endpoint, using the `Customer` value from the previous step as the id.
6. Use `PATCH/customers/{id}` to add details to the customer.

## Expanding nested response values

In `GET/business-partners/{id}` and `GET/customers/{id}` requests, you can include an `expand` query parameter to get more information about certain nested objects. For example, when you make a `GET/business-partners/{id}`, the response includes the following object which you can expand to view more.

```JSON
"to_Customer": {
  "__deferred": {
    "uri": "http://107.23.145.245:50000/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartner('122')/to_Customer"
  }
}
```

### Expand a Single Object

To expand the nested object, add the `expand` query parameter: `GET/business-partners/{id}/expand=to_Customer`.

The response includes the expanded object:

```JSON
"to_Customer": {
  "NielsenRegion": "",
  "CreationDate": "1529020800000",
  "IndustryCode2": "",
  "CreatedByUser": "RAMANA",
  "Customer": "57",
  "IndustryCode1": "",
  "to_CustomerCompany": {
    "__deferred": {
      "uri": "http://107.23.145.245:50000/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_Customer('57')/to_CustomerCompany"
    }
  }
```

### Expand a Sub-object

Notice that the `to_Customer` includes the `to_CustomerCompany` that can also be expanded. You can expand sub-objects with a request like `GET/business-partners/{id}/expand=to_Customer/to_CustomerCompany`.

### Expand Multiple Objects

Expand multiple objects by including a comma-separated list in the query parameter. Do not add spaces between commas. For example, `GET/business-partners/{id}/expand=to_Customer,to_Supplier`.
