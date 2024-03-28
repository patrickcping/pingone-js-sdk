# PingOnePlatformApiSsoAndBase.ApplicationSecretPrevious

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secret** | **String** | A string that specifies the previous application secret. This property is returned in the response if the previous secret is not expired. | [optional] [readonly] 
**expiresAt** | **Date** | A timestamp that specifies how long this secret is saved (and can be used) before it expires. Supported time range is 1 minute to 30 days. | 
**lastUsed** | **Date** | A timestamp that specifies when the previous secret was last used. | [optional] [readonly] 


