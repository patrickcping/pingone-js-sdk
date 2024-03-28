# PingOnePlatformApiSsoAndBase.IdentityProviderOIDC

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
**authorizationEndpoint** | **String** | A string that specifies the the OIDC identity provider&#39;s authorization endpoint. This value must be a URL that uses https. This is a required property. | 
**clientId** | **String** | A string that specifies the application ID from the OIDC identity provider. This is a required property. | 
**clientSecret** | **String** | A string that specifies the application secret from the OIDC identity provider. This is a required property. | 
**discoveryEndpoint** | **String** | A string that specifies the OIDC identity provider&#39;s discovery endpoint. This value must be a URL that uses https. | [optional] 
**issuer** | **String** | A string that specifies the issuer to which the authentication is sent for the OIDC identity provider. This value must be a URL that uses https. This is a required property. | 
**jwksEndpoint** | **String** | A string that specifies the OIDC identity provider&#39;s jwks endpoint. This value must be a URL that uses https. This is a required property. | 
**scopes** | **[String]** | An array that specifies the scopes to include in the authentication request to the OIDC identity provider. This is a required property. | 
**tokenEndpoint** | **String** | A string that specifies the OIDC identity provider&#39;s token endpoint. This is a required property. | 
**tokenEndpointAuthMethod** | [**EnumIdentityProviderOIDCTokenAuthMethod**](EnumIdentityProviderOIDCTokenAuthMethod.md) |  | 
**userInfoEndpoint** | **String** | A string that specifies the OIDC identity provider&#39;s userInfo endpoint. | [optional] 
**pkceMethod** | [**EnumIdentityProviderPKCEMethod**](EnumIdentityProviderPKCEMethod.md) |  | [optional] 


