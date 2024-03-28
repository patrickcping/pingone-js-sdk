# PingOnePlatformApiSsoAndBase.Resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**accessTokenValiditySeconds** | **Number** | An integer that specifies the number of seconds that the access token is valid. If a value is not specified, the default is 3600. The minimum value is 300 seconds (5 minutes); the maximum value is 2592000 seconds (30 days). | [optional] 
**audience** | **String** | A string that specifies a URL without a fragment or &#x60;@ObjectName&#x60; and must not contain &#x60;pingone&#x60; or &#x60;pingidentity&#x60; (for example, &#x60;https://api.bxretail.org&#x60;). If a URL is not specified, the resource name is used. | [optional] 
**createdAt** | **Date** | The time the resource was created. | [optional] [readonly] 
**description** | **String** | A string that specifies the description of the resource. | [optional] 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**resource** | [**IdentityProviderAttributeIdentityProvider**](IdentityProviderAttributeIdentityProvider.md) |  | [optional] 
**id** | **String** | A string that specifies the resource’s unique identifier. | [optional] [readonly] 
**name** | **String** | A string that specifies the resource name, which must be provided and must be unique within an environment. | 
**introspectEndpointAuthMethod** | [**EnumResourceIntrospectEndpointAuthMethod**](EnumResourceIntrospectEndpointAuthMethod.md) |  | [optional] 
**type** | [**EnumResourceType**](EnumResourceType.md) |  | [optional] 
**updatedAt** | **Date** | The time the resource was last updated. | [optional] [readonly] 


