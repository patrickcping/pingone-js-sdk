# PingOnePlatformApiSsoAndBase.NotificationsSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**updatedAt** | **Date** | The time the resource was last updated. | [optional] [readonly] 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**deliveryMode** | [**EnumNotificationsSettingsDeliveryMode**](EnumNotificationsSettingsDeliveryMode.md) |  | [optional] 
**restrictions** | [**NotificationsSettingsRestrictions**](NotificationsSettingsRestrictions.md) |  | [optional] 
**id** | **String** | A string that specifies the resource’s unique identifier. | [optional] [readonly] 
**smsProvidersFallbackChain** | **[String]** | A list which represents the execution order of different SMS/Voice providers configured for the environment. The providers and their accounts’ configurations are represented in the list by the ID of the corresponding &#x60;PhoneDeliverySettings&#x60; resource. The only provider which is not represented by a &#x60;phoneDeliverySettingsID&#x60; is the PingOne Twilio provider. The PingOne Twilio provider is represented by the &#x60;PINGONE_TWILIO&#x60; string. If the &#x60;smsProvidersFallbackChain&#x60; list is empty, an SMS or voice message will be sent using the default Ping Twilio account. Otherwise, an SMS or voice message will be sent using the first provider in the list. If the server fails to queue the message using that provider, it will use the next provider in the list to try to send the message. This process will go on until there are no more providers in the list. If the server failed to send the message using all providers, the notification status is set to &#x60;FAILED&#x60;. | [optional] 
**from** | [**NotificationsSettingsFrom**](NotificationsSettingsFrom.md) |  | [optional] 
**replyTo** | [**NotificationsSettingsReplyTo**](NotificationsSettingsReplyTo.md) |  | [optional] 
**whitelist** | [**[NotificationsSettingsWhitelistInner]**](NotificationsSettingsWhitelistInner.md) |  | [optional] 


