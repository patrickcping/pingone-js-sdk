# PingOnePlatformApiPingOneRisk.RiskEvaluationDetailsUserVelocityByIpThreshold

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**high** | **Number** | An integer indicating the value calculated for the high threshold. If the IP was accessed by more than the high number of users during the past hour, the IP is flagged as a HIGH userVelocityByIp.level. | [optional] 
**medium** | **Number** | An integer indicating the value calculated for the medium threshold. If the IP was accessed by more than the medium number of users during the past hour, the IP is flagged as a MEDIUM userVelocityByIp.level | [optional] 
**source** | [**EnumThresholdSource**](EnumThresholdSource.md) |  | [optional] 
**calculatedAt** | **String** | A date-time indicating the timestamp for the calculated threshold. | [optional] 
**expiresAt** | **String** | A date-time indicating when the threshold will be recalculated. The recalculation will happen before this time. | [optional] 


