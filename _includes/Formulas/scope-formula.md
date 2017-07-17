#### Sub-Formula Step Scope

Sub-Formula steps add the values produced as the result of the last step in the sub-formula. Therefore, we recommend that when you build formulas to be used by other other formulas that you add a specific step to aggregate and returns whatever data is needed in the parent's formula context.

If the sub-formula requires variables, then those variables can either be set in the parent formula instance using the same config names or passed in via the `subFormulaConfigs` property. All sub-formulas inherit their parent formula's configuration values. If you pass in the `subFormulaConfigs` these are added to the list of existing configs from the parent and the sub-formula has access to the parent's configs and those passed in with the values in `subFormulaConfigs` taking precedence.

The `args` can be accessed in the sub-formula using `trigger.args`. The `subFormulaConfigs` can be accessed in the sub-formula using config for example: `${config.crmInstanceId}`.
