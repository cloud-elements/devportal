| Parameter | Description   | Required   |
| :------------- | :------------- | :------------- |
|  configuration name  |  The visible name of the configuration as it appears in the Cloud Elements UI.   |  Y  |
|  Configuration Key  |  The internal unique identifier for the configuration. The configuration key value appears in the authentication JSON. You also refer to the configuration by configuration key in parameters and hooks.   |  Y  |
|  Default Value  |  The default value of the configuration.   |  N  |
|  Configuration Description  |  The description appears as hover help text. The text space available is limited, so write brief but useful descriptions. |  Y  |
|  Configuration Type  |  The type of configuration, which can be any of the following:   |  Y  |
|    |  Text Area, Text Text 32, Text 64, Text 100, Text 128 &mdash; Identifies configurations that accept free text strings. |    |
|    |  true/false and yes/no &mdash; Identifies configurations that accept boolean inputs. |    |
|    |  password &mdash; Identifies configurations intended to collect passwords. Passwords are masked in Cloud Elements. |    |
|  Required  |  Identifies whether the configuration is required. Switch on to force a user to provide data when authenticating. Configurations not required, but that show in Cloud Elements appear under Show Optional Fields. |  Y  |
|  Hide on UI  |  Identifies whether the configuration appears in Cloud Elements. Switch on to show the configuration in Cloud Elements. The configuration appears to the user with the configuration name and the description as hover help text. |  Y  |
