---
heading: Ground2Cloud
seo: Ground2Cloud CLI | Ground2Cloud | Cloud Elements API Docs
title: G2C CLI
description: Ground2Cloud Command Line Interface
layout: sidebarleft
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 11
---

## Cloud Elements On-Prem CLI

The Ground2Cloud CLI can be used to install and configure the Ground2Cloud Client. 

The G2C client is a NPM package, and requires **Node.js** in order to be installed. To check that Node.js is installed:  
    
    $ node -v

Node and NPM aren't currently installed go to the [NPM docs and install Node.js and NPM](https://docs.npmjs.com/getting-started/installing-node.)


### Installation

Install the G2C client:

    $ sudo -H npm install -g cloudelements-petit

The Cloud Elements G2C client is called **petit-client**

### Configuration

The configuration settings for the G2C client live in `config.toml`.

To create the to config file, run the command  

    $ petit-client init

This will create the config file as well as print the path to the created file, usually under `{user_home}/.petit/config.toml`

Open config.toml and check that the **client** configuration matches the following:  

    [client]
    host = "g2c.cloud-elements.com"
    port = 22
    backPort = 3014
    username = "root"
    listenPort = 3015
    bindAddr = "0.0.0.0"
    apiPort = 8100

This sets the petit-client to talk to the production g2c server.

To connect your local service to the G2C client, configure the `[client.local]` to match the local settings. 

`host` should point to the url of the service you are connecting to, and `port` is the port the service is exposed to.

For example, if I'm running a PostgreSQL server locally, my configuration would look like this:

    [client.local]
    host = "localhost"
    port = 5432

**Note:** Every time the configuration file is changed, the petit-client needs to be restarted.
    
    $ petit-client reload

### Connecting the G2C local client to an Element Instance

**NOTE: Make sure the [client] section of the config.toml matches the configuration above before running the register command.**

Before starting the petit-client, you will need to run the register command.

    $ petit-client register

Then tell petit-client to start up

    $ petit-client start

Once the petit-client is registered and running, run the `petit-client status` command to get the server information. Below is an example configuration.

    $ petit-client status
    > Client has status on pid 6798
    {
      "status": "running",
      "registration": [
        {
          "id": "9886",
          "port": 40967,
          "dir": "/Users/claytonshaver/.petit/tenants/bb5e671f92325f2d",
          "endpoint": "https://9886.g2c.cloud-elements.com"
        }
      ],
      "fingerprint": "5a:80:cd:98:ae:0e:76:db:3c:00:35:04:13:d8:7c:71",
      "vitae": {
        "brand": "ce"
      },
      "server": {
        "vitae": {
          "environment": "production",
          "endpoint": "https://REGID.g2c.cloud-elements.com",
          "ip": "::ffff:63.157.89.118",
          "version": "0.5.12",
          "endpoints": {
            "9886": "https://9886.g2c.cloud-elements.com"
          }
        }
      }
    }
Make a note of the **port** and **endpoint**, in the example above they are `"port":40967` and `"endpoint": "https://9886.g2c.cloud-elements.com"`

This information can be used to create an Element Instance. Using the example above, we could create a PostgreSQL instance using the database host: `9886.g2c.cloud-elements.com:40967`.

![PostgreSQL Instance](https://cl.ly/3S33403m0p0k/Screen%20Shot%202017-01-23%20at%203.11.17%20PM.png)

