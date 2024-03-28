# PingOnePlatformApiSsoAndBase.Application

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**accessControl** | [**ApplicationAccessControl**](ApplicationAccessControl.md) |  | [optional] 
**createdAt** | **Date** | The time the resource was created. | [optional] [readonly] 
**description** | **String** | A string that specifies the description of the application. | [optional] 
**enabled** | **Boolean** | A string that specifies the current enabled state of the application. Options are ENABLED or DISABLED. | 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**hiddenFromAppPortal** | **Boolean** | A boolean to specify whether the application is hidden in the application portal despite the configured group access policy. | [optional] 
**icon** | [**ApplicationIcon**](ApplicationIcon.md) |  | [optional] 
**id** | **String** | A string that specifies the application ID. | [optional] [readonly] 
**loginPageUrl** | **String** | A string that specifies the custom login page URL for the application. If you set the loginPageUrl property for applications in an environment that sets a custom domain, the URL should include the top-level domain and at least one additional domain level. Warning To avoid issues with third-party cookies in some browsers, a custom domain must be used, giving your PingOne environment the same parent domain as your authentication application. For more information about custom domains, see Custom domains. | [optional] 
**name** | **String** | A string that specifies the name of the application. This is a required property. | 
**protocol** | [**EnumApplicationProtocol**](EnumApplicationProtocol.md) |  | 
**type** | [**EnumApplicationType**](EnumApplicationType.md) |  | 
**updatedAt** | **Date** | The time the resource was last updated. | [optional] [readonly] 


