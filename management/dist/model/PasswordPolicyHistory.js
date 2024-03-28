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

import ApiClient from '../ApiClient';

/**
 * The PasswordPolicyHistory model module.
 * @module model/PasswordPolicyHistory
 * @version 2023-06-29
 */
class PasswordPolicyHistory {
  /**
   * Constructs a new <code>PasswordPolicyHistory</code>.
   * Settings to control the users password history
   * @alias module:model/PasswordPolicyHistory
   */
  constructor() {
    PasswordPolicyHistory.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>PasswordPolicyHistory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PasswordPolicyHistory} obj Optional instance to populate.
   * @return {module:model/PasswordPolicyHistory} The populated <code>PasswordPolicyHistory</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PasswordPolicyHistory();
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('retentionDays')) {
        obj['retentionDays'] = ApiClient.convertToType(data['retentionDays'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>PasswordPolicyHistory</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PasswordPolicyHistory</code>.
   */
  static validateJSON(data) {
    return true;
  }
}

/**
 * Specifies the number of prior passwords to keep for prevention of password re-use. The value must be a positive, non-zero integer.
 * @member {Number} count
 */
PasswordPolicyHistory.prototype['count'] = undefined;

/**
 * The length of time to keep recent passwords for prevention of password re-use. The value must be a positive, non-zero integer.
 * @member {Number} retentionDays
 */
PasswordPolicyHistory.prototype['retentionDays'] = undefined;
export default PasswordPolicyHistory;