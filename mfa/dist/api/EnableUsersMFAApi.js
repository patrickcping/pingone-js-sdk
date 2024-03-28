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
import P1Error from '../model/P1Error';
import UserMFAEnabled from '../model/UserMFAEnabled';

/**
* EnableUsersMFA service.
* @module api/EnableUsersMFAApi
* @version 2023-06-29
*/
export default class EnableUsersMFAApi {
  /**
  * Constructs a new EnableUsersMFAApi. 
  * @alias module:api/EnableUsersMFAApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * READ User MFA Enabled
   * @param {String} environmentID 
   * @param {String} userID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserMFAEnabled} and HTTP response
   */
  readUserMFAEnabledWithHttpInfo(environmentID, userID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readUserMFAEnabled");
    }
    // verify the required parameter 'userID' is set
    if (userID === undefined || userID === null) {
      throw new Error("Missing the required parameter 'userID' when calling readUserMFAEnabled");
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
    let returnType = UserMFAEnabled;
    return this.apiClient.callApi('/environments/{environmentID}/users/{userID}/mfaEnabled', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ User MFA Enabled
   * @param {String} environmentID 
   * @param {String} userID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserMFAEnabled}
   */
  readUserMFAEnabled(environmentID, userID) {
    return this.readUserMFAEnabledWithHttpInfo(environmentID, userID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * UPDATE User MFA Enabled
   * @param {String} environmentID 
   * @param {String} userID 
   * @param {Object} opts Optional parameters
   * @param {module:model/UserMFAEnabled} [userMFAEnabled] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserMFAEnabled} and HTTP response
   */
  updateUserMFAEnabledWithHttpInfo(environmentID, userID, opts) {
    opts = opts || {};
    let postBody = opts['userMFAEnabled'];
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling updateUserMFAEnabled");
    }
    // verify the required parameter 'userID' is set
    if (userID === undefined || userID === null) {
      throw new Error("Missing the required parameter 'userID' when calling updateUserMFAEnabled");
    }
    let pathParams = {
      'environmentID': environmentID,
      'userID': userID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = UserMFAEnabled;
    return this.apiClient.callApi('/environments/{environmentID}/users/{userID}/mfaEnabled', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * UPDATE User MFA Enabled
   * @param {String} environmentID 
   * @param {String} userID 
   * @param {Object} opts Optional parameters
   * @param {module:model/UserMFAEnabled} opts.userMFAEnabled 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserMFAEnabled}
   */
  updateUserMFAEnabled(environmentID, userID, opts) {
    return this.updateUserMFAEnabledWithHttpInfo(environmentID, userID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}