#### HTTP Request Step Scope

HTTP Request steps add the step execution values described in the example JSON below to the formula context. The formula context is then passed from step-to-step, allowing you to use these values in any subsequent steps in your formula.

```json
{
  "my-step-name": {
    "request": {
        "query": "{}",
        "body": "{\"Name\":\"New Account Name\"}",
        "method": "POST",
        "url": "https://api.myservice.com:443/myresource",
        "path": "{}",
        "headers": "{\"authorization\":\"mysessionid\",\"content-type\":\"application/json}"
    },
    "response": {
      "code": "200",
      "headers": "{\"Set-Cookie\": \"CESESSIONID=2CA15552EE56EAF65BF1102F6CACEACC;Path=/elements/;HttpOnly\"}",
      "body": "{\"id\": \"237648\", \"name\": \"My New Resource Name\"}"
    }
  }
}
```
Example references to HTTP Request scope:

* `$steps.my-step-name.request`
* `$steps.my-step-name.request.body`
* `$steps.my-step-name.response.code`
