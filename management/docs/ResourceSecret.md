# PingOnePlatformApiSsoAndBase.ResourceSecret

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**secret** | **String** | An auto-generated resource client secret. Possible characters are a-z, A-Z, 0-9, -, ., _, ~. The secret has a minimum length of 64 characters per SHA-512 requirements when using the HS512 algorithm to sign ID tokens using the secret as the key. | [optional] [readonly] 


