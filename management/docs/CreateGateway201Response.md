# PingOnePlatformApiSsoAndBase.CreateGateway201Response

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
**bindDN** | **String** | A string that specifies the distinguished name information to bind to the LDAP database (for example, uid&#x3D;pingone,dc&#x3D;example,dc&#x3D;com). | 
**bindPassword** | **String** | A string that specifies the bind password for the LDAP database. This is a required property. | 
**connectionSecurity** | [**EnumGatewayTypeLDAPSecurity**](EnumGatewayTypeLDAPSecurity.md) |  | [optional] 
**kerberos** | [**GatewayTypeLDAPAllOfKerberos**](GatewayTypeLDAPAllOfKerberos.md) |  | [optional] 
**serversHostAndPort** | **[String]** | An array of strings that specifies the LDAP server host name and port number (for example, [&#x60;ds1.example.com:389&#x60;, &#x60;ds2.example.com:389&#x60;]). | 
**userTypes** | [**[GatewayTypeLDAPAllOfUserTypes]**](GatewayTypeLDAPAllOfUserTypes.md) | An array of the userTypes properties for the users to be provisioned in PingOne. userTypes specifies which user properties in PingOne correspond to the user properties in an external LDAP directory. You can use an LDAP browser to view the user properties in the external LDAP directory. | [optional] 
**validateTlsCertificates** | **Boolean** | A boolean that specifies whether or not to trust all SSL certificates (defaults to true). If this value is false, TLS certificates are not validated. When the value is set to true, only certificates that are signed by the default JVM CAs, or the CA certs that the customer has uploaded to the certificate service are trusted. | [optional] 
**vendor** | [**EnumGatewayVendor**](EnumGatewayVendor.md) |  | 
**followReferrals** | **Boolean** |  | [optional] [readonly] 
**davinci** | [**GatewayTypeRADIUSAllOfDavinci**](GatewayTypeRADIUSAllOfDavinci.md) |  | 
**defaultSharedSecret** | **String** | Value to use for the shared secret if the shared secret is not provided for one or more of the RADIUS clients specified. | [optional] 
**radiusClients** | [**[GatewayTypeRADIUSAllOfRadiusClients]**](GatewayTypeRADIUSAllOfRadiusClients.md) | Collection of RADIUS clients. | 


