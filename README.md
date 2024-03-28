# PingOne Administration JavaScript SDK

> [!IMPORTANT]  
> Content in this repository is under development and isn't yet functional.

The PingOne JavaScript SDK provides a set of functions and stucts that help with interacting with the PingOne public cloud API.

The code is intended to be delivered as a sample, until an official JavaScript SDK is released from Ping Identity.  As such, the code is highly likely to change significantly between releases. 

Code for each service is generated with the help of the [OpenAPI Generator](https://openapi-generator.tech/).

## Packages

The SDK provides a core package, and a package per PingOne service, each with their own directory off the root of the project:

* **agreementmanagement** - [Documentation](https://github.com/patrickcping/pingone-js-sdk/tree/main/agreementmanagement) - for the PingOne end-user agreements managements service
* **authorize** - [Documentation](https://github.com/patrickcping/pingone-js-sdk/tree/main/authorize) - for the PingOne Authorize service
* **credentials** - [Documentation](https://github.com/patrickcping/pingone-js-sdk/tree/main/credentials) - for the PingOne Credentials service, part of PingOne Neo
* **management** - [Documentation](https://github.com/patrickcping/pingone-js-sdk/tree/main/management) - for the PingOne platform common and SSO services
* **mfa** - [Documentation](https://github.com/patrickcping/pingone-js-sdk/tree/main/mfa) - for the PingOne MFA service
* **risk** - [Documentation](https://github.com/patrickcping/pingone-js-sdk/tree/main/risk) - for the PingOne Protect service
* **verify** - [Documentation](https://github.com/patrickcping/pingone-js-sdk/tree/main/verify) - for the PingOne Verify service, part of PingOne Neo
