# PingOnePlatformApiSsoAndBase.TemplateContentEmail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**id** | **String** | The template id. | [optional] [readonly] 
**createdAt** | **String** | The time the resource was created. | [optional] [readonly] 
**updatedAt** | **String** | The time the resource was last updated. | [optional] [readonly] 
**_default** | **Boolean** | Specifies whether the template is a predefined default template. | [optional] 
**locale** | **String** | A valid case-insensitive locale, complying with the ISO-639 language code and ISO-3166 country code standards: Two-character language code, for example, \&quot;en\&quot;. Two-character language code followed by a two-character country code, separated by an underscore or dash, for example: \&quot;en_GB\&quot;, \&quot;en-GB\&quot;. Cannot be changed after it is initially set in &#x60;POST /environments/{{envID}}/templates/{{templateName}}/contents&#x60;.  | 
**deliveryMethod** | [**EnumTemplateContentDeliveryMethod**](EnumTemplateContentDeliveryMethod.md) |  | 
**variant** | **String** | Holds the unique user-defined name for each content variant that uses the same template + &#x60;deliveryMethod&#x60; + &#x60;locale&#x60; combination. This property is case insensitive and has a limit of 100 characters. For more information, see [Creating custom contents](https://apidocs.pingidentity.com/pingone/platform/v1/api/#notifications-templates-creating-custom-contents). | [optional] 
**body** | **String** | The email text. Email text cannot be larger than 100 kB. Email text can contain HTML. If supported, this can include variables. | 
**from** | [**TemplateContentEmailAllOfFrom**](TemplateContentEmailAllOfFrom.md) |  | [optional] 
**subject** | **String** | The email&#39;s subject line. Cannot exceed 256 characters. If supported, can include variables. | [optional] 
**replyTo** | [**TemplateContentEmailAllOfReplyTo**](TemplateContentEmailAllOfReplyTo.md) |  | [optional] 
**charset** | **String** | If not specified, &#x60;UTF-8&#x60; is the default value. | [optional] [default to &#39;UTF-8&#39;]
**emailContentType** | **String** | If not specified, &#x60;text/html&#x60; is the default value. | [optional] [default to &#39;text/html&#39;]


