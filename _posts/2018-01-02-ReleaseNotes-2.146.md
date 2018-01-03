---
title: Cloud Elements Version 2.146
date: 2018-01-02
layout: release-note-item
release: 2.146
heading: Release Notes
---

## Elements

### JIRA: Added GET /worklogs endpoint

We added the `GET /worklogs` endpoint so you can retrieve the work logged to issues.

### Zuora v2: Added /resume and /suspend endpoints to the subscriptions resource

You can now use the `PUT /subscriptions/{id}/suspend` to suspend a subscription, and `PUT /subscriptions/{id}/renew` to renew a suspended subscription.

### Slack: Reauthentication

User reported that you could not reauthenticate an already authenticated element instance. You can now reauthenticate, including adding events to a previously authenticated instance by reauthenticating.
