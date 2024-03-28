# PingOnePlatformApiPingOneMfa.DeviceAuthenticationPolicyMobileApplicationsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The application&#39;s ID. | 
**push** | [**DeviceAuthenticationPolicyMobileApplicationsInnerPush**](DeviceAuthenticationPolicyMobileApplicationsInnerPush.md) |  | [optional] 
**pushTimeout** | [**DeviceAuthenticationPolicyMobileApplicationsInnerPushTimeout**](DeviceAuthenticationPolicyMobileApplicationsInnerPushTimeout.md) |  | [optional] 
**pairingKeyLifetime** | [**DeviceAuthenticationPolicyMobileApplicationsInnerPairingKeyLifetime**](DeviceAuthenticationPolicyMobileApplicationsInnerPairingKeyLifetime.md) |  | [optional] 
**pushLimit** | [**DeviceAuthenticationPolicyMobileApplicationsInnerPushLimit**](DeviceAuthenticationPolicyMobileApplicationsInnerPushLimit.md) |  | [optional] 
**otp** | [**DeviceAuthenticationPolicyMobileApplicationsInnerOtp**](DeviceAuthenticationPolicyMobileApplicationsInnerOtp.md) |  | [optional] 
**deviceAuthorization** | [**DeviceAuthenticationPolicyMobileApplicationsInnerDeviceAuthorization**](DeviceAuthenticationPolicyMobileApplicationsInnerDeviceAuthorization.md) |  | [optional] 
**autoEnrollment** | [**DeviceAuthenticationPolicyMobileApplicationsInnerAutoEnrollment**](DeviceAuthenticationPolicyMobileApplicationsInnerAutoEnrollment.md) |  | [optional] 
**pairingDisabled** | **Boolean** | You can set &#x60;pairingDisabled&#x60; to true to prevent users from pairing new devices with the relevant method. You can use this option if you want to phase out an existing authentication method but want to allow users to continue using the method for authentication for existing devices. | [optional] 
**integrityDetection** | [**EnumMFADevicePolicyMobileIntegrityDetection**](EnumMFADevicePolicyMobileIntegrityDetection.md) |  | [optional] 


