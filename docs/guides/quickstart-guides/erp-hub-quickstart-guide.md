---
heading: Hub Level Documentation
seo: ERP Hub Quick Start Guide | Cloud Elements API Docs
title: ERP Hub Quick Start Guide
description: Get up and running with the ERP Hub.
layout: sidebarelementdoc
order: 4
redirect_from:
  - /docs/getstarted/quickstart-guides/erp-hub-quick-start-guide.html
---

## ERP Hub Quick Start Guide

This guide is here to get you up and running with Cloud Elements Service in 4 minutes or less. We have provided step by step visual directions, as well as, a video of the same instructions taking you through the whole process. Watch the Video or read at your own pace.

This guide reviews the minimum number of steps to get you working with the ERP Hub APIs. If you have not set up a new Application with NetSuite to connect with Cloud Elements, please see our [Create New NetSuite App](/docs/elements/Elements/netsuite/netsuite-endpoint-setup.html) for directions on this process.

{% include padding-all.html %}

{% include vimeo-player.html id=134148780 %}

{% include padding-all.html %}

#### What We'll Do:

1. Sign up for Cloud Elements Service

2. Create an Element Instance

3. Create an Account in the ERP Service

#### What You Will Need:

__An Account: choose an option__

* Create a New Account
* Sign Up with GitHub
* Sign Up with Google

__A username and password for a ERP Automation Service e.g. Salesforce ERP Cloud, HubSpot, MailChimp, Act-On.
A new application set up with your ERP Service__

*NetSuite will be used for this demonstration*

##### Sign Up with GitHub

