#### JS Filter Step Scope

JS Filter steps pass a boolean into the JS `done` callback function. That boolean is made available under the key titled `continue`, as shown in the examples below.

```json
{
  "my-step-name": {
    "continue": "true"
  }
}
```

```json
{
  "my-step-name": {
    "continue": "false"
  }
}
```
