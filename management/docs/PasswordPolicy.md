# PingOnePlatformApiSsoAndBase.PasswordPolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**bypassPolicy** | **Boolean** | Determines whether the password policy for a user will be ignored. If this property is omitted from a CREATE Password Policy request, its value is set to false. | [optional] [default to false]
**createdAt** | **String** | The date and time the resource was created (format ISO-8061). | [optional] [readonly] 
**currentPassword** | **String** | The current password to be verified before the new password is set. Required for self-change when the user already has a password (the user whose password is being changed is the same as the actor in the access token). | [optional] 
**_default** | **Boolean** | Indicates whether this password policy is enforced within the environment. When set to true, all other password policies are set to false. | [optional] 
**description** | **String** | Specifies the brief description of the password policy. | [optional] 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**excludesCommonlyUsed** | **Boolean** | Set this to true to ensure the password is not one of the commonly used passwords. | 
**excludesProfileData** | **Boolean** | Set this to true to ensure the password is not an exact match for the value of any attribute in the user’s profile, such as name, phone number, or address. | 
**history** | [**PasswordPolicyHistory**](PasswordPolicyHistory.md) |  | [optional] 
**id** | **String** | The password resource’s unique identifier. | [optional] [readonly] 
**length** | [**PasswordPolicyLength**](PasswordPolicyLength.md) |  | [optional] 
**lockout** | [**PasswordPolicyLockout**](PasswordPolicyLockout.md) |  | [optional] 
**maxAgeDays** | **Number** | The maximum number of days the same password can be used before it must be changed. The value must be a positive, non-zero integer.  The value must be greater than the sum of minAgeDays (if set) + 21 (the expiration warning interval for passwords). | [optional] 
**maxRepeatedCharacters** | **Number** | The maximum number of repeated characters allowed. This property is not enforced when not present. | [optional] 
**minAgeDays** | **Number** | The minimum number of days a password must be used before changing. The value must be a positive, non-zero integer. This property is not enforced when not present. | [optional] 
**minCharacters** | [**PasswordPolicyMinCharacters**](PasswordPolicyMinCharacters.md) |  | [optional] 
**minComplexity** | **Number** | The minimum complexity of the password based on the concept of password haystacks. The value is the number of days required to exhaust the entire search space during a brute force attack. This property is not enforced when not present. | [optional] 
**minUniqueCharacters** | **Number** | The minimum number of unique characters required. This property is not enforced when not present. | [optional] 
**name** | **String** | The name of the password policy. This value must be unique within the environment. | 
**newPassword** | **String** | The new password (must satisfy all requirements). | [optional] 
**notSimilarToCurrent** | **Boolean** | Set this to true to ensure that the proposed password is not too similar to the user&#39;s current password based on the Levenshtein distance algorithm. The value of this parameter is evaluated only for password change actions in which the user enters both the current and the new password. By design, PingOne does not know the user&#39;s current password. | 
**populationCount** | **Number** | Returned in the response. The number of populations associated with the password policy. | [optional] [readonly] 
**updatedAt** | **String** | The date and time the resource was last updated (format ISO-8061). | [optional] [readonly] 


