# PingOnePlatformApiSsoAndBase.Organization

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**id** | **String** | A string that specifies the resource’s unique identifier. | [optional] [readonly] 
**name** | **String** | A string that specifies the organization name, which must be provided and must be unique among all organizations in PingOne. | [optional] [readonly] 
**description** | **String** | A string that specifies the description of the organization. | [optional] [readonly] 
**createdAt** | **String** | The time the resource was created. | [optional] [readonly] 
**updatedAt** | **String** | The time the resource was last updated. | [optional] [readonly] 
**type** | [**EnumOrganizationType**](EnumOrganizationType.md) |  | [optional] 
**billingConnections** | [**[OrganizationBillingConnectionsInner]**](OrganizationBillingConnectionsInner.md) |  | [optional] [readonly] 


