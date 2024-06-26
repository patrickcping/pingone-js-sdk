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

/**
 * The CredentialIssuanceRuleNotificationTemplate model module.
 * @module model/CredentialIssuanceRuleNotificationTemplate
 * @version 2023-06-29
 */
class CredentialIssuanceRuleNotificationTemplate {
  /**
   * Constructs a new <code>CredentialIssuanceRuleNotificationTemplate</code>.
   * @alias module:model/CredentialIssuanceRuleNotificationTemplate
   */
  constructor() {
    CredentialIssuanceRuleNotificationTemplate.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>CredentialIssuanceRuleNotificationTemplate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CredentialIssuanceRuleNotificationTemplate} obj Optional instance to populate.
   * @return {module:model/CredentialIssuanceRuleNotificationTemplate} The populated <code>CredentialIssuanceRuleNotificationTemplate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CredentialIssuanceRuleNotificationTemplate();
      if (data.hasOwnProperty('locale')) {
        obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
      }
      if (data.hasOwnProperty('variables')) {
        obj['variables'] = ApiClient.convertToType(data['variables'], Object);
      }
      if (data.hasOwnProperty('variant')) {
        obj['variant'] = ApiClient.convertToType(data['variant'], 'String');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>CredentialIssuanceRuleNotificationTemplate</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CredentialIssuanceRuleNotificationTemplate</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (data['locale'] && !(typeof data['locale'] === 'string' || data['locale'] instanceof String)) {
      throw new Error("Expected the field `locale` to be a primitive type in the JSON string but got " + data['locale']);
    }
    // ensure the json data is a string
    if (data['variant'] && !(typeof data['variant'] === 'string' || data['variant'] instanceof String)) {
      throw new Error("Expected the field `variant` to be a primitive type in the JSON string but got " + data['variant']);
    }
    return true;
  }
}

/**
 * A string that specifies the ISO 2-character language code used for the notification; for example, en.
 * @member {String} locale
 */
CredentialIssuanceRuleNotificationTemplate.prototype['locale'] = undefined;

/**
 * An object of key:value pairs that defines the dynamic variables used by the content variant.
 * @member {Object} variables
 */
CredentialIssuanceRuleNotificationTemplate.prototype['variables'] = undefined;

/**
 * A string that specifies the unique user-defined name for the content variant that contains the message text used for the notification
 * @member {String} variant
 */
CredentialIssuanceRuleNotificationTemplate.prototype['variant'] = undefined;
export default CredentialIssuanceRuleNotificationTemplate;