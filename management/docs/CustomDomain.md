# PingOnePlatformApiSsoAndBase.CustomDomain

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**certificate** | [**CustomDomainCertificate**](CustomDomainCertificate.md) |  | [optional] 
**canonicalName** | **String** | A string that specifies the domain name that should be used as the value of the CNAME record in the customer’s DNS. | [optional] [readonly] 
**domainName** | **String** | A string that specifies the resource name, which must be provided and must be unique within an environment (for example, auth.shopco.com). This is a required property. | 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**id** | **String** | A string that specifies the resource’s unique identifier. | [optional] [readonly] 
**status** | [**EnumCustomDomainStatus**](EnumCustomDomainStatus.md) |  | [optional] 


