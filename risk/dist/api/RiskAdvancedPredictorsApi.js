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
import RiskPredictor from '../model/RiskPredictor';

/**
* RiskAdvancedPredictors service.
* @module api/RiskAdvancedPredictorsApi
* @version 2023-06-29
*/
export default class RiskAdvancedPredictorsApi {
  /**
  * Constructs a new RiskAdvancedPredictorsApi. 
  * @alias module:api/RiskAdvancedPredictorsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * CREATE Risk Predictor
   * @param {String} environmentID 
   * @param {Object} opts Optional parameters
   * @param {module:model/RiskPredictor} [riskPredictor] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RiskPredictor} and HTTP response
   */
  createRiskPredictorWithHttpInfo(environmentID, opts) {
    opts = opts || {};
    let postBody = opts['riskPredictor'];
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling createRiskPredictor");
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
    let returnType = RiskPredictor;
    return this.apiClient.callApi('/environments/{environmentID}/riskPredictors', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * CREATE Risk Predictor
   * @param {String} environmentID 
   * @param {Object} opts Optional parameters
   * @param {module:model/RiskPredictor} opts.riskPredictor 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RiskPredictor}
   */
  createRiskPredictor(environmentID, opts) {
    return this.createRiskPredictorWithHttpInfo(environmentID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * DELETE Risk Advanced Predictor
   * @param {String} environmentID 
   * @param {String} riskPredictorID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  deleteRiskAdvancedPredictorWithHttpInfo(environmentID, riskPredictorID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling deleteRiskAdvancedPredictor");
    }
    // verify the required parameter 'riskPredictorID' is set
    if (riskPredictorID === undefined || riskPredictorID === null) {
      throw new Error("Missing the required parameter 'riskPredictorID' when calling deleteRiskAdvancedPredictor");
    }
    let pathParams = {
      'environmentID': environmentID,
      'riskPredictorID': riskPredictorID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi('/environments/{environmentID}/riskPredictors/{riskPredictorID}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * DELETE Risk Advanced Predictor
   * @param {String} environmentID 
   * @param {String} riskPredictorID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  deleteRiskAdvancedPredictor(environmentID, riskPredictorID) {
    return this.deleteRiskAdvancedPredictorWithHttpInfo(environmentID, riskPredictorID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * READ All Risk Predictors
   * @param {String} environmentID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityArray} and HTTP response
   */
  readAllRiskPredictorsWithHttpInfo(environmentID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readAllRiskPredictors");
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
    let returnType = EntityArray;
    return this.apiClient.callApi('/environments/{environmentID}/riskPredictors', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ All Risk Predictors
   * @param {String} environmentID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityArray}
   */
  readAllRiskPredictors(environmentID) {
    return this.readAllRiskPredictorsWithHttpInfo(environmentID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * READ One Risk Predictor
   * @param {String} environmentID 
   * @param {String} riskPredictorID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RiskPredictor} and HTTP response
   */
  readOneRiskPredictorWithHttpInfo(environmentID, riskPredictorID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readOneRiskPredictor");
    }
    // verify the required parameter 'riskPredictorID' is set
    if (riskPredictorID === undefined || riskPredictorID === null) {
      throw new Error("Missing the required parameter 'riskPredictorID' when calling readOneRiskPredictor");
    }
    let pathParams = {
      'environmentID': environmentID,
      'riskPredictorID': riskPredictorID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = RiskPredictor;
    return this.apiClient.callApi('/environments/{environmentID}/riskPredictors/{riskPredictorID}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ One Risk Predictor
   * @param {String} environmentID 
   * @param {String} riskPredictorID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RiskPredictor}
   */
  readOneRiskPredictor(environmentID, riskPredictorID) {
    return this.readOneRiskPredictorWithHttpInfo(environmentID, riskPredictorID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * UPDATE Risk Predictor
   * @param {String} environmentID 
   * @param {String} riskPredictorID 
   * @param {Object} opts Optional parameters
   * @param {module:model/RiskPredictor} [riskPredictor] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RiskPredictor} and HTTP response
   */
  updateRiskPredictorWithHttpInfo(environmentID, riskPredictorID, opts) {
    opts = opts || {};
    let postBody = opts['riskPredictor'];
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling updateRiskPredictor");
    }
    // verify the required parameter 'riskPredictorID' is set
    if (riskPredictorID === undefined || riskPredictorID === null) {
      throw new Error("Missing the required parameter 'riskPredictorID' when calling updateRiskPredictor");
    }
    let pathParams = {
      'environmentID': environmentID,
      'riskPredictorID': riskPredictorID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = RiskPredictor;
    return this.apiClient.callApi('/environments/{environmentID}/riskPredictors/{riskPredictorID}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * UPDATE Risk Predictor
   * @param {String} environmentID 
   * @param {String} riskPredictorID 
   * @param {Object} opts Optional parameters
   * @param {module:model/RiskPredictor} opts.riskPredictor 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RiskPredictor}
   */
  updateRiskPredictor(environmentID, riskPredictorID, opts) {
    return this.updateRiskPredictorWithHttpInfo(environmentID, riskPredictorID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}