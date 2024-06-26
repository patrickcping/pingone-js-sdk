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

import ApiClient from '../ApiClient';
import DeviceAuthenticationPolicyOfflineDeviceOtpFailure from './DeviceAuthenticationPolicyOfflineDeviceOtpFailure';

/**
 * The DeviceAuthenticationPolicyTotpOtp model module.
 * @module model/DeviceAuthenticationPolicyTotpOtp
 * @version 2023-06-29
 */
class DeviceAuthenticationPolicyTotpOtp {
  /**
   * Constructs a new <code>DeviceAuthenticationPolicyTotpOtp</code>.
   * @alias module:model/DeviceAuthenticationPolicyTotpOtp
   * @param failure {module:model/DeviceAuthenticationPolicyOfflineDeviceOtpFailure} 
   */
  constructor(failure) {
    DeviceAuthenticationPolicyTotpOtp.initialize(this, failure);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, failure) {
    obj['failure'] = failure;
  }

  /**
   * Constructs a <code>DeviceAuthenticationPolicyTotpOtp</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceAuthenticationPolicyTotpOtp} obj Optional instance to populate.
   * @return {module:model/DeviceAuthenticationPolicyTotpOtp} The populated <code>DeviceAuthenticationPolicyTotpOtp</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DeviceAuthenticationPolicyTotpOtp();
      if (data.hasOwnProperty('failure')) {
        obj['failure'] = DeviceAuthenticationPolicyOfflineDeviceOtpFailure.constructFromObject(data['failure']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>DeviceAuthenticationPolicyTotpOtp</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeviceAuthenticationPolicyTotpOtp</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of DeviceAuthenticationPolicyTotpOtp.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    // validate the optional field `failure`
    if (data['failure']) {
      // data not null
      DeviceAuthenticationPolicyOfflineDeviceOtpFailure.validateJSON(data['failure']);
    }
    return true;
  }
}
DeviceAuthenticationPolicyTotpOtp.RequiredProperties = ["failure"];

/**
 * @member {module:model/DeviceAuthenticationPolicyOfflineDeviceOtpFailure} failure
 */
DeviceAuthenticationPolicyTotpOtp.prototype['failure'] = undefined;
export default DeviceAuthenticationPolicyTotpOtp;