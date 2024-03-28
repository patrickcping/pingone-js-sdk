# PingOnePlatformApiSsoAndBase.EntityArrayEmbeddedLanguagesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**agreement** | [**AgreementLanguageAgreement**](AgreementLanguageAgreement.md) |  | [optional] 
**currentRevision** | [**AgreementLanguageCurrentRevision**](AgreementLanguageCurrentRevision.md) |  | [optional] 
**displayName** | **String** | A string that is used as the title of the agreement for the language presented to the user. This is a required property. | 
**enabled** | **Boolean** | Specifies whether this language is enabled for the environment. This property value must be set to false when creating a language. | 
**id** | **String** | The resource’s unique identifier. | [optional] [readonly] 
**locale** | **String** | An ISO standard language code. For more information about standard language codes, see ISO Language Code Table. | 
**userExperience** | [**AgreementLanguageUserExperience**](AgreementLanguageUserExperience.md) |  | [optional] 
**_default** | **Boolean** | Specifies whether this language is the default for the environment. This property value must be set to false when creating a language resource. It can be set to true only after the language is enabled and after the localization of an agreement resource is complete when agreements are used for the environment. | 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**name** | **String** | The language name. If omitted, the ISO standard name is used. | [optional] 
**createdAt** | **Date** | The time the language resource was created. | [optional] [readonly] 
**customerAdded** | **Boolean** | Specifies whether this language was added by a customer administrator. | [optional] [readonly] 
**updatedAt** | **Date** | The time the language resource was last updated. | [optional] [readonly] 


