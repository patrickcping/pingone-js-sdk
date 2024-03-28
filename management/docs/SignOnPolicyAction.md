# PingOnePlatformApiSsoAndBase.SignOnPolicyAction

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
**enforceLockoutForIdentityProviders** | **Boolean** | A boolean that if set to true and if the user&#39;s account is locked (the account.canAuthenticate attribute is set to false), then social sign on with an external identity provider is prevented. | [optional] 
**newUserProvisioning** | [**SignOnPolicyActionLoginAllOfNewUserProvisioning**](SignOnPolicyActionLoginAllOfNewUserProvisioning.md) |  | [optional] 
**recovery** | [**SignOnPolicyActionLoginAllOfRecovery**](SignOnPolicyActionLoginAllOfRecovery.md) |  | [optional] 
**registration** | [**SignOnPolicyActionIDPAllOfRegistration**](SignOnPolicyActionIDPAllOfRegistration.md) |  | [optional] 
**socialProviders** | [**[SignOnPolicyActionLoginAllOfSocialProviders]**](SignOnPolicyActionLoginAllOfSocialProviders.md) | An array of strings that specifies the IDs of the identity providers that can be used for the social login sign-on flow. | [optional] 
**authenticator** | [**SignOnPolicyActionMFAAllOfAuthenticator**](SignOnPolicyActionMFAAllOfAuthenticator.md) |  | [optional] 
**boundBiometrics** | [**SignOnPolicyActionMFAAllOfBoundBiometrics**](SignOnPolicyActionMFAAllOfBoundBiometrics.md) |  | [optional] 
**email** | [**SignOnPolicyActionMFAAllOfEmail**](SignOnPolicyActionMFAAllOfEmail.md) |  | [optional] 
**securityKey** | [**SignOnPolicyActionMFAAllOfSecurityKey**](SignOnPolicyActionMFAAllOfSecurityKey.md) |  | [optional] 
**sms** | [**SignOnPolicyActionMFAAllOfSms**](SignOnPolicyActionMFAAllOfSms.md) |  | [optional] 
**voice** | [**SignOnPolicyActionMFAAllOfVoice**](SignOnPolicyActionMFAAllOfVoice.md) |  | [optional] 
**applications** | [**[SignOnPolicyActionMFAAllOfApplications]**](SignOnPolicyActionMFAAllOfApplications.md) | The applications collection specifies all the native native applications that are allowed in the sign-on policy action.  If the applications collection is empty, a push notification is not allowed for the action. | [optional] 
**deviceAuthenticationPolicy** | [**SignOnPolicyActionMFAAllOfDeviceAuthenticationPolicy**](SignOnPolicyActionMFAAllOfDeviceAuthenticationPolicy.md) |  | [optional] 
**noDevicesMode** | [**EnumSignOnPolicyNoDeviceMode**](EnumSignOnPolicyNoDeviceMode.md) |  | [optional] 
**discoveryRules** | [**[SignOnPolicyActionIDFirstAllOfDiscoveryRules]**](SignOnPolicyActionIDFirstAllOfDiscoveryRules.md) | The list of IDP discovery rules that are evaluated in order when no user is associated with the user identifier. The maximum number of rules is 100. The condition on which this identity provider is used to authenticate the user is expressed using the PingOne policy condition language | [optional] 
**acrValues** | **String** | A string that designates the sign-on policies included in the authorization flow request. Options can include the PingOne predefined sign-on policies, Single_Factor and Multi_Factor, or any custom defined sign-on policy names. Sign-on policy names should be listed in order of preference, and they must be assigned to the application. This property can be configured on the identity provider action and is passed to the identity provider if the identity provider is of type &#x60;SAML&#x60; or &#x60;OPENID_CONNECT&#x60;. | [optional] 
**identityProvider** | [**SignOnPolicyActionIDPAllOfIdentityProvider**](SignOnPolicyActionIDPAllOfIdentityProvider.md) |  | 
**passUserContext** | **Boolean** | A boolean that specifies whether to pass in a login hint to the identity provider on the authentication request. Based on user context, the login hint is set if (1) the user is set on the flow, and (2) the user already has an account link for the identity provider. If both of these conditions are true, then the user is sent to the identity provider with a login hint equal to their externalId for the identity provider (saved on the account link). If these conditions are not true, then the API checks see if there is an OIDC login hint on the flow. If so, that login hint is used. If none of these conditions are true, the login hint parameter is not included on the authorization request to the identity provider. | [optional] 
**agreement** | [**SignOnPolicyActionAgreementAllOfAgreement**](SignOnPolicyActionAgreementAllOfAgreement.md) |  | 
**disableDeclineOption** | **Boolean** | When enabled, the &#x60;Do Not Accept&#x60; button will terminate the Flow and display an error message to the user. | [optional] 
**attributes** | [**[SignOnPolicyActionProgressiveProfilingAllOfAttributes]**](SignOnPolicyActionProgressiveProfilingAllOfAttributes.md) |  | 
**preventMultiplePromptsPerFlow** | **Boolean** | A boolean that specifies whether the progressive profiling action will not be executed if another progressive profiling action has already been executed during the flow. This property is required. | 
**promptIntervalSeconds** | **Number** | An integer that specifies how often to prompt the user to provide profile data for the configured attributes for which they do not have values. This property is required. | 
**promptText** | **String** | A string that specifies text to display to the user when prompting for attribute values. This property is required. | 
**uniqueUserAttribute** | [**SignOnPolicyActionPingIDWinLoginPasswordlessAllOfUniqueUserAttribute**](SignOnPolicyActionPingIDWinLoginPasswordlessAllOfUniqueUserAttribute.md) |  | 
**offlineMode** | [**SignOnPolicyActionPingIDWinLoginPasswordlessAllOfOfflineMode**](SignOnPolicyActionPingIDWinLoginPasswordlessAllOfOfflineMode.md) |  | 


