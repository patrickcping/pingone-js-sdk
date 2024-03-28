# PingOnePlatformApiSsoAndBase.ApplicationOIDCAllOfMobileIntegrityDetectionCacheDuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | An integer that specifies the number of minutes or hours that specify the duration between successful integrity detection calls. Every attestation request entails a certain time tradeoff. You can choose to cache successful integrity detection calls for a predefined duration, between a minimum of 1 minute and a maximum of 48 hours. If mobile.integrityDetection.mode is ENABLED, the cache duration must be set. | [optional] 
**units** | [**EnumDurationUnitMinsHours**](EnumDurationUnitMinsHours.md) |  | [optional] 


