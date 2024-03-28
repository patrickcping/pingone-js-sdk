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
import NotificationsSettingsPhoneDeliverySettings from '../model/NotificationsSettingsPhoneDeliverySettings';
import P1Error from '../model/P1Error';

/**
* PhoneDeliverySettings service.
* @module api/PhoneDeliverySettingsApi
* @version 2023-06-29
*/
export default class PhoneDeliverySettingsApi {

    /**
    * Constructs a new PhoneDeliverySettingsApi. 
    * @alias module:api/PhoneDeliverySettingsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * CREATE Phone Delivery Settings
     * @param {String} environmentID 
     * @param {Object} opts Optional parameters
     * @param {module:model/NotificationsSettingsPhoneDeliverySettings} [notificationsSettingsPhoneDeliverySettings] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NotificationsSettingsPhoneDeliverySettings} and HTTP response
     */
    createPhoneDeliverySettingsWithHttpInfo(environmentID, opts) {
      opts = opts || {};
      let postBody = opts['notificationsSettingsPhoneDeliverySettings'];
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling createPhoneDeliverySettings");
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
      let returnType = NotificationsSettingsPhoneDeliverySettings;
      return this.apiClient.callApi(
        '/environments/{environmentID}/notificationsSettings/phoneDeliverySettings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * CREATE Phone Delivery Settings
     * @param {String} environmentID 
     * @param {Object} opts Optional parameters
     * @param {module:model/NotificationsSettingsPhoneDeliverySettings} opts.notificationsSettingsPhoneDeliverySettings 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NotificationsSettingsPhoneDeliverySettings}
     */
    createPhoneDeliverySettings(environmentID, opts) {
      return this.createPhoneDeliverySettingsWithHttpInfo(environmentID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * DELETE Phone Delivery Settings
     * @param {String} environmentID 
     * @param {String} phoneDeliverySettingsID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deletePhoneDeliverySettingsWithHttpInfo(environmentID, phoneDeliverySettingsID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling deletePhoneDeliverySettings");
      }
      // verify the required parameter 'phoneDeliverySettingsID' is set
      if (phoneDeliverySettingsID === undefined || phoneDeliverySettingsID === null) {
        throw new Error("Missing the required parameter 'phoneDeliverySettingsID' when calling deletePhoneDeliverySettings");
      }

      let pathParams = {
        'environmentID': environmentID,
        'phoneDeliverySettingsID': phoneDeliverySettingsID
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
        '/environments/{environmentID}/notificationsSettings/phoneDeliverySettings/{phoneDeliverySettingsID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * DELETE Phone Delivery Settings
     * @param {String} environmentID 
     * @param {String} phoneDeliverySettingsID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deletePhoneDeliverySettings(environmentID, phoneDeliverySettingsID) {
      return this.deletePhoneDeliverySettingsWithHttpInfo(environmentID, phoneDeliverySettingsID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * READ All Phone Delivery Settings
     * @param {String} environmentID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityArray} and HTTP response
     */
    readAllPhoneDeliverySettingsWithHttpInfo(environmentID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling readAllPhoneDeliverySettings");
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
        '/environments/{environmentID}/notificationsSettings/phoneDeliverySettings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * READ All Phone Delivery Settings
     * @param {String} environmentID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityArray}
     */
    readAllPhoneDeliverySettings(environmentID) {
      return this.readAllPhoneDeliverySettingsWithHttpInfo(environmentID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * READ One Phone Delivery Settings
     * @param {String} environmentID 
     * @param {String} phoneDeliverySettingsID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NotificationsSettingsPhoneDeliverySettings} and HTTP response
     */
    readOnePhoneDeliverySettingsWithHttpInfo(environmentID, phoneDeliverySettingsID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling readOnePhoneDeliverySettings");
      }
      // verify the required parameter 'phoneDeliverySettingsID' is set
      if (phoneDeliverySettingsID === undefined || phoneDeliverySettingsID === null) {
        throw new Error("Missing the required parameter 'phoneDeliverySettingsID' when calling readOnePhoneDeliverySettings");
      }

      let pathParams = {
        'environmentID': environmentID,
        'phoneDeliverySettingsID': phoneDeliverySettingsID
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
      let returnType = NotificationsSettingsPhoneDeliverySettings;
      return this.apiClient.callApi(
        '/environments/{environmentID}/notificationsSettings/phoneDeliverySettings/{phoneDeliverySettingsID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * READ One Phone Delivery Settings
     * @param {String} environmentID 
     * @param {String} phoneDeliverySettingsID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NotificationsSettingsPhoneDeliverySettings}
     */
    readOnePhoneDeliverySettings(environmentID, phoneDeliverySettingsID) {
      return this.readOnePhoneDeliverySettingsWithHttpInfo(environmentID, phoneDeliverySettingsID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * UPDATE Phone Delivery Settings
     * @param {String} environmentID 
     * @param {String} phoneDeliverySettingsID 
     * @param {Object} opts Optional parameters
     * @param {module:model/NotificationsSettingsPhoneDeliverySettings} [notificationsSettingsPhoneDeliverySettings] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NotificationsSettingsPhoneDeliverySettings} and HTTP response
     */
    updatePhoneDeliverySettingsWithHttpInfo(environmentID, phoneDeliverySettingsID, opts) {
      opts = opts || {};
      let postBody = opts['notificationsSettingsPhoneDeliverySettings'];
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling updatePhoneDeliverySettings");
      }
      // verify the required parameter 'phoneDeliverySettingsID' is set
      if (phoneDeliverySettingsID === undefined || phoneDeliverySettingsID === null) {
        throw new Error("Missing the required parameter 'phoneDeliverySettingsID' when calling updatePhoneDeliverySettings");
      }

      let pathParams = {
        'environmentID': environmentID,
        'phoneDeliverySettingsID': phoneDeliverySettingsID
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
      let returnType = NotificationsSettingsPhoneDeliverySettings;
      return this.apiClient.callApi(
        '/environments/{environmentID}/notificationsSettings/phoneDeliverySettings/{phoneDeliverySettingsID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * UPDATE Phone Delivery Settings
     * @param {String} environmentID 
     * @param {String} phoneDeliverySettingsID 
     * @param {Object} opts Optional parameters
     * @param {module:model/NotificationsSettingsPhoneDeliverySettings} opts.notificationsSettingsPhoneDeliverySettings 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NotificationsSettingsPhoneDeliverySettings}
     */
    updatePhoneDeliverySettings(environmentID, phoneDeliverySettingsID, opts) {
      return this.updatePhoneDeliverySettingsWithHttpInfo(environmentID, phoneDeliverySettingsID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
