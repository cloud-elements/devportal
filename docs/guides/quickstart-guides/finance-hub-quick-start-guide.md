---
heading: Hub Level Documentation
seo: Finance Hub Quick Start Guide | Cloud Elements API Docs
title: Finance Hub Quick Start Guide
description: Get up and running with the Finance Hub.
layout: docs
order: 4
redirect_from:
  - /docs/getstarted/quickstart-guides/finance-hub-quick-start-guide.html
---

## Finance Hub Quick Start Guide

This guide is here to get you up and running with Cloud Elements Service in 4 minutes or less. We have provided step by step visual directions, as well as, a video of the same instructions taking you through the whole process. Watch the Video or read at your own pace.

This guide reviews the minimum number of steps to get you working with the Finance Hub APIs. If you have not set up a new Application with QuickBooks to connect with Cloud Elements, please see our [Create New QuickBooks App](/docs/elements/quickbooks/quickbooks-endpoint-setup.html) for directions on this process.

{% include padding-all.html %}

{% include vimeo-player.html id=111569756 %}

{% include padding-all.html %}

#### What We'll Do:

1. Sign up for Cloud Elements Service

2. Create an Element Instance

3. Create an Account in the Finance Service

#### What You Will Need:

__An Account: choose an option__

* Create a New Account
* Sign Up with GitHub
* Sign Up with Google

__A username and password for a Finance Service e.g. QuickBooks.__

*QuickBooks will be used for this demonstration*

##### Sign Up with GitHub

