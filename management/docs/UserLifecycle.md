# PingOnePlatformApiSsoAndBase.UserLifecycle

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**EnumUserLifecycleStatus**](EnumUserLifecycleStatus.md) |  | [optional] 
**suppressVerificationCode** | **Boolean** | Used when importing a user and the lifecycle.status is set to VERIFICATION_REQUIRED. If this property is set to true, no verification email is sent to the user. If this property is omitted or set to false, a verification email is sent automatically to the user. | [optional] 


