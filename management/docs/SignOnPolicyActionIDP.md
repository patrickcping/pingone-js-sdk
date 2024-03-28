# PingOnePlatformApiSsoAndBase.SignOnPolicyActionIDP

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
**acrValues** | **String** | A string that designates the sign-on policies included in the authorization flow request. Options can include the PingOne predefined sign-on policies, Single_Factor and Multi_Factor, or any custom defined sign-on policy names. Sign-on policy names should be listed in order of preference, and they must be assigned to the application. This property can be configured on the identity provider action and is passed to the identity provider if the identity provider is of type &#x60;SAML&#x60; or &#x60;OPENID_CONNECT&#x60;. | [optional] 
**identityProvider** | [**SignOnPolicyActionIDPAllOfIdentityProvider**](SignOnPolicyActionIDPAllOfIdentityProvider.md) |  | 
**passUserContext** | **Boolean** | A boolean that specifies whether to pass in a login hint to the identity provider on the authentication request. Based on user context, the login hint is set if (1) the user is set on the flow, and (2) the user already has an account link for the identity provider. If both of these conditions are true, then the user is sent to the identity provider with a login hint equal to their externalId for the identity provider (saved on the account link). If these conditions are not true, then the API checks see if there is an OIDC login hint on the flow. If so, that login hint is used. If none of these conditions are true, the login hint parameter is not included on the authorization request to the identity provider. | [optional] 
**registration** | [**SignOnPolicyActionIDPAllOfRegistration**](SignOnPolicyActionIDPAllOfRegistration.md) |  | [optional] 


