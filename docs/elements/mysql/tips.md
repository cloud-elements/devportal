---
heading: MySQL
seo: FAQ | MySQL | Cloud Elements API Docs
title: Tips
description: FAQ and troubleshooting tips.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 479
parent: Back to Element Guides
order: 50
---

# Tips

The Tips section includes more information about the element including FAQs, endpoint limitations, and general tips.

{% include callout.html content="<strong>On this page</strong></br><a href=#general>General</a></br><a href=#events>Events</a></br><a href=#events>Events</a></br><a href=#documentation>Documentation</a></br>" type="info" %}

## General

* If you are having trouble connecting to your database, check your config file to make sure the port and bind-address have been set.

Example Config:

```bash
/etc/mysql/my.cnf
port = 3306
bind-address           = 127.0.0.1 localhost
#bind-address           = 159.203.5.166 external
```

In this example, the `localhost bind-address` is not commented out so it will be used as the `db.host` value in the POST /instance configuration.
The port is set to `3306`.  The `db.host` value would equal = `127.0.0.1:3306`.

If you wish to expose the `external bind-address`, then comment out the `localhost bind-address`.

If you wish to expose both sources (`localhost` and `external`), then comment out both addresses.

* MySQL is a database element that is constructed from your database table structure. Spaces in column names are not supported.

## Events

* Events are based on timestamp in the database with or without timezone.

## Documentation

* Cloud Elements does not have any generic API docs available to view.
