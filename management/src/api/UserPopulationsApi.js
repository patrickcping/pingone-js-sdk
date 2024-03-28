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
import UserPopulation from '../model/UserPopulation';

/**
* UserPopulations service.
* @module api/UserPopulationsApi
* @version 2023-06-29
*/
export default class UserPopulationsApi {

    /**
    * Constructs a new UserPopulationsApi. 
    * @alias module:api/UserPopulationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * READ User Population
     * @param {String} environmentID 
     * @param {String} userID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserPopulation} and HTTP response
     */
    readUserPopulationWithHttpInfo(environmentID, userID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling readUserPopulation");
      }
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling readUserPopulation");
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
      let returnType = UserPopulation;
      return this.apiClient.callApi(
        '/environments/{environmentID}/users/{userID}/population', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * READ User Population
     * @param {String} environmentID 
     * @param {String} userID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserPopulation}
     */
    readUserPopulation(environmentID, userID) {
      return this.readUserPopulationWithHttpInfo(environmentID, userID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * UPDATE User Population
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {Object} opts Optional parameters
     * @param {module:model/UserPopulation} [userPopulation] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserPopulation} and HTTP response
     */
    updateUserPopulationWithHttpInfo(environmentID, userID, opts) {
      opts = opts || {};
      let postBody = opts['userPopulation'];
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling updateUserPopulation");
      }
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling updateUserPopulation");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UserPopulation;
      return this.apiClient.callApi(
        '/environments/{environmentID}/users/{userID}/population', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * UPDATE User Population
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {Object} opts Optional parameters
     * @param {module:model/UserPopulation} opts.userPopulation 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserPopulation}
     */
    updateUserPopulation(environmentID, userID, opts) {
      return this.updateUserPopulationWithHttpInfo(environmentID, userID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}