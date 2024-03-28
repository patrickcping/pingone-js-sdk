# PingOnePlatformApiSsoAndBase.ResourceScope

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**id** | **String** | A string that specifies the resource’s unique identifier. | [optional] [readonly] 
**resource** | [**ObjectResource**](ObjectResource.md) |  | [optional] 
**name** | **String** | A string that specifies the resource scope name. | 
**description** | **String** | A string that specifies the description of the scope. | [optional] 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**schemaAttributes** | **[String]** | An array that specifies the user schema attributes that can be read or updated for the specified PingOne access control scope. The value is an array of schema attribute paths (such as &#x60;username&#x60;, &#x60;name.given&#x60;, &#x60;shirtSize&#x60;) that the scope controls. This property is supported only for the &#x60;p1:read:user&#x60;, &#x60;p1:update:user&#x60; and &#x60;p1:read:user:{suffix}&#x60; and &#x60;p1:update:user:{suffix}&#x60; scopes. No other PingOne platform scopes allow this behavior. Any attributes not listed in the attribute array are excluded from the read or update action. The wildcard path (*) in the array includes all attributes and cannot be used in conjunction with any other user schema attribute paths | [optional] 
**mappedClaims** | **[String]** | A list of custom resource attribute IDs. This property applies only for the resource with its type property set to &#x60;OPENID_CONNECT&#x60;. Moreover, this property does not display predefined OpenID Connect (OIDC) mappings, such as the &#x60;email&#x60; claim in the OIDC &#x60;email&#x60; scope or the &#x60;name&#x60; claim in the &#x60;profile&#x60; scope. You can create custom attributes, and these custom attributes can be added to &#x60;mappedClaims&#x60; and will display in the response. | [optional] 
**createdAt** | **Date** | The time the resource was created. | [optional] [readonly] 
**updatedAt** | **Date** | The time the resource was last updated. | [optional] [readonly] 


