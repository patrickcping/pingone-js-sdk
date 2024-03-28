# PingOnePlatformApiPingOneRisk.RiskEvaluationDetailsIpVelocityByUserThreshold

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**high** | **Number** | An integer indicating the value calculated for the high threshold. If the user accessed more than the high number of IPs during the past hour, they&#39;re flagged as a HIGH ipVelocityByUser.level. | [optional] 
**medium** | **Number** | An integer indicating the value calculated for the medium threshold. If the user accessed more than the medium number of IPs during the past hour, they&#39;re flagged as a MEDIUM ipVelocityByUser.level. | [optional] 
**source** | [**EnumThresholdSource**](EnumThresholdSource.md) |  | [optional] 
**calculatedAt** | **String** | A date-time indicating the timestamp for the calculated threshold. | [optional] 
**expiresAt** | **String** | A date-time indicating when the threshold will be recalculated. The recalculation will happen before this time. | [optional] 


