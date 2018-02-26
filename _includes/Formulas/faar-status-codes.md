When you create a Formula as a Resource you can specify status codes and descriptions. To include a status code and result in the response to a FaaR request:

1. In the formula, add a JS Script step as the final step.
2. Include a script like the following in the step:

    ```js
    done({
      statusCode: xxx
      result: {
        label: 'message'
      }
    })
    ```

3. Save the step.

| Property | Description   |
| :------------- | :------------- |
| statusCode  |  The status code that you want to return in the response, such as `200`, `401`, or `502`. The value must be a valid status code.  |
| result   |  The body of the response which can be anything related to the status code such as an array of objects, a single object, or text. The example above includes an array containing a key value pair with a label and a message.  |
