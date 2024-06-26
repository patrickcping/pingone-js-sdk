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
import P1Error from '../model/P1Error';
import RoleAssignment from '../model/RoleAssignment';

/**
* ApplicationRoleAssignments service.
* @module api/ApplicationRoleAssignmentsApi
* @version 2023-06-29
*/
export default class ApplicationRoleAssignmentsApi {

    /**
    * Constructs a new ApplicationRoleAssignmentsApi. 
    * @alias module:api/ApplicationRoleAssignmentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * CREATE Application Role Assignments
     * @param {String} environmentID 
     * @param {String} applicationID 
     * @param {Object} opts Optional parameters
     * @param {module:model/RoleAssignment} [roleAssignment] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RoleAssignment} and HTTP response
     */
    createApplicationRoleAssignmentWithHttpInfo(environmentID, applicationID, opts) {
      opts = opts || {};
      let postBody = opts['roleAssignment'];
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling createApplicationRoleAssignment");
      }
      // verify the required parameter 'applicationID' is set
      if (applicationID === undefined || applicationID === null) {
        throw new Error("Missing the required parameter 'applicationID' when calling createApplicationRoleAssignment");
      }

      let pathParams = {
        'environmentID': environmentID,
        'applicationID': applicationID
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
      let returnType = RoleAssignment;
      return this.apiClient.callApi(
        '/environments/{environmentID}/applications/{applicationID}/roleAssignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * CREATE Application Role Assignments
     * @param {String} environmentID 
     * @param {String} applicationID 
     * @param {Object} opts Optional parameters
     * @param {module:model/RoleAssignment} opts.roleAssignment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RoleAssignment}
     */
    createApplicationRoleAssignment(environmentID, applicationID, opts) {
      return this.createApplicationRoleAssignmentWithHttpInfo(environmentID, applicationID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * DELETE Application Role Assignment
     * @param {String} environmentID 
     * @param {String} applicationID 
     * @param {String} roleAssignmentID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteApplicationRoleAssignmentWithHttpInfo(environmentID, applicationID, roleAssignmentID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling deleteApplicationRoleAssignment");
      }
      // verify the required parameter 'applicationID' is set
      if (applicationID === undefined || applicationID === null) {
        throw new Error("Missing the required parameter 'applicationID' when calling deleteApplicationRoleAssignment");
      }
      // verify the required parameter 'roleAssignmentID' is set
      if (roleAssignmentID === undefined || roleAssignmentID === null) {
        throw new Error("Missing the required parameter 'roleAssignmentID' when calling deleteApplicationRoleAssignment");
      }

      let pathParams = {
        'environmentID': environmentID,
        'applicationID': applicationID,
        'roleAssignmentID': roleAssignmentID
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
        '/environments/{environmentID}/applications/{applicationID}/roleAssignments/{roleAssignmentID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * DELETE Application Role Assignment
     * @param {String} environmentID 
     * @param {String} applicationID 
     * @param {String} roleAssignmentID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteApplicationRoleAssignment(environmentID, applicationID, roleAssignmentID) {
      return this.deleteApplicationRoleAssignmentWithHttpInfo(environmentID, applicationID, roleAssignmentID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * READ Application Role Assignments
     * @param {String} environmentID 
     * @param {String} applicationID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityArray} and HTTP response
     */
    readApplicationRoleAssignmentsWithHttpInfo(environmentID, applicationID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling readApplicationRoleAssignments");
      }
      // verify the required parameter 'applicationID' is set
      if (applicationID === undefined || applicationID === null) {
        throw new Error("Missing the required parameter 'applicationID' when calling readApplicationRoleAssignments");
      }

      let pathParams = {
        'environmentID': environmentID,
        'applicationID': applicationID
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
        '/environments/{environmentID}/applications/{applicationID}/roleAssignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * READ Application Role Assignments
     * @param {String} environmentID 
     * @param {String} applicationID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityArray}
     */
    readApplicationRoleAssignments(environmentID, applicationID) {
      return this.readApplicationRoleAssignmentsWithHttpInfo(environmentID, applicationID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * READ One Application Role Assignment
     * @param {String} environmentID 
     * @param {String} applicationID 
     * @param {String} roleAssignmentID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RoleAssignment} and HTTP response
     */
    readOneApplicationRoleAssignmentWithHttpInfo(environmentID, applicationID, roleAssignmentID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling readOneApplicationRoleAssignment");
      }
      // verify the required parameter 'applicationID' is set
      if (applicationID === undefined || applicationID === null) {
        throw new Error("Missing the required parameter 'applicationID' when calling readOneApplicationRoleAssignment");
      }
      // verify the required parameter 'roleAssignmentID' is set
      if (roleAssignmentID === undefined || roleAssignmentID === null) {
        throw new Error("Missing the required parameter 'roleAssignmentID' when calling readOneApplicationRoleAssignment");
      }

      let pathParams = {
        'environmentID': environmentID,
        'applicationID': applicationID,
        'roleAssignmentID': roleAssignmentID
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
      let returnType = RoleAssignment;
      return this.apiClient.callApi(
        '/environments/{environmentID}/applications/{applicationID}/roleAssignments/{roleAssignmentID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * READ One Application Role Assignment
     * @param {String} environmentID 
     * @param {String} applicationID 
     * @param {String} roleAssignmentID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RoleAssignment}
     */
    readOneApplicationRoleAssignment(environmentID, applicationID, roleAssignmentID) {
      return this.readOneApplicationRoleAssignmentWithHttpInfo(environmentID, applicationID, roleAssignmentID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
