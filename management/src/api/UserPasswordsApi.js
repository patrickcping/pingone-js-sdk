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
* UserPasswords service.
* @module api/UserPasswordsApi
* @version 2023-06-29
*/
export default class UserPasswordsApi {

    /**
    * Constructs a new UserPasswordsApi. 
    * @alias module:api/UserPasswordsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * READ Password State
     * @param {String} environmentID 
     * @param {String} userID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    environmentsEnvironmentIDUsersUserIDPasswordGetWithHttpInfo(environmentID, userID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling environmentsEnvironmentIDUsersUserIDPasswordGet");
      }
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling environmentsEnvironmentIDUsersUserIDPasswordGet");
      }

      let pathParams = {
        'environmentID': environmentID,
        'userID': userID
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
        '/environments/{environmentID}/users/{userID}/password', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * READ Password State
     * @param {String} environmentID 
     * @param {String} userID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    environmentsEnvironmentIDUsersUserIDPasswordGet(environmentID, userID) {
      return this.environmentsEnvironmentIDUsersUserIDPasswordGetWithHttpInfo(environmentID, userID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Password Locked Out
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {Object} opts Optional parameters
     * @param {String} [contentType] 
     * @param {Object.<String, Object>} [body] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    environmentsEnvironmentIDUsersUserIDPasswordPostWithHttpInfo(environmentID, userID, opts) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling environmentsEnvironmentIDUsersUserIDPasswordPost");
      }
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling environmentsEnvironmentIDUsersUserIDPasswordPost");
      }

      let pathParams = {
        'environmentID': environmentID,
        'userID': userID
      };
      let queryParams = {
      };
      let headerParams = {
        'content-type': opts['contentType']
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/environments/{environmentID}/users/{userID}/password', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Password Locked Out
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {Object} opts Optional parameters
     * @param {String} opts.contentType 
     * @param {Object.<String, Object>} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    environmentsEnvironmentIDUsersUserIDPasswordPost(environmentID, userID, opts) {
      return this.environmentsEnvironmentIDUsersUserIDPasswordPostWithHttpInfo(environmentID, userID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * UPDATE Password (Set)
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {Object} opts Optional parameters
     * @param {String} [contentType] 
     * @param {Object.<String, Object>} [body] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    environmentsEnvironmentIDUsersUserIDPasswordPutWithHttpInfo(environmentID, userID, opts) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling environmentsEnvironmentIDUsersUserIDPasswordPut");
      }
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling environmentsEnvironmentIDUsersUserIDPasswordPut");
      }

      let pathParams = {
        'environmentID': environmentID,
        'userID': userID
      };
      let queryParams = {
      };
      let headerParams = {
        'Content-Type': opts['contentType']
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/environments/{environmentID}/users/{userID}/password', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * UPDATE Password (Set)
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {Object} opts Optional parameters
     * @param {String} opts.contentType 
     * @param {Object.<String, Object>} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    environmentsEnvironmentIDUsersUserIDPasswordPut(environmentID, userID, opts) {
      return this.environmentsEnvironmentIDUsersUserIDPasswordPutWithHttpInfo(environmentID, userID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
