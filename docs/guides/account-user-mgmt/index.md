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

# Overview

{% include callout.html content="The <i>Manage Accounts and Users</i> guide includes steps to use Cloud Elements 2.0. Earlier versions of Cloud Elements share much of the same functionality. You can read information about the earlier version at <a href=../../platform-api/accounts/account-management.html>Account Usage and Management Guide</a>." type="info" %}

The first user to sign up for Cloud Elements created an organization and established an Organization Secret automatically. As the default user of the organization, they are the organization administrator. The organization administrator can manage the accounts within the organization and the users associated with those accounts.

Your organization comes with a default account and the organization administrator is the first user associated with that account. The organization can include many accounts. Different accounts cannot see information associated with other accounts. Each account includes individual users.  Cloud Elements assigns each user a User Secret. With the Organization Secret representing the company and the User Secret representing a discrete customer of the company, users can make requests to the Cloud Elements APIs.

The key piece in integrations is the element, which is an enhanced connector to an API provider. When you build an integration into your application using Cloud Elements and offer it to your customers, they become users of the associated account.  With your Organization Secret and their own User Secret, they can authenticate with their API Provider and create individual element instances. For example, if you provide your customers an integration to Salesforce, after they authenticate with Salesforce They create an authenticated Salesforce element instance in the account used for the integration..

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
