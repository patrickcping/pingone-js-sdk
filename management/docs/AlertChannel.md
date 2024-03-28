# PingOnePlatformApiSsoAndBase.AlertChannel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**id** | **String** | Unique ID of the alert channel. | [optional] [readonly] 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**channelType** | [**EnumAlertChannelType**](EnumAlertChannelType.md) |  | 
**addresses** | **[String]** | The email addresses to send the alert to. | 
**includeSeverities** | [**[EnumAlertChannelSeverity]**](EnumAlertChannelSeverity.md) | Filters alerts by severity. If empty, all severities are included. Possible values are &#x60;INFO&#x60;, &#x60;WARNING&#x60;, and &#x60;ERROR&#x60;&#x60;. | [optional] 
**includeAlertTypes** | [**[EnumAlertChannelAlertType]**](EnumAlertChannelAlertType.md) | Filters alerts by alert type. If empty, all alert types are included. Possible values are CERTIFICATE_EXPIRED, CERTIFICATE_EXPIRING, KEY_PAIR_EXPIRED, GATEWAY_VERSION_DEPRECATED, KEY_PAIR_EXPIRING, and GATEWAY_VERSION_DEPRECATING. | [optional] 
**excludeAlertTypes** | [**[EnumAlertChannelAlertType]**](EnumAlertChannelAlertType.md) | Administrators will not be emailed alerts of these types. If empty, no alert types are excluded. Possible values are CERTIFICATE_EXPIRED, CERTIFICATE_EXPIRING, KEY_PAIR_EXPIRED, GATEWAY_VERSION_DEPRECATED, KEY_PAIR_EXPIRING, and GATEWAY_VERSION_DEPRECATING. | [optional] 


