# PingOnePlatformApiSsoAndBase.Group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**id** | **String** | The unique identifier for the group. Search all groups for a specific group ID with a SCIM filter on GET /environments/{environmentID}/groups. Retrieve all the group IDs associated with a user with GET /environments/{environmentID}/users/{userID}?include&#x3D;memberOfGroupIDs. | [optional] [readonly] 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**displayName** | **String** | For external groups, set during user creation/update. For groups created on PingOne, this parameter is identical to &#x60;name&#x60;. | [optional] [readonly] 
**population** | [**GroupPopulation**](GroupPopulation.md) |  | [optional] 
**name** | **String** | The group name. A group name can be reused across populations, but the same user cannot belong to multiple groups with the same group name. Population groups cannot share a group name with an environment group. Search all groups for a specific group name with a SCIM filter on GET /environments/{environmentID}/groups. Retrieve all the group names associated with a user with GET /environments/{environmentID}/users/{userID}?include&#x3D;memberOfGroupNames. Use this operation to determine group membership in attribute mappings for claims and assertions. | 
**userFilter** | **String** | A SCIM filter that determines which users are dynamically added to the group. For more information, see Adding users to a group and Removing users from a group. | [optional] 
**description** | **String** | The group description. | [optional] 
**externalId** | **String** | A user-defined identifier for the group. Use this propertry to syncronize a group in PingOne with the same group in an external system. PingOne does not directly use this property. Search all groups for a specific external ID with a SCIM filter on GET /environments/{environmentID}/groups | [optional] 
**customData** | **Object** | Optional User-defined custom data. | [optional] 
**sourceId** | **String** | External groups only. Set during user creation/update. | [optional] [readonly] 
**sourceType** | [**EnumGroupSourceType**](EnumGroupSourceType.md) |  | [optional] 
**directMemberCounts** | [**GroupDirectMemberCounts**](GroupDirectMemberCounts.md) |  | [optional] 
**totalMemberCounts** | [**GroupTotalMemberCounts**](GroupTotalMemberCounts.md) |  | [optional] 


