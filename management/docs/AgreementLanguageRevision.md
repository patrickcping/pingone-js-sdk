# PingOnePlatformApiSsoAndBase.AgreementLanguageRevision

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**agreement** | [**AgreementLanguageAgreement**](AgreementLanguageAgreement.md) |  | [optional] 
**contentType** | [**EnumAgreementRevisionContentType**](EnumAgreementRevisionContentType.md) |  | 
**effectiveAt** | **Date** | A date that specifies the start date that the revision is presented to users. This property value can be modified only if the current value is a date that has not already passed. The effective date must be unique for each language agreement, and the property value can be the present date or a future date only. | 
**id** | **String** | A read-only string that specifies the revision ID. | [optional] [readonly] 
**language** | [**AgreementLanguageRevisionLanguage**](AgreementLanguageRevisionLanguage.md) |  | [optional] 
**notValidAfter** | **Date** | A date that specifies whether the revision is still valid in the context of all revisions for a language. This property is calculated dynamically at read time, taking into consideration the agreement language, the language enabled property, and the agreement enabled property. When a new revision is added, the notValidAfter property values for all other previous revisions might be impacted. For example, if a new revision becomes effective and it forces reconsent, then all older revisions are no longer valid. | [optional] [readonly] 
**requireReconsent** | **Boolean** | A boolean that specifies whether the user is required to provide consent to the language revision after it becomes effective. | 
**text** | **String** | An immutable string that specifies text or HTML for the revision. This attribute is supported in POST requests only. For more information, see contentType. | 


