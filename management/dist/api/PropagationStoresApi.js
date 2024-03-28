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
import EnumPropagationStoreConnectionStatusContentType from '../model/EnumPropagationStoreConnectionStatusContentType';
import P1Error from '../model/P1Error';
import PropagationStore from '../model/PropagationStore';

/**
* PropagationStores service.
* @module api/PropagationStoresApi
* @version 2023-06-29
*/
export default class PropagationStoresApi {
  /**
  * Constructs a new PropagationStoresApi. 
  * @alias module:api/PropagationStoresApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * CREATE Propagation Store
   * @param {String} environmentID 
   * @param {Object} opts Optional parameters
   * @param {module:model/PropagationStore} [propagationStore] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PropagationStore} and HTTP response
   */
  createPropagationStoreWithHttpInfo(environmentID, opts) {
    opts = opts || {};
    let postBody = opts['propagationStore'];
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling createPropagationStore");
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
    let returnType = PropagationStore;
    return this.apiClient.callApi('/environments/{environmentID}/propagation/stores', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * CREATE Propagation Store
   * @param {String} environmentID 
   * @param {Object} opts Optional parameters
   * @param {module:model/PropagationStore} opts.propagationStore 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PropagationStore}
   */
  createPropagationStore(environmentID, opts) {
    return this.createPropagationStoreWithHttpInfo(environmentID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * DELETE Store
   * @param {String} environmentID 
   * @param {String} storeID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  deletePropagationStoreWithHttpInfo(environmentID, storeID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling deletePropagationStore");
    }
    // verify the required parameter 'storeID' is set
    if (storeID === undefined || storeID === null) {
      throw new Error("Missing the required parameter 'storeID' when calling deletePropagationStore");
    }
    let pathParams = {
      'environmentID': environmentID,
      'storeID': storeID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi('/environments/{environmentID}/propagation/stores/{storeID}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * DELETE Store
   * @param {String} environmentID 
   * @param {String} storeID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  deletePropagationStore(environmentID, storeID) {
    return this.deletePropagationStoreWithHttpInfo(environmentID, storeID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * READ All Stores
   * @param {String} environmentID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityArray} and HTTP response
   */
  readAllStoresWithHttpInfo(environmentID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readAllStores");
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
    return this.apiClient.callApi('/environments/{environmentID}/propagation/stores', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ All Stores
   * @param {String} environmentID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityArray}
   */
  readAllStores(environmentID) {
    return this.readAllStoresWithHttpInfo(environmentID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * READ One Store
   * @param {String} environmentID 
   * @param {String} storeID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PropagationStore} and HTTP response
   */
  readOnePropagationStoreWithHttpInfo(environmentID, storeID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readOnePropagationStore");
    }
    // verify the required parameter 'storeID' is set
    if (storeID === undefined || storeID === null) {
      throw new Error("Missing the required parameter 'storeID' when calling readOnePropagationStore");
    }
    let pathParams = {
      'environmentID': environmentID,
      'storeID': storeID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = PropagationStore;
    return this.apiClient.callApi('/environments/{environmentID}/propagation/stores/{storeID}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ One Store
   * @param {String} environmentID 
   * @param {String} storeID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PropagationStore}
   */
  readOnePropagationStore(environmentID, storeID) {
    return this.readOnePropagationStoreWithHttpInfo(environmentID, storeID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * TEST Connection Configuration
   * @param {String} environmentID 
   * @param {Object} opts Optional parameters
   * @param {module:model/EnumPropagationStoreConnectionStatusContentType} [contentType] 
   * @param {module:model/PropagationStore} [propagationStore] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  testConnectionConfigurationWithHttpInfo(environmentID, opts) {
    opts = opts || {};
    let postBody = opts['propagationStore'];
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling testConnectionConfiguration");
    }
    let pathParams = {
      'environmentID': environmentID
    };
    let queryParams = {};
    let headerParams = {
      'Content-Type': opts['contentType']
    };
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi('/environments/{environmentID}/propagation/stores/connection/status', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * TEST Connection Configuration
   * @param {String} environmentID 
   * @param {Object} opts Optional parameters
   * @param {module:model/EnumPropagationStoreConnectionStatusContentType} opts.contentType 
   * @param {module:model/PropagationStore} opts.propagationStore 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  testConnectionConfiguration(environmentID, opts) {
    return this.testConnectionConfigurationWithHttpInfo(environmentID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * UPDATE Store
   * @param {String} environmentID 
   * @param {String} storeID 
   * @param {Object} opts Optional parameters
   * @param {module:model/PropagationStore} [propagationStore] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PropagationStore} and HTTP response
   */
  updatePropagationStoreWithHttpInfo(environmentID, storeID, opts) {
    opts = opts || {};
    let postBody = opts['propagationStore'];
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling updatePropagationStore");
    }
    // verify the required parameter 'storeID' is set
    if (storeID === undefined || storeID === null) {
      throw new Error("Missing the required parameter 'storeID' when calling updatePropagationStore");
    }
    let pathParams = {
      'environmentID': environmentID,
      'storeID': storeID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = PropagationStore;
    return this.apiClient.callApi('/environments/{environmentID}/propagation/stores/{storeID}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * UPDATE Store
   * @param {String} environmentID 
   * @param {String} storeID 
   * @param {Object} opts Optional parameters
   * @param {module:model/PropagationStore} opts.propagationStore 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PropagationStore}
   */
  updatePropagationStore(environmentID, storeID, opts) {
    return this.updatePropagationStoreWithHttpInfo(environmentID, storeID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}