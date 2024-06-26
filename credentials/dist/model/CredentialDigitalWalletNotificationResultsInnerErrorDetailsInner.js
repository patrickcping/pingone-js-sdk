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
 * The CredentialDigitalWalletNotificationResultsInnerErrorDetailsInner model module.
 * @module model/CredentialDigitalWalletNotificationResultsInnerErrorDetailsInner
 * @version 2023-06-29
 */
class CredentialDigitalWalletNotificationResultsInnerErrorDetailsInner {
  /**
   * Constructs a new <code>CredentialDigitalWalletNotificationResultsInnerErrorDetailsInner</code>.
   * @alias module:model/CredentialDigitalWalletNotificationResultsInnerErrorDetailsInner
   */
  constructor() {
    CredentialDigitalWalletNotificationResultsInnerErrorDetailsInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>CredentialDigitalWalletNotificationResultsInnerErrorDetailsInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CredentialDigitalWalletNotificationResultsInnerErrorDetailsInner} obj Optional instance to populate.
   * @return {module:model/CredentialDigitalWalletNotificationResultsInnerErrorDetailsInner} The populated <code>CredentialDigitalWalletNotificationResultsInnerErrorDetailsInner</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CredentialDigitalWalletNotificationResultsInnerErrorDetailsInner();
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>CredentialDigitalWalletNotificationResultsInnerErrorDetailsInner</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CredentialDigitalWalletNotificationResultsInnerErrorDetailsInner</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
      throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
    }
    // ensure the json data is a string
    if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
      throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
    }
    return true;
  }
}

/**
 * @member {String} code
 */
CredentialDigitalWalletNotificationResultsInnerErrorDetailsInner.prototype['code'] = undefined;

/**
 * @member {String} message
 */
CredentialDigitalWalletNotificationResultsInnerErrorDetailsInner.prototype['message'] = undefined;
export default CredentialDigitalWalletNotificationResultsInnerErrorDetailsInner;