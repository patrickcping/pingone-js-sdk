# PingOnePlatformApiSsoAndBase.GatewayCredential

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A string that specifies the auto-generated ID for this credential. This is the JWT&#39;s jti claim. This is a required property. | [optional] [readonly] 
**createdAt** | **Date** | A date that specifies the date the credential was created in Coordinated Universal Time (UTC). This is a required property. | [optional] [readonly] 
**lastUsedAt** | **Date** | A date that specifies the date the credential was last used in UTC. This is a required property. | [optional] [readonly] 
**credential** | **String** | A string that specifies the signed JWT for the gateway credential. This property is present only when the gateway credential is created. | [optional] [readonly] 


