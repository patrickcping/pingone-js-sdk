# PingOnePlatformApiAuthorize.APIServer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**authorizationServer** | [**APIServerAuthorizationServer**](APIServerAuthorizationServer.md) |  | 
**baseURLs** | **[String]** | An array of string that specifies the possible base URLs that an end-user will use to access the APIs hosted on the customer&#39;s API server. Multiple base URLs may be specified to support cases where the same API may be available from multiple URLs (for example, from a user-friendly domain URL and an internal domain URL). Base URLs must be valid absolute URLs with the https or http scheme. If the path component is non-empty, it must not end in a trailing slash. The path must not contain empty backslash, dot, or double-dot segments. It must not have a query or fragment present, and the host portion of the authority must be a DNS hostname or valid IP (IPv4 or IPv6). The length must be less than or equal to 256 characters. | 
**id** | **String** | A string that specifies the resource&#39;s unique identifier. | [optional] [readonly] 
**name** | **String** | A string that specifies the API server resource name. The name value must be unique among all API servers, and it must be a valid resource name. | 
**operations** | **Object** | A map from the operation name to the operation object. Each key must be valid ObjectName, and each value must be a valid operation. Each key must be unique within the operations object, which means the operation key is unique within an API server. No duplicate operation values are allowed; operations with the same paths and methods members are not allowed. The operations object is limited to 25 keys (25 individual operations). | [optional] 


