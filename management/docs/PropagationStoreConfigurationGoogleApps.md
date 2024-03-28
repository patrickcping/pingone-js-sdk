# PingOnePlatformApiSsoAndBase.PropagationStoreConfigurationGoogleApps

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**APPLICATION_NAME** | **String** | Name of the application using the store. | 
**CREATE_USERS** | **Boolean** | Whether or not users are allowed to be created. | [optional] 
**DEPROVISION_USERS** | **Boolean** | Whether or not users are allowed to be deprovisioned (removed) following action specified in &#x60;REMOVE_ACTION&#x60;. | [optional] 
**DISABLE_USERS** | **Boolean** | Whether or not users are allowed to be disabled. | [optional] 
**DOMAIN** | **String** | The account&#39;s domain name. | 
**OAUTH_ACCESS_TOKEN** | **String** | OAuth 2 access token. | 
**OAUTH_CLIENT_ID** | **String** | GoogleApps identifier of the client associated with the propagation store. | 
**OAUTH_CLIENT_SECRET** | **String** | GoogleApps secret of the client associated with the propagation store. | 
**OAUTH_REFRESH_TOKEN** | **String** | OAuth 2 refresh token. | 
**PROVISION_DISABLED_USERS_PROV_OPT** | **Boolean** | Whether or not disabled users can be provisioned. Defaults to &#x60;true&#x60; and, if used, must be set to &#x60;true&#x60;. | [optional] [default to true]
**REMOVE_ACTION** | [**EnumPropagationStoreTypeRemoveActionDisableDelete**](EnumPropagationStoreTypeRemoveActionDisableDelete.md) |  | [optional] 
**UPDATE_USERS** | **Boolean** | Whether or not users are allowed to be updated. | [optional] 


