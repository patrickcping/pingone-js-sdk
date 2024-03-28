# PingOnePlatformApiSsoAndBase.SignOnPolicyActionProgressiveProfiling

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**condition** | [**SignOnPolicyActionCommonConditionOrOrInner**](SignOnPolicyActionCommonConditionOrOrInner.md) |  | [optional] 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**id** | **String** | A string that specifies the sign-on policy assignment resource’s unique identifier. | [optional] [readonly] 
**priority** | **Number** | An integer that specifies the order in which the policy referenced by this assignment is evaluated during an authentication flow relative to other policies. An assignment with a lower priority will be evaluated first. This is a required property. | 
**signOnPolicy** | [**SignOnPolicyActionCommonSignOnPolicy**](SignOnPolicyActionCommonSignOnPolicy.md) |  | [optional] 
**type** | [**EnumSignOnPolicyType**](EnumSignOnPolicyType.md) |  | 
**attributes** | [**[SignOnPolicyActionProgressiveProfilingAllOfAttributes]**](SignOnPolicyActionProgressiveProfilingAllOfAttributes.md) |  | 
**preventMultiplePromptsPerFlow** | **Boolean** | A boolean that specifies whether the progressive profiling action will not be executed if another progressive profiling action has already been executed during the flow. This property is required. | 
**promptIntervalSeconds** | **Number** | An integer that specifies how often to prompt the user to provide profile data for the configured attributes for which they do not have values. This property is required. | 
**promptText** | **String** | A string that specifies text to display to the user when prompting for attribute values. This property is required. | 


