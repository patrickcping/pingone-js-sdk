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
import EntityArray from '../model/EntityArray';
import FlowPolicyAssignment from '../model/FlowPolicyAssignment';
import P1Error from '../model/P1Error';

/**
* ApplicationFlowPolicyAssignments service.
* @module api/ApplicationFlowPolicyAssignmentsApi
* @version 2023-06-29
*/
export default class ApplicationFlowPolicyAssignmentsApi {
  /**
  * Constructs a new ApplicationFlowPolicyAssignmentsApi. 
  * @alias module:api/ApplicationFlowPolicyAssignmentsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * CREATE Flow Assignment
   * @param {String} environmentID 
   * @param {String} applicationID 
   * @param {Object} opts Optional parameters
   * @param {module:model/FlowPolicyAssignment} [flowPolicyAssignment] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FlowPolicyAssignment} and HTTP response
   */
  createFlowPolicyAssignmentWithHttpInfo(environmentID, applicationID, opts) {
    opts = opts || {};
    let postBody = opts['flowPolicyAssignment'];
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling createFlowPolicyAssignment");
    }
    // verify the required parameter 'applicationID' is set
    if (applicationID === undefined || applicationID === null) {
      throw new Error("Missing the required parameter 'applicationID' when calling createFlowPolicyAssignment");
    }
    let pathParams = {
      'environmentID': environmentID,
      'applicationID': applicationID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = FlowPolicyAssignment;
    return this.apiClient.callApi('/environments/{environmentID}/applications/{applicationID}/flowPolicyAssignments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * CREATE Flow Assignment
   * @param {String} environmentID 
   * @param {String} applicationID 
   * @param {Object} opts Optional parameters
   * @param {module:model/FlowPolicyAssignment} opts.flowPolicyAssignment 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FlowPolicyAssignment}
   */
  createFlowPolicyAssignment(environmentID, applicationID, opts) {
    return this.createFlowPolicyAssignmentWithHttpInfo(environmentID, applicationID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * DELETE Flow Policy Assignment
   * @param {String} environmentID 
   * @param {String} applicationID 
   * @param {String} flowPolicyAssignmentID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  deleteFlowPolicyAssignmentWithHttpInfo(environmentID, applicationID, flowPolicyAssignmentID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling deleteFlowPolicyAssignment");
    }
    // verify the required parameter 'applicationID' is set
    if (applicationID === undefined || applicationID === null) {
      throw new Error("Missing the required parameter 'applicationID' when calling deleteFlowPolicyAssignment");
    }
    // verify the required parameter 'flowPolicyAssignmentID' is set
    if (flowPolicyAssignmentID === undefined || flowPolicyAssignmentID === null) {
      throw new Error("Missing the required parameter 'flowPolicyAssignmentID' when calling deleteFlowPolicyAssignment");
    }
    let pathParams = {
      'environmentID': environmentID,
      'applicationID': applicationID,
      'flowPolicyAssignmentID': flowPolicyAssignmentID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi('/environments/{environmentID}/applications/{applicationID}/flowPolicyAssignments/{flowPolicyAssignmentID}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * DELETE Flow Policy Assignment
   * @param {String} environmentID 
   * @param {String} applicationID 
   * @param {String} flowPolicyAssignmentID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  deleteFlowPolicyAssignment(environmentID, applicationID, flowPolicyAssignmentID) {
    return this.deleteFlowPolicyAssignmentWithHttpInfo(environmentID, applicationID, flowPolicyAssignmentID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * READ All Flow Policy Assignments
   * @param {String} environmentID 
   * @param {String} applicationID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityArray} and HTTP response
   */
  readAllFlowPolicyAssignmentsWithHttpInfo(environmentID, applicationID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readAllFlowPolicyAssignments");
    }
    // verify the required parameter 'applicationID' is set
    if (applicationID === undefined || applicationID === null) {
      throw new Error("Missing the required parameter 'applicationID' when calling readAllFlowPolicyAssignments");
    }
    let pathParams = {
      'environmentID': environmentID,
      'applicationID': applicationID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = EntityArray;
    return this.apiClient.callApi('/environments/{environmentID}/applications/{applicationID}/flowPolicyAssignments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ All Flow Policy Assignments
   * @param {String} environmentID 
   * @param {String} applicationID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityArray}
   */
  readAllFlowPolicyAssignments(environmentID, applicationID) {
    return this.readAllFlowPolicyAssignmentsWithHttpInfo(environmentID, applicationID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * READ One Flow Policy Assignment
   * @param {String} environmentID 
   * @param {String} applicationID 
   * @param {String} flowPolicyAssignmentID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FlowPolicyAssignment} and HTTP response
   */
  readOneFlowPolicyAssignmentWithHttpInfo(environmentID, applicationID, flowPolicyAssignmentID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readOneFlowPolicyAssignment");
    }
    // verify the required parameter 'applicationID' is set
    if (applicationID === undefined || applicationID === null) {
      throw new Error("Missing the required parameter 'applicationID' when calling readOneFlowPolicyAssignment");
    }
    // verify the required parameter 'flowPolicyAssignmentID' is set
    if (flowPolicyAssignmentID === undefined || flowPolicyAssignmentID === null) {
      throw new Error("Missing the required parameter 'flowPolicyAssignmentID' when calling readOneFlowPolicyAssignment");
    }
    let pathParams = {
      'environmentID': environmentID,
      'applicationID': applicationID,
      'flowPolicyAssignmentID': flowPolicyAssignmentID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = FlowPolicyAssignment;
    return this.apiClient.callApi('/environments/{environmentID}/applications/{applicationID}/flowPolicyAssignments/{flowPolicyAssignmentID}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ One Flow Policy Assignment
   * @param {String} environmentID 
   * @param {String} applicationID 
   * @param {String} flowPolicyAssignmentID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FlowPolicyAssignment}
   */
  readOneFlowPolicyAssignment(environmentID, applicationID, flowPolicyAssignmentID) {
    return this.readOneFlowPolicyAssignmentWithHttpInfo(environmentID, applicationID, flowPolicyAssignmentID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * UPDATE Flow Policy Assignment
   * @param {String} environmentID 
   * @param {String} applicationID 
   * @param {String} flowPolicyAssignmentID 
   * @param {Object} opts Optional parameters
   * @param {module:model/FlowPolicyAssignment} [flowPolicyAssignment] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FlowPolicyAssignment} and HTTP response
   */
  updateFlowPolicyAssignmentWithHttpInfo(environmentID, applicationID, flowPolicyAssignmentID, opts) {
    opts = opts || {};
    let postBody = opts['flowPolicyAssignment'];
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling updateFlowPolicyAssignment");
    }
    // verify the required parameter 'applicationID' is set
    if (applicationID === undefined || applicationID === null) {
      throw new Error("Missing the required parameter 'applicationID' when calling updateFlowPolicyAssignment");
    }
    // verify the required parameter 'flowPolicyAssignmentID' is set
    if (flowPolicyAssignmentID === undefined || flowPolicyAssignmentID === null) {
      throw new Error("Missing the required parameter 'flowPolicyAssignmentID' when calling updateFlowPolicyAssignment");
    }
    let pathParams = {
      'environmentID': environmentID,
      'applicationID': applicationID,
      'flowPolicyAssignmentID': flowPolicyAssignmentID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = FlowPolicyAssignment;
    return this.apiClient.callApi('/environments/{environmentID}/applications/{applicationID}/flowPolicyAssignments/{flowPolicyAssignmentID}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * UPDATE Flow Policy Assignment
   * @param {String} environmentID 
   * @param {String} applicationID 
   * @param {String} flowPolicyAssignmentID 
   * @param {Object} opts Optional parameters
   * @param {module:model/FlowPolicyAssignment} opts.flowPolicyAssignment 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FlowPolicyAssignment}
   */
  updateFlowPolicyAssignment(environmentID, applicationID, flowPolicyAssignmentID, opts) {
    return this.updateFlowPolicyAssignmentWithHttpInfo(environmentID, applicationID, flowPolicyAssignmentID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}