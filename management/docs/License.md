# PingOnePlatformApiSsoAndBase.License

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**advancedServices** | [**LicenseAdvancedServices**](LicenseAdvancedServices.md) |  | [optional] 
**assignedEnvironmentsCount** | **Number** | A read-only integer that specifies the total number of environments associated with this license. | [optional] [readonly] 
**authorize** | [**LicenseAuthorize**](LicenseAuthorize.md) |  | [optional] 
**beginsAt** | **Date** | The date and time this license begins. | [optional] [readonly] 
**credentials** | [**LicenseCredentials**](LicenseCredentials.md) |  | [optional] 
**environments** | [**LicenseEnvironments**](LicenseEnvironments.md) |  | [optional] 
**expiresAt** | **Date** | The date and time this license expires. TRIAL licenses stop access to PingOne services at expiration. All other licenses trigger an event to send a notification when the license expires but do not block services. | [optional] [readonly] 
**fraud** | [**LicenseFraud**](LicenseFraud.md) |  | [optional] 
**gateways** | [**LicenseGateways**](LicenseGateways.md) |  | [optional] 
**id** | **String** | A read-only string that specifies the license resource’s unique identifier. | [optional] [readonly] 
**intelligence** | [**LicenseIntelligence**](LicenseIntelligence.md) |  | [optional] 
**mfa** | [**LicenseMfa**](LicenseMfa.md) |  | [optional] 
**name** | **String** | A string that specifies a descriptive name for the license. This is a required property in a license name update request. Valid characters consists of any Unicode letter, mark, numeric character, forward slash, dot, apostrophe, underscore, space, or hyphen. The maximum length of a name is 255 characters. | 
**orchestrate** | [**LicenseOrchestrate**](LicenseOrchestrate.md) |  | [optional] 
**organization** | [**ObjectOrganization**](ObjectOrganization.md) |  | [optional] 
**_package** | **String** | A string that specifies the license template on which this license is based. | [optional] 
**replacesLicense** | [**LicenseReplacesLicense**](LicenseReplacesLicense.md) |  | [optional] 
**replacedByLicense** | [**LicenseReplacedByLicense**](LicenseReplacedByLicense.md) |  | [optional] 
**status** | [**EnumLicenseStatus**](EnumLicenseStatus.md) |  | [optional] 
**terminatesAt** | **Date** | An optional attribute that designates the exact date and time when this license terminates access to PingOne services. This attribute can be added to any licensing package. | [optional] 
**users** | [**LicenseUsers**](LicenseUsers.md) |  | [optional] 
**verify** | [**LicenseVerify**](LicenseVerify.md) |  | [optional] 


