## Autotask Events

Currently, event polling is supported for Autotask Help Desk incidents, comments, and attachments.
By default, the event poller refresh interval is set to 5 minutes.

There are no extra configurations needed to enable AutoTask Help Desk events.
Simply add the two following parameters to the “configuration” section of the JSON payload:

```javascript
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

Create Instance JSON payload:

```javascript
{
  "element": {
    "key": "autotaskcrm"
  },
  "configuration": {
    "crm.autotask.username":  "<INSERT_AUTOTASK_USERNAME>",
    "crm.autotask.password": "<INSERT_AUTOTASK_PASSWORD>",
    "crm.autotask.server.url": "<INSERT_AUTOTASK_SERVER_URL>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
