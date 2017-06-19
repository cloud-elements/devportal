#### Stream File Step Scope

Stream File steps add the step execution values described in the example JSON below to the formula context. The formula context is then passed from step-to-step, allowing you to use these values in any subsequent steps in your formula.

```json
{
  "my-step-name": {
    "download": {
        "request": {
              "query": "{}",
              "method": "POST",
              "uri": "/elements/api-v2/hubs/crm/accounts",
              "headers": "{\"authorization\":\"Element /ABC=, User DEF=, Organization GHI\",\"content-length\":\"14\",\"host\":\"jjwyse.ngrok.io\",\"content-type\":\"application/json}"
          },
          "response": {
              "code": "200",
              "headers": "{\"Set-Cookie\": \"CESESSIONID=2CA15552EE56EAF65BF1102F6CACEACC;Path=/elements/;HttpOnly\"}"
          }
      },
      "upload": {
          "request": {
              "query": "{}",
              "method": "POST",
              "uri": "/elements/api-v2/hubs/crm/accounts",
              "headers": "{\"authorization\":\"Element /ABC=, User DEF=, Organization GHI\",\"content-length\":\"14\",\"host\":\"jjwyse.ngrok.io\",\"content-type\":\"application/json}"
            },
            "response": {
                "code": "200",
                "headers": "{\"Set-Cookie\": \"CESESSIONID=2CA15552EE56EAF65BF1102F6CACEACC;Path=/elements/;HttpOnly\"}",
                "body": "{\"Id\": \"001tx3WcAAI\", \"Name\": \"New Account Name\"}"
            }
        }
    }
}
```

Example references to Stream File scope:

* `$steps.my-step-name.download.request.query.`
* `$steps.my-step-name.upload.request.headers.`
* `$steps.my-step-name.upload.response.body`
