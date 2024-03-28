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
import ApplicationResourceGrant from '../model/ApplicationResourceGrant';
import EntityArray from '../model/EntityArray';
import P1Error from '../model/P1Error';

/**
* ApplicationResourceGrants service.
* @module api/ApplicationResourceGrantsApi
* @version 2023-06-29
*/
export default class ApplicationResourceGrantsApi {

    /**
    * Constructs a new ApplicationResourceGrantsApi. 
    * @alias module:api/ApplicationResourceGrantsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * CREATE Grant
     * @param {String} environmentID 
     * @param {String} applicationID 
     * @param {Object} opts Optional parameters
     * @param {module:model/ApplicationResourceGrant} [applicationResourceGrant] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApplicationResourceGrant} and HTTP response
     */
    createApplicationGrantWithHttpInfo(environmentID, applicationID, opts) {
      opts = opts || {};
      let postBody = opts['applicationResourceGrant'];
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling createApplicationGrant");
      }
      // verify the required parameter 'applicationID' is set
      if (applicationID === undefined || applicationID === null) {
        throw new Error("Missing the required parameter 'applicationID' when calling createApplicationGrant");
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
      let returnType = ApplicationResourceGrant;
      return this.apiClient.callApi(
        '/environments/{environmentID}/applications/{applicationID}/grants', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * CREATE Grant
     * @param {String} environmentID 
     * @param {String} applicationID 
     * @param {Object} opts Optional parameters
     * @param {module:model/ApplicationResourceGrant} opts.applicationResourceGrant 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApplicationResourceGrant}
     */
    createApplicationGrant(environmentID, applicationID, opts) {
      return this.createApplicationGrantWithHttpInfo(environmentID, applicationID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * DELETE Grant
     * @param {String} environmentID 
     * @param {String} applicationID 
     * @param {String} grantID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteApplicationGrantWithHttpInfo(environmentID, applicationID, grantID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling deleteApplicationGrant");
      }
      // verify the required parameter 'applicationID' is set
      if (applicationID === undefined || applicationID === null) {
        throw new Error("Missing the required parameter 'applicationID' when calling deleteApplicationGrant");
      }
      // verify the required parameter 'grantID' is set
      if (grantID === undefined || grantID === null) {
        throw new Error("Missing the required parameter 'grantID' when calling deleteApplicationGrant");
      }

      let pathParams = {
        'environmentID': environmentID,
        'applicationID': applicationID,
        'grantID': grantID
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
        '/environments/{environmentID}/applications/{applicationID}/grants/{grantID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * DELETE Grant
     * @param {String} environmentID 
     * @param {String} applicationID 
     * @param {String} grantID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteApplicationGrant(environmentID, applicationID, grantID) {
      return this.deleteApplicationGrantWithHttpInfo(environmentID, applicationID, grantID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * READ All Grants for an Application
     * @param {String} environmentID 
     * @param {String} applicationID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityArray} and HTTP response
     */
    readAllApplicationGrantsWithHttpInfo(environmentID, applicationID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling readAllApplicationGrants");
      }
      // verify the required parameter 'applicationID' is set
      if (applicationID === undefined || applicationID === null) {
        throw new Error("Missing the required parameter 'applicationID' when calling readAllApplicationGrants");
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
        '/environments/{environmentID}/applications/{applicationID}/grants', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * READ All Grants for an Application
     * @param {String} environmentID 
     * @param {String} applicationID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityArray}
     */
    readAllApplicationGrants(environmentID, applicationID) {
      return this.readAllApplicationGrantsWithHttpInfo(environmentID, applicationID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * READ One Grant for an Application
     * @param {String} environmentID 
     * @param {String} applicationID 
     * @param {String} grantID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApplicationResourceGrant} and HTTP response
     */
    readOneApplicationGrantWithHttpInfo(environmentID, applicationID, grantID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling readOneApplicationGrant");
      }
      // verify the required parameter 'applicationID' is set
      if (applicationID === undefined || applicationID === null) {
        throw new Error("Missing the required parameter 'applicationID' when calling readOneApplicationGrant");
      }
      // verify the required parameter 'grantID' is set
      if (grantID === undefined || grantID === null) {
        throw new Error("Missing the required parameter 'grantID' when calling readOneApplicationGrant");
      }

      let pathParams = {
        'environmentID': environmentID,
        'applicationID': applicationID,
        'grantID': grantID
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
      let returnType = ApplicationResourceGrant;
      return this.apiClient.callApi(
        '/environments/{environmentID}/applications/{applicationID}/grants/{grantID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * READ One Grant for an Application
     * @param {String} environmentID 
     * @param {String} applicationID 
     * @param {String} grantID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApplicationResourceGrant}
     */
    readOneApplicationGrant(environmentID, applicationID, grantID) {
      return this.readOneApplicationGrantWithHttpInfo(environmentID, applicationID, grantID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * UPDATE Grant
     * @param {String} environmentID 
     * @param {String} applicationID 
     * @param {String} grantID 
     * @param {Object} opts Optional parameters
     * @param {module:model/ApplicationResourceGrant} [applicationResourceGrant] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApplicationResourceGrant} and HTTP response
     */
    updateApplicationGrantWithHttpInfo(environmentID, applicationID, grantID, opts) {
      opts = opts || {};
      let postBody = opts['applicationResourceGrant'];
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling updateApplicationGrant");
      }
      // verify the required parameter 'applicationID' is set
      if (applicationID === undefined || applicationID === null) {
        throw new Error("Missing the required parameter 'applicationID' when calling updateApplicationGrant");
      }
      // verify the required parameter 'grantID' is set
      if (grantID === undefined || grantID === null) {
        throw new Error("Missing the required parameter 'grantID' when calling updateApplicationGrant");
      }

      let pathParams = {
        'environmentID': environmentID,
        'applicationID': applicationID,
        'grantID': grantID
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
      let returnType = ApplicationResourceGrant;
      return this.apiClient.callApi(
        '/environments/{environmentID}/applications/{applicationID}/grants/{grantID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * UPDATE Grant
     * @param {String} environmentID 
     * @param {String} applicationID 
     * @param {String} grantID 
     * @param {Object} opts Optional parameters
     * @param {module:model/ApplicationResourceGrant} opts.applicationResourceGrant 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApplicationResourceGrant}
     */
    updateApplicationGrant(environmentID, applicationID, grantID, opts) {
      return this.updateApplicationGrantWithHttpInfo(environmentID, applicationID, grantID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}