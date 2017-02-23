---
heading: FreshBooks
seo: FAQ | FreshBooks | Cloud Elements API Docs
title: Additional Information
description: FreshBooks FAQ.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 172
parent: Back to Element Guides
order: 17
---

## Additional Information

FRESHBOOKS RESPONSE PAYLOAD FAQ

FreshBooks response payloads are by default formatted in XML.  Cloud Elements transforms the response payloads from XML to JSON in each of the API calls.

Due to this transformation, the ‘@’ and ‘$’ symbols will be seen in the JSON response payloads.  Fields prefixed with the ‘@’ are interpreted as attributes and the ‘$’ field represents text content.  Let’s take a look at an example.

Here is some example JSON with the ‘@’ and ‘$’ representing fields in the phone-number portion of the object.

```json
{
  "customer" : {
    "first-name" : "Jane",
    "last-name" : "Doe",
    "address" : {
      "street" : "123 A Street"
    },
    "phone-number" : [ {
      "@type" : "work",
      "$" : "555-1111"
    }, {
      "@type" : "cell",
      "$" : "555-2222"
    } ]
  }
}
```

The transformed XML would look like this:

```xml
<?xml version="1.0"?>
<customer>
    <first-name>Jane</first-name>
    <last-name>Doe</last-name>
    <address>
        <street>123 A Street</street>
    </address>
    <phone-number type="work">555-1111</phone-number>
    <phone-number type="cell">555-2222</phone-number>
</customer>
```

If you have any questions regarding the response payloads, please don’t hesitate to email us at [support@cloud-elements.com.](mailto:support@cloud-elements.com.)
