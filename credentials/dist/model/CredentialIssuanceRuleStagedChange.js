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
import CredentialIssuanceRuleStagedChangeStagedChanges from './CredentialIssuanceRuleStagedChangeStagedChanges';

/**
 * The CredentialIssuanceRuleStagedChange model module.
 * @module model/CredentialIssuanceRuleStagedChange
 * @version 2023-06-29
 */
class CredentialIssuanceRuleStagedChange {
  /**
   * Constructs a new <code>CredentialIssuanceRuleStagedChange</code>.
   * @alias module:model/CredentialIssuanceRuleStagedChange
   */
  constructor() {
    CredentialIssuanceRuleStagedChange.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>CredentialIssuanceRuleStagedChange</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CredentialIssuanceRuleStagedChange} obj Optional instance to populate.
   * @return {module:model/CredentialIssuanceRuleStagedChange} The populated <code>CredentialIssuanceRuleStagedChange</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CredentialIssuanceRuleStagedChange();
      if (data.hasOwnProperty('issue')) {
        obj['issue'] = ApiClient.convertToType(data['issue'], ['String']);
      }
      if (data.hasOwnProperty('revoke')) {
        obj['revoke'] = ApiClient.convertToType(data['revoke'], ['String']);
      }
      if (data.hasOwnProperty('stagedChanges')) {
        obj['stagedChanges'] = CredentialIssuanceRuleStagedChangeStagedChanges.constructFromObject(data['stagedChanges']);
      }
      if (data.hasOwnProperty('update')) {
        obj['update'] = ApiClient.convertToType(data['update'], ['String']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>CredentialIssuanceRuleStagedChange</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CredentialIssuanceRuleStagedChange</code>.
   */
  static validateJSON(data) {
    // ensure the json data is an array
    if (!Array.isArray(data['issue'])) {
      throw new Error("Expected the field `issue` to be an array in the JSON data but got " + data['issue']);
    }
    // ensure the json data is an array
    if (!Array.isArray(data['revoke'])) {
      throw new Error("Expected the field `revoke` to be an array in the JSON data but got " + data['revoke']);
    }
    // validate the optional field `stagedChanges`
    if (data['stagedChanges']) {
      // data not null
      CredentialIssuanceRuleStagedChangeStagedChanges.validateJSON(data['stagedChanges']);
    }
    // ensure the json data is an array
    if (!Array.isArray(data['update'])) {
      throw new Error("Expected the field `update` to be an array in the JSON data but got " + data['update']);
    }
    return true;
  }
}

/**
 * An array that specifies one or more identifiers (UUIDs) of users whose credentials are in an issue action state and should be issued.
 * @member {Array.<String>} issue
 */
CredentialIssuanceRuleStagedChange.prototype['issue'] = undefined;

/**
 * An array that specifies one or more identifiers (UUIDs) of users whose credentials are in an revoke action state and should be issued.
 * @member {Array.<String>} revoke
 */
CredentialIssuanceRuleStagedChange.prototype['revoke'] = undefined;

/**
 * @member {module:model/CredentialIssuanceRuleStagedChangeStagedChanges} stagedChanges
 */
CredentialIssuanceRuleStagedChange.prototype['stagedChanges'] = undefined;

/**
 * An array that specifies one or more identifiers (UUIDs) of users whose credentials are in an update action state and should be issued.
 * @member {Array.<String>} update
 */
CredentialIssuanceRuleStagedChange.prototype['update'] = undefined;
export default CredentialIssuanceRuleStagedChange;