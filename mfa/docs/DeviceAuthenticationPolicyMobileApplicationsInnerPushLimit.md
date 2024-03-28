# PingOnePlatformApiPingOneMfa.DeviceAuthenticationPolicyMobileApplicationsInnerPushLimit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **Number** | The number of consecutive push notifications that can be ignored or rejected by a user within a defined period before push notifications are blocked for the application. The minimum value is 1 and the maximum value is 50. If this parameter is not provided, the default value is 5. | [optional] [default to 5]
**lockDuration** | [**DeviceAuthenticationPolicyMobileApplicationsInnerPushLimitLockDuration**](DeviceAuthenticationPolicyMobileApplicationsInnerPushLimitLockDuration.md) |  | [optional] 
**timePeriod** | [**DeviceAuthenticationPolicyMobileApplicationsInnerPushLimitTimePeriod**](DeviceAuthenticationPolicyMobileApplicationsInnerPushLimitTimePeriod.md) |  | [optional] 


