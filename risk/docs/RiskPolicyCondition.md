# PingOnePlatformApiPingOneRisk.RiskPolicyCondition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**EnumRiskPolicyConditionType**](EnumRiskPolicyConditionType.md) |  | [optional] 
**contains** | **String** |  | [optional] 
**ipRange** | **[String]** |  | [optional] 
**value** | **String** |  | [optional] 
**equals** | [**RiskPolicyConditionEquals**](RiskPolicyConditionEquals.md) |  | [optional] 
**aggregatedWeights** | [**[RiskPolicyConditionAggregatedWeightsInner]**](RiskPolicyConditionAggregatedWeightsInner.md) | Required for weights-based policies. The elements in the array are &#x60;value&#x60;-&#x60;weight&#x60; pairs, representing a weighting for the weighted average calculation that should be assigned to a specific predictor when it is determined that there is a high risk for the predictor. | [optional] 
**aggregatedScores** | [**[RiskPolicyConditionAggregatedScoresInner]**](RiskPolicyConditionAggregatedScoresInner.md) | Required for score-based policies. The elements in the array are &#x60;value&#x60;-&#x60;score&#x60; pairs, representing the score that should be assigned to a specific predictor when it is determined that there is a high risk for the predictor. | [optional] 
**between** | [**RiskPolicyConditionBetween**](RiskPolicyConditionBetween.md) |  | [optional] 


