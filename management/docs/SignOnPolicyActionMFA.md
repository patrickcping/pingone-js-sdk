# PingOnePlatformApiSsoAndBase.SignOnPolicyActionMFA

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**condition** | [**SignOnPolicyActionCommonConditionOrOrInner**](SignOnPolicyActionCommonConditionOrOrInner.md) |  | [optional] 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**id** | **String** | A string that specifies the sign-on policy assignment resource’s unique identifier. | [optional] [readonly] 
**priority** | **Number** | An integer that specifies the order in which the policy referenced by this assignment is evaluated during an authentication flow relative to other policies. An assignment with a lower priority will be evaluated first. This is a required property. | 
**signOnPolicy** | [**SignOnPolicyActionCommonSignOnPolicy**](SignOnPolicyActionCommonSignOnPolicy.md) |  | [optional] 
**type** | [**EnumSignOnPolicyType**](EnumSignOnPolicyType.md) |  | 
**authenticator** | [**SignOnPolicyActionMFAAllOfAuthenticator**](SignOnPolicyActionMFAAllOfAuthenticator.md) |  | [optional] 
**boundBiometrics** | [**SignOnPolicyActionMFAAllOfBoundBiometrics**](SignOnPolicyActionMFAAllOfBoundBiometrics.md) |  | [optional] 
**email** | [**SignOnPolicyActionMFAAllOfEmail**](SignOnPolicyActionMFAAllOfEmail.md) |  | [optional] 
**securityKey** | [**SignOnPolicyActionMFAAllOfSecurityKey**](SignOnPolicyActionMFAAllOfSecurityKey.md) |  | [optional] 
**sms** | [**SignOnPolicyActionMFAAllOfSms**](SignOnPolicyActionMFAAllOfSms.md) |  | [optional] 
**voice** | [**SignOnPolicyActionMFAAllOfVoice**](SignOnPolicyActionMFAAllOfVoice.md) |  | [optional] 
**applications** | [**[SignOnPolicyActionMFAAllOfApplications]**](SignOnPolicyActionMFAAllOfApplications.md) | The applications collection specifies all the native native applications that are allowed in the sign-on policy action.  If the applications collection is empty, a push notification is not allowed for the action. | [optional] 
**deviceAuthenticationPolicy** | [**SignOnPolicyActionMFAAllOfDeviceAuthenticationPolicy**](SignOnPolicyActionMFAAllOfDeviceAuthenticationPolicy.md) |  | [optional] 
**noDevicesMode** | [**EnumSignOnPolicyNoDeviceMode**](EnumSignOnPolicyNoDeviceMode.md) |  | [optional] 