Don’t have a GitHub account? Go to [http://www.github.com](http://www.github.com) and signup. It’s free!

##### Setting a Public Email in GitHub

Navigate to your settings in GitHub.
![ERP Hub Quick Start Guide 1](http://cloud-elements.com/wp-content/uploads/2014/08/gitHub2.gif)

Type in your public email in the designated field and click “Update Profile”.

All set!

The first step is to sign up for Cloud Elements Service.
![ERP Hub Quick Start Guide 2](http://cloud-elements.com/wp-content/uploads/2014/08/gitHub21.gif)

##### Sign Up for Cloud Elements Services

To sign up for the Cloud Elements service, using a web browser, go to [https://console.cloud-elements.com/elements/jsp/signup.jsp](https://console.cloud-elements.com/elements/jsp/signup.jsp).

You can create a new account with Cloud Elements using your __GitHub__ account. When signing up via GitHub, you must set a public email address in your GitHub profile. Screen shots on how to set a public email are in the previous section.
![ERP Hub Quick Start Guide 3](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuideSignup.png)

Once you are logged in to the console, click on “Elements Catalog”.
![ERP Hub Quick Start Guide 4](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuide1.png)

Click “ERP” from the list of Elements.
![ERP Hub Quick Start Guide 5](http://cloud-elements.com/wp-content/uploads/2015/07/QuickStartERP1.png)

Click “Add Instance” for NetSuite.
![ERP Hub Quick Start Guide 6](http://cloud-elements.com/wp-content/uploads/2015/07/QuickStartERP2.png)

Type a name for the Instance, input credentials, and click “Next”.
![ERP Hub Quick Start Guide 7](http://cloud-elements.com/wp-content/uploads/2015/07/QuickStartERP3.png)

Click “Done”
![ERP Hub Quick Start Guide 9](http://cloud-elements.com/wp-content/uploads/2015/07/QuickStartERP4.png)

Click the “Documentation” link.
![ERP Hub Quick Start Guide 10](http://cloud-elements.com/wp-content/uploads/2015/07/QuickStartERP5.png)

Scroll down to find the /customers API calls. Click the “POST /customers” link.
![ERP Hub Quick Start Guide 11](http://cloud-elements.com/wp-content/uploads/2015/07/QuickStartERP6.png)

Click “Model Schema”

Copy “Model Schema”
![ERP Hub Quick Start Guide 11](http://cloud-elements.com/wp-content/uploads/2015/07/QuickStartERP7.png)

Scroll down to Parameters
![ERP Hub Quick Start Guide 12](http://cloud-elements.com/wp-content/uploads/2014/10/QuickGuideERP7.png)

Click inside of Model Schema field

Fill in JSON field with correct values in between the quotes. You can also cut and paste the sample JSON below:

```JSON
{
  "lastName":"Smith",
  "companyName":"Acme Company",
  "isPerson":true,
  "subsidiary":{
    "internalId":"1",
    "name":"Acme Mfg."
  },
  "firstName":"Jon",
  "entityStatus":{
    "internalId":"13",
    "name":"CUSTOMER-Closed Won"
  }
}
```

Scroll down to the bottom of the green field and click the “Try it out!” button.

Upon successful completion of the API call, your account should be created within your ERP service.
![ERP Hub Quick Start Guide 13](http://cloud-elements.com/wp-content/uploads/2015/07/QuickStartERP8.png)


Example of Successful Response

```JSON
{
    "lastName": "Smith",
    "isInactive": false,
    "companyName": "Acme Company",
    "receivablesAccount": {
      "internalId": "-10",
      "name": "Use System Preference"
    },
    "consolBalance": -32.3,
    "isPerson": true,
    "lastPageVisited": "Shopping Cart",
    "internalId": "-5",
    "visits": 29,
    "billPay": false,
    "dateCreated": 1377154800000,
    "consolDepositBalance": 0,
    "altEmail": "jon@acme.com",
    "accessRole": {
      "internalId": "14",
      "name": "Customer Center"
    },
    "unbilledOrders": 49.98,
    "consolUnbilledOrders": 49.98,
    "currency": {
      "internalId": "1",
      "name": "USA"
    },
    "consolOverdueBalance": 0,
    "firstVisit": 1423167725000,
    "email": "jon@acme.com",
    "giveAccess": true,
    "customFieldList": {
      "customField": [
        {
          "internalId": "24",
          "scriptId": "custentity18",
          "value": false
        },
        {
          "internalId": "31",
          "scriptId": "custentity6",
          "value": {
            "internalId": "4",
            "name": "Computers, Peripherals, and Software",
            "typeId": "15"
          }
        },
        {
          "internalId": "32",
          "scriptId": "custentity7",
          "value": {
            "internalId": "1",
            "name": "1 - 99 Employees",
            "typeId": "17"
          }
        },
        {
          "internalId": "33",
          "scriptId": "custentity8",
          "value": {
            "internalId": "3",
            "name": "Less than $5 million",
            "typeId": "16"
          }
        },
        {
          "internalId": "3994",
          "scriptId": "custentity_2663_customer_refund",
          "value": false
        },
        {
          "internalId": "3993",
          "scriptId": "custentity_2663_direct_debit",
          "value": false
        },
        {
          "internalId": "4565",
          "scriptId": "custentity_cust_priority",
          "value": 50
        },
        {
          "internalId": "184",
          "scriptId": "custentity_fmt_cur_sales_order",
          "value": {
            "internalId": "2570",
            "name": "Sales Order #SLS00000452",
            "typeId": "-30"
          }
        },
        {
          "internalId": "183",
          "scriptId": "custentity_fmt_cust_credit_on_hold",
          "value": false
        },
        {
          "internalId": "201",
          "scriptId": "custentity_fmt_customer_credit_on_hold",
          "value": false
        }
      ]
    },
    "taxable": false,
    "lastModifiedDate": 1424996451000,
    "lastVisit": 1457382355000,
    "externalId": "entity-5",
    "entityId": "Jon Smith",
    "subsidiary": {
      "internalId": "1",
      "name": "Honeycomb Mfg."
    },
    "clickStream": "HOME",
    "shipComplete": false,
    "firstName": "Alex",
    "stage": {
      "value": "_customer"
    },
    "creditHoldOverride": {
      "value": "_auto"
    },
    "phone": "650-555-9788",
    "entityStatus": {
      "internalId": "13",
      "name": "CUSTOMER-Closed Won"
    },
    "consolAging": 0,
    "aging": 0,
    "startDate": 1432018800000,
    "defaultAddress": "US"
  },
  {
    "consolDaysOverdue": 143,
    "salesRep": {
      "internalId": "1008",
      "name": "Jon Smith"
    },
    "isInactive": false,
    "receivablesAccount": {
      "internalId": "-10",
      "name": "Use System Preference"
    },
    "priceLevel": {
      "internalId": "1",
      "name": "List Price"
    },
    "consolBalance": 750681,
    "isPerson": false,
    "internalId": "75",
    "billPay": false,
    "dateCreated": 1377500400000,
    "consolDepositBalance": 0,
    "accessRole": {
      "internalId": "14",
      "name": "Customer Center"
    },
    "unbilledOrders": 35076.8,
    "consolUnbilledOrders": 35076.8,
    "currency": {
      "internalId": "1",
      "name": "USA"
    },
    "consolOverdueBalance": 750681,
    "email": "boughton751@christyscatering.com",
    "giveAccess": false,
    "daysOverdue": 143,
    "customFieldList": {
      "customField": [
        {
          "internalId": "16",
          "scriptId": "custentity1",
          "value": [
            {
              "internalId": "1",
              "name": "No advertisements",
              "typeId": "2"
            }
          ]
        },
        {
          "internalId": "24",
          "scriptId": "custentity18",
          "value": false
        },
        {
          "internalId": "3994",
          "scriptId": "custentity_2663_customer_refund",
          "value": false
        },
        {
          "internalId": "3993",
          "scriptId": "custentity_2663_direct_debit",
          "value": false
        },
        {
          "internalId": "4565",
          "scriptId": "custentity_cust_priority",
          "value": 50
        },
        {
          "internalId": "183",
          "scriptId": "custentity_fmt_cust_credit_on_hold",
          "value": false
        },
        {
          "internalId": "201",
          "scriptId": "custentity_fmt_customer_credit_on_hold",
          "value": false
        }
      ]
    },
    "taxable": false,
    "lastModifiedDate": 1423627251000,
    "leadSource": {
      "internalId": "99993",
      "name": "Partner Referral"
    },
    "externalId": "entity75",
    "entityId": "Anderson Boughton Inc.",
    "subsidiary": {
      "internalId": "1",
      "name": "Honeycomb Mfg."
    },
    "shipComplete": false,
    "partner": {
      "internalId": "171",
      "name": "Online electronics"
    },
    "stage": {
      "value": "_customer"
    },
    "creditHoldOverride": {
      "value": "_auto"
    },
    "phone": "206-555-1302",
    "entityStatus": {
      "internalId": "13",
      "name": "CUSTOMER-Closed Won"
    },
    "consolAging": 0,
    "aging": 0,
    "startDate": 1424246400000,
    "defaultAddress": "Anderson Boughton Inc.
1488 Main
Apt 113
Seattle WA 98106
US",
    "territory": {
      "internalId": "10",
      "name": "Western"
    }
  }
}
```

Congratulations, you just made your first API call with Cloud Elements!

Login in to your NetSuite Account or ERP service to view the account.

##### CHECKPOINT

__What we did:

* Signed up for Cloud Elements Service
* Created an Element Instance
* Created a Customer in the ERP Service using the Cloud Elements API__

Don’t stop there, keep exploring the other API calls, like GET, PATCH, and DELETE right from the console.

If you have any questions, please contact us at [support@cloud-elements.com](mailto:support@cloud-elements.com)

We will do our best to get back to you within 24 hours. Your success is our success.

Thanks for reading.

The Cloud Elements Team
