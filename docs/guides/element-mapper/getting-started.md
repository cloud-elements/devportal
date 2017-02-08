---
heading: Element Mapper
seo: Getting Started | Element Mapper | Cloud Elements API Docs
title: Getting Started
description: Get up and running with Element Mapper UI.
layout: sidebarleft
apis: API Docs
platform: organizations
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
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

### Additional functionality

__Libraries__

* CE: Our custom library that provides some common functionality. It is not necessary to `require` this library, it is available by default.
 * `CE.randomString()`: Generate a random string (approx. 10 characters long).
 * `CE.randomEmail()`: Generate a random email address.
 * `CE.md5(str)`: Create an MD5 hash from a string value. Takes a `string` as a parameter. Returns a `string`.
 * `CE.b64(str)`: Encode a string in base64. Takes a `string` as a parameter. Returns a `string`.
 * `CE.hmac(algo)(enc)(secret, str)`: HMAC hash a string (_str_) using the provided secret (_secret_), algorithm (_algo_), and encoding (_enc_). See https://nodejs.org/api/crypto.html#crypto_class_hmac for more information about the algorithm and encoding parameters.
 * `CE.hmac[algo][enc](secret, str)`: This is a set of convenience functions that allow HMAC hashing using some common algorithms and encodings. For example, `CE.hmacSha1Hex(secret, str)` will create an HMAC SHA1 hash of the provided string, using the provided secret, and return a hex string.  You can replace _algo_ and _enc_ with the following values:  
 _algo_: `Sha1`, `Sha256`, `Md5`  
 _enc_: `Hex`, `base64`
* Lodash: The popular `lodash` library. To use this library, simply `require` it in your script. It is possible to use the library modules, as well, such as `lodash/fp`.
* Util: The standard Node `util` library. To use, `require` it in your script.

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
