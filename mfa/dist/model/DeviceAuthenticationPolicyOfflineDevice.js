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
import DeviceAuthenticationPolicyOfflineDeviceOtp from './DeviceAuthenticationPolicyOfflineDeviceOtp';

/**
 * The DeviceAuthenticationPolicyOfflineDevice model module.
 * @module model/DeviceAuthenticationPolicyOfflineDevice
 * @version 2023-06-29
 */
class DeviceAuthenticationPolicyOfflineDevice {
  /**
   * Constructs a new <code>DeviceAuthenticationPolicyOfflineDevice</code>.
   * @alias module:model/DeviceAuthenticationPolicyOfflineDevice
   * @param enabled {Boolean} Enabled or disabled in the policy.
   * @param otp {module:model/DeviceAuthenticationPolicyOfflineDeviceOtp} 
   */
  constructor(enabled, otp) {
    DeviceAuthenticationPolicyOfflineDevice.initialize(this, enabled, otp);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, enabled, otp) {
    obj['enabled'] = enabled;
    obj['otp'] = otp;
  }

  /**
   * Constructs a <code>DeviceAuthenticationPolicyOfflineDevice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceAuthenticationPolicyOfflineDevice} obj Optional instance to populate.
   * @return {module:model/DeviceAuthenticationPolicyOfflineDevice} The populated <code>DeviceAuthenticationPolicyOfflineDevice</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DeviceAuthenticationPolicyOfflineDevice();
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('pairingDisabled')) {
        obj['pairingDisabled'] = ApiClient.convertToType(data['pairingDisabled'], 'Boolean');
      }
      if (data.hasOwnProperty('otp')) {
        obj['otp'] = DeviceAuthenticationPolicyOfflineDeviceOtp.constructFromObject(data['otp']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>DeviceAuthenticationPolicyOfflineDevice</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeviceAuthenticationPolicyOfflineDevice</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of DeviceAuthenticationPolicyOfflineDevice.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    // validate the optional field `otp`
    if (data['otp']) {
      // data not null
      DeviceAuthenticationPolicyOfflineDeviceOtp.validateJSON(data['otp']);
    }
    return true;
  }
}
DeviceAuthenticationPolicyOfflineDevice.RequiredProperties = ["enabled", "otp"];

/**
 * Enabled or disabled in the policy.
 * @member {Boolean} enabled
 */
DeviceAuthenticationPolicyOfflineDevice.prototype['enabled'] = undefined;

/**
 * You can set `pairingDisabled` to true to prevent users from pairing new devices with the relevant method. You can use this option if you want to phase out an existing authentication method but want to allow users to continue using the method for authentication for existing devices.
 * @member {Boolean} pairingDisabled
 */
DeviceAuthenticationPolicyOfflineDevice.prototype['pairingDisabled'] = undefined;

/**
 * @member {module:model/DeviceAuthenticationPolicyOfflineDeviceOtp} otp
 */
DeviceAuthenticationPolicyOfflineDevice.prototype['otp'] = undefined;
export default DeviceAuthenticationPolicyOfflineDevice;