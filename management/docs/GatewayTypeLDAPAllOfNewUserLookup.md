# PingOnePlatformApiSsoAndBase.GatewayTypeLDAPAllOfNewUserLookup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributeMappings** | [**[GatewayTypeLDAPAllOfNewUserLookupAttributeMappings]**](GatewayTypeLDAPAllOfNewUserLookupAttributeMappings.md) | A list of objects supplying a mapping of PingOne attributes to external LDAP attributes. One of the entries must be a mapping for \&quot;username&#x60;. This is required for the PingOne user schema. | 
**ldapFilterPattern** | **String** | The LDAP user search filter to use to match users against the entered user identifier at login. For example, (((uid&#x3D;${identifier})(mail&#x3D;${identifier})). Alternatively, this can be a search against the user directory. | 
**population** | [**GatewayTypeLDAPAllOfNewUserLookupPopulation**](GatewayTypeLDAPAllOfNewUserLookupPopulation.md) |  | 


