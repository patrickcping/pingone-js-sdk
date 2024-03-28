# PingOnePlatformApiSsoAndBase.ApplicationSAML

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**accessControl** | [**ApplicationAccessControl**](ApplicationAccessControl.md) |  | [optional] 
**createdAt** | **Date** | The time the resource was created. | [optional] [readonly] 
**description** | **String** | A string that specifies the description of the application. | [optional] 
**enabled** | **Boolean** | A string that specifies the current enabled state of the application. Options are ENABLED or DISABLED. | 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**hiddenFromAppPortal** | **Boolean** | A boolean to specify whether the application is hidden in the application portal despite the configured group access policy. | [optional] 
**icon** | [**ApplicationIcon**](ApplicationIcon.md) |  | [optional] 
**id** | **String** | A string that specifies the application ID. | [optional] [readonly] 
**loginPageUrl** | **String** | A string that specifies the custom login page URL for the application. If you set the loginPageUrl property for applications in an environment that sets a custom domain, the URL should include the top-level domain and at least one additional domain level. Warning To avoid issues with third-party cookies in some browsers, a custom domain must be used, giving your PingOne environment the same parent domain as your authentication application. For more information about custom domains, see Custom domains. | [optional] 
**name** | **String** | A string that specifies the name of the application. This is a required property. | 
**protocol** | [**EnumApplicationProtocol**](EnumApplicationProtocol.md) |  | 
**type** | [**EnumApplicationType**](EnumApplicationType.md) |  | 
**updatedAt** | **Date** | The time the resource was last updated. | [optional] [readonly] 
**homePageUrl** | **String** | A string that specifies the custom home page URL for the application. | [optional] 
**acsUrls** | **[String]** | A string that specifies the Assertion Consumer Service URLs. The first URL in the list is used as default (there must be at least one URL). This is a required property. | 
**assertionDuration** | **Number** | An integer that specifies the assertion validity duration in seconds. This is a required property. | 
**assertionSigned** | **Boolean** | A boolean that specifies whether the SAML assertion itself should be signed. The default value is &#x60;true&#x60;. | [optional] [default to true]
**corsSettings** | [**ApplicationCorsSettings**](ApplicationCorsSettings.md) |  | [optional] 
**defaultTargetUrl** | **String** | This is used as the RelayState parameter by the IdP to deep link into the application after authentication. This value can be overridden by the applicationUrl query parameter for GET Identity Provider Initiated SSO. Although both of these parameters are generally URLs, because they are used as deep links, this is not enforced. If neither defaultTargetUrl nor applicationUrl is specified during a SAML authentication flow, no RelayState value is supplied to the application. The defaultTargetUrl (or the applicationUrl) value is passed to the SAML application&#39;s ACS URL as a separate RelayState key value (not within the SAMLResponse key value). | [optional] 
**enableRequestedAuthnContext** | **Boolean** | Indicates whether &#x60;requestedAuthnContext&#x60; is taken into account in policy decision-making during authentication. | [optional] 
**idpSigning** | [**ApplicationSAMLAllOfIdpSigning**](ApplicationSAMLAllOfIdpSigning.md) |  | [optional] 
**nameIdFormat** | **String** | A string that specifies the format of the Subject NameID attibute in the SAML assertion | [optional] 
**responseSigned** | **Boolean** | A boolean that specifies whether the SAML assertion response itself should be signed. The default value is &#x60;false&#x60;. | [optional] [default to false]
**sloBinding** | [**EnumApplicationSAMLSloBinding**](EnumApplicationSAMLSloBinding.md) |  | [optional] 
**sloEndpoint** | **String** | A string that specifies the logout endpoint URL. This is an optional property. However, if a sloEndpoint logout endpoint URL is not defined, logout actions result in an error. | [optional] 
**sloResponseEndpoint** | **String** | A string that specifies the endpoint URL to submit the logout response. If a value is not provided, the sloEndpoint property value is used to submit SLO response. | [optional] 
**sloWindow** | **Number** | Defines how long PingOne can exchange logout messages with the application, specifically a &#x60;LogoutRequest&#x60; from the application, since the initial request. PingOne can also send a &#x60;LogoutRequest&#x60; to the application when a single logout is initiated by the user from other session participants, such as an application or identity provider. This setting is per application. The SLO logout is separate from the user session logout that revokes all tokens. | [optional] 
**spEntityId** | **String** | A string that specifies the service provider entity ID used to lookup the application. This is a required property and is unique within the environment. | 
**spVerification** | [**ApplicationSAMLAllOfSpVerification**](ApplicationSAMLAllOfSpVerification.md) |  | [optional] 


