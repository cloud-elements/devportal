---
heading: QuickBooks Online
seo: Tips | QuickBooks Online | Cloud Elements API Docs
title: Tips
description: QuickBooks Online Tips
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 39
parent: Back to Element Guides
order: 75
---

# Tips

The Tips section includes more information about the element including FAQs, endpoint limitations, and general tips.

{% include callout.html content="<strong>On this page</strong><br/><a href=#general>General</a><br/><a href=#authentication>Authentication</a>" type="info" %}


## General

* QuickBooks Online does not allow you to update taxes via third-party service, including API calls. If you need this functionality, delete the transaction and re-create it using the correct taxes.
* QuickBooks Online does not currently support the "OR" operator in the where/search clause.
* When you `GET /records`, QuickBooks Online returns a sync token in the format of (22|33). The first number represents the ID, the second represents the sync token, which is not a static value. To update a record, you must provide the most recent sync token. If you try to update a record with an old sync token, you will get an error message. It is best practice to retrieve the record right before you update to ensure that you have the latest sync token.
* To search by Account Type in the `GET /ledger-accounts` API, use spaces in your accountType, such as 'Accounts Payable', 'Credit Card' etc. List of account types can be found at https://developer.intuit.com/docs/api/accounting/account
* When using paging for `GET /tax-codes`, ensure you are setting the active flag to true to get a valid count returned.

## Authentication

* QuickBooks Online supports only one user per authenticated instance. If one user tries to authenticate to multiple instances, the oldest instance will get wiped out.
* Auth Tokens are good for 180 days and they can be refreshed within 30 days of expiration.
