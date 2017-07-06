#### Retry Formula on Failure Step Scope

Retry Formula on Failure steps truncate the formula execution and schedule a retry execution for a later time based upon the retry attempt number. The result of this equation is used to schedule a retry in minutes. The step execution response value for this step is a `string` as shown in the example below.

```json
{
  "id": "53067",
  "key": "retry.error",
  "value": "Formula instance execution scheduled for retry at approximately 2016-12-05T08:52:37-07:00"
}
```
In this example, the step name in the formula is `retry`, and the value of the step execution indicates the time when the formula execution will be retried.
