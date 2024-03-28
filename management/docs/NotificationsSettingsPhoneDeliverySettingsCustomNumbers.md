# PingOnePlatformApiSsoAndBase.NotificationsSettingsPhoneDeliverySettingsCustomNumbers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number** | **String** | The phone number, toll-free number or short code. | 
**type** | [**EnumNotificationsSettingsPhoneDeliverySettingsCustomNumbersType**](EnumNotificationsSettingsPhoneDeliverySettingsCustomNumbersType.md) |  | 
**selected** | **Boolean** | Specifies whether the number is selected by the admin for sending messages. | [optional] 
**available** | **Boolean** | Specifies whether the number is currently available in the provider account. | [optional] 
**capabilities** | [**[EnumNotificationsSettingsPhoneDeliverySettingsCustomNumbersCapability]**](EnumNotificationsSettingsPhoneDeliverySettingsCustomNumbersCapability.md) | A collection of the phone delivery service capabilities. | [optional] 
**supportedCountries** | **[String]** | Specifies the &#x60;number&#x60;&#39;s supported countries for notification recipients, depending on the phone number type: &#x60;SHORT_CODE&#x60;: A collection containing a single 2-character ISO country code, for example, &#x60;US&#x60;, &#x60;GB&#x60;, &#x60;CA&#x60;. If the custom provider is of &#x60;type&#x3D;CUSTOM_PROVIDER&#x60;, &#x60;supportedCountries&#x60; must not be empty or null. For other custom provider types, if &#x60;supportedCountries&#x60; is null (empty is not supported), the specified short code number can only be used to dispatch notifications to United States recipient numbers. &#x60;TOLL_FREE&#x60;: A collection of valid 2-character country ISO codes, for example, &#x60;US&#x60;, &#x60;GB&#x60;, &#x60;CA&#x60;. If the custom provider is of &#x60;type&#x3D;CUSTOM_PROVIDER&#x60;, &#x60;supportedCountries&#x60; must not be empty or null. For other custom provider types, if &#x60;supportedCountries&#x60; is null (empty is not supported), the specified toll-free number can only be used to dispatch notifications to United States recipient numbers. &#x60;PHONE_NUMBER&#x60;: &#x60;supportedCountries&#x60; can not be specified. If an SMS template has an alphanumeric &#x60;sender&#x60; ID and also has short code, the &#x60;sender&#x60; ID will be used for destination countries that support both alphanumeric senders and short codes. For Unites States and Canada that don&#39;t support alphanumeric sender IDs, a short code will be used if both an alphanumeric sender and a short code are specified.  | [optional] 


