# PingOnePlatformApiSsoAndBase.ApplicationOIDCAllOfMobileIntegrityDetection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**excludedPlatforms** | [**[EnumMobileIntegrityDetectionPlatform]**](EnumMobileIntegrityDetectionPlatform.md) | You can enable device integrity checking separately for Android and iOS by setting &#x60;mobile.integrityDetection.mode&#x60; to &#x60;ENABLED&#x60; and then using &#x60;mobile.integrityDetection.excludedPlatforms&#x60; to specify the OS where you do not want to use device integrity checking. The values to use are &#x60;GOOGLE&#x60; and &#x60;IOS&#x60; (all upper case). Note that this is implemented as an array even though currently you can only include a single value.  If &#x60;GOOGLE&#x60; is not included as a value, &#x60;googlePlay&#x60; is required to be set. | [optional] 
**mode** | [**EnumEnabledStatus**](EnumEnabledStatus.md) |  | [optional] 
**cacheDuration** | [**ApplicationOIDCAllOfMobileIntegrityDetectionCacheDuration**](ApplicationOIDCAllOfMobileIntegrityDetectionCacheDuration.md) |  | [optional] 
**googlePlay** | [**ApplicationOIDCAllOfMobileIntegrityDetectionGooglePlay**](ApplicationOIDCAllOfMobileIntegrityDetectionGooglePlay.md) |  | [optional] 


