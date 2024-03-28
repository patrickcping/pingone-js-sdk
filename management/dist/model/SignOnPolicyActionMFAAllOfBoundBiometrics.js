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
 * The SignOnPolicyActionMFAAllOfBoundBiometrics model module.
 * @module model/SignOnPolicyActionMFAAllOfBoundBiometrics
 * @version 2023-06-29
 */
class SignOnPolicyActionMFAAllOfBoundBiometrics {
  /**
   * Constructs a new <code>SignOnPolicyActionMFAAllOfBoundBiometrics</code>.
   * Specifies MFA through a FIDO2 biometrics platform device.
   * @alias module:model/SignOnPolicyActionMFAAllOfBoundBiometrics
   */
  constructor() {
    SignOnPolicyActionMFAAllOfBoundBiometrics.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>SignOnPolicyActionMFAAllOfBoundBiometrics</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SignOnPolicyActionMFAAllOfBoundBiometrics} obj Optional instance to populate.
   * @return {module:model/SignOnPolicyActionMFAAllOfBoundBiometrics} The populated <code>SignOnPolicyActionMFAAllOfBoundBiometrics</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SignOnPolicyActionMFAAllOfBoundBiometrics();
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>SignOnPolicyActionMFAAllOfBoundBiometrics</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SignOnPolicyActionMFAAllOfBoundBiometrics</code>.
   */
  static validateJSON(data) {
    return true;
  }
}

/**
 * A boolean that specifies whether to permit users to authenticate with a FIDO2 biometrics platform device.
 * @member {Boolean} enabled
 * @default false
 */
SignOnPolicyActionMFAAllOfBoundBiometrics.prototype['enabled'] = false;
export default SignOnPolicyActionMFAAllOfBoundBiometrics;