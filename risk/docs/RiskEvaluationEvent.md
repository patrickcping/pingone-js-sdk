# PingOnePlatformApiPingOneRisk.RiskEvaluationEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**browser** | [**RiskEvaluationEventBrowser**](RiskEvaluationEventBrowser.md) |  | [optional] 
**completionStatus** | [**EnumCompletionStatus**](EnumCompletionStatus.md) |  | [optional] 
**evaluatedFactors** | [**RiskEvaluationEventEvaluatedFactors**](RiskEvaluationEventEvaluatedFactors.md) |  | [optional] 
**ip** | **String** | A string that specifies the origin IP address of the authentication flow. This is a required property. | 
**flow** | [**RiskEvaluationEventFlow**](RiskEvaluationEventFlow.md) |  | [optional] 
**origin** | **String** | A string that specifies the calling service. | [optional] 
**session** | [**RiskEvaluationEventSession**](RiskEvaluationEventSession.md) |  | [optional] 
**targetResource** | [**RiskEvaluationEventTargetResource**](RiskEvaluationEventTargetResource.md) |  | [optional] 
**user** | [**RiskEvaluationEventUser**](RiskEvaluationEventUser.md) |  | 
**sharingType** | [**EnumEventSharingType**](EnumEventSharingType.md) |  | [optional] 


