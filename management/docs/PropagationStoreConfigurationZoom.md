# PingOnePlatformApiSsoAndBase.PropagationStoreConfigurationZoom

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**API_KEY** | **String** | The client API key. Required when &#x60;AUTHENTICATION_METHOD&#x60; is &#x60;JWT Bearer Token&#x60;, otherwise optional. | [optional] 
**API_SECRET** | **String** | The client API secret. Required when &#x60;AUTHENTICATION_METHOD&#x60; is &#x60;JWT Bearer Token&#x60;, otherwise optional. | [optional] 
**AUTHENTICATION_METHOD** | [**EnumPropagationStoreTypeZoomAuthenticationMethod**](EnumPropagationStoreTypeZoomAuthenticationMethod.md) |  | [optional] 
**CREATE_USERS** | **Boolean** | Whether or not users are allowed to be created. | [optional] 
**DEPROVISION_USERS** | **Boolean** | Whether or not users are allowed to be removed (deprovisioned) following the action configured in &#x60;REMOVE_ACTION&#x60;. | [optional] 
**DISABLE_USERS** | **Boolean** | Whether or not users are allowed to be disabled. | [optional] 
**OAUTH_ACCOUNT_ID** | **String** | OAuth account identifier. Required when &#x60;AUTHENTICATION_METHOD&#x60; is &#x60;OAuth Bearer Token&#x60;, otherwise optional. | [optional] 
**OAUTH_CLIENT_ID** | **String** | OAuth client identifier. Required when &#x60;AUTHENTICATION_METHOD&#x60; is &#x60;OAuth Bearer Token&#x60;, otherwise optional. | [optional] 
**OAUTH_CLIENT_SECRET** | **String** | OAuth client secret. Required when &#x60;AUTHENTICATION_METHOD&#x60; is &#x60;OAuth Bearer Token&#x60;, otherwise optional. | [optional] 
**OAUTH_TOKEN_URL** | **String** | OAuth token request endpoint. Required when &#x60;AUTHENTICATION_METHOD&#x60; is &#x60;OAuth Bearer Token&#x60;, otherwise optional. | [optional] 
**REMOVE_ACTION** | [**EnumPropagationStoreTypeRemoveActionDisableDelete**](EnumPropagationStoreTypeRemoveActionDisableDelete.md) |  | [optional] 
**SCIM_URL** | **String** | The SCIM URL. | 
**UPDATE_USERS** | **Boolean** | Whether or not users are allowed to be updated. | [optional] 


