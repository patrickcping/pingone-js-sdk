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
import MFASettings from '../model/MFASettings';
import P1Error from '../model/P1Error';

/**
* MFASettings service.
* @module api/MFASettingsApi
* @version 2023-06-29
*/
export default class MFASettingsApi {
  /**
  * Constructs a new MFASettingsApi. 
  * @alias module:api/MFASettingsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * READ MFA Settings
   * @param {String} environmentID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MFASettings} and HTTP response
   */
  readMFASettingsWithHttpInfo(environmentID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readMFASettings");
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
    let returnType = MFASettings;
    return this.apiClient.callApi('/environments/{environmentID}/mfaSettings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ MFA Settings
   * @param {String} environmentID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MFASettings}
   */
  readMFASettings(environmentID) {
    return this.readMFASettingsWithHttpInfo(environmentID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * RESET MFA Settings
   * @param {String} environmentID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MFASettings} and HTTP response
   */
  resetMFASettingsWithHttpInfo(environmentID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling resetMFASettings");
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
    let returnType = MFASettings;
    return this.apiClient.callApi('/environments/{environmentID}/mfaSettings', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * RESET MFA Settings
   * @param {String} environmentID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MFASettings}
   */
  resetMFASettings(environmentID) {
    return this.resetMFASettingsWithHttpInfo(environmentID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * UPDATE MFA Settings
   * @param {String} environmentID 
   * @param {Object} opts Optional parameters
   * @param {module:model/MFASettings} [mFASettings] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MFASettings} and HTTP response
   */
  updateMFASettingsWithHttpInfo(environmentID, opts) {
    opts = opts || {};
    let postBody = opts['mFASettings'];
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling updateMFASettings");
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
    let returnType = MFASettings;
    return this.apiClient.callApi('/environments/{environmentID}/mfaSettings', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * UPDATE MFA Settings
   * @param {String} environmentID 
   * @param {Object} opts Optional parameters
   * @param {module:model/MFASettings} opts.mFASettings 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MFASettings}
   */
  updateMFASettings(environmentID, opts) {
    return this.updateMFASettingsWithHttpInfo(environmentID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}