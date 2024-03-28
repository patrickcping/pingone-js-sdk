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
import P1Error from '../model/P1Error';

/**
* IntegrationCatalog service.
* @module api/IntegrationCatalogApi
* @version 2023-06-29
*/
export default class IntegrationCatalogApi {

    /**
    * Constructs a new IntegrationCatalogApi. 
    * @alias module:api/IntegrationCatalogApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * READ Integration Metadata
     * @param {String} environmentID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    environmentsEnvironmentIDIntegrationsGetWithHttpInfo(environmentID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling environmentsEnvironmentIDIntegrationsGet");
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
      let returnType = null;
      return this.apiClient.callApi(
        '/environments/{environmentID}/integrations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * READ Integration Metadata
     * @param {String} environmentID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    environmentsEnvironmentIDIntegrationsGet(environmentID) {
      return this.environmentsEnvironmentIDIntegrationsGetWithHttpInfo(environmentID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * READ One Integration Metadata
     * @param {String} environmentID 
     * @param {String} integrationID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    environmentsEnvironmentIDIntegrationsIntegrationIDGetWithHttpInfo(environmentID, integrationID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling environmentsEnvironmentIDIntegrationsIntegrationIDGet");
      }
      // verify the required parameter 'integrationID' is set
      if (integrationID === undefined || integrationID === null) {
        throw new Error("Missing the required parameter 'integrationID' when calling environmentsEnvironmentIDIntegrationsIntegrationIDGet");
      }

      let pathParams = {
        'environmentID': environmentID,
        'integrationID': integrationID
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
        '/environments/{environmentID}/integrations/{integrationID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * READ One Integration Metadata
     * @param {String} environmentID 
     * @param {String} integrationID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    environmentsEnvironmentIDIntegrationsIntegrationIDGet(environmentID, integrationID) {
      return this.environmentsEnvironmentIDIntegrationsIntegrationIDGetWithHttpInfo(environmentID, integrationID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * READ Integration Version Metadata
     * @param {String} environmentID 
     * @param {String} integrationID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    environmentsEnvironmentIDIntegrationsIntegrationIDVersionsGetWithHttpInfo(environmentID, integrationID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling environmentsEnvironmentIDIntegrationsIntegrationIDVersionsGet");
      }
      // verify the required parameter 'integrationID' is set
      if (integrationID === undefined || integrationID === null) {
        throw new Error("Missing the required parameter 'integrationID' when calling environmentsEnvironmentIDIntegrationsIntegrationIDVersionsGet");
      }

      let pathParams = {
        'environmentID': environmentID,
        'integrationID': integrationID
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
        '/environments/{environmentID}/integrations/{integrationID}/versions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * READ Integration Version Metadata
     * @param {String} environmentID 
     * @param {String} integrationID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    environmentsEnvironmentIDIntegrationsIntegrationIDVersionsGet(environmentID, integrationID) {
      return this.environmentsEnvironmentIDIntegrationsIntegrationIDVersionsGetWithHttpInfo(environmentID, integrationID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * READ Integration Version Asset Download
     * @param {String} environmentID 
     * @param {String} integrationID 
     * @param {String} integrationVersionID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    environmentsEnvironmentIDIntegrationsIntegrationIDVersionsIntegrationVersionIDAssetGetWithHttpInfo(environmentID, integrationID, integrationVersionID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling environmentsEnvironmentIDIntegrationsIntegrationIDVersionsIntegrationVersionIDAssetGet");
      }
      // verify the required parameter 'integrationID' is set
      if (integrationID === undefined || integrationID === null) {
        throw new Error("Missing the required parameter 'integrationID' when calling environmentsEnvironmentIDIntegrationsIntegrationIDVersionsIntegrationVersionIDAssetGet");
      }
      // verify the required parameter 'integrationVersionID' is set
      if (integrationVersionID === undefined || integrationVersionID === null) {
        throw new Error("Missing the required parameter 'integrationVersionID' when calling environmentsEnvironmentIDIntegrationsIntegrationIDVersionsIntegrationVersionIDAssetGet");
      }

      let pathParams = {
        'environmentID': environmentID,
        'integrationID': integrationID,
        'integrationVersionID': integrationVersionID
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
        '/environments/{environmentID}/integrations/{integrationID}/versions/{integrationVersionID}/asset', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * READ Integration Version Asset Download
     * @param {String} environmentID 
     * @param {String} integrationID 
     * @param {String} integrationVersionID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    environmentsEnvironmentIDIntegrationsIntegrationIDVersionsIntegrationVersionIDAssetGet(environmentID, integrationID, integrationVersionID) {
      return this.environmentsEnvironmentIDIntegrationsIntegrationIDVersionsIntegrationVersionIDAssetGetWithHttpInfo(environmentID, integrationID, integrationVersionID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * READ One Integration Version Metadata
     * @param {String} environmentID 
     * @param {String} integrationID 
     * @param {String} integrationVersionID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    environmentsEnvironmentIDIntegrationsIntegrationIDVersionsIntegrationVersionIDGetWithHttpInfo(environmentID, integrationID, integrationVersionID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling environmentsEnvironmentIDIntegrationsIntegrationIDVersionsIntegrationVersionIDGet");
      }
      // verify the required parameter 'integrationID' is set
      if (integrationID === undefined || integrationID === null) {
        throw new Error("Missing the required parameter 'integrationID' when calling environmentsEnvironmentIDIntegrationsIntegrationIDVersionsIntegrationVersionIDGet");
      }
      // verify the required parameter 'integrationVersionID' is set
      if (integrationVersionID === undefined || integrationVersionID === null) {
        throw new Error("Missing the required parameter 'integrationVersionID' when calling environmentsEnvironmentIDIntegrationsIntegrationIDVersionsIntegrationVersionIDGet");
      }

      let pathParams = {
        'environmentID': environmentID,
        'integrationID': integrationID,
        'integrationVersionID': integrationVersionID
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
        '/environments/{environmentID}/integrations/{integrationID}/versions/{integrationVersionID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * READ One Integration Version Metadata
     * @param {String} environmentID 
     * @param {String} integrationID 
     * @param {String} integrationVersionID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    environmentsEnvironmentIDIntegrationsIntegrationIDVersionsIntegrationVersionIDGet(environmentID, integrationID, integrationVersionID) {
      return this.environmentsEnvironmentIDIntegrationsIntegrationIDVersionsIntegrationVersionIDGetWithHttpInfo(environmentID, integrationID, integrationVersionID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
