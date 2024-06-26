/**
 * PingOne Platform API - PingOne Risk
 * The PingOne Platform API covering the PingOne Risk service
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
import EntityArray from '../model/EntityArray';
import P1Error from '../model/P1Error';
import RiskPolicySet from '../model/RiskPolicySet';

/**
* RiskPolicies service.
* @module api/RiskPoliciesApi
* @version 2023-06-29
*/
export default class RiskPoliciesApi {

    /**
    * Constructs a new RiskPoliciesApi. 
    * @alias module:api/RiskPoliciesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * CREATE Risk Policy Set
     * @param {String} environmentID 
     * @param {Object} opts Optional parameters
     * @param {module:model/RiskPolicySet} [riskPolicySet] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RiskPolicySet} and HTTP response
     */
    createRiskPolicySetWithHttpInfo(environmentID, opts) {
      opts = opts || {};
      let postBody = opts['riskPolicySet'];
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling createRiskPolicySet");
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
      let returnType = RiskPolicySet;
      return this.apiClient.callApi(
        '/environments/{environmentID}/riskPolicySets', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * CREATE Risk Policy Set
     * @param {String} environmentID 
     * @param {Object} opts Optional parameters
     * @param {module:model/RiskPolicySet} opts.riskPolicySet 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RiskPolicySet}
     */
    createRiskPolicySet(environmentID, opts) {
      return this.createRiskPolicySetWithHttpInfo(environmentID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * DELETE Risk Policy Set 
     * @param {String} environmentID 
     * @param {String} riskPolicySetID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteRiskPolicySetWithHttpInfo(environmentID, riskPolicySetID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling deleteRiskPolicySet");
      }
      // verify the required parameter 'riskPolicySetID' is set
      if (riskPolicySetID === undefined || riskPolicySetID === null) {
        throw new Error("Missing the required parameter 'riskPolicySetID' when calling deleteRiskPolicySet");
      }

      let pathParams = {
        'environmentID': environmentID,
        'riskPolicySetID': riskPolicySetID
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
        '/environments/{environmentID}/riskPolicySets/{riskPolicySetID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * DELETE Risk Policy Set 
     * @param {String} environmentID 
     * @param {String} riskPolicySetID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteRiskPolicySet(environmentID, riskPolicySetID) {
      return this.deleteRiskPolicySetWithHttpInfo(environmentID, riskPolicySetID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * READ One Risk Policy Set
     * @param {String} environmentID 
     * @param {String} riskPolicySetID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RiskPolicySet} and HTTP response
     */
    readOneRiskPolicySetWithHttpInfo(environmentID, riskPolicySetID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling readOneRiskPolicySet");
      }
      // verify the required parameter 'riskPolicySetID' is set
      if (riskPolicySetID === undefined || riskPolicySetID === null) {
        throw new Error("Missing the required parameter 'riskPolicySetID' when calling readOneRiskPolicySet");
      }

      let pathParams = {
        'environmentID': environmentID,
        'riskPolicySetID': riskPolicySetID
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
      let returnType = RiskPolicySet;
      return this.apiClient.callApi(
        '/environments/{environmentID}/riskPolicySets/{riskPolicySetID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * READ One Risk Policy Set
     * @param {String} environmentID 
     * @param {String} riskPolicySetID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RiskPolicySet}
     */
    readOneRiskPolicySet(environmentID, riskPolicySetID) {
      return this.readOneRiskPolicySetWithHttpInfo(environmentID, riskPolicySetID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * READ Risk Policy Sets
     * @param {String} environmentID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityArray} and HTTP response
     */
    readRiskPolicySetsWithHttpInfo(environmentID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling readRiskPolicySets");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EntityArray;
      return this.apiClient.callApi(
        '/environments/{environmentID}/riskPolicySets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * READ Risk Policy Sets
     * @param {String} environmentID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityArray}
     */
    readRiskPolicySets(environmentID) {
      return this.readRiskPolicySetsWithHttpInfo(environmentID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * UPDATE Risk Policy Set
     * @param {String} environmentID 
     * @param {String} riskPolicySetID 
     * @param {Object} opts Optional parameters
     * @param {module:model/RiskPolicySet} [riskPolicySet] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RiskPolicySet} and HTTP response
     */
    updateRiskPolicySetWithHttpInfo(environmentID, riskPolicySetID, opts) {
      opts = opts || {};
      let postBody = opts['riskPolicySet'];
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling updateRiskPolicySet");
      }
      // verify the required parameter 'riskPolicySetID' is set
      if (riskPolicySetID === undefined || riskPolicySetID === null) {
        throw new Error("Missing the required parameter 'riskPolicySetID' when calling updateRiskPolicySet");
      }

      let pathParams = {
        'environmentID': environmentID,
        'riskPolicySetID': riskPolicySetID
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
      let returnType = RiskPolicySet;
      return this.apiClient.callApi(
        '/environments/{environmentID}/riskPolicySets/{riskPolicySetID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * UPDATE Risk Policy Set
     * @param {String} environmentID 
     * @param {String} riskPolicySetID 
     * @param {Object} opts Optional parameters
     * @param {module:model/RiskPolicySet} opts.riskPolicySet 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RiskPolicySet}
     */
    updateRiskPolicySet(environmentID, riskPolicySetID, opts) {
      return this.updateRiskPolicySetWithHttpInfo(environmentID, riskPolicySetID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
