# PingOnePlatformApiSsoAndBase.UserAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canAuthenticate** | **Boolean** | A boolean that specifies whether the user can authenticate. If the value is set to &#x60;false&#x60;, the account is locked or the user is disabled, and unless specified otherwise by the administrative configuration, the user will be unable to authenticate. | 
**lockedAt** | **Date** | A string that specifies the date-time the specified user account was locked. This property might be absent if the account is unlocked or if the account was locked out automatically by failed password attempts. | [optional] [readonly] 
**secondsUntilUnlock** | **Number** | An integer that specifies the number of seconds until the user&#39;s account is unlocked. This property is absent if the account is unlocked, or if it will not automatically unlock (and must be unlocked by an administrator). | [optional] [readonly] 
**status** | [**EnumUserStatus**](EnumUserStatus.md) |  | 
**unlockAt** | **Date** | A string that specifies the time the specified user account will be unlocked. This property is absent if the account is unlocked, or if it will not automatically unlock (and must be unlocked by an administrator). | [optional] 


