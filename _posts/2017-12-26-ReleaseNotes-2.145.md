---
title: Cloud Elements Version 2.145
date: 2017-12-26
layout: release-note-item
release: 2.145
heading: Release Notes
---

## Elements

### Marketo: Added programStatus as valid metadata attribute to bulk upload

When making a `POST /bulk/programsLeads` you can now use `programStatus` as a valid attribute in the metadata.

## CEQL

You can now use the word value in CEQL where clauses. For example, `communicationItems.value='2'` no longer returns an error.
