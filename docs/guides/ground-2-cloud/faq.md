---
heading: Ground2Cloud
seo: F.A.Q. | Ground2Cloud | Cloud Elements API Docs
title: F.A.Q.
description: Ground2Cloud Frequently Asked Questions
layout: sidebarleft
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 10
---

# Ground2Cloud F.A.Q.

- [Fundamentals](#fundamentals)
    - [What are some other use cases for Ground2Cloud?](#what-are-some-other-use-cases-for-ground2cloud)
    - [How does Ground2Cloud work with Cloud Elements?](#how-does-ground2cloud-work-with-cloud-elements)
- [QuickBooks](#quickbooks)
    - [Where are the element docs for QuickBooks?](#where-are-the-element-docs-for-quickbooks)
    - [Why is there a separate QuickBooks installer?](#why-is-there-a-separate-quickbooks-installer)
    - [What is the QuickBooks SDK?](#what-is-the-quickbooks-sdk)
    - [What versions of QuickBooks are supported?](#what-versions-of-quickbooks-are-supported)
    - [What is the QuickBooks Connector?](#what-is-the-quickbooks-connector)
    - [Does QuickBooks have to be running?](#does-quickbooks-have-to-be-running)
    - [Does the QuickBooks Connector support multi-user mode?](#does-the-quickbooks-connector-support-multi-user-mode)
- [Using Ground2Cloud](#using-ground2cloud)
    - [How do I change what environment I'm connected to?](#how-do-i-change-what-environment-im-connected-to)
    - [When authenticating an element instance what endpoint / hostname do I use?](#when-authenticating-an-element-instance-what-endpoint-hostname-do-i-use)
- [Security and Firewalls](#security-and-firewalls)
    - [What security features are in G2C?](#what-security-features-are-in-g2c)
    - [How are my keys created / used?](#how-are-my-keys-created-used)
    - [Is key rotation supported?](#is-key-rotation-supported)
    - [Do I need to change my firewall settings?](#do-i-need-to-change-my-firewall-settings)
    - [What egress filtering should I know about?](#what-egress-filtering-should-i-know-about)
- [Stability and Recovery](#stability-and-recovery)
    - [What happens if I lose my internet connection?](#what-happens-if-i-lose-my-internet-connection)
    - [What happens if my computer is shut down?](#what-happens-if-my-computer-is-shut-down)
    - [What happens if my computer goes to sleep?](#what-happens-if-my-computer-goes-to-sleep)
    - [What happens if my service is halted?](#what-happens-if-my-service-is-halted)
    - [What happens if the initial registration couldn't complete?](#what-happens-if-the-initial-registration-could-not-complete)
    - [Does Ground2Cloud support queueing / retries?](#does-ground2cloud-support-queueing-retries)
- [Troubleshooting](#troubleshooting)
    - [What can I do if Ground2Cloud isn't working?](#what-can-i-do-if-ground2cloud-isnt-working)
    - [How to I check the Ground2Cloud logs?](#how-to-i-check-the-ground2cloud-logs)
    - [How can I test my internet connection?](#how-can-i-test-my-internet-connection)
    - [How can I test my service directly?](#how-can-i-test-my-service-directly)
    - [How can I test my service through Ground2Cloud?](#how-can-i-test-my-service-through-ground2cloud)
    - [How can I unregister / re-register Ground2Cloud?](#how-can-i-unregister-re-register-ground2cloud)
    - [How can I stop and start the Ground2Cloud service?](#how-can-i-stop-and-start-the-ground2cloud-service)
    - [How can I uninstall / re-install Ground2Cloud?](#how-can-i-uninstall-re-install-ground2cloud)

## Fundamentals

### What are some other use cases for Ground2Cloud?

In addition to QuickBooks Enterprise and the database element, you can use Ground2Cloud if you have a service that is difficult or impossible to access. Here are just a few sample use cases:

- You use enterprise software on your desktop computer.
- You have an enterprise document server on your firewall-protected corporate intranet.
- Your database might be nested deep in a private zone on your company cloud.
- All of your end users have downloaded and installed your product, but you don't know the internet addresses for all of them.

In all of these cases, Ground2Cloud can bring your critical data easily and securely into the cloud.

### How does Ground2Cloud work with Cloud Elements?

Ground2Cloud works great on its own (we call such a solution "raw" Ground2Cloud), and sometime all you need is a connection transport.
However, it really shines when used in conjunction with other Cloud Elements products.

The Cloud Elements Platform provides a rich suite of benefits--including error handling, transformation, normalization, ease-of-use, integration
with other services, workflows, notifications and event management. With Ground2Cloud, these benefits can be applied to any service, anywhere.

Imagine being notified when changes occur to your database table; integrating your accounting program with ecommerce systems; or pulling a
uniform data feed from your users' diverse CRM applications. This is just scratching the surface of what Cloud Elements Platform and Ground2Cloud can do.

## QuickBooks

### Where are the element docs for QuickBooks

The [element documentation for QuickBooks Enterprise](../../elements/quickbooksenterprise/) includes installation instructions for Ground2Cloud as well as other details about the element.

### Why is there a separate QuickBooks installer?

In addition to the normal Ground2Cloud application, the QuickBooks installer installs the QuickBooks SDK and the QuickBooks Connector;
additional programs that are needed to communicate with QuickBooks.

### What is the QuickBooks SDK?

The QuickBooks SDK is provided by Intuit Software, the makers of QuickBooks. It is a special set of routines that is used to access
QuickBooks data.

### What versions of QuickBooks are supported?

Ground2Cloud uses the QuickBooks SDK, and supports every version of QuickBooks that is supported by that SDK. This includes all United
States, Canada and UK versions of QuickBooks since 2012.

### What is the QuickBooks Connector?

The QuickBooks Connector is a translator program that converts between the standard REST API requests of the Cloud Elements Platform and the SDK calls needed to talk to QuickBooks.

### Does the QuickBooks Connector need to be running for Ground2Cloud to work with QuickBooks?

Yes. If the QuickBooks Connector is not running, then there's nothing listing for REST requests made to QuickBooks; from the Ground2Cloud perspective, it's as if QuickBooks itself isn't running.

### Does QuickBooks have to be running?

Yes. In general, a service has to be running for Ground2Cloud to connect to it. See "What happens if my service is halted?" below.

### Does the QuickBooks Connector support multi-user mode?

Yes. When you first start up and authorize the QuickBooks Connector, QuickBooks must be running in either (1) single-user mode, or (2)
multi-user mode logged in as Admin. After that point, as long as QuickBooks is running, the Connector will be able to read and write its
data.


## Using Ground2Cloud

### How do I change what environment I'm connected to?

Maybe you want to switch to our staging environment to debug a problem. Maybe you're a Ground2Cloud developer, and you want to connect to a
local server for testing. In any case, if you want to connect to a different Ground2Cloud server, follow these steps:

1. Unregister the current connection on the Manage tab.
2. Change the "host" (and possibly "user") in the Config tab to the server. If you don't know the host or IP of the server you want to
   connect to, contact Cloud Elements support.
3. Register in the Manage tab.

As with every time you re-register, you may receive a new key, tunnel port and/or registration ID. When switching to a new Ground2Cloud
server, you will almost certainly get a new endpoint.

### When authenticating an element instance what endpoint / hostname do I use?

When creating an element instance (or when using "raw" Ground2Cloud), you need an API endpoint to access your service. If your Ground2Cloud is
registered, then this endpoint is shown in the Manage tab in the Ground2Cloud GUI. (This value is also written to a file named `C:\Ground2Cloud\endpoint`, in case you want to access it programmatically.)

If you're using an element that **doesn't** use a HTTP-based API (such as the MySql and PostgreSQL elements), you need to instead use the
tunnel port number. This port number is also shown in the Ground2Cloud GUI. You can only connect to this port using the Cloud Elements
Platform: direct connections to the tunnel port from outside the Cloud Elements environment are disallowed.

## Security and Firewalls

### What security features are in G2C?

G2C is a port forwarding mechanism that uses an SSH reverse tunnel to forward connections to a private hosted service, and provides a simple
HTTP/HTTPS proxy to make forwarding those requests easier. In addition to whatever application-level authorization / authentication mechanism
the service itself provides, G2C adds the following security features:

- Secure generation and storage of individual private keys on the client.
- TLS 1.2 protection of the data stream through the tunnel.
  - Uses elliptic curve25519 cipher, allowing for perfect forward secrecy.
  - This is done in addition to whatever encryption (if any) is supported by the service.
- Server validation via certificate authentication.
- Client validation via certificate authentication
- Standard HTTPS on the proxy with a certificate signed by a trusted public authority.
- Server multi-tenant enforcement to prevent cross-client contamination.
- The client installer, uninstaller, and updater(s) are signed by a trusted public authority.

### How are my keys created / used?

During Ground2Cloud registration, the client on your machine generates a 2048-bit RSA asymmetric key pair, and sends the public half of that pair
to the server; the private half is kept on your machine, and is never shared. Once the server verifies the integrity of the key, it responds
with a unique **registration ID**. From that point forward, all service communication is identified by that ID, and protected via the TLS 2.0
protocol using those keys.

### Is key rotation supported?

Currently, you can rotate your key manually by unregistering, and then re-registering the client in the Manage tab of the GUI. When you do
this, there is a small window of time during which Ground2Cloud is not active. Also, there is a slight chance that when you re-register, you
will not be granted the same registration ID, endpoint, and/or tunnel port.

### Do I need to change my firewall settings?

Ground2Cloud is not a server in the traditional sense: it does not receive incoming socket connections, and thus doesn't require any
firewall configuration changes, either on its host machine, or on its network edges. The local service that it connects to **also** requires
no firewall settings, because Ground2Cloud is designed to connect to it from inside its firewall.

The only exception is if your router or firewall has restrictive egress (outgoing) filtering enabled. Most Windows Home and Windows Pro
configurations do not have to worry about this: see the next question for details.

### What egress filtering should I know about?

Most personal computer configurations don't have to worry about the kind of egress filtering mentioned here. However, if your client machine or
network is configured to restrict outgoing connections, you should read this.

The Ground2Cloud client works by making long-lived outgoing connections to a server, through which traffic can be funneled back into a specified
local service. If your firewall, router or similar edge device has egress (outgoing) filtering enabled, you may need to adjust your rules to allow the following:

- Allow TCP connections from the client to port 22 (the standard `ssh`port) of the server.
- Allow TCP connections from the client to port 3014 (the Ground2Cloud backchannel port) of the server.

Additionally, the client software makes periodic "full loop" checks to the server's front door, to verify and keep alive the entire
Ground2Cloud pipeline. The host and port used for these belong to the endpoint shown in the GUI Manage tab (if the port is not shown, it is
port 80 for http connections, and port 443 for https connections). You may need to allow this outgoing connection as well, or accept the
consequences of the loop check failing.

All connections established by Cloud Elements are standard TCP or TLS using configurable port numbers; using a proxy here should be possible.
Contact Cloud Elements if you want the Ground2Cloud client to operate through a proxy, if you have other advanced network configuration needs,
or if you have further questions about Ground2Cloud network usage.


## Stability and Recovery

### What happens if I lose my internet connection?

If your network connection fails for any reason, a registered Ground2Cloud client will detect this, and periodically attempt to reconnect to its server. While the network is down, attempts to make API calls to the endpoint or tunnel port may result in a connection timeout, an empty message, or an HTTP 500-class error (depending on the nature of the lost connection). After the network is restored, Ground2Cloud will return to normal operation automatically.

### What happens if my computer is shut down?

If the computer that is running a registered Ground2Cloud client is powered off for any reason (user or scheduled shutdown, restart,
upgrade, crash, etc.), then the Ground2Cloud client will restart and attempt to reconnect when the computer is rebooted normally.

Ground2Cloud will **not** restart if the machine is rebooted into network-restricted, service-restricted, or "safe" mode.

While the computer is shutdown, attempts to make API calls to the endpoint or tunnel port may result in a connection timeout, an empty
message, or an HTTP 500-class error, depending on network connectivity and type of shutdown.

Note that when you computer is restarted, you may need to also restart the backend service that Ground2Cloud connects to; see "What happens if
my service is halted?"

### What happens if my computer goes to sleep?

From the perspective of most Windows services (including the Ground2Cloud service), your computer going into sleep or hibernate mode
is just like your computer shutting down; see the previous question. If you want your service to be available continuously, you should prevent
your computer from going to sleep.

It is still allowable for your computer's display to be turned off, so long as the computer does not sleep; the Ground2Cloud service doesn't
depend on display output in any way.

### What happens if my service is halted?

Ground2Cloud exists to shuttle connections to an otherwise private service. If the service is shut down, then Ground2Cloud can't do
anything, even though it is still running and connected to the Ground2Cloud server.

While the service is unavailable, any attempt to use the Ground2Cloud or an Element that uses Ground2Cloud will result in a specific 500-class
HTTP error. When the service is restored, Ground2Cloud will return to normal operation automatically.

### What happens if the initial registration could not complete?

If you did not have a solid internet connection during Ground2Cloud installation, it's possible that Ground2Cloud was unable to register or
start. If that's the case, wait until your internet connection is restored; then open the GUI, go to the Manage tab, and click "Register".
The registration process will complete, you will be assigned a registration ID, and the connection to the server will be established.

### Does Ground2Cloud support queueing / retries?

When a service is unavailable, Ground2Cloud returns with a predictable response that can be parsed by applications to perform any further actions deemed necessary, which may include the user or application retrying the request.

## Troubleshooting

### What can I do if Ground2Cloud isn't working?

If Ground2Cloud doesn't seem to be giving you access to your service, here are some simple steps you can take to try to remedy the problem.

- Check the logs
- Test your internet connection
- Test your service
- (Re-)register Ground2Cloud
- (Re-)start Ground2Cloud
- Reinstall Ground2Cloud

Details on how to do these things are listed below.

### How to I check the Ground2Cloud logs?

If you can start the Ground2Cloud GUI, then you can open the Logs tab to see the most recent log entries. Even if you can't understand all of
their content, the presence of red or orange entries (these are entries listed with "warning" or "error" log levels) might indicate a known
problem.

If you can't start the GUI, or if you want to look at less recent logs, the `C:\Ground2Cloud\logs` directory will contain more logging data to
look over. If you decide to contact Cloud Elements about your issue, you may be asked to read out or send over these log files; they contain
valuable information to help debug your problem.

### How can I test my internet connection?

One reason that Ground2Cloud might not be running is if the internet can't be reached. Make sure that you can open a web browser to your
favorite website from the Ground2Cloud host computer, or use other internet services. If you're on a computer with a restrictive firewall,
make sure that the proper egress rules are enabled. (Read about firewall rules above.)

### How can I test my service directly?

Make sure that your service is running locally. Use a web browser or utility program to directly reach the service at the same host and port
that Ground2Cloud uses, which is listed in the "Local Service" section of the Config tab in the GUI.

For example, if the GUI lists `localhost` and `8080` as the local host and port, then you can point a web browser to `http://localhost:8080/`,
and you should get some response, even if it's an error. If you get nothing, or if the connection times out, then the problem might reside
with your local service, and not Ground2Cloud.

### How can I test my service through Ground2Cloud?

A simple solution to test Ground2Cloud is to simply try to connect to a
service API that you think should be available, using a web browser or
utility program. You can use an API path that starts with the endpoint
listed on the Manage tab of the GUI.

### How can I unregister / re-register Ground2Cloud?

If the Ground2Cloud client is not showing the registration ID on the
Manage tab, but the "Register" button is active, try clicking it; this
will attempt to negotiate the connection terms with the server, and
reconnect if all goes well.

If you do see this information, you can still click "Unregister",
followed by "Register" to force renegotiation and reconnect, which may
clean up lingering connection problems. Note that you will get a new
key, and there is a chance you will get a new registration ID when you
re-register.

### How can I stop and start the Ground2Cloud service?

In the Windows Services control panel, you should see the service named
Ground2Cloud. You should be able to stop and then start this service
like any other Windows service, which may remedy lingering process
issues. If the control panel complains that the service cannot be
started, then you may need to contact Cloud Elements support to help
further investigate the problem.

### How can I uninstall / re-install Ground2Cloud?

Uninstalling and re-installing Ground2Cloud may remove some persistent
errors you might be having, especially if you are upgrading Ground2Cloud
to a newer version.

To uninstall Ground2Cloud, just go to the Windows "Applications" control
panel (sometimes call "Apps and Features"), find the Ground2Cloud
application, and click "Uninstall". You'll be walked through some
dialogs until Ground2Cloud is uninstalled.

When uninstallation is done, you may be notified that "some files may be
removed manually", or a similar message. This is not a problem: it just
indicates that the log files were not deleted along with the rest of
Ground2Cloud. You can keep the logs for the next time you install
Ground2Cloud, or delete the entire `C:\Ground2Cloud` directory to finish
the uninstallation.

If you installed Ground2Cloud using the QuickBooks bundled installer,
you should also uninstall the QuickBooks Connector application, listed
as "CE Connect" in your applications listing.

If you authorized the Connector with QuickBooks, you can unauthorize it
with QuickBooks; use either single-user mode, or the Admin user in
multi-user mode, and go to `Edit` -> `Preferences` -> `Integrated
Applications` -> `Company Preferences`. Select the "CloudElements"
application, and click "Remove".

Once Ground2Cloud is uninstalled, you are free to re-install using the
same procedure as before: run the latest installer and follow the
on-screen instructions.
