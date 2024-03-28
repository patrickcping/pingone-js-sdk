# PingOnePlatformApiSsoAndBase.ApplicationOIDCAllOfMobileIntegrityDetectionGooglePlay

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**decryptionKey** | **String** | Play Integrity verdict decryption key from your Google Play Services account. This parameter must be provided if you have set &#x60;mobile.integrityDetection.googlePlay.verificationType&#x60; to &#x60;INTERNAL&#x60;. | [optional] 
**serviceAccountCredentials** | **String** | Contents of the JSON file that represents your Service Account Credentials. This parameter must be provided if you have set &#x60;mobile.integrityDetection.googlePlay.verificationType&#x60; to &#x60;GOOGLE&#x60;. | [optional] 
**verificationKey** | **String** | Play Integrity verdict signature verification key from your Google Play Services account. This parameter must be provided if you have set &#x60;mobile.integrityDetection.googlePlay.verificationType&#x60; to &#x60;INTERNAL&#x60;. | [optional] 
**verificationType** | [**EnumApplicationNativeGooglePlayVerificationType**](EnumApplicationNativeGooglePlayVerificationType.md) |  | [optional] 


