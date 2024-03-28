/**
 * PingOne Platform API - Agreement Management
 * The PingOne Platform API covering the PingOne Agreement Management service
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
import AgreementRevisionText from '../model/AgreementRevisionText';
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
   * READ One Agreement Language Revision
   * @param {String} environmentID 
   * @param {String} agreementID 
   * @param {String} languageID 
   * @param {String} revisionID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AgreementRevisionText} and HTTP response
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
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = AgreementRevisionText;
    return this.apiClient.callApi('/environments/{environmentID}/agreements/{agreementID}/languages/{languageID}/revisions/{revisionID}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ One Agreement Language Revision
   * @param {String} environmentID 
   * @param {String} agreementID 
   * @param {String} languageID 
   * @param {String} revisionID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AgreementRevisionText}
   */
  readOneAgreementLanguageRevision(environmentID, agreementID, languageID, revisionID) {
    return this.readOneAgreementLanguageRevisionWithHttpInfo(environmentID, agreementID, languageID, revisionID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}