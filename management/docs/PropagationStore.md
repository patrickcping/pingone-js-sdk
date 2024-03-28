# PingOnePlatformApiSsoAndBase.PropagationStore

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**configuration** | **{String: Object}** | Configuration properties specific to each identity propagation store. | 
**description** | **String** | A description for the identity propagation store. | [optional] 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**id** | **String** | A string that specifies the resource’s unique identifier. | [optional] [readonly] 
**image** | [**PropagationStoreImage**](PropagationStoreImage.md) |  | [optional] 
**managed** | **Boolean** | Indicates whether or not to enable deprovisioning of users for a store when it is deleted. The deprovisioning occurs when a new revision is created (&#x60;POST {{apiPath}}/environments/{{envID}}/propagation/revisions&#x60;). | [optional] 
**name** | **String** | The name of the identity store. | 
**status** | [**EnumPropagationStoreStatus**](EnumPropagationStoreStatus.md) |  | [optional] 
**syncStatus** | [**PropagationStoreSyncStatus**](PropagationStoreSyncStatus.md) |  | [optional] 
**type** | [**EnumPropagationStoreType**](EnumPropagationStoreType.md) |  | 


