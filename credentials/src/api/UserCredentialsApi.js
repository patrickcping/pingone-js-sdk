/**
 * PingOne Platform API - Credentials
 * The PingOne Platform API covering the PingOne Credentials service
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
import UserCredential from '../model/UserCredential';

/**
* UserCredentials service.
* @module api/UserCredentialsApi
* @version 2023-06-29
*/
export default class UserCredentialsApi {

    /**
    * Constructs a new UserCredentialsApi. 
    * @alias module:api/UserCredentialsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a User Credential
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {Object} opts Optional parameters
     * @param {module:model/UserCredential} [userCredential] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserCredential} and HTTP response
     */
    createAUserCredentialWithHttpInfo(environmentID, userID, opts) {
      opts = opts || {};
      let postBody = opts['userCredential'];
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling createAUserCredential");
      }
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling createAUserCredential");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UserCredential;
      return this.apiClient.callApi(
        '/environments/{environmentID}/users/{userID}/credentials', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a User Credential
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {Object} opts Optional parameters
     * @param {module:model/UserCredential} opts.userCredential 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserCredential}
     */
    createAUserCredential(environmentID, userID, opts) {
      return this.createAUserCredentialWithHttpInfo(environmentID, userID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Read All User Credentials
     * @param {String} environmentID 
     * @param {String} userID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityArray} and HTTP response
     */
    readAllUserCredentialsWithHttpInfo(environmentID, userID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling readAllUserCredentials");
      }
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling readAllUserCredentials");
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
      let returnType = EntityArray;
      return this.apiClient.callApi(
        '/environments/{environmentID}/users/{userID}/credentials', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Read All User Credentials
     * @param {String} environmentID 
     * @param {String} userID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityArray}
     */
    readAllUserCredentials(environmentID, userID) {
      return this.readAllUserCredentialsWithHttpInfo(environmentID, userID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Read One User Credential
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {String} credentialID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserCredential} and HTTP response
     */
    readOneUserCredentialWithHttpInfo(environmentID, userID, credentialID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling readOneUserCredential");
      }
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling readOneUserCredential");
      }
      // verify the required parameter 'credentialID' is set
      if (credentialID === undefined || credentialID === null) {
        throw new Error("Missing the required parameter 'credentialID' when calling readOneUserCredential");
      }

      let pathParams = {
        'environmentID': environmentID,
        'userID': userID,
        'credentialID': credentialID
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
      let returnType = UserCredential;
      return this.apiClient.callApi(
        '/environments/{environmentID}/users/{userID}/credentials/{credentialID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Read One User Credential
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {String} credentialID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserCredential}
     */
    readOneUserCredential(environmentID, userID, credentialID) {
      return this.readOneUserCredentialWithHttpInfo(environmentID, userID, credentialID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Read One User Credential Wallet
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {String} credentialID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityArray} and HTTP response
     */
    readOneUserCredentialWalletWithHttpInfo(environmentID, userID, credentialID) {
      let postBody = null;
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling readOneUserCredentialWallet");
      }
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling readOneUserCredentialWallet");
      }
      // verify the required parameter 'credentialID' is set
      if (credentialID === undefined || credentialID === null) {
        throw new Error("Missing the required parameter 'credentialID' when calling readOneUserCredentialWallet");
      }

      let pathParams = {
        'environmentID': environmentID,
        'userID': userID,
        'credentialID': credentialID
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
        '/environments/{environmentID}/users/{userID}/credentials/{credentialID}/provisionedCredentials', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Read One User Credential Wallet
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {String} credentialID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityArray}
     */
    readOneUserCredentialWallet(environmentID, userID, credentialID) {
      return this.readOneUserCredentialWalletWithHttpInfo(environmentID, userID, credentialID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a User Credential
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {String} credentialID 
     * @param {Object} opts Optional parameters
     * @param {module:model/UserCredential} [userCredential] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserCredential} and HTTP response
     */
    updateUserCredentialWithHttpInfo(environmentID, userID, credentialID, opts) {
      opts = opts || {};
      let postBody = opts['userCredential'];
      // verify the required parameter 'environmentID' is set
      if (environmentID === undefined || environmentID === null) {
        throw new Error("Missing the required parameter 'environmentID' when calling updateUserCredential");
      }
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling updateUserCredential");
      }
      // verify the required parameter 'credentialID' is set
      if (credentialID === undefined || credentialID === null) {
        throw new Error("Missing the required parameter 'credentialID' when calling updateUserCredential");
      }

      let pathParams = {
        'environmentID': environmentID,
        'userID': userID,
        'credentialID': credentialID
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
      let returnType = UserCredential;
      return this.apiClient.callApi(
        '/environments/{environmentID}/users/{userID}/credentials/{credentialID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a User Credential
     * @param {String} environmentID 
     * @param {String} userID 
     * @param {String} credentialID 
     * @param {Object} opts Optional parameters
     * @param {module:model/UserCredential} opts.userCredential 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserCredential}
     */
    updateUserCredential(environmentID, userID, credentialID, opts) {
      return this.updateUserCredentialWithHttpInfo(environmentID, userID, credentialID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
