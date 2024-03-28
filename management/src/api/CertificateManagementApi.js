/**
 * PingOne Platform API - SSO and Base
 * The PingOne Platform API covering the base and SSO services (otherwise known as the Management APIs)
 *
 * The version of the OpenAPI document: 2023-06-29
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Certificate from '../model/Certificate';
import CertificateKeyUpdate from '../model/CertificateKeyUpdate';
import EntityArray from '../model/EntityArray';
import EnumCSRExportHeader from '../model/EnumCSRExportHeader';
import EnumCreateCertificateAcceptHeader from '../model/EnumCreateCertificateAcceptHeader';
import EnumGetKeyAcceptHeader from '../model/EnumGetKeyAcceptHeader';
import P1Error from '../model/P1Error';
import PKIKeyFileUpload from '../model/PKIKeyFileUpload';

/**
* CertificateManagement service.
* @module api/CertificateManagementApi
* @version 2023-06-29
*/
export default class CertificateManagementApi {

    /**
    * Constructs a new CertificateManagementApi. 
    * @alias module:api/CertificateManagementApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * CREATE Certificate with PKCS7 or PEM File
     * @param {String} environmentID 
     * @param {String} usageType 
     * @param {File} file 
     * @param {Object} opts Optional parameters
     * @param {module:model/EnumCreateCertificateAcceptHeader} [contentType] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Certificate} and HTTP response
     */
    createCertificateFromFileWithHttpInfo(environmentID, usageType, file, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling createCertificateFromFile");
      }
      // verify the required parameter 'usageType' is set
      if (usageType === undefined || usageType === null) {
        throw new Error("Missing the required parameter 'usageType' when calling createCertificateFromFile");
      }
      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling createCertificateFromFile");
      }

      let pathParams = {
        'environmentID': environmentID
      };
      let queryParams = {
      };
      let headerParams = {
        'Content-Type': opts['contentType']
      };
      let formParams = {
        'usageType': usageType,
        'file': file
      };

      let authNames = ['bearer'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = Certificate;
      return this.apiClient.callApi(
        '/environments/{environmentID}/certificates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * CREATE Certificate with PKCS7 or PEM File
     * @param {String} environmentID 
     * @param {String} usageType 
     * @param {File} file 
     * @param {Object} opts Optional parameters
     * @param {module:model/EnumCreateCertificateAcceptHeader} opts.contentType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Certificate}
     */
    createCertificateFromFile(environmentID, usageType, file, opts) {
      return this.createCertificateFromFileWithHttpInfo(environmentID, usageType, file, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * CREATE Key
     * @param {String} environmentID 
     * @param {Object} opts Optional parameters
     * @param {String} [contentType] 
     * @param {module:model/Certificate} [certificate] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Certificate} and HTTP response
     */
    createKeyWithHttpInfo(environmentID, opts) {
      opts = opts || {};
      let postBody = opts['certificate'];
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling createKey");
      }

      let pathParams = {
        'environmentID': environmentID
      };
      let queryParams = {
      };
      let headerParams = {
        'Content-Type': opts['contentType']
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = Certificate;
      return this.apiClient.callApi(
        '/environments/{environmentID}/keys', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * CREATE Key
     * @param {String} environmentID 
     * @param {Object} opts Optional parameters
     * @param {String} opts.contentType 
     * @param {module:model/Certificate} opts.certificate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Certificate}
     */
    createKey(environmentID, opts) {
      return this.createKeyWithHttpInfo(environmentID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * DELETE Certificate
     * @param {String} environmentID 
     * @param {String} certID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteCertificateWithHttpInfo(environmentID, certID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling deleteCertificate");
      }
      // verify the required parameter 'certID' is set
      if (certID === undefined || certID === null) {
        throw new Error("Missing the required parameter 'certID' when calling deleteCertificate");
      }

      let pathParams = {
        'environmentID': environmentID,
        'certID': certID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/environments/{environmentID}/certificates/{certID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * DELETE Certificate
     * @param {String} environmentID 
     * @param {String} certID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteCertificate(environmentID, certID) {
      return this.deleteCertificateWithHttpInfo(environmentID, certID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * DELETE Key
     * @param {String} environmentID 
     * @param {String} keyID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteKeyWithHttpInfo(environmentID, keyID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling deleteKey");
      }
      // verify the required parameter 'keyID' is set
      if (keyID === undefined || keyID === null) {
        throw new Error("Missing the required parameter 'keyID' when calling deleteKey");
      }

      let pathParams = {
        'environmentID': environmentID,
        'keyID': keyID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/environments/{environmentID}/keys/{keyID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * DELETE Key
     * @param {String} environmentID 
     * @param {String} keyID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteKey(environmentID, keyID) {
      return this.deleteKeyWithHttpInfo(environmentID, keyID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * DECRYPT Data
     * @param {String} environmentID 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} [body] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    environmentsEnvironmentIDDecryptionsPostWithHttpInfo(environmentID, opts) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling environmentsEnvironmentIDDecryptionsPost");
      }

      let pathParams = {
        'environmentID': environmentID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/environments/{environmentID}/decryptions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * DECRYPT Data
     * @param {String} environmentID 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    environmentsEnvironmentIDDecryptionsPost(environmentID, opts) {
      return this.environmentsEnvironmentIDDecryptionsPostWithHttpInfo(environmentID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * ENCRYPT Data
     * @param {String} environmentID 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} [body] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    environmentsEnvironmentIDEncryptionsPostWithHttpInfo(environmentID, opts) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling environmentsEnvironmentIDEncryptionsPost");
      }

      let pathParams = {
        'environmentID': environmentID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/environments/{environmentID}/encryptions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * ENCRYPT Data
     * @param {String} environmentID 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    environmentsEnvironmentIDEncryptionsPost(environmentID, opts) {
      return this.environmentsEnvironmentIDEncryptionsPostWithHttpInfo(environmentID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * SIGN Data
     * @param {String} environmentID 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} [body] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    environmentsEnvironmentIDSigningsPostWithHttpInfo(environmentID, opts) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling environmentsEnvironmentIDSigningsPost");
      }

      let pathParams = {
        'environmentID': environmentID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/environments/{environmentID}/signings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * SIGN Data
     * @param {String} environmentID 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    environmentsEnvironmentIDSigningsPost(environmentID, opts) {
      return this.environmentsEnvironmentIDSigningsPostWithHttpInfo(environmentID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * VERIFY Signed Data
     * @param {String} environmentID 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} [body] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    environmentsEnvironmentIDVerificationsPostWithHttpInfo(environmentID, opts) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling environmentsEnvironmentIDVerificationsPost");
      }

      let pathParams = {
        'environmentID': environmentID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/environments/{environmentID}/verifications', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * VERIFY Signed Data
     * @param {String} environmentID 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    environmentsEnvironmentIDVerificationsPost(environmentID, opts) {
      return this.environmentsEnvironmentIDVerificationsPostWithHttpInfo(environmentID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Export a certificate signing request (CSR)
     * @param {String} environmentID 
     * @param {String} keyID 
     * @param {Object} opts Optional parameters
     * @param {module:model/EnumCSRExportHeader} [accept] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Blob} and HTTP response
     */
    exportCSRWithHttpInfo(environmentID, keyID, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling exportCSR");
      }
      // verify the required parameter 'keyID' is set
      if (keyID === undefined || keyID === null) {
        throw new Error("Missing the required parameter 'keyID' when calling exportCSR");
      }

      let pathParams = {
        'environmentID': environmentID,
        'keyID': keyID
      };
      let queryParams = {
      };
      let headerParams = {
        'Accept': opts['accept']
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/pkcs10', 'application/x-pem-file'];
      let returnType = 'Blob';
      return this.apiClient.callApi(
        '/environments/{environmentID}/keys/{keyID}/csr', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Export a certificate signing request (CSR)
     * @param {String} environmentID 
     * @param {String} keyID 
     * @param {Object} opts Optional parameters
     * @param {module:model/EnumCSRExportHeader} opts.accept 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Blob}
     */
    exportCSR(environmentID, keyID, opts) {
      return this.exportCSRWithHttpInfo(environmentID, keyID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET Certificate
     * @param {String} environmentID 
     * @param {String} certID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Certificate} and HTTP response
     */
    getCertificateWithHttpInfo(environmentID, certID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling getCertificate");
      }
      // verify the required parameter 'certID' is set
      if (certID === undefined || certID === null) {
        throw new Error("Missing the required parameter 'certID' when calling getCertificate");
      }

      let pathParams = {
        'environmentID': environmentID,
        'certID': certID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Certificate;
      return this.apiClient.callApi(
        '/environments/{environmentID}/certificates/{certID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * GET Certificate
     * @param {String} environmentID 
     * @param {String} certID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Certificate}
     */
    getCertificate(environmentID, certID) {
      return this.getCertificateWithHttpInfo(environmentID, certID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET Certificate Applications
     * @param {String} environmentID 
     * @param {String} certID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityArray} and HTTP response
     */
    getCertificateApplicationsWithHttpInfo(environmentID, certID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling getCertificateApplications");
      }
      // verify the required parameter 'certID' is set
      if (certID === undefined || certID === null) {
        throw new Error("Missing the required parameter 'certID' when calling getCertificateApplications");
      }

      let pathParams = {
        'environmentID': environmentID,
        'certID': certID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EntityArray;
      return this.apiClient.callApi(
        '/environments/{environmentID}/certificates/{certID}/applications', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * GET Certificate Applications
     * @param {String} environmentID 
     * @param {String} certID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityArray}
     */
    getCertificateApplications(environmentID, certID) {
      return this.getCertificateApplicationsWithHttpInfo(environmentID, certID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET Certificates
     * @param {String} environmentID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityArray} and HTTP response
     */
    getCertificatesWithHttpInfo(environmentID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling getCertificates");
      }

      let pathParams = {
        'environmentID': environmentID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EntityArray;
      return this.apiClient.callApi(
        '/environments/{environmentID}/certificates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * GET Certificates
     * @param {String} environmentID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityArray}
     */
    getCertificates(environmentID) {
      return this.getCertificatesWithHttpInfo(environmentID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET Key
     * @param {String} environmentID 
     * @param {String} keyID 
     * @param {Object} opts Optional parameters
     * @param {module:model/EnumGetKeyAcceptHeader} [accept] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Certificate} and HTTP response
     */
    getKeyWithHttpInfo(environmentID, keyID, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling getKey");
      }
      // verify the required parameter 'keyID' is set
      if (keyID === undefined || keyID === null) {
        throw new Error("Missing the required parameter 'keyID' when calling getKey");
      }

      let pathParams = {
        'environmentID': environmentID,
        'keyID': keyID
      };
      let queryParams = {
      };
      let headerParams = {
        'Accept': opts['accept']
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/x-x509-ca-cert', 'application/x-pkcs7-certificates'];
      let returnType = Certificate;
      return this.apiClient.callApi(
        '/environments/{environmentID}/keys/{keyID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * GET Key
     * @param {String} environmentID 
     * @param {String} keyID 
     * @param {Object} opts Optional parameters
     * @param {module:model/EnumGetKeyAcceptHeader} opts.accept 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Certificate}
     */
    getKey(environmentID, keyID, opts) {
      return this.getKeyWithHttpInfo(environmentID, keyID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET Key Applications
     * @param {String} environmentID 
     * @param {String} keyID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityArray} and HTTP response
     */
    getKeyApplicationsWithHttpInfo(environmentID, keyID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling getKeyApplications");
      }
      // verify the required parameter 'keyID' is set
      if (keyID === undefined || keyID === null) {
        throw new Error("Missing the required parameter 'keyID' when calling getKeyApplications");
      }

      let pathParams = {
        'environmentID': environmentID,
        'keyID': keyID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EntityArray;
      return this.apiClient.callApi(
        '/environments/{environmentID}/keys/{keyID}/applications', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * GET Key Applications
     * @param {String} environmentID 
     * @param {String} keyID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityArray}
     */
    getKeyApplications(environmentID, keyID) {
      return this.getKeyApplicationsWithHttpInfo(environmentID, keyID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET Keys
     * @param {String} environmentID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityArray} and HTTP response
     */
    getKeysWithHttpInfo(environmentID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling getKeys");
      }

      let pathParams = {
        'environmentID': environmentID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EntityArray;
      return this.apiClient.callApi(
        '/environments/{environmentID}/keys', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * GET Keys
     * @param {String} environmentID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityArray}
     */
    getKeys(environmentID) {
      return this.getKeysWithHttpInfo(environmentID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Import Certificate Authority (CA) Response to a CSR
     * @param {String} environmentID 
     * @param {String} keyID 
     * @param {File} file 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Certificate} and HTTP response
     */
    importCSRResponseWithHttpInfo(environmentID, keyID, file) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling importCSRResponse");
      }
      // verify the required parameter 'keyID' is set
      if (keyID === undefined || keyID === null) {
        throw new Error("Missing the required parameter 'keyID' when calling importCSRResponse");
      }
      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling importCSRResponse");
      }

      let pathParams = {
        'environmentID': environmentID,
        'keyID': keyID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'file': file
      };

      let authNames = ['bearer'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = Certificate;
      return this.apiClient.callApi(
        '/environments/{environmentID}/keys/{keyID}/csr', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Import Certificate Authority (CA) Response to a CSR
     * @param {String} environmentID 
     * @param {String} keyID 
     * @param {File} file 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Certificate}
     */
    importCSRResponse(environmentID, keyID, file) {
      return this.importCSRResponseWithHttpInfo(environmentID, keyID, file)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * UPDATE Key
     * @param {String} environmentID 
     * @param {String} keyID 
     * @param {Object} opts Optional parameters
     * @param {module:model/CertificateKeyUpdate} [certificateKeyUpdate] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Certificate} and HTTP response
     */
    updateKeyWithHttpInfo(environmentID, keyID, opts) {
      opts = opts || {};
      let postBody = opts['certificateKeyUpdate'];
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling updateKey");
      }
      // verify the required parameter 'keyID' is set
      if (keyID === undefined || keyID === null) {
        throw new Error("Missing the required parameter 'keyID' when calling updateKey");
      }

      let pathParams = {
        'environmentID': environmentID,
        'keyID': keyID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Certificate;
      return this.apiClient.callApi(
        '/environments/{environmentID}/keys/{keyID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * UPDATE Key
     * @param {String} environmentID 
     * @param {String} keyID 
     * @param {Object} opts Optional parameters
     * @param {module:model/CertificateKeyUpdate} opts.certificateKeyUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Certificate}
     */
    updateKey(environmentID, keyID, opts) {
      return this.updateKeyWithHttpInfo(environmentID, keyID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
