# PingOnePlatformApiSsoAndBase.ApplicationCorsSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**behavior** | [**EnumApplicationCorsSettingsBehavior**](EnumApplicationCorsSettingsBehavior.md) |  | 
**origins** | **[String]** | Must be non-empty when &#x60;corsSettings.behavior&#x60; is &#x60;ALLOW_SPECIFIC_ORIGINS&#x60; and must be omitted or empty when &#x60;corsSettings.behavior&#x60; is &#x60;ALLOW_NO_ORIGINS&#x60;.  Limited to 20 values.  Values are the origins from which CORS requests to the Authorization and Authentication APIs are allowed.  Each value is an &#x60;http&#x60; or &#x60;https&#x60; URL without a path.  The host may be a domain name (including &#x60;localhost&#x60;), or an IPv4 address.  Subdomains may use the wildcard (*) to match any string. | [optional] 


