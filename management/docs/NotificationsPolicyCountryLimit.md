# PingOnePlatformApiSsoAndBase.NotificationsPolicyCountryLimit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**EnumNotificationsPolicyCountryLimitType**](EnumNotificationsPolicyCountryLimitType.md) |  | 
**deliveryMethods** | [**[EnumNotificationsPolicyCountryLimitDeliveryMethod]**](EnumNotificationsPolicyCountryLimitDeliveryMethod.md) | The delivery methods that the defined limitation should be applied to. Content of the array can be &#x60;SMS&#x60;, &#x60;Voice&#x60;, or both. If the parameter is not provided, the default is &#x60;SMS&#x60; and &#x60;Voice&#x60;. | [optional] 
**countries** | **[String]** | The countries where the specified methods should be allowed or denied. Use the two-letter country codes from ISO 3166-1. | 


