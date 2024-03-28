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
import Environment from '../model/Environment';
import P1Error from '../model/P1Error';
import UpdateEnvironmentTypeRequest from '../model/UpdateEnvironmentTypeRequest';

/**
* Environments service.
* @module api/EnvironmentsApi
* @version 2023-06-29
*/
export default class EnvironmentsApi {
  /**
  * Constructs a new EnvironmentsApi. 
  * @alias module:api/EnvironmentsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * CREATE Environment (Active License)
   * @param {Object} opts Optional parameters
   * @param {module:model/Environment} [environment] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Environment} and HTTP response
   */
  createEnvironmentActiveLicenseWithHttpInfo(opts) {
    opts = opts || {};
    let postBody = opts['environment'];
    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = Environment;
    return this.apiClient.callApi('/environments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * CREATE Environment (Active License)
   * @param {Object} opts Optional parameters
   * @param {module:model/Environment} opts.environment 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Environment}
   */
  createEnvironmentActiveLicense(opts) {
    return this.createEnvironmentActiveLicenseWithHttpInfo(opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * DELETE Environment
   * @param {String} environmentID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  deleteEnvironmentWithHttpInfo(environmentID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling deleteEnvironment");
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
    let returnType = null;
    return this.apiClient.callApi('/environments/{environmentID}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * DELETE Environment
   * @param {String} environmentID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  deleteEnvironment(environmentID) {
    return this.deleteEnvironmentWithHttpInfo(environmentID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * READ All Environments
   * @param {Object} opts Optional parameters
   * @param {Number} [limit] Adding a paging value to limit the number of resources displayed per page
   * @param {String} [cursor] Adding a cursor value to retrieve the next page of results, used with the `limit` parameter. The cursor value is returned in the `_links.next.href` link in the response payload.
   * @param {String} [filter] Adding a SCIM filter for an environment to display only those resources associated with the specified environment. 'sw', 'eq' and 'and' are supported
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityArray} and HTTP response
   */
  readAllEnvironmentsWithHttpInfo(opts) {
    opts = opts || {};
    let postBody = null;
    let pathParams = {};
    let queryParams = {
      'limit': opts['limit'],
      'cursor': opts['cursor'],
      'filter': opts['filter']
    };
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = EntityArray;
    return this.apiClient.callApi('/environments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ All Environments
   * @param {Object} opts Optional parameters
   * @param {Number} opts.limit Adding a paging value to limit the number of resources displayed per page
   * @param {String} opts.cursor Adding a cursor value to retrieve the next page of results, used with the `limit` parameter. The cursor value is returned in the `_links.next.href` link in the response payload.
   * @param {String} opts.filter Adding a SCIM filter for an environment to display only those resources associated with the specified environment. 'sw', 'eq' and 'and' are supported
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityArray}
   */
  readAllEnvironments(opts) {
    return this.readAllEnvironmentsWithHttpInfo(opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * READ One Environment
   * @param {String} environmentID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Environment} and HTTP response
   */
  readOneEnvironmentWithHttpInfo(environmentID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readOneEnvironment");
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
    let returnType = Environment;
    return this.apiClient.callApi('/environments/{environmentID}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ One Environment
   * @param {String} environmentID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Environment}
   */
  readOneEnvironment(environmentID) {
    return this.readOneEnvironmentWithHttpInfo(environmentID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * UPDATE Environment
   * @param {String} environmentID 
   * @param {Object} opts Optional parameters
   * @param {module:model/Environment} [environment] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Environment} and HTTP response
   */
  updateEnvironmentWithHttpInfo(environmentID, opts) {
    opts = opts || {};
    let postBody = opts['environment'];
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling updateEnvironment");
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
    let returnType = Environment;
    return this.apiClient.callApi('/environments/{environmentID}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * UPDATE Environment
   * @param {String} environmentID 
   * @param {Object} opts Optional parameters
   * @param {module:model/Environment} opts.environment 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Environment}
   */
  updateEnvironment(environmentID, opts) {
    return this.updateEnvironmentWithHttpInfo(environmentID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * UPDATE Environment Type
   * @param {String} environmentID 
   * @param {Object} opts Optional parameters
   * @param {module:model/UpdateEnvironmentTypeRequest} [updateEnvironmentTypeRequest] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Environment} and HTTP response
   */
  updateEnvironmentTypeWithHttpInfo(environmentID, opts) {
    opts = opts || {};
    let postBody = opts['updateEnvironmentTypeRequest'];
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling updateEnvironmentType");
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
    let returnType = Environment;
    return this.apiClient.callApi('/environments/{environmentID}/type', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * UPDATE Environment Type
   * @param {String} environmentID 
   * @param {Object} opts Optional parameters
   * @param {module:model/UpdateEnvironmentTypeRequest} opts.updateEnvironmentTypeRequest 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Environment}
   */
  updateEnvironmentType(environmentID, opts) {
    return this.updateEnvironmentTypeWithHttpInfo(environmentID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}