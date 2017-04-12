---
heading: Element Loader
seo: Bulk Data Migration | Element Loader | Cloud Elements API Docs
title: Bulk Data Migration
description: Element Loader Bulk Data Migration.
layout: sidebarleft
order: 6
---

For this guide, multiple sources to multiple targets via a hosted app will be demonstrated.

1. Login to Element Loader
![Element Loader Step 1](http://cloud-elements.com/wp-content/uploads/2015/05/Bulkloader1.png)

2. Select the Services (Sources) from which you want to pull your data

3. Connect your Accounts (Targets – data will be pushed to these applications)
![Element Loader Step 2](http://cloud-elements.com/wp-content/uploads/2015/05/Bulkloader2.png)


3. Users can provide credentials to their source and target systems

3. For example, to connect to SugarCRM, the user will need to input her ServerURL, Username, and Password. Click “Create” once the basic authentication information has been entered.
![Element Loader Auth](http://cloud-elements.com/wp-content/uploads/2015/05/Bulkloader7.png)

3. Users can connect to an OAuth service as well.

3. Simply sign in to the service.
![Element Loader Auth](http://cloud-elements.com/wp-content/uploads/2015/05/Bulkloader5.png)

3. Users will then authorize the app.![Element Loader Auth](http://cloud-elements.com/wp-content/uploads/2015/05/Bulkloader6.png)

4. Once your services have been connected, select your Source Object

5. Select your Target Object – data will be mapped from the Source Object to the Target Object

6. Drag and drop the fields you wish to map NOTE:  we can configure default mappings for the most frequently used/required fields to simplify setup for the user

7. Click “Schedule Job”
![Element Loader Auth](http://cloud-elements.com/wp-content/uploads/2015/05/Bulkloader3.png)

8. Click on the date picker to select a date of the job. The job will pull all data up to the date you select.

9. Click “Schedule Job”

10. An alert will appear stating the job is in progress. An email will be sent to the registered user once the job has completed.

11. Log in to your target application and see your data populated.
![Element Loader Auth](http://cloud-elements.com/wp-content/uploads/2015/05/Bulkloader4.png)

Features for Element Loader are in the works. We are currently testing Element Loader in private BETA. [Contact us](mailto:info@cloud-elements.com) if you wish to participate.
