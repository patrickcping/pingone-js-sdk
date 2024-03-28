# PingOnePlatformApiPingOneMfa.FIDO2Policy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**id** | **String** | FIDO policy&#39;s UUID. | [optional] [readonly] 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**createdAt** | **Date** | The time the resource was created. | [optional] [readonly] 
**updatedAt** | **Date** | The time the resource was last updated. | [optional] [readonly] 
**attestationRequirements** | [**EnumFIDO2PolicyAttestationRequirements**](EnumFIDO2PolicyAttestationRequirements.md) |  | 
**authenticatorAttachment** | [**EnumFIDO2PolicyAuthenticatorAttachment**](EnumFIDO2PolicyAuthenticatorAttachment.md) |  | 
**backupEligibility** | [**FIDO2PolicyBackupEligibility**](FIDO2PolicyBackupEligibility.md) |  | 
**_default** | **Boolean** | Whether this policy should serve as the default FIDO policy. | [optional] 
**description** | **String** | Description of the FIDO policy. | [optional] 
**deviceAuthenticationPolicies** | **[String]** | The device authentication policies that use the relevant FIDO policy. If you include the parameter &#x60;expand&#x3D;deviceAuthenticationPolicies&#x60; in the URL of the request, this array is included in the response when reading FIDO policies. Each object in the array contains the ID and the name of the device authentication policy. | [optional] [readonly] 
**deviceDisplayName** | **String** | The name to display for the device in registration and authentication windows. Can be up to 100 characters. If you want to use translatable text, you can use any of the keys listed on the *FIDO Policy* page of the *Self-Service* module and the *Sign On Policy* module. The value of the parameter should include only the part of the key name that comes after the module name, for example, &#x60;fidoPolicy.deviceDisplayName01&#x60; or &#x60;fidoPolicy.deviceDisplayName07&#x60;. See the pages in the UI for the full list of keys. For more information on translatable keys, see [Modifying translatable keys](https://docs.pingidentity.com/access/sources/dita/topic?category&#x3D;p1&amp;resourceid&#x3D;pingone_modifying_translatable_keys) in the PingOne documentation. | 
**discoverableCredentials** | [**EnumFIDO2PolicyDiscoverableCredentials**](EnumFIDO2PolicyDiscoverableCredentials.md) |  | 
**mdsAuthenticatorsRequirements** | [**FIDO2PolicyMdsAuthenticatorsRequirements**](FIDO2PolicyMdsAuthenticatorsRequirements.md) |  | 
**name** | **String** | The name to use for the FIDO policy. Can be up to 256 characters. | 
**relyingPartyId** | **String** | The ID of the relying party. The value should be a domain name, such as &#x60;example.com&#x60; (in lower-case characters). | 
**userDisplayNameAttributes** | [**FIDO2PolicyUserDisplayNameAttributes**](FIDO2PolicyUserDisplayNameAttributes.md) |  | 
**userVerification** | [**FIDO2PolicyUserVerification**](FIDO2PolicyUserVerification.md) |  | 


