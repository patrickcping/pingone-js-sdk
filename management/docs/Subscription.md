# PingOnePlatformApiSsoAndBase.Subscription

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**createdAt** | **Date** | The time the key resource expires.The date and time at which the subscription resource was created (ISO 8601 format). | [optional] [readonly] 
**enabled** | **Boolean** | A boolean that specifies whether a created or updated subscription should be active or suspended. A suspended state (&#x60;\&quot;enabled\&quot;:false&#x60;) accumulates all matched events, but these events are not delivered until the subscription becomes active again (&#x60;\&quot;enabled\&quot;:true&#x60;). For suspended subscriptions, events accumulate for a maximum of two weeks. Events older than two weeks are deleted. Restarted subscriptions receive the saved events (up to two weeks from the restart date). This is a required property. | 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**filterOptions** | [**SubscriptionFilterOptions**](SubscriptionFilterOptions.md) |  | 
**format** | [**EnumSubscriptionFormat**](EnumSubscriptionFormat.md) |  | 
**id** | **String** | A string that specifies the user resource’s unique identifier. | [optional] [readonly] 
**httpEndpoint** | [**SubscriptionHttpEndpoint**](SubscriptionHttpEndpoint.md) |  | 
**name** | **String** | A string that specifies the subscription name. This is a required property. | 
**tlsClientAuthKeyPair** | [**SubscriptionTlsClientAuthKeyPair**](SubscriptionTlsClientAuthKeyPair.md) |  | [optional] 
**updatedAt** | **Date** | The date and time at which the subscription resource was last updated (ISO 8601 format). | [optional] [readonly] 
**verifyTlsCertificates** | **Boolean** | A boolean that specifies whether a certificates should be verified. If this property&#39;s value is set to false, then all certificates are trusted. (Setting this property&#39;s value to false introduces a security risk.) This is a required property. | 


