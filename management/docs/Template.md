# PingOnePlatformApiSsoAndBase.Template

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**id** | **String** | The template id | [optional] [readonly] 
**displayName** | **String** | The template’s display name. | 
**deliveryMethods** | **[String]** | The delivery methods supported for this template. Valid values are &#x60;SMS&#x60;, &#x60;Voice&#x60;, &#x60;Email&#x60; and &#x60;Push&#x60;. | 
**createdAt** | **String** | The time the resource was created. | [optional] [readonly] 
**updatedAt** | **String** | The time the resource was last updated. | [optional] [readonly] 
**description** | **String** | The description of the template. | [optional] 
**variables** | **Object** | Lists the variables you can use in each template content. The &#x60;required&#x60; property indicates whether the variable is required in template content. If &#x60;required&#x60; is &#x60;true&#x60;, the &#x60;requiredForDeliveryMethods&#x60; property lists the &#x60;deliveryMethods&#x60; types that require the variable. Note that if &#x60;required&#x60; is &#x60;true&#x60;, but &#x60;requiredForDeliveryMethods&#x60; is not returned, all &#x60;deliveryMethods&#x60; types are required. For more information, see [Variables](https://apidocs.pingidentity.com/pingone/platform/v1/api/#notifications-templates-variables). | 
**allowDynamicVariables** | **Boolean** | Specifies whether dynamic variables can be used in the template&#39;s contents. For more information, see [Dynamic variables](https://apidocs.pingidentity.com/pingone/platform/v1/api/#notifications-templates-dynamic-variables). | [optional] 



## Enum: [DeliveryMethodsEnum]


* `SMS` (value: `"SMS"`)

* `Voice` (value: `"Voice"`)

* `Email` (value: `"Email"`)

* `Push` (value: `"Push"`)




