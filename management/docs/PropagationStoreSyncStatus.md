# PingOnePlatformApiSsoAndBase.PropagationStoreSyncStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **String** | Details of any synchronization errors. | [optional] [readonly] 
**failedCount** | **Number** | A count of failed synchronization events since the last revision. | [optional] [readonly] 
**failedDeprovisionCount** | **Number** | A count of failed deprovisioning synchronization events since the last revision. | [optional] [readonly] 
**lastSyncAt** | **Date** | The last synchronization in yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39; format. | [optional] [readonly] 
**successCount** | **Number** | A count of successful synchronization events since the last revision. | [optional] [readonly] 
**syncState** | [**EnumPropagationStoreSyncState**](EnumPropagationStoreSyncState.md) |  | [optional] 
**userTotal** | **Number** | A count of users that will synchronize to the target store based on the Rule’s filter. | [optional] [readonly] 


