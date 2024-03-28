# PingOnePlatformApiCredentials.CredentialIssuerProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**applicationInstance** | [**CredentialIssuerProfileApplicationInstance**](CredentialIssuerProfileApplicationInstance.md) |  | [optional] 
**createdAt** | **Date** | A string that specifies the date and time the issuer profile was created. | [optional] [readonly] 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**id** | **String** | A string that specifies the identifier (UUID) of the credential issuer. | [optional] [readonly] 
**name** | **String** | The name of the credential issuer. This will be included in credentials issued. | 
**updatedAt** | **Date** | A string that specifies the date and time the credential issuer profile was last updated; can be null. | [optional] [readonly] 
**siteUrl** | **String** | A string that specifies the base URL associated with the credential issuer. | [optional] 
**customEmailTemplate** | **String** | A string that specifies the default notification template used in credential issuance notifications. Deprecated. | [optional] 


