---
heading: Ground2Cloud
seo: Config | Ground2Cloud | Cloud Elements API Docs
title: G2C Configuration
description: Ground2Cloud Configuration
layout: sidebarleft
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 9
---

## Cloud Elements On-Prem Config File

This document describes the On-Prem Connector toml config file which
lives on the client. When the On-Prem Connector starts up (either
the client or server), it will create a file with default values if one
does not already exist. The 'init' command for `petit-client` will do
nothing but create this file.

This document is for advanced users only, who wish to edit their
configuration directly, either because they are using the command-line
tools, or because they want greater control over their Ground2Cloud
installation. Normal users shouldn't have to edit this file directly.
Instead, most options can be set in the "Config" section of the
Ground2Cloud GUI.

All client commands, and the clientd daemon itself, accept a `-c
{path}` command-line option to specify a config file. Otherwise, the
default `{user_home}/.petit/config.toml` will be used. For example, most
Windows installers put Ground2Cloud in `C:\Ground2Cloud`, so you can run
(for example) `petit-client status -c C:\Ground2Cloud\config.toml`.

### Server

As a user of the Ground2Cloud client, you shouldn't need to worry about
anything in any `[server]` section of the configuration. If you'd like
to set up your own Ground2Cloud server installation, please contact
Cloud Elements support.

### Client

The client section of the config file is used only by Ground2Cloud
client applications and is indicated by the section headers

    [client]
    [client.vitae]
    [client.local]

#### Section `[client]`

The `[client]` header indicates general-purpose values for the client to
start up.

* `host`: The hostname of where the server is located. `localhost` is
  a good default for testing, but this should be changed to a valid
  server host in most environments.

* `port`: The active _sshd_ port on the server. This should almost
  always be set to `22`, the default value.

* `backPort`: The active _backchannel_ port on the server. This should
  match the `backPort` value on the server: default is `3014`.

* `username`: The ssh username to connect to. In most situations, this
  should match the username the petit server is running as.

* `listenPort`: The client will listen to commands on this port
  (`petit-client` will send commands to this port on localhost). This
  should be an open port on the server: `3015` is usually a good
  default.

* `logLevel`: The startup log level, which must be one of `"warn"`,
  `"info"` or `"debug"`. This level takes effect immediately at startup.
  Runtime changes to the logging level (for example with `petit-client
  log [level]`) aren't permanent, since they don't save to the config
  file.

* `bindAddr`: This specifies the client-specified Bind Address property
  of the reverse SSH tunnel, which determines what address connections
  are allowed to connect. The default is `0.0.0.0`, which permits all
  IPv4 addresses. Other values could be `localhost`, which permits only
  local connections (useful if you want to secure access via the HTTP
  proxy only); `::` to permit any IPv6 connection; or any specific IP to
  limit connections there.

#### Section `[client.vitae]`

The `[client.vitae]` section contains information about the client's
environment which is sent to the server. It currently has two useful
properties:

* `brand`: This is the name of the brand for "branded" clients, and is
  usually set to the customer name who is using the G2C client (e.g.
  `"someclient"`). Evaluation or Cloud-Elements branded clients should
  use the value `"ce"`.

* `bundle`: Set to `"quickbooks"` for client applications distributed in
  the QuickBooks-bundled installer. Do not include at all for the
  unbundled version.

#### Section `[client.local]`

The `[client.local]` section has values that correspond to the local
service which a cloud element instance connects to. There are only two
properties:

* `host`: The hostname where the local service lives. `localhost` is a
  good default, since the On-Prem Connector is often installed on the
  same machine as the local service. However, any reachable hostname can
  be used, if for example, you want the On-Prem Connector to live in a
  different intranet zone.

* `port`: The port where local service is reached. The default of `8080`
  is appropriate for other Cloud Elements connection services (for
  example, the native QuickBooks connector runs on port 8080), but might
  be changed for other services.

These `[client.local]` values may be overriden per-tenant in each
tenant's own `config.toml` file, which contains its own `[local]`
section with a `host` and `port` value.

#### Additional Values

In addition to these properties, there are some values that are fixed:
they don't show up in the config file, nor can they be altered:

* `./key`: The location of the client's private key. The `register`
  command, if successful, may write the key to this path, and the
  key will be used both for the initial backchannel handshake and ssh
  login when petit starts.

* `./tenants`: The location of the tenant registration, which has a
  a list of directories, each of which has its own registration file.

* `./upgrades`: A directory where the client temporarily stores
  downloaded patches to run.

* `./client.lock` is the name of the file which is used to ensure that
  only one client daemon is running at a time. It is a zero-byte file
  whose mere existance indicates that a client is running.

* `./client.pid` is a JSON file whose contents contain the PID and
  listen port of the currently running client daemon, like this:

      {"pid":46510,"listen":3016}

  Under normal circumstances, this file will exist if and only if its
  sibling `./client.lock` also exists.

* `./client.log` is the log file where logs are stored. This contains
  all logging and debugging info for particular client runs. While not
  strictly a JSON file, it is a
  [winston](https://github.com/winstonjs/winston)-style JSON log output.
  For example:

      {"address":"::","family":"IPv6","port":3015,"level":"info","message":"Command listening on","timestamp":"2016-01-22T18:55:24.259Z"}
      {"level":"info","message":"Client listening.","timestamp":"2016-01-22T18:55:24.260Z"}
      {"level":"warn","message":"Unable to connect to server at \"localhost:3014\".","timestamp":"2016-01-22T18:55:24.266Z"}
      {"level":"info","message":"Client closed.","timestamp":"2016-01-22T18:55:24.266Z"}
      {"level":"info","message":"Backchannel closed.","timestamp":"2016-01-22T18:55:24.266Z"}

  To minimize the installation footprint, if the log exceeds 50,000
  bytes, then a new log file is started, and the previous one will be
  suffixed with a counter (e.g. `./client1.log`), and only the last
  three log files will be kept.
