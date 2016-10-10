---
heading: Element Mapper
seo: Getting Started | Element Mapper | Cloud Elements API Docs
title: Getting Started
description: Get up and running with Element Mapper UI.
layout: docs
apis: API Docs
platform: organizations
breadcrumbs: /docs/products/api-toolkit.html
parent: Back to API Toolkit
order: 3
---

# Getting Started
Before using Element Mapper, it is good to know a few things about how Element Mapper works:

# Javascript

Element Mapper supports writing custom Javascript for the use cases where the basic mapping of data does not provide enough functionality.  The function signature for any JS in transformations looks like:

```javascript
/**
 * @param  originalObject    The original object, with no transformations or mappings taking place on it.
 * @param  transformedObject The transformed object, with any mappings already taking place.
 * @param  fromVendor        Is this transformation being executed coming back from the vendor (on an API response) ?
 * @param  done              The callback function that you will need to call at the end of your JS
 */
function (originalObject, transformedObject, fromVendor, done) {
  // your Javascript will be executed here
}
```

> __PROTIP:__ For all scripts, Javascript `strict` mode is enforced.

> __PROTIP:__ ES6 is supported.

> __PROTIP:__ The function parameters are immutable, meaning they cannot be assigned to directly. In order to change an object or value passed into the function, first copy it to your own local variable and then make the necessary changes.

The `done` function is simply a callback function that should be called to terminate the given step.  For `script` type steps, this `done` callback takes a Javascript object whereas for `filter` or `notification` steps, the `done` callback just takes a `boolean`.

### Examples

There are a handful of common use cases we see where Javascript comes in very handy.  Some of those include adding fields to a resource when a certain endpoint does not provide them:

```javascript
transformedObject.isCreatedThisYear = (fromVendor && transformedObject.createdDt > '2016-01-01');

done(transformedObject);
```

Another common use case is where two endpoints have different JS types on a field.  Lets say we're trying to standardize a field called `priority`.  One endpoint returns a number, 1-2, while another endpoint returns a string set to `low` or `high`:

```javascript
if (!fromVendor) done(transformedObject); // only care when returning data from the vendor

transformedObject.priority = transformedObject.priorityNumber === 1 ? 'low' : 'high'; // we prefer our priority to be the string representation, so we convert the endpoints "priorityNumber" field to the appropriate string representation here.

done(transformedObject);
```
