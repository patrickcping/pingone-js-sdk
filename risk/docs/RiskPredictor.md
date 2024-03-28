# PingOnePlatformApiPingOneRisk.RiskPredictor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**id** | **String** | A string that specifies the resource’s unique identifier. | [optional] [readonly] 
**name** | **String** | A string type. A unique, friendly name for the predictor. This name is displayed in the Risk Policies UI, when the admin is asked to define the overrides and weights. | 
**compactName** | **String** | A string type. A unique name for the predictor. This property is immutable; it cannot be modified after initial creation. The value must be alpha-numeric, with no special characters or spaces. This name is used in the API both for policy configuration, and in the Risk Evaluation response (under details). | 
**type** | [**EnumPredictorType**](EnumPredictorType.md) |  | 
**description** | **String** | A string type. This specifies the description of the risk predictor. Maximum length is 1024 characters. | [optional] 
**createdAt** | **Date** | The time the resource was created. | [optional] [readonly] 
**updatedAt** | **Date** | The time the resource was updated. | [optional] [readonly] 
**licensed** | **Boolean** | Indicates whether PingOne Risk is licensed for the environment. | [optional] [readonly] 
**deletable** | **Boolean** | A boolean to indicate whether the predictor is deletable in the environment. | [optional] [readonly] 
**_default** | [**RiskPredictorCommonDefault**](RiskPredictorCommonDefault.md) |  | [optional] 
**condition** | [**RiskPredictorCommonCondition**](RiskPredictorCommonCondition.md) |  | [optional] 
**whiteList** | **[String]** | A list of IP addresses (CDIRs) that are ignored for the predictor results. | [optional] 
**composition** | [**RiskPredictorCompositeAllOfComposition**](RiskPredictorCompositeAllOfComposition.md) |  | [optional] 
**compositions** | [**[RiskPredictorCompositeAllOfCompositionsInner]**](RiskPredictorCompositeAllOfCompositionsInner.md) | Contains the objects that specify the conditions to test and the risk level that should be assigned if the conditions are met. The array can contain a maximum of three elements. | 
**map** | [**RiskPredictorCustomAllOfMap**](RiskPredictorCustomAllOfMap.md) |  | 
**detect** | [**EnumPredictorNewDeviceDetectType**](EnumPredictorNewDeviceDetectType.md) |  | 
**activationAt** | **Date** | You can use the &#x60;activationAt&#x60; parameter to specify a date on which the learning process for the predictor should be restarted. This can be used in conjunction with the fallback setting (&#x60;default.result.level&#x60;) to force strong authentication when moving the predictor to production. The date should be in an RFC3339 format. Note that activation date uses UTC time. | [optional] 
**days** | **Number** |  | 
**radius** | [**RiskPredictorUserLocationAnomalyAllOfRadius**](RiskPredictorUserLocationAnomalyAllOfRadius.md) |  | 
**predictionModel** | [**RiskPredictorUserRiskBehaviorAllOfPredictionModel**](RiskPredictorUserRiskBehaviorAllOfPredictionModel.md) |  | 
**by** | **[String]** |  | [optional] 
**every** | [**RiskPredictorVelocityAllOfEvery**](RiskPredictorVelocityAllOfEvery.md) |  | [optional] 
**fallback** | [**RiskPredictorVelocityAllOfFallback**](RiskPredictorVelocityAllOfFallback.md) |  | [optional] 
**maxDelay** | [**RiskPredictorVelocityAllOfMaxDelay**](RiskPredictorVelocityAllOfMaxDelay.md) |  | [optional] 
**measure** | [**EnumPredictorVelocityMeasure**](EnumPredictorVelocityMeasure.md) |  | [optional] 
**of** | **String** |  | [optional] 
**slidingWindow** | [**RiskPredictorVelocityAllOfSlidingWindow**](RiskPredictorVelocityAllOfSlidingWindow.md) |  | [optional] 
**use** | [**RiskPredictorVelocityAllOfUse**](RiskPredictorVelocityAllOfUse.md) |  | [optional] 


