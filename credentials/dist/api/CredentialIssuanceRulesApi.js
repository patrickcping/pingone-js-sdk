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
import CredentialIssuanceRule from '../model/CredentialIssuanceRule';
import CredentialIssuanceRuleStagedChange from '../model/CredentialIssuanceRuleStagedChange';
import CredentialIssuanceRuleUsageCounts from '../model/CredentialIssuanceRuleUsageCounts';
import CredentialIssuanceRuleUsageDetails from '../model/CredentialIssuanceRuleUsageDetails';
import EntityArray from '../model/EntityArray';
import P1Error from '../model/P1Error';

/**
* CredentialIssuanceRules service.
* @module api/CredentialIssuanceRulesApi
* @version 2023-06-29
*/
export default class CredentialIssuanceRulesApi {
  /**
  * Constructs a new CredentialIssuanceRulesApi. 
  * @alias module:api/CredentialIssuanceRulesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Apply Credential Issuance Rule Staged Changes
   * @param {String} environmentID 
   * @param {String} credentialTypeID 
   * @param {String} credentialIssuanceRuleID 
   * @param {Object} opts Optional parameters
   * @param {String} [contentType] 
   * @param {module:model/CredentialIssuanceRuleStagedChange} [credentialIssuanceRuleStagedChange] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CredentialIssuanceRuleStagedChange} and HTTP response
   */
  applyCredentialIssuanceRuleStagedChangesWithHttpInfo(environmentID, credentialTypeID, credentialIssuanceRuleID, opts) {
    opts = opts || {};
    let postBody = opts['credentialIssuanceRuleStagedChange'];
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling applyCredentialIssuanceRuleStagedChanges");
    }
    // verify the required parameter 'credentialTypeID' is set
    if (credentialTypeID === undefined || credentialTypeID === null) {
      throw new Error("Missing the required parameter 'credentialTypeID' when calling applyCredentialIssuanceRuleStagedChanges");
    }
    // verify the required parameter 'credentialIssuanceRuleID' is set
    if (credentialIssuanceRuleID === undefined || credentialIssuanceRuleID === null) {
      throw new Error("Missing the required parameter 'credentialIssuanceRuleID' when calling applyCredentialIssuanceRuleStagedChanges");
    }
    let pathParams = {
      'environmentID': environmentID,
      'credentialTypeID': credentialTypeID,
      'credentialIssuanceRuleID': credentialIssuanceRuleID
    };
    let queryParams = {};
    let headerParams = {
      'Content-Type': opts['contentType']
    };
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = CredentialIssuanceRuleStagedChange;
    return this.apiClient.callApi('/environments/{environmentID}/credentialTypes/{credentialTypeID}/issuanceRules/{credentialIssuanceRuleID}/stagedChanges', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * Apply Credential Issuance Rule Staged Changes
   * @param {String} environmentID 
   * @param {String} credentialTypeID 
   * @param {String} credentialIssuanceRuleID 
   * @param {Object} opts Optional parameters
   * @param {String} opts.contentType 
   * @param {module:model/CredentialIssuanceRuleStagedChange} opts.credentialIssuanceRuleStagedChange 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CredentialIssuanceRuleStagedChange}
   */
  applyCredentialIssuanceRuleStagedChanges(environmentID, credentialTypeID, credentialIssuanceRuleID, opts) {
    return this.applyCredentialIssuanceRuleStagedChangesWithHttpInfo(environmentID, credentialTypeID, credentialIssuanceRuleID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Create Credential Issuance Rule
   * @param {String} environmentID 
   * @param {String} credentialTypeID 
   * @param {Object} opts Optional parameters
   * @param {module:model/CredentialIssuanceRule} [credentialIssuanceRule] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CredentialIssuanceRule} and HTTP response
   */
  createCredentialIssuanceRuleWithHttpInfo(environmentID, credentialTypeID, opts) {
    opts = opts || {};
    let postBody = opts['credentialIssuanceRule'];
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling createCredentialIssuanceRule");
    }
    // verify the required parameter 'credentialTypeID' is set
    if (credentialTypeID === undefined || credentialTypeID === null) {
      throw new Error("Missing the required parameter 'credentialTypeID' when calling createCredentialIssuanceRule");
    }
    let pathParams = {
      'environmentID': environmentID,
      'credentialTypeID': credentialTypeID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = CredentialIssuanceRule;
    return this.apiClient.callApi('/environments/{environmentID}/credentialTypes/{credentialTypeID}/issuanceRules', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * Create Credential Issuance Rule
   * @param {String} environmentID 
   * @param {String} credentialTypeID 
   * @param {Object} opts Optional parameters
   * @param {module:model/CredentialIssuanceRule} opts.credentialIssuanceRule 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CredentialIssuanceRule}
   */
  createCredentialIssuanceRule(environmentID, credentialTypeID, opts) {
    return this.createCredentialIssuanceRuleWithHttpInfo(environmentID, credentialTypeID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Delete Credential Issuance Rule
   * @param {String} environmentID 
   * @param {String} credentialTypeID 
   * @param {String} credentialIssuanceRuleID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  deleteCredentialIssuanceRuleWithHttpInfo(environmentID, credentialTypeID, credentialIssuanceRuleID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling deleteCredentialIssuanceRule");
    }
    // verify the required parameter 'credentialTypeID' is set
    if (credentialTypeID === undefined || credentialTypeID === null) {
      throw new Error("Missing the required parameter 'credentialTypeID' when calling deleteCredentialIssuanceRule");
    }
    // verify the required parameter 'credentialIssuanceRuleID' is set
    if (credentialIssuanceRuleID === undefined || credentialIssuanceRuleID === null) {
      throw new Error("Missing the required parameter 'credentialIssuanceRuleID' when calling deleteCredentialIssuanceRule");
    }
    let pathParams = {
      'environmentID': environmentID,
      'credentialTypeID': credentialTypeID,
      'credentialIssuanceRuleID': credentialIssuanceRuleID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi('/environments/{environmentID}/credentialTypes/{credentialTypeID}/issuanceRules/{credentialIssuanceRuleID}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * Delete Credential Issuance Rule
   * @param {String} environmentID 
   * @param {String} credentialTypeID 
   * @param {String} credentialIssuanceRuleID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  deleteCredentialIssuanceRule(environmentID, credentialTypeID, credentialIssuanceRuleID) {
    return this.deleteCredentialIssuanceRuleWithHttpInfo(environmentID, credentialTypeID, credentialIssuanceRuleID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Read All Credential Issuance Rules
   * @param {String} environmentID 
   * @param {String} credentialTypeID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityArray} and HTTP response
   */
  readAllCredentialIssuanceRulesWithHttpInfo(environmentID, credentialTypeID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readAllCredentialIssuanceRules");
    }
    // verify the required parameter 'credentialTypeID' is set
    if (credentialTypeID === undefined || credentialTypeID === null) {
      throw new Error("Missing the required parameter 'credentialTypeID' when calling readAllCredentialIssuanceRules");
    }
    let pathParams = {
      'environmentID': environmentID,
      'credentialTypeID': credentialTypeID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = EntityArray;
    return this.apiClient.callApi('/environments/{environmentID}/credentialTypes/{credentialTypeID}/issuanceRules', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * Read All Credential Issuance Rules
   * @param {String} environmentID 
   * @param {String} credentialTypeID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityArray}
   */
  readAllCredentialIssuanceRules(environmentID, credentialTypeID) {
    return this.readAllCredentialIssuanceRulesWithHttpInfo(environmentID, credentialTypeID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Read Credential Issuance Rule Staged Changes
   * @param {String} environmentID 
   * @param {String} credentialTypeID 
   * @param {String} credentialIssuanceRuleID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CredentialIssuanceRuleStagedChange} and HTTP response
   */
  readCredentialIssuanceRuleStagedChangesWithHttpInfo(environmentID, credentialTypeID, credentialIssuanceRuleID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readCredentialIssuanceRuleStagedChanges");
    }
    // verify the required parameter 'credentialTypeID' is set
    if (credentialTypeID === undefined || credentialTypeID === null) {
      throw new Error("Missing the required parameter 'credentialTypeID' when calling readCredentialIssuanceRuleStagedChanges");
    }
    // verify the required parameter 'credentialIssuanceRuleID' is set
    if (credentialIssuanceRuleID === undefined || credentialIssuanceRuleID === null) {
      throw new Error("Missing the required parameter 'credentialIssuanceRuleID' when calling readCredentialIssuanceRuleStagedChanges");
    }
    let pathParams = {
      'environmentID': environmentID,
      'credentialTypeID': credentialTypeID,
      'credentialIssuanceRuleID': credentialIssuanceRuleID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = CredentialIssuanceRuleStagedChange;
    return this.apiClient.callApi('/environments/{environmentID}/credentialTypes/{credentialTypeID}/issuanceRules/{credentialIssuanceRuleID}/stagedChanges', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * Read Credential Issuance Rule Staged Changes
   * @param {String} environmentID 
   * @param {String} credentialTypeID 
   * @param {String} credentialIssuanceRuleID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CredentialIssuanceRuleStagedChange}
   */
  readCredentialIssuanceRuleStagedChanges(environmentID, credentialTypeID, credentialIssuanceRuleID) {
    return this.readCredentialIssuanceRuleStagedChangesWithHttpInfo(environmentID, credentialTypeID, credentialIssuanceRuleID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Read Credential Issuance Rule Usage Counts
   * @param {String} environmentID 
   * @param {String} credentialTypeID 
   * @param {String} credentialIssuanceRuleID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CredentialIssuanceRuleUsageCounts} and HTTP response
   */
  readCredentialIssuanceRuleUsageCountsWithHttpInfo(environmentID, credentialTypeID, credentialIssuanceRuleID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readCredentialIssuanceRuleUsageCounts");
    }
    // verify the required parameter 'credentialTypeID' is set
    if (credentialTypeID === undefined || credentialTypeID === null) {
      throw new Error("Missing the required parameter 'credentialTypeID' when calling readCredentialIssuanceRuleUsageCounts");
    }
    // verify the required parameter 'credentialIssuanceRuleID' is set
    if (credentialIssuanceRuleID === undefined || credentialIssuanceRuleID === null) {
      throw new Error("Missing the required parameter 'credentialIssuanceRuleID' when calling readCredentialIssuanceRuleUsageCounts");
    }
    let pathParams = {
      'environmentID': environmentID,
      'credentialTypeID': credentialTypeID,
      'credentialIssuanceRuleID': credentialIssuanceRuleID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = CredentialIssuanceRuleUsageCounts;
    return this.apiClient.callApi('/environments/{environmentID}/credentialTypes/{credentialTypeID}/issuanceRules/{credentialIssuanceRuleID}/usageCounts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * Read Credential Issuance Rule Usage Counts
   * @param {String} environmentID 
   * @param {String} credentialTypeID 
   * @param {String} credentialIssuanceRuleID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CredentialIssuanceRuleUsageCounts}
   */
  readCredentialIssuanceRuleUsageCounts(environmentID, credentialTypeID, credentialIssuanceRuleID) {
    return this.readCredentialIssuanceRuleUsageCountsWithHttpInfo(environmentID, credentialTypeID, credentialIssuanceRuleID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Read Credential Issuance Rule Usage Details
   * @param {String} environmentID 
   * @param {String} credentialTypeID 
   * @param {String} credentialIssuanceRuleID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CredentialIssuanceRuleUsageDetails} and HTTP response
   */
  readCredentialIssuanceRuleUsageDetailsWithHttpInfo(environmentID, credentialTypeID, credentialIssuanceRuleID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readCredentialIssuanceRuleUsageDetails");
    }
    // verify the required parameter 'credentialTypeID' is set
    if (credentialTypeID === undefined || credentialTypeID === null) {
      throw new Error("Missing the required parameter 'credentialTypeID' when calling readCredentialIssuanceRuleUsageDetails");
    }
    // verify the required parameter 'credentialIssuanceRuleID' is set
    if (credentialIssuanceRuleID === undefined || credentialIssuanceRuleID === null) {
      throw new Error("Missing the required parameter 'credentialIssuanceRuleID' when calling readCredentialIssuanceRuleUsageDetails");
    }
    let pathParams = {
      'environmentID': environmentID,
      'credentialTypeID': credentialTypeID,
      'credentialIssuanceRuleID': credentialIssuanceRuleID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = CredentialIssuanceRuleUsageDetails;
    return this.apiClient.callApi('/environments/{environmentID}/credentialTypes/{credentialTypeID}/issuanceRules/{credentialIssuanceRuleID}/usageDetails', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * Read Credential Issuance Rule Usage Details
   * @param {String} environmentID 
   * @param {String} credentialTypeID 
   * @param {String} credentialIssuanceRuleID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CredentialIssuanceRuleUsageDetails}
   */
  readCredentialIssuanceRuleUsageDetails(environmentID, credentialTypeID, credentialIssuanceRuleID) {
    return this.readCredentialIssuanceRuleUsageDetailsWithHttpInfo(environmentID, credentialTypeID, credentialIssuanceRuleID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Read One Credential Issuance Rule
   * @param {String} environmentID 
   * @param {String} credentialTypeID 
   * @param {String} credentialIssuanceRuleID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CredentialIssuanceRule} and HTTP response
   */
  readOneCredentialIssuanceRuleWithHttpInfo(environmentID, credentialTypeID, credentialIssuanceRuleID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readOneCredentialIssuanceRule");
    }
    // verify the required parameter 'credentialTypeID' is set
    if (credentialTypeID === undefined || credentialTypeID === null) {
      throw new Error("Missing the required parameter 'credentialTypeID' when calling readOneCredentialIssuanceRule");
    }
    // verify the required parameter 'credentialIssuanceRuleID' is set
    if (credentialIssuanceRuleID === undefined || credentialIssuanceRuleID === null) {
      throw new Error("Missing the required parameter 'credentialIssuanceRuleID' when calling readOneCredentialIssuanceRule");
    }
    let pathParams = {
      'environmentID': environmentID,
      'credentialTypeID': credentialTypeID,
      'credentialIssuanceRuleID': credentialIssuanceRuleID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = CredentialIssuanceRule;
    return this.apiClient.callApi('/environments/{environmentID}/credentialTypes/{credentialTypeID}/issuanceRules/{credentialIssuanceRuleID}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * Read One Credential Issuance Rule
   * @param {String} environmentID 
   * @param {String} credentialTypeID 
   * @param {String} credentialIssuanceRuleID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CredentialIssuanceRule}
   */
  readOneCredentialIssuanceRule(environmentID, credentialTypeID, credentialIssuanceRuleID) {
    return this.readOneCredentialIssuanceRuleWithHttpInfo(environmentID, credentialTypeID, credentialIssuanceRuleID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Update Credential Issuance Rule
   * @param {String} environmentID 
   * @param {String} credentialTypeID 
   * @param {String} credentialIssuanceRuleID 
   * @param {Object} opts Optional parameters
   * @param {module:model/CredentialIssuanceRule} [credentialIssuanceRule] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CredentialIssuanceRule} and HTTP response
   */
  updateCredentialIssuanceRuleWithHttpInfo(environmentID, credentialTypeID, credentialIssuanceRuleID, opts) {
    opts = opts || {};
    let postBody = opts['credentialIssuanceRule'];
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling updateCredentialIssuanceRule");
    }
    // verify the required parameter 'credentialTypeID' is set
    if (credentialTypeID === undefined || credentialTypeID === null) {
      throw new Error("Missing the required parameter 'credentialTypeID' when calling updateCredentialIssuanceRule");
    }
    // verify the required parameter 'credentialIssuanceRuleID' is set
    if (credentialIssuanceRuleID === undefined || credentialIssuanceRuleID === null) {
      throw new Error("Missing the required parameter 'credentialIssuanceRuleID' when calling updateCredentialIssuanceRule");
    }
    let pathParams = {
      'environmentID': environmentID,
      'credentialTypeID': credentialTypeID,
      'credentialIssuanceRuleID': credentialIssuanceRuleID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = CredentialIssuanceRule;
    return this.apiClient.callApi('/environments/{environmentID}/credentialTypes/{credentialTypeID}/issuanceRules/{credentialIssuanceRuleID}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * Update Credential Issuance Rule
   * @param {String} environmentID 
   * @param {String} credentialTypeID 
   * @param {String} credentialIssuanceRuleID 
   * @param {Object} opts Optional parameters
   * @param {module:model/CredentialIssuanceRule} opts.credentialIssuanceRule 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CredentialIssuanceRule}
   */
  updateCredentialIssuanceRule(environmentID, credentialTypeID, credentialIssuanceRuleID, opts) {
    return this.updateCredentialIssuanceRuleWithHttpInfo(environmentID, credentialTypeID, credentialIssuanceRuleID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}