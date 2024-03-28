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
import KeyRotationPolicy from '../model/KeyRotationPolicy';
import P1Error from '../model/P1Error';

/**
* KeyRotationPolicies service.
* @module api/KeyRotationPoliciesApi
* @version 2023-06-29
*/
export default class KeyRotationPoliciesApi {
  /**
  * Constructs a new KeyRotationPoliciesApi. 
  * @alias module:api/KeyRotationPoliciesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * CREATE Key Rotation Policy
   * @param {String} environmentID 
   * @param {Object} opts Optional parameters
   * @param {module:model/KeyRotationPolicy} [keyRotationPolicy] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/KeyRotationPolicy} and HTTP response
   */
  createKeyRotationPolicyWithHttpInfo(environmentID, opts) {
    opts = opts || {};
    let postBody = opts['keyRotationPolicy'];
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling createKeyRotationPolicy");
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
    let returnType = KeyRotationPolicy;
    return this.apiClient.callApi('/environments/{environmentID}/keyRotationPolicies', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * CREATE Key Rotation Policy
   * @param {String} environmentID 
   * @param {Object} opts Optional parameters
   * @param {module:model/KeyRotationPolicy} opts.keyRotationPolicy 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/KeyRotationPolicy}
   */
  createKeyRotationPolicy(environmentID, opts) {
    return this.createKeyRotationPolicyWithHttpInfo(environmentID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * DELETE Key Rotation Policy
   * @param {String} environmentID 
   * @param {String} keyRotationPolicyID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  deleteKeyRotationPolicyWithHttpInfo(environmentID, keyRotationPolicyID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling deleteKeyRotationPolicy");
    }
    // verify the required parameter 'keyRotationPolicyID' is set
    if (keyRotationPolicyID === undefined || keyRotationPolicyID === null) {
      throw new Error("Missing the required parameter 'keyRotationPolicyID' when calling deleteKeyRotationPolicy");
    }
    let pathParams = {
      'environmentID': environmentID,
      'keyRotationPolicyID': keyRotationPolicyID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi('/environments/{environmentID}/keyRotationPolicies/{keyRotationPolicyID}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * DELETE Key Rotation Policy
   * @param {String} environmentID 
   * @param {String} keyRotationPolicyID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  deleteKeyRotationPolicy(environmentID, keyRotationPolicyID) {
    return this.deleteKeyRotationPolicyWithHttpInfo(environmentID, keyRotationPolicyID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * GET Key Rotation Policies
   * @param {String} environmentID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityArray} and HTTP response
   */
  getKeyRotationPoliciesWithHttpInfo(environmentID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling getKeyRotationPolicies");
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
    return this.apiClient.callApi('/environments/{environmentID}/keyRotationPolicies', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * GET Key Rotation Policies
   * @param {String} environmentID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityArray}
   */
  getKeyRotationPolicies(environmentID) {
    return this.getKeyRotationPoliciesWithHttpInfo(environmentID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * GET Key Rotation Policy
   * @param {String} environmentID 
   * @param {String} keyRotationPolicyID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/KeyRotationPolicy} and HTTP response
   */
  getKeyRotationPolicyWithHttpInfo(environmentID, keyRotationPolicyID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling getKeyRotationPolicy");
    }
    // verify the required parameter 'keyRotationPolicyID' is set
    if (keyRotationPolicyID === undefined || keyRotationPolicyID === null) {
      throw new Error("Missing the required parameter 'keyRotationPolicyID' when calling getKeyRotationPolicy");
    }
    let pathParams = {
      'environmentID': environmentID,
      'keyRotationPolicyID': keyRotationPolicyID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = KeyRotationPolicy;
    return this.apiClient.callApi('/environments/{environmentID}/keyRotationPolicies/{keyRotationPolicyID}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * GET Key Rotation Policy
   * @param {String} environmentID 
   * @param {String} keyRotationPolicyID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/KeyRotationPolicy}
   */
  getKeyRotationPolicy(environmentID, keyRotationPolicyID) {
    return this.getKeyRotationPolicyWithHttpInfo(environmentID, keyRotationPolicyID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * UPDATE Key Rotation Policy
   * @param {String} environmentID 
   * @param {String} keyRotationPolicyID 
   * @param {Object} opts Optional parameters
   * @param {module:model/KeyRotationPolicy} [keyRotationPolicy] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/KeyRotationPolicy} and HTTP response
   */
  updateKeyRotationPolicyWithHttpInfo(environmentID, keyRotationPolicyID, opts) {
    opts = opts || {};
    let postBody = opts['keyRotationPolicy'];
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling updateKeyRotationPolicy");
    }
    // verify the required parameter 'keyRotationPolicyID' is set
    if (keyRotationPolicyID === undefined || keyRotationPolicyID === null) {
      throw new Error("Missing the required parameter 'keyRotationPolicyID' when calling updateKeyRotationPolicy");
    }
    let pathParams = {
      'environmentID': environmentID,
      'keyRotationPolicyID': keyRotationPolicyID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = KeyRotationPolicy;
    return this.apiClient.callApi('/environments/{environmentID}/keyRotationPolicies/{keyRotationPolicyID}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * UPDATE Key Rotation Policy
   * @param {String} environmentID 
   * @param {String} keyRotationPolicyID 
   * @param {Object} opts Optional parameters
   * @param {module:model/KeyRotationPolicy} opts.keyRotationPolicy 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/KeyRotationPolicy}
   */
  updateKeyRotationPolicy(environmentID, keyRotationPolicyID, opts) {
    return this.updateKeyRotationPolicyWithHttpInfo(environmentID, keyRotationPolicyID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}