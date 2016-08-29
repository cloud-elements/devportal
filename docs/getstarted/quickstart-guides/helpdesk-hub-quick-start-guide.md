---
heading: Hub Level Documentation
seo: Help Desk Hub Quick Start Guide | Cloud Elements API Docs
title: Help Desk Hub Quick Start Guide
description: Get up and running with the Help Desk Hub.
layout: docs
order: 4
---

### Help Desk Hub Quick Start Guide

This guide is here to get you up and running with Cloud Elements Service in 4 minutes or less. We have provided step by step visual directions, as well as, a video of the same instructions taking you through the whole process. Watch the Video or read at your own pace.

This guide reviews the minimum number of steps to get you working with the Help Desk Hub APIs. Zendesk is used in the example below. If you have not set up service with Zendesk, please visit [http://www.zendesk.com](http://www.zendesk.com) to sign up.

{% include padding-all.html %}

{% include vimeo-player.html id=111569756 %}

{% include padding-all.html %}

#### What We'll Do:

1. Sign up for Cloud Elements Service

2. Create an Element Instance

3. Create an Account in the Help Desk Service

#### What You Will Need:

__An Account: choose an option__

* Create a New Account
* Sign Up with GitHub
* Sign Up with Google

__A username and password for a
Help Desk Service e.g. Salesforce Service Cloud, ZenDesk, Jira.
A new application set up with your Help Desk Service (Salesforce Service Cloud Only)__

*Salesforce Help Desk Cloud will be used for this demonstration*

##### Sign Up with GitHub

Don’t have a GitHub account? Go to [http://www.github.com](http://www.github.com) and signup. It’s free!

##### Setting a Public Email in GitHub

Navigate to your settings in GitHub.
![Help Desk Hub Quick Start Guide 1](http://cloud-elements.com/wp-content/uploads/2014/08/gitHub2.gif)

Type in your public email in the designated field and click “Update Profile”.

All set!

The first step is to sign up for Cloud Elements Service.
![Help Desk Hub Quick Start Guide 2](http://cloud-elements.com/wp-content/uploads/2014/08/gitHub21.gif)

##### Sign Up for Cloud Elements Services

To sign up for the Cloud Elements service, using a web browser, go to [https://console.cloud-elements.com/elements/jsp/signup.jsp](https://console.cloud-elements.com/elements/jsp/signup.jsp).

You can create a new account with Cloud Elements using your __GitHub__ account. When signing up via GitHub, you must set a public email address in your GitHub profile. Screen shots on how to set a public email are in the previous section.
![Help Desk Hub Quick Start Guide 3](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuideSignup.png)

Once you are logged in to the console, click on “Elements Catalog”.
![Help Desk Hub Quick Start Guide 4](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuide1.png)

Click “Help Desk” from the list of Elements.
![Help Desk Hub Quick Start Guide 5](http://cloud-elements.com/wp-content/uploads/2014/10/HelpDesk1.png)

Click “Add Instance” ZenDesk.
![Help Desk Hub Quick Start Guide 6](http://cloud-elements.com/wp-content/uploads/2014/10/HelpDesk2.png)

Type a name for the Instance, fill out the information from using your ZenDesk Credentials, and click “Next”.
![Help Desk Hub Quick Start Guide 7](http://cloud-elements.com/wp-content/uploads/2014/10/HelpDesk4.png)

Click “Done”
![Help Desk Hub Quick Start Guide 9](http://cloud-elements.com/wp-content/uploads/2014/10/HelpDesk5.png)

Click the “Documentation” link.
![Help Desk Hub Quick Start Guide 10](http://cloud-elements.com/wp-content/uploads/2014/10/HelpDesk6.png)

Click the “POST /incidents” link.
![Help Desk Hub Quick Start Guide 11](http://cloud-elements.com/wp-content/uploads/2014/10/HelpDesk7.png)

Scroll down to Parameters
![Help Desk Hub Quick Start Guide 12](http://cloud-elements.com/wp-content/uploads/2014/10/HelpDesk8.png)

Click “Model Schema”

Fill in JSON field with correct values in between the quotes. You can also cut and paste the sample JSON below:

```JSON
{
  "status": "Active",
  "assignee_id": 0,
  "subject": "Bug",
  "description": "Bug in production environment",
  "requester_id": 0
}
```

Scroll down to the bottom of the green field and click the “Try it out!” button.

Upon successful completion of the API call, your account should be created within your Help Desk service.
![Help Desk Hub Quick Start Guide 13](http://cloud-elements.com/wp-content/uploads/2014/10/HelpDesk9.png)


Example of Successful Response

```JSON
{
  "via": {
    "channel": "api"
  },
  "status": "open",
  "subject": "Bug",
  "has_incidents": false,
  "group_id": 5269,
  "raw_subject": "Bug",
  "url": "https://yourzendeskurl.zendesk.com/api/v2/tickets/4.json",
  "id": 4,
  "updated_at": "2014-10-29T18:25:00Z",
  "assignee_id": 350,
  "submitter_id": 350,
  "organization_id": 27,
  "description": "Bug in production environment",
  "created_at": "2014-10-29T18:25:00Z",
  "requester_id": 350
}
```

Congratulations, you just made your first API call with Cloud Elements!

Login in to your Zendesk Account or Help Desk service to view the account.

##### CHECKPOINT

__What we did:

* Signed up for Cloud Elements Service
* Created an Element Instance
* Created an Incident in the Help Desk Service using the Cloud Elements API__

Don’t stop there, keep exploring the other API calls, like GET, PATCH, and DELETE right from the console.

If you have any questions, please contact us at [support@cloud-elements.com](mailto:support@cloud-elements.com)

We will do our best to get back to you within 24 hours. Your success is our success.

Thanks for reading.

The Cloud Elements Team
