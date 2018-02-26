---
heading: Event Management - Security
seo: Event Management Security | Cloud Elements API Docs
title: Security
description: Event Hash Verification Guide
layout: sidebarleft
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 40
sitemap: false
---

## Hash Verification

All Element Instances containing a Callback Notification Signature Key will include the `Elements-Webhook-Signature` header field.
The value of this field will contain a unique SHA256 hash that corresponds to the event (ie. `sha256=jHdbRx5EZAsOfTwAPJOGkNUzQMVVdu5VJlxcsk+G6jQ=`).
This hash is calculated by creating a SHA256 hash of the payload using the Callback Notification Signature Key as the key. In order to verify Event Notifications originate from Cloud Elements please regenerate the SHA256 hash and test it against the value of the `Elements-Webhook-Signature` header.

Cloud Elements has provided sample code for re-generating the SHA256 hash for event notifications:

`Java`:

```java
import org.apache.commons.codec.binary.Base64;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;


public class SecurityEventKey {

    // Your Event Notification Signature

    private static final String SIGNATUREKEY = "MySecretEventSignatureKey";

    // Your Event Notification Payload (Raw Body)

    private static String payload = "<INSERT_EVENT_NOTIFICATION_RESPONSE_BODY>";

    public static void main(String[] args) {
        try {
            Mac sha256_HMAC = Mac.getInstance("HmacSHA256");
            SecretKeySpec secret_key = new SecretKeySpec(SIGNATUREKEY.getBytes(), "HmacSHA256");
            sha256_HMAC.init(secret_key);

            String hash = Base64.encodeBase64String(sha256_HMAC.doFinal(payload.getBytes()));

            //This should equal what came on the event header as "Elements-Webhook-Signature"

            System.out.println("sha256=" + hash);
        }
        catch (Exception e){
            System.out.println("Error: " + e);
        }
    }

}

// sha256=jHdbRx5EZAsOfTwAPJOGkNUzQMVVdu5VJlxcsk+G6jQ=
```

`Javascript (Node)`:

```javascript

var hmac = crypto.createHmac('sha256', 'MySecretEventSignatureKey')
           .update('<INSERT_EVENT_NOTIFICATION_RESPONSE_BODY>').digest('base64');

// shaHeader == “sha256=“ + hmac
// sha256=jHdbRx5EZAsOfTwAPJOGkNUzQMVVdu5VJlxcsk+G6jQ=
```

`Ruby`:

```ruby
require 'openssl'
require "base64"

hash  = OpenSSL::HMAC.digest('sha256', "MySecretEventSignatureKey", "<INSERT_EVENT_NOTIFICATION_RESPONSE_BODY>")
puts "sha256="+Base64.strict_encode64(hash)

# sha256=jHdbRx5EZAsOfTwAPJOGkNUzQMVVdu5VJlxcsk+G6jQ=
```
