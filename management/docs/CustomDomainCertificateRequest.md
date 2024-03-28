# PingOnePlatformApiSsoAndBase.CustomDomainCertificateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate** | **String** | A string that specifies the PEM-encoded certificate to import. This is a required property. The following validation is performed on the certificate: \\ It must not be expired. \\ It MUST not be self signed. \\ The custom domain name MUST match one of the subject alternative name (SAN) values on the certificate.  | 
**intermediateCertificates** | **String** | A string that specifies the PEM-encoded certificate chain. | [optional] 
**privateKey** | **String** | A string that specifies the PEM-encoded, unencrypted private key that matches the certificate&#39;s public key. This is a required property. | 


