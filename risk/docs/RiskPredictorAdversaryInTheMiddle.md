# PingOnePlatformApiPingOneRisk.RiskPredictorAdversaryInTheMiddle

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
**whiteList** | **[String]** | A list of strings that specify legitimate domains that users will access for restricted resources. | [optional] 


