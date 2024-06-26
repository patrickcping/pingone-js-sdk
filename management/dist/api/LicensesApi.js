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
import License from '../model/License';
import LicenseName from '../model/LicenseName';
import P1Error from '../model/P1Error';

/**
* Licenses service.
* @module api/LicensesApi
* @version 2023-06-29
*/
export default class LicensesApi {
  /**
  * Constructs a new LicensesApi. 
  * @alias module:api/LicensesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * READ All Licenses
   * @param {String} organizationID 
   * @param {Object} opts Optional parameters
   * @param {String} [filter] For organizations with more than one license, you can use a filter to return the list of licenses in descending order.
   * @param {String} [order] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityArray} and HTTP response
   */
  readAllLicensesWithHttpInfo(organizationID, opts) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'organizationID' is set
    if (organizationID === undefined || organizationID === null) {
      throw new Error("Missing the required parameter 'organizationID' when calling readAllLicenses");
    }
    let pathParams = {
      'organizationID': organizationID
    };
    let queryParams = {
      'filter': opts['filter'],
      'order': opts['order']
    };
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = EntityArray;
    return this.apiClient.callApi('/organizations/{organizationID}/licenses', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ All Licenses
   * @param {String} organizationID 
   * @param {Object} opts Optional parameters
   * @param {String} opts.filter For organizations with more than one license, you can use a filter to return the list of licenses in descending order.
   * @param {String} opts.order 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityArray}
   */
  readAllLicenses(organizationID, opts) {
    return this.readAllLicensesWithHttpInfo(organizationID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * READ One License
   * @param {String} organizationID 
   * @param {String} licenseID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/License} and HTTP response
   */
  readOneLicenseWithHttpInfo(organizationID, licenseID) {
    let postBody = null;
    // verify the required parameter 'organizationID' is set
    if (organizationID === undefined || organizationID === null) {
      throw new Error("Missing the required parameter 'organizationID' when calling readOneLicense");
    }
    // verify the required parameter 'licenseID' is set
    if (licenseID === undefined || licenseID === null) {
      throw new Error("Missing the required parameter 'licenseID' when calling readOneLicense");
    }
    let pathParams = {
      'organizationID': organizationID,
      'licenseID': licenseID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = License;
    return this.apiClient.callApi('/organizations/{organizationID}/licenses/{licenseID}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ One License
   * @param {String} organizationID 
   * @param {String} licenseID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/License}
   */
  readOneLicense(organizationID, licenseID) {
    return this.readOneLicenseWithHttpInfo(organizationID, licenseID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * READ One License Name
   * @param {String} organizationID 
   * @param {String} licenseID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LicenseName} and HTTP response
   */
  readOneLicenseNameWithHttpInfo(organizationID, licenseID) {
    let postBody = null;
    // verify the required parameter 'organizationID' is set
    if (organizationID === undefined || organizationID === null) {
      throw new Error("Missing the required parameter 'organizationID' when calling readOneLicenseName");
    }
    // verify the required parameter 'licenseID' is set
    if (licenseID === undefined || licenseID === null) {
      throw new Error("Missing the required parameter 'licenseID' when calling readOneLicenseName");
    }
    let pathParams = {
      'organizationID': organizationID,
      'licenseID': licenseID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = LicenseName;
    return this.apiClient.callApi('/organizations/{organizationID}/licenses/{licenseID}/name', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ One License Name
   * @param {String} organizationID 
   * @param {String} licenseID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LicenseName}
   */
  readOneLicenseName(organizationID, licenseID) {
    return this.readOneLicenseNameWithHttpInfo(organizationID, licenseID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Update One License Name
   * @param {String} organizationID 
   * @param {String} licenseID 
   * @param {Object} opts Optional parameters
   * @param {module:model/LicenseName} [licenseName] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LicenseName} and HTTP response
   */
  updateOneLicenseNameWithHttpInfo(organizationID, licenseID, opts) {
    opts = opts || {};
    let postBody = opts['licenseName'];
    // verify the required parameter 'organizationID' is set
    if (organizationID === undefined || organizationID === null) {
      throw new Error("Missing the required parameter 'organizationID' when calling updateOneLicenseName");
    }
    // verify the required parameter 'licenseID' is set
    if (licenseID === undefined || licenseID === null) {
      throw new Error("Missing the required parameter 'licenseID' when calling updateOneLicenseName");
    }
    let pathParams = {
      'organizationID': organizationID,
      'licenseID': licenseID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = LicenseName;
    return this.apiClient.callApi('/organizations/{organizationID}/licenses/{licenseID}/name', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * Update One License Name
   * @param {String} organizationID 
   * @param {String} licenseID 
   * @param {Object} opts Optional parameters
   * @param {module:model/LicenseName} opts.licenseName 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LicenseName}
   */
  updateOneLicenseName(organizationID, licenseID, opts) {
    return this.updateOneLicenseNameWithHttpInfo(organizationID, licenseID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}