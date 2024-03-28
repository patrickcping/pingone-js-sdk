# PingOnePlatformApiSsoAndBase.IdentityProvider

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
**appId** | **String** | A string that specifies the application ID from Facebook. This is a required property. | 
**appSecret** | **String** | A string that specifies the application secret from Facebook. This is a required property. | 
**clientId** | **String** | A string that specifies the application ID from PayPal. This is a required property. | 
**clientSecret** | **String** | A string that specifies the application secret from PayPal. This is a required property. | 
**authorizationEndpoint** | **String** | A string that specifies the the OIDC identity provider&#39;s authorization endpoint. This value must be a URL that uses https. This is a required property. | 
**discoveryEndpoint** | **String** | A string that specifies the OIDC identity provider&#39;s discovery endpoint. This value must be a URL that uses https. | [optional] 
**issuer** | **String** | A string that specifies the issuer to which the authentication is sent for the OIDC identity provider. This value must be a URL that uses https. This is a required property. | 
**jwksEndpoint** | **String** | A string that specifies the OIDC identity provider&#39;s jwks endpoint. This value must be a URL that uses https. This is a required property. | 
**scopes** | **[String]** | An array that specifies the scopes to include in the authentication request to the OIDC identity provider. This is a required property. | 
**tokenEndpoint** | **String** | A string that specifies the OIDC identity provider&#39;s token endpoint. This is a required property. | 
**tokenEndpointAuthMethod** | [**EnumIdentityProviderOIDCTokenAuthMethod**](EnumIdentityProviderOIDCTokenAuthMethod.md) |  | 
**userInfoEndpoint** | **String** | A string that specifies the OIDC identity provider&#39;s userInfo endpoint. | [optional] 
**pkceMethod** | [**EnumIdentityProviderPKCEMethod**](EnumIdentityProviderPKCEMethod.md) |  | [optional] 
**clientSecretSigningKey** | **String** | A string that specifies the private key that is used to generate a client secret. This is a required property. | 
**keyId** | **String** | A 10-character string that Apple uses to identify an authentication key. This is a required property. | 
**teamId** | **String** | A 10-character string that Apple uses to identify teams. This is a required property. | 
**clientEnvironment** | **String** | A string that specifies the PayPal environment. Options are sandbox, and live. This is a required property. | 
**authnRequestSigned** | **Boolean** | A boolean that specifies whether the SAML authentication request will be signed when sending to the identity provider. Set this to true if the external IDP is included in an authentication policy to be used by applications that are accessed using a mix of default URLS and custom Domains URLs. | [optional] 
**idpEntityId** | **String** | A string that specifies the entity ID URI that is checked against the issuerId tag in the incoming response. | 
**idpVerification** | [**IdentityProviderSAMLAllOfIdpVerification**](IdentityProviderSAMLAllOfIdpVerification.md) |  | 
**spEntityId** | **String** | A string that specifies the service provider&#39;s entity ID, used to look up the application. | 
**spSigning** | [**IdentityProviderSAMLAllOfSpSigning**](IdentityProviderSAMLAllOfSpSigning.md) |  | [optional] 
**ssoBinding** | [**EnumIdentityProviderSAMLSSOBinding**](EnumIdentityProviderSAMLSSOBinding.md) |  | 
**ssoEndpoint** | **String** | A string that specifies the SSO endpoint for the authentication request. | 
**sloBinding** | [**EnumIdentityProviderSAMLSLOBinding**](EnumIdentityProviderSAMLSLOBinding.md) |  | [optional] 
**sloEndpoint** | **String** | The logout endpoint URL. This is an optional property. However, if a &#x60;sloEndpoint&#x60; logout endpoint URL is not defined, logout actions result in an error. | [optional] 
**sloResponseEndpoint** | **String** | The endpoint URL to submit the logout response. If a value is not provided, the &#x60;sloEndpoint&#x60; property value is used to submit SLO response. | [optional] 
**sloWindow** | **Number** | Defines how long PingOne can exchange logout messages with the application, specifically a &#x60;LogoutRequest&#x60; from the application, since the initial request. PingOne can also send a &#x60;LogoutRequest&#x60; to the application when a single logout is initiated by the user from other session participants, such as an application or identity provider. This setting is per application. The SLO logout is separate from the user session logout that revokes all tokens. | [optional] 


