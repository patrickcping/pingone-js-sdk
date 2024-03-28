# PingOnePlatformApiPingOneMfa.DeviceAuthenticationPolicyPostResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**id** | **String** | Device authentication policy&#39;s UUID. | [optional] [readonly] 
**name** | **String** | Device authentication policy&#39;s name. | 
**newDeviceNotification** | [**EnumMFADevicePolicyNewDeviceNotification**](EnumMFADevicePolicyNewDeviceNotification.md) |  | [optional] 
**authentication** | [**DeviceAuthenticationPolicyAuthentication**](DeviceAuthenticationPolicyAuthentication.md) |  | [optional] 
**sms** | [**DeviceAuthenticationPolicyOfflineDevice**](DeviceAuthenticationPolicyOfflineDevice.md) |  | 
**voice** | [**DeviceAuthenticationPolicyOfflineDevice**](DeviceAuthenticationPolicyOfflineDevice.md) |  | 
**email** | [**DeviceAuthenticationPolicyOfflineDevice**](DeviceAuthenticationPolicyOfflineDevice.md) |  | 
**fido2** | [**DeviceAuthenticationPolicyFido2**](DeviceAuthenticationPolicyFido2.md) |  | [optional] 
**mobile** | [**DeviceAuthenticationPolicyMobile**](DeviceAuthenticationPolicyMobile.md) |  | 
**totp** | [**DeviceAuthenticationPolicyTotp**](DeviceAuthenticationPolicyTotp.md) |  | 
**securityKey** | [**DeviceAuthenticationPolicyFIDODevice**](DeviceAuthenticationPolicyFIDODevice.md) |  | [optional] 
**platform** | [**DeviceAuthenticationPolicyFIDODevice**](DeviceAuthenticationPolicyFIDODevice.md) |  | [optional] 
**_default** | **Boolean** | A boolean that specifies whether the policy is the default for the environment. | 
**forSignOnPolicy** | **Boolean** |  | 
**updatedAt** | **Date** | The time the resource was last updated. | [optional] [readonly] 
**embedded** | [**EntityArrayEmbedded**](EntityArrayEmbedded.md) |  | [optional] 
**count** | **Number** |  | [optional] 
**size** | **Number** |  | [optional] 


