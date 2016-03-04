---
heading: Facebook
title: FAQ
description: Facebook FAQ and known issues.
layout: docs
order: 50
---

## Facebook FAQ

1. What kind of information can I get from a user profile?

Facebook is very specific with their permissions. If a specific user hasn’t granted public permissions, then you can’t get much information from them.
a. public permissions: public_profile, email, and user_friends

2.  Can I get data from a user’s friends?

It is no longer possible for an app to see data from your users’ friends, you can only see this data if those friends have also logged into the app and granted permission for the app to the see that data.

3.  What kind of contact information can be retrieved?

Currently, only the user email address can be retrieved if it was provided.
You cannot retrieve phone number and address info.

### Known issues

1. All of the photo/video posts are not showing the caption/description/title when a POST method call is executed within the Cloud Elements API Manager Console.
-if done through postman, you can post captions for PHOTOS
-if done through postman, you can post title/description for VIDEOS
a. POST /status
json “message”:”test msg” doesn’t always show the message.
It is inconsistent.
b. In a new Facebook update, if you try to delete a status with a link, it returns an error:  “This post wasn’t created by the application”.

2. GET /search /user pageSize is giving the wrong amount of items
a. if limit = 6, returns 5, || =20, returns 18, etc.

3. GET user/{id}/status pageSize is returning the size – 1

4. When you add the website callback for Facebook, it adds a backslash. This is under Basic Settings, listed as ‘Site URL’

5. A GET request to a resource that has been deleted returns as a request fail. “Unsupported get request.”
