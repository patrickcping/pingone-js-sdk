# PingOnePlatformApiSsoAndBase.SignOnPolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**createdAt** | **String** | The date and time the resource was created (format ISO-8061). | [optional] [readonly] 
**_default** | **Boolean** | A boolean that specifies whether this sign-on policy is the environment&#39;s default that is used by applications that do not have application-specific sign-on policy assignments. This property can only be set to true, in which case the isDefault property of all other sign-on policies are set to false. | [optional] [default to false]
**description** | **String** | A string that specifies the description of the sign-on policy. | [optional] 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**id** | **String** | A string that specifies the sign-on policy resource’s unique identifier. | [optional] [readonly] 
**name** | **String** | A string that specifies the resource name. The name must be unique within the environment, and can consist of either a string of alphanumeric letters, underscore, hyphen, period &#x60;^[a-zA-Z0-9_. -]+$&#x60; or an absolute URI if the string contains a &#x60;:&#x60; character. | 
**updatedAt** | **String** | The date and time the resource was last updated (format ISO-8061). | [optional] [readonly] 


