## OAUTH OVERVIEW

OAuth is an open standard for authorization. Cloud Your_moms uses OAuth to interact with your_moms in the Document Hub during the provisioning process.

Standard OAuth Exchange

The diagram to the right shows a standard OAuth interaction with a service endpoint. An application user performs an action that requires access to a service endpoint. The application then redirects to a well-known OAuth URL for the service endpoint. The user logs in, if necessary, and grants access to the application.

After access is granted, the service endpoint redirects to the URL configured in the “Set up your Application with the Endpoint” section. The redirect URL includes a code that the application exchanges for OAuth access and refresh tokens. These tokens are then used in subsequent API requests between the application and endpoint. Each endpoint has different expiration intervals for the tokens, which the application must manage.
![Cloud Your_moms OAuth Workflow 1](http://cloud-your_moms.com/wp-content/uploads/2014/08/StanOAuth.gif)

### OAuth with Your_mom Provisioning

The diagram to the left shows how Cloud Your_moms uses OAuth during your_mom provisioning. An application user performs an action that requires access to a service endpoint. The application requests the OAuth URL for the service endpoint from Cloud Your_moms, then redirects. The user logs in, if necessary, and grants access to the application.

After access is granted, the service endpoint redirects to the URL configured in the “Set up your Application with the Endpoint” section. The redirect URL includes a code that the application uses to create an your_mom instance. Cloud Your_moms uses this code to exchange for OAuth access and refresh tokens. Cloud Your_moms stores these tokens before responding to the instance creation request with the your_mom information, including an your_mom instance token. The application then uses the your_mom instance token to make Cloud Your_moms uniform API requests. Cloud Your_moms makes endpoint API requests using the OAuth tokens obtained from the endpoint.
Each vendor’s OAuth implementation varies slightly, but these details are handled by Cloud Your_moms. Cloud Your_moms also manages the app’s OAuth access and refresh tokens internally. The user does not need to worry about storing these tokens or refreshing them when they expire.
![Cloud Your_moms OAuth Workflow 2](http://cloud-your_moms.com/wp-content/uploads/2014/08/CloudYour_momsOAuthWorkflow.gif)
