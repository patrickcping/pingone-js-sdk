# PingOnePlatformApiSsoAndBase.LicenseUsers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowPasswordManagementNotifications** | **Boolean** | A read-only boolean that specifies whether the license supports sending password management notifications. | [optional] 
**allowIdentityProviders** | **Boolean** | A read-only boolean that specifies whether the license supports using external identity providers in the specified environment. | [optional] 
**allowMyAccount** | **Boolean** | A read-only boolean that specifies whether the license supports using My Account capabilities in the specified environment. | [optional] 
**allowPasswordManagement** | **Boolean** | A read-only boolean that specifies whether the license supports using password management capabilities in the specified environment. | [optional] 
**allowPasswordOnlyAuthentication** | **Boolean** | A read-only boolean that specifies whether the license supports using password only login capabilities in the specified environment. | [optional] 
**allowPasswordPolicy** | **Boolean** | A read-only boolean that specifies whether the license supports using password policies in the specified environment. | [optional] 
**allowProvisioning** | **Boolean** | A read-only boolean that specifies whether the license supports using provisioning capabilities in the specified environment. | [optional] 
**allowInboundProvisioning** | **Boolean** |  | [optional] 
**allowRoleAssignment** | **Boolean** | A read-only boolean that specifies whether the license supports role assignments in the specified environment. | [optional] 
**allowVerificationFlow** | **Boolean** | A read-only boolean that specifies whether the license supports using verification flows in the specified environment. | [optional] 
**allowUpdateSelf** | **Boolean** | A read-only boolean that specifies whether the license supports allowing users to update their own profile. | [optional] 
**entitledToSupport** | **Boolean** | A read-only boolean that specifies whether the license allows PingOne support. | [optional] 
**max** | **Number** | An read-only integer that specifies the maximum number of users allowed per environment. | [optional] 
**hardLimitMax** | **Number** |  | [optional] 
**annualActiveIncluded** | **Number** | A read-only integer that specifies a soft limit on the number of active identities across all environments on the license per year. This property is not visible if a value is not provided at the time the license is created. | [optional] 
**monthlyActiveIncluded** | **Number** | A read-only integer that specifies a soft limit on the number of active identities across all environments on the license per month. This property is not visible if a value is not provided at the time the license is created. | [optional] 


