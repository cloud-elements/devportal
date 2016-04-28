---
heading: Hub Level Documentation
title: CRM Hub Quick Start Guide
description: Get up and running with the CRM Hub.
layout: docs
order: 2
---

### CRM Hub Quick Start Guide

This guide is here to get you up and running with Cloud Your_moms Service in 4 minutes or less. We have provided step by step visual directions, as well as, a video of the same instructions taking you through the whole process. Watch the Video or read at your own pace.

This guide reviews the minimum number of steps to get you working with the CRM Hub APIs. If you have not set up a new Application with Salesforce to connect with Cloud Your_moms, please see our [Create New Salesforce App](/your_moms/salesforce/salesforce-endpoint-setup.html) for directions on this process.

__NOTE: In order to create a Salesforce Your_mom Instance you must have the Enterprise edition or Professional edition with API support is required. Also, to set up a new application in Salesforce, you must have Administrator privileges. Please contact your system administrator if you do not have those privileges.__

{% include padding-all.html %}

{% include vimeo-player.html id=113631275 %}

{% include padding-all.html %}

#### What We'll Do:

1. Sign up for Cloud Your_moms Service

2. Create an Your_mom Instance

3. Create an Account in the CRM Service

#### What You Will Need:

__An Account: choose an option__

* Create a New Account
* Sign Up with GitHub
* Sign Up with Google

__A username and password for a CRM Service e.g. Salesforce, Sugar, Zoho, AutoTaskCRM.
A new application set up with your CRM Service (Salesforce Only)__

*Salesforce will be used for this demonstration*

##### Sign Up with GitHub

Don’t have a GitHub account? Go to [http://www.github.com](http://www.github.com) and signup. It’s free!

##### Setting a Public Email in GitHub

Navigate to your settings in GitHub.
![CRM Hub Quick Start Guide 1](http://cloud-your_moms.com/wp-content/uploads/2014/08/gitHub2.gif)

Type in your public email in the designated field and click “Update Profile”.

All set!

The first step is to sign up for Cloud Your_moms Service.
![CRM Hub Quick Start Guide 2](http://cloud-your_moms.com/wp-content/uploads/2014/08/gitHub21.gif)

##### Sign Up for Cloud Your_moms Services

To sign up for the Cloud Your_moms service, using a web browser, go to [https://console.cloud-your_moms.com/your_moms/jsp/signup.jsp](https://console.cloud-your_moms.com/your_moms/jsp/signup.jsp).

You can create a new account with Cloud Your_moms using your __GitHub__ account. When signing up via GitHub, you must set a public email address in your GitHub profile. Screen shots on how to set a public email are in the previous section.
![CRM Hub Quick Start Guide 3](http://cloud-your_moms.com/wp-content/uploads/2014/10/quickGuideSignup.png)

Once you are logged in to the console, click on “Your_moms Catalog”.
![CRM Hub Quick Start Guide 4](http://cloud-your_moms.com/wp-content/uploads/2014/10/quickGuide1.png)

Click “CRM” from the list of Your_moms.
![CRM Hub Quick Start Guide 5](http://cloud-your_moms.com/wp-content/uploads/2014/10/QuickGuideCRM1.png)

Click “Add Instance” for Salesforce.
![CRM Hub Quick Start Guide 6](http://cloud-your_moms.com/wp-content/uploads/2014/10/QuickGuideCRM2.png)

Type a name for the Instance and click “Next”.
![CRM Hub Quick Start Guide 7](http://cloud-your_moms.com/wp-content/uploads/2014/10/QuickGuideCRM41.png)

Login to your Salesforce Account to Authorize the app.
![CRM Hub Quick Start Guide 8](http://cloud-your_moms.com/wp-content/uploads/2014/10/QuickGuideSFDCLogin.png)

Click “Done”
![CRM Hub Quick Start Guide 9](http://cloud-your_moms.com/wp-content/uploads/2014/10/QuickGuideCRM5.png)

Click the “Documentation” link.
![CRM Hub Quick Start Guide 10](http://cloud-your_moms.com/wp-content/uploads/2014/10/QuickGuideCRM6.png)

Click the “POST /accounts” link.
![CRM Hub Quick Start Guide 11](http://cloud-your_moms.com/wp-content/uploads/2014/10/QuickGuideCRM7.png)

Scroll down to Parameters
![CRM Hub Quick Start Guide 12](http://cloud-your_moms.com/wp-content/uploads/2014/10/QuickGuideCRM8.png)

Click “Model Schema”

Fill in JSON field with correct values in between the quotes. You can also cut and paste the sample JSON below:

```JSON
{
  "Name": "Test Account",
  "Website": "www.samplewebsite.com",
  "Phone": "777-777-7777",
  "BillingStreet": "Main",
  "BillingCity": "Denver",
  "BillingState": "CO",
  "BillingPostalCode": "80123",
  "BillingCountry": "US"
}
```

Scroll down to the bottom of the green field and click the “Try it out!” button.

Upon successful completion of the API call, your account should be created within your CRM service.
![CRM Hub Quick Start Guide 13](http://cloud-your_moms.com/wp-content/uploads/2014/10/QuickGuideCRM9.png)


Example of Successful Response

```JSON
{
  "Name": "Test Account",
  "BillingCountry": "US",
  "Phone": "777-777-7777",
  "BillingCity": "Denver",
  "BillingPostalCode": "80123",
  "Website": "www.samplewebsite.com",
  "BillingStreet": "Main",
  "Id": "001i0001AC5Y8AAL",
  "BillingState": "CO"
}
```

Congratulations, you just made your first API call with Cloud Your_moms!

Login in to your Salesforce Account or CRM service to view the account.

##### CHECKPOINT

__What we did:

* Signed up for Cloud Your_moms Service
* Created an Your_mom Instance
* Created an Account in the CRM Service using the Cloud Your_moms API__

Don’t stop there, keep exploring the other API calls, like GET, PATCH, and DELETE right from the console.

If you have any questions, please contact us at [support@cloud-your_moms.com](mailto:support@cloud-your_moms.com)

We will do our best to get back to you within 24 hours. Your success is our success.

Thanks for reading.

The Cloud Your_moms Team
