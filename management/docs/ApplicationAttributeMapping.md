# PingOnePlatformApiSsoAndBase.ApplicationAttributeMapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**id** | **String** | A string that specifies the application ID. | [optional] [readonly] 
**application** | [**ApplicationAttributeMappingApplication**](ApplicationAttributeMappingApplication.md) |  | [optional] 
**createdAt** | **Date** | The time the resource was created. | [optional] [readonly] 
**mappingType** | [**EnumAttributeMappingType**](EnumAttributeMappingType.md) |  | [optional] 
**name** | **String** | A string that specifies the name of attribute and must be unique within an application. For SAML applications, the samlAssertion.subject name is a reserved case-insensitive name which indicates the mapping to be used for the subject in an assertion. For OpenID Connect applications, the following names are reserved and cannot be used acr, amr, at_hash, aud, auth_time, azp, client_id, exp, iat, iss, jti, nbf, nonce, org, scope, sid, sub  This is a required property. | 
**required** | **Boolean** | A boolean to specify whether a mapping value is required for this attribute. If true, a value must be set and a non-empty value must be available in the SAML assertion or ID token. | 
**updatedAt** | **Date** | The time the resource was updated. | [optional] [readonly] 
**value** | **String** | A string that specifies the string constants or expression for mapping the attribute path against a specific source. The expression format is ${&lt;source&gt;.&lt;attribute_path&gt;}. The only supported source is user (for example, ${user.id}). This is a required property. | 
**nameFormat** | **String** | A URI reference representing the classification of the attribute. Helps the service provider interpret the attribute format. | [optional] 
**idToken** | **Boolean** | Whether the attribute mapping should be available in the ID Token. This property is applicable only when the application&#39;s &#x60;protocol&#x60; property is &#x60;OPENID_CONNECT&#x60;. If omitted, the default is &#x60;true&#x60;. Note that the &#x60;idToken&#x60; and &#x60;userInfo&#x60; properties cannot both be set to &#x60;false&#x60;. At least one of these properties must have a value of true. | [optional] [default to true]
**userInfo** | **Boolean** | Whether the attribute mapping should be available through the &#x60;/as/userinfo&#x60; endpoint. This property is applicable only when the application&#39;s protocol property is &#x60;OPENID_CONNECT&#x60;. If omitted, the default is &#x60;true&#x60;. Note that the &#x60;idToken&#x60; and &#x60;userInfo&#x60; properties cannot both be set to &#x60;false&#x60;. At least one of these properties must have a value of &#x60;true&#x60;. | [optional] [default to true]
**oidcScopes** | **[String]** | OIDC resource scope IDs that this attribute mapping is available for exclusively. This setting overrides any global OIDC resource scopes that contain an attribute mapping with the same name. The list can contain only scope IDs that have been granted for the application through the &#x60;/grants&#x60; endpoint. A null value is accepted for backwards compatibility. However, an empty set is invalid, and one scope ID is expected. If null, the response includes this mapping in the &#x60;openid&#x60; scope. | [optional] 


