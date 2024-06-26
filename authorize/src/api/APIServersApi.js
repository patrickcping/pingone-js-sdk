/**
 * PingOne Platform API - Authorize
 * The PingOne Platform API covering the PingOne Authorize service
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
import APIServer from '../model/APIServer';
import EntityArray from '../model/EntityArray';
import P1Error from '../model/P1Error';

/**
* APIServers service.
* @module api/APIServersApi
* @version 2023-06-29
*/
export default class APIServersApi {

    /**
    * Constructs a new APIServersApi. 
    * @alias module:api/APIServersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * CREATE API Server
     * @param {String} environmentID 
     * @param {Object} opts Optional parameters
     * @param {module:model/APIServer} [aPIServer] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/APIServer} and HTTP response
     */
    createAPIServerWithHttpInfo(environmentID, opts) {
      opts = opts || {};
      let postBody = opts['aPIServer'];
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling createAPIServer");
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
      let returnType = APIServer;
      return this.apiClient.callApi(
        '/environments/{environmentID}/apiServers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * CREATE API Server
     * @param {String} environmentID 
     * @param {Object} opts Optional parameters
     * @param {module:model/APIServer} opts.aPIServer 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/APIServer}
     */
    createAPIServer(environmentID, opts) {
      return this.createAPIServerWithHttpInfo(environmentID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * DELETE API Server
     * @param {String} environmentID 
     * @param {String} apiServerID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteAPIServerWithHttpInfo(environmentID, apiServerID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling deleteAPIServer");
      }
      // verify the required parameter 'apiServerID' is set
      if (apiServerID === undefined || apiServerID === null) {
        throw new Error("Missing the required parameter 'apiServerID' when calling deleteAPIServer");
      }

      let pathParams = {
        'environmentID': environmentID,
        'apiServerID': apiServerID
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
        '/environments/{environmentID}/apiServers/{apiServerID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * DELETE API Server
     * @param {String} environmentID 
     * @param {String} apiServerID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteAPIServer(environmentID, apiServerID) {
      return this.deleteAPIServerWithHttpInfo(environmentID, apiServerID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * READ All API Servers
     * @param {String} environmentID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityArray} and HTTP response
     */
    readAllAPIServersWithHttpInfo(environmentID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling readAllAPIServers");
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
        '/environments/{environmentID}/apiServers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * READ All API Servers
     * @param {String} environmentID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityArray}
     */
    readAllAPIServers(environmentID) {
      return this.readAllAPIServersWithHttpInfo(environmentID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * READ One API Server
     * @param {String} environmentID 
     * @param {String} apiServerID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/APIServer} and HTTP response
     */
    readOneAPIServerWithHttpInfo(environmentID, apiServerID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling readOneAPIServer");
      }
      // verify the required parameter 'apiServerID' is set
      if (apiServerID === undefined || apiServerID === null) {
        throw new Error("Missing the required parameter 'apiServerID' when calling readOneAPIServer");
      }

      let pathParams = {
        'environmentID': environmentID,
        'apiServerID': apiServerID
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
      let returnType = APIServer;
      return this.apiClient.callApi(
        '/environments/{environmentID}/apiServers/{apiServerID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * READ One API Server
     * @param {String} environmentID 
     * @param {String} apiServerID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/APIServer}
     */
    readOneAPIServer(environmentID, apiServerID) {
      return this.readOneAPIServerWithHttpInfo(environmentID, apiServerID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * UPDATE API Server
     * @param {String} environmentID 
     * @param {String} apiServerID 
     * @param {Object} opts Optional parameters
     * @param {module:model/APIServer} [aPIServer] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/APIServer} and HTTP response
     */
    updateAPIServerWithHttpInfo(environmentID, apiServerID, opts) {
      opts = opts || {};
      let postBody = opts['aPIServer'];
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling updateAPIServer");
      }
      // verify the required parameter 'apiServerID' is set
      if (apiServerID === undefined || apiServerID === null) {
        throw new Error("Missing the required parameter 'apiServerID' when calling updateAPIServer");
      }

      let pathParams = {
        'environmentID': environmentID,
        'apiServerID': apiServerID
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
      let returnType = APIServer;
      return this.apiClient.callApi(
        '/environments/{environmentID}/apiServers/{apiServerID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * UPDATE API Server
     * @param {String} environmentID 
     * @param {String} apiServerID 
     * @param {Object} opts Optional parameters
     * @param {module:model/APIServer} opts.aPIServer 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/APIServer}
     */
    updateAPIServer(environmentID, apiServerID, opts) {
      return this.updateAPIServerWithHttpInfo(environmentID, apiServerID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
