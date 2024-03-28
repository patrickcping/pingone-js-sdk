# PingOnePlatformApiSsoAndBase.SignOnPolicyActionIDPAllOfRegistration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confirmIdentityProviderAttributes** | **Boolean** | A boolean that specifies whether users must confirm data returned from an identity provider prior to registration. Users can modify the data and omit non-required attributes. Modified attributes are added to the user&#39;s profile during account creation. This is an optional property. If omitted, the default value is set to false. | [optional] [default to false]
**enabled** | **Boolean** | A boolean that specifies the enabled/disabled state of the policy action. The property is disabled by default when creating a new policy. When enabled, it allows the use of the new user registration flow. This attribute should be set to true when implementing the social login sign-on policy option. | 
**population** | [**SignOnPolicyActionLoginAllOfRegistrationPopulation**](SignOnPolicyActionLoginAllOfRegistrationPopulation.md) |  | [optional] 


