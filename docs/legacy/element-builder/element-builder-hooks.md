---
heading: Element Builder
seo: Hooks | Element Builder | Cloud Elements API Docs
title: Hooks
description: View example Hooks that are supported in the Element Builder UI.
layout: sidebarelementdoc
apis: API Docs
platform: elementsbuilder
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 7
---

# Hooks

Hooks allow you to execute custom Javascript before and/or after an API call takes place.  Element Builder supports two types of hooks: global hooks and API resource hooks.  Global hooks are executed before and/or after every single API call to an Element, while API resource hooks are executed before and/or after API calls to a specific API resource on an Element.

## Javascript
The function signature for all JS in Element Builder looks like:

```javascript
/**
 * @param  {Object}   request_body           The incoming request HTTP  body
 * @param  {Object}   request_headers        The incoming request headers for this API call
 * @param  {Object}   request_path           The incoming request path for this API call
 * @param  {Object}   request_parameters     The incoming query parameters for this API request
 * @param  {Object}   request_vendor_method  The request vendor HTTP method
 * @param  {Object}   request_vendor_path    The request path
 * @param  {Object}   request_vendor_headers The request vendor HTTP headers
 * @param  {Object}   request_vendor_body    The request vendor HTTP body
 * @param  {Object}   request_vendor_url     The request vendor URL
 * @param  {Object}   meta_data              Metadata about the object
 * @param  {Object}   configuration          The Element's configuration object
 * @param  {Function} done                   The callback function that you will need to call at the end of your JS
 */
function(request_body, request_headers, request_path, request_parameters, request_vendor_method, request_vendor_path, request_vendor_headers, request_vendor_body, request_vendor_url, meta_data, configuration, done) {
	// your Javascript goes here
}
```

> __PROTIP:__ For all scripts, Javascript `strict` mode is enforced.

> __PROTIP:__ ES6 is supported.

> __PROTIP:__ The function parameters are immutable, meaning they cannot be assigned to directly. In order to change an object or value passed into the function, first copy it to your own local variable and then make the necessary changes.

The `done` function is simply a callback function that should be called to end the function.  This can pass a `continue` object, indicating whether the API request should continue to be processed through Element Builder and any new objects that should overwrite the existing incoming objects to this function.  An example might be:

```javascript
done({
	"continue": true,
	"request_vendor_parameters": new_request_vendor_parameters
});
```

> **NOTE:** By sending `false` as the `continue` value in the pre hook, it stops the execution at this point and returns the response

> **NOTE:**  In the above example, the `request_vendor_parameters` that are returned will overwrite the request vendor parameters that need to be sent to the endpoint

## Additional Functionality

__Libraries__

* CE: Our custom library that provides some common functionality. It is not necessary to `require` this library, it is available by default.
 * `CE.randomString()`: Generate a random string (approx. 10 characters long).
 * `CE.randomEmail()`: Generate a random email address.
 * `CE.md5(str)`: Create an MD5 hash from a string value. Takes a `string` as a parameter. Returns a `string`.
 * `CE.b64(str)`: Encode a string in base64. Takes a `string` as a parameter. Returns a `string`.
 * `CE.decode64(str)`: Decode a string from base64, using UTF-8 encoding. Takes a `string` as a parameter. Returns a `string`.
 * `CE.hmac(algo)(enc)(secret, str)`: HMAC hash a string (_str_) using the provided secret (_secret_), algorithm (_algo_), and encoding (_enc_). See https://nodejs.org/api/crypto.html#crypto_class_hmac for more information about the algorithm and encoding parameters.
 * `CE.hmac[algo][enc](secret, str)`: This is a set of convenience functions that allow HMAC hashing using some common algorithms and encodings. For example, `CE.hmacSha1Hex(secret, str)` will create an HMAC SHA1 hash of the provided string, using the provided secret, and return a hex string.  You can replace _algo_ and _enc_ with the following values:
 _algo_: `Sha1`, `Sha256`, `Md5`
 _enc_: `Hex`, `base64`
