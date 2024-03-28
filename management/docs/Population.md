# PingOnePlatformApiSsoAndBase.Population

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**createdAt** | **String** | The time the resource was created. | [optional] [readonly] 
**_default** | **Boolean** | The population to use as the default population for the environment. Only one population per environment can be the default. New users are assigned to the default population if it exists, and the Population ID is not provided in the [Create User](https://apidocs.pingidentity.com/pingone/platform/v1/api/#post-create-user) request. | [optional] 
**description** | **String** | A string that specifies the description of the population. | [optional] 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**id** | **String** | A string that specifies the resource’s unique identifier. | [optional] [readonly] 
**name** | **String** | A string that specifies the population name, which must be provided and must be unique within an environment. | 
**passwordPolicy** | [**PopulationPasswordPolicy**](PopulationPasswordPolicy.md) |  | [optional] 
**updatedAt** | **String** | The time the resource was last updated. | [optional] [readonly] 
**userCount** | **Number** | The number of users that belong to the population | [optional] [readonly] 


