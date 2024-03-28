# PingOnePlatformApiSsoAndBase.IdentityProviderPaypal

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**description** | **String** | The description of the IdP. | [optional] 
**enabled** | **Boolean** | The current enabled state of the IdP. | 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**icon** | [**IdentityProviderCommonIcon**](IdentityProviderCommonIcon.md) |  | [optional] 
**id** | **String** | The resource ID. | [optional] [readonly] 
**loginButtonIcon** | [**IdentityProviderCommonLoginButtonIcon**](IdentityProviderCommonLoginButtonIcon.md) |  | [optional] 
**name** | **String** | The name of the IdP. | 
**registration** | [**IdentityProviderCommonRegistration**](IdentityProviderCommonRegistration.md) |  | [optional] 
**type** | [**EnumIdentityProviderExt**](EnumIdentityProviderExt.md) |  | 
**createdAt** | **String** | The time the resource was created. | [optional] [readonly] 
**updatedAt** | **String** | The time the resource was last updated. | [optional] [readonly] 
**clientId** | **String** | A string that specifies the application ID from PayPal. This is a required property. | 
**clientSecret** | **String** | A string that specifies the application secret from PayPal. This is a required property. | 
**clientEnvironment** | **String** | A string that specifies the PayPal environment. Options are sandbox, and live. This is a required property. | 


