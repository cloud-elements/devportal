---
heading: Building Formulas
seo: Javascript in Formulas | Formulas | Cloud Elements API Docs
title: Javascript in Formulas
description: How to Use Javascript in Formulas
layout: sidebarleft
apis: API Docs
restContentVersion: referenceapi
platform: formulas
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 20
---

# Javascript in Formulas
There are many step types that allow you to write your own custom Javascript.  The function signature for all JS-related step types looks like:

```javascript
/**
 * @param  trigger The trigger that started this execution
 * @param  steps   The list of steps that have been executed up until this point for this execution and all of their step execution values
 * @param  info    Metadata about this formula
 * @param  config  The configuration values set on the formula instance (config variables)
 * @param  done    The callback function that you will need to call at the end of your script step
 */
function (trigger, steps, info, config, done) {
  // your Javascript will be executed here
}
```

Note the following when writing javascript in formulas:

* For all scripts, Javascript `strict` mode is enforced.
* You can use `console.log` to log things in your formula and help debug.
* You can use `notify.email` to send an email notification.
* ES6 is supported.
* The function parameters are immutable, meaning they cannot be assigned to directly. In order to change an object or value passed into the function, first copy it to your own local variable and then make the necessary changes.

## Functions

* `console.log(str)`: Log something from the script. This logged value will be returned in an array called `console`, which will be available to see as a step execution value. Takes a `string` as a parameter.
* `throw(str)`: Force a script to exit with an error message. The error message will be available to see as a step execution value. Takes a `string` as a parameter.
* `notify.email(to, subject, body)`: Send an email notification directly from a Javascript step.  `to` can be a single email or a comma separated list of emails, `subject` is the subject of the email and `body` is the body of the email. A value will be returned in an array called `notify`, which will be available to see as a step execution value. Takes three `string` parameters. You can reference anything from the context when passing in `to`, `subject` or `body` in the same way you can access these variables elsewhere in the Javascript. For example:
```
notify.email(steps.previous-step.email, steps.previous-step.subject, steps.previous-step.emailPrefix + '<br>This is the main body.');
```

## Libraries

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
