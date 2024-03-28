# PingOnePlatformApiSsoAndBase.GatewayTypeRADIUS

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**id** | **String** | A string that specifies the instance ID of the gateway. The gateway instance ID is created by the gateway when it starts up. | [optional] [readonly] 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**credentials** | [**[GatewayCredential]**](GatewayCredential.md) |  | [optional] [readonly] 
**name** | **String** | A string that specifies the resource name, which must be provided and must be unique within an environment. Valid characters are any Unicode letter, mark, numeric character, forward slash, dot, apostrophe, underscore, space, or hyphen. | 
**description** | **String** | A string that specifies the description of the resource. | [optional] 
**type** | [**EnumGatewayType**](EnumGatewayType.md) |  | 
**enabled** | **Boolean** | A boolean that specifies whether the gateway is enabled. This is a required property. | 
**supportedVersions** | [**[GatewaySupportedVersionsInner]**](GatewaySupportedVersionsInner.md) | An array that lists the LDAP gateway versions associated with this gateway resource. This information is returned on a GET {{apiPath}}/environments/{{environmentID}}/gateways request, and it is used to trigger alerts if the gateway tries to connect with an unsupported version (or a version that is not the latest or recommended version). | [optional] [readonly] 
**currentAlerts** | **[Object]** |  | [optional] [readonly] 
**davinci** | [**GatewayTypeRADIUSAllOfDavinci**](GatewayTypeRADIUSAllOfDavinci.md) |  | 
**defaultSharedSecret** | **String** | Value to use for the shared secret if the shared secret is not provided for one or more of the RADIUS clients specified. | [optional] 
**radiusClients** | [**[GatewayTypeRADIUSAllOfRadiusClients]**](GatewayTypeRADIUSAllOfRadiusClients.md) | Collection of RADIUS clients. | 


