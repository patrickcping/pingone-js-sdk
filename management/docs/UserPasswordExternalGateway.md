# PingOnePlatformApiSsoAndBase.UserPasswordExternalGateway

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The UUID of the linked gateway that references the remote directory. | [optional] 
**type** | [**EnumGatewayType**](EnumGatewayType.md) |  | [optional] 
**userType** | [**UserPasswordExternalGatewayUserType**](UserPasswordExternalGatewayUserType.md) |  | [optional] 
**correlationAttributes** | **Object** | An object that maps the external LDAP directory attributes to PingOne attributes. We use the correlationAttributes values to read the attributes from the external LDAP directory and map them to the corresponding PingOne attributes. | [optional] 


