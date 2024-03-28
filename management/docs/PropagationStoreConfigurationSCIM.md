# PingOnePlatformApiSsoAndBase.PropagationStoreConfigurationSCIM

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AUTHENTICATION_METHOD** | [**EnumPropagationStoreTypeSCIMAuthenticationMethod**](EnumPropagationStoreTypeSCIMAuthenticationMethod.md) |  | 
**AUTHORIZATION_TYPE** | **String** | The authorization header type. | 
**BASIC_AUTH_PASSWORD** | **String** | The password for account authentication. Required when &#x60;AUTHENTICATION_METHOD&#x60; is &#x60;Basic Authentication&#x60;, otherwise optional. | [optional] 
**BASIC_AUTH_USER** | **String** | The user name for account authentication. Required when &#x60;AUTHENTICATION_METHOD&#x60; is &#x60;Basic Authentication&#x60;, otherwise optional. | [optional] 
**CREATE_USERS** | **Boolean** | Whether or not users are allowed to be created. | [optional] 
**DISABLE_USERS** | **Boolean** | Whether or not users are allowed to be disabled. | [optional] 
**GROUP_NAME_SOURCE** | [**EnumPropagationStoreTypeSCIMGroupNameSource**](EnumPropagationStoreTypeSCIMGroupNameSource.md) |  | [optional] 
**GROUPS_RESOURCE** | **String** | API endpoint path to the group entity. | [optional] 
**OAUTH_ACCESS_TOKEN** | **String** | OAuth access token for account authentication. Required when &#x60;AUTHENTICATION_METHOD&#x60; is &#x60;OAuth 2 Bearer Token&#x60;, otherwise optional. | [optional] 
**OAUTH_CLIENT_ID** | **String** | OAuth client ID. Required when &#x60;AUTHENTICATION_METHOD&#x60; is &#x60;OAuth 2 Client Credentials&#x60;, otherwise optional. | [optional] 
**OAUTH_CLIENT_SECRET** | **String** | OAuth client secret. Required when &#x60;AUTHENTICATION_METHOD&#x60; is &#x60;OAuth 2 Client Credentials&#x60;, otherwise optional. | [optional] 
**OAUTH_TOKEN_REQUEST** | **String** | OAuth token request endpoint. Required when &#x60;AUTHENTICATION_METHOD&#x60; is &#x60;OAuth 2 Bearer Token&#x60;, otherwise optional. | [optional] 
**REMOVE_ACTION** | [**EnumPropagationStoreTypeRemoveActionDisableDelete**](EnumPropagationStoreTypeRemoveActionDisableDelete.md) |  | [optional] 
**SCIM_URL** | **String** | The SCIM URL. | 
**SCIM_VERSION** | **String** | The SCIM version. | 
**UNIQUE_USER_IDENTIFIER** | [**EnumPropagationStoreTypeSCIMUniqueUserIdentifier**](EnumPropagationStoreTypeSCIMUniqueUserIdentifier.md) |  | 
**UPDATE_USERS** | **Boolean** | Whether or not users are allowed to be updated. | [optional] 
**USER_FILTER** | **String** | A string that specifies a SCIM filter expression. | 
**USERS_RESOURCE** | **String** | API endpoint path to the user entity. | 


