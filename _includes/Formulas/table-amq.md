| Parameter | Description   | Required |
| :------------- | :------------- | :------------- |
| Name</br>`name`  |  {{site.data.table-desc.step-name}}  | Y |
| URL</br>`url` |  Specifies the AMQP URL endpoint of the MQ Server. The structure of the URL is specified in [RabbitMQ URI Specification]( https://www.rabbitmq.com/uri-spec.html).  | Y |
|  Queue</br>`queue`  |  Indicates the name of the queue of the MQ server to which the message should be posted.  | Y |
|  Message</br>`body`  |  The JSON payload to post to the server.  | Y |
|  Exchange</br>`exchange`  |  The name of the MQ server exchange to which the message should be posted.  | N |
