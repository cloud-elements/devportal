---
heading: Hub Level Documentation
seo: eCommerce Hub Quick Start Guide | Cloud Elements API Docs
title: eCommerce Hub Quick Start Guide
description: Get up and running with the eCommerce Hub.
layout: sidebarelementdoc
order: 4
redirect_from:
  - /docs/getstarted/quickstart-guides/ecommerce-hub-quick-start-guide.html
---

### eCommerce Hub Quick Start Guide

This guide is here to get you up and running with Cloud Elements Service in 4 minutes or less. We have provided step by step visual directions, as well as, a video of the same instructions taking you through the whole process. Watch the Video or read at your own pace.

This guide reviews the minimum number of steps to get you working with the eCommerce Hub APIs. If you have not set up a new Application with Shopify to connect with Cloud Elements, please see our [Create New Shopify App](/docs/elements/shopify/setup.html) for directions on this process.

{% include padding-all.html %}

{% include vimeo-player.html id=116257768 %}

{% include padding-all.html %}

#### What We'll Do:

1. Sign up for Cloud Elements Service

2. Create an Element Instance

3. Create an Account in the eCommerce Service

#### What You Will Need:

__An Account: choose an option__

* Create a New Account
* Sign Up with GitHub
* Sign Up with Google

__A username, password, and a store setup for a eCommerce Service e.g. Shopify, Ecwid, Volusion.
A new application set up with your eCommerce Service__

*Shopfiy will be used for this demonstration*

##### Sign Up with GitHub

Don’t have a GitHub account? Go to [http://www.github.com](http://www.github.com) and signup. It’s free!

##### Setting a Public Email in GitHub

Navigate to your settings in GitHub.
![eCommerce Hub Quick Start Guide 1](http://cloud-elements.com/wp-content/uploads/2014/08/gitHub2.gif)

Type in your public email in the designated field and click “Update Profile”.

All set!

The first step is to sign up for Cloud Elements Service.
![eCommerce Hub Quick Start Guide 2](http://cloud-elements.com/wp-content/uploads/2014/08/gitHub21.gif)

##### Sign Up for Cloud Elements Services

To sign up for the Cloud Elements service, using a web browser, go to [https://console.cloud-elements.com/elements/jsp/signup.jsp](https://console.cloud-elements.com/elements/jsp/signup.jsp).

You can create a new account with Cloud Elements using your __GitHub__ account. When signing up via GitHub, you must set a public email address in your GitHub profile. Screen shots on how to set a public email are in the previous section.
![eCommerce Hub Quick Start Guide 3](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuideSignup.png)

Once you are logged in to the console, click on “Elements Catalog”.
![eCommerce Hub Quick Start Guide 4](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuide1.png)

Click “eCommerce” from the list of Elements.
![eCommerce Hub Quick Start Guide 5](http://cloud-elements.com/wp-content/uploads/2015/01/QuickGuideeCommerce1.png)

Click “Add Instance” Shopify.
![eCommerce Hub Quick Start Guide 6](http://cloud-elements.com/wp-content/uploads/2015/01/QuickGuideeCommerce2.png)

Type a name for the Instance, input your Shopify Site Address and click “Next”.
![eCommerce Hub Quick Start Guide 7](http://cloud-elements.com/wp-content/uploads/2015/01/QuickGuideeCommerce4.png)

Login to your Shopify Store to Authorize the app.
![eCommerce Hub Quick Start Guide 8](http://cloud-elements.com/wp-content/uploads/2015/01/QuickGuideeCommerce5.png)

Click “Done”
![eCommerce Hub Quick Start Guide 9](http://cloud-elements.com/wp-content/uploads/2015/01/QuickGuideeCommerce6.png)

Click the “Documentation” link.
![eCommerce Hub Quick Start Guide 10](http://cloud-elements.com/wp-content/uploads/2015/01/QuickGuideeCommerce7.png)

Click the “POST /customers” link.
![eCommerce Hub Quick Start Guide 11](http://cloud-elements.com/wp-content/uploads/2015/01/QuickGuideeCommerce8.png)

Scroll down to Parameters
![eCommerce Hub Quick Start Guide 12](http://cloud-elements.com/wp-content/uploads/2015/01/QuickGuideeCommerce9.png)

Click “Model Schema”

Fill in JSON field with correct values in between the quotes. You can also cut and paste the sample JSON below:

```JSON
{
  "first_name": "Jon",
  "last_name": "Smith",
  "email": "jon@acme.com",
  "tags": "",
  "last_order_id": 0,
  "updated_at": "",
  "last_order_name": "",
  "total_spent": "",
  "state": "",
  "created_at": "",
  "verified_email": "jon@acme.com",
  "accepts_marketing": false,
  "orders_count": 0,
  "addresses": [
    {
      "address1": "123 Main",
      "city": "Denver",
      "province": "CO",
      "phone": "333-333-3333",
      "zip": "80231",
      "last_name": "Smith",
      "first_name": "Jon",
      "country": "United States"
    }
  ]
}
```

Scroll down to the bottom of the green field and click the “Try it out!” button.

Upon successful completion of the API call, your account should be created within your eCommerce service.
![eCommerce Hub Quick Start Guide 13](http://cloud-elements.com/wp-content/uploads/2015/01/QuickGuideeCommerce10.png)


Example of Successful Response

```JSON
{
  "tags": "",
  "default_address": {
    "id": 67055,
    "zip": "80231",
    "first_name": "Jon",
    "phone": "333-333-3333",
    "default": true,
    "province_code": "CO",
    "name": "Jon Smith",
    "company": null,
    "province": "Colorado",
    "last_name": "Smith",
    "address1": "123 Main",
    "address2": null,
    "country_code": "US",
    "country_name": "United States",
    "country": "United States",
    "city": "Denver"
  },
  "total_spent": "0.00",
  "state": "disabled",
  "orders_count": 0,
  "id": 27903,
  "first_name": "Jon",
  "updated_at": "2015-01-07T17:45:11-05:00",
  "email": "jon@acme.com",
  "last_name": "Smith",
  "created_at": "2015-01-07T17:45:11-05:00",
  "addresses": [
    {
      "id": 7055,
      "zip": "80231",
      "first_name": "Jon",
      "phone": "333-333-3333",
      "default": true,
      "province_code": "CO",
      "name": "Jon Smith",
      "company": null,
      "province": "Colorado",
      "last_name": "Smith",
      "address1": "123 Main",
      "address2": null,
      "country_code": "US",
      "country_name": "United States",
      "country": "United States",
      "city": "Denver"
    }
  ],
  "verified_email": true,
  "accepts_marketing": false
}
```

Congratulations, you just made your first API call with Cloud Elements!

Login in to your Shopify Account or eCommerce service to view the account.

##### CHECKPOINT

__What we did:

* Signed up for Cloud Elements Service
* Created an Element Instance
* Created a Customer in the eCommerce Service using the Cloud Elements API__

Don’t stop there, keep exploring the other API calls, like GET, PATCH, and DELETE right from the console.

If you have any questions, please contact us at [support@cloud-elements.com](mailto:support@cloud-elements.com)

We will do our best to get back to you within 24 hours. Your success is our success.

Thanks for reading.

The Cloud Elements Team
