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
* AuthenticationsPerApplication service.
* @module api/AuthenticationsPerApplicationApi
* @version 2023-06-29
*/
export default class AuthenticationsPerApplicationApi {

    /**
    * Constructs a new AuthenticationsPerApplicationApi. 
    * @alias module:api/AuthenticationsPerApplicationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * READ Authentications Per Application (Partial)
     * @param {String} environmentID 
     * @param {Object} opts Optional parameters
     * @param {Number} [limit] 
     * @param {Number} [samplePeriod] 
     * @param {Number} [samplePeriodCount] 
     * @param {String} [filter] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    environmentsEnvironmentIDApplicationSignonsGetWithHttpInfo(environmentID, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling environmentsEnvironmentIDApplicationSignonsGet");
      }

      let pathParams = {
        'environmentID': environmentID
      };
      let queryParams = {
        'limit': opts['limit'],
        'samplePeriod': opts['samplePeriod'],
        'samplePeriodCount': opts['samplePeriodCount'],
        'filter': opts['filter']
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
        '/environments/{environmentID}/applicationSignons', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * READ Authentications Per Application (Partial)
     * @param {String} environmentID 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit 
     * @param {Number} opts.samplePeriod 
     * @param {Number} opts.samplePeriodCount 
     * @param {String} opts.filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    environmentsEnvironmentIDApplicationSignonsGet(environmentID, opts) {
      return this.environmentsEnvironmentIDApplicationSignonsGetWithHttpInfo(environmentID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
