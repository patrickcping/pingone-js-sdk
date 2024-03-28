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
import OTPDeviceConfigurationOtpAttempts from './OTPDeviceConfigurationOtpAttempts';
import OTPDeviceConfigurationOtpDeliveries from './OTPDeviceConfigurationOtpDeliveries';
import OTPDeviceConfigurationOtpLifeTime from './OTPDeviceConfigurationOtpLifeTime';
import OTPDeviceConfigurationOtpNotification from './OTPDeviceConfigurationOtpNotification';

/**
 * The OTPDeviceConfigurationOtp model module.
 * @module model/OTPDeviceConfigurationOtp
 * @version 2023-07-20
 */
class OTPDeviceConfigurationOtp {
  /**
   * Constructs a new <code>OTPDeviceConfigurationOtp</code>.
   * @alias module:model/OTPDeviceConfigurationOtp
   * @param attempts {module:model/OTPDeviceConfigurationOtpAttempts} 
   * @param deliveries {module:model/OTPDeviceConfigurationOtpDeliveries} 
   * @param lifeTime {module:model/OTPDeviceConfigurationOtpLifeTime} 
   * @param notification {module:model/OTPDeviceConfigurationOtpNotification} 
   */
  constructor(attempts, deliveries, lifeTime, notification) {
    OTPDeviceConfigurationOtp.initialize(this, attempts, deliveries, lifeTime, notification);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, attempts, deliveries, lifeTime, notification) {
    obj['attempts'] = attempts;
    obj['deliveries'] = deliveries;
    obj['lifeTime'] = lifeTime;
    obj['notification'] = notification;
  }

  /**
   * Constructs a <code>OTPDeviceConfigurationOtp</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OTPDeviceConfigurationOtp} obj Optional instance to populate.
   * @return {module:model/OTPDeviceConfigurationOtp} The populated <code>OTPDeviceConfigurationOtp</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OTPDeviceConfigurationOtp();
      if (data.hasOwnProperty('attempts')) {
        obj['attempts'] = OTPDeviceConfigurationOtpAttempts.constructFromObject(data['attempts']);
      }
      if (data.hasOwnProperty('deliveries')) {
        obj['deliveries'] = OTPDeviceConfigurationOtpDeliveries.constructFromObject(data['deliveries']);
      }
      if (data.hasOwnProperty('lifeTime')) {
        obj['lifeTime'] = OTPDeviceConfigurationOtpLifeTime.constructFromObject(data['lifeTime']);
      }
      if (data.hasOwnProperty('notification')) {
        obj['notification'] = OTPDeviceConfigurationOtpNotification.constructFromObject(data['notification']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>OTPDeviceConfigurationOtp</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OTPDeviceConfigurationOtp</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of OTPDeviceConfigurationOtp.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    // validate the optional field `attempts`
    if (data['attempts']) {
      // data not null
      OTPDeviceConfigurationOtpAttempts.validateJSON(data['attempts']);
    }
    // validate the optional field `deliveries`
    if (data['deliveries']) {
      // data not null
      OTPDeviceConfigurationOtpDeliveries.validateJSON(data['deliveries']);
    }
    // validate the optional field `lifeTime`
    if (data['lifeTime']) {
      // data not null
      OTPDeviceConfigurationOtpLifeTime.validateJSON(data['lifeTime']);
    }
    // validate the optional field `notification`
    if (data['notification']) {
      // data not null
      OTPDeviceConfigurationOtpNotification.validateJSON(data['notification']);
    }
    return true;
  }
}
OTPDeviceConfigurationOtp.RequiredProperties = ["attempts", "deliveries", "lifeTime", "notification"];

/**
 * @member {module:model/OTPDeviceConfigurationOtpAttempts} attempts
 */
OTPDeviceConfigurationOtp.prototype['attempts'] = undefined;

/**
 * @member {module:model/OTPDeviceConfigurationOtpDeliveries} deliveries
 */
OTPDeviceConfigurationOtp.prototype['deliveries'] = undefined;

/**
 * @member {module:model/OTPDeviceConfigurationOtpLifeTime} lifeTime
 */
OTPDeviceConfigurationOtp.prototype['lifeTime'] = undefined;

/**
 * @member {module:model/OTPDeviceConfigurationOtpNotification} notification
 */
OTPDeviceConfigurationOtp.prototype['notification'] = undefined;
export default OTPDeviceConfigurationOtp;