---
heading: Hub Level Documentation
seo: Social Hub Quick Start Guide | Cloud Elements API Docs
title: Social Hub Quick Start Guide
description: Get up and running with the Social Hub.
layout: docs
order: 4
---

### Social Hub Quick Start Guide

This guide is here to get you up and running with Cloud Elements Service in 4 minutes or less. We have provided step by step visual directions, as well as, a video of the same instructions taking you through the whole process. Watch the Video or read at your own pace.

This guide reviews the minimum number of steps to get you working with the Social Hub APIs. If you have not set up a new Application with Instagram to connect with Cloud Elements, please see our [Create New Instagram App](/docs/elements/instagram/instagram-endpoint-setup.html) for directions on this process.

{% include padding-all.html %}

{% include vimeo-player.html id=135592406 %}

{% include padding-all.html %}

#### What We'll Do:

1. Sign up for Cloud Elements Service

2. Create an Element Instance

3. Create an Account in the Social Service

#### What You Will Need:

__An Account: choose an option__

* Create a New Account
* Sign Up with GitHub
* Sign Up with Google

__A username and password for a Instagram Service e.g. Instagram__

*Instagram will be used for this demonstration*

##### Sign Up with GitHub

Don’t have a GitHub account? Go to [http://www.github.com](http://www.github.com) and signup. It’s free!

##### Setting a Public Email in GitHub

Navigate to your settings in GitHub.
![Social Hub Quick Start Guide 1](http://cloud-elements.com/wp-content/uploads/2014/08/gitHub2.gif)

Type in your public email in the designated field and click “Update Profile”.

All set!

The first step is to sign up for Cloud Elements Service.
![Social Hub Quick Start Guide 2](http://cloud-elements.com/wp-content/uploads/2014/08/gitHub21.gif)

##### Sign Up for Cloud Elements Services

To sign up for the Cloud Elements service, using a web browser, go to [https://console.cloud-elements.com/elements/jsp/signup.jsp](https://console.cloud-elements.com/elements/jsp/signup.jsp).

You can create a new account with Cloud Elements using your __GitHub__ account. When signing up via GitHub, you must set a public email address in your GitHub profile. Screen shots on how to set a public email are in the previous section.
![Social Hub Quick Start Guide 3](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuideSignup.png)

Once you are logged in to the console, click on “Elements Catalog”.
![Social Hub Quick Start Guide 4](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuide1.png)

Click “Social” from the list of Elements.
![Social Hub Quick Start Guide 5](http://cloud-elements.com/wp-content/uploads/2015/08/InstagramAPI1.png)

Click “Add Instance” for Instagram.
![Social Hub Quick Start Guide 6](http://cloud-elements.com/wp-content/uploads/2015/08/InstagramAPI2.png)

Type a name for the Instance and click “Next”.  You’ll need to sign in to your Instagram Account and click “Allow” to authorize the app.
![Social Hub Quick Start Guide 7](http://cloud-elements.com/wp-content/uploads/2015/08/InstagramAPI3.png)

Click “Done”
![Social Hub Quick Start Guide 9](http://cloud-elements.com/wp-content/uploads/2015/08/InstagramAPI4.png)

Click the “Documentation” link.
![Social Hub Quick Start Guide 10](http://cloud-elements.com/wp-content/uploads/2015/08/InstagramAPI5.png)

Scroll down to find the /users API calls. Click the “GET /users” link.
![Social Hub Quick Start Guide 11](http://cloud-elements.com/wp-content/uploads/2015/08/InstagramAPI6.png)

Insert the username with the query: q=’INSERT_USERNAME’
Please don’t forget the quotes around the username.
![Social Hub Quick Start Guide 12](http://cloud-elements.com/wp-content/uploads/2015/08/InstagramAPI7.png)

Copy the ID of the username from the response.
![Social Hub Quick Start Guide 13](http://cloud-elements.com/wp-content/uploads/2015/08/InstagramAPI8.png)

Paste the username ID into the where field.
Click “Try it out!”
![Social Hub Quick Start Guide 14](http://cloud-elements.com/wp-content/uploads/2015/08/InstagramAPI9.png)

View your list of media for the Instagram account.
Click “Try it out!”
![Social Hub Quick Start Guide 15](http://cloud-elements.com/wp-content/uploads/2015/08/InstagramAPI10.png)

Example of Successful Response

```JSON
{
  "created_time": "1438875370",
  "images": {
    "thumbnail": {
      "width": 150,
      "url": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/11348233_450948155077015_1654734039_n.jpg",
      "height": 150
    },
    "low_resolution": {
      "width": 320,
      "url": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s320x320/e15/11348233_450948155077015_1654734039_n.jpg",
      "height": 320
    },
    "standard_resolution": {
      "width": 640,
      "url": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/e15/11348233_450948155077015_1654734039_n.jpg",
      "height": 640
    }
  },
  "comments": {
    "data": [],
    "count": 0
  },
  "users_in_photo": [],
  "user_has_liked": false,
  "link": "https://instagram.com/p/6DBNbQl1y_P72QmFDrAaXygxGKyvd11cNJWqo0/",
  "caption": {
    "created_time": "1438875370",
    "from": {
      "full_name": "",
      "profile_picture": "https://instagramimages-a.akamaihd.net/profiles/anonymousUser.jpg",
      "id": "1808376494",
      "username": "cloudelementsdevprod"
    },
    "text": "Cloud Elements Company Facts",
    "id": "1045684861615430886"
  },
  "type": "image",
  "tags": [],
  "filter": "Normal",
  "id": "1045684859149180095_1808376494",
  "user": {
    "full_name": "",
    "profile_picture": "https://instagramimages-a.akamaihd.net/profiles/anonymousUser.jpg",
    "id": "1808376494",
    "username": "cloudelementsdevprod"
  },
  "likes": {
    "data": [],
    "count": 0
  }
}
```

Congratulations, you just made your first API call with Cloud Elements!

##### CHECKPOINT

__What we did:

* Signed up for Cloud Elements Service
* Created an Element Instance
* Retrieved a list of user media__

Don’t stop there, keep exploring the other API calls, like GET, PATCH, and DELETE right from the console.

If you have any questions, please contact us at [support@cloud-elements.com](mailto:support@cloud-elements.com)

We will do our best to get back to you within 24 hours. Your success is our success.

Thanks for reading.

The Cloud Elements Team
