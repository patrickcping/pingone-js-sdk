# PingOnePlatformApiSsoAndBase.Certificate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**algorithm** | [**EnumCertificateKeyAlgorithm**](EnumCertificateKeyAlgorithm.md) |  | 
**createdAt** | **Date** | The time the resource was created. | [optional] [readonly] 
**_default** | **Boolean** | Specifies whether this is the default key for the specified environment. | [optional] 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**expiresAt** | **Date** | The time the key resource expires. | [optional] [readonly] 
**id** | **String** | Specifies the resource’s unique identifier. | [optional] [readonly] 
**issuerDN** | **String** | Specifies the distinguished name of the certificate issuer. | [optional] 
**keyLength** | **Number** | The key length. For RSA keys, options are &#x60;2048&#x60;, &#x60;3072&#x60;, &#x60;4096&#x60;, and &#x60;7680&#x60;. For elliptical curve (EC) keys, options are &#x60;224&#x60;, &#x60;256&#x60;, &#x60;384&#x60;, and &#x60;521&#x60;. | 
**name** | **String** | Specifies the resource name. | 
**organization** | [**ObjectOrganization**](ObjectOrganization.md) |  | [optional] 
**serialNumber** | **Number** | Specifies the serial number of the key or certificate. | [optional] 
**signatureAlgorithm** | [**EnumCertificateKeySignagureAlgorithm**](EnumCertificateKeySignagureAlgorithm.md) |  | 
**startsAt** | **Date** | The time the validity period starts. | [optional] [readonly] 
**status** | [**EnumCertificateKeyStatus**](EnumCertificateKeyStatus.md) |  | [optional] 
**subjectDN** | **String** | Specifies the distinguished name of the subject being secured. | 
**usageType** | [**EnumCertificateKeyUsageType**](EnumCertificateKeyUsageType.md) |  | 
**validityPeriod** | **Number** | Specifies the number of days the key is valid. | 
**customCRL** | **String** | A URL string of a custom Certificate Revokation List endpoint.  Used for certificates of type &#x60;ISSUANCE&#x60;. | [optional] 


