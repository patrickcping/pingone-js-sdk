# PingOnePlatformApiSsoAndBase.Agreement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**consentsAggregatedAt** | **Date** | The time the consent count metric was last updated. This value is typically updated once every 24 hours. | [optional] [readonly] 
**description** | **String** | A string that specifies the description of the agreement. | [optional] 
**enabled** | **Boolean** | A boolean that specifies the current enabled state of the agreement. This is a required property. The agreement must support the default language to be enabled. It cannot be disabled if it is referenced by a sign-on action. When an agreement is disabled, it is not used anywhere it is configured across PingOne. | 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**totalExpiredConsents** | **Number** | An integer that identifies the number of users who have consented to the agreement, but their consent has expired. This value is last calculated at the consentCountsUpdatedAt time. | [optional] [readonly] 
**id** | **String** | A string that specifies the agreement ID. | [optional] [readonly] 
**name** | **String** | A string that specifies the name of the agreement resource. This is a required property. | 
**reconsentPeriodDays** | **Number** | A number that represents the number of days until a consent to this agreement expires. | [optional] 
**totalConsents** | **Number** | An integer that identifies the total number of users who have consented to the agreement. This value is last calculated at the consentCountsUpdatedAt time. | [optional] [readonly] 


