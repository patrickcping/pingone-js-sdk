# PingOnePlatformApiSsoAndBase.NotificationsPolicyQuotasInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**EnumNotificationsPolicyQuotaItemType**](EnumNotificationsPolicyQuotaItemType.md) |  | 
**deliveryMethods** | [**[EnumNotificationsPolicyQuotaDeliveryMethods]**](EnumNotificationsPolicyQuotaDeliveryMethods.md) | The delivery methods for which the limit is being defined. The value can be &#x60;Email&#x60; or &#x60;SMS,Voice&#x60;. When you use the &#x60;SMS&#x60;, &#x60;Voice&#x60; option, it means that the combined total of SMS and voice notifications must be below the limit defined. If you are limiting both email and SMS/voice, each limit should be represented by a different object in the &#x60;quotas&#x60; array, for example: &#x60;\&quot;quotas\&quot;: [{\&quot;type\&quot;: \&quot;USER\&quot;,\&quot;deliveryMethods\&quot;: [\&quot;SMS\&quot;,\&quot;Voice\&quot;],\&quot;total\&quot;: 30},{\&quot;type\&quot;: \&quot;USER\&quot;,\&quot;deliveryMethods\&quot;: [\&quot;Email\&quot;],\&quot;total\&quot;: 30}]&#x60;  | 
**total** | **Number** | The maximum number of notifications allowed per day. | [optional] 
**claimed** | **Number** | The maximum number of notifications that can be received and responded to each day. Used in conjunction with unclaimed in place of the single field total. | [optional] 
**unclaimed** | **Number** | The maximum number of notifications that can be received and not responded to each day. Used in conjunction with claimed in place of the single field total. | [optional] 


