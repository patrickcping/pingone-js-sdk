# PingOnePlatformApiPingOneVerify.P1ErrorDetailsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | A general fault code which the client must handle to provide all exception handling routines and to localize messages for users. This code is common across all PingOne services and is human readable (such as a defined constant rather than a number). | [optional] 
**target** | **String** | The item that caused the error (such as a form field ID or an attribute inside a JSON object). | [optional] 
**message** | **String** | A short description of the error. This message is intended to assist with debugging and is returned in English only. | [optional] 
**innerError** | [**P1ErrorDetailsInnerInnerError**](P1ErrorDetailsInnerInnerError.md) |  | [optional] 


