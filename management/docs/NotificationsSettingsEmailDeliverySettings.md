# PingOnePlatformApiSsoAndBase.NotificationsSettingsEmailDeliverySettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**host** | **String** | A string that specifies the organization&#39;s SMTP server. | [optional] 
**port** | **Number** | An integer that specifies the port used by the organization&#39;s SMTP server to send emails (default &#x60;465&#x60;). Note that the protocol used depends upon the port specified. If you specify port &#x60;25&#x60;, &#x60;587&#x60;, or &#x60;2525&#x60;, SMTP with &#x60;STARTTLS&#x60; is used. Otherwise, &#x60;SMTPS&#x60; is used. | [optional] [default to 465]
**protocol** | **String** | A string that specifies the organization&#39;s SMTP server&#39;s protocol. | [optional] [readonly] 
**username** | **String** | A string that specifies the organization&#39;s SMTP server&#39;s username. | [optional] 
**password** | **String** | A string that specifies the organization&#39;s SMTP server&#39;s password. | [optional] 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**from** | [**NotificationsSettingsEmailDeliverySettingsFrom**](NotificationsSettingsEmailDeliverySettingsFrom.md) |  | [optional] 
**replyTo** | [**NotificationsSettingsEmailDeliverySettingsReplyTo**](NotificationsSettingsEmailDeliverySettingsReplyTo.md) |  | [optional] 


