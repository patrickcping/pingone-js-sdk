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
import SignOnPolicyAction from '../model/SignOnPolicyAction';

/**
* SignOnPolicyActions service.
* @module api/SignOnPolicyActionsApi
* @version 2023-06-29
*/
export default class SignOnPolicyActionsApi {

    /**
    * Constructs a new SignOnPolicyActionsApi. 
    * @alias module:api/SignOnPolicyActionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * CREATE Sign-On Policy Action
     * @param {String} environmentID 
     * @param {String} policyID 
     * @param {Object} opts Optional parameters
     * @param {module:model/SignOnPolicyAction} [signOnPolicyAction] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SignOnPolicyAction} and HTTP response
     */
    createSignOnPolicyActionWithHttpInfo(environmentID, policyID, opts) {
      opts = opts || {};
      let postBody = opts['signOnPolicyAction'];
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling createSignOnPolicyAction");
      }
      // verify the required parameter 'policyID' is set
      if (policyID === undefined || policyID === null) {
        throw new Error("Missing the required parameter 'policyID' when calling createSignOnPolicyAction");
      }

      let pathParams = {
        'environmentID': environmentID,
        'policyID': policyID
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
      let returnType = SignOnPolicyAction;
      return this.apiClient.callApi(
        '/environments/{environmentID}/signOnPolicies/{policyID}/actions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * CREATE Sign-On Policy Action
     * @param {String} environmentID 
     * @param {String} policyID 
     * @param {Object} opts Optional parameters
     * @param {module:model/SignOnPolicyAction} opts.signOnPolicyAction 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SignOnPolicyAction}
     */
    createSignOnPolicyAction(environmentID, policyID, opts) {
      return this.createSignOnPolicyActionWithHttpInfo(environmentID, policyID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * DELETE Sign-On Policy Action
     * @param {String} environmentID 
     * @param {String} policyID 
     * @param {String} actionID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteSignOnPolicyActionWithHttpInfo(environmentID, policyID, actionID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling deleteSignOnPolicyAction");
      }
      // verify the required parameter 'policyID' is set
      if (policyID === undefined || policyID === null) {
        throw new Error("Missing the required parameter 'policyID' when calling deleteSignOnPolicyAction");
      }
      // verify the required parameter 'actionID' is set
      if (actionID === undefined || actionID === null) {
        throw new Error("Missing the required parameter 'actionID' when calling deleteSignOnPolicyAction");
      }

      let pathParams = {
        'environmentID': environmentID,
        'policyID': policyID,
        'actionID': actionID
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
        '/environments/{environmentID}/signOnPolicies/{policyID}/actions/{actionID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * DELETE Sign-On Policy Action
     * @param {String} environmentID 
     * @param {String} policyID 
     * @param {String} actionID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteSignOnPolicyAction(environmentID, policyID, actionID) {
      return this.deleteSignOnPolicyActionWithHttpInfo(environmentID, policyID, actionID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * READ All Sign-On Policy Actions
     * @param {String} environmentID 
     * @param {String} policyID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityArray} and HTTP response
     */
    readAllSignOnPolicyActionsWithHttpInfo(environmentID, policyID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling readAllSignOnPolicyActions");
      }
      // verify the required parameter 'policyID' is set
      if (policyID === undefined || policyID === null) {
        throw new Error("Missing the required parameter 'policyID' when calling readAllSignOnPolicyActions");
      }

      let pathParams = {
        'environmentID': environmentID,
        'policyID': policyID
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
        '/environments/{environmentID}/signOnPolicies/{policyID}/actions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * READ All Sign-On Policy Actions
     * @param {String} environmentID 
     * @param {String} policyID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityArray}
     */
    readAllSignOnPolicyActions(environmentID, policyID) {
      return this.readAllSignOnPolicyActionsWithHttpInfo(environmentID, policyID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * READ One Sign-On Policy Action
     * @param {String} environmentID 
     * @param {String} policyID 
     * @param {String} actionID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SignOnPolicyAction} and HTTP response
     */
    readOneSignOnPolicyActionWithHttpInfo(environmentID, policyID, actionID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling readOneSignOnPolicyAction");
      }
      // verify the required parameter 'policyID' is set
      if (policyID === undefined || policyID === null) {
        throw new Error("Missing the required parameter 'policyID' when calling readOneSignOnPolicyAction");
      }
      // verify the required parameter 'actionID' is set
      if (actionID === undefined || actionID === null) {
        throw new Error("Missing the required parameter 'actionID' when calling readOneSignOnPolicyAction");
      }

      let pathParams = {
        'environmentID': environmentID,
        'policyID': policyID,
        'actionID': actionID
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
      let returnType = SignOnPolicyAction;
      return this.apiClient.callApi(
        '/environments/{environmentID}/signOnPolicies/{policyID}/actions/{actionID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * READ One Sign-On Policy Action
     * @param {String} environmentID 
     * @param {String} policyID 
     * @param {String} actionID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SignOnPolicyAction}
     */
    readOneSignOnPolicyAction(environmentID, policyID, actionID) {
      return this.readOneSignOnPolicyActionWithHttpInfo(environmentID, policyID, actionID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * UPDATE Sign-On Policy Action
     * @param {String} environmentID 
     * @param {String} policyID 
     * @param {String} actionID 
     * @param {Object} opts Optional parameters
     * @param {module:model/SignOnPolicyAction} [signOnPolicyAction] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SignOnPolicyAction} and HTTP response
     */
    updateSignOnPolicyActionWithHttpInfo(environmentID, policyID, actionID, opts) {
      opts = opts || {};
      let postBody = opts['signOnPolicyAction'];
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling updateSignOnPolicyAction");
      }
      // verify the required parameter 'policyID' is set
      if (policyID === undefined || policyID === null) {
        throw new Error("Missing the required parameter 'policyID' when calling updateSignOnPolicyAction");
      }
      // verify the required parameter 'actionID' is set
      if (actionID === undefined || actionID === null) {
        throw new Error("Missing the required parameter 'actionID' when calling updateSignOnPolicyAction");
      }

      let pathParams = {
        'environmentID': environmentID,
        'policyID': policyID,
        'actionID': actionID
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
      let returnType = SignOnPolicyAction;
      return this.apiClient.callApi(
        '/environments/{environmentID}/signOnPolicies/{policyID}/actions/{actionID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * UPDATE Sign-On Policy Action
     * @param {String} environmentID 
     * @param {String} policyID 
     * @param {String} actionID 
     * @param {Object} opts Optional parameters
     * @param {module:model/SignOnPolicyAction} opts.signOnPolicyAction 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SignOnPolicyAction}
     */
    updateSignOnPolicyAction(environmentID, policyID, actionID, opts) {
      return this.updateSignOnPolicyActionWithHttpInfo(environmentID, policyID, actionID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
