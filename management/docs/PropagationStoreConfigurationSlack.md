# PingOnePlatformApiSsoAndBase.PropagationStoreConfigurationSlack

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CREATE_USERS** | **Boolean** | Whether or not users are allowed to be created. | [optional] 
**DEPROVISION_USERS** | **Boolean** | Whether or not users are allowed to be deprovisioned (removed) following action specified in &#x60;REMOVE_ACTION&#x60;. | [optional] 
**DISABLE_USERS** | **Boolean** | Whether or not users are allowed to be disabled. Must be set to &#x60;true&#x60;. | [optional] 
**OAUTH_ACCESS_TOKEN** | **String** | OAuth 2 access token. | 
**REMOVE_ACTION** | [**EnumPropagationStoreTypeRemoveActionDisable**](EnumPropagationStoreTypeRemoveActionDisable.md) |  | [optional] 
**UNIQUE_USER_IDENTIFIER** | [**EnumPropagationStoreTypeSlackUniqueUserIdentifier**](EnumPropagationStoreTypeSlackUniqueUserIdentifier.md) |  | 
**UPDATE_USERS** | **Boolean** | Whether or not users are allowed to be updated. | [optional] 


