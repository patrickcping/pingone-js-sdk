# PingOnePlatformApiPingOneRisk.RiskEvaluationDetailsIpAddressReputation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**level** | [**EnumRiskLevel**](EnumRiskLevel.md) |  | [optional] 
**score** | **Number** | An integer that represents the calculated score of the IP address involved in the transaction. Scores range between 0 and 100. A score of 0 indicates a non-risky IP address; a score of 100 indicates a high-risk IP address. If the IP address reputation score is not available for the specific IP address, NULL is returned. | [optional] 


