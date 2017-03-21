Cloud Elements supports searching on the following types of custom objects:

  * boolean
  * long
  * string
  * multiselect
  * enums

To search on custom fields, add `custom.<type>` to the field reference and value in your `where` clause. For example:

 * To search on a custom boolean field:

```bash
`custom.boolean.scriptId` = 'custentity_2663_direct_debit' and `custom.boolean.value` = 'false'
```

* To search on a custom multiselect field:

```bash
`custom.multi.scriptId` = 'custentity_2663_direct_debit' and `custom.multi.value.internalId` = 1
```

* To search on a custom long field:

```bash
`custom.long.scriptId` = 'custentity1' and `custom.long.value` = 1000
```
