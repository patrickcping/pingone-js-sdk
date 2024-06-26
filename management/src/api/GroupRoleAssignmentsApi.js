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
* GroupRoleAssignments service.
* @module api/GroupRoleAssignmentsApi
* @version 2023-06-29
*/
export default class GroupRoleAssignmentsApi {

    /**
    * Constructs a new GroupRoleAssignmentsApi. 
    * @alias module:api/GroupRoleAssignmentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * CREATE Group Role Assignment
     * @param {String} environmentID 
     * @param {String} groupID 
     * @param {Object} opts Optional parameters
     * @param {module:model/RoleAssignment} [roleAssignment] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RoleAssignment} and HTTP response
     */
    createGroupRoleAssignmentWithHttpInfo(environmentID, groupID, opts) {
      opts = opts || {};
      let postBody = opts['roleAssignment'];
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling createGroupRoleAssignment");
      }
      // verify the required parameter 'groupID' is set
      if (groupID === undefined || groupID === null) {
        throw new Error("Missing the required parameter 'groupID' when calling createGroupRoleAssignment");
      }

      let pathParams = {
        'environmentID': environmentID,
        'groupID': groupID
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
        '/environments/{environmentID}/groups/{groupID}/roleAssignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * CREATE Group Role Assignment
     * @param {String} environmentID 
     * @param {String} groupID 
     * @param {Object} opts Optional parameters
     * @param {module:model/RoleAssignment} opts.roleAssignment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RoleAssignment}
     */
    createGroupRoleAssignment(environmentID, groupID, opts) {
      return this.createGroupRoleAssignmentWithHttpInfo(environmentID, groupID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * DELETE Group's Role Assignment
     * @param {String} environmentID 
     * @param {String} groupID 
     * @param {String} roleAssignmentID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteGroupRoleAssignmentWithHttpInfo(environmentID, groupID, roleAssignmentID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling deleteGroupRoleAssignment");
      }
      // verify the required parameter 'groupID' is set
      if (groupID === undefined || groupID === null) {
        throw new Error("Missing the required parameter 'groupID' when calling deleteGroupRoleAssignment");
      }
      // verify the required parameter 'roleAssignmentID' is set
      if (roleAssignmentID === undefined || roleAssignmentID === null) {
        throw new Error("Missing the required parameter 'roleAssignmentID' when calling deleteGroupRoleAssignment");
      }

      let pathParams = {
        'environmentID': environmentID,
        'groupID': groupID,
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
        '/environments/{environmentID}/groups/{groupID}/roleAssignments/{roleAssignmentID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * DELETE Group's Role Assignment
     * @param {String} environmentID 
     * @param {String} groupID 
     * @param {String} roleAssignmentID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteGroupRoleAssignment(environmentID, groupID, roleAssignmentID) {
      return this.deleteGroupRoleAssignmentWithHttpInfo(environmentID, groupID, roleAssignmentID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * READ Role Assignments
     * @param {String} environmentID 
     * @param {String} groupID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityArray} and HTTP response
     */
    readGroupRoleAssignmentsWithHttpInfo(environmentID, groupID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling readGroupRoleAssignments");
      }
      // verify the required parameter 'groupID' is set
      if (groupID === undefined || groupID === null) {
        throw new Error("Missing the required parameter 'groupID' when calling readGroupRoleAssignments");
      }

      let pathParams = {
        'environmentID': environmentID,
        'groupID': groupID
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
        '/environments/{environmentID}/groups/{groupID}/roleAssignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * READ Role Assignments
     * @param {String} environmentID 
     * @param {String} groupID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityArray}
     */
    readGroupRoleAssignments(environmentID, groupID) {
      return this.readGroupRoleAssignmentsWithHttpInfo(environmentID, groupID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * READ One Group Assignment
     * @param {String} environmentID 
     * @param {String} groupID 
     * @param {String} roleAssignmentID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RoleAssignment} and HTTP response
     */
    readOneGroupRoleAssignmentWithHttpInfo(environmentID, groupID, roleAssignmentID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling readOneGroupRoleAssignment");
      }
      // verify the required parameter 'groupID' is set
      if (groupID === undefined || groupID === null) {
        throw new Error("Missing the required parameter 'groupID' when calling readOneGroupRoleAssignment");
      }
      // verify the required parameter 'roleAssignmentID' is set
      if (roleAssignmentID === undefined || roleAssignmentID === null) {
        throw new Error("Missing the required parameter 'roleAssignmentID' when calling readOneGroupRoleAssignment");
      }

      let pathParams = {
        'environmentID': environmentID,
        'groupID': groupID,
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
        '/environments/{environmentID}/groups/{groupID}/roleAssignments/{roleAssignmentID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * READ One Group Assignment
     * @param {String} environmentID 
     * @param {String} groupID 
     * @param {String} roleAssignmentID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RoleAssignment}
     */
    readOneGroupRoleAssignment(environmentID, groupID, roleAssignmentID) {
      return this.readOneGroupRoleAssignmentWithHttpInfo(environmentID, groupID, roleAssignmentID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
