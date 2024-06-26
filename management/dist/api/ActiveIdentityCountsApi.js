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
import P1Error from '../model/P1Error';

/**
* ActiveIdentityCounts service.
* @module api/ActiveIdentityCountsApi
* @version 2023-06-29
*/
export default class ActiveIdentityCountsApi {
  /**
  * Constructs a new ActiveIdentityCountsApi. 
  * @alias module:api/ActiveIdentityCountsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * READ Active Identity Counts (Deprecated)
   * @param {String} environmentID 
   * @param {Object} opts Optional parameters
   * @param {String} [filter] 
   * @param {Number} [limit] 
   * @param {String} [order] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  environmentsEnvironmentIDActiveIdentityCountsGetWithHttpInfo(environmentID, opts) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling environmentsEnvironmentIDActiveIdentityCountsGet");
    }
    let pathParams = {
      'environmentID': environmentID
    };
    let queryParams = {
      'filter': opts['filter'],
      'limit': opts['limit'],
      'order': opts['order']
    };
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi('/environments/{environmentID}/activeIdentityCounts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ Active Identity Counts (Deprecated)
   * @param {String} environmentID 
   * @param {Object} opts Optional parameters
   * @param {String} opts.filter 
   * @param {Number} opts.limit 
   * @param {String} opts.order 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  environmentsEnvironmentIDActiveIdentityCountsGet(environmentID, opts) {
    return this.environmentsEnvironmentIDActiveIdentityCountsGetWithHttpInfo(environmentID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * READ Active Identity Counts by Date Range
   * @param {String} environmentID 
   * @param {Object} opts Optional parameters
   * @param {String} [filter] 
   * @param {Number} [limit] 
   * @param {String} [order] 
   * @param {String} [samplePeriod] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  environmentsEnvironmentIDMetricsActiveIdentityCountsGetWithHttpInfo(environmentID, opts) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling environmentsEnvironmentIDMetricsActiveIdentityCountsGet");
    }
    let pathParams = {
      'environmentID': environmentID
    };
    let queryParams = {
      'filter': opts['filter'],
      'limit': opts['limit'],
      'order': opts['order'],
      'samplePeriod': opts['samplePeriod']
    };
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi('/environments/{environmentID}/metrics/activeIdentityCounts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ Active Identity Counts by Date Range
   * @param {String} environmentID 
   * @param {Object} opts Optional parameters
   * @param {String} opts.filter 
   * @param {Number} opts.limit 
   * @param {String} opts.order 
   * @param {String} opts.samplePeriod 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  environmentsEnvironmentIDMetricsActiveIdentityCountsGet(environmentID, opts) {
    return this.environmentsEnvironmentIDMetricsActiveIdentityCountsGetWithHttpInfo(environmentID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * READ Active Identity Counts by License
   * @param {String} organizationID 
   * @param {String} licenseID 
   * @param {Object} opts Optional parameters
   * @param {String} [aggregatedBy] 
   * @param {Number} [limit] 
   * @param {String} [order] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  readActiveIdentityCountWithHttpInfo(organizationID, licenseID, opts) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'organizationID' is set
    if (organizationID === undefined || organizationID === null) {
      throw new Error("Missing the required parameter 'organizationID' when calling readActiveIdentityCount");
    }
    // verify the required parameter 'licenseID' is set
    if (licenseID === undefined || licenseID === null) {
      throw new Error("Missing the required parameter 'licenseID' when calling readActiveIdentityCount");
    }
    let pathParams = {
      'organizationID': organizationID,
      'licenseID': licenseID
    };
    let queryParams = {
      'aggregatedBy': opts['aggregatedBy'],
      'limit': opts['limit'],
      'order': opts['order']
    };
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi('/organizations/{organizationID}/licenses/{licenseID}/metrics/activeIdentityCounts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ Active Identity Counts by License
   * @param {String} organizationID 
   * @param {String} licenseID 
   * @param {Object} opts Optional parameters
   * @param {String} opts.aggregatedBy 
   * @param {Number} opts.limit 
   * @param {String} opts.order 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  readActiveIdentityCount(organizationID, licenseID, opts) {
    return this.readActiveIdentityCountWithHttpInfo(organizationID, licenseID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}