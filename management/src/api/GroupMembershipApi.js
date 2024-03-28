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
import EnumUserGroupAssignmentExpandParameter from '../model/EnumUserGroupAssignmentExpandParameter';
import GroupMembership from '../model/GroupMembership';
import P1Error from '../model/P1Error';

/**
* GroupMembership service.
* @module api/GroupMembershipApi
* @version 2023-06-29
*/
export default class GroupMembershipApi {

    /**
    * Constructs a new GroupMembershipApi. 
    * @alias module:api/GroupMembershipApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * ADD User to Group
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {Object} opts Optional parameters
     * @param {module:model/GroupMembership} [groupMembership] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GroupMembership} and HTTP response
     */
    addUserToGroupWithHttpInfo(environmentID, userID, opts) {
      opts = opts || {};
      let postBody = opts['groupMembership'];
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling addUserToGroup");
      }
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling addUserToGroup");
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
      let returnType = GroupMembership;
      return this.apiClient.callApi(
        '/environments/{environmentID}/users/{userID}/memberOfGroups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * ADD User to Group
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {Object} opts Optional parameters
     * @param {module:model/GroupMembership} opts.groupMembership 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GroupMembership}
     */
    addUserToGroup(environmentID, userID, opts) {
      return this.addUserToGroupWithHttpInfo(environmentID, userID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * READ All Group Memberships for User
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {Object} opts Optional parameters
     * @param {String} [expand] 
     * @param {Number} [limit] 
     * @param {String} [cursor] Adding a cursor value to retrieve the next page of results, used with the `limit` parameter. The cursor value is returned in the `_links.next.href` link in the response payload.
     * @param {String} [filter] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityArray} and HTTP response
     */
    readAllGroupMembershipsForUserWithHttpInfo(environmentID, userID, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling readAllGroupMembershipsForUser");
      }
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling readAllGroupMembershipsForUser");
      }

      let pathParams = {
        'environmentID': environmentID,
        'userID': userID
      };
      let queryParams = {
        'expand': opts['expand'],
        'limit': opts['limit'],
        'cursor': opts['cursor'],
        'filter': opts['filter']
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
        '/environments/{environmentID}/users/{userID}/memberOfGroups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * READ All Group Memberships for User
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand 
     * @param {Number} opts.limit 
     * @param {String} opts.cursor Adding a cursor value to retrieve the next page of results, used with the `limit` parameter. The cursor value is returned in the `_links.next.href` link in the response payload.
     * @param {String} opts.filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityArray}
     */
    readAllGroupMembershipsForUser(environmentID, userID, opts) {
      return this.readAllGroupMembershipsForUserWithHttpInfo(environmentID, userID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * READ One Group Membership for User
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {String} groupID 
     * @param {Object} opts Optional parameters
     * @param {module:model/EnumUserGroupAssignmentExpandParameter} [expand] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GroupMembership} and HTTP response
     */
    readOneGroupMembershipForUserWithHttpInfo(environmentID, userID, groupID, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling readOneGroupMembershipForUser");
      }
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling readOneGroupMembershipForUser");
      }
      // verify the required parameter 'groupID' is set
      if (groupID === undefined || groupID === null) {
        throw new Error("Missing the required parameter 'groupID' when calling readOneGroupMembershipForUser");
      }

      let pathParams = {
        'environmentID': environmentID,
        'userID': userID,
        'groupID': groupID
      };
      let queryParams = {
        'expand': opts['expand']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GroupMembership;
      return this.apiClient.callApi(
        '/environments/{environmentID}/users/{userID}/memberOfGroups/{groupID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * READ One Group Membership for User
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {String} groupID 
     * @param {Object} opts Optional parameters
     * @param {module:model/EnumUserGroupAssignmentExpandParameter} opts.expand 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GroupMembership}
     */
    readOneGroupMembershipForUser(environmentID, userID, groupID, opts) {
      return this.readOneGroupMembershipForUserWithHttpInfo(environmentID, userID, groupID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * REMOVE User from Group
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {String} groupID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    removeUserFromGroupWithHttpInfo(environmentID, userID, groupID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling removeUserFromGroup");
      }
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling removeUserFromGroup");
      }
      // verify the required parameter 'groupID' is set
      if (groupID === undefined || groupID === null) {
        throw new Error("Missing the required parameter 'groupID' when calling removeUserFromGroup");
      }

      let pathParams = {
        'environmentID': environmentID,
        'userID': userID,
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
      let returnType = null;
      return this.apiClient.callApi(
        '/environments/{environmentID}/users/{userID}/memberOfGroups/{groupID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * REMOVE User from Group
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {String} groupID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    removeUserFromGroup(environmentID, userID, groupID) {
      return this.removeUserFromGroupWithHttpInfo(environmentID, userID, groupID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
