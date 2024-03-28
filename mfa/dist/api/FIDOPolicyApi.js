/**
 * PingOne Platform API - PingOne MFA
 * The PingOne Platform API covering the PingOne MFA service
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
import FIDOPolicy from '../model/FIDOPolicy';
import P1Error from '../model/P1Error';

/**
* FIDOPolicy service.
* @module api/FIDOPolicyApi
* @version 2023-06-29
*/
export default class FIDOPolicyApi {
  /**
  * Constructs a new FIDOPolicyApi. 
  * @alias module:api/FIDOPolicyApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * CREATE FIDO Policy
   * @param {String} environmentID 
   * @param {Object} opts Optional parameters
   * @param {module:model/FIDOPolicy} [fIDOPolicy] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FIDOPolicy} and HTTP response
   */
  createFidoPolicyWithHttpInfo(environmentID, opts) {
    opts = opts || {};
    let postBody = opts['fIDOPolicy'];
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling createFidoPolicy");
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
    let returnType = FIDOPolicy;
    return this.apiClient.callApi('/environments/{environmentID}/fidoPolicies', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * CREATE FIDO Policy
   * @param {String} environmentID 
   * @param {Object} opts Optional parameters
   * @param {module:model/FIDOPolicy} opts.fIDOPolicy 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FIDOPolicy}
   */
  createFidoPolicy(environmentID, opts) {
    return this.createFidoPolicyWithHttpInfo(environmentID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * DELETE FIDO Policy
   * @param {String} environmentID 
   * @param {String} fidoPolicyID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  deleteFidoPolicyWithHttpInfo(environmentID, fidoPolicyID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling deleteFidoPolicy");
    }
    // verify the required parameter 'fidoPolicyID' is set
    if (fidoPolicyID === undefined || fidoPolicyID === null) {
      throw new Error("Missing the required parameter 'fidoPolicyID' when calling deleteFidoPolicy");
    }
    let pathParams = {
      'environmentID': environmentID,
      'fidoPolicyID': fidoPolicyID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi('/environments/{environmentID}/fidoPolicies/{fidoPolicyID}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * DELETE FIDO Policy
   * @param {String} environmentID 
   * @param {String} fidoPolicyID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  deleteFidoPolicy(environmentID, fidoPolicyID) {
    return this.deleteFidoPolicyWithHttpInfo(environmentID, fidoPolicyID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * READ FIDO Policies
   * @param {String} environmentID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityArray} and HTTP response
   */
  readFidoPoliciesWithHttpInfo(environmentID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readFidoPolicies");
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
    return this.apiClient.callApi('/environments/{environmentID}/fidoPolicies', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ FIDO Policies
   * @param {String} environmentID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityArray}
   */
  readFidoPolicies(environmentID) {
    return this.readFidoPoliciesWithHttpInfo(environmentID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * READ One FIDO Policy
   * @param {String} environmentID 
   * @param {String} fidoPolicyID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FIDOPolicy} and HTTP response
   */
  readOneFidoPolicyWithHttpInfo(environmentID, fidoPolicyID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readOneFidoPolicy");
    }
    // verify the required parameter 'fidoPolicyID' is set
    if (fidoPolicyID === undefined || fidoPolicyID === null) {
      throw new Error("Missing the required parameter 'fidoPolicyID' when calling readOneFidoPolicy");
    }
    let pathParams = {
      'environmentID': environmentID,
      'fidoPolicyID': fidoPolicyID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = FIDOPolicy;
    return this.apiClient.callApi('/environments/{environmentID}/fidoPolicies/{fidoPolicyID}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ One FIDO Policy
   * @param {String} environmentID 
   * @param {String} fidoPolicyID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FIDOPolicy}
   */
  readOneFidoPolicy(environmentID, fidoPolicyID) {
    return this.readOneFidoPolicyWithHttpInfo(environmentID, fidoPolicyID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * UPDATE FIDO Policy
   * @param {String} environmentID 
   * @param {String} fidoPolicyID 
   * @param {Object} opts Optional parameters
   * @param {module:model/FIDOPolicy} [fIDOPolicy] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FIDOPolicy} and HTTP response
   */
  updateFIDOPolicyWithHttpInfo(environmentID, fidoPolicyID, opts) {
    opts = opts || {};
    let postBody = opts['fIDOPolicy'];
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling updateFIDOPolicy");
    }
    // verify the required parameter 'fidoPolicyID' is set
    if (fidoPolicyID === undefined || fidoPolicyID === null) {
      throw new Error("Missing the required parameter 'fidoPolicyID' when calling updateFIDOPolicy");
    }
    let pathParams = {
      'environmentID': environmentID,
      'fidoPolicyID': fidoPolicyID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = FIDOPolicy;
    return this.apiClient.callApi('/environments/{environmentID}/fidoPolicies/{fidoPolicyID}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * UPDATE FIDO Policy
   * @param {String} environmentID 
   * @param {String} fidoPolicyID 
   * @param {Object} opts Optional parameters
   * @param {module:model/FIDOPolicy} opts.fIDOPolicy 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FIDOPolicy}
   */
  updateFIDOPolicy(environmentID, fidoPolicyID, opts) {
    return this.updateFIDOPolicyWithHttpInfo(environmentID, fidoPolicyID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}