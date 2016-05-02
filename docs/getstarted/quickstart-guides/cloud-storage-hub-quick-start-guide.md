---
heading: Hub Level Documentation
title: Cloud Storage Hub Quick Start Guide
description: Get up and running with the Cloud Storage Hub.
layout: docs
order: 3
---

### Cloud Storage Hub Quick Start Guide

This guide is here to get you up and running with Cloud Elements Service in 4 minutes or less. We have provided step by step visual directions, as well as, a video of the same instructions taking you through the whole process. Watch the Video or read at your own pace.

This guide reviews the minimum number of steps to get you working with the Documents Hub APIs

{% include padding-all.html %}

{% include vimeo-player.html id=109168129 %}

{% include padding-all.html %}

#### What We'll Do:

1. Sign up for Cloud Elements Service

2. Create an Element Instance

3. Create an Account in the Cloud Storage Service

#### What You Will Need:

__An Account: choose an option__

* Create a New Account
* Sign Up with GitHub
* Sign Up with Google

__A username and password for a Cloud Storage Account e.g. Dropbox, Box, Google Drive, OneDrive, SharePoint 2013, Amazon S3__

*Dropbox will be used for this demonstration*

##### Sign Up with GitHub

Don’t have a GitHub account? Go to [http://www.github.com](http://www.github.com) and signup. It’s free!

##### Setting a Public Email in GitHub

Navigate to your settings in GitHub.
![Cloud Storage Hub Quick Start Guide 1](http://cloud-elements.com/wp-content/uploads/2014/08/gitHub2.gif)

Type in your public email in the designated field and click “Update Profile”.

All set!

The first step is to sign up for Cloud Elements Service.
![Cloud Storage Hub Quick Start Guide 2](http://cloud-elements.com/wp-content/uploads/2014/08/gitHub21.gif)

##### Sign Up for Cloud Elements Services

To sign up for the Cloud Elements service, using a web browser, go to [https://console.cloud-elements.com/elements/jsp/signup.jsp](https://console.cloud-elements.com/elements/jsp/signup.jsp).

You can create a new account with Cloud Elements using your __GitHub__ account. When signing up via GitHub, you must set a public email address in your GitHub profile. Screen shots on how to set a public email are in the previous section.
![Cloud Storage Hub Quick Start Guide 3](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuideSignup.png)

Once you are logged in to the console, click on “Elements Catalog”.
![Cloud Storage Hub Quick Start Guide 4](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuide1.png)

Click “Cloud Storage” from the list of Elements.
![Cloud Storage Hub Quick Start Guide 5](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuide2.png)

Click “Add Instance” for Dropbox.
![Cloud Storage Hub Quick Start Guide 6](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuide3.png)

Type a name for the Instance and click “Next”.
![Cloud Storage Hub Quick Start Guide 7](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuide5.png)

Click allow to give Cloud Elements access to your account.  This step completes the OAuth process.
![Cloud Storage Hub Quick Start Guide 8](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuide7.png)

Click “Done”
![Cloud Storage Hub Quick Start Guide 9](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuide8.png

Click the “Documentation” link.
![Cloud Storage Hub Quick Start Guide 10](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuide10.png)

Click the “POST /files” link.
![Cloud Storage Hub Quick Start Guide 11](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuide12.png)

1. Click “Choose File” and select a file of your choice.

2. Type the backslash character / and the name of the file chosen for upload to put it at the root level of your account. In the example, the path is /test

3. Scroll down to the bottom of the green field and click the “Try it out!” button.

Upon successful completion of the API call, your file should be uploaded to your Dropbox account.
![Cloud Storage Hub Quick Start Guide 12](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuide13.png)

Example of Successful Response

```JSON
{
  "id": "%252Ftest",
  "directory": false,
  "name": "test",
  "path": "/test",
  "createdDate": "2014-10-08T17:22:30Z",
  "modifiedDate": "2014-10-08T17:22:08Z",
  "size": 9
}
```

Congratulations, you just made your first API call with Cloud Elements!

Login in to your Salesforce Account or Cloud Storage service to view the account.

##### CHECKPOINT

__What we did:

* Signed up for Cloud Elements Service
* Created an Element Instance
* Uploaded a file to your Cloud Storage Account using the Cloud Elements API__

Don’t stop there, keep exploring the other API calls, like GET, PATCH, and DELETE right from the console.

If you have any questions, please contact us at [support@cloud-elements.com](mailto:support@cloud-elements.com)

We will do our best to get back to you within 24 hours. Your success is our success.

Thanks for reading.

The Cloud Elements Team
