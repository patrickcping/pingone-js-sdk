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
import CredentialDigitalWallet from '../model/CredentialDigitalWallet';
import EntityArray from '../model/EntityArray';
import P1Error from '../model/P1Error';

/**
* DigitalWallets service.
* @module api/DigitalWalletsApi
* @version 2023-06-29
*/
export default class DigitalWalletsApi {
  /**
  * Constructs a new DigitalWalletsApi. 
  * @alias module:api/DigitalWalletsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Create Digital Wallet
   * @param {String} environmentID 
   * @param {String} userID 
   * @param {Object} opts Optional parameters
   * @param {module:model/CredentialDigitalWallet} [credentialDigitalWallet] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CredentialDigitalWallet} and HTTP response
   */
  createDigitalWalletWithHttpInfo(environmentID, userID, opts) {
    opts = opts || {};
    let postBody = opts['credentialDigitalWallet'];
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling createDigitalWallet");
    }
    // verify the required parameter 'userID' is set
    if (userID === undefined || userID === null) {
      throw new Error("Missing the required parameter 'userID' when calling createDigitalWallet");
    }
    let pathParams = {
      'environmentID': environmentID,
      'userID': userID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = CredentialDigitalWallet;
    return this.apiClient.callApi('/environments/{environmentID}/users/{userID}/digitalWallets', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * Create Digital Wallet
   * @param {String} environmentID 
   * @param {String} userID 
   * @param {Object} opts Optional parameters
   * @param {module:model/CredentialDigitalWallet} opts.credentialDigitalWallet 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CredentialDigitalWallet}
   */
  createDigitalWallet(environmentID, userID, opts) {
    return this.createDigitalWalletWithHttpInfo(environmentID, userID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Delete Digital Wallet
   * @param {String} environmentID 
   * @param {String} userID 
   * @param {String} digitalWalletID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  deleteDigitalWalletWithHttpInfo(environmentID, userID, digitalWalletID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling deleteDigitalWallet");
    }
    // verify the required parameter 'userID' is set
    if (userID === undefined || userID === null) {
      throw new Error("Missing the required parameter 'userID' when calling deleteDigitalWallet");
    }
    // verify the required parameter 'digitalWalletID' is set
    if (digitalWalletID === undefined || digitalWalletID === null) {
      throw new Error("Missing the required parameter 'digitalWalletID' when calling deleteDigitalWallet");
    }
    let pathParams = {
      'environmentID': environmentID,
      'userID': userID,
      'digitalWalletID': digitalWalletID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi('/environments/{environmentID}/users/{userID}/digitalWallets/{digitalWalletID}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * Delete Digital Wallet
   * @param {String} environmentID 
   * @param {String} userID 
   * @param {String} digitalWalletID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  deleteDigitalWallet(environmentID, userID, digitalWalletID) {
    return this.deleteDigitalWalletWithHttpInfo(environmentID, userID, digitalWalletID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Read All Digital Wallets
   * @param {String} environmentID 
   * @param {String} userID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityArray} and HTTP response
   */
  readAllDigitalWalletsWithHttpInfo(environmentID, userID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readAllDigitalWallets");
    }
    // verify the required parameter 'userID' is set
    if (userID === undefined || userID === null) {
      throw new Error("Missing the required parameter 'userID' when calling readAllDigitalWallets");
    }
    let pathParams = {
      'environmentID': environmentID,
      'userID': userID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = EntityArray;
    return this.apiClient.callApi('/environments/{environmentID}/users/{userID}/digitalWallets', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * Read All Digital Wallets
   * @param {String} environmentID 
   * @param {String} userID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityArray}
   */
  readAllDigitalWallets(environmentID, userID) {
    return this.readAllDigitalWalletsWithHttpInfo(environmentID, userID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Read One Digital Wallet
   * @param {String} environmentID 
   * @param {String} userID 
   * @param {String} digitalWalletID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CredentialDigitalWallet} and HTTP response
   */
  readOneDigitalWalletWithHttpInfo(environmentID, userID, digitalWalletID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readOneDigitalWallet");
    }
    // verify the required parameter 'userID' is set
    if (userID === undefined || userID === null) {
      throw new Error("Missing the required parameter 'userID' when calling readOneDigitalWallet");
    }
    // verify the required parameter 'digitalWalletID' is set
    if (digitalWalletID === undefined || digitalWalletID === null) {
      throw new Error("Missing the required parameter 'digitalWalletID' when calling readOneDigitalWallet");
    }
    let pathParams = {
      'environmentID': environmentID,
      'userID': userID,
      'digitalWalletID': digitalWalletID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = CredentialDigitalWallet;
    return this.apiClient.callApi('/environments/{environmentID}/users/{userID}/digitalWallets/{digitalWalletID}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * Read One Digital Wallet
   * @param {String} environmentID 
   * @param {String} userID 
   * @param {String} digitalWalletID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CredentialDigitalWallet}
   */
  readOneDigitalWallet(environmentID, userID, digitalWalletID) {
    return this.readOneDigitalWalletWithHttpInfo(environmentID, userID, digitalWalletID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Read One Digital Wallet Credential
   * @param {String} environmentID 
   * @param {String} userID 
   * @param {String} digitalWalletID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityArray} and HTTP response
   */
  readOneDigitalWalletCredentialWithHttpInfo(environmentID, userID, digitalWalletID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readOneDigitalWalletCredential");
    }
    // verify the required parameter 'userID' is set
    if (userID === undefined || userID === null) {
      throw new Error("Missing the required parameter 'userID' when calling readOneDigitalWalletCredential");
    }
    // verify the required parameter 'digitalWalletID' is set
    if (digitalWalletID === undefined || digitalWalletID === null) {
      throw new Error("Missing the required parameter 'digitalWalletID' when calling readOneDigitalWalletCredential");
    }
    let pathParams = {
      'environmentID': environmentID,
      'userID': userID,
      'digitalWalletID': digitalWalletID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = EntityArray;
    return this.apiClient.callApi('/environments/{environmentID}/users/{userID}/digitalWallets/{digitalWalletID}/provisionedCredentials', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * Read One Digital Wallet Credential
   * @param {String} environmentID 
   * @param {String} userID 
   * @param {String} digitalWalletID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityArray}
   */
  readOneDigitalWalletCredential(environmentID, userID, digitalWalletID) {
    return this.readOneDigitalWalletCredentialWithHttpInfo(environmentID, userID, digitalWalletID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Update Digital Wallet
   * @param {String} environmentID 
   * @param {String} userID 
   * @param {String} digitalWalletID 
   * @param {Object} opts Optional parameters
   * @param {module:model/CredentialDigitalWallet} [credentialDigitalWallet] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CredentialDigitalWallet} and HTTP response
   */
  updateDigitalWalletWithHttpInfo(environmentID, userID, digitalWalletID, opts) {
    opts = opts || {};
    let postBody = opts['credentialDigitalWallet'];
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling updateDigitalWallet");
    }
    // verify the required parameter 'userID' is set
    if (userID === undefined || userID === null) {
      throw new Error("Missing the required parameter 'userID' when calling updateDigitalWallet");
    }
    // verify the required parameter 'digitalWalletID' is set
    if (digitalWalletID === undefined || digitalWalletID === null) {
      throw new Error("Missing the required parameter 'digitalWalletID' when calling updateDigitalWallet");
    }
    let pathParams = {
      'environmentID': environmentID,
      'userID': userID,
      'digitalWalletID': digitalWalletID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = CredentialDigitalWallet;
    return this.apiClient.callApi('/environments/{environmentID}/users/{userID}/digitalWallets/{digitalWalletID}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * Update Digital Wallet
   * @param {String} environmentID 
   * @param {String} userID 
   * @param {String} digitalWalletID 
   * @param {Object} opts Optional parameters
   * @param {module:model/CredentialDigitalWallet} opts.credentialDigitalWallet 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CredentialDigitalWallet}
   */
  updateDigitalWallet(environmentID, userID, digitalWalletID, opts) {
    return this.updateDigitalWalletWithHttpInfo(environmentID, userID, digitalWalletID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}