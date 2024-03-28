# PingOnePlatformApiPingOneRisk.RiskEvaluationDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ipAddressReputation** | [**RiskEvaluationDetailsIpAddressReputation**](RiskEvaluationDetailsIpAddressReputation.md) |  | [optional] 
**ipVelocityByUser** | [**RiskEvaluationDetailsIpVelocityByUser**](RiskEvaluationDetailsIpVelocityByUser.md) |  | [optional] 
**userVelocityByIp** | [**RiskEvaluationDetailsUserVelocityByIp**](RiskEvaluationDetailsUserVelocityByIp.md) |  | [optional] 
**impossibleTravel** | **Boolean** | A boolean that specifies whether the distance between the location of the user in their previous successful authentication and current authentication infers that the user had to travel at a speed greater than 1000 kilometers per hour. This condition is marked as fulfilled, only if: Location data is available for the current and previous IP address of the user. This is not the first transaction that the user has performed. The user’s previous successful transaction was performed less than 24 hours ago. The user moved a distance of at least 100 kilometers. Thus, even if the user moved very fast, but moved only a distance of 90 kilometers, the condition is not fulfilled. The user moved at a speed greater than 1000 kilometers per hour. | [optional] 
**estimatedSpeed** | **Number** | The calculated travel speed in units of kilometers per hour. | [optional] 
**anonymousNetworkDetected** | **Boolean** | A boolean that specifies whether the current authentication originated from an anonymous network (for example, proxy or VPN). | [optional] 
**country** | **String** | A string that specifies the country related to current transaction from the IP address. | [optional] 
**state** | **String** | A string that specifies the state related to current transaction from the IP address. | [optional] 
**city** | **String** | A string that specifies the city related to current transaction from the IP address. | [optional] 
**longitude** | **Number** | A double-precision floating point that specifies the longitude related to current transaction from the IP address. Values range from -90 to 90. | [optional] 
**latitude** | **Number** | A double-precision floating point that specifies the latitude related to current transaction from the IP address. Values range from -180 to 180. | [optional] 
**previousSuccessfulTransaction** | [**RiskEvaluationDetailsPreviousSuccessfulTransaction**](RiskEvaluationDetailsPreviousSuccessfulTransaction.md) |  | [optional] 
**userBasedRiskBehavior** | [**RiskEvaluationDetailsUserBasedRiskBehavior**](RiskEvaluationDetailsUserBasedRiskBehavior.md) |  | [optional] 
**userRiskBehavior** | [**RiskEvaluationDetailsUserRiskBehavior**](RiskEvaluationDetailsUserRiskBehavior.md) |  | [optional] 


