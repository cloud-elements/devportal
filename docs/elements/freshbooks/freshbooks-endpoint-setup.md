---
heading: FreshBooks
title: Register as a Consumer
description: Register as a Consumer
layout: docs
order: 5
---

## Register as a Consumer

__FreshBooks__ requires an application process to enable OAuth.  Below is a brief explanation from FreshBooks.  Read the full [article](https://www.freshbooks.com/developers/authentication).

To register as an OAuth consumer, sign up for a free FreshBooks account and enable OAuth by clicking on “My Account” and then “FreshBooks API”. Scroll down and you will see a checkbox labeled “Enable OAuth”. Selecting the checkbox will display a token to use as your OAuth Consumer Secret. Once OAuth has been enabled, FreshBooks will review your account and verify your request to be an OAuth Consumer. This process may take up to 5 business days. Once verified, your consumer key will be your FreshBooks system name (the portion of your account domain before freshbooks.com).

Before we will approve your Consumer registration, we need your company name. Enter the name of your company or application as you would like it to appear to your users by going to “Settings” and entering a value in the “Company Name” field.

Login to your FreshBooks account via your FreshBooks subdomain.
1. Click “My Account”
![FreshBooks Connected App step 1](http://cloud-elements.com/wp-content/uploads/2015/07/FreshBooksAPI1.png)

2. Click “FreshBooks API”
![FreshBooks Connected App step 2](http://cloud-elements.com/wp-content/uploads/2015/07/FreshBooksAPI2.png)

3. Copy the OAuth Secret.
Remember FreshBooks requires a review of your account to enable OAuth Access.  Please ensure you have access prior to provisioning via the Cloud Elements API.
![FreshBooks Connected App step 3](http://cloud-elements.com/wp-content/uploads/2015/07/FreshBooksAPI3.png)

Next [create an instance](freshbooks-create-instance.html).
