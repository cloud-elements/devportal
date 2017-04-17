---
heading: Microsoft SQL Server
seo: FAQ | Microsoft SQL Server | Cloud Elements API Docs
title: Tips
description: FAQ and troubleshooting tips.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 490
parent: Back to Element Guides
order: 50
---

## Tips

### Why can't I connect my database?

Check your config file to make sure the port and bind-address have been set.

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

### I don't see any API Docs:

Since the resources/objects are constructed via your database tables, we do not have any generic API docs available to view.

Need some help? [Contact Support](mailto:support@cloud-elements.com) with any questions and we'll get back to you as soon as possible.
