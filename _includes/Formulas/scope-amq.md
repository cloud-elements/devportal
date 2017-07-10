#### ActiveMQ Request Step Scope

ActiveMQ Request steps add the step execution values described in the example JSON below to the formula context. The formula context is then passed from step-to-step, allowing you to use these values in any subsequent steps in your formula.

```json
{
  "myAmqStep": {
    "request": {
        "body": "{\"message\":\"This is a test message.\"}",
        "url": "amqp://otqaqsml:tPpXwTl7-iMtezRmyJmD-y2U_XbroYpW@jaguar.rmq.cloudamqp.com/otqaqsml",
        "exchange": "main",
        "queue": "myqueue"
    }
  }
}

```
Example references to ActiveMQ Request scope:

* `${steps.myAmqStep.request}`
* `${steps.myAmqStep.request.body}`
