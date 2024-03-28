# PingOnePlatformApiSsoAndBase.IdentityPropagationPlan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**id** | **String** | The unique identifier for the group. Search all groups for a specific group ID with a SCIM filter on GET /environments/{environmentID}/groups. Retrieve all the group IDs associated with a user with GET /environments/{environmentID}/users/{userID}?include&#x3D;memberOfGroupIDs. | [optional] [readonly] 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**name** | **String** | Unique name of the propagation plan | 
**status** | [**EnumIdentityPropagationPlanStatus**](EnumIdentityPropagationPlanStatus.md) |  | [optional] 


