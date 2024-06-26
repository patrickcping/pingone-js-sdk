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
* Sessions service.
* @module api/SessionsApi
* @version 2023-06-29
*/
export default class SessionsApi {
  /**
  * Constructs a new SessionsApi. 
  * @alias module:api/SessionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * READ All Sessions
   * @param {String} environmentID 
   * @param {String} userID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  environmentsEnvironmentIDUsersUserIDSessionsGetWithHttpInfo(environmentID, userID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling environmentsEnvironmentIDUsersUserIDSessionsGet");
    }
    // verify the required parameter 'userID' is set
    if (userID === undefined || userID === null) {
      throw new Error("Missing the required parameter 'userID' when calling environmentsEnvironmentIDUsersUserIDSessionsGet");
    }
    let pathParams = {
      'environmentID': environmentID,
      'userID': userID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi('/environments/{environmentID}/users/{userID}/sessions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ All Sessions
   * @param {String} environmentID 
   * @param {String} userID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  environmentsEnvironmentIDUsersUserIDSessionsGet(environmentID, userID) {
    return this.environmentsEnvironmentIDUsersUserIDSessionsGetWithHttpInfo(environmentID, userID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * DELETE Session
   * @param {String} environmentID 
   * @param {String} userID 
   * @param {String} sessionID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  environmentsEnvironmentIDUsersUserIDSessionsSessionIDDeleteWithHttpInfo(environmentID, userID, sessionID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling environmentsEnvironmentIDUsersUserIDSessionsSessionIDDelete");
    }
    // verify the required parameter 'userID' is set
    if (userID === undefined || userID === null) {
      throw new Error("Missing the required parameter 'userID' when calling environmentsEnvironmentIDUsersUserIDSessionsSessionIDDelete");
    }
    // verify the required parameter 'sessionID' is set
    if (sessionID === undefined || sessionID === null) {
      throw new Error("Missing the required parameter 'sessionID' when calling environmentsEnvironmentIDUsersUserIDSessionsSessionIDDelete");
    }
    let pathParams = {
      'environmentID': environmentID,
      'userID': userID,
      'sessionID': sessionID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi('/environments/{environmentID}/users/{userID}/sessions/{sessionID}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * DELETE Session
   * @param {String} environmentID 
   * @param {String} userID 
   * @param {String} sessionID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  environmentsEnvironmentIDUsersUserIDSessionsSessionIDDelete(environmentID, userID, sessionID) {
    return this.environmentsEnvironmentIDUsersUserIDSessionsSessionIDDeleteWithHttpInfo(environmentID, userID, sessionID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * READ One Session
   * @param {String} environmentID 
   * @param {String} userID 
   * @param {String} sessionID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  environmentsEnvironmentIDUsersUserIDSessionsSessionIDGetWithHttpInfo(environmentID, userID, sessionID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling environmentsEnvironmentIDUsersUserIDSessionsSessionIDGet");
    }
    // verify the required parameter 'userID' is set
    if (userID === undefined || userID === null) {
      throw new Error("Missing the required parameter 'userID' when calling environmentsEnvironmentIDUsersUserIDSessionsSessionIDGet");
    }
    // verify the required parameter 'sessionID' is set
    if (sessionID === undefined || sessionID === null) {
      throw new Error("Missing the required parameter 'sessionID' when calling environmentsEnvironmentIDUsersUserIDSessionsSessionIDGet");
    }
    let pathParams = {
      'environmentID': environmentID,
      'userID': userID,
      'sessionID': sessionID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi('/environments/{environmentID}/users/{userID}/sessions/{sessionID}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ One Session
   * @param {String} environmentID 
   * @param {String} userID 
   * @param {String} sessionID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  environmentsEnvironmentIDUsersUserIDSessionsSessionIDGet(environmentID, userID, sessionID) {
    return this.environmentsEnvironmentIDUsersUserIDSessionsSessionIDGetWithHttpInfo(environmentID, userID, sessionID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}