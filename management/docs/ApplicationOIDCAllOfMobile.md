# PingOnePlatformApiSsoAndBase.ApplicationOIDCAllOfMobile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundleId** | **String** | A string that specifies the bundle associated with the application, for push notifications in native apps. The value of the bundleId property is unique per environment, and once defined, is immutable.  this setting overrides the top-level bundleId field | [optional] 
**packageName** | **String** | A string that specifies the package name associated with the application, for push notifications in native apps. The value of the mobile.packageName property is unique per environment, and once defined, is immutable.  this setting overrides the top-level packageName field. | [optional] 
**huaweiAppId** | **String** | The unique identifier for the app on the device and in the Huawei Mobile Service AppGallery. The value of the &#x60;huaweiAppId&#x60; property is unique per environment, and once defined, is immutable. Used only for applications for the Huawei ecosystem. | [optional] 
**huaweiPackageName** | **String** | The package name associated with the application, for push notifications in native apps. The value of the &#x60;huaweiPackageName&#x60; property is unique per environment, and once defined, is immutable. Used only for applications for the Huawei ecosystem. | [optional] 
**passcodeRefreshDuration** | [**ApplicationOIDCAllOfMobilePasscodeRefreshDuration**](ApplicationOIDCAllOfMobilePasscodeRefreshDuration.md) |  | [optional] 
**integrityDetection** | [**ApplicationOIDCAllOfMobileIntegrityDetection**](ApplicationOIDCAllOfMobileIntegrityDetection.md) |  | [optional] 
**uriPrefix** | **String** | A string that specifies a URI prefix that enables direct triggering of the mobile application when scanning a QR code. The URI prefix can be set to a universal link with a valid value (which can be a URL address that starts with &#x60;HTTP://&#x60; or &#x60;HTTPS://&#x60;, such as &#x60;https://www.acme.com&#x60;), or an app schema, which is just a string and requires no special validation. | [optional] 


