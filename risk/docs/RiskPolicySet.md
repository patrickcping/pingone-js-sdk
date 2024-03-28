# PingOnePlatformApiPingOneRisk.RiskPolicySet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**createdAt** | **Date** | The time the resource was created (format ISO-8061). | [optional] [readonly] 
**_default** | **Boolean** | A boolean that specifies whether this risk policy set is the environment&#39;s default risk policy set, which is used whenever an explicit policySet ID is not specified in the risk policy evaluation request. If this property is not specified, the value defaults to false, and this risk policy set is not regarded as the default risk policy set for the environment. When this property is set to true (in PUT or POST requests), the default property of all other risk policy sets in the environment is set to false. | [optional] 
**defaultResult** | [**RiskPolicySetDefaultResult**](RiskPolicySetDefaultResult.md) |  | [optional] 
**description** | **String** | A string that specifies a description for this policy set. This is an optional property. Valid characters consist of any Unicode letter, mark (for example, accent, umlaut), numeric character, punctuation character, or space. Maximum size is 1024 characters. | [optional] 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**id** | **String** | A string that specifies the resource’s unique identifier. | [optional] [readonly] 
**name** | **String** | A string that specifies a name for this policy set. Valid characters consist of any Unicode letter, mark (for example, accent, umlaut), numeric character, forward slash, dot, apostrophe, underscore, space, or hyphen. Maximum size is 256 characters. | 
**riskPolicies** | [**[RiskPolicy]**](RiskPolicy.md) | An array of policies related to this policy set. | [optional] 
**updatedAt** | **Date** | The time the resource was last updated (format ISO-8061). | [optional] [readonly] 
**evaluatedPredictors** | [**[RiskPolicySetEvaluatedPredictorsInner]**](RiskPolicySetEvaluatedPredictorsInner.md) | The IDs for the predictors to evaluate in this policy set. In POST and PUT requests, if this property is null, all of the licensed predictors are used. | [optional] 
**triggers** | [**[RiskPolicySetTriggersInner]**](RiskPolicySetTriggersInner.md) | An array of triggers related to this policy set. | [optional] 


