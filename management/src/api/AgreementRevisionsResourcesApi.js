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
import AgreementLanguageRevision from '../model/AgreementLanguageRevision';
import EntityArray from '../model/EntityArray';
import P1Error from '../model/P1Error';

/**
* AgreementRevisionsResources service.
* @module api/AgreementRevisionsResourcesApi
* @version 2023-06-29
*/
export default class AgreementRevisionsResourcesApi {

    /**
    * Constructs a new AgreementRevisionsResourcesApi. 
    * @alias module:api/AgreementRevisionsResourcesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * CREATE Revision
     * @param {String} environmentID 
     * @param {String} agreementID 
     * @param {String} languageID 
     * @param {Object} opts Optional parameters
     * @param {module:model/AgreementLanguageRevision} [agreementLanguageRevision] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AgreementLanguageRevision} and HTTP response
     */
    createAgreementLanguageRevisionWithHttpInfo(environmentID, agreementID, languageID, opts) {
      opts = opts || {};
      let postBody = opts['agreementLanguageRevision'];
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling createAgreementLanguageRevision");
      }
      // verify the required parameter 'agreementID' is set
      if (agreementID === undefined || agreementID === null) {
        throw new Error("Missing the required parameter 'agreementID' when calling createAgreementLanguageRevision");
      }
      // verify the required parameter 'languageID' is set
      if (languageID === undefined || languageID === null) {
        throw new Error("Missing the required parameter 'languageID' when calling createAgreementLanguageRevision");
      }

      let pathParams = {
        'environmentID': environmentID,
        'agreementID': agreementID,
        'languageID': languageID
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
      let returnType = AgreementLanguageRevision;
      return this.apiClient.callApi(
        '/environments/{environmentID}/agreements/{agreementID}/languages/{languageID}/revisions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * CREATE Revision
     * @param {String} environmentID 
     * @param {String} agreementID 
     * @param {String} languageID 
     * @param {Object} opts Optional parameters
     * @param {module:model/AgreementLanguageRevision} opts.agreementLanguageRevision 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AgreementLanguageRevision}
     */
    createAgreementLanguageRevision(environmentID, agreementID, languageID, opts) {
      return this.createAgreementLanguageRevisionWithHttpInfo(environmentID, agreementID, languageID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * DELETE Revision
     * @param {String} environmentID 
     * @param {String} agreementID 
     * @param {String} languageID 
     * @param {String} revisionID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteAgreementLanguageRevisionWithHttpInfo(environmentID, agreementID, languageID, revisionID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling deleteAgreementLanguageRevision");
      }
      // verify the required parameter 'agreementID' is set
      if (agreementID === undefined || agreementID === null) {
        throw new Error("Missing the required parameter 'agreementID' when calling deleteAgreementLanguageRevision");
      }
      // verify the required parameter 'languageID' is set
      if (languageID === undefined || languageID === null) {
        throw new Error("Missing the required parameter 'languageID' when calling deleteAgreementLanguageRevision");
      }
      // verify the required parameter 'revisionID' is set
      if (revisionID === undefined || revisionID === null) {
        throw new Error("Missing the required parameter 'revisionID' when calling deleteAgreementLanguageRevision");
      }

      let pathParams = {
        'environmentID': environmentID,
        'agreementID': agreementID,
        'languageID': languageID,
        'revisionID': revisionID
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
        '/environments/{environmentID}/agreements/{agreementID}/languages/{languageID}/revisions/{revisionID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * DELETE Revision
     * @param {String} environmentID 
     * @param {String} agreementID 
     * @param {String} languageID 
     * @param {String} revisionID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteAgreementLanguageRevision(environmentID, agreementID, languageID, revisionID) {
      return this.deleteAgreementLanguageRevisionWithHttpInfo(environmentID, agreementID, languageID, revisionID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * READ All Revisions
     * @param {String} environmentID 
     * @param {String} agreementID 
     * @param {String} languageID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityArray} and HTTP response
     */
    readAllAgreementLanguageRevisionsWithHttpInfo(environmentID, agreementID, languageID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling readAllAgreementLanguageRevisions");
      }
      // verify the required parameter 'agreementID' is set
      if (agreementID === undefined || agreementID === null) {
        throw new Error("Missing the required parameter 'agreementID' when calling readAllAgreementLanguageRevisions");
      }
      // verify the required parameter 'languageID' is set
      if (languageID === undefined || languageID === null) {
        throw new Error("Missing the required parameter 'languageID' when calling readAllAgreementLanguageRevisions");
      }

      let pathParams = {
        'environmentID': environmentID,
        'agreementID': agreementID,
        'languageID': languageID
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
        '/environments/{environmentID}/agreements/{agreementID}/languages/{languageID}/revisions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * READ All Revisions
     * @param {String} environmentID 
     * @param {String} agreementID 
     * @param {String} languageID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityArray}
     */
    readAllAgreementLanguageRevisions(environmentID, agreementID, languageID) {
      return this.readAllAgreementLanguageRevisionsWithHttpInfo(environmentID, agreementID, languageID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * READ One Revision
     * @param {String} environmentID 
     * @param {String} agreementID 
     * @param {String} languageID 
     * @param {String} revisionID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AgreementLanguageRevision} and HTTP response
     */
    readOneAgreementLanguageRevisionWithHttpInfo(environmentID, agreementID, languageID, revisionID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling readOneAgreementLanguageRevision");
      }
      // verify the required parameter 'agreementID' is set
      if (agreementID === undefined || agreementID === null) {
        throw new Error("Missing the required parameter 'agreementID' when calling readOneAgreementLanguageRevision");
      }
      // verify the required parameter 'languageID' is set
      if (languageID === undefined || languageID === null) {
        throw new Error("Missing the required parameter 'languageID' when calling readOneAgreementLanguageRevision");
      }
      // verify the required parameter 'revisionID' is set
      if (revisionID === undefined || revisionID === null) {
        throw new Error("Missing the required parameter 'revisionID' when calling readOneAgreementLanguageRevision");
      }

      let pathParams = {
        'environmentID': environmentID,
        'agreementID': agreementID,
        'languageID': languageID,
        'revisionID': revisionID
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
      let returnType = AgreementLanguageRevision;
      return this.apiClient.callApi(
        '/environments/{environmentID}/agreements/{agreementID}/languages/{languageID}/revisions/{revisionID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * READ One Revision
     * @param {String} environmentID 
     * @param {String} agreementID 
     * @param {String} languageID 
     * @param {String} revisionID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AgreementLanguageRevision}
     */
    readOneAgreementLanguageRevision(environmentID, agreementID, languageID, revisionID) {
      return this.readOneAgreementLanguageRevisionWithHttpInfo(environmentID, agreementID, languageID, revisionID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
