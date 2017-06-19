#### JS Script Step Scope

JS Script steps add whatever object is passed to the JS `done` callback to the formula context. The formula context is then passed from step-to-step, allowing you to use these values in any subsequent steps in your formula.

```javascript
done({
  foo: 'bar',
  object: {
    someKey: 'someValue'
  }
});
```
Example references to JS Script scope:

* `steps.my-script-step.foo`
* `steps.my-script-step.object`
* `steps.my-script-step.object.someKey`
