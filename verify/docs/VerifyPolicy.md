# PingOnePlatformApiPingOneVerify.VerifyPolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**id** | **String** |  | [optional] [readonly] 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**name** | **String** | Name displayed in PingOne Admin UI. | 
**description** | **String** | Description displayed in PingOne Admin UI, 1-1024 characters. | [optional] 
**_default** | **Boolean** | Required as true to set this verify policy as the default policy for the environment; otherwise optional and defaults to false. | [optional] 
**governmentId** | [**GovernmentIdConfiguration**](GovernmentIdConfiguration.md) |  | [optional] 
**facialComparison** | [**FacialComparisonConfiguration**](FacialComparisonConfiguration.md) |  | [optional] 
**liveness** | [**LivenessConfiguration**](LivenessConfiguration.md) |  | [optional] 
**email** | [**OTPDeviceConfiguration**](OTPDeviceConfiguration.md) |  | [optional] 
**phone** | [**OTPDeviceConfiguration**](OTPDeviceConfiguration.md) |  | [optional] 
**transaction** | [**TransactionConfiguration**](TransactionConfiguration.md) |  | [optional] 
**voice** | [**VoiceConfiguration**](VoiceConfiguration.md) |  | [optional] 
**createdAt** | **Date** |  | [optional] [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 


