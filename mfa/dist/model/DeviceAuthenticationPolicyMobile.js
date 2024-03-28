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
import DeviceAuthenticationPolicyMobileApplicationsInner from './DeviceAuthenticationPolicyMobileApplicationsInner';
import DeviceAuthenticationPolicyMobileOtp from './DeviceAuthenticationPolicyMobileOtp';

/**
 * The DeviceAuthenticationPolicyMobile model module.
 * @module model/DeviceAuthenticationPolicyMobile
 * @version 2023-06-29
 */
class DeviceAuthenticationPolicyMobile {
  /**
   * Constructs a new <code>DeviceAuthenticationPolicyMobile</code>.
   * Mobile device authentication policy settings.
   * @alias module:model/DeviceAuthenticationPolicyMobile
   * @param enabled {Boolean} A boolean that specifies whether the method is enabled or disabled in the policy.
   * @param otp {module:model/DeviceAuthenticationPolicyMobileOtp} 
   */
  constructor(enabled, otp) {
    DeviceAuthenticationPolicyMobile.initialize(this, enabled, otp);
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
   * Constructs a <code>DeviceAuthenticationPolicyMobile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceAuthenticationPolicyMobile} obj Optional instance to populate.
   * @return {module:model/DeviceAuthenticationPolicyMobile} The populated <code>DeviceAuthenticationPolicyMobile</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DeviceAuthenticationPolicyMobile();
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('otp')) {
        obj['otp'] = DeviceAuthenticationPolicyMobileOtp.constructFromObject(data['otp']);
      }
      if (data.hasOwnProperty('applications')) {
        obj['applications'] = ApiClient.convertToType(data['applications'], [DeviceAuthenticationPolicyMobileApplicationsInner]);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>DeviceAuthenticationPolicyMobile</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeviceAuthenticationPolicyMobile</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of DeviceAuthenticationPolicyMobile.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    // validate the optional field `otp`
    if (data['otp']) {
      // data not null
      DeviceAuthenticationPolicyMobileOtp.validateJSON(data['otp']);
    }
    if (data['applications']) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data['applications'])) {
        throw new Error("Expected the field `applications` to be an array in the JSON data but got " + data['applications']);
      }
      // validate the optional field `applications` (array)
      for (const item of data['applications']) {
        DeviceAuthenticationPolicyMobileApplicationsInner.validateJSON(item);
      }
      ;
    }
    return true;
  }
}
DeviceAuthenticationPolicyMobile.RequiredProperties = ["enabled", "otp"];

/**
 * A boolean that specifies whether the method is enabled or disabled in the policy.
 * @member {Boolean} enabled
 */
DeviceAuthenticationPolicyMobile.prototype['enabled'] = undefined;

/**
 * @member {module:model/DeviceAuthenticationPolicyMobileOtp} otp
 */
DeviceAuthenticationPolicyMobile.prototype['otp'] = undefined;

/**
 * @member {Array.<module:model/DeviceAuthenticationPolicyMobileApplicationsInner>} applications
 */
DeviceAuthenticationPolicyMobile.prototype['applications'] = undefined;
export default DeviceAuthenticationPolicyMobile;