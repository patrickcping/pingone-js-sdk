# PingOnePlatformApiSsoAndBase.IdentityProviderSAML

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


