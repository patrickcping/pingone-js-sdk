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
import EnumUserAccountContentTypeHeader from '../model/EnumUserAccountContentTypeHeader';
import P1Error from '../model/P1Error';
import User from '../model/User';
import UserAccount from '../model/UserAccount';

/**
* UserAccounts service.
* @module api/UserAccountsApi
* @version 2023-06-29
*/
export default class UserAccountsApi {
  /**
  * Constructs a new UserAccountsApi. 
  * @alias module:api/UserAccountsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * User Account
   * @param {String} environmentID 
   * @param {String} userID 
   * @param {Object} opts Optional parameters
   * @param {module:model/EnumUserAccountContentTypeHeader} [contentType] 
   * @param {module:model/UserAccount} [userAccount] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
   */
  userAccountWithHttpInfo(environmentID, userID, opts) {
    opts = opts || {};
    let postBody = opts['userAccount'];
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling userAccount");
    }
    // verify the required parameter 'userID' is set
    if (userID === undefined || userID === null) {
      throw new Error("Missing the required parameter 'userID' when calling userAccount");
    }
    let pathParams = {
      'environmentID': environmentID,
      'userID': userID
    };
    let queryParams = {};
    let headerParams = {
      'content-type': opts['contentType']
    };
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = User;
    return this.apiClient.callApi('/environments/{environmentID}/users/{userID}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * User Account
   * @param {String} environmentID 
   * @param {String} userID 
   * @param {Object} opts Optional parameters
   * @param {module:model/EnumUserAccountContentTypeHeader} opts.contentType 
   * @param {module:model/UserAccount} opts.userAccount 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
   */
  userAccount(environmentID, userID, opts) {
    return this.userAccountWithHttpInfo(environmentID, userID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}