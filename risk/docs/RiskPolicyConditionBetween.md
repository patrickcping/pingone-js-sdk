# PingOnePlatformApiPingOneRisk.RiskPolicyConditionBetween

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minScore** | **Number** | Required for policies of type &#x60;AGGREGATED_SCORES&#x60; or &#x60;AGGREGATED_WEIGHTS&#x60;. The beginning of the risk score range that will be translated into the specified risk level (&#x60;MEDIUM&#x60; or &#x60;HIGH&#x60;). Must be between &#x60;0&#x60; and &#x60;1000&#x60;. | 
**maxScore** | **Number** | Required for policies of type &#x60;AGGREGATED_SCORES&#x60; or &#x60;AGGREGATED_WEIGHTS&#x60;. The end of the risk score range that will be translated into the specified risk level (&#x60;MEDIUM&#x60; or &#x60;HIGH&#x60;). Must be between &#x60;0&#x60; and &#x60;1000&#x60;. | 


