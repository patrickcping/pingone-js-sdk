/**
 * PingOne Platform API - Credentials
 * The PingOne Platform API covering the PingOne Credentials service
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
import CredentialType from '../model/CredentialType';
import EntityArray from '../model/EntityArray';
import P1Error from '../model/P1Error';

/**
* CredentialTypes service.
* @module api/CredentialTypesApi
* @version 2023-06-29
*/
export default class CredentialTypesApi {
  /**
  * Constructs a new CredentialTypesApi. 
  * @alias module:api/CredentialTypesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Create Credential Type
   * @param {String} environmentID 
   * @param {Object} opts Optional parameters
   * @param {module:model/CredentialType} [credentialType] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CredentialType} and HTTP response
   */
  createCredentialTypeWithHttpInfo(environmentID, opts) {
    opts = opts || {};
    let postBody = opts['credentialType'];
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling createCredentialType");
    }
    let pathParams = {
      'environmentID': environmentID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = CredentialType;
    return this.apiClient.callApi('/environments/{environmentID}/credentialTypes', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * Create Credential Type
   * @param {String} environmentID 
   * @param {Object} opts Optional parameters
   * @param {module:model/CredentialType} opts.credentialType 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CredentialType}
   */
  createCredentialType(environmentID, opts) {
    return this.createCredentialTypeWithHttpInfo(environmentID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Delete a Credential Type
   * @param {String} environmentID 
   * @param {String} credentialTypeID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  deleteCredentialTypeWithHttpInfo(environmentID, credentialTypeID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling deleteCredentialType");
    }
    // verify the required parameter 'credentialTypeID' is set
    if (credentialTypeID === undefined || credentialTypeID === null) {
      throw new Error("Missing the required parameter 'credentialTypeID' when calling deleteCredentialType");
    }
    let pathParams = {
      'environmentID': environmentID,
      'credentialTypeID': credentialTypeID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi('/environments/{environmentID}/credentialTypes/{credentialTypeID}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * Delete a Credential Type
   * @param {String} environmentID 
   * @param {String} credentialTypeID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  deleteCredentialType(environmentID, credentialTypeID) {
    return this.deleteCredentialTypeWithHttpInfo(environmentID, credentialTypeID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Read All Credential Types
   * @param {String} environmentID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityArray} and HTTP response
   */
  readAllCredentialTypesWithHttpInfo(environmentID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readAllCredentialTypes");
    }
    let pathParams = {
      'environmentID': environmentID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = EntityArray;
    return this.apiClient.callApi('/environments/{environmentID}/credentialTypes', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * Read All Credential Types
   * @param {String} environmentID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityArray}
   */
  readAllCredentialTypes(environmentID) {
    return this.readAllCredentialTypesWithHttpInfo(environmentID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Read One Credential Type
   * @param {String} environmentID 
   * @param {String} credentialTypeID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CredentialType} and HTTP response
   */
  readOneCredentialTypeWithHttpInfo(environmentID, credentialTypeID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readOneCredentialType");
    }
    // verify the required parameter 'credentialTypeID' is set
    if (credentialTypeID === undefined || credentialTypeID === null) {
      throw new Error("Missing the required parameter 'credentialTypeID' when calling readOneCredentialType");
    }
    let pathParams = {
      'environmentID': environmentID,
      'credentialTypeID': credentialTypeID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = CredentialType;
    return this.apiClient.callApi('/environments/{environmentID}/credentialTypes/{credentialTypeID}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * Read One Credential Type
   * @param {String} environmentID 
   * @param {String} credentialTypeID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CredentialType}
   */
  readOneCredentialType(environmentID, credentialTypeID) {
    return this.readOneCredentialTypeWithHttpInfo(environmentID, credentialTypeID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Update a Credential Type
   * @param {String} environmentID 
   * @param {String} credentialTypeID 
   * @param {Object} opts Optional parameters
   * @param {module:model/CredentialType} [credentialType] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CredentialType} and HTTP response
   */
  updateCredentialTypeWithHttpInfo(environmentID, credentialTypeID, opts) {
    opts = opts || {};
    let postBody = opts['credentialType'];
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling updateCredentialType");
    }
    // verify the required parameter 'credentialTypeID' is set
    if (credentialTypeID === undefined || credentialTypeID === null) {
      throw new Error("Missing the required parameter 'credentialTypeID' when calling updateCredentialType");
    }
    let pathParams = {
      'environmentID': environmentID,
      'credentialTypeID': credentialTypeID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = CredentialType;
    return this.apiClient.callApi('/environments/{environmentID}/credentialTypes/{credentialTypeID}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * Update a Credential Type
   * @param {String} environmentID 
   * @param {String} credentialTypeID 
   * @param {Object} opts Optional parameters
   * @param {module:model/CredentialType} opts.credentialType 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CredentialType}
   */
  updateCredentialType(environmentID, credentialTypeID, opts) {
    return this.updateCredentialTypeWithHttpInfo(environmentID, credentialTypeID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}