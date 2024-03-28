# PingOnePlatformApiPingOneMfa.MFAPushCredentialRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**EnumMFAPushCredentialAttrType**](EnumMFAPushCredentialAttrType.md) |  | 
**key** | **String** | A string that Apple uses as an identifier to identify an authentication key.  Mandatory. | 
**teamId** | **String** | A string that Apple uses as an identifier to identify teams. | 
**token** | **String** | A string that Apple uses as the authentication token signing key to securely connect to APNS. This is a p8 file with a private key format. | 
**googleServiceAccountCredentials** | **String** | Used when &#x60;type&#x60; is set to &#x60;FCM_HTTP_V1&#x60;. The value should be the contents of the JSON file that represents your Service Account Credentials. | 
**clientId** | **String** | Used only if type is set to HMS. OAuth 2.0 Client ID from the Huawei Developers API console. | 
**clientSecret** | **String** | Used only if type is set to HMS. The client secret associated with the OAuth 2.0 Client ID. | 


