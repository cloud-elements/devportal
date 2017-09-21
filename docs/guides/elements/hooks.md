---
valeOff: <!-- vale off -->
heading: Manage Elements
seo: Element Info | Elements | Cloud Elements API Docs
title: Custom Hooks
description: Defining element name and authentication
layout: sidebarleft
apis: API Docs
platform: elementsbuilder
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 26
ValeOn: <!-- vale on -->
---

# Custom Hooks

{% include workflow.html displayNames="Info,Authentication,Config & Parameters,Hooks,Events,Resources" links="define-info.html,auth.html,config.html,hooks.html,events.html,resources.html" active="Hooks"%}

Hooks enable you to execute custom JavaScript before an API request (pre-request hook) and after the API provider sends a response (post-response hook). You can use two types of hooks when you create an element: global hooks and resource hooks. Global hooks happen on every request or response, while resource hooks happen only on requests to and responses from specific endpoints.

Use hooks to manipulate any part of a request or response or to operate on a configuration. You might need a hook due to the authentication expected by the endpoint. You might need to send a value to an endpoint, but it requires a different data type than what Cloud Elements supports. You might also need to manipulate headers to extract an ID to include in a response.  See [Examples](#examples) for more use cases.

{% include callout.html content="<strong>On this page</strong></br><a href=#definitions>Definitions</a></br><a href=#add-hooks>Add Hooks</a></br><a href=#javascript-for-hooks>JavaScript for Hooks</a></br><a href=#the-done-function>The done Function</a></br><a href=#examples>Examples</a>" type="info" %}

## Definitions

<dl>

<dt id="global-hook">global hook</dt>
<dd>{{site.data.glossary.eb-global-hook}}</dd>

<dt id="resource-hook">resource hook</dt>
<dd>{{site.data.glossary.eb-resource-hook}}</dd>

<dt id="pre-request-hook">pre-request hook</dt>
<dd>{{site.data.glossary.eb-pre-request-hook}}</dd>

<dt id="post-response-hook">post-response hook</dt>
<dd>{{site.data.glossary.eb-post-response-hook}}</dd>

</dl>

## Add Hooks

You can create pre-request and post-response hooks as part of the whole element configuration, in events, and for individual resources.

* To add global hooks: on the Setup page open the Hooks section, click the **Add hook** button for the type of hook, and then write the script.
* To add resource hooks: [add or edit a resource](resources.html). In the Hooks section of the endpoint, click the **Add hook** button for the type of hook, and then write the script.
* To add event hooks: [configure events](events.html), click **Add an event hook**, and then write the script.


## JavaScript for Hooks

Use JavaScript to write your global or resource hooks. The function signature for all JS when building elements looks like:

```javascript
/**
 * @param  {Object}   request_body           The incoming request HTTP body
 * @param  {Object}   request_body_map           The incoming request HTTP body, converted to a MAP for easy script access
 * @param  {Object}   request_headers        The incoming request headers for this API call
 * @param  {Object}   request_path           The incoming request path for this API call
 * @param  {Object}   request_parameters     The incoming query parameters for this API request
 * @param  {Object}   request_vendor_parameters     The incoming vendor query parameters for this API request
 * @param  {Object}   request_method  The request HTTP method
 * @param  {Object}   request_vendor_method  The request vendor HTTP method
 * @param  {Object}   request_vendor_path    The request path
 * @param  {Object}   request_vendor_headers The request vendor HTTP headers
 * @param  {Object}   request_vendor_body    The request vendor HTTP body
 * @param  {Object}   request_vendor_body_map           The request vendor HTTP body, converted to a MAP for easy script access
 * @param  {Object}   request_vendor_url     The request vendor URL
 * @param  {Object}   request_expression - The CEQL where parameter of the resource, converted to List of Map containing "value, operator, attribute\" to construct the search operation the endpoint needs
 * @param  {Object}  request_previous_response    If the endpoint is part of a a response chain, a previous request response value. This value can be used to construct the final response from chained API calls.
 * @param  {Object}  request_previous_response_headers    If the endpoint is part of a a response chain, a previous request response header. This value can be used to construct the final response from chained API calls.
 * @param  {Object}   meta_data              Metadata about the object
 * @param  {Object}   configuration          The Element's configuration object
 * @param  {Function} done                   The callback function that you will need to call at the end of your JS
 */
function(request_body, request_body_map, request_headers, request_path, request_parameters, request_vendor_parameters, request_method, request_vendor_method, request_vendor_path, request_vendor_headers, request_vendor_body, request_vendor_body_map, request_vendor_url, request_expression, request_previous_response, request_previous_response_headers, meta_data, configuration, done) {
	// your JavaScript goes here
}
```

Note the following when writing javascript in formulas:

* For all scripts, JavaScript `strict` mode is enforced.
* You can use `console.log` to log data to the JavaScript console to help debug your formula.
* You can use `notify.email` to send an email notification.
* ES6 is supported.
* The function parameters are immutable, meaning they cannot be assigned to directly. To change an object or value passed into the function, first copy it to your own local variable and then make the necessary changes.
* Body variables (request_body) are applicable only to methods that pass a JSON body like POST, PATCH,and PUT. Body variables are undefined/null if there is no JSON body sent.

## The done Function

The `done` function is a callback function that should be called to end the function.  It can pass a `continue` object, indicating that the API request should continue to be processed and any new objects that should overwrite the existing incoming objects to this function.  An example might be:

```javascript
done({
	"continue": true,
	"request_vendor_parameters": new_request_vendor_parameters
});
```

Send `false` as the `continue` value in a pre-hook, to stop the execution at this point and returns the response.

In the above example, the `request_vendor_parameters` that are returned will overwrite the request vendor parameters that need to be sent to the endpoint.

{% include javascript/libraries.md%}

## Examples

This section presents some possible use cases for hooks. Because you can write JavaScript, the possibilities available are limited only to your needs and imagination.

* [Global Pre-Request Hook for All Delete Methods](#global-pre-request-hook-for-all-delete-methods)
* [Pre-Request Hook Using Element Configuration](#pre-request-hook-using-element-configuration)
* [Post-Response Hook Reading Response Headers](#post-response-hook-reading-response-headers)
* [Reading Event Webhooks](#reading-event-webhooks)
* [Removing Headers](#removing-headers)
* [HTTP and HTTPS Library Examples](#http-and-https-library-examples)


### Global Pre-Request Hook for All Delete Methods

The hook below applies to all delete method requests. If the request is `delete`, then override or create object with that key.

```javascript
if(request_vendor_method === 'DELETE') {
	request_vendor_headers["Content-Type"] = "*/*";
	return {
		"request_vendor_headers": request_vendor_headers
	}
}
```

### Pre-Request Hook Using Element Configuration

This hook is an example of reading a value from the configuration of your element, then manipulating the data that has been posted to an endpoint.

```javascript
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

### Post-Response Hook Reading Response Headers

This hook is an example of reading the response headers to retrieve a value, then extracting that value as an ID and sending it as a response.

The script only executes if the response behaves as expected.

```javascript
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
### Reading Event Webhooks

This hook is an example of reading the event webhook types and formatting them into what Cloud Elements expects.

```javascript
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

### Removing Headers

By default, we send `Accept: "application/json"` and `Content-Type: "application/json"` in the headers. If the service provider cannot handle `Accept` or `Content-Type` headers, you can remove them from the request.

In this example, we remove the `Content-Type` header.

```
let headers = {
     "Content-Type": null
};

done({
     "request_vendor_headers": headers
...
)};
```

### HTTP and HTTPS Library Examples

Use the HTTP and HTTPs libraries to make requests from a hook to any HTTP or HTTPS endpoint.

```javascript
const https = require('https');
//Get SFDC element from CE and return the results
https.get('https://api.cloud-elements.com/elements/api-v2/elements/sfdc', (res) => {
  console.log('after response');
    let rawData = '';
    res.on('data', (chunk) => rawData += chunk);
    res.on('end', () => {
      try {
        let parsedData = JSON.parse(rawData);
        done({ "response_body": parsedData });
      } catch (e) {
        console.log(e.message);
        done({ "response_error": e.message});
      }
    });
});
```

Example using http:

```javascript
const http = require('http');

//Call Swagger petstore
let options = {
  hostname: 'petstore.swagger.io',
  path: '/v2/store/inventory',
  headers: {
    'Accept': 'application/json'
  }
};

const apiCall = http.request(options);
apiCall.on('response', res => {
     console.log('after response');
     let rawData = '';
     res.on('data', (chunk) => rawData += chunk);
     res.on('end', () => {
       try {
         let parsedData = JSON.parse(rawData);
         console.log('Parsed response');
         done({ "response_body": parsedData });
       } catch (e) {
         done({ "response_error": e.message});
       }
     });
 });

apiCall.on('error', err => {
  done({ "response_error": err.message});
});

apiCall.end();
```
