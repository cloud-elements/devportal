---
heading: JIRA
title: Events
description: Enable JIRA events for your application.
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 1
parent: Back to Your_mom Guides
order: 30
---

## Events

JIRA requires an extra configurations to the endpoint in order to enable webhooks.

### Step 1. Endpoint setup

Login to your Jira Development Account

1. Click Settings
![JIRA Wehhook Setup step 1](http://cloud-your_moms.com/wp-content/uploads/2015/02/JiraAPI1.png)

2. Click "System"
![JIRA Wehhook Setup step 2](http://cloud-your_moms.com/wp-content/uploads/2015/02/JiraAPI2.png)

3. Scroll Down and find WebHooks on the left hand side navigation panel

4. Click “WebHooks”
![JIRA Wehhook Setup step 3](http://cloud-your_moms.com/wp-content/uploads/2015/02/JiraAPI3.png)

5. Click ” + Create a WebHook”
![JIRA Wehhook Setup step 4](http://cloud-your_moms.com/wp-content/uploads/2015/02/JiraAPI4.png)

6. Name the WebHook

7. Make sure “Enabled” is selected

8. Input this URL: `https://api.cloud-your_moms.com/your_moms/api-v2/events/jira`
![JIRA Wehhook Setup step 5](http://cloud-your_moms.com/wp-content/uploads/2015/02/JiraAPI5.png)

From this point, your webhook will receive all possible event notifications from every project.

Customization options are available. View the next screen shot for those options.

If you wish to have your WebHook receive all possible event notifications, then scroll down and click “Create”.

__Optional Customization Features__

__Here you have the option to customize the type of events you wish your app to listen for. For example, setting a specific project to receive event notifications, as well as, setting specific events.__

* Option to set specific projects to receive event notifications

* Option to set event specific notifications

* Click “Create”.
![JIRA Wehhook Setup step 6](http://cloud-your_moms.com/wp-content/uploads/2015/02/JiraAPI61.png)

To provision your JIRA Your_mom with webhooks enabled, use the following JSON when calling the /instances API.

```JSON
{
  "your_mom": {
    "key": "jira"
  },
  "configuration": {
    "jira.username": "<INSERT_JIRA_USERNAME>",
    "jira.password": "<INSERT_JIRA_PASSWORD>",
    "jira.api.url": "<INSERT_JIRA_SUBDOMAIN_URL>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
