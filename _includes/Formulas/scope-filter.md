#### JS Filter Step Scope

JS Filter steps pass a boolean into the JS `done` callback function. That boolean is made available under the key titled `continue`, as shown in the examples below.

```json
{
  "myFilterStep": {
    "continue": "true"
  }
}
```

```json
{
  "myFilterStep": {
    "continue": "false"
  }
}
```
