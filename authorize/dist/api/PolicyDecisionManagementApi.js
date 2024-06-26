/**
 * PingOne Platform API - Authorize
 * The PingOne Platform API covering the PingOne Authorize service
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
import DecisionEndpoint from '../model/DecisionEndpoint';
import EntityArray from '../model/EntityArray';
import P1Error from '../model/P1Error';

/**
* PolicyDecisionManagement service.
* @module api/PolicyDecisionManagementApi
* @version 2023-06-29
*/
export default class PolicyDecisionManagementApi {
  /**
  * Constructs a new PolicyDecisionManagementApi. 
  * @alias module:api/PolicyDecisionManagementApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * CREATE Decision Endpoint
   * @param {String} environmentID 
   * @param {Object} opts Optional parameters
   * @param {module:model/DecisionEndpoint} [decisionEndpoint] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DecisionEndpoint} and HTTP response
   */
  createDecisionEndpointWithHttpInfo(environmentID, opts) {
    opts = opts || {};
    let postBody = opts['decisionEndpoint'];
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling createDecisionEndpoint");
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
    let returnType = DecisionEndpoint;
    return this.apiClient.callApi('/environments/{environmentID}/decisionEndpoints', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * CREATE Decision Endpoint
   * @param {String} environmentID 
   * @param {Object} opts Optional parameters
   * @param {module:model/DecisionEndpoint} opts.decisionEndpoint 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DecisionEndpoint}
   */
  createDecisionEndpoint(environmentID, opts) {
    return this.createDecisionEndpointWithHttpInfo(environmentID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * DELETE Decision Endpoint
   * @param {String} environmentID 
   * @param {String} decisionEndpointID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  deleteDecisionEndpointWithHttpInfo(environmentID, decisionEndpointID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling deleteDecisionEndpoint");
    }
    // verify the required parameter 'decisionEndpointID' is set
    if (decisionEndpointID === undefined || decisionEndpointID === null) {
      throw new Error("Missing the required parameter 'decisionEndpointID' when calling deleteDecisionEndpoint");
    }
    let pathParams = {
      'environmentID': environmentID,
      'decisionEndpointID': decisionEndpointID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi('/environments/{environmentID}/decisionEndpoints/{decisionEndpointID}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * DELETE Decision Endpoint
   * @param {String} environmentID 
   * @param {String} decisionEndpointID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  deleteDecisionEndpoint(environmentID, decisionEndpointID) {
    return this.deleteDecisionEndpointWithHttpInfo(environmentID, decisionEndpointID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * READ All Decision Endpoints
   * @param {String} environmentID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityArray} and HTTP response
   */
  readAllDecisionEndpointsWithHttpInfo(environmentID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readAllDecisionEndpoints");
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
    return this.apiClient.callApi('/environments/{environmentID}/decisionEndpoints', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ All Decision Endpoints
   * @param {String} environmentID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityArray}
   */
  readAllDecisionEndpoints(environmentID) {
    return this.readAllDecisionEndpointsWithHttpInfo(environmentID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * READ One Decision Endpoint
   * @param {String} environmentID 
   * @param {String} decisionEndpointID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DecisionEndpoint} and HTTP response
   */
  readOneDecisionEndpointWithHttpInfo(environmentID, decisionEndpointID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readOneDecisionEndpoint");
    }
    // verify the required parameter 'decisionEndpointID' is set
    if (decisionEndpointID === undefined || decisionEndpointID === null) {
      throw new Error("Missing the required parameter 'decisionEndpointID' when calling readOneDecisionEndpoint");
    }
    let pathParams = {
      'environmentID': environmentID,
      'decisionEndpointID': decisionEndpointID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = DecisionEndpoint;
    return this.apiClient.callApi('/environments/{environmentID}/decisionEndpoints/{decisionEndpointID}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ One Decision Endpoint
   * @param {String} environmentID 
   * @param {String} decisionEndpointID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DecisionEndpoint}
   */
  readOneDecisionEndpoint(environmentID, decisionEndpointID) {
    return this.readOneDecisionEndpointWithHttpInfo(environmentID, decisionEndpointID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * UPDATE Decision Endpoint
   * @param {String} environmentID 
   * @param {String} decisionEndpointID 
   * @param {Object} opts Optional parameters
   * @param {module:model/DecisionEndpoint} [decisionEndpoint] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DecisionEndpoint} and HTTP response
   */
  updateDecisionEndpointWithHttpInfo(environmentID, decisionEndpointID, opts) {
    opts = opts || {};
    let postBody = opts['decisionEndpoint'];
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling updateDecisionEndpoint");
    }
    // verify the required parameter 'decisionEndpointID' is set
    if (decisionEndpointID === undefined || decisionEndpointID === null) {
      throw new Error("Missing the required parameter 'decisionEndpointID' when calling updateDecisionEndpoint");
    }
    let pathParams = {
      'environmentID': environmentID,
      'decisionEndpointID': decisionEndpointID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = DecisionEndpoint;
    return this.apiClient.callApi('/environments/{environmentID}/decisionEndpoints/{decisionEndpointID}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * UPDATE Decision Endpoint
   * @param {String} environmentID 
   * @param {String} decisionEndpointID 
   * @param {Object} opts Optional parameters
   * @param {module:model/DecisionEndpoint} opts.decisionEndpoint 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DecisionEndpoint}
   */
  updateDecisionEndpoint(environmentID, decisionEndpointID, opts) {
    return this.updateDecisionEndpointWithHttpInfo(environmentID, decisionEndpointID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}