# PingOnePlatformApiSsoAndBase.SubscriptionFilterOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**includedActionTypes** | **[String]** | A non-empty array that specifies the list of action types that should be matched for the subscription. This is a required property. | 
**includedApplications** | [**[SubscriptionFilterOptionsIncludedApplicationsInner]**](SubscriptionFilterOptionsIncludedApplicationsInner.md) | An array that specifies the list of applications (by ID) whose events are monitored by the subscription (maximum of 10 IDs in the array). This is an optional property. If a list of applications is not provided, events are monitored for all applications in the environment. | [optional] 
**includedPopulations** | [**[SubscriptionFilterOptionsIncludedApplicationsInner]**](SubscriptionFilterOptionsIncludedApplicationsInner.md) | An array that specifies the list of populations (by ID) whose events are monitored by the subscription (maximum of 10 IDs in the array). This property matches events for users in the specified populations, as opposed to events generated in which the user in one of the populations is the actor. This is an optional property. | [optional] 
**includedTags** | [**[EnumSubscriptionFilterIncludedTags]**](EnumSubscriptionFilterIncludedTags.md) | An array of tags that events must have to be monitored by the subscription. If tags are not specified, all events are monitored. Currently, the available tags are &#x60;adminIdentityEvent&#x60;. Identifies the event as the action of an administrator on other administrators. | [optional] 
**ipAddressExposed** | **Boolean** | Whether the IP address of an actor should be present in the &#x60;source&#x60; section of the event. | [optional] [default to false]
**userAgentExposed** | **Boolean** | Whether the User-Agent HTTP header of an event should be present in the &#x60;source&#x60; section of the event. | [optional] [default to false]


