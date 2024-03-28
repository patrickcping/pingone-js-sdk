# PingOnePlatformApiSsoAndBase.FlowPolicyAssignment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**id** | **String** | A string that specifies the flow policy assignment resource&#39;s unique identifier. | [optional] [readonly] 
**application** | [**ObjectApplication**](ObjectApplication.md) |  | [optional] 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**flowPolicy** | [**FlowPolicyAssignmentFlowPolicy**](FlowPolicyAssignmentFlowPolicy.md) |  | 
**priority** | **Number** | The order in which the policy referenced by this assignment is evaluated during an authentication flow relative to other policies. An assignment with a lower priority will be evaluated first. | 


