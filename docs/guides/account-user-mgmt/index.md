---
valeOff: <!-- vale off -->
heading: Manage Accounts and Users
seo: Account Overview | Cloud Elements  Docs
title: Overview
description: Manage organizations, users, and accounts
layout: sidebarleft
apis: API Docs
platform: accounts
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 1
sitemap: false
ValeOn: <!-- vale on -->
---

{% include callout.html content="<i>Manage Accounts and Users</i> includes steps to use Cloud Elements 2.0. The earlier version of Cloud Elements shares much of the same functionality. See documentation specific to that version at <a href=../../platform-api/accounts/account-management.html>Account Usage and Management Guide</a>." type="info" %}

# Overview

The first user to sign up for Cloud Elements created an organization and established an Organization Secret automatically. As the default user of the organization, they are the organization administrator. The organization administrator can manage the accounts within the organization and the users associated with those accounts.

Your organization comes with a default account and the organization administrator is the first user associated with that account. The organization can include many accounts. Different accounts cannot see information associated with other accounts. Each account includes individual users.  Cloud Elements assigns each user a User Secret. With the Organization Secret representing the organization and the User Secret representing a discrete user associated with the account, users can make requests to the Cloud Elements APIs.

The key piece in integrations is the element, which is an enhanced connector to an API provider. When you build an integration into your application using Cloud Elements and offer it to your customers, they become users of the associated account.  With your Organization Secret and their own User Secret, they can authenticate with their API Provider and create individual element instances. For example, if you provide your customers an integration to Salesforce, after they authenticate with Salesforce they create an authenticated Salesforce element instance in the account used for the integration.

## Definitions

<dl>

<dt id="organization">organization</dt>
<dd>{{site.data.glossary.organization}}</dd>

<dt id="account">account</dt>
<dd>{{site.data.glossary.account}} </dd>

<dt id="user">user</dt>
<dd>{{site.data.glossary.user}}</dd>

<dt id="organization-administrator">organization administrator</dt>
<dd>{{site.data.glossary.organization-administrator}}</dd>

</dl>
