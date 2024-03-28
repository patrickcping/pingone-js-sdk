# PingOnePlatformApiCredentials.P1Error

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique identifier that is stored in log files and always included in an error response. This value can be used to track the error received by the client, with server-side activity included for troubleshooting purposes. | [optional] 
**code** | **String** | A general fault code which the client must handle to provide all exception handling routines and to localize messages for users. This code is common across all PingOne services and is human readable (such as a defined constant rather than a number). | [optional] 
**message** | **String** | A short description of the error. This message is intended to assist with debugging and is returned in English only. | [optional] 
**details** | [**[P1ErrorDetailsInner]**](P1ErrorDetailsInner.md) | Additional details about the error. Optional information to help resolve the error and to display to users. | [optional] 


