# PingOnePlatformApiSsoAndBase.TemplateContentSMS

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
**content** | **String** | The SMS text. UC-2 encoding is used for text that contains non GSM-7 characters. UC-2 encoded text cannot exceed 67 characters. GSM-7 encoded text cannot exceed 153 characters. If supported, it can include variables.  | 
**sender** | **String** | The SMS sender ID. This property can contain only alphanumeric characters and spaces, and its length cannot exceed 11 characters. In some countries, it is impossible to send an SMS with an alphanumeric sender ID. For those countries, the sender ID must be empty. For SMS recipients in specific countries, refer to Twilio&#39;s documentation on [International support for Alphanumeric Sender ID](https://support.twilio.com/hc/en-us/articles/223133767-International-support-for-Alphanumeric-Sender-ID). | [optional] 


