---
hub: On-Premise
title: Command-line Layer
description: Robust yet low-touch private clouds
layout: docs
categories: [onprem]
---

## Installation

#### Via homebrew:

```bash
$ brew tap cloud-elements/ops git@github.com:cloud-elements/homebrew-ops.git
$ brew install hykes
```

---

#### Via git clone:

```bash
$ git clone git@github.com:cloud-elements/hykes.git
$ cd hykes
```

> __NOTE:__ Since this route does not place `hykes` on your path, you must reference it inside the
cloned directory (e.g. `./hykes`). Ansible and Git are dependencies which you must ensure are
installed and configured.

---

## Usage
When `hykes` subcommands require arguments, you may either pass options explicitly or simply invoke
the subcommands without options. In the latter case, you will prompted for arguments and guided
through. The usage examples below sometimes explicitly provide options, purely for illustration
purposes. Rest assured, each can be used without explicit option passing.

#### Set up a new cloud with the latest Elements platform version:

```bash
$ hykes init
$ hykes cloud apply
```

> __NOTE:__ The `init` subcommand will prompt for the specific hykes cloud you wish to execute
against (e.g. `ce_ops`, `ce_prd_eu`, `ce_prd_us`, `hp_dev`, `hp_prd`). Settings are encrypted via
ansible-vault, and you will be prompted for a decryption key. If you have lost or are unaware of the
key for your organization, please contact the
[Cloud Elements ops team](mailto:elements-ops@cloud-elements.com).

---

#### Set up a new cloud with a specific Elements platform version:

```bash
$ hykes init
$ hykes cloud apply --version 1.2.3
```

---

#### Increase or decrease the number of `app` servers on an existing cloud with the latest Elements platform version:

```bash
$ hykes config servers --role app
$ hykes cloud apply
```

---

#### Increase or decrease the number of `app` servers on an existing cloud with a specific Elements platform version:

```bash
$ hykes config servers --role app
$ hykes cloud apply --version 1.2.3
```

---

#### Change an Element key on an existing cloud:

```bash
$ hykes config elementsproperty
$ hykes cloud apply
```

> __NOTE:__ See the [elements properties list](#elements-properties)

---

#### Deploy the latest version of the Elements platform on an existing cloud:

```bash
$ hykes cloud deploy
```

---

#### Deploy a specific version of the Elements platform on an existing cloud:

```bash
$ hykes cloud deploy --version 1.2.3
```

---

#### Patch an existing cloud:

```bash
$ hykes cloud patch
```

---

#### Make an existing cloud unavailable:

```bash
$ hykes cloud unavailable
```

---

#### Make an existing cloud available:

```bash
$ hykes cloud available
```

---

## Elements Properties

The most common elements properties whose value might need changed:

```
acton.oauth.api.callback
acton.oauth.api.key
acton.oauth.api.secret
autotask.psa.api.endpoint.east
autotask.psa.api.endpoint.prerelease
autotask.psa.api.endpoint.west
box.oauth.api.callback
box.oauth.api.key
box.oauth.api.secret
connectwise.psa.page.size
dropboxfile.oauth.api.callback
dropboxfile.oauth.api.key
dropboxfile.oauth.api.secret
eloqua.api.base.url
eloqua.api.endpoint.determination.url
evernote.base.sandbox.url
evernote.base.url
evernote.file.link.template
evernote.oauth.api.callback
evernote.oauth.api.key
evernote.oauth.api.secret
gnip.polling.enabled
gnip.processing.enabled
gnip.streaming.enabled
googledrive.oauth.api.callback
googledrive.oauth.api.key
googledrive.oauth.api.secret
hubspot.oauth.api.callback
hubspot.oauth.api.key
hubspot.oauth.scope
infobip.action.url
infobip.event.callback.url
infobip.resource.url
instagram.oauth.api.callback
instagram.oauth.api.clientId
instagram.oauth.api.secret
mailchimp.oauth.api.callback
mailchimp.oauth.api.key
mailchimp.oauth.api.secret
mailchimp.oauth.baseUrl
microsoft.app.sharepoint.id
photobucket.oauth.api.clientId
photobucket.oauth.api.secret
photobucket.url
quickbooks.oauth.api.appToken
quickbooks.oauth.api.callback
quickbooks.oauth.api.key
quickbooks.oauth.api.secret
sfdc.oauth.api.callback
sfdc.oauth.api.key
sfdc.oauth.api.secret
sfdc.oauth.revoke.url
sfdc.oauth.scope
sfdc.oauth.token.url
sfdc.site.address
sharepoint.app.domain
sharepoint.oauth.api.callback
sharepoint.oauth.api.key
sharepoint.oauth.api.secret
sharepoint.oauth.scope
shopify.oauth.api.callback
shopify.oauth.api.key
shopify.oauth.api.secret
shopify.oauth.scope
skydrive.api.host
skydrive.api.version
skydrive.authorization.host
skydrive.oauth.api.callback
skydrive.oauth.api.key
skydrive.oauth.api.secret
skydrive.oauth.scope
twilio.account.token
twilio.app.key
twilio.usage.api.template
```
