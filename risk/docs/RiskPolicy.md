# PingOnePlatformApiPingOneRisk.RiskPolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**condition** | [**RiskPolicyCondition**](RiskPolicyCondition.md) |  | 
**createdAt** | **Date** | The time the resource was first created (format ISO-8061). | [optional] [readonly] 
**description** | **String** | A string that specifies a description for this risk policy. This is an optional property. Valid characters consist of any Unicode letter, mark (for example, accent, umlaut), numeric character, punctuation character, or space. Maximum size is 1024 characters. | [optional] 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**id** | **String** | A string that specifies the resource’s unique identifier. | [optional] [readonly] 
**name** | **String** | A string that specifies a name for this risk policy. Valid characters consist of any Unicode letter, mark (for example, accent, umlaut), numeric character, forward slash, dot, apostrophe, underscore, space, or hyphen. Maximum size is 256 characters. | 
**priority** | **Number** | An integer that specifies priority of the policy inside a risk policy set, designating which policy should run first. This is a read-only value. The priority is determined by the order in which policies are listed in the policy set. The first policy in the list is assigned priority 1 and is evaluated first. The next policy in the list is assigned priority 2 and so on. | [optional] 
**result** | [**RiskPolicyResult**](RiskPolicyResult.md) |  | 
**updatedAt** | **Date** | The time the resource was last updated (format ISO-8061). | [optional] [readonly] 


