# PingOnePlatformApiSsoAndBase.PropagationStoreConfigurationPingOne

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CLIENT_ID** | **String** | Unique identifier (UUID) of the PingOne client associated with the propagation store. | [optional] 
**CLIENT_SECRET** | **String** | The PingOne client secret. | [optional] 
**CREATE_USERS** | **Boolean** | Whether or not users are allowed to be created. | [optional] 
**DEFAULT_AUTH_METHOD** | [**EnumPropagationStoreTypePingOneDefaultAuthMethod**](EnumPropagationStoreTypePingOneDefaultAuthMethod.md) |  | [optional] 
**DISABLE_USERS** | **Boolean** | Whether or not users are allowed to be disabled. | [optional] 
**ENVIRONMENT_ID** | **String** | Unique identifier (UUID) of the PingOne environment associated with the propagation store. | 
**MFA_USER_DEVICE_MANAGEMENT** | **String** | How to manage MFA user devices when synchronizing. Options are either Merge with devices in PingOne or Overwrite devices in PingOne. | [optional] 
**PROVISION_DISABLED_USERS_PROV_OPT** | **Boolean** | Whether or not disabled users can be provisioned. | [optional] 
**REGION** | [**EnumPropagationStoreTypePingOneRegion**](EnumPropagationStoreTypePingOneRegion.md) |  | 
**REMOVE_ACTION** | [**EnumPropagationStoreTypeRemoveActionDisableDelete**](EnumPropagationStoreTypeRemoveActionDisableDelete.md) |  | [optional] 
**UPDATE_USERS** | **Boolean** | Whether or not users are allowed to be updated. | [optional] 


