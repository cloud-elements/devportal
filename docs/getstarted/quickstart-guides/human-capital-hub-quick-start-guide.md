---
heading: Hub Level Documentation
seo: Human Capital Hub Quick Start Guide | Cloud Elements API Docs
title: Human Capital Hub Quick Start Guide
description: Get up and running with the Human Capital Hub.
layout: docs
order: 4
---

## Human Capital Hub Quick Start Guide

This guide is here to get you up and running with Cloud Elements Service in 4 minutes or less. We have provided step by step visual directions, as well as, a video of the same instructions taking you through the whole process. Watch the Video or read at your own pace.

This guide reviews the minimum number of steps to get you working with the Human Capital Hub APIs. If you have not set up a new Application with NetSuite to connect with Cloud Elements, please see our [Create New NetSuite App](/docs/elements/netsuite/netsuite-endpoint-setup.html) for directions on this process.

{% include padding-all.html %}

{% include vimeo-player.html id=134148111 %}

{% include padding-all.html %}

#### What We'll Do:

1. Sign up for Cloud Elements Service

2. Create an Element Instance

3. Create an Account in the Human Capital Service

#### What You Will Need:

__An Account: choose an option__

* Create a New Account
* Sign Up with GitHub
* Sign Up with Google

__A username and password for a Human Capital Automation Service e.g. Salesforce Human Capital Cloud, HubSpot, MailChimp, Act-On.
A new application set up with your Human Capital Service__

*NetSuite will be used for this demonstration*

##### Sign Up with GitHub

