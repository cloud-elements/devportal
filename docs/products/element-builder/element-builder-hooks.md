---
heading: Element Builder
title: Hooks
description: View example Hooks that are supported in the Element Builder UI.
layout: docs
apis: API Docs
platform: elementsbuilder
breadcrumbs: /docs/products/api-toolkit.html
parent: Back to API Toolkit
order: 6
---

## Hooks

This Tech Tip is focused on Hooks.  Some examples of a Global Pre-Hook, Pre-Hook, Post-Hook, and Web-Hook Event will be shown.

Hooks are defined as:

__Pre-Hook:__ Action you wish to execute prior to sending API calls e.g. manipulating or adding data (query, header, path, body, configuration).

__Post-Hook:__ Modify the response data (body, header, configuration) on the return call from the endpoint.

A hook may be needed due to the authentication expected by the endpoint.  You may need to send a value to an endpoint, but it requires a different data type than what Cloud Elements supports.

Headers may need to be manipulated on every request.  An ID may need to be extracted from a header and sent as a response.  Element Builder supports writing custom JavaScript to handle such use cases.

We’ll take a look at a few, as well as, some other Hook features.

Hooks can be used under the following Tabs in Element Builder:

* Configuration
* Resources
* Events

__Configuration:__ hook needed to set a global property to the endpoint
__Resources:__ hook needed to set a property on a particular resource
__Events:__ hook needed to set a property on an event

__Location and Features__

The hooks input field can be found towards the bottom of the panel.  Element Builder supports custom JavaScript in both the Pre-Hook and Post-Hook panels.

To add custom simply select Pre-Hook or Post-Hook and enter your code below.

To the left of the code editor, a list of available objects and code samples can be found.  Simply select “Objects” or “Sample Code” to view the contents.

Expand and Collapse the Hooks panel using the “Expand” and “Collapse” toggle feature.
![Element Builder Hooks 1](http://cloud-elements.com/wp-content/uploads/2016/03/Hooks1.png)

#### Global Pre-Hook

The hook below applies to all delete method requests. If the request is ‘delete’, then override or create object with that key.

```JavaScript
if(request_vendor_method === 'DELETE') {
	request_vendor_headers["Content-Type"] = "*/*";
	return {
		"request_vendor_headers": request_vendor_headers
	}
}
```

#### Pre-Hook

This hook is an example of reading a value from the configuration of your element, then manipulating the data that has been posted to an endpoint.

```JavaScript
var body = JSON.parse(request_vendor_body);
var contactEmailUpsert = configuration["contact.emailupsert"];
if(contactEmailUpsert === false) {
	return;
}
//Updating the body field contact object with upsert=true
body["contact"] = {
	"upsert": true
};

//Converting the object to string and returning
return {
	"request_vendor_body": JSON.stringify(body),
	"continue": true
}
```

#### Post-Hook

This hook is an example of reading the response headers to retrieve a value, then extracting that value as an ID and sending it as a response.
The script only executes if the response behaves as expected.

```JavaScript
if(response_headers === null
	|| !(response_status_code === 201
		|| response_status_code === 200)) {
	return;
}

//Get the location string from headers
var location = response_headers["location"];
if(location === null) {
	return;
}
//Extract just the id part from the location string
location = location.replace("https://someurl/v1/contacts/","")
location = location.replace(".json","");

//Construct the response body
var response = {
	"id": location
};

//return the response body
return {
	"response_body": response
}
```
#### Event Webhook

This hook is an example of reading the event webhook types and formatting them into what Cloud Elements expects.

```JavaScript
var formattedEvents = getArray();
var eventObj = {};
eventObj.event_date = events["modifiedAt"];
eventObj.event_object_id = events["id"];

var webhook_types = events.eventHeaders["x-event"];

if(webhook_types === 'convo.created') {
	eventObj.event_type = 'CREATED';
	eventObj.event_object_type = 'incidents';
} else if(webhook_types === 'convo.updated') {
	eventObj.event_type = 'UPDATED';
	eventObj.event_object_type = 'incidents';
} else if(webhook_types === "convo.deleted"){
	eventObj.event_type = 'DELETED';
	eventObj.event_object_type = 'incidents';
} else if(webhook_types === 'customer.created'){
	eventObj.event_type = 'CREATED';
	eventObj.event_object_type = 'users';
} else if(webhook_types === 'customer.updated'){
	eventObj.event_type = 'UPDATED';
	eventObj.event_object_type = 'users';
}

formattedEvents.add(eventObj);
return {
	"events" : formattedEvents
}
```

Element Builder is currently in BETA.  We would love to hear about enhancements or concerns regarding the application.  Please don’t hesitate to get in touch.

Need some help?  Don’t hesitate to reach out to [Cloud Elements Support](mailto:support@cloud-elements.com) with any questions or concerns.

The Cloud Elements Team
