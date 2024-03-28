# PingOnePlatformApiSsoAndBase.GatewayTypeLDAPAllOfUserTypes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowPasswordChanges** | **Boolean** | Defaults to false if this property isn&#39;t specified in the request. If false, the user cannot change the password in the remote LDAP directory. In this case, operations for forgotten passwords or resetting of passwords are not available to a user referencing this gateway. | [optional] 
**updateUserOnSuccessfulAuthentication** | **Boolean** | If set to true, when users sign on through an LDAP Gateway client, user attributes are updated based on responses from the LDAP server. Defaults to false if this property isn&#39;t specified in the request. | [optional] 
**id** | **String** | The UUID of the user type. This correlates to the password.external.gateway.userType.id User property. | [optional] 
**name** | **String** | The name of the user type. | 
**newUserLookup** | [**GatewayTypeLDAPAllOfNewUserLookup**](GatewayTypeLDAPAllOfNewUserLookup.md) |  | [optional] 
**orderedCorrelationAttributes** | **[String]** | A map of key/value entries used to persist the external LDAP directory attributes. | 
**passwordAuthority** | [**EnumGatewayPasswordAuthority**](EnumGatewayPasswordAuthority.md) |  | 
**searchBaseDn** | **String** | The LDAP base domain name (DN) for this user type. | 


