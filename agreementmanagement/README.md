# ping_one_platform_api_agreement_management

PingOnePlatformApiAgreementManagement - JavaScript client for ping_one_platform_api_agreement_management
The PingOne Platform API covering the PingOne Agreement Management service
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 2023-06-29
- Package version: 2023-06-29
- Generator version: 7.4.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install ping_one_platform_api_agreement_management --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your ping_one_platform_api_agreement_management from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/patrickcping/pingone-js-sdk
then install it via:

```shell
    npm install patrickcping/pingone-js-sdk --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var PingOnePlatformApiAgreementManagement = require('ping_one_platform_api_agreement_management');

var defaultClient = PingOnePlatformApiAgreementManagement.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

var api = new PingOnePlatformApiAgreementManagement.AgreementRevisionsResourcesApi()
var environmentID = "environmentID_example"; // {String} 
var agreementID = "agreementID_example"; // {String} 
var languageID = "languageID_example"; // {String} 
var revisionID = "revisionID_example"; // {String} 
api.readOneAgreementLanguageRevision(environmentID, agreementID, languageID, revisionID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://agreement-mgmt.pingone.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*PingOnePlatformApiAgreementManagement.AgreementRevisionsResourcesApi* | [**readOneAgreementLanguageRevision**](docs/AgreementRevisionsResourcesApi.md#readOneAgreementLanguageRevision) | **GET** /environments/{environmentID}/agreements/{agreementID}/languages/{languageID}/revisions/{revisionID}.json | READ One Agreement Language Revision


## Documentation for Models

 - [PingOnePlatformApiAgreementManagement.AgreementRevisionText](docs/AgreementRevisionText.md)
 - [PingOnePlatformApiAgreementManagement.P1Error](docs/P1Error.md)
 - [PingOnePlatformApiAgreementManagement.P1ErrorDetailsInner](docs/P1ErrorDetailsInner.md)
 - [PingOnePlatformApiAgreementManagement.P1ErrorDetailsInnerInnerError](docs/P1ErrorDetailsInnerInnerError.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### bearer

- **Type**: Bearer authentication (JWT)

