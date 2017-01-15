---
heading: Hub Level Documentation
seo: Messaging Hub Quick Start Guide | Cloud Elements API Docs
title: Messaging Hub Quick Start Guide
description: Get up and running with the Messaging Hub.
layout: docs
order: 4
redirect_from:
  - /docs/getstarted/quickstart-guides/messaging-hub-quick-start-guide.html
---

## Messaging Hub Quick Start Guide

This guide is here to get you up and running with Cloud Elements Service in 4 minutes or less. We have provided step by step visual directions, as well as, a video of the same instructions taking you through the whole process. Watch the Video or read at your own pace.

This guide reviews the minimum number of steps to get you working with the Messaging Hub APIs. If you have not set up a new Messaging Service, such as SendGrid, InfoBip, or Twilio we have a trial account option to get you started.

{% include padding-all.html %}

{% include vimeo-player.html id=111150664 %}

{% include padding-all.html %}

#### What We'll Do:

1. Sign up for Cloud Elements Service

2. Create an Element Instance

3. Create an Account in the Messaging Service

#### What You Will Need:

__An Account: choose an option__

* Create a New Account
* Sign Up with GitHub
* Sign Up with Google

__A username and password for a Messaging Service e.g. SendGrid, InfoBip, or Twilio.

Haven’t signed up for service, no problem. We have a trial account option available__

*SendGrid will be used for this demonstration*

##### Sign Up with GitHub

Don’t have a GitHub account? Go to [http://www.github.com](http://www.github.com) and signup. It’s free!

##### Setting a Public Email in GitHub

Navigate to your settings in GitHub.
![Messaging Hub Quick Start Guide 1](http://cloud-elements.com/wp-content/uploads/2014/08/gitHub2.gif)

Type in your public email in the designated field and click “Update Profile”.

All set!

The first step is to sign up for Cloud Elements Service.
![Messaging Hub Quick Start Guide 2](http://cloud-elements.com/wp-content/uploads/2014/08/gitHub21.gif)

##### Sign Up for Cloud Elements Services

To sign up for the Cloud Elements service, using a web browser, go to [https://console.cloud-elements.com/elements/jsp/signup.jsp](https://console.cloud-elements.com/elements/jsp/signup.jsp).

You can create a new account with Cloud Elements using your __GitHub__ account. When signing up via GitHub, you must set a public email address in your GitHub profile. Screen shots on how to set a public email are in the previous section.
![Messaging Hub Quick Start Guide 3](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuideSignup.png)

Once you are logged in to the console, click on “Elements Catalog”.
![Messaging Hub Quick Start Guide 4](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuide1.png)

Click “Messaging” from the list of Elements.
![Messaging Hub Quick Start Guide 5](http://cloud-elements.com/wp-content/uploads/2014/11/MessagingHubQS1.png)

Click “Add Instance” SendGrid.
![Messaging Hub Quick Start Guide 6](http://cloud-elements.com/wp-content/uploads/2014/11/MessagingHubQS2.png)

Click “Use Our Trial Account” to provision an Instance.
![Messaging Hub Quick Start Guide 7](http://cloud-elements.com/wp-content/uploads/2014/11/MessagingHubQS3.png)

Click “Done”
![Messaging Hub Quick Start Guide 9](http://cloud-elements.com/wp-content/uploads/2014/11/MessagingHubQS4.png)

Click the “Documentation” link.
![Messaging Hub Quick Start Guide 10](http://cloud-elements.com/wp-content/uploads/2014/11/MessagingHubQS5.png)

Click the “POST /messages” link.
![Messaging Hub Quick Start Guide 11](http://cloud-elements.com/wp-content/uploads/2014/11/MessagingHubQS6.png)

Scroll down to Parameters
![Messaging Hub Quick Start Guide 12](http://cloud-elements.com/wp-content/uploads/2014/11/MessagingHubQS7.png)

Click “Model Schema”

Fill in JSON field with correct values in between the quotes. You can also cut and paste the sample JSON below:

```JSON
{
  "providerName": "SENDGRID",
  "subject": "Test",
  "message": "This is a test",
  "priority": "High",
  "status": "sent",
  "direction": "OUTBOUND",
  "sent": false,
  "received": false,
  "sentTime": "",
  "mimeType": "",
  "createdDate": "",
  "updateDate": "",
  "from": "joe@acmedata.com",
  "to": "jon@acmedata.com",
  "cc": "jon@acmedata.com",
  "clickTrack": false,
  "openTrack": false
}
```

Scroll down to the bottom of the green field and click the “Try it out!” button.

Upon successful completion of the API call, your account should be created within your Messaging service.
![Messaging Hub Quick Start Guide 13](http://cloud-elements.com/wp-content/uploads/2014/11/MessagingHubQS8.png)


Example of Successful Response

```JSON
{
  "id": 714,
  "providerName": "SENDGRID",
  "subject": "Test",
  "message": "This is a test",
  "priority": "High",
  "status": "sent",
  "direction": "OUTBOUND",
  "sent": true,
  "received": false,
  "sentTime": "2014-11-04T21:43:39Z",
  "mimeType": "text/html",
  "clickTrack": false,
  "openTrack": false,
  "from": "joe@acmedata.com",
  "to": "jon@acmedata.com",
  "cc": "jon@acmedata.com"
}
```

Congratulations, you just made your first API call with Cloud Elements!

Login in to your SendGrid Account or Messaging service to view the account.

##### CHECKPOINT

__What we did:

* Signed up for Cloud Elements Service
* Created an Element Instance
* Created a Message in the Messaging Service using the Cloud Elements API__

Don’t stop there, keep exploring the other API calls, like GET, PATCH, and DELETE right from the console.

If you have any questions, please contact us at [support@cloud-elements.com](mailto:support@cloud-elements.com)

We will do our best to get back to you within 24 hours. Your success is our success.

Thanks for reading.

The Cloud Elements Team
