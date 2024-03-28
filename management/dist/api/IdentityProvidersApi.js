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
import EntityArray from '../model/EntityArray';
import IdentityProvider from '../model/IdentityProvider';
import P1Error from '../model/P1Error';

/**
* IdentityProviders service.
* @module api/IdentityProvidersApi
* @version 2023-06-29
*/
export default class IdentityProvidersApi {
  /**
  * Constructs a new IdentityProvidersApi. 
  * @alias module:api/IdentityProvidersApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * CREATE Identity Provider
   * @param {String} environmentID 
   * @param {Object} opts Optional parameters
   * @param {module:model/IdentityProvider} [identityProvider] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IdentityProvider} and HTTP response
   */
  createIdentityProviderWithHttpInfo(environmentID, opts) {
    opts = opts || {};
    let postBody = opts['identityProvider'];
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling createIdentityProvider");
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
    let returnType = IdentityProvider;
    return this.apiClient.callApi('/environments/{environmentID}/identityProviders', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * CREATE Identity Provider
   * @param {String} environmentID 
   * @param {Object} opts Optional parameters
   * @param {module:model/IdentityProvider} opts.identityProvider 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IdentityProvider}
   */
  createIdentityProvider(environmentID, opts) {
    return this.createIdentityProviderWithHttpInfo(environmentID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * DELETE Identity Provider
   * @param {String} environmentID 
   * @param {String} providerID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  deleteIdentityProviderWithHttpInfo(environmentID, providerID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling deleteIdentityProvider");
    }
    // verify the required parameter 'providerID' is set
    if (providerID === undefined || providerID === null) {
      throw new Error("Missing the required parameter 'providerID' when calling deleteIdentityProvider");
    }
    let pathParams = {
      'environmentID': environmentID,
      'providerID': providerID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi('/environments/{environmentID}/identityProviders/{providerID}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * DELETE Identity Provider
   * @param {String} environmentID 
   * @param {String} providerID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  deleteIdentityProvider(environmentID, providerID) {
    return this.deleteIdentityProviderWithHttpInfo(environmentID, providerID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * READ All Identity Providers
   * @param {String} environmentID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityArray} and HTTP response
   */
  readAllIdentityProvidersWithHttpInfo(environmentID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readAllIdentityProviders");
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
    return this.apiClient.callApi('/environments/{environmentID}/identityProviders', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ All Identity Providers
   * @param {String} environmentID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityArray}
   */
  readAllIdentityProviders(environmentID) {
    return this.readAllIdentityProvidersWithHttpInfo(environmentID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * READ One Identity Provider
   * @param {String} environmentID 
   * @param {String} providerID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IdentityProvider} and HTTP response
   */
  readOneIdentityProviderWithHttpInfo(environmentID, providerID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readOneIdentityProvider");
    }
    // verify the required parameter 'providerID' is set
    if (providerID === undefined || providerID === null) {
      throw new Error("Missing the required parameter 'providerID' when calling readOneIdentityProvider");
    }
    let pathParams = {
      'environmentID': environmentID,
      'providerID': providerID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = IdentityProvider;
    return this.apiClient.callApi('/environments/{environmentID}/identityProviders/{providerID}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ One Identity Provider
   * @param {String} environmentID 
   * @param {String} providerID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IdentityProvider}
   */
  readOneIdentityProvider(environmentID, providerID) {
    return this.readOneIdentityProviderWithHttpInfo(environmentID, providerID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * UPDATE Identity Provider
   * @param {String} environmentID 
   * @param {String} providerID 
   * @param {Object} opts Optional parameters
   * @param {module:model/IdentityProvider} [identityProvider] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IdentityProvider} and HTTP response
   */
  updateIdentityProviderWithHttpInfo(environmentID, providerID, opts) {
    opts = opts || {};
    let postBody = opts['identityProvider'];
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling updateIdentityProvider");
    }
    // verify the required parameter 'providerID' is set
    if (providerID === undefined || providerID === null) {
      throw new Error("Missing the required parameter 'providerID' when calling updateIdentityProvider");
    }
    let pathParams = {
      'environmentID': environmentID,
      'providerID': providerID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = IdentityProvider;
    return this.apiClient.callApi('/environments/{environmentID}/identityProviders/{providerID}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * UPDATE Identity Provider
   * @param {String} environmentID 
   * @param {String} providerID 
   * @param {Object} opts Optional parameters
   * @param {module:model/IdentityProvider} opts.identityProvider 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IdentityProvider}
   */
  updateIdentityProvider(environmentID, providerID, opts) {
    return this.updateIdentityProviderWithHttpInfo(environmentID, providerID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}