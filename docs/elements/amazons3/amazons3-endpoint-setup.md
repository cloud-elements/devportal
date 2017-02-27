---
heading: Amazon S3
seo: Endpoint Setup | Amazon S3 | Cloud Elements API Docs
title: Endpoint Setup
description: Integrate Amazon S3 into your application via the Cloud Elements APIs.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 16
parent: Back to Element Guides
order: 2
---
## Endpoint Setup

Follow these steps to set up a Amazon S3 Application with the endpoint.Via a web browser, go to [http://aws.amazon.com/](http://aws.amazon.com/).

1. After signing up, Click “Services”
![Amazon S3 Connected App step 1](http://cloud-elements.com/wp-content/uploads/2014/09/AmazonS31.gif)

2. Click on “S3″ from the list.
![Amazon S3 Connected App step 2](http://cloud-elements.com/wp-content/uploads/2014/09/AmazonS32.gif)

3. Click “Create Bucket”
![Amazon S3 Connected App step 3](http://cloud-elements.com/wp-content/uploads/2014/09/AmazonS33.gif)

4. Fill out Bucket information and click “Create”
![Amazon S3 Connected App ](http://cloud-elements.com/wp-content/uploads/2014/09/Screen-Shot-2014-09-28-at-5.43.22-PM1.png)

Next click on your Account name in the top right of the window, then click “Security Credentials”
![Amazon S3 Connected App step 4](http://cloud-elements.com/wp-content/uploads/2014/09/AmazonS34.gif)

You will need to access the User Access Keys in order to provision an instance.
Excerpt from [Amazon Documentation](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey):

>Creating, Modifying, and Viewing Access Keys (AWS Management Console)

>You can use the AWS Management Console to manage the access keys of IAM users.

>To list a user's access keys

>Sign in to the Identity and Access Management (IAM) console at [https://console.aws.amazon.com/iam/](https://console.aws.amazon.com/iam/).

>In the navigation pane, choose Users.

>Choose the name of the desired user, and then choose the Security Credentials tab. The user's access keys and the status of each key is displayed.

>Note
Only the user's access key ID is visible. The secret access key can only be retrieved when creating the key.

![Amazon S3 Connected App step 5](http://cloud-elements.com/wp-content/uploads/2016/06/AmazonS3API1.png)

>To create, modify, or delete a user's access keys

>Sign in to the Identity and Access Management (IAM) console at [https://console.aws.amazon.com/iam/](https://console.aws.amazon.com/iam/).

>In the navigation pane, choose Users.

>Choose the name of the desired user, and then choose the Security Credentials tab.

>If needed, expand the Access Keys section and do any of the following:

>To create an access key, choose Create Access Key and then choose Download Credentials to save the access key ID and secret access key to a CSV file on your computer. Store the file in a secure location. You will not have access to the secret access key again after this dialog box closes. After you have downloaded the CSV file, choose Close.
To disable an active access key, choose Make Inactive.
To reenable an inactive access key, choose Make Active.
To delete an access key, choose Delete and then choose Delete to confirm.

![Amazon S3 Connected App step 6](http://cloud-elements.com/wp-content/uploads/2016/06/AmazonS3API2.png)

Make note of the Keys as they will be needed to Create an Amazon S3 Instance

Next [create an instance](amazons3-create-instance.html).
