/**
 * PingOne Platform API - PingOne MFA
 * The PingOne Platform API covering the PingOne MFA service
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
* UserMFADevices service.
* @module api/UserMFADevicesApi
* @version 2023-06-29
*/
export default class UserMFADevicesApi {

    /**
    * Constructs a new UserMFADevicesApi. 
    * @alias module:api/UserMFADevicesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * DELETE Device Order
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {Object} opts Optional parameters
     * @param {String} [contentType] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    environmentsEnvironmentIDUsersUserIDDevicesDeleteWithHttpInfo(environmentID, userID, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling environmentsEnvironmentIDUsersUserIDDevicesDelete");
      }
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling environmentsEnvironmentIDUsersUserIDDevicesDelete");
      }

      let pathParams = {
        'environmentID': environmentID,
        'userID': userID
      };
      let queryParams = {
      };
      let headerParams = {
        'Content-Type': opts['contentType']
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/environments/{environmentID}/users/{userID}/devices', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * DELETE Device Order
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {Object} opts Optional parameters
     * @param {String} opts.contentType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    environmentsEnvironmentIDUsersUserIDDevicesDelete(environmentID, userID, opts) {
      return this.environmentsEnvironmentIDUsersUserIDDevicesDeleteWithHttpInfo(environmentID, userID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * DELETE MFA User Device
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {String} deviceID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    environmentsEnvironmentIDUsersUserIDDevicesDeviceIDDeleteWithHttpInfo(environmentID, userID, deviceID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling environmentsEnvironmentIDUsersUserIDDevicesDeviceIDDelete");
      }
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling environmentsEnvironmentIDUsersUserIDDevicesDeviceIDDelete");
      }
      // verify the required parameter 'deviceID' is set
      if (deviceID === undefined || deviceID === null) {
        throw new Error("Missing the required parameter 'deviceID' when calling environmentsEnvironmentIDUsersUserIDDevicesDeviceIDDelete");
      }

      let pathParams = {
        'environmentID': environmentID,
        'userID': userID,
        'deviceID': deviceID
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
        '/environments/{environmentID}/users/{userID}/devices/{deviceID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * DELETE MFA User Device
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {String} deviceID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    environmentsEnvironmentIDUsersUserIDDevicesDeviceIDDelete(environmentID, userID, deviceID) {
      return this.environmentsEnvironmentIDUsersUserIDDevicesDeviceIDDeleteWithHttpInfo(environmentID, userID, deviceID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * READ One MFA User Device
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {String} deviceID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    environmentsEnvironmentIDUsersUserIDDevicesDeviceIDGetWithHttpInfo(environmentID, userID, deviceID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling environmentsEnvironmentIDUsersUserIDDevicesDeviceIDGet");
      }
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling environmentsEnvironmentIDUsersUserIDDevicesDeviceIDGet");
      }
      // verify the required parameter 'deviceID' is set
      if (deviceID === undefined || deviceID === null) {
        throw new Error("Missing the required parameter 'deviceID' when calling environmentsEnvironmentIDUsersUserIDDevicesDeviceIDGet");
      }

      let pathParams = {
        'environmentID': environmentID,
        'userID': userID,
        'deviceID': deviceID
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
        '/environments/{environmentID}/users/{userID}/devices/{deviceID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * READ One MFA User Device
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {String} deviceID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    environmentsEnvironmentIDUsersUserIDDevicesDeviceIDGet(environmentID, userID, deviceID) {
      return this.environmentsEnvironmentIDUsersUserIDDevicesDeviceIDGetWithHttpInfo(environmentID, userID, deviceID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * SEND MFA Device Logs
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {String} deviceID 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} [body] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    environmentsEnvironmentIDUsersUserIDDevicesDeviceIDLogsPutWithHttpInfo(environmentID, userID, deviceID, opts) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling environmentsEnvironmentIDUsersUserIDDevicesDeviceIDLogsPut");
      }
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling environmentsEnvironmentIDUsersUserIDDevicesDeviceIDLogsPut");
      }
      // verify the required parameter 'deviceID' is set
      if (deviceID === undefined || deviceID === null) {
        throw new Error("Missing the required parameter 'deviceID' when calling environmentsEnvironmentIDUsersUserIDDevicesDeviceIDLogsPut");
      }

      let pathParams = {
        'environmentID': environmentID,
        'userID': userID,
        'deviceID': deviceID
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
      let returnType = null;
      return this.apiClient.callApi(
        '/environments/{environmentID}/users/{userID}/devices/{deviceID}/logs', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * SEND MFA Device Logs
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {String} deviceID 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    environmentsEnvironmentIDUsersUserIDDevicesDeviceIDLogsPut(environmentID, userID, deviceID, opts) {
      return this.environmentsEnvironmentIDUsersUserIDDevicesDeviceIDLogsPutWithHttpInfo(environmentID, userID, deviceID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * UPDATE Device Nickname
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {String} deviceID 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} [body] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    environmentsEnvironmentIDUsersUserIDDevicesDeviceIDNicknamePutWithHttpInfo(environmentID, userID, deviceID, opts) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling environmentsEnvironmentIDUsersUserIDDevicesDeviceIDNicknamePut");
      }
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling environmentsEnvironmentIDUsersUserIDDevicesDeviceIDNicknamePut");
      }
      // verify the required parameter 'deviceID' is set
      if (deviceID === undefined || deviceID === null) {
        throw new Error("Missing the required parameter 'deviceID' when calling environmentsEnvironmentIDUsersUserIDDevicesDeviceIDNicknamePut");
      }

      let pathParams = {
        'environmentID': environmentID,
        'userID': userID,
        'deviceID': deviceID
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
      let returnType = null;
      return this.apiClient.callApi(
        '/environments/{environmentID}/users/{userID}/devices/{deviceID}/nickname', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * UPDATE Device Nickname
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {String} deviceID 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    environmentsEnvironmentIDUsersUserIDDevicesDeviceIDNicknamePut(environmentID, userID, deviceID, opts) {
      return this.environmentsEnvironmentIDUsersUserIDDevicesDeviceIDNicknamePutWithHttpInfo(environmentID, userID, deviceID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * ACTIVATE MFA User Device
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {String} deviceID 
     * @param {Object} opts Optional parameters
     * @param {String} [contentType] 
     * @param {Object.<String, Object>} [body] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    environmentsEnvironmentIDUsersUserIDDevicesDeviceIDPostWithHttpInfo(environmentID, userID, deviceID, opts) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling environmentsEnvironmentIDUsersUserIDDevicesDeviceIDPost");
      }
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling environmentsEnvironmentIDUsersUserIDDevicesDeviceIDPost");
      }
      // verify the required parameter 'deviceID' is set
      if (deviceID === undefined || deviceID === null) {
        throw new Error("Missing the required parameter 'deviceID' when calling environmentsEnvironmentIDUsersUserIDDevicesDeviceIDPost");
      }

      let pathParams = {
        'environmentID': environmentID,
        'userID': userID,
        'deviceID': deviceID
      };
      let queryParams = {
      };
      let headerParams = {
        'Content-Type': opts['contentType']
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/environments/{environmentID}/users/{userID}/devices/{deviceID}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * ACTIVATE MFA User Device
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {String} deviceID 
     * @param {Object} opts Optional parameters
     * @param {String} opts.contentType 
     * @param {Object.<String, Object>} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    environmentsEnvironmentIDUsersUserIDDevicesDeviceIDPost(environmentID, userID, deviceID, opts) {
      return this.environmentsEnvironmentIDUsersUserIDDevicesDeviceIDPostWithHttpInfo(environmentID, userID, deviceID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * READ All MFA User Devices
     * @param {String} environmentID 
     * @param {String} userID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    environmentsEnvironmentIDUsersUserIDDevicesGetWithHttpInfo(environmentID, userID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling environmentsEnvironmentIDUsersUserIDDevicesGet");
      }
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling environmentsEnvironmentIDUsersUserIDDevicesGet");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/environments/{environmentID}/users/{userID}/devices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * READ All MFA User Devices
     * @param {String} environmentID 
     * @param {String} userID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    environmentsEnvironmentIDUsersUserIDDevicesGet(environmentID, userID) {
      return this.environmentsEnvironmentIDUsersUserIDDevicesGetWithHttpInfo(environmentID, userID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * SET Device Order
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {Object} opts Optional parameters
     * @param {String} [contentType] 
     * @param {Object.<String, Object>} [body] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    environmentsEnvironmentIDUsersUserIDDevicesPostWithHttpInfo(environmentID, userID, opts) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling environmentsEnvironmentIDUsersUserIDDevicesPost");
      }
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling environmentsEnvironmentIDUsersUserIDDevicesPost");
      }

      let pathParams = {
        'environmentID': environmentID,
        'userID': userID
      };
      let queryParams = {
      };
      let headerParams = {
        'Content-Type': opts['contentType']
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/environments/{environmentID}/users/{userID}/devices', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * SET Device Order
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {Object} opts Optional parameters
     * @param {String} opts.contentType 
     * @param {Object.<String, Object>} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    environmentsEnvironmentIDUsersUserIDDevicesPost(environmentID, userID, opts) {
      return this.environmentsEnvironmentIDUsersUserIDDevicesPostWithHttpInfo(environmentID, userID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
