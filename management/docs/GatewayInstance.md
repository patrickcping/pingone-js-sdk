# PingOnePlatformApiSsoAndBase.GatewayInstance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connected** | **Boolean** | A boolean that specifies whether or not the gateway instance has one or more connections. This is a required property. | [optional] 
**id** | **String** | A string that specifies the instance ID of the gateway. The gateway instance ID is created by the gateway when it starts up. | [optional] [readonly] 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**gateway** | [**GatewayInstanceGateway**](GatewayInstanceGateway.md) |  | [optional] 
**credential** | [**GatewayInstanceCredential**](GatewayInstanceCredential.md) |  | [optional] 
**currentErrors** | **[String]** | An array of strings that lists the messages that are maintained by the gateway instance. | [optional] 
**healthStatus** | [**EnumHealthStatus**](EnumHealthStatus.md) |  | [optional] 
**hostname** | **String** | A string that specifies the hostname of the container running in the customer’s infrastructure. This is a required property. | [optional] 
**initializedAt** | **String** | A timestamp that specifies when gateway was initialized (when the first connect to PingOne was made). | [optional] 
**lastReportedAt** | **String** | A timestamp that specifies the last reported timestamp, heartbeat, or other message. | [optional] 
**version** | [**GatewayInstanceVersion**](GatewayInstanceVersion.md) |  | [optional] 
**busyPercentage** | **Number** | An integer that specifies the gateway instance&#39;s busy percentage. When this percentage is high, then more instances should be added. | [optional] 
**operationsPerSecond** | **Number** | A number that specifies the recent throughput of the gateway instance. | [optional] 
**responseTimeMillis** | **Number** | A number that specifies the processing time of the gateway instance in milliseconds. | [optional] 