* Lodash: The popular `lodash` library. To use this library, simply `require` it in your script. It is possible to use the library modules, as well, such as `lodash/fp`.
* Util: The standard Node `util` library. To use, `require` it in your script.
* http/https: The standard Node `http` and `https` library. Usage: `require` the library in your script.

	Example using https:

	```JavaScript
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

	```JavaScript
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

## Pre Hook and Post Hook

Hooks are defined as:

__Pre-Hook:__ Action you wish to execute prior to sending API calls e.g. manipulating or adding data (query, header, path, body, configuration).

__Post-Hook:__ Modify the response data (body, header, configuration) on the return call from the endpoint.

A hook may be needed due to the authentication expected by the endpoint.  You may need to send a value to an endpoint, but it requires a different data type than what Cloud Elements supports.

Headers may need to be manipulated on every request.  An ID may need to be extracted from a header and sent as a response.  Element Builder supports writing custom JavaScript to handle such use cases.

We’ll take a look at a few, as well as, some other Hook features.

Hooks can be used under the following Tabs in Element Builder:

* __Configuration:__ hook needed to set a global property to the endpoint
* __Resources:__ hook needed to set a property on a particular resource
* __Events:__ hook needed to set a property on an event

## Access the Hooks  Panel

The hooks panel appears at the bottom of the panel.  Element Builder supports custom JavaScript in both the Pre-Hook and Post-Hook panels.

To add a custom hook:

1. Select Pre-Hook or Post-Hook and enter your code below.
1. Review the list of available objects and code samples .  Select  **Objects** or **Sample Code** to view the contents.
1. Expand and Collapse the Hooks panel using the “Expand” and “Collapse” toggle feature.
![Element Builder Hooks 1](http://cloud-elements.com/wp-content/uploads/2016/03/Hooks1.png)

## Examples

This section include the following examples:

* [Global Pre-Hook](#global-pre-hook)
* [Pre-Hook Using Element Configuration](#pre-hook-using-element-configuration)
* [Post Hook Reading Response Headers](#post-hook-reading-response-headers)
* [Reading Event Webhooks](#reading-event-webhooks)
* [Removing Headers](#removing-headers)

### Global Pre-Hook

The hook below applies to all delete method requests. If the request is ‘delete’, then override or create object with that key.

```js
if(request_vendor_method === 'DELETE') {
	request_vendor_headers["Content-Type"] = "*/*";
	done( {
		"request_vendor_headers": request_vendor_headers
	} );
}
```

### Pre-Hook Using Element Configuration

This hook is an example of reading a value from the configuration of your element, then manipulating the data that has been posted to an endpoint.

```js
var body = JSON.parse(request_vendor_body);
var contactEmailUpsert = configuration["contact.emailupsert"];
if(contactEmailUpsert === false) {
	done();
}
//Updating the body field contact object with upsert=true
body["contact"] = {
	"upsert": true
};

//Converting the object to string and returning
done( {
	"request_vendor_body": JSON.stringify(body),
	"continue": true
} );
```

### Post-Hook Reading Response Headers

This hook is an example of reading the response headers to retrieve a value, then extracting that value as an ID and sending it as a response.

The script only executes if the response behaves as expected.

```js
if(response_headers === null
	|| !(response_status_code === 201
		|| response_status_code === 200)) {
	done();
}

//Get the location string from headers
var location = response_headers["location"];
if(location === null) {
	done();
}
//Extract just the id part from the location string
location = location.replace("https://someurl/v1/contacts/","")
location = location.replace(".json","");

//Construct the response body
var response = {
	"id": location
};

//return the response body
done( {
	"response_body": response
} );
```
### Reading Event Webhooks

This hook is an example of reading the event webhook types and formatting them into what Cloud Elements expects.

```js
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
done( {
	"events" : formattedEvents
} );
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

Element Builder is currently in BETA.  We would love to hear about enhancements or concerns regarding the application.  Please don’t hesitate to get in touch.

Need some help?  Don’t hesitate to reach out to [Cloud Elements Support](mailto:support@cloud-elements.com) with any questions or concerns.

The Cloud Elements Team
