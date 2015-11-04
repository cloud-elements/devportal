---
title: On-Premise
description: Robust yet low-touch private clouds
layout: docs
categories: [onprem]
---

## `app` Role

A composition of the `common`, `java`, and `tomcat` services.

### `eltappctl` CLI

Provides a simplified way of interacting with the elements application tier.

__Usage:__

_Start application tier:_
```bash
$ eltappctl start
```

---

_Stop application tier:_
```bash
$ eltappctl stop
```

---

_Restart application tier:_
```bash
$ eltappctl restart
```

---

### `eltappdpl` CLI

Provides a simplified way of updating the elements application tier with new releases of the
elements platform.

__Usage:__

_Initialize application tier deployer:_
```bash
$ eltappdpl init
```

---

_Pull elements bundle via deployer:_
```bash
$ eltappdpl pull latest
$ eltappdpl pull 1.2.3
```

---

_Checkout elements bundle via deployer:_
```bash
$ eltappdpl checkout latest
$ eltappdpl checkout 1.2.3
```

---

_Deploy, based upon the current checkout context:_
```bash
$ eltappdpl deploy
```

---

### `eltappmon` CLI

## `cache` Role

A composition of the `common`, `memcached`, and `redis` services.

### `eltcshctl` CLI

Provides a simplified way of interacting with the elements cache tier.

__Usage:__

_Start cache tier:_
```bash
$ eltcshctl start
```

---

_Stop cache tier:_
```bash
$ eltcshctl stop
```

---

_Restart cache tier:_
```bash
$ eltcshctl restart
```

---

### `eltcshdpl` CLI

Provides a simplified way of updating the elements cache tier with new releases of the elements
platform.

__Usage:__

_Initialize cache tier deployer:_
```bash
$ eltcshdpl init
```

---

_Pull elements bundle via deployer:_
```bash
$ eltcshdpl pull latest
$ eltcshdpl pull 1.2.3
```

---

_Checkout elements bundle via deployer:_
```bash
$ eltcshdpl checkout latest
$ eltcshdpl checkout 1.2.3
```

---

### `eltcshmon` CLI

## `database` Role

A composition of the `common` and `postgresql` services. The Postgres apt repository is used
directly which allows more robust version availability.

### `eltdbctl` CLI

Provides a simplified way of interacting with the elements database tier.

__Usage:__

_Start database tier:_
```bash
$ eltdbctl start
```

---

_Stop database tier:_
```bash
$ eltdbctl stop
```

---

_Restart database tier:_
```bash
$ eltdbctl restart
```

---

### `eltdbdpl` CLI

Provides a simplified way of updating the elements database tier with new releases of the elements
platform.

__Usage:__

_Initialize database tier deployer:_
```bash
$ eltdbdpl init
```

---

_Pull elements bundle via deployer:_
```bash
$ eltdbdpl pull latest
$ eltdbdpl pull 1.2.3
```

---

_Checkout elements bundle via deployer:_
```bash
$ eltdbdpl checkout latest
$ eltdbdpl checkout 1.2.3
```

---

_Deploy, based upon the current checkout context:_
```bash
$ eltdbdpl deploy <elements_password> <cesecurity_password>
```

---

_Migrate, based upon the current checkout context:_
```bash
$ eltdbdpl migrate <elements_password> <cesecurity_password> <master_encryption_password> <backup_encryption_password>
```

---

_Obtain migration keys, based upon the current checkout context:_
```bash
$ eltdbdpl migratekeys <cesecurity_password> <master_encryption_password> <backup_encryption_password>
```

---

_Obtain migration cesecurity password, based upon the current checkout context:_
```bash
$ eltdbdpl migratecesecuritypass <cesecurity_password> <master_encryption_password>
```

---

_Obtain migration elements encrypted password, based upon the current checkout context:_
```bash
$ eltdbdpl migrateelementspass <elements_password> <cesecurity_password> <master_encryption_password>
```

---

### `eltdbmon` CLI

## `eib` Role

A composition of the `common` and `kafka` services.

### `elteibctl` CLI

Provides a simplified way of interacting with the elements EIB tier.

__Usage:__

_Start EIB tier:_
```bash
$ elteibctl start
```

---

_Stop EIB tier:_
```bash
$ elteibctl stop
```

---

_Restart EIB tier:_
```bash
$ elteibctl restart
```

---

### `elteibdpl` CLI

Provides a simplified way of updating the elements EIB tier with new releases of the elements
platform.

__Usage:__

_Initialize EIB tier deployer:_
```bash
$ elteibdpl init
```

---

