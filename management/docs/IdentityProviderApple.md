# PingOnePlatformApiSsoAndBase.IdentityProviderApple

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
**clientId** | **String** | A string that specifies the application ID from Apple. This is the identifier obtained after registering a services ID in the Apple developer portal. This is a required property. | 
**clientSecretSigningKey** | **String** | A string that specifies the private key that is used to generate a client secret. This is a required property. | 
**keyId** | **String** | A 10-character string that Apple uses to identify an authentication key. This is a required property. | 
**teamId** | **String** | A 10-character string that Apple uses to identify teams. This is a required property. | 


