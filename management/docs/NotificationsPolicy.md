# PingOnePlatformApiSsoAndBase.NotificationsPolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**createdAt** | **Date** | The time the resource was created. | [optional] [readonly] 
**updatedAt** | **Date** | The time the resource was last updated. | [optional] [readonly] 
**id** | **String** | A string that specifies the resource’s unique identifier. | [optional] [readonly] 
**name** | **String** | The name to use for the notification policy. Must be unique among the notification policies in the environment. | 
**_default** | **Boolean** | Indication of whether this policy is the default notification policy for the environment. If the parameter is not provided, the value used is &#x60;false&#x60; | [optional] [default to false]
**countryLimit** | [**NotificationsPolicyCountryLimit**](NotificationsPolicyCountryLimit.md) |  | [optional] 
**quotas** | [**[NotificationsPolicyQuotasInner]**](NotificationsPolicyQuotasInner.md) | Collection of objects that define the SMS/Voice limits. Each object contain the following elements- &#x60;type&#x60;, &#x60;deliveryMethods&#x60;, &#x60;total&#x60;. Currently, a policy can contain ony one such object. Note that instead of &#x60;total&#x60;, you can use the pair of fields- &#x60;claimed&#x60; and &#x60;unclaimed&#x60;. | 


