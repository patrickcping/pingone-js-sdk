# PingOnePlatformApiSsoAndBase.SchemaAttributePatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | A string that specifies an optional property that specifies the description of the attribute. If provided, it must not be an empty string. Valid characters consists of any Unicode letter, mark (for example, accent or umlaut), numeric character, punctuation character, or space. | [optional] 
**displayName** | **String** | A string that specifies an optional property that specifies the display name of the attribute such as &#39;T-shirt size’. If provided, it must not be an empty string. Valid characters consist of any Unicode letter, mark (for example, accent or umlaut), numeric character, forward slash, dot, apostrophe, underscore, space, or hyphen. | [optional] 
**enabled** | **Boolean** | A boolean that specifies whether or not the attribute is enabled. This is a required property for POST and PUT operations; it cannot be omitted or explicitly set to null. Disabled attributes are ignored on create/update and not returned on read. | [optional] 
**name** | **String** | A string that specifies the name of the attribute. The attribute name must be provided during creation, must not be empty and must not exceed 256 characters. It must also be unique within the schema for an environment. It must start with a letter and may be followed by letters, numbers or hyphens. | [optional] 
**required** | **Boolean** | A boolean that specifies whether or not the attribute is required. Required attributes must be provided a value during create/update. Defaults to false if not provided. | [optional] 
**schemaType** | [**EnumSchemaAttributeSchemaType**](EnumSchemaAttributeSchemaType.md) |  | [optional] 
**subAttributes** | [**[SchemaAttribute]**](SchemaAttribute.md) | The list of sub-attributes of this attribute. Only &#x60;COMPLEX&#x60; attribute types can have sub-attributes, and only one-level of nesting is allowed. The leaf attribute definition must have a type of &#x60;STRING&#x60; or &#x60;JSON&#x60;. A &#x60;COMPLEX&#x60; attribute definition must have at least one child attribute definition. | [optional] 
**type** | [**EnumSchemaAttributeType**](EnumSchemaAttributeType.md) |  | [optional] 
**unique** | **Boolean** | A boolean that specifies whether or not the attribute must have a unique value within the environment. This is a required property for POST and PUT operations; it cannot be omitted or explicitly set to null. | [optional] 
**multiValued** | **Boolean** | A boolean that specifies whether the attribute has multiple values or a single one. This value can only change from false to true, as changing from true to false is not allowed. Maximum number of values stored is 1,000. | [optional] 
**enumeratedValues** | [**[SchemaAttributeEnumeratedValuesInner]**](SchemaAttributeEnumeratedValuesInner.md) |  | [optional] 
**regexValidation** | [**SchemaAttributeRegexValidation**](SchemaAttributeRegexValidation.md) |  | [optional] 