Don’t have a GitHub account? Go to [http://www.github.com](http://www.github.com) and signup. It’s free!

##### Setting a Public Email in GitHub

Navigate to your settings in GitHub.
![Finance Hub Quick Start Guide 1](http://cloud-elements.com/wp-content/uploads/2014/08/gitHub2.gif)

Type in your public email in the designated field and click “Update Profile”.

All set!

The first step is to sign up for Cloud Elements Service.
![Finance Hub Quick Start Guide 2](http://cloud-elements.com/wp-content/uploads/2014/08/gitHub21.gif)

##### Sign Up for Cloud Elements Services

To sign up for the Cloud Elements service, using a web browser, go to [https://console.cloud-elements.com/elements/jsp/signup.jsp](https://console.cloud-elements.com/elements/jsp/signup.jsp).

You can create a new account with Cloud Elements using your __GitHub__ account. When signing up via GitHub, you must set a public email address in your GitHub profile. Screen shots on how to set a public email are in the previous section.
![Finance Hub Quick Start Guide 3](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuideSignup.png)

Once you are logged in to the console, click on “Elements Catalog”.
![Finance Hub Quick Start Guide 4](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuide1.png)

Click “Finance” from the list of Elements.
![Finance Hub Quick Start Guide 5](http://cloud-elements.com/wp-content/uploads/2014/11/FinanceHubQS1.png)

Click “Add Instance” QuickBooks.
![Finance Hub Quick Start Guide 6](http://cloud-elements.com/wp-content/uploads/2014/11/FinanceHubQS2.png)

Type a name for the Instance and click “Next”.
![Finance Hub Quick Start Guide 7](http://cloud-elements.com/wp-content/uploads/2014/11/FinanceHubQS4.png)

Sign in to your QuickBooks account.
![Finance Hub Quick Start Guide 8](http://cloud-elements.com/wp-content/uploads/2014/11/FinanceHubQS5.png)

Select the company you wish to connect with. There’s only 1 company listed in our example.
![Finance Hub Quick Start Guide 9](http://cloud-elements.com/wp-content/uploads/2014/11/FinanceHubQS11.png)

Click “Authorize” to give Cloud Elements access.  This step completes the OAuth process.
![Finance Hub Quick Start Guide 10](http://cloud-elements.com/wp-content/uploads/2014/11/FinanceHubQS12.png)

Click “Done”
![Finance Hub Quick Start Guide 11](http://cloud-elements.com/wp-content/uploads/2014/11/FinanceHubQS6.png)

Click the “Documentation” link.
![Finance Hub Quick Start Guide 12](http://cloud-elements.com/wp-content/uploads/2014/11/FinanceHubQS7.png)

Click the “POST /customers” link.
![Finance Hub Quick Start Guide 13](http://cloud-elements.com/wp-content/uploads/2014/11/FinanceHubQS8.png)

Scroll down to Parameters
![Finance Hub Quick Start Guide 14](http://cloud-elements.com/wp-content/uploads/2014/11/FinanceHubQS9.png)

Click “Model Schema”

Fill in JSON field with correct values in between the quotes. You can also cut and paste the sample JSON below:

```JSON
{
  "primaryEmailAddr": {
    "address": "jane@samplename.com"
  },
  "defaultTaxCodeRef": {
    "name": "Jane Doe"
  },
  "preferredDeliveryMethod": "",
  "familyName": "Doe",
  "givenName": "Jane",
  "balanceWithJobs": 8633.28,
  "balance": 0,
  "title": "Mrs.",
  "salesTermRef": {
    "value": "7"
  },
  "domain": "QBO",
  "fullyQualifiedName": "Doe, Jane",
  "paymentMethodRef": {
    "value": "6"
  },
  "metaData": {
    "createTime": 0,
    "lastUpdatedTime": 0
  },
  "billAddr": {
    "postalCode": "80216",
    "countrySubDivisionCode": "",
    "line1": "Jane Doe",
    "line2": "3001 Brighton Blvd",
    "city": "Denver"
  },
  "fax": {
    "freeFormNumber": "(303) 999-9988"
  },
  "taxable": false,
  "shipAddr": {
    "postalCode": "80216",
    "countrySubDivisionCode": "CO",
    "line1": "Jane Doe",
    "line2": "3001 Brighton Blvd",
    "city": "Denver"
  },
  "job": false,
  "syncToken": "2",
  "printOnCheckName": "Jane Doe",
  "primaryPhone": {
    "freeFormNumber": "333-333-3333"
  },
  "active": false,
  "notes": "Test Notes for Jane Doe",
  "displayName": "Doe, Jane",
  "billWithParent": false,
  "sparse": false,
  "mobile": {
    "freeFormNumber": "(303) 777-9988"
  }
}
```

Scroll down to the bottom of the green field and click the “Try it out!” button.

Upon successful completion of the API call, your account should be created within your Finance service.
![Finance Hub Quick Start Guide 15](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuide13.png)


Example of Successful Response

```JSON
{
  "primaryEmailAddr": {
    "address": "jane@samplename.com"
  },
  "preferredDeliveryMethod": "Print",
  "familyName": "Doe",
  "givenName": "Jane",
  "id": "750|0",
  "balance": 0,
  "balanceWithJobs": 0,
  "title": "Mrs.",
  "salesTermRef": {
    "value": "7"
  },
  "domain": "QBO",
  "fullyQualifiedName": "Doe, Jane",
  "paymentMethodRef": {
    "value": "6"
  },
  "metaData": {
    "createTime": 1415131437000,
    "lastUpdatedTime": 1415131437000
  },
  "billAddr": {
    "id": "1580",
    "postalCode": "80216",
    "line1": "Jane Doe",
    "city": "Denver",
    "line2": "3001 Brighton Blvd"
  },
  "fax": {
    "freeFormNumber": "(303) 999-9988"
  },
  "taxable": false,
  "job": false,
  "shipAddr": {
    "id": "1581",
    "postalCode": "80216",
    "countrySubDivisionCode": "CO",
    "line1": "Jane Doe",
    "city": "Denver",
    "line2": "3001 Brighton Blvd"
  },
  "syncToken": "0",
  "printOnCheckName": "Jane Doe",
  "primaryPhone": {
    "freeFormNumber": "333-333-3333"
  },
  "active": true,
  "displayName": "Doe, Jane",
  "notes": "Test Notes for Jane Doe",
  "sparse": false,
  "billWithParent": false,
  "mobile": {
    "freeFormNumber": "(303) 777-9988"
  }
}
```

Congratulations, you just made your first API call with Cloud Elements!

Login in to your QuickBooks Account or Finance service to view the account.

##### CHECKPOINT

__What we did:

* Signed up for Cloud Elements Service
* Created an Element Instance
* Created a Customer in the Finance Service using the Cloud Elements API__

Don’t stop there, keep exploring the other API calls, like GET, PATCH, and DELETE right from the console.

If you have any questions, please contact us at [support@cloud-elements.com](mailto:support@cloud-elements.com)

We will do our best to get back to you within 24 hours. Your success is our success.

Thanks for reading.

The Cloud Elements Team
