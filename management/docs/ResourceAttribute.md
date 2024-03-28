# PingOnePlatformApiSsoAndBase.ResourceAttribute

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**id** | **String** | A string that specifies the resource’s unique identifier. | [optional] [readonly] 
**name** | **String** | A string that specifies the name of the custom resource attribute to be included in the access token. The following are reserved names and cannot be used. Thesese reserved names are applicable only when the resource&#39;s type property is &#x60;OPENID_CONNECT&#x60;: - &#x60;acr&#x60; - &#x60;amr&#x60; - &#x60;aud&#x60; - &#x60;auth_time&#x60; - &#x60;client_id&#x60; - &#x60;env&#x60; - &#x60;exp&#x60; - &#x60;iat&#x60; - &#x60;iss&#x60; - &#x60;jti&#x60; - &#x60;org&#x60; - &#x60;p1.*&#x60; (any name starting with the p1. prefix) - &#x60;scope&#x60; - &#x60;sid&#x60; - &#x60;sub&#x60;  | 
**type** | [**EnumResourceAttributeType**](EnumResourceAttributeType.md) |  | [optional] 
**value** | **String** | A string that specifies the value of the custom resource attribute. This value can be a placeholder that references an attribute in the user schema, expressed as &#x60;${user.path.to.value}&#x60;, or it can be a static string. Placeholders must be valid, enabled attributes in the environment’s user schema. Examples fo valid values are &#x60;${user.email}&#x60;, &#x60;${user.name.family}&#x60;, and &#x60;myClaimValueString&#x60; | 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**resource** | [**IdentityProviderAttributeIdentityProvider**](IdentityProviderAttributeIdentityProvider.md) |  | [optional] 
**idToken** | **Boolean** | A boolean that specifies whether the attribute mapping should be available in the ID Token. This property is applicable only when the application&#39;s protocol property is &#x60;OPENID_CONNECT&#x60;. If omitted, the default is &#x60;true&#x60;. Note that the &#x60;idToken&#x60; and &#x60;userInfo&#x60; properties cannot both be set to &#x60;false&#x60;. At least one of these properties must have a value of &#x60;true&#x60;. | [optional] 
**userInfo** | **Boolean** | A boolean that specifies whether the attribute mapping should be available through the &#x60;/as/userinfo&#x60; endpoint. This property is applicable only when the application&#39;s protocol property is &#x60;OPENID_CONNECT&#x60;. If omitted, the default is &#x60;true&#x60;. Note that the &#x60;idToken&#x60; and &#x60;userInfo&#x60; properties cannot both be set to &#x60;false&#x60;. At least one of these properties must have a value of &#x60;true&#x60;. | [optional] 


