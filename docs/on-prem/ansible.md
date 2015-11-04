---
title: On-Premise
description: Robust yet low-touch private clouds
layout: docs
categories: [onprem]

---

## Installation

#### Via git clone:

```bash
$ git clone git@github.com:cloud-elements/hykes.git
$ cd hykes/src
```

---

## Groups and Roles

Each cloud has a dedicated Ansible inventory, which is composed of hosts grouped by their role in
the overall infrastructure (e.g. `app`, `database`, `loadbalance`). Each role is a composition of
one or more services (e.g. `tomcat`, `kafka`). For ease of reference, both conceptually and when
issuing commands, there exist purely logical groupings (e.g. `all`). The entire structure can
be represented via a tree-like structure:

```
|-- all (LOGICAL)
  |-- app (common, java, tomcat)
  |-- cache (common, memcached, redis)
  |-- database (common, java, maven, postgresql)
  |-- eib (common, java, kafka)
  |-- loadbalance (common, nginx)
  |-- logpipe (common, java, logstash)
  |-- logsearch (common, java, elasticsearch)
```

---

## Tags

Tags are used heavily to allow fine-grain playbook execution (i.e. running specific subtasks within
playbooks). Tag instances include every service (e.g. `common`, `java`, `kafka`, `maven`,
`memcached`, `nginx`, `postgresql`, `redis`, `repmgr`, `tomcat`) and some specific niche use cases,
such as `cli`.

## Inventories

For ease of use, both for Cloud Elements and on-premise clouds, each organization, environment, and
location combination is handled by a distinct inventory file (e.g. `ce_prd_us`, `ce_prd_eu`,
`ce_stg`, `hp_prd`, `hp_stg`).

#### Naming/grouping convention expressed as regex:

```
^[a-z]{2}_(prd|stg|dev|ops)(_[a-z0-9]{2,8})?$
```

---

#### Naming/grouping convention expressed simply:

1. Two character code which represents organization (e.g. Cloud Elements=ce, Hewlett Packard=hp)
2. Append an underscore and a three character code which represents the environment (e.g.
production=prd, staging=stg, development=dev, operations=ops)
3. If an organization runs two or more of the same environment, append an underscore and location
code (e.g. us, eu, uswest, useast)

## Playbooks

Playbooks are broken into two groups, _core_ and _utility_. Core playbooks are the traditional
playbooks you find in any Ansible setup; they provide a means to configure hosts based upon the
selected inventory. Utility playbooks are ad-hoc in nature, providing functionality to do one-off
tasks such as deploying new versions of the elements platform, changing the cloud's availability,
and performing OS-level patching.

#### Set up a new cloud with the latest Elements platform version:
```bash
$ ansible-playbook -i inventory site.yml
```

---

#### Set up a new cloud with a specific Elements platform version:

```bash
$ ansible-playbook -i inventory site.yml --extra-vars='version=1.2.3'
```

---

#### Increase or decrease the number of servers on an existing cloud:
```bash
$ ansible-playbook -i inventory site.yml
```

> __NOTE:__ When adding new hosts to an existing cloud, ensure that your existing hosts are on the
latest platform version (via `util_deploy.yml`) OR that you specify the platform version, via
`--extra-vars='version=1.2.3'`, to match that of the existing hosts.

---

#### Update settings on an existing cloud:
```bash
$ ansible-playbook -i inventory site.yml
```

---

#### Configure and deploy just database hosts:

```bash
$ ansible-playbook -i inventory database.yml
```

---

#### Configure and deploy just the postgresql tasks on database hosts:

```bash
$ ansible-playbook -i inventory database.yml --tags postgresql
```

---

#### Configure and deploy just the primary database host:

```bash
$ ansible-playbook -i inventory database.yml --extra-vars='limit=database[0]'
```

---

#### Configure and deploy just the postgresql tasks on the primary database host:

```bash
$ ansible-playbook -i inventory database.yml --tags postgresql --extra-vars='limit=database[0]'
```

---

#### Deploy the latest version of the Elements platform on an existing cloud:

```bash
$ ansible-playbook -i inventory util_deploy.yml
```

---

#### Deploy a specific version of the Elements platform on an existing cloud:

```bash
$ ansible-playbook -i inventory util_deploy.yml --extra-vars='version=1.2.3'
```

---

#### Patch an existing cloud:

```bash
$ ansible-playbook -i inventory util_patch.yml
```

---

#### Make an existing cloud unavailable:

```bash
$ ansible-playbook -i inventory util_unavailable.yml
```

---

#### Make an existing cloud available:

```bash
$ ansible-playbook -i inventory util_available.yml
```

---

#### Key an existing cloud for administrators, via GitHub ssh keys, as root with ssh keys:

```bash
$ ansible-playbook -i inventory util_key.yml --user=root
```

> __EXAMPLE:__ Fresh DigitalOcean droplet with ssh keys used.

---

#### Key an existing cloud for administrators, via GitHub ssh keys, as root without ssh keys:

```bash
$ ansible-playbook -i inventory util_key.yml --user=root --ask-sudo-pass --ask-pass
```

> __EXAMPLE:__ Fresh DigitalOcean droplet without ssh keys used.

---

#### Key an existing cloud for administrators, via GitHub ssh keys, as existing administrator with ssh keys:

```bash
$ ansible-playbook -i inventory util_key.yml
```

> __EXAMPLE:__ Adding a new administrator when you have already been keyed previously

---
