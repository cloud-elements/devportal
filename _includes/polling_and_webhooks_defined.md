Cloud Elements currently supports events via __polling__ or __webhooks__ depending on the endpoint.

__Polling__ is a mechanism where Cloud Elements executes the configured query every `n` minutes and captures the changed information.

__Webhooks__ are when the provider lets Cloud Elements know what information has changed.
NOTE: additional endpoint setup may be required prior to creating your Element Instance.

__Note:__  Cloud Elements normalizes only the objectId, objectType, and eventType event data. Event data also contains raw data, which the provider returns. The raw data varies based on the endpoint.


If you would like to see more information on our Events framework, please see the [Event Management Guide](/docs/platform/event-management/index.html).
