---
heading: Element Builder
seo: Tips | Element Builder | Cloud Elements API Docs
title: Tips
description: Element Builder API Documentation.
layout: sidebarleft
apis: API Docs
platform: elementsbuilder
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 50
sitemap: false
---
# Tips

Tips is a section to find all of your tips and tricks for building high quality elements! *More to come!*


Have a tech tip suggestion? Please contact the [Documentation Team](mailto:documentation@cloud-elements.com).

## Max Page Size

When building an element in Element Builder, you set up a max page size, (*red box pictured below*) for your element. Cloud Elements uses this to discern what to send to the vendor as a default in the __pageSize__ parameter when making a GET list request.
![Element Builder Configuration 1](/assets/img/element-builder/tips/twitter-configuration-pageMax.png)


The image above shows that Twitter uses `100` as it's Max page size. This means that whenever making a GET list requests in Twitter, Cloud Elements uses 100 as the default page size.

However, there may be times where the endpoint may have different max page sizes for a resource. For example, when you are calling a `GET /users` in [FreshService](http://api.freshservice.com/#view_all_user), they note that `users` only returns `50` results per page. However, when calling `GET /problems` in [FreshService](http://api.freshservice.com/#view_all_problem), they note that `problems` only returns `30` results per page. To solve this, you can pass an object that specifies the pagination for each object, as well as the default.

![Element Builder Configuration 2](/assets/img/element-builder/tips/freshservice-configuration-pageMax.png)

### Examples

1. Setting pagination max for the `users` and `problems` resources:

```JSON
{
  "users": 50,
  "problems": 30
}
```

2. Setting pagination max for the `users` and `problems` resources as well as a `default` max page size:

```JSON
{
  "users": 50,
  "problems": 30,
  "default": 30
}
```

3. Setting pagination max for previous and a child resource, i.e. `GET /users/{id}/comments`:

```JSON
{
  "users": 50,
  "problems": 30,
  "usersComments": 50,
  "default": 30
}
```

### Support

Element Builder is currently in BETA.  We would love to hear about enhancements or concerns regarding the application.  Please don’t hesitate to get in touch.

Need some help?  Don’t hesitate to reach out to [Cloud Elements Support](mailto:support@cloud-elements.com) with any questions or concerns.

The Cloud Elements Team
