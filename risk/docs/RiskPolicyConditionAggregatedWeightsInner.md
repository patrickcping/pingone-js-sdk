# PingOnePlatformApiPingOneRisk.RiskPolicyConditionAggregatedWeightsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **String** | Text that identifies a specific risk predictor in the environment. It uses the form &#x60;${details.xxxxxxx.level}&#x60;, where the string between &#x60;details&#x60; and &#x60;level&#x60; is the compact name of the relevant predictor. | 
**weight** | **Number** | The score you want to assign to the predictor when it is determined that there is a high risk for the predictor. Value should be between 0 and 100. If it is determined that there is medium risk, the predictor will automatically be assigned a score equal to half of the value you specified for high risk. | 


