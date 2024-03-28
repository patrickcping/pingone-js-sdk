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

import ApiClient from '../ApiClient';
import CredentialDigitalWallet from './CredentialDigitalWallet';
import CredentialIssuanceRule from './CredentialIssuanceRule';
import CredentialIssuanceRuleStagedChange from './CredentialIssuanceRuleStagedChange';
import DigitalWalletApplication from './DigitalWalletApplication';
import EntityArrayEmbeddedItemsInner from './EntityArrayEmbeddedItemsInner';
import ProvisionedCredential from './ProvisionedCredential';

/**
 * The EntityArrayEmbedded model module.
 * @module model/EntityArrayEmbedded
 * @version 2023-06-29
 */
class EntityArrayEmbedded {
  /**
   * Constructs a new <code>EntityArrayEmbedded</code>.
   * @alias module:model/EntityArrayEmbedded
   */
  constructor() {
    EntityArrayEmbedded.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>EntityArrayEmbedded</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EntityArrayEmbedded} obj Optional instance to populate.
   * @return {module:model/EntityArrayEmbedded} The populated <code>EntityArrayEmbedded</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EntityArrayEmbedded();
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [EntityArrayEmbeddedItemsInner]);
      }
      if (data.hasOwnProperty('issuanceRules')) {
        obj['issuanceRules'] = ApiClient.convertToType(data['issuanceRules'], [CredentialIssuanceRule]);
      }
      if (data.hasOwnProperty('stagedChanges')) {
        obj['stagedChanges'] = ApiClient.convertToType(data['stagedChanges'], [CredentialIssuanceRuleStagedChange]);
      }
      if (data.hasOwnProperty('digitalWalletApplications')) {
        obj['digitalWalletApplications'] = ApiClient.convertToType(data['digitalWalletApplications'], [DigitalWalletApplication]);
      }
      if (data.hasOwnProperty('digitalWallets')) {
        obj['digitalWallets'] = ApiClient.convertToType(data['digitalWallets'], [CredentialDigitalWallet]);
      }
      if (data.hasOwnProperty('provisionedCredentials')) {
        obj['provisionedCredentials'] = ApiClient.convertToType(data['provisionedCredentials'], [ProvisionedCredential]);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>EntityArrayEmbedded</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EntityArrayEmbedded</code>.
   */
  static validateJSON(data) {
    if (data['items']) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data['items'])) {
        throw new Error("Expected the field `items` to be an array in the JSON data but got " + data['items']);
      }
      // validate the optional field `items` (array)
      for (const item of data['items']) {
        EntityArrayEmbeddedItemsInner.validateJSON(item);
      }
      ;
    }
    if (data['issuanceRules']) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data['issuanceRules'])) {
        throw new Error("Expected the field `issuanceRules` to be an array in the JSON data but got " + data['issuanceRules']);
      }
      // validate the optional field `issuanceRules` (array)
      for (const item of data['issuanceRules']) {
        CredentialIssuanceRule.validateJSON(item);
      }
      ;
    }
    if (data['stagedChanges']) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data['stagedChanges'])) {
        throw new Error("Expected the field `stagedChanges` to be an array in the JSON data but got " + data['stagedChanges']);
      }
      // validate the optional field `stagedChanges` (array)
      for (const item of data['stagedChanges']) {
        CredentialIssuanceRuleStagedChange.validateJSON(item);
      }
      ;
    }
    if (data['digitalWalletApplications']) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data['digitalWalletApplications'])) {
        throw new Error("Expected the field `digitalWalletApplications` to be an array in the JSON data but got " + data['digitalWalletApplications']);
      }
      // validate the optional field `digitalWalletApplications` (array)
      for (const item of data['digitalWalletApplications']) {
        DigitalWalletApplication.validateJSON(item);
      }
      ;
    }
    if (data['digitalWallets']) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data['digitalWallets'])) {
        throw new Error("Expected the field `digitalWallets` to be an array in the JSON data but got " + data['digitalWallets']);
      }
      // validate the optional field `digitalWallets` (array)
      for (const item of data['digitalWallets']) {
        CredentialDigitalWallet.validateJSON(item);
      }
      ;
    }
    if (data['provisionedCredentials']) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data['provisionedCredentials'])) {
        throw new Error("Expected the field `provisionedCredentials` to be an array in the JSON data but got " + data['provisionedCredentials']);
      }
      // validate the optional field `provisionedCredentials` (array)
      for (const item of data['provisionedCredentials']) {
        ProvisionedCredential.validateJSON(item);
      }
      ;
    }
    return true;
  }
}

/**
 * @member {Array.<module:model/EntityArrayEmbeddedItemsInner>} items
 */
EntityArrayEmbedded.prototype['items'] = undefined;

/**
 * @member {Array.<module:model/CredentialIssuanceRule>} issuanceRules
 */
EntityArrayEmbedded.prototype['issuanceRules'] = undefined;

/**
 * @member {Array.<module:model/CredentialIssuanceRuleStagedChange>} stagedChanges
 */
EntityArrayEmbedded.prototype['stagedChanges'] = undefined;

/**
 * @member {Array.<module:model/DigitalWalletApplication>} digitalWalletApplications
 */
EntityArrayEmbedded.prototype['digitalWalletApplications'] = undefined;

/**
 * @member {Array.<module:model/CredentialDigitalWallet>} digitalWallets
 */
EntityArrayEmbedded.prototype['digitalWallets'] = undefined;

/**
 * @member {Array.<module:model/ProvisionedCredential>} provisionedCredentials
 */
EntityArrayEmbedded.prototype['provisionedCredentials'] = undefined;
export default EntityArrayEmbedded;