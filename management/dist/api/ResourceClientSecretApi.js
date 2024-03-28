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
import ResourceSecret from '../model/ResourceSecret';

/**
* ResourceClientSecret service.
* @module api/ResourceClientSecretApi
* @version 2023-06-29
*/
export default class ResourceClientSecretApi {
  /**
  * Constructs a new ResourceClientSecretApi. 
  * @alias module:api/ResourceClientSecretApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * CREATE Resource Client Secret
   * @param {String} environmentID 
   * @param {String} resourceID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceSecret} and HTTP response
   */
  createResourceSecretWithHttpInfo(environmentID, resourceID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling createResourceSecret");
    }
    // verify the required parameter 'resourceID' is set
    if (resourceID === undefined || resourceID === null) {
      throw new Error("Missing the required parameter 'resourceID' when calling createResourceSecret");
    }
    let pathParams = {
      'environmentID': environmentID,
      'resourceID': resourceID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = ResourceSecret;
    return this.apiClient.callApi('/environments/{environmentID}/resources/{resourceID}/secret', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * CREATE Resource Client Secret
   * @param {String} environmentID 
   * @param {String} resourceID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceSecret}
   */
  createResourceSecret(environmentID, resourceID) {
    return this.createResourceSecretWithHttpInfo(environmentID, resourceID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * READ Resource Client Secret
   * @param {String} environmentID 
   * @param {String} resourceID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceSecret} and HTTP response
   */
  readResourceSecretWithHttpInfo(environmentID, resourceID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readResourceSecret");
    }
    // verify the required parameter 'resourceID' is set
    if (resourceID === undefined || resourceID === null) {
      throw new Error("Missing the required parameter 'resourceID' when calling readResourceSecret");
    }
    let pathParams = {
      'environmentID': environmentID,
      'resourceID': resourceID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = ResourceSecret;
    return this.apiClient.callApi('/environments/{environmentID}/resources/{resourceID}/secret', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ Resource Client Secret
   * @param {String} environmentID 
   * @param {String} resourceID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceSecret}
   */
  readResourceSecret(environmentID, resourceID) {
    return this.readResourceSecretWithHttpInfo(environmentID, resourceID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}