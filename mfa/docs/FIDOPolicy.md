# PingOnePlatformApiPingOneMfa.FIDOPolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**id** | **String** | FIDO policy&#39;s UUID. | [optional] [readonly] 
**createdAt** | **Date** | The time the resource was created. | [optional] [readonly] 
**updatedAt** | **Date** | The time the resource was last updated. | [optional] [readonly] 
**embedded** | **Object** |  | [optional] 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**name** | **String** | The name to use for the FIDO policy. | 
**description** | **String** | Description of the FIDO policy. | [optional] 
**attestationRequirements** | [**EnumFIDOAttestationRequirements**](EnumFIDOAttestationRequirements.md) |  | 
**allowedAuthenticators** | [**[FIDOPolicyAllowedAuthenticatorsInner]**](FIDOPolicyAllowedAuthenticatorsInner.md) | If &#x60;attestationRequirements&#x60; is set to &#x60;SPECIFIC&#x60;, this array is used to specify the authenticators that you want to allow. | [optional] 
**enforceDuringAuthentication** | **Boolean** | This parameter is relevant only if you have set &#x60;attestationRequirements&#x60; to &#x60;SPECIFIC&#x60; in order to restrict usage to only certain authenticators. If set to &#x60;true&#x60;, the policy will be applied both during registration and during each authentication attempt. If set to &#x60;false&#x60;, the policy is applied only during registration. Default is &#x60;false&#x60;. | [optional] [default to false]
**_default** | **Boolean** | Whether this policy should serve as the default FIDO policy. | [optional] 
**residentKeyRequirement** | [**EnumFIDOResidentKeyRequirement**](EnumFIDOResidentKeyRequirement.md) |  | 


