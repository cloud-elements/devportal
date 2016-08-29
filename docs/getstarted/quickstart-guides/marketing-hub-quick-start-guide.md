---
heading: Hub Level Documentation
seo: Marketing Hub Quick Start Guide | Cloud Elements API Docs
title: Marketing Hub Quick Start Guide
description: Get up and running with the Marketing Hub.
layout: docs
order: 4
---

### Marketing Hub Quick Start Guide

This guide is here to get you up and running with Cloud Elements Service in 4 minutes or less. We have provided step by step visual directions, as well as, a video of the same instructions taking you through the whole process. Watch the Video or read at your own pace.

This guide reviews the minimum number of steps to get you working with the Marketing Hub APIs. If you have not set up a new Application with Salesforce to connect with Cloud Elements, please see our [Create New Salesforce App](/docs/elements/salesforce/salesforce-endpoint-setup.html) for directions on this process.

__NOTE: In order to create a Salesforce Element Instance you must have the Enterprise edition or Professional edition with API support is required. Also, to set up a new application in Salesforce, you must have Administrator privileges. Please contact your system administrator if you do not have those privileges.__

{% include padding-all.html %}

{% include vimeo-player.html id=113630646 %}

{% include padding-all.html %}

#### What We'll Do:

1. Sign up for Cloud Elements Service

2. Create an Element Instance

3. Create an Account in the Marketing Service

#### What You Will Need:

__An Account: choose an option__

* Create a New Account
* Sign Up with GitHub
* Sign Up with Google

__A username and password for a Marketing Automation Service e.g. Salesforce Marketing Cloud, HubSpot, MailChimp, Act-On.
A new application set up with your Marketing Service__

*Salesforce Marketing Cloud will be used for this demonstration*

##### Sign Up with GitHub

Don’t have a GitHub account? Go to [http://www.github.com](http://www.github.com) and signup. It’s free!

##### Setting a Public Email in GitHub

Navigate to your settings in GitHub.
![Marketing Hub Quick Start Guide 1](http://cloud-elements.com/wp-content/uploads/2014/08/gitHub2.gif)

Type in your public email in the designated field and click “Update Profile”.

All set!

The first step is to sign up for Cloud Elements Service.
![Marketing Hub Quick Start Guide 2](http://cloud-elements.com/wp-content/uploads/2014/08/gitHub21.gif)

##### Sign Up for Cloud Elements Services

To sign up for the Cloud Elements service, using a web browser, go to [https://console.cloud-elements.com/elements/jsp/signup.jsp](https://console.cloud-elements.com/elements/jsp/signup.jsp).

You can create a new account with Cloud Elements using your __GitHub__ account. When signing up via GitHub, you must set a public email address in your GitHub profile. Screen shots on how to set a public email are in the previous section.
![Marketing Hub Quick Start Guide 3](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuideSignup.png)

Once you are logged in to the console, click on “Elements Catalog”.
![Marketing Hub Quick Start Guide 4](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuide1.png)

Click “Marketing” from the list of Elements.
![Marketing Hub Quick Start Guide 5](http://cloud-elements.com/wp-content/uploads/2014/10/QuickGuideMarketing1.png)

Click “Add Instance” for Salesforce Marketing Cloud.
![Marketing Hub Quick Start Guide 6](http://cloud-elements.com/wp-content/uploads/2014/10/QuickGuideMarketing2.png)

Type a name for the Instance and click “Next”.
![Marketing Hub Quick Start Guide 7](http://cloud-elements.com/wp-content/uploads/2014/10/QuickGuideMarketing41.png)

Login to your Salesforce Account to Authorize the app.
![Marketing Hub Quick Start Guide 8](http://cloud-elements.com/wp-content/uploads/2014/10/QuickGuideSFDCLogin.png)

Click “Done”
![Marketing Hub Quick Start Guide 9](http://cloud-elements.com/wp-content/uploads/2014/10/QuickGuideMarketing4.png)

Click the “Documentation” link.
![Marketing Hub Quick Start Guide 10](http://cloud-elements.com/wp-content/uploads/2014/10/QuickGuideMarketing5.png)

Scroll down past accounts to campaigns. Click the “POST /campaigns” link.
![Marketing Hub Quick Start Guide 11](http://cloud-elements.com/wp-content/uploads/2014/10/QuickGuideMarketing6.png)

Scroll down to Parameters
![Marketing Hub Quick Start Guide 12](http://cloud-elements.com/wp-content/uploads/2014/10/QuickGuideMarketing7.png)

Click “Model Schema”

Fill in JSON field with correct values in between the quotes. You can also cut and paste the sample JSON below:

```JSON
{
  "Name": "Car Campaign",
  "Status": "Planned",
  "Description": "Auto Campaign",
  "Type": "Conference"
}
```

Scroll down to the bottom of the green field and click the “Try it out!” button.

Upon successful completion of the API call, your account should be created within your Marketing service.
![Marketing Hub Quick Start Guide 13](http://cloud-elements.com/wp-content/uploads/2014/10/QuickGuideMarketing8.png)


Example of Successful Response

```JSON
{
  "Name": "Car Campaign",
  "Status": "Planned",
  "Description": "Auto Campaign",
  "Type": "Conference",
  "Id": "701i00001758MAAQ"
}
```

Congratulations, you just made your first API call with Cloud Elements!

Login in to your Salesforce Account or Marketing service to view the account.

##### CHECKPOINT

__What we did:

* Signed up for Cloud Elements Service
* Created an Element Instance
* Created a Campaign in the Marketing Service using the Cloud Elements API__

Don’t stop there, keep exploring the other API calls, like GET, PATCH, and DELETE right from the console.

If you have any questions, please contact us at [support@cloud-elements.com](mailto:support@cloud-elements.com)

We will do our best to get back to you within 24 hours. Your success is our success.

Thanks for reading.

The Cloud Elements Team
