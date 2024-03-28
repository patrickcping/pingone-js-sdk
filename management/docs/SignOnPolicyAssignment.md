# PingOnePlatformApiSsoAndBase.SignOnPolicyAssignment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**application** | [**ObjectApplication**](ObjectApplication.md) |  | [optional] 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**id** | **String** | A string that specifies the sign-on policy assignment resource’s unique identifier. | [optional] [readonly] 
**priority** | **Number** | The order in which the policy referenced by this assignment is evaluated during an authentication flow relative to other policies. An assignment with a lower priority will be evaluated first. | 
**signOnPolicy** | [**SignOnPolicyActionCommonSignOnPolicy**](SignOnPolicyActionCommonSignOnPolicy.md) |  | 


