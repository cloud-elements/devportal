---
heading: Greenhouse
apiProvider: Greenhouse
seo: API Provider Setup | API provider setup | Greenhouse | Cloud Elements API Docs
title: API Provider Setup
description: Setup tasks required to authenticate an element instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 6148
elementKey: greenhouse
username: Harvest API Key  #In Basic authentication, this is the term that we have mapped to our "username" parameter
password: password #In Basic authentication, this is the term that we have mapped to our "password" parameter
parent: Back to Element Guides
order: 5
---

# API Provider Setup

To authenticate a {{page.heading}} element instance you must use the **{{page.username}}**  configured in {{page.apiProvider}}.

See the latest setup instructions in the [{{page.heading}} documentation](https://developers.greenhouse.io/harvest.html#authentication).

## Locate Your API Key

If you already created an API Key, follow the steps below to locate the **{{page.username}}**. If you have not created an API key, see [Create an API Key](#create-an-api-key).

1. Log in to your account at [{{page.heading}}](https://app.greenhouse.io).
2. Click the Settings icon at the top of the page, or click the **Configure** tab.
3. Open the Dev Center: click **Dev Center** in the list on the left or the link on the Configure page.
4. Click **API Credential Management**.
2. In the sidebar, click **Advanced Settings**, and then click **Legacy API Settings**.
3. Record the **{{page.username}}** .
![Key secret and URL](img/greenhouse-creds.png)

## Create an API Key

If you have not created an API Key, you need one to authenticate with {{page.apiProvider}}.

To create an API Key:

1. Log in to your account at [{{page.heading}}](https://app.greenhouse.io).
2. Click the Settings icon at the top of the page, or click the **Configure** tab.
3. Open the Dev Center: click **Dev Center** in the list on the left or the link on the Configure page.
4. Click **API Credential Management**.
2. Click **Create New API Key**.
3. Enter a description, and then select **Harvest** from the **Type** list.
4. Click **Create**.
5. Select the permissions for the API key, and then click **Update**.

    {% include note.html content="The minimum permissions required to work with the Greenhouse element are all <strong>Candidates</strong>, <strong>Jobs</strong>, and <strong>Job Posts</strong>.  " %}

3. Record the **{{page.username}}** .
![Key secret and URL](img/greenhouse-creds.png)

Next [authenticate an element instance with {{page.apiProvider}}](authenticate.html).
