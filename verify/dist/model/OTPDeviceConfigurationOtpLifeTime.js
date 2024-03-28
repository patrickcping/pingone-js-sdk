/**
 * PingOne Platform API - PingOne Verify
 * The PingOne Platform API covering the PingOne Verify service
 *
 * The version of the OpenAPI document: 2023-07-20
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EnumTimeUnit from './EnumTimeUnit';

/**
 * The OTPDeviceConfigurationOtpLifeTime model module.
 * @module model/OTPDeviceConfigurationOtpLifeTime
 * @version 2023-07-20
 */
class OTPDeviceConfigurationOtpLifeTime {
  /**
   * Constructs a new <code>OTPDeviceConfigurationOtpLifeTime</code>.
   * The length of time for which the OTP is valid.
   * @alias module:model/OTPDeviceConfigurationOtpLifeTime
   * @param duration {Number} OTP duration configuration.
   * @param timeUnit {module:model/EnumTimeUnit} 
   */
  constructor(duration, timeUnit) {
    OTPDeviceConfigurationOtpLifeTime.initialize(this, duration, timeUnit);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, duration, timeUnit) {
    obj['duration'] = duration;
    obj['timeUnit'] = timeUnit;
  }

  /**
   * Constructs a <code>OTPDeviceConfigurationOtpLifeTime</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OTPDeviceConfigurationOtpLifeTime} obj Optional instance to populate.
   * @return {module:model/OTPDeviceConfigurationOtpLifeTime} The populated <code>OTPDeviceConfigurationOtpLifeTime</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OTPDeviceConfigurationOtpLifeTime();
      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
      }
      if (data.hasOwnProperty('timeUnit')) {
        obj['timeUnit'] = EnumTimeUnit.constructFromObject(data['timeUnit']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>OTPDeviceConfigurationOtpLifeTime</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OTPDeviceConfigurationOtpLifeTime</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of OTPDeviceConfigurationOtpLifeTime.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    return true;
  }
}
OTPDeviceConfigurationOtpLifeTime.RequiredProperties = ["duration", "timeUnit"];

/**
 * OTP duration configuration.
 * @member {Number} duration
 */
OTPDeviceConfigurationOtpLifeTime.prototype['duration'] = undefined;

/**
 * @member {module:model/EnumTimeUnit} timeUnit
 */
OTPDeviceConfigurationOtpLifeTime.prototype['timeUnit'] = undefined;
export default OTPDeviceConfigurationOtpLifeTime;