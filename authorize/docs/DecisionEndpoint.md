# PingOnePlatformApiAuthorize.DecisionEndpoint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**alternateId** | **String** | A string that specifies alternative unique identifier for the endpoint, which provides a method for locating the resource by a known, fixed identifier. | [optional] 
**authorizationVersion** | [**DecisionEndpointAuthorizationVersion**](DecisionEndpointAuthorizationVersion.md) |  | [optional] 
**description** | **String** | A string that specifies the description of the policy decision resource. | 
**id** | **String** | A string that specifies the resource’s unique identifier. | [optional] [readonly] 
**name** | **String** | A string that specifies the policy decision resource name. | 
**owned** | **Boolean** | A boolean that when true restricts modifications of the endpoint to PingOne-owned clients. | [optional] 
**policyId** | **String** | A string that specifies the ID of the root policy configured for this endpoint. If omitted, the policy editor service decides on a suitable default. | [optional] 
**provenance** | **String** | A string that specifies a machine-readable identifier indicating the provenance of the current configuration. It has no meaning to the Policy Decision Service itself but exists to support integration with other services. | [optional] 
**recentDecisionsEnabled** | **Boolean** | A boolean that specifies whether to show recent decisions. | [optional] 
**recentDecisions** | [**DecisionEndpointRecentDecisions**](DecisionEndpointRecentDecisions.md) |  | [optional] 
**recordRecentRequests** | **Boolean** | A boolean that specifies whether to record a limited history of recent decision requests and responses, which can be queried through a separate API. | 