Don’t have a GitHub account? Go to [http://www.github.com](http://www.github.com) and signup. It’s free!

##### Setting a Public Email in GitHub

Navigate to your settings in GitHub.
![Human Capital Hub Quick Start Guide 1](http://cloud-elements.com/wp-content/uploads/2014/08/gitHub2.gif)

Type in your public email in the designated field and click “Update Profile”.

All set!

The first step is to sign up for Cloud Elements Service.
![Human Capital Hub Quick Start Guide 2](http://cloud-elements.com/wp-content/uploads/2014/08/gitHub21.gif)

##### Sign Up for Cloud Elements Services

To sign up for the Cloud Elements service, using a web browser, go to [https://console.cloud-elements.com/elements/jsp/signup.jsp](https://console.cloud-elements.com/elements/jsp/signup.jsp).

You can create a new account with Cloud Elements using your __GitHub__ account. When signing up via GitHub, you must set a public email address in your GitHub profile. Screen shots on how to set a public email are in the previous section.
![Human Capital Hub Quick Start Guide 3](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuideSignup.png)

Once you are logged in to the console, click on “Elements Catalog”.
![Human Capital Hub Quick Start Guide 4](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuide1.png)

Click “Human Capital” from the list of Elements.
![Human Capital Hub Quick Start Guide 5](http://cloud-elements.com/wp-content/uploads/2015/07/HumanCapitalQuickStart1.png)

Click “Add Instance” for NetSuite.
![Human Capital Hub Quick Start Guide 6](http://cloud-elements.com/wp-content/uploads/2015/07/HumanCapitalQuickStart2.png)

Type a name for the Instance, input credentials, and click “Next”.
![Human Capital Hub Quick Start Guide 7](http://cloud-elements.com/wp-content/uploads/2015/07/HumanCapitalQuickStart3.png)

Click “Done”
![Human Capital Hub Quick Start Guide 9](http://cloud-elements.com/wp-content/uploads/2015/07/HumanCapitalQuickStart4.png)

Click the “Documentation” link.
![Human Capital Hub Quick Start Guide 10](http://cloud-elements.com/wp-content/uploads/2015/07/HumanCapitalQuickStart5.png)

Click the “POST /employees” link.

Click “Model Schema”

Copy “Model Schema
![Human Capital Hub Quick Start Guide 11](http://cloud-elements.com/wp-content/uploads/2015/07/HumanCapitalQuickStart6.png)

Click “Model Schema”

Copy “Model Schema”
![Human Capital Hub Quick Start Guide 11](http://cloud-elements.com/wp-content/uploads/2015/07/QuickStartHuman Capital7.png)

Click inside of Model Schema field

Fill in JSON field with correct values in between the quotes. You can also cut and paste the sample JSON below:

```JSON
{
  "phone": "(333) 393-8090",
  "billPay": false,
  "giveAccess": false,
  "addressbookList": {
    "addressbook": [
      {
        "addressbookAddress": {
          "zip": "80216",
          "addr1": "3350 Brighton Blvd",
          "override": false,
          "state": "CO",
          "addressee": "Jon Smith",
          "city": "Denver",
          "country": {
            "value": "_unitedStates"
          }
        },
        "defaultBilling": true,
        "defaultShipping": true
      }
    ]
  },
  "subsidiary" : {
    "internalId" : "1"
  },
  "firstName": "Jon",
  "middleName": "T",
  "lastName": "Smith",
  "mobilePhone": "(333) 333-3369",
  "email": "jon@acme.com",
  "isSalesRep": false,
  "sendEmail": false
}
```

Scroll down to the bottom of the green field and click the “Try it out!” button.

Upon successful completion of the API call, your account should be created within your Human Capital service.
![Human Capital Hub Quick Start Guide 13](http://cloud-elements.com/wp-content/uploads/2015/07/HumanCapitalQuickStart7.png)


Example of Successful Response

```JSON
{
  "eligibleForCommission": false,
  "lastName": "Smith",
  "gender": {
    "value": "_omitted"
  },
  "isInactive": false,
  "isSupportRep": false,
  "purchaseOrderLimit": 0,
  "expenseLimit": 0,
  "isSalesRep": false,
  "internalId": "7050",
  "sendEmail": false,
  "billPay": false,
  "dateCreated": 1437498671000,
  "isJobResource": false,
  "subscriptionsList": {
    "subscriptions": [
      {
        "subscribed": "T",
        "lastModifiedDate": 1437498671000,
        "subscription": "2"
      },
      {
        "subscribed": "T",
        "lastModifiedDate": 1437498671000,
        "subscription": "1"
      },
      {
        "subscribed": "T",
        "lastModifiedDate": 1437498671000,
        "subscription": "4"
      },
      {
        "subscribed": "T",
        "lastModifiedDate": 1437498671000,
        "subscription": "5"
      },
      {
        "subscribed": "T",
        "lastModifiedDate": 1437498671000,
        "subscription": "3"
      }
    ],
    "replaceAll": false
  },
  "currency": {
    "internalId": "1",
    "name": "USA"
  },
  "requirePwdChange": false,
  "email": "jon@acme.com",
  "giveAccess": false,
  "customFieldList": {
    "customField": [
      {
        "internalId": "696",
        "scriptId": "custentity2",
        "value": false
      },
      {
        "internalId": "3992",
        "scriptId": "custentity_2663_payment_method",
        "value": false
      }
    ]
  },
  "hireDate": 1437462000000,
  "addressbookList": {
    "addressbook": [
      {
        "internalId": "248376",
        "defaultBilling": true,
        "label": "3350 Brighton Blvd",
        "defaultShipping": true,
        "addressbookAddress": {
          "zip": "80216",
          "country": {
            "value": "_unitedStates"
          },
          "addressee": "Jon Smith",
          "addr1": "3350 Brighton Blvd",
          "city": "Denver",
          "state": "CO",
          "override": false,
          "addrText": "Jon Smith\n3350 Brighton Blvd\nDenver CO 80216\nUnited States"
        }
      }
    ],
    "replaceAll": false
  },
  "lastModifiedDate": 1437498671000,
  "initials": "JTS",
  "customForm": {
    "internalId": "115",
    "name": "Ramsey Employee Form"
  },
  "workCalendar": {
    "internalId": "1",
    "name": "Default Work Calendar"
  },
  "entityId": "Jon T Smith",
  "subsidiary": {
    "internalId": "1",
    "name": "Honeycomb Mfg."
  },
  "firstName": "Jon",
  "mobilePhone": "(333) 333-3369",
  "phone": "(333) 393-8090",
  "globalSubscriptionStatus": {
    "value": "_softOptIn"
  },
  "middleName": "T",
  "defaultAddress": "Jon Smith\n3350 Brighton Blvd\nDenver CO 80216\nUnited States"
}
```

Congratulations, you just made your first API call with Cloud Elements!

Login in to your NetSuite Account or Human Capital service to view the account.

##### CHECKPOINT

__What we did:

* Signed up for Cloud Elements Service
* Created an Element Instance
* Created an Employee in the Human Capital Service using the Cloud Elements API__

Don’t stop there, keep exploring the other API calls, like GET, PATCH, and DELETE right from the console.

If you have any questions, please contact us at [support@cloud-elements.com](mailto:support@cloud-elements.com)

We will do our best to get back to you within 24 hours. Your success is our success.

Thanks for reading.

The Cloud Elements Team
