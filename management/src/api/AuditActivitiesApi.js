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
* AuditActivities service.
* @module api/AuditActivitiesApi
* @version 2023-06-29
*/
export default class AuditActivitiesApi {

    /**
    * Constructs a new AuditActivitiesApi. 
    * @alias module:api/AuditActivitiesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * GET One User Activity
     * @param {String} environmentID 
     * @param {String} activityID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    environmentsEnvironmentIDActivitiesActivityIDGetWithHttpInfo(environmentID, activityID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling environmentsEnvironmentIDActivitiesActivityIDGet");
      }
      // verify the required parameter 'activityID' is set
      if (activityID === undefined || activityID === null) {
        throw new Error("Missing the required parameter 'activityID' when calling environmentsEnvironmentIDActivitiesActivityIDGet");
      }

      let pathParams = {
        'environmentID': environmentID,
        'activityID': activityID
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
        '/environments/{environmentID}/activities/{activityID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * GET One User Activity
     * @param {String} environmentID 
     * @param {String} activityID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    environmentsEnvironmentIDActivitiesActivityIDGet(environmentID, activityID) {
      return this.environmentsEnvironmentIDActivitiesActivityIDGetWithHttpInfo(environmentID, activityID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET User Activities
     * @param {String} environmentID 
     * @param {Object} opts Optional parameters
     * @param {String} [filter] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    environmentsEnvironmentIDActivitiesGetWithHttpInfo(environmentID, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling environmentsEnvironmentIDActivitiesGet");
      }

      let pathParams = {
        'environmentID': environmentID
      };
      let queryParams = {
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
        '/environments/{environmentID}/activities', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * GET User Activities
     * @param {String} environmentID 
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    environmentsEnvironmentIDActivitiesGet(environmentID, opts) {
      return this.environmentsEnvironmentIDActivitiesGetWithHttpInfo(environmentID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET User Activities
     * @param {String} environmentID 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} [body] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    environmentsEnvironmentIDActivitiesPostWithHttpInfo(environmentID, opts) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling environmentsEnvironmentIDActivitiesPost");
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
        '/environments/{environmentID}/activities', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * GET User Activities
     * @param {String} environmentID 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    environmentsEnvironmentIDActivitiesPost(environmentID, opts) {
      return this.environmentsEnvironmentIDActivitiesPostWithHttpInfo(environmentID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
