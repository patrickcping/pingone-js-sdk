# PingOnePlatformApiCredentials.CredentialType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**cardDesignTemplate** | **String** | A string that specifies an SVG formatted image containing placeholders for the credential fields that need to be displayed in the image. | 
**cardType** | **String** | A string that specifies the descriptor of the credential type. Can be non-identity types such as proof of employment or proof of insurance. | [optional] 
**createdAt** | **Date** | A string that specifies the date and time the credential type was created. | [optional] [readonly] 
**description** | **String** | A string that specifies the description of the credential type. | [optional] 
**deletedAt** | **String** | A string that specifies the date and time the credential type was deleted. Note - a deletion of a credential type is a \&quot;soft delete\&quot;. | [optional] 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**id** | **String** | A string that specifies the identifier (UUID) associated with the credential type. | [optional] [readonly] 
**issuer** | [**ObjectIssuer**](ObjectIssuer.md) |  | [optional] 
**issuerName** | **String** | v issuer name associated with the card, can differ from title. | [optional] 
**metadata** | [**CredentialTypeMetaData**](CredentialTypeMetaData.md) |  | 
**multiple** | [**CredentialTypeMultiple**](CredentialTypeMultiple.md) |  | [optional] 
**onDelete** | [**CredentialTypeOnDelete**](CredentialTypeOnDelete.md) |  | [optional] 
**title** | **String** | A string that specifies the title of the credential. Verification sites are expected to be able to request the issued credential from the compatible wallet app using the title. | 
**updatedAt** | **Date** | A string that specifies the date and time the credential type was last updated; can be null. | [optional] [readonly] 


