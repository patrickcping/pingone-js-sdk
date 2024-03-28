# PingOnePlatformApiSsoAndBase.SignOnPolicyActionAgreement

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
**agreement** | [**SignOnPolicyActionAgreementAllOfAgreement**](SignOnPolicyActionAgreementAllOfAgreement.md) |  | 
**disableDeclineOption** | **Boolean** | When enabled, the &#x60;Do Not Accept&#x60; button will terminate the Flow and display an error message to the user. | [optional] 


