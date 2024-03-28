# PingOnePlatformApiSsoAndBase.EntityArrayEmbeddedAttributesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**id** | **String** | A string that specifies the resource’s unique identifier. | [optional] [readonly] 
**application** | [**ApplicationAttributeMappingApplication**](ApplicationAttributeMappingApplication.md) |  | [optional] 
**createdAt** | **String** | The time the resource was created. | [optional] [readonly] 
**mappingType** | [**EnumIdentityProviderAttributeMappingType**](EnumIdentityProviderAttributeMappingType.md) |  | [optional] 
**name** | **String** | A string that specifies the name of the custom resource attribute to be included in the access token. The following are reserved names and cannot be used. Thesese reserved names are applicable only when the resource&#39;s type property is &#x60;OPENID_CONNECT&#x60;: - &#x60;acr&#x60; - &#x60;amr&#x60; - &#x60;aud&#x60; - &#x60;auth_time&#x60; - &#x60;client_id&#x60; - &#x60;env&#x60; - &#x60;exp&#x60; - &#x60;iat&#x60; - &#x60;iss&#x60; - &#x60;jti&#x60; - &#x60;org&#x60; - &#x60;p1.*&#x60; (any name starting with the p1. prefix) - &#x60;scope&#x60; - &#x60;sid&#x60; - &#x60;sub&#x60;  | 
**required** | **Boolean** | A boolean that specifies whether or not the attribute is required. Required attributes must be provided a value during create/update. Defaults to false if not provided. | 
**updatedAt** | **String** | The time the resource was last updated. | [optional] [readonly] 
**value** | **String** | A string that specifies the value of the custom resource attribute. This value can be a placeholder that references an attribute in the user schema, expressed as &#x60;${user.path.to.value}&#x60;, or it can be a static string. Placeholders must be valid, enabled attributes in the environment’s user schema. Examples fo valid values are &#x60;${user.email}&#x60;, &#x60;${user.name.family}&#x60;, and &#x60;myClaimValueString&#x60; | 
**nameFormat** | **String** | A URI reference representing the classification of the attribute. Helps the service provider interpret the attribute format. | [optional] 
**idToken** | **Boolean** | A boolean that specifies whether the attribute mapping should be available in the ID Token. This property is applicable only when the application&#39;s protocol property is &#x60;OPENID_CONNECT&#x60;. If omitted, the default is &#x60;true&#x60;. Note that the &#x60;idToken&#x60; and &#x60;userInfo&#x60; properties cannot both be set to &#x60;false&#x60;. At least one of these properties must have a value of &#x60;true&#x60;. | [optional] 
**userInfo** | **Boolean** | A boolean that specifies whether the attribute mapping should be available through the &#x60;/as/userinfo&#x60; endpoint. This property is applicable only when the application&#39;s protocol property is &#x60;OPENID_CONNECT&#x60;. If omitted, the default is &#x60;true&#x60;. Note that the &#x60;idToken&#x60; and &#x60;userInfo&#x60; properties cannot both be set to &#x60;false&#x60;. At least one of these properties must have a value of &#x60;true&#x60;. | [optional] 
**oidcScopes** | **[String]** | OIDC resource scope IDs that this attribute mapping is available for exclusively. This setting overrides any global OIDC resource scopes that contain an attribute mapping with the same name. The list can contain only scope IDs that have been granted for the application through the &#x60;/grants&#x60; endpoint. A null value is accepted for backwards compatibility. However, an empty set is invalid, and one scope ID is expected. If null, the response includes this mapping in the &#x60;openid&#x60; scope. | [optional] 
**update** | [**EnumIdentityProviderAttributeMappingUpdate**](EnumIdentityProviderAttributeMappingUpdate.md) |  | 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**identityProvider** | [**IdentityProviderAttributeIdentityProvider**](IdentityProviderAttributeIdentityProvider.md) |  | [optional] 
**description** | **String** | A string that specifies an optional property that specifies the description of the attribute. If provided, it must not be an empty string. Valid characters consists of any Unicode letter, mark (for example, accent or umlaut), numeric character, punctuation character, or space. | [optional] 
**displayName** | **String** | A string that specifies an optional property that specifies the display name of the attribute such as &#39;T-shirt size’. If provided, it must not be an empty string. Valid characters consist of any Unicode letter, mark (for example, accent or umlaut), numeric character, forward slash, dot, apostrophe, underscore, space, or hyphen. | [optional] 
**enabled** | **Boolean** | A boolean that specifies whether or not the attribute is enabled. This is a required property for POST and PUT operations; it cannot be omitted or explicitly set to null. Disabled attributes are ignored on create/update and not returned on read. | 
**ldapAttribute** | **String** | A string that specifies the LDAP attribute. | [optional] [readonly] 
**schema** | [**SchemaAttributeSchema**](SchemaAttributeSchema.md) |  | [optional] 
**schemaType** | [**EnumSchemaAttributeSchemaType**](EnumSchemaAttributeSchemaType.md) |  | [optional] 
**subAttributes** | [**[SchemaAttribute]**](SchemaAttribute.md) | The list of sub-attributes of this attribute. Only &#x60;COMPLEX&#x60; attribute types can have sub-attributes, and only one-level of nesting is allowed. The leaf attribute definition must have a type of &#x60;STRING&#x60; or &#x60;JSON&#x60;. A &#x60;COMPLEX&#x60; attribute definition must have at least one child attribute definition. | [optional] 
**type** | [**EnumResourceAttributeType**](EnumResourceAttributeType.md) |  | 
**unique** | **Boolean** | A boolean that specifies whether or not the attribute must have a unique value within the environment. This is a required property for POST and PUT operations; it cannot be omitted or explicitly set to null. | [optional] 
**multiValued** | **Boolean** | A boolean that specifies whether the attribute has multiple values or a single one. This value can only change from false to true, as changing from true to false is not allowed. Maximum number of values stored is 1,000. | [optional] 
**enumeratedValues** | [**[SchemaAttributeEnumeratedValuesInner]**](SchemaAttributeEnumeratedValuesInner.md) |  | [optional] 
**regexValidation** | [**SchemaAttributeRegexValidation**](SchemaAttributeRegexValidation.md) |  | [optional] 
**resource** | [**IdentityProviderAttributeIdentityProvider**](IdentityProviderAttributeIdentityProvider.md) |  | [optional] 


