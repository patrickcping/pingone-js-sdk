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
import Resource from '../model/Resource';

/**
* Resources service.
* @module api/ResourcesApi
* @version 2023-06-29
*/
export default class ResourcesApi {

    /**
    * Constructs a new ResourcesApi. 
    * @alias module:api/ResourcesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * CREATE Resource
     * @param {String} environmentID 
     * @param {Object} opts Optional parameters
     * @param {module:model/Resource} [resource] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Resource} and HTTP response
     */
    createResourceWithHttpInfo(environmentID, opts) {
      opts = opts || {};
      let postBody = opts['resource'];
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling createResource");
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
      let returnType = Resource;
      return this.apiClient.callApi(
        '/environments/{environmentID}/resources', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * CREATE Resource
     * @param {String} environmentID 
     * @param {Object} opts Optional parameters
     * @param {module:model/Resource} opts.resource 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Resource}
     */
    createResource(environmentID, opts) {
      return this.createResourceWithHttpInfo(environmentID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * DELETE Resource
     * @param {String} environmentID 
     * @param {String} resourceID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteResourceWithHttpInfo(environmentID, resourceID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling deleteResource");
      }
      // verify the required parameter 'resourceID' is set
      if (resourceID === undefined || resourceID === null) {
        throw new Error("Missing the required parameter 'resourceID' when calling deleteResource");
      }

      let pathParams = {
        'environmentID': environmentID,
        'resourceID': resourceID
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
        '/environments/{environmentID}/resources/{resourceID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * DELETE Resource
     * @param {String} environmentID 
     * @param {String} resourceID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteResource(environmentID, resourceID) {
      return this.deleteResourceWithHttpInfo(environmentID, resourceID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * READ All Resources
     * @param {String} environmentID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityArray} and HTTP response
     */
    readAllResourcesWithHttpInfo(environmentID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling readAllResources");
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
        '/environments/{environmentID}/resources', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * READ All Resources
     * @param {String} environmentID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityArray}
     */
    readAllResources(environmentID) {
      return this.readAllResourcesWithHttpInfo(environmentID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * READ One Resource
     * @param {String} environmentID 
     * @param {String} resourceID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Resource} and HTTP response
     */
    readOneResourceWithHttpInfo(environmentID, resourceID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling readOneResource");
      }
      // verify the required parameter 'resourceID' is set
      if (resourceID === undefined || resourceID === null) {
        throw new Error("Missing the required parameter 'resourceID' when calling readOneResource");
      }

      let pathParams = {
        'environmentID': environmentID,
        'resourceID': resourceID
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
      let returnType = Resource;
      return this.apiClient.callApi(
        '/environments/{environmentID}/resources/{resourceID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * READ One Resource
     * @param {String} environmentID 
     * @param {String} resourceID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Resource}
     */
    readOneResource(environmentID, resourceID) {
      return this.readOneResourceWithHttpInfo(environmentID, resourceID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * UPDATE Resource
     * @param {String} environmentID 
     * @param {String} resourceID 
     * @param {Object} opts Optional parameters
     * @param {module:model/Resource} [resource] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Resource} and HTTP response
     */
    updateResourceWithHttpInfo(environmentID, resourceID, opts) {
      opts = opts || {};
      let postBody = opts['resource'];
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling updateResource");
      }
      // verify the required parameter 'resourceID' is set
      if (resourceID === undefined || resourceID === null) {
        throw new Error("Missing the required parameter 'resourceID' when calling updateResource");
      }

      let pathParams = {
        'environmentID': environmentID,
        'resourceID': resourceID
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
      let returnType = Resource;
      return this.apiClient.callApi(
        '/environments/{environmentID}/resources/{resourceID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * UPDATE Resource
     * @param {String} environmentID 
     * @param {String} resourceID 
     * @param {Object} opts Optional parameters
     * @param {module:model/Resource} opts.resource 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Resource}
     */
    updateResource(environmentID, resourceID, opts) {
      return this.updateResourceWithHttpInfo(environmentID, resourceID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
