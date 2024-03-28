# PingOnePlatformApiSsoAndBase.IdentityProviderAttribute

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**mappingType** | [**EnumIdentityProviderAttributeMappingType**](EnumIdentityProviderAttributeMappingType.md) |  | [optional] 
**name** | **String** | The user attribute, which is unique per provider. The attribute must not be defined as read only from the user schema or of type COMPLEX based on the user schema. Valid examples username, and name.first. The following attributes may not be used account, id, created, updated, lifecycle, mfaEnabled, and enabled. | 
**value** | **String** | A placeholder referring to the attribute (or attributes) from the provider. Placeholders must be valid for the attributes returned by the IdP type and use the ${} syntax (for example, username&#x3D;&#x60;${email}&#x60;). For SAML, any placeholder is acceptable, and it is mapped against the attributes available in the SAML assertion after authentication. The ${samlAssertion.subject} placeholder is a special reserved placeholder used to refer to the subject name ID in the SAML assertion response. | 
**update** | [**EnumIdentityProviderAttributeMappingUpdate**](EnumIdentityProviderAttributeMappingUpdate.md) |  | 
**id** | **String** | The unique identifier for the resource. | [optional] [readonly] 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**identityProvider** | [**IdentityProviderAttributeIdentityProvider**](IdentityProviderAttributeIdentityProvider.md) |  | [optional] 
**createdAt** | **String** | The time the resource was created. | [optional] [readonly] 
**updatedAt** | **String** | The time the resource was last updated. | [optional] [readonly] 


