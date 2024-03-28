# PingOnePlatformApiSsoAndBase.Form

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**id** | **String** | A string that specifies the resource’s unique identifier. | [optional] [readonly] 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**name** | **String** | A string that specifies the form name, which must be provided and must be unique within an environment. | 
**description** | **String** | A string that specifies the description of the form. | [optional] 
**category** | [**EnumFormCategory**](EnumFormCategory.md) |  | 
**components** | [**FormComponents**](FormComponents.md) |  | 
**cols** | **Number** | An integer that specifies the number of columns in the form (min &#x3D; 1; max &#x3D; 4). | [optional] 
**markOptional** | **Boolean** | A boolean that specifies whether optional fields are highlighted in the rendered form. | 
**markRequired** | **Boolean** | A boolean that specifies whether required fields are highlighted in the rendered form. | 
**translationMethod** | [**EnumFormTranslationMethod**](EnumFormTranslationMethod.md) |  | [optional] 
**fieldTypes** | [**[EnumFormFieldType]**](EnumFormFieldType.md) | A read-only object that specifies the list of the FormField types in the form. | [optional] [readonly] 
**languageBundle** | **{String: String}** | An object that provides a map of i18n keys to their translations. This object includes both the keys and their default translations. The PingOne language management service finds this object, and creates the new keys for translation for this form. | [optional] 
**created** | **Date** | The date the resouce was created (ISO-8061 format). | [optional] [readonly] 
**modified** | **Date** | The date the resouce was modified (ISO-8061 format). | [optional] [readonly] 