_Pull elements bundle via deployer:_
```bash
$ elteibdpl pull latest
$ elteibdpl pull 1.2.3
```

---

_Checkout elements bundle via deployer:_
```bash
$ elteibdpl checkout latest
$ elteibdpl checkout 1.2.3
```

---

### `elteibmon` CLI

## `loadbalance` Role

A composition of the `common` and `nginx` services.

### `eltlbdpl` CLI

Provides a simplified way of updating the elements load balancing tier with new releases of the
elements platform.

__Usage:__

_Initialize loadbalance tier deployer:_
```bash
$ eltlbdpl init
```

---

_Pull elements bundle via deployer:_
```bash
$ eltlbdpl pull latest
$ eltlbdpl pull 1.2.3
```

---

_Checkout elements bundle via deployer:_
```bash
$ eltlbdpl checkout latest
$ eltlbdpl checkout 1.2.3
```

---

### `eltlbctl` CLI

Provides a simplified way of interacting with the elements load balancing tier.

__Usage:__

_Start loadbalance tier:_
```bash
$ eltlbctl start
```

---

_Stop loadbalance tier:_
```bash
$ eltlbctl stop
```

---

_Restart loadbalance tier:_
```bash
$ eltlbctl restart
```

---

_Make loadbalance tier unavailable (returns 503):_
```bash
$ eltlbctl unavailable
```

---

_Make loadbalance tier available:_
```bash
$ eltlbctl available
```

---

### `eltlbmon` CLI

Provides a simplified way of monitoring the elements load balancing tier.

__Usage:__

_Get the current loadbalance tier state:_
```bash
$ eltlbmon info state
```

---

_Get the current loadbalance tier availability:_
```bash
$ eltlbmon info availability
```

---

_Get the current loadbalance tier memory usage in MB:_
```bash
$ eltlbmon info mem
```

---

_Get the current loadbalance tier memory usage as a percentage:_
```bash
$ eltlbmon info pmem
```

---

_Get the current loadbalance tier cpu usage as a percentage:_
```bash
$ eltlbmon info pcpu
```

---

_Check for a specific state of the loadbalance tier:_
```bash
$ eltlbmon is running
$ eltlbmon is stopped
```

---

_Check for a specific availability of the loadbalance tier:_
```bash
$ eltlbmon is available
$ eltlbmon is unavailable
```

---

_Check for high memory usage of the loadbalance tier:_
```bash
$ eltlbmon has highmem
```

---

_Check for high cpu usage of the loadbalance tier:_
```bash
$ eltlbmon has highcpu
```

---

## `logpipe` Role

A composition of the `common`, `java`, and `logstash` services.

### `eltlpictl` CLI

Provides a simplified way of interacting with the elements log pipe tier.

__Usage:__

_Start log pipe tier:_
```bash
$ eltlpictl start
```

---

_Stop log pipe tier:_
```bash
$ eltlpictl stop
```

---

_Restart log pipe tier:_
```bash
$ eltlpictl restart
```

---

_Status of log pipe tier:_
```bash
$ eltlpictl status
```

---

### `eltlpidpl` CLI

Provides a simplified way of updating the elements log pipe tier with new releases of the elements
platform.

__Usage:__

_Initialize log pipe tier deployer:_
```bash
$ eltlpidpl init
```

---

_Pull elements bundle via deployer:_
```bash
$ eltlpidpl pull latest
$ eltlpidpl pull 1.2.3
```

---

_Checkout elements bundle via deployer:_
```bash
$ eltlpidpl checkout latest
$ eltlpidpl checkout 1.2.3
```

---

### `eltlpimon` CLI

## `logsearch` Role

A composition of the `common`, `java`, and `elasticsearch` services.

### `eltlsrctl` CLI

Provides a simplified way of interacting with the elements log search tier.

__Usage:__

_Start log search tier:_
```bash
$ eltlsrctl start
```

---

_Stop log search tier:_
```bash
$ eltlsrctl stop
```

---

_Restart log search tier:_
```bash
$ eltlsrctl restart
```

---

_Status of log search tier:_
```bash
$ eltlsrctl status
```

---

### `eltlsrdpl` CLI

Provides a simplified way of updating the elements log search tier with new releases of the elements
platform.

__Usage:__

_Initialize log search tier deployer:_
```bash
$ eltlsrdpl init
```

---

_Pull elements bundle via deployer:_
```bash
$ eltlsrdpl pull latest
$ eltlsrdpl pull 1.2.3
```

---

_Checkout elements bundle via deployer:_
```bash
$ eltlsrdpl checkout latest
$ eltlsrdpl checkout 1.2.3
```

---

### `eltlsrmon` CLI
